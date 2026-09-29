import { Project } from "@/lib/types";
import { formatCrores, calculateCostOverrunPct } from "@/lib/utils";
import { AlertCircle, TrendingUp } from "lucide-react";

interface FinancialPipelineProps {
  project: Project;
}

export function FinancialPipeline({ project }: FinancialPipelineProps) {
  const costOverrun = project.revisedEstimatedCostCr - project.sanctionedAmountCr;
  const costOverrunPct = calculateCostOverrunPct(project.sanctionedAmountCr, project.revisedEstimatedCostCr);
  const remainingDisbursalCr = project.sanctionedAmountCr - project.actualDisbursedCr;
  
  const progressGap = project.financialProgressPct - project.physicalProgressPct;
  const hasDiscrepancyGap = progressGap > 12;

  return (
    <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-100 pb-5">
        <div>
          <h3 className="text-base font-semibold text-neutral-900 tracking-tight">
            Where is the money right now?
          </h3>
          <p className="text-xs text-neutral-500 mt-0.5">
            Tracking money from the first political announcement to actual payouts and work done.
          </p>
        </div>

        {costOverrun > 0 && (
          <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 border border-rose-200 px-3 py-1 text-xs font-semibold text-rose-700">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>Over Budget: +{formatCrores(costOverrun)} (+{costOverrunPct}%)</span>
          </div>
        )}
      </div>

      {/* 4 Clean Steps */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3.5">
        {/* Step 1: Announced */}
        <div className="rounded-xl border border-neutral-200/70 bg-[#faf9f6] p-4">
          <div className="text-[11px] font-medium text-neutral-500 uppercase tracking-wider">
            1. First Announced
          </div>
          <div className="mt-1.5 text-xl font-bold text-neutral-900 tracking-tight">
            {formatCrores(project.announcedAmountCr)}
          </div>
          <div className="mt-1 text-[11px] text-neutral-400">
            {new Date(project.announcedDate).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
          </div>
        </div>

        {/* Step 2: Approved */}
        <div className="rounded-xl border border-neutral-200/70 bg-[#faf9f6] p-4">
          <div className="text-[11px] font-medium text-neutral-500 uppercase tracking-wider">
            2. Approved Budget
          </div>
          <div className="mt-1.5 text-xl font-bold text-neutral-900 tracking-tight">
            {formatCrores(project.sanctionedAmountCr)}
          </div>
          <div className="mt-1 text-[11px] text-neutral-400">
            Official government order
          </div>
        </div>

        {/* Step 3: Paid Out */}
        <div className="rounded-xl border border-neutral-200/70 bg-[#faf9f6] p-4">
          <div className="text-[11px] font-medium text-neutral-500 uppercase tracking-wider">
            3. Paid Out So Far
          </div>
          <div className="mt-1.5 text-xl font-bold text-neutral-900 tracking-tight">
            {formatCrores(project.actualDisbursedCr)}
          </div>
          <div className="mt-1 text-[11px] text-neutral-500">
            {project.financialProgressPct}% of approved budget
          </div>
        </div>

        {/* Step 4: Left in Budget */}
        <div className="rounded-xl border border-neutral-200/70 bg-[#faf9f6] p-4">
          <div className="text-[11px] font-medium text-neutral-500 uppercase tracking-wider">
            4. Money Left
          </div>
          <div className="mt-1.5 text-xl font-bold text-neutral-900 tracking-tight">
            {remainingDisbursalCr > 0 ? formatCrores(remainingDisbursalCr) : "₹0 (Exhausted)"}
          </div>
          <div className="mt-1 text-[11px] text-neutral-400">
            Remaining unspent balance
          </div>
        </div>
      </div>

      {/* Progress Bars (Money spent vs actual work done) */}
      <div className="mt-6 rounded-xl bg-[#faf9f6] border border-neutral-200/70 p-5 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-neutral-800">
            Money Paid vs Physical Work Finished
          </span>
          <span className="text-xs text-neutral-500">
            Target Completion: <strong className="text-neutral-900">{new Date(project.revisedDeadline).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}</strong>
          </span>
        </div>

        {/* Bar 1: Money Spent */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-neutral-600">Money released from government account:</span>
            <span className="font-semibold text-neutral-900">{project.financialProgressPct}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-neutral-200 overflow-hidden">
            <div
              className="h-full rounded-full bg-neutral-900 transition-all duration-500"
              style={{ width: `${Math.min(project.financialProgressPct, 100)}%` }}
            />
          </div>
        </div>

        {/* Bar 2: Work on Ground */}
        <div className="space-y-1.5">
          <div className="flex justify-between text-xs">
            <span className="text-neutral-600">Actual construction finished on site:</span>
            <span className="font-semibold text-neutral-900">{project.physicalProgressPct}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-neutral-200 overflow-hidden">
            <div
              className="h-full rounded-full bg-neutral-400 transition-all duration-500"
              style={{ width: `${Math.min(project.physicalProgressPct, 100)}%` }}
            />
          </div>
        </div>

        {/* Discrepancy explanation */}
        {hasDiscrepancyGap && (
          <div className="rounded-lg bg-amber-50 border border-amber-200/80 p-3 flex items-start gap-2.5 text-xs text-amber-900">
            <AlertCircle className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
            <div>
              <span className="font-semibold">Notice: </span>
              {project.financialProgressPct}% of the money has already been paid out, but only {project.physicalProgressPct}% of the physical work is finished on site. More taxpayer money has left government accounts than what is visibly built.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
