import fs from "fs";
import path from "path";
import { projects } from "../src/data/projects/index";
import { allBudgetYears } from "../src/data/budget/index";
import { BudgetFigure, SectorYear } from "../src/lib/types";

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
const deadLinksPath = path.resolve(process.cwd(), "docs", "dead-links.json");
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
        if (words < 8 || words > 25) {
          errors.push({
            projectSlug: project.slug,
            field: `articles[${i}].excerpt`,
            message: `Article excerpt must be between 8 and 25 words (got ${words} words: "${art.excerpt}")`,
          });
        }
        if (art.excerpt.toLowerCase().includes("reports that")) {
          errors.push({
            projectSlug: project.slug,
            field: `articles[${i}].excerpt`,
            message: `Article excerpt contains forbidden pattern 'reports that': "${art.excerpt}"`,
          });
        }
        if (art.excerpt.trim().endsWith("...") || art.excerpt.trim().endsWith("…")) {
          errors.push({
            projectSlug: project.slug,
            field: `articles[${i}].excerpt`,
            message: `Article excerpt must not end in truncation '...': "${art.excerpt}"`,
          });
        }
      }
    }
  }
}

// ---------------------------------------------------------------------
// 7. Karnataka Budget Data Validation
// ---------------------------------------------------------------------
console.log(`\n🔍 Validating Karnataka Budget datasets across ${allBudgetYears.length} fiscal years...`);

function validateBudgetFigure(
  fig: BudgetFigure | undefined,
  fiscalYear: string,
  fieldPath: string,
  allowNull = false
) {
  if (!fig) {
    errors.push({
      projectSlug: fiscalYear,
      field: fieldPath,
      message: `Missing budget figure`,
    });
    return;
  }

  if (fig.amountCr === null) {
    if (!allowNull) {
      errors.push({
        projectSlug: fiscalYear,
        field: `${fieldPath}.amountCr`,
        message: `Amount cannot be null for this field`,
      });
    }
    // If null is allowed (e.g. audited actuals lag), still require source citation explaining status
    if (!fig.source || !fig.source.url) {
      errors.push({
        projectSlug: fiscalYear,
        field: `${fieldPath}.source`,
        message: `Null figure must still cite source explaining why account is pending`,
      });
    }
    return;
  }

  if (typeof fig.amountCr !== "number" || isNaN(fig.amountCr)) {
    errors.push({
      projectSlug: fiscalYear,
      field: `${fieldPath}.amountCr`,
      message: `Invalid number: ${fig.amountCr}`,
    });
  }

  if (!fig.source) {
    errors.push({
      projectSlug: fiscalYear,
      field: `${fieldPath}.source`,
      message: `Missing source citation`,
    });
    return;
  }

  if (!fig.source.url || !fig.source.url.startsWith("http")) {
    errors.push({
      projectSlug: fiscalYear,
      field: `${fieldPath}.source.url`,
      message: `Invalid or missing source URL: ${fig.source.url}`,
    });
  } else {
    checkUrlNotDead(fig.source.url, fiscalYear, `${fieldPath}.source.url`);
  }

  if (!fig.source.page && !fig.source.table) {
    errors.push({
      projectSlug: fiscalYear,
      field: `${fieldPath}.source.page`,
      message: `Every budget figure must specify page or table number`,
    });
  }

  if (!fig.source.printedUnit) {
    errors.push({
      projectSlug: fiscalYear,
      field: `${fieldPath}.source.printedUnit`,
      message: `Every non-null budget figure must specify printedUnit (e.g. '₹ in Crores', '₹ in Lakhs')`,
    });
  }

  if (fig.confidence === 'derived') {
    if (!fig.source.componentRows || fig.source.componentRows.length === 0) {
      errors.push({
        projectSlug: fiscalYear,
        field: `${fieldPath}.source.componentRows`,
        message: `Derived figures must provide componentRows with printed numbers and page numbers`,
      });
    } else {
      const sum = fig.source.componentRows.reduce((acc, r) => acc + r.amountCr, 0);
      const diff = Math.abs(sum - fig.amountCr);
      if (diff > Math.max(1, fig.amountCr * 0.01)) {
        errors.push({
          projectSlug: fiscalYear,
          field: `${fieldPath}.source.componentRows`,
          message: `Component rows sum (${sum.toFixed(2)} Cr) does not match figure amountCr (${fig.amountCr} Cr)`,
        });
      }
    }
  }

  if (fig.source.evidenceFile) {
    const evPath = path.resolve(process.cwd(), fig.source.evidenceFile);
    if (!fs.existsSync(evPath)) {
      errors.push({
        projectSlug: fiscalYear,
        field: `${fieldPath}.source.evidenceFile`,
        message: `Evidence file not found: ${fig.source.evidenceFile}`,
      });
    }
  }

  if (!fig.source.excerpt || fig.source.excerpt.trim() === "") {
    errors.push({
      projectSlug: fiscalYear,
      field: `${fieldPath}.source.excerpt`,
      message: `Missing verbatim excerpt for source`,
    });
  } else {
    if (fig.source.excerpt.toLowerCase().includes("reports that")) {
      errors.push({
        projectSlug: fiscalYear,
        field: `${fieldPath}.source.excerpt`,
        message: `Source excerpt contains forbidden pattern 'reports that': "${fig.source.excerpt}"`,
      });
    }
    if (fig.source.excerpt.trim().endsWith("...") || fig.source.excerpt.trim().endsWith("…")) {
      errors.push({
        projectSlug: fiscalYear,
        field: `${fieldPath}.source.excerpt`,
        message: `Source excerpt must not end in truncation '...': "${fig.source.excerpt}"`,
      });
    }
  }

  if (!fig.asOf || !ISO_DATE_REGEX.test(fig.asOf)) {
    errors.push({
      projectSlug: fiscalYear,
      field: `${fieldPath}.asOf`,
      message: `Invalid ISO date: ${fig.asOf}`,
    });
  }
}

