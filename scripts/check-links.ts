import fs from "fs";
import path from "path";
import { projects } from "../src/data/projects/index";

export type LinkStatusClass = "ok" | "dead" | "blocked" | "unreachable" | "error";

export interface LinkOccurrence {
  projectSlug: string;
  location: string;
  expectedTitle?: string;
}

export interface LinkCheckResult {
  url: string;
  finalUrl?: string;
  statusClass: LinkStatusClass;
  statusCode?: number;
  pageTitle?: string;
  deadReason?: string;
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
    unreachable: number;
    error: number;
  };
  byDomain: Record<string, { total: number; ok: number; dead: number; blocked: number; unreachable: number; error: number }>;
  deadLinks: {
    url: string;
    finalUrl?: string;
    statusCode?: number;
    pageTitle?: string;
    deadReason?: string;
    occurrences: LinkOccurrence[];
  }[];
  blockedLinks: { url: string; statusCode?: number; occurrences: LinkOccurrence[] }[];
  unreachableLinks: { url: string; error?: string; occurrences: LinkOccurrence[] }[];
  allResults: LinkCheckResult[];
}

// 1. Gather all URLs with their occurrences & expected titles
const urlMap = new Map<string, LinkOccurrence[]>();

function registerUrl(
  url: string | undefined | null,
  projectSlug: string,
  location: string,
  expectedTitle?: string
) {
  if (!url || typeof url !== "string") return;
  const trimmed = url.trim();
  if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) return;

  if (!urlMap.has(trimmed)) {
    urlMap.set(trimmed, []);
  }
  urlMap.get(trimmed)!.push({ projectSlug, location, expectedTitle });
}

