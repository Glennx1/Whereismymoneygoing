import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Confidence, Project } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const NOT_AVAILABLE = "Not available";

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
 * Delay between the original deadline and the current target.
 * Returns null when either date is unknown, so the UI can say so instead of guessing.
 */
export function calculateDelayString(
  originalDateStr: string | null,
  revisedDateStr: string | null
): string | null {
  if (!originalDateStr || !revisedDateStr) return null;
  const orig = new Date(originalDateStr).getTime();
  const rev = new Date(revisedDateStr).getTime();
  const diffDays = Math.round((rev - orig) / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return "On Schedule";

  const years = Math.floor(diffDays / 365);
  const months = Math.floor((diffDays % 365) / 30);

  if (years > 0) {
    return `${years} yr ${months} mo delay`;
  }
  return `${months} months delay`;
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

export function confidenceOf(p: Project, field: keyof Project["dataQuality"]["fields"]): Confidence {
  return p.dataQuality.fields[field]?.confidence ?? "unverified";
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
