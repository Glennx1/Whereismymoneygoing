import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Confidence, Project, ProjectCategory, ProjectStatus } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const NOT_AVAILABLE = "Not available";

/** Build & audit date: 23 November 2026 */
export const BUILD_DATE = "2026-11-23";
export const REFERENCE_DATE = BUILD_DATE;

/**
 * Format amounts in Indian Crores with ₹ symbol.
 * null/undefined means "no confirmed figure", never zero.
 */
export function formatCrores(amountCr: number | null | undefined): string {
  if (amountCr === null || amountCr === undefined) return NOT_AVAILABLE;
  if (amountCr >= 100000) {
    return `₹${(amountCr / 100000).toFixed(2)} Lakh Cr`;
  }
  return `₹${amountCr.toLocaleString('en-IN', { maximumFractionDigits: 1 })} Cr`;
}

export function formatMonthYear(dateStr: string | null | undefined): string {
  if (!dateStr) return "Not confirmed";
  return new Date(dateStr).toLocaleDateString("en-IN", { month: "short", year: "numeric" });
}

export function formatPct(pct: number | null | undefined): string {
  return pct === null || pct === undefined ? NOT_AVAILABLE : `${pct}%`;
}

/**
 * Checks if a sourced figure is older than 12 months relative to November 2026.
 */
export function isStale(asOf?: string | null): boolean {
  if (!asOf) return false;
  const ref = new Date(REFERENCE_DATE).getTime();
  const date = new Date(asOf).getTime();
  const diffDays = (ref - date) / (1000 * 60 * 60 * 24);
  return diffDays > 365;
}

/**
 * Delay between original deadline and delivery target.
 * For unfinished projects: max(current target, build date) - original deadline,
 * labelled "overdue since <date>" when target has passed.
 */
export function calculateDelayString(
  originalDateStr: string | null,
  revisedDateStr: string | null,
  isCompleted?: boolean,
  completionDate?: string | null
): string | null {
  if (!originalDateStr) return null;

  // Completed projects: measured to completion date
  if (isCompleted && completionDate) {
    const orig = new Date(originalDateStr).getTime();
    const done = new Date(completionDate).getTime();
    const diffDays = Math.round((done - orig) / (1000 * 60 * 60 * 24));
    if (diffDays <= 0) return "Completed on Schedule";

    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30.4);
    if (years > 0) return `Completed with ${years} yr ${months} mo delay`;
    return `Completed with ${months} mo delay`;
  }

  if (!revisedDateStr) return null;

  const orig = new Date(originalDateStr).getTime();
  const rev = new Date(revisedDateStr).getTime();
  const build = new Date(BUILD_DATE).getTime();

  // If current target has already passed relative to build date, count delay to build date
  const isOverdue = rev < build;
  const effectiveEnd = Math.max(rev, build);
  const diffDays = Math.round((effectiveEnd - orig) / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return "On Schedule";

  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays % 365) / 30.4);
  const delayStr = years > 0 ? `${years} yr ${months} mo delay` : `${months} mo delay`;

  if (isOverdue) {
    const targetFormatted = new Date(revisedDateStr).toLocaleDateString("en-IN", { month: "short", year: "numeric" });
    return `Overdue since ${targetFormatted} (${delayStr} as of ${BUILD_DATE})`;
  }

  return delayStr;
}

/**
 * Cost overrun percentage. Needs two confirmed figures; otherwise null.
 */
export function calculateCostOverrunPct(
  sanctionedCr: number | null,
  currentEstimatedCr: number | null
): number | null {
  if (sanctionedCr === null || currentEstimatedCr === null || sanctionedCr <= 0) return null;
  const diff = currentEstimatedCr - sanctionedCr;
  if (diff <= 0) return 0;
  return Math.round((diff / sanctionedCr) * 100);
}

/** Best available cost figure: current estimate, else approved budget. */
export function bestCostCr(p: Project): number | null {
  return p.revisedEstimatedCostCr ?? p.sanctionedAmountCr ?? null;
}

/**
 * Derived estimated spend: cost × progress%.
 * Labeled in UI: "Estimate (cost × reported progress). Not an official payment figure."
 * Returns null for completed projects or if either cost or progress% is null.
 */
export function calculateEstimatedSpentCr(p: Project): number | null {
  // Rule 6: Never compute derived spend for completed projects
  if (p.status === "completed" || p.category === "completed") {
    return null;
  }
  const cost = bestCostCr(p);
  if (cost === null || p.physicalProgressPct === null || p.physicalProgressPct === undefined) {
    return null;
  }
  return Math.round(((cost * p.physicalProgressPct) / 100) * 10) / 10;
}

export function confidenceOf(p: Project, field: keyof Project["dataQuality"]["fields"]): Confidence {
  return p.dataQuality.fields[field]?.confidence ?? "unverified";
}

export function categoryOf(status: ProjectStatus): ProjectCategory {
  if (status === "completed") return "completed";
  if (status === "announced" || status === "tendering") return "planned";
  return "ongoing"; // 'under_construction', 'partially_operational', 'stalled'
}

export function statusLabel(status: Project["status"]): string {
  switch (status) {
    case "stalled":
      return "Stalled";
    case "under_construction":
      return "In Progress";
    case "partially_operational":
      return "Partially Open";
    case "completed":
      return "Completed";
    case "tendering":
      return "Tendering / Awarded";
    default:
      return "Announced";
  }
}