for (const p of projects) {
  if (p.articles) {
    p.articles.forEach((a, idx) => {
      registerUrl(a.url, p.slug, `articles[${idx}]`, a.title);
    });
  }

  if (p.officialDocLinks) {
    p.officialDocLinks.forEach((doc, idx) => {
      registerUrl(doc.url, p.slug, `officialDocLinks[${idx}]`, doc.label);
    });
  }

  if (p.milestones) {
    p.milestones.forEach((m, idx) => {
      registerUrl(m.source?.url, p.slug, `milestones[${idx}].source`, m.stageName);
    });
  }

  if (p.redFlags) {
    p.redFlags.forEach((rf, idx) => {
      registerUrl(rf.officialCitation?.documentUrl, p.slug, `redFlags[${idx}].officialCitation`, rf.title);
    });
  }

  if (p.dataQuality?.fields) {
    for (const [field, check] of Object.entries(p.dataQuality.fields)) {
      if (check?.sources) {
        check.sources.forEach((s, idx) => {
          registerUrl(s.url, p.slug, `dataQuality.fields.${field}.sources[${idx}]`, s.label);
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
console.log(`  NammaKharcha Link Integrity Checker (with Soft-404 Detection)`);
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

function extractSlug(urlStr: string): string {
  try {
    const parsed = new URL(urlStr);
    let pathname = parsed.pathname;
    // Strip trailing slashes, amp, extensions
    pathname = pathname.replace(/\/amp\/?$/, "").replace(/\/+$/, "");
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) return "";
    let last = segments[segments.length - 1];
    // Remove .ece, .html, .cms, etc.
    last = last.replace(/\.(ece|html|htm|cms|php)$/i, "");
    // If the last segment is purely numeric or article<digits>, the slug is the preceding segment
    if (/^(article)?\d+$/i.test(last) && segments.length > 1) {
      last = segments[segments.length - 2];
    }
    return decodeURIComponent(last).toLowerCase();
  } catch {
    return "";
  }
}

function getSignificantWords(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length >= 4);
}

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

async function checkUrl(
  url: string,
  occurrences: LinkOccurrence[]
): Promise<{
  statusClass: LinkStatusClass;
  statusCode?: number;
  finalUrl?: string;
  pageTitle?: string;
  deadReason?: string;
  errorMessage?: string;
}> {
  const timeoutMs = 14000;

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    const res = await fetch(url, {
      method: "GET",
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
        "Accept-Language": "en-US,en;q=0.9",
      },
      redirect: "follow",
      signal: controller.signal,
    });
    clearTimeout(timer);

    const code = res.status;
    const finalUrl = res.url || url;

    // Check blocked status
    if ([401, 403, 406, 429].includes(code)) {
      return { statusClass: "blocked", statusCode: code, finalUrl };
    }

    // Direct HTTP 404 / 410
    if (code === 404 || code === 410) {
      return {
        statusClass: "dead",
        statusCode: code,
        finalUrl,
        deadReason: `HTTP ${code} status code`,
      };
    }

    if (code >= 500) {
      return { statusClass: "error", statusCode: code, finalUrl, errorMessage: `Server error HTTP ${code}` };
    }

    // Read body text to extract page title
    const bodyText = await res.text();
    const titleMatch = bodyText.match(/<title[^>]*>([^<]+)<\/title>/i);
    const pageTitle = titleMatch ? titleMatch[1].replace(/\s+/g, " ").trim() : "";

    // 1. Check if finalUrl indicates not-found
    const finalPath = new URL(finalUrl).pathname.toLowerCase();
    if (
      finalPath.includes("not-found") ||
      finalPath.includes("page-not-found") ||
      finalPath.includes("/404") ||
      finalPath.includes("/error")
    ) {
      return {
        statusClass: "dead",
        statusCode: code,
        finalUrl,
        pageTitle,
        deadReason: `Redirected to error/not-found path: ${finalPath}`,
      };
    }

    // Check page title itself for "Page Not Found" / 404
    const pageTitleLower = pageTitle.toLowerCase();
    if (
      pageTitleLower.includes("page not found") ||
      pageTitleLower.includes("404 -") ||
      pageTitleLower.includes("404 not found") ||
      pageTitleLower.includes("error 404")
    ) {
      return {
        statusClass: "dead",
        statusCode: code,
        finalUrl,
        pageTitle,
        deadReason: `Page title indicates 404/not found: "${pageTitle}"`,
      };
    }

    // 2. Slug comparison (if finalUrl was redirected)
    const originalSlug = extractSlug(url);
    const finalSlug = extractSlug(finalUrl);

    if (originalSlug && finalSlug && originalSlug !== finalSlug) {
      // Check if original and final are fundamentally different articles
      const origWords = getSignificantWords(originalSlug);
      const finalWords = getSignificantWords(finalSlug);

      if (origWords.length > 0 && finalWords.length > 0) {
        const overlap = origWords.filter((w) => finalWords.includes(w));
        const overlapRatio = overlap.length / Math.min(origWords.length, finalWords.length);

        // If slugs have virtually no word overlap (e.g. car-accident vs yellow-line)
        if (overlapRatio < 0.25) {
          return {
            statusClass: "dead",
            statusCode: code,
            finalUrl,
            pageTitle,
            deadReason: `Redirected to unrelated slug: '${originalSlug}' -> '${finalSlug}'`,
          };
        }
      }
    }

    // 3. Article Title comparison with expected titles (only for articles)
    const isDeepLink = new URL(url).pathname.length > 1;
    const articleTitle = occurrences
      .filter((o) => o.location.startsWith("articles["))
      .map((o) => o.expectedTitle)
      .find((t) => t && t.length > 5);

    if (isDeepLink && articleTitle && pageTitle) {
      const citedWords = getSignificantWords(articleTitle);
      if (citedWords.length >= 3) {
        const matchedWords = citedWords.filter((w) => pageTitleLower.includes(w));
        const matchRatio = matchedWords.length / citedWords.length;

        // If page title shares fewer than 40% of cited article title's significant words
        if (matchRatio < 0.4) {
          // If domain is PIB, PRID pages have generic title "Press Release Page"
          if (finalUrl.includes("pib.gov.in")) {
            return { statusClass: "ok", statusCode: code, finalUrl, pageTitle };
          }

          const bodyLower = bodyText.toLowerCase();
          const bodyMatches = citedWords.filter((w) => bodyLower.includes(w));
          const bodyRatio = bodyMatches.length / citedWords.length;

          // If body also doesn't contain at least 40% of the cited words, it's an unrelated article
          if (bodyRatio < 0.4) {
            return {
              statusClass: "dead",
              statusCode: code,
              finalUrl,
              pageTitle,
              deadReason: `Neither title (${(matchRatio * 100).toFixed(0)}%) nor body (${(bodyRatio * 100).toFixed(0)}%) matches expected article: "${articleTitle}" (Got page title: "${pageTitle}")`,
            };
          }
        }
      }
    }

    return {
      statusClass: "ok",
      statusCode: code,
      finalUrl,
      pageTitle,
    };
  } catch (err: any) {
    if (err.name === "AbortError") {
      return { statusClass: "unreachable", errorMessage: "Timeout after 14s" };
    }
    const msg = err.message || String(err);
    if (msg.includes("ENOTFOUND") || msg.includes("ECONNREFUSED") || msg.includes("EAI_AGAIN")) {
      return { statusClass: "unreachable", errorMessage: msg };
    }
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
      const occurrences = urlMap.get(url) || [];
      const res = await checkUrl(url, occurrences);

      results.push({
        url,
        finalUrl: res.finalUrl,
        domain,
        statusClass: res.statusClass,
        statusCode: res.statusCode,
        pageTitle: res.pageTitle,
        deadReason: res.deadReason,
        errorMessage: res.errorMessage,
        occurrences,
      });

      completed++;
      if (completed % 10 === 0 || completed === uniqueUrls.length) {
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
  const results = await runPool(8);

  const summary = { ok: 0, dead: 0, blocked: 0, unreachable: 0, error: 0 };
  const byDomain: Record<
    string,
    { total: number; ok: number; dead: number; blocked: number; unreachable: number; error: number }
  > = {};
  const deadLinks: LinkReport["deadLinks"] = [];
  const blockedLinks: LinkReport["blockedLinks"] = [];
  const unreachableLinks: LinkReport["unreachableLinks"] = [];

  for (const r of results) {
    summary[r.statusClass]++;

    if (!byDomain[r.domain]) {
      byDomain[r.domain] = { total: 0, ok: 0, dead: 0, blocked: 0, unreachable: 0, error: 0 };
    }
    byDomain[r.domain].total++;
    byDomain[r.domain][r.statusClass]++;

    if (r.statusClass === "dead") {
      deadLinks.push({
        url: r.url,
        finalUrl: r.finalUrl,
        statusCode: r.statusCode,
        pageTitle: r.pageTitle,
        deadReason: r.deadReason,
        occurrences: r.occurrences,
      });
    } else if (r.statusClass === "blocked") {
      blockedLinks.push({
        url: r.url,
        statusCode: r.statusCode,
        occurrences: r.occurrences,
      });
    } else if (r.statusClass === "unreachable" || r.statusClass === "error") {
      unreachableLinks.push({
        url: r.url,
        error: r.errorMessage,
        occurrences: r.occurrences,
      });
    }
  }

  // Write reports
  const docsDir = path.join(process.cwd(), "docs");
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
  }

  const report: LinkReport = {
    timestamp: new Date().toISOString(),
    totalUrls: totalOccurrences,
    uniqueUrls: uniqueUrls.length,
    summary,
    byDomain,
    deadLinks,
    blockedLinks,
    unreachableLinks,
    allResults: results,
  };

  const reportPath = path.join(docsDir, "link-report.json");
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), "utf8");
  console.log(`📄 Saved detailed report to ${reportPath}\n`);

  // Print Summary Table
  console.log(`📊 SUMMARY OF LINK AUDIT:`);
  console.table([
    { Category: "OK (2xx)", Count: summary.ok, Percentage: `${((summary.ok / uniqueUrls.length) * 100).toFixed(1)}%` },
    { Category: "Dead (404/Soft-404)", Count: summary.dead, Percentage: `${((summary.dead / uniqueUrls.length) * 100).toFixed(1)}%` },
    { Category: "Blocked (Bot Protection)", Count: summary.blocked, Percentage: `${((summary.blocked / uniqueUrls.length) * 100).toFixed(1)}%` },
    { Category: "Unreachable (Timeout/DNS)", Count: summary.unreachable, Percentage: `${((summary.unreachable / uniqueUrls.length) * 100).toFixed(1)}%` },
    { Category: "Other Errors", Count: summary.error, Percentage: `${((summary.error / uniqueUrls.length) * 100).toFixed(1)}%` },
    { Category: "Total URLs", Count: uniqueUrls.length, Percentage: "100.0%" },
  ]);

  if (deadLinks.length > 0) {
    console.log(`\n❌ FOUND ${deadLinks.length} DEAD / SOFT-404 LINKS:`);
    for (const d of deadLinks) {
      console.log(`\n  • Cited: ${d.url}`);
      if (d.finalUrl && d.finalUrl !== d.url) {
        console.log(`    ↳ Final URL: ${d.finalUrl}`);
      }
      if (d.pageTitle) {
        console.log(`    ↳ Page Title: "${d.pageTitle}"`);
      }
      console.log(`    ↳ Reason: ${d.deadReason}`);
      console.log(`    ↳ Occurrences: ${d.occurrences.map((o) => `${o.projectSlug} (${o.location})`).join(", ")}`);
    }

    // Update docs/dead-links.json with new dead URLs
    const deadListPath = path.join(docsDir, "dead-links.json");
    let existingDead: string[] = [];
    if (fs.existsSync(deadListPath)) {
      try {
        existingDead = JSON.parse(fs.readFileSync(deadListPath, "utf8"));
      } catch {}
    }
    const combinedDead = Array.from(new Set([...existingDead, ...deadLinks.map((d) => d.url)]));
    fs.writeFileSync(deadListPath, JSON.stringify(combinedDead, null, 2), "utf8");
    console.log(`\n⚠️  Updated ${deadListPath} (now tracking ${combinedDead.length} known dead URLs).`);

    process.exit(1);
  } else {
    console.log(`\n✅ Zero dead or soft-404 links found!`);
  }
}

main().catch((err) => {
  console.error("Fatal error running check-links:", err);
  process.exit(1);
});
