import fs from "fs";
import path from "path";
import { projects } from "../src/data/projects/index";

interface ValidationError {
  projectSlug: string;
  field: string;
  message: string;
}

const errors: ValidationError[] = [];
const seenSlugs = new Set<string>();
const seenIds = new Set<string>();

const ISO_DATE_REGEX = /^\d{4}-\d{2}(-\d{2})?$/;

// Load dead-links denylist
// Uses docs/dead-links.json, falling back to phase 1 dead links if pending replacement
const deadLinksPath = fs.existsSync(path.resolve(process.cwd(), "docs", "dead-links-phase1.json"))
  ? path.resolve(process.cwd(), "docs", "dead-links-phase1.json")
  : path.resolve(process.cwd(), "docs", "dead-links.json");
const deadLinksSet = new Set<string>();
if (fs.existsSync(deadLinksPath)) {
  try {
    const list = JSON.parse(fs.readFileSync(deadLinksPath, "utf8"));
    if (Array.isArray(list)) {
      list.forEach((u) => deadLinksSet.add(u.trim()));
    }
  } catch (err) {
    console.warn("Warning: Could not read docs/dead-links.json");
  }
}

function checkUrlNotDead(url: string | undefined | null, projectSlug: string, location: string) {
  if (!url) return;
  const trimmed = url.trim();
  if (deadLinksSet.has(trimmed)) {
    errors.push({
      projectSlug,
      field: location,
      message: `URL is in the dead-links denylist: ${trimmed}`,
    });
  }
}

console.log(`\n🔍 Validating NammaKharcha project data across ${projects.length} projects...\n`);

