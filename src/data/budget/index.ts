import { StateBudgetYearSummary, BudgetSector, SectorYear } from '@/lib/types';
import { budget2019_20 } from './2019-20';
import { budget2020_21 } from './2020-21';
import { budget2021_22 } from './2021-22';
import { budget2022_23 } from './2022-23';
import { budget2023_24 } from './2023-24';
import { budget2024_25 } from './2024-25';
import { departmentMappings, getSectorDepartments } from './departments';

export const allBudgetYears: StateBudgetYearSummary[] = [
  budget2019_20,
  budget2020_21,
  budget2021_22,
  budget2022_23,
  budget2023_24,
  budget2024_25,
];

export const budgetSectors: BudgetSector[] = [
  'Education',
  'Health',
  'Urban Development',
  'Transport and Roads',
  'Water Resources',
];

export function getBudgetYear(fiscalYear: string): StateBudgetYearSummary | undefined {
  return allBudgetYears.find((y) => y.fiscalYear === fiscalYear);
}

export function getSectorsByYear(fiscalYear: string): SectorYear[] {
  const yearData = getBudgetYear(fiscalYear);
  return yearData ? yearData.sectors : [];
}

export interface SectorTrendPoint {
  fiscalYear: string;
  be: number | null;
  re: number | null;
  actual: number | null;
  centralShare: number | null;
  stateOwn: number | null;
  notes?: string;
}

export function getSectorTrend(sector: BudgetSector): SectorTrendPoint[] {
  return allBudgetYears.map((yearData) => {
    const sec = yearData.sectors.find((s) => s.sector === sector);
    return {
      fiscalYear: yearData.fiscalYear,
      be: sec?.budgetEstimate.amountCr ?? null,
      re: sec?.revisedEstimate.amountCr ?? null,
      actual: sec?.actual.amountCr ?? null,
      centralShare: sec?.centralShare?.amountCr ?? null,
      stateOwn: sec?.stateOwn?.amountCr ?? null,
      notes: sec?.notes,
    };
  });
}

export { departmentMappings, getSectorDepartments };
