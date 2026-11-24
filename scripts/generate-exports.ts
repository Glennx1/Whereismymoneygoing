import fs from "fs";
import path from "path";
import { projects } from "../src/data/projects";
import { bestCostCr, calculateDelayString } from "../src/lib/utils";

const publicDataDir = path.join(process.cwd(), "public", "data");
if (!fs.existsSync(publicDataDir)) {
  fs.mkdirSync(publicDataDir, { recursive: true });
}

// 1. Generate public/data/projects.json
const jsonPath = path.join(publicDataDir, "projects.json");
fs.writeFileSync(jsonPath, JSON.stringify(projects, null, 2), "utf8");
console.log(`✅ Generated ${jsonPath} (${projects.length} projects)`);

// 2. Generate public/data/projects.csv
const csvPath = path.join(publicDataDir, "projects.csv");
const headers = [
  "id",
  "slug",
  "title",
  "agencyCode",
  "sector",
  "status",
  "category",
  "sanctionedAmountCr",
  "revisedEstimatedCostCr",
  "bestCostCr",
  "costConfidence",
  "actualDisbursedCr",
  "physicalProgressPct",
  "originalDeadline",
  "revisedDeadline",
  "completionDate",
  "delayString",
  "wardOrZone",
  "geometrySource",
];

function escapeCsv(val: any): string {
  if (val === null || val === undefined) return "";
  const str = String(val).replace(/"/g, '""');
  if (str.includes(",") || str.includes('"') || str.includes("\n")) {
    return `"${str}"`;
  }
  return str;
}

const rows = projects.map((p) => {
  const isCompleted = p.status === "completed" || p.category === "completed";
  const delayStr = calculateDelayString(
    p.originalDeadline,
    p.revisedDeadline,
    isCompleted,
    p.completionDate
  );

  const costConfidence =
    p.dataQuality?.fields?.revisedEstimatedCostCr?.confidence ??
    p.dataQuality?.fields?.sanctionedAmountCr?.confidence ??
    "unverified";

  return [
    escapeCsv(p.id),
    escapeCsv(p.slug),
    escapeCsv(p.title),
    escapeCsv(p.agencyCode),
    escapeCsv(p.sector),
    escapeCsv(p.status),
    escapeCsv(p.category),
    escapeCsv(p.sanctionedAmountCr),
    escapeCsv(p.revisedEstimatedCostCr),
    escapeCsv(bestCostCr(p)),
    escapeCsv(costConfidence),
    escapeCsv(p.actualDisbursedCr),
    escapeCsv(p.physicalProgressPct),
    escapeCsv(p.originalDeadline),
    escapeCsv(p.revisedDeadline),
    escapeCsv(p.completionDate),
    escapeCsv(delayStr),
    escapeCsv(p.wardOrZone),
    escapeCsv(p.geometrySource),
  ].join(",");
});

const csvContent = [headers.join(","), ...rows].join("\n");
fs.writeFileSync(csvPath, csvContent, "utf8");
console.log(`✅ Generated ${csvPath} (${rows.length} rows)`);