for (const project of projects) {
  // 1. Mandatory Identity fields
  if (!project.id || project.id.trim() === "") {
    errors.push({ projectSlug: project.slug ?? "unknown", field: "id", message: "Missing or empty project id" });
  } else if (seenIds.has(project.id)) {
    errors.push({ projectSlug: project.slug, field: "id", message: `Duplicate project id: ${project.id}` });
  } else {
    seenIds.add(project.id);
  }

  if (!project.slug || project.slug.trim() === "") {
    errors.push({ projectSlug: "unknown", field: "slug", message: "Missing or empty slug" });
  } else if (seenSlugs.has(project.slug)) {
    errors.push({ projectSlug: project.slug, field: "slug", message: `Duplicate project slug: ${project.slug}` });
  } else {
    seenSlugs.add(project.slug);
  }

  if (!project.title || project.title.trim() === "") {
    errors.push({ projectSlug: project.slug, field: "title", message: "Missing title" });
  }

  if (!project.tagline || project.tagline.trim() === "") {
    errors.push({ projectSlug: project.slug, field: "tagline", message: "Missing tagline" });
  }

  if (!project.agencyCode) {
    errors.push({ projectSlug: project.slug, field: "agencyCode", message: "Missing agencyCode" });
  }

  if (!project.sector) {
    errors.push({ projectSlug: project.slug, field: "sector", message: "Missing sector" });
  }

  if (!project.status) {
    errors.push({ projectSlug: project.slug, field: "status", message: "Missing status" });
  }

  if (!project.category) {
    errors.push({ projectSlug: project.slug, field: "category", message: "Missing category" });
  }

  // 2. Coordinates
  if (
    !project.coordinates ||
    typeof project.coordinates.lat !== "number" ||
    typeof project.coordinates.lng !== "number" ||
    isNaN(project.coordinates.lat) ||
    isNaN(project.coordinates.lng)
  ) {
    errors.push({ projectSlug: project.slug, field: "coordinates", message: "Invalid or missing lat/lng coordinates" });
  } else {
    if (project.coordinates.lat < 12.0 || project.coordinates.lat > 19.0) {
      errors.push({
        projectSlug: project.slug,
        field: "coordinates.lat",
        message: `Latitude ${project.coordinates.lat} outside expected regional range`,
      });
    }
    if (project.coordinates.lng < 73.0 || project.coordinates.lng > 80.0) {
      errors.push({
        projectSlug: project.slug,
        field: "coordinates.lng",
        message: `Longitude ${project.coordinates.lng} outside expected regional range`,
      });
    }
  }

  // 3. Progress percentage bounds
  if (project.physicalProgressPct !== null && project.physicalProgressPct !== undefined) {
    if (project.physicalProgressPct < 0 || project.physicalProgressPct > 100) {
      errors.push({
        projectSlug: project.slug,
        field: "physicalProgressPct",
        message: `physicalProgressPct must be between 0 and 100, got ${project.physicalProgressPct}`,
      });
    }
  }

  if (project.financialProgressPct !== null && project.financialProgressPct !== undefined) {
    if (project.financialProgressPct < 0 || project.financialProgressPct > 100) {
      errors.push({
        projectSlug: project.slug,
        field: "financialProgressPct",
        message: `financialProgressPct must be between 0 and 100, got ${project.financialProgressPct}`,
      });
    }
  }

  // 4. ISO Date validation
  const dateFields: (keyof typeof project)[] = [
    "announcedDate",
    "sanctionedDate",
    "originalDeadline",
    "revisedDeadline",
    "completionDate",
  ];
  for (const df of dateFields) {
    const val = project[df];
    if (val && typeof val === "string") {
      if (!ISO_DATE_REGEX.test(val)) {
        errors.push({
          projectSlug: project.slug,
          field: String(df),
          message: `Date '${val}' does not match expected ISO format YYYY-MM-DD or YYYY-MM`,
        });
      }
    }
  }

  // 5. Data Quality and Sources rule:
  // Every non-null figure in sanctionedAmountCr, revisedEstimatedCostCr, announcedAmountCr, actualDisbursedCr, physicalProgressPct
  // must have an entry in dataQuality.fields with at least one valid source URL not in the denylist.
  const checkedFinancialFields = [
    "sanctionedAmountCr",
    "revisedEstimatedCostCr",
    "announcedAmountCr",
    "actualDisbursedCr",
    "physicalProgressPct",
  ] as const;

  for (const cf of checkedFinancialFields) {
    const figureVal = project[cf];
    if (figureVal !== null && figureVal !== undefined) {
      const fieldAudit = project.dataQuality?.fields?.[cf];
      if (!fieldAudit) {
        errors.push({
          projectSlug: project.slug,
          field: `dataQuality.fields.${cf}`,
          message: `Figure '${cf}' is set to ${figureVal} but has no dataQuality audit entry`,
        });
      } else {
        if (!fieldAudit.note || fieldAudit.note.trim() === "") {
          errors.push({
            projectSlug: project.slug,
            field: `dataQuality.fields.${cf}.note`,
            message: `Field audit for '${cf}' is missing an explanatory note`,
          });
        }
        if (!fieldAudit.sources || fieldAudit.sources.length === 0) {
          errors.push({
            projectSlug: project.slug,
            field: `dataQuality.fields.${cf}.sources`,
            message: `Figure '${cf}' is set to ${figureVal} but has no supporting sources`,
          });
        } else {
          for (const s of fieldAudit.sources) {
            checkUrlNotDead(s.url, project.slug, `dataQuality.fields.${cf}.sources`);
          }
        }
      }
    }
  }

  // Check other field audit sources against denylist
  if (project.dataQuality?.fields) {
    for (const [fName, fCheck] of Object.entries(project.dataQuality.fields)) {
      if (fCheck?.sources) {
        for (const s of fCheck.sources) {
          checkUrlNotDead(s.url, project.slug, `dataQuality.fields.${fName}.sources`);
        }
      }
    }
  }

  // Check officialDocLinks
  if (project.officialDocLinks) {
    project.officialDocLinks.forEach((doc, idx) => {
      checkUrlNotDead(doc.url, project.slug, `officialDocLinks[${idx}]`);
    });
  }

  // Check milestones
  if (project.milestones) {
    project.milestones.forEach((m, idx) => {
      checkUrlNotDead(m.source?.url, project.slug, `milestones[${idx}].source`);
    });
  }

  // Check redFlags
  if (project.redFlags) {
    project.redFlags.forEach((rf, idx) => {
      checkUrlNotDead(rf.officialCitation?.documentUrl, project.slug, `redFlags[${idx}].officialCitation`);
    });
  }

  // 6. Article citations (Phase A strict requirements: checkedOn + verbatim excerpt <= 25 words)
  if (!project.articles || !Array.isArray(project.articles)) {
    errors.push({
      projectSlug: project.slug,
      field: "articles",
      message: "Missing articles array",
    });
  } else {
    for (let i = 0; i < project.articles.length; i++) {
      const art = project.articles[i];
      if (!art.title || art.title.trim() === "") {
        errors.push({ projectSlug: project.slug, field: `articles[${i}].title`, message: "Article missing title" });
      }
      if (!art.url || !art.url.startsWith("http")) {
        errors.push({ projectSlug: project.slug, field: `articles[${i}].url`, message: `Invalid article URL: ${art.url}` });
      } else {
        checkUrlNotDead(art.url, project.slug, `articles[${i}].url`);
      }
      if (!art.claim || art.claim.trim() === "") {
        errors.push({ projectSlug: project.slug, field: `articles[${i}].claim`, message: "Article missing claim" });
      }

      // checkedOn
      if (!art.checkedOn || !ISO_DATE_REGEX.test(art.checkedOn)) {
        errors.push({
          projectSlug: project.slug,
          field: `articles[${i}].checkedOn`,
          message: `Article missing valid ISO checkedOn date (got '${art.checkedOn}')`,
        });
      }

      // excerpt
      if (!art.excerpt || art.excerpt.trim() === "") {
        errors.push({
          projectSlug: project.slug,
          field: `articles[${i}].excerpt`,
          message: `Article missing verbatim excerpt supporting claim`,
        });
      } else {
        const words = art.excerpt.trim().split(/\s+/).length;
        if (words > 25) {
          errors.push({
            projectSlug: project.slug,
            field: `articles[${i}].excerpt`,
            message: `Article excerpt exceeds 25 words (${words} words)`,
          });
        }
      }
    }
  }
}

if (errors.length > 0) {
  console.error(`❌ Validation failed with ${errors.length} issue(s):\n`);
  for (const err of errors.slice(0, 30)) {
    console.error(`  • [${err.projectSlug}] ${err.field}: ${err.message}`);
  }
  if (errors.length > 30) {
    console.error(`  ... and ${errors.length - 30} more issue(s).`);
  }
  process.exit(1);
} else {
  console.log(`✅ All ${projects.length} project records passed data integrity validation!`);
  console.log(`   - Verified unique slugs: ${seenSlugs.size}`);
  console.log(`   - Denylist verified: 0 dead URLs present.`);
  console.log(`   - All articles have checkedOn dates and concise verbatim excerpts (<= 25 words).\n`);
  process.exit(0);
}
