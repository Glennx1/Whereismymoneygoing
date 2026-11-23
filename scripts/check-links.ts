import fs from "fs";
import path from "path";
import { projects } from "../src/data/projects/index";

export type LinkStatusClass = "ok" | "dead" | "blocked" | "error";

export interface LinkOccurrence {
  projectSlug: string;
  location: string;
}

export interface LinkCheckResult {
  url: string;
  statusClass: LinkStatusClass;
  statusCode?: number;
  errorMessage?: string;
  domain: string;
  occurrences: LinkOccurrence[];
}

export interface LinkReport {
  timestamp: string;
  totalUrls: number;
  uniqueUrls: number;
  summary: {
    ok: number;
    dead: number;
    blocked: number;
    error: number;
  };
  byDomain: Record<string, { total: number; ok: number; dead: number; blocked: number; error: number }>;
  deadLinks: { url: string; statusCode?: number; occurrences: LinkOccurrence[] }[];
  blockedLinks: { url: string; statusCode?: number; occurrences: LinkOccurrence[] }[];
  errorLinks: { url: string; error?: string; occurrences: LinkOccurrence[] }[];
  allResults: LinkCheckResult[];
}

// 1. Gather all URLs with their occurrences
const urlMap = new Map<string, LinkOccurrence[]>();

function registerUrl(url: string | undefined | null, projectSlug: string, location: string) {
  if (!url || typeof url !== "string") return;
  const trimmed = url.trim();
  if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) return;

  if (!urlMap.has(trimmed)) {
    urlMap.set(trimmed, []);
  }
  urlMap.get(trimmed)!.push({ projectSlug, location });
}

for (const p of projects) {
  // articles
  if (p.articles) {
    p.articles.forEach((a, idx) => {
      registerUrl(a.url, p.slug, `articles[${idx}] ('${a.title}')`);
    });
  }

  // officialDocLinks
  if (p.officialDocLinks) {
    p.officialDocLinks.forEach((doc, idx) => {
      registerUrl(doc.url, p.slug, `officialDocLinks[${idx}] ('${doc.label}')`);
    });
  }

  // milestones
  if (p.milestones) {
    p.milestones.forEach((m, idx) => {
      registerUrl(m.source?.url, p.slug, `milestones[${idx}].source ('${m.stageName}')`);
    });
  }

  // redFlags
  if (p.redFlags) {
    p.redFlags.forEach((rf, idx) => {
      registerUrl(rf.officialCitation?.documentUrl, p.slug, `redFlags[${idx}].officialCitation ('${rf.title}')`);
    });
  }

  // dataQuality.fields
  if (p.dataQuality?.fields) {
    for (const [field, check] of Object.entries(p.dataQuality.fields)) {
      if (check?.sources) {
        check.sources.forEach((s, idx) => {
          registerUrl(s.url, p.slug, `dataQuality.fields.${field}.sources[${idx}] ('${s.label}')`);
        });
      }
    }
  }
}

const uniqueUrls = Array.from(urlMap.keys());
let totalOccurrences = 0;
for (const occs of Array.from(urlMap.values())) {
  totalOccurrences += occs.length;
}

console.log(`\n==================================================`);
console.log(`  NammaKharcha Link Integrity Checker`);
console.log(`  Checking ${uniqueUrls.length} unique URLs across ${totalOccurrences} occurrences in ${projects.length} projects`);
console.log(`==================================================\n`);

function getDomain(urlStr: string): string {
  try {
    const parsed = new URL(urlStr);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return "invalid-url";
  }
}

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

async function checkUrl(url: string): Promise<{ statusClass: LinkStatusClass; statusCode?: number; errorMessage?: string }> {
  const timeoutMs = 12000;

  // Try HEAD first
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    const headRes = await fetch(url, {
      method: "HEAD",
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
      },
      redirect: "follow",
      signal: controller.signal,
    });
    clearTimeout(timer);

    const code = headRes.status;
    if (code >= 200 && code < 300) {
      return { statusClass: "ok", statusCode: code };
    }
    if (code === 404 || code === 410) {
      return { statusClass: "dead", statusCode: code };
    }
    if ([401, 403, 406, 429].includes(code)) {
      return { statusClass: "blocked", statusCode: code };
    }
    // 405 Method Not Allowed or 400 or other errors: fallback to GET
    if (code === 405 || code === 400 || (code >= 500 && code < 600)) {
      // Fall through to GET below
    } else {
      return { statusClass: "error", statusCode: code, errorMessage: `HTTP ${code}` };
    }
  } catch (err: any) {
    // If HEAD failed with network error or abort, try GET once before giving up
  }

  // GET Fallback (with body cancellation / streaming abort)
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    const getRes = await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
        Range: "bytes=0-1024", // Request just the start
      },
      redirect: "follow",
      signal: controller.signal,
    });
    clearTimeout(timer);

    // Cancel body consumption immediately
    try {
      getRes.body?.cancel();
    } catch {}

    const code = getRes.status;
    if (code >= 200 && code < 300 || code === 206) {
      return { statusClass: "ok", statusCode: code };
    }
    if (code === 404 || code === 410) {
      return { statusClass: "dead", statusCode: code };
    }
    if ([401, 403, 406, 429].includes(code)) {
      return { statusClass: "blocked", statusCode: code };
    }
    return { statusClass: "error", statusCode: code, errorMessage: `HTTP ${code}` };
  } catch (err: any) {
    const msg = err.name === "AbortError" ? "Timeout after 12s" : err.message || String(err);
    return { statusClass: "error", errorMessage: msg };
  }
}