for (const by of allBudgetYears) {
  // Validate total expenditure
  validateBudgetFigure(by.totalExpenditure.budgetEstimate, by.fiscalYear, "totalExpenditure.budgetEstimate", true);
  validateBudgetFigure(by.totalExpenditure.revisedEstimate, by.fiscalYear, "totalExpenditure.revisedEstimate", true);
  validateBudgetFigure(by.totalExpenditure.actual, by.fiscalYear, "totalExpenditure.actual", true);

  // Validate receipts
  validateBudgetFigure(by.revenueReceipts.stateOwnTax, by.fiscalYear, "revenueReceipts.stateOwnTax", true);
  validateBudgetFigure(by.revenueReceipts.stateOwnNonTax, by.fiscalYear, "revenueReceipts.stateOwnNonTax", true);
  validateBudgetFigure(by.revenueReceipts.centralTaxDevolution, by.fiscalYear, "revenueReceipts.centralTaxDevolution", true);
  validateBudgetFigure(by.revenueReceipts.centralGrants, by.fiscalYear, "revenueReceipts.centralGrants", true);
  validateBudgetFigure(by.revenueReceipts.totalStateOwn, by.fiscalYear, "revenueReceipts.totalStateOwn", true);
  validateBudgetFigure(by.revenueReceipts.totalCentralTransfers, by.fiscalYear, "revenueReceipts.totalCentralTransfers", true);

  // Validate sectors
  if (!by.sectors || by.sectors.length === 0) {
    errors.push({
      projectSlug: by.fiscalYear,
      field: "sectors",
      message: `No sector records found`,
    });
  }

  for (let sIdx = 0; sIdx < by.sectors.length; sIdx++) {
    const sec = by.sectors[sIdx];
    const prefix = `sectors[${sec.sector || sIdx}]`;

    validateBudgetFigure(sec.budgetEstimate, by.fiscalYear, `${prefix}.budgetEstimate`, true);
    validateBudgetFigure(sec.revisedEstimate, by.fiscalYear, `${prefix}.revisedEstimate`, true);
    validateBudgetFigure(sec.actual, by.fiscalYear, `${prefix}.actual`, true);

    if (sec.centralShare) {
      validateBudgetFigure(sec.centralShare, by.fiscalYear, `${prefix}.centralShare`, true);
    }
    if (sec.stateOwn) {
      validateBudgetFigure(sec.stateOwn, by.fiscalYear, `${prefix}.stateOwn`, true);
    }

    // Ratio checks between BE and Actual
    const beAmount = sec.budgetEstimate.amountCr;
    const actualAmount = sec.actual.amountCr;

    if (beAmount !== null && actualAmount !== null && actualAmount > 0) {
      if (beAmount > 10 * actualAmount && !sec.notes) {
        errors.push({
          projectSlug: by.fiscalYear,
          field: `${prefix}.ratio`,
          message: `BE (${beAmount} Cr) is > 10x Actual (${actualAmount} Cr) without a 'notes' explanation`,
        });
      }
      if (actualAmount > 5 * beAmount && !sec.notes) {
        errors.push({
          projectSlug: by.fiscalYear,
          field: `${prefix}.ratio`,
          message: `Actual (${actualAmount} Cr) is > 5x BE (${beAmount} Cr) without a 'notes' explanation`,
        });
      }
    }
  }

  // Population figure check
  if (by.populationCr) {
    if (typeof by.populationCr.countCr !== "number" || by.populationCr.countCr <= 0) {
      errors.push({
        projectSlug: by.fiscalYear,
        field: "populationCr.countCr",
        message: `Invalid population figure: ${by.populationCr.countCr}`,
      });
    }
    if (!by.populationCr.source || !by.populationCr.source.url) {
      errors.push({
        projectSlug: by.fiscalYear,
        field: "populationCr.source",
        message: `Missing population source URL`,
      });
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
