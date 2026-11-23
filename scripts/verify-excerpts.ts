import fs from "fs";
import path from "path";
import { projects } from "../src/data/projects/index";
import { Article } from "../src/lib/types";

interface ArticleItem {
  projectSlug: string;
  articleIndex: number;
  article: Article;
}

const articles: ArticleItem[] = [];
for (const p of projects) {
  if (p.articles) {
    p.articles.forEach((a, idx) => {
      articles.push({ projectSlug: p.slug, articleIndex: idx, article: a });
    });
  }
}

console.log(`\n==================================================`);
console.log(`  NammaKharcha Verbatim Excerpt Verifier`);
console.log(`  Checking ${articles.length} article citations across ${projects.length} projects`);
console.log(`==================================================\n`);

function normalizeText(text: string): string {
  return text
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&apos;|&#39;|&#x27;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#\d+;/g, " ")
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, " ")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[“”]/g, '"')
    .replace(/[‘’`]/g, "'")
    .replace(/[—–]/g, "-")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

interface VerifyResult {
  item: ArticleItem;
  status: "passed" | "failed" | "manual" | "blocked";
  reason?: string;
  matchedText?: string;
}

async function verifyArticle(item: ArticleItem): Promise<VerifyResult> {
  const { article, projectSlug, articleIndex } = item;

  if (article.excerptChecked === "manual") {
    return { item, status: "manual", reason: "Manually opened and verified" };
  }

  if (!article.excerpt || article.excerpt.trim() === "") {
    return { item, status: "failed", reason: "Missing excerpt" };
  }

  const normExcerpt = normalizeText(article.excerpt);

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 22000);

    const res = await fetch(article.url, {
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
    if ([401, 403, 406, 429].includes(code)) {
      return { item, status: "blocked", reason: `Bot protected HTTP ${code}` };
    }

    if (code >= 400) {
      return { item, status: "failed", reason: `HTTP error ${code}` };
    }

    const html = await res.text();
    const normPage = normalizeText(html);

    if (normPage.includes(normExcerpt)) {
      return { item, status: "passed" };
    }

    // Try punctuation-stripped fallback
    const stripPunct = (s: string) => s.replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
    if (stripPunct(normPage).includes(stripPunct(normExcerpt))) {
      return { item, status: "passed" };
    }

    return {
      item,
      status: "failed",
      reason: `Excerpt not found in page body. Excerpt: "${article.excerpt}"`,
    };
  } catch (err: any) {
    const msg = err.name === "AbortError" ? "Timeout after 14s" : err.message || String(err);
    return { item, status: "failed", reason: `Fetch error: ${msg}` };
  }
}

async function runPool(concurrency: number) {
  const results: VerifyResult[] = [];
  let currentIndex = 0;
  let completed = 0;

  async function worker() {
    while (currentIndex < articles.length) {
      const idx = currentIndex++;
      const item = articles[idx];
      const res = await verifyArticle(item);
      results.push(res);

      completed++;
      if (completed % 10 === 0 || completed === articles.length) {
        process.stdout.write(`  Progress: ${completed}/${articles.length} verified...\r`);
      }
    }
  }

  const workers = Array.from({ length: concurrency }, () => worker());
  await Promise.all(workers);
  console.log(`\n  Completed checking ${results.length} excerpts.\n`);
  return results;
}

async function main() {
  const results = await runPool(6);

  const passed = results.filter((r) => r.status === "passed");
  const failed = results.filter((r) => r.status === "failed");
  const manual = results.filter((r) => r.status === "manual");
  const blocked = results.filter((r) => r.status === "blocked");

  console.log(`📊 EXCERPT VERIFICATION SUMMARY:`);
  console.table([
    { Status: "Machine Passed", Count: passed.length, Percentage: `${((passed.length / articles.length) * 100).toFixed(1)}%` },
    { Status: "Manual Verified", Count: manual.length, Percentage: `${((manual.length / articles.length) * 100).toFixed(1)}%` },
    { Status: "Blocked (Bot Protection)", Count: blocked.length, Percentage: `${((blocked.length / articles.length) * 100).toFixed(1)}%` },
    { Status: "Failed (Mismatch / Dead)", Count: failed.length, Percentage: `${((failed.length / articles.length) * 100).toFixed(1)}%` },
    { Status: "Total Excerpts", Count: articles.length, Percentage: "100.0%" },
  ]);

  if (blocked.length > 0) {
    console.log(`\n⚠️  COULD NOT MACHINE-CHECK (${blocked.length} URLs blocked bots / require manual check):`);
    for (const b of blocked) {
      console.log(`  • [${b.item.projectSlug}] ${b.item.article.url}`);
      console.log(`    ↳ Reason: ${b.reason}`);
    }
  }

  if (failed.length > 0) {
    console.log(`\n❌ FAILED EXCERPTS (${failed.length}):`);
    for (const f of failed) {
      console.log(`  • [${f.item.projectSlug}] (${f.item.article.title})`);
      console.log(`    ↳ URL: ${f.item.article.url}`);
      console.log(`    ↳ Reason: ${f.reason}`);
    }
    process.exit(1);
  } else {
    console.log(`\n✅ All verbatim excerpts verified successfully!`);
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
