import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format amounts in Indian Crores with ₹ symbol
 * e.g., 14844.5 -> "₹14,844.5 Cr"
 */
export function formatCrores(amountCr: number): string {
  if (amountCr >= 100000) {
    return `₹${(amountCr / 100000).toFixed(2)} Lakh Cr`;
  }
  return `₹${amountCr.toLocaleString('en-IN', { maximumFractionDigits: 1 })} Cr`;
}

/**
 * Compute the delay between original deadline and revised deadline or today
 */
export function calculateDelayString(originalDateStr: string, revisedDateStr: string): string {
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
 * Compute cost overrun percentage
 */
export function calculateCostOverrunPct(sanctionedCr: number, currentEstimatedCr: number): number {
  if (!sanctionedCr || sanctionedCr <= 0) return 0;
  const diff = currentEstimatedCr - sanctionedCr;
  if (diff <= 0) return 0;
  return Math.round((diff / sanctionedCr) * 100);
}