// Concurrency pool
async function runPool(concurrency: number) {
  const results: LinkCheckResult[] = [];
  let currentIndex = 0;
  let completed = 0;

  async function worker() {
    while (currentIndex < uniqueUrls.length) {
      const idx = currentIndex++;
      const url = uniqueUrls[idx];
      const domain = getDomain(url);
      const res = await checkUrl(url);
      const occurrences = urlMap.get(url) || [];

      results.push({
        url,
        domain,
        statusClass: res.statusClass,
        statusCode: res.statusCode,
        errorMessage: res.errorMessage,
        occurrences,
      });

      completed++;
      if (completed % 15 === 0 || completed === uniqueUrls.length) {
        process.stdout.write(`  Progress: ${completed}/${uniqueUrls.length} checked...\r`);
      }
    }
  }

  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);
  console.log(`\n  Completed checking ${results.length} URLs.\n`);
  return results;
}

async function main() {
  const startTime = Date.now();
  const results = await runPool(10);

  const summary = { ok: 0, dead: 0, blocked: 0, error: 0 };
  const byDomain: Record<string, { total: number; ok: number; dead: number; blocked: number; error: number }> = {};
  const deadLinks: LinkReport["deadLinks"] = [];
  const blockedLinks: LinkReport["blockedLinks"] = [];
  const errorLinks: LinkReport["errorLinks"] = [];

  for (const r of results) {
    summary[r.statusClass]++;

    if (!byDomain[r.domain]) {
      byDomain[r.domain] = { total: 0, ok: 0, dead: 0, blocked: 0, error: 0 };
    }
    byDomain[r.domain].total++;
    byDomain[r.domain][r.statusClass]++;

    if (r.statusClass === "dead") {
      deadLinks.push({ url: r.url, statusCode: r.statusCode, occurrences: r.occurrences });
    } else if (r.statusClass === "blocked") {
      blockedLinks.push({ url: r.url, statusCode: r.statusCode, occurrences: r.occurrences });
    } else if (r.statusClass === "error") {
      errorLinks.push({ url: r.url, error: r.errorMessage, occurrences: r.occurrences });
    }
  }

  const report: LinkReport = {
    timestamp: new Date().toISOString(),
    totalUrls: totalOccurrences,
    uniqueUrls: results.length,
    summary,
    byDomain,
    deadLinks,
    blockedLinks,
    errorLinks,
    allResults: results,
  };

  const docsDir = path.resolve(process.cwd(), "docs");
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
  }

  const reportPath = path.join(docsDir, "link-report.json");
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf8");

  console.log(`📊 SUMMARY OF LINK AUDIT:`);
  console.log(`┌─────────────┬───────┬────────────┐`);
  console.log(`│ Category    │ Count │ Percentage │`);
  console.log(`├─────────────┼───────┼────────────┤`);
  console.log(`│ OK (2xx)    │ ${String(summary.ok).padStart(5)} │ ${(summary.ok / results.length * 100).toFixed(1).padStart(9)}% │`);
  console.log(`│ Dead (404)  │ ${String(summary.dead).padStart(5)} │ ${(summary.dead / results.length * 100).toFixed(1).padStart(9)}% │`);
  console.log(`│ Blocked     │ ${String(summary.blocked).padStart(5)} │ ${(summary.blocked / results.length * 100).toFixed(1).padStart(9)}% │`);
  console.log(`│ Error/TO    │ ${String(summary.error).padStart(5)} │ ${(summary.error / results.length * 100).toFixed(1).padStart(9)}% │`);
  console.log(`├─────────────┼───────┼────────────┤`);
  console.log(`│ Total URLs  │ ${String(results.length).padStart(5)} │    100.0%  │`);
  console.log(`└─────────────┴───────┴────────────┘\n`);

  console.log(`🌐 TOP DOMAINS BY DEAD LINKS:`);
  const domainEntries = Object.entries(byDomain)
    .sort((a, b) => b[1].dead - a[1].dead || b[1].total - a[1].total)
    .slice(0, 15);

  console.log(`┌────────────────────────────────────┬───────┬──────┬──────┬─────────┐`);
  console.log(`│ Domain                             │ Total │  OK  │ Dead │ Blocked │`);
  console.log(`├────────────────────────────────────┼───────┼──────┼──────┼─────────┤`);
  for (const [dom, stats] of domainEntries) {
    console.log(
      `│ ${dom.padEnd(34).slice(0, 34)} │ ${String(stats.total).padStart(5)} │ ${String(stats.ok).padStart(4)} │ ${String(stats.dead).padStart(4)} │ ${String(stats.blocked).padStart(7)} │`
    );
  }
  console.log(`└────────────────────────────────────┴───────┴──────┴──────┴─────────┘\n`);

  if (deadLinks.length > 0) {
    console.log(`❌ Found ${deadLinks.length} DEAD links. Detailed report written to docs/link-report.json\n`);
  } else {
    console.log(`✅ Zero dead links found! Excellent work.\n`);
  }
}

main().catch((err) => {
  console.error("Link check crashed:", err);
  process.exit(1);
});
