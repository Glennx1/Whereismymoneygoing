import { Project, CheckedField } from "@/lib/types";
import {
  formatCrores,
  formatMonthYear,
  formatPct,
  calculateCostOverrunPct,
  confidenceOf,
} from "@/lib/utils";
import { ConfidenceBadge } from "./ConfidenceBadge";
import { TrendingUp, ExternalLink } from "lucide-react";

interface FinancialPipelineProps {
  project: Project;
}

function Step({
  label,
  value,
  sub,
  project,
  field,
}: {
  label: string;
  value: string;
  sub?: string;
  project: Project;
  field?: CheckedField;
}) {
  const missing = value === "Not available";
  return (
    <div className="rounded-xl border border-neutral-200/70 bg-[#faf9f6] p-4">
      <div className="flex items-center justify-between gap-2">
        <div className="text-[11px] font-medium text-neutral-500 uppercase tracking-wider">
          {label}
        </div>
        {field && !missing && <ConfidenceBadge confidence={confidenceOf(project, field)} />}
      </div>
      <div
        className={`mt-1.5 tracking-tight ${
          missing ? "text-sm font-medium text-neutral-400" : "text-xl font-bold text-neutral-900"
        }`}
      >
        {value}
      </div>
      {sub && <div className="mt-1 text-[11px] text-neutral-400">{sub}</div>}
    </div>
  );
}

export function FinancialPipeline({ project }: FinancialPipelineProps) {
  const overrunPct = calculateCostOverrunPct(project.sanctionedAmountCr, project.revisedEstimatedCostCr);
  const overrunCr =
    project.sanctionedAmountCr !== null && project.revisedEstimatedCostCr !== null
      ? project.revisedEstimatedCostCr - project.sanctionedAmountCr
      : null;

  const checks = Object.entries(project.dataQuality.fields) as [
    CheckedField,
    NonNullable<Project["dataQuality"]["fields"][CheckedField]>
  ][];
  const FIELD_LABELS: Record<CheckedField, string> = {
    announcedAmountCr: "Announced amount",
    sanctionedAmountCr: "Approved / estimated cost",
    revisedEstimatedCostCr: "Latest cost estimate",
    actualDisbursedCr: "Money paid out",
    physicalProgressPct: "Work done on site",
    originalDeadline: "Original deadline",
    revisedDeadline: "Current target date",
    status: "Status",
    contractors: "Contractors",
  };

  return (
    <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-100 pb-5">
        <div>
          <h3 className="text-base font-semibold text-neutral-900 tracking-tight">
            Cost and progress
          </h3>
          <p className="text-xs text-neutral-500 mt-0.5">
            Only figures with a source are shown. &quot;Not available&quot; means we have not found a reliable figure yet.
          </p>
        </div>

        {overrunCr !== null && overrunCr > 0 && overrunPct !== null && (
          <div className="inline-flex items-center gap-1.5 rounded-full bg-rose-50 border border-rose-200 px-3 py-1 text-xs font-semibold text-rose-700">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>
              Cost up: +{formatCrores(overrunCr)} (+{overrunPct}%)
            </span>
          </div>
        )}
      </div>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3.5">
        <Step
          label="Announced"
          value={formatCrores(project.announcedAmountCr)}
          sub={project.announcedDate ? formatMonthYear(project.announcedDate) : undefined}
          project={project}
          field="announcedAmountCr"
        />
        <Step
          label="Approved / estimated"
          value={formatCrores(project.sanctionedAmountCr)}
          sub={project.sanctionedDate ? formatMonthYear(project.sanctionedDate) : undefined}
          project={project}
          field="sanctionedAmountCr"
        />
        <Step
          label="Latest cost estimate"
          value={formatCrores(project.revisedEstimatedCostCr)}
          project={project}
          field="revisedEstimatedCostCr"
        />
        <Step
          label="Paid out so far"
          value={formatCrores(project.actualDisbursedCr)}
          sub={
            project.actualDisbursedCr === null
              ? "Project-wise payments are not usually published"
              : undefined
          }
          project={project}
          field="actualDisbursedCr"
        />
      </div>

      <div className="mt-6 rounded-xl bg-[#faf9f6] border border-neutral-200/70 p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-semibold text-neutral-800">Work done on site</span>
          <span className="text-xs text-neutral-500">
            Target:{" "}
            <strong className="text-neutral-900">{formatMonthYear(project.revisedDeadline)}</strong>
          </span>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-neutral-600 flex items-center gap-1.5">
              Physical progress
              {project.physicalProgressPct !== null && (
                <ConfidenceBadge confidence={confidenceOf(project, "physicalProgressPct")} />
              )}
            </span>
            <span className="font-semibold text-neutral-900">
              {formatPct(project.physicalProgressPct)}
            </span>
          </div>
          {project.physicalProgressPct !== null && (
            <div className="h-2 w-full rounded-full bg-neutral-200 overflow-hidden">
              <div
                className="h-full rounded-full bg-neutral-900 transition-all duration-500"
                style={{ width: `${Math.min(project.physicalProgressPct, 100)}%` }}
              />
            </div>
          )}
        </div>
      </div>

      {/* What we checked */}
      <details className="mt-5 group">
        <summary className="cursor-pointer text-xs font-semibold text-neutral-800 select-none">
          What we checked and where it comes from
        </summary>
        <div className="mt-3 space-y-3">
          <p className="text-xs text-neutral-600 leading-relaxed">{project.dataQuality.summary}</p>
          {checks.map(([field, check]) => (
            <div key={field} className="rounded-lg border border-neutral-200/80 p-3 space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-neutral-900">{FIELD_LABELS[field]}</span>
                <ConfidenceBadge confidence={check.confidence} />
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">{check.note}</p>
              {check.sources.length > 0 && (
                <ul className="space-y-0.5">
                  {check.sources.map((s) => (
                    <li key={s.url}>
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-neutral-700 hover:underline"
                      >
                        <span>{s.label}</span>
                        <ExternalLink className="h-3 w-3 text-neutral-400" />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {project.dataQuality.corrections.length > 0 && (
            <div className="rounded-lg bg-amber-50/60 border border-amber-200/70 p-3">
              <div className="text-xs font-semibold text-amber-900 mb-1">
                Corrections made in the {project.dataQuality.lastAudited} audit
              </div>
              <ul className="list-disc pl-4 space-y-0.5 text-[11px] text-amber-900/90 leading-relaxed">
                {project.dataQuality.corrections.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </details>
    </div>
  );
}
