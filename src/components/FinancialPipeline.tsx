"use client";

import { useState } from "react";
import { Project, CheckedField } from "@/lib/types";
import {
  formatCrores,
  formatMonthYear,
  formatPct,
  calculateCostOverrunPct,
  confidenceOf,
  bestCostCr,
  calculateEstimatedSpentCr,
  isStale,
} from "@/lib/utils";
import { ConfidenceBadge } from "./ConfidenceBadge";
import { TrendingUp, ExternalLink, Info, CheckCircle2, Clock, AlertCircle } from "lucide-react";

interface FinancialPipelineProps {
  project: Project;
}

interface StepProps {
  label: string;
  value: string;
  tier?: "Reported" | "Estimated" | "Not available" | "Verified";
  sub?: string;
  project: Project;
  field?: CheckedField;
  asOf?: string;
  isCompletedFinal?: boolean;
}

function Step({
  label,
  value,
  tier,
  sub,
  project,
  field,
  asOf,
  isCompletedFinal,
}: StepProps) {
  const [showSources, setShowSources] = useState(false);
  const missing = value === "Not available";
  const check = field ? project.dataQuality.fields[field] : undefined;
  const stale = isStale(asOf ?? check?.asOf);

  const issueTitle = encodeURIComponent(`Data correction: ${project.slug} - ${field ?? label}`);
  const issueBody = encodeURIComponent(
    `## Project: ${project.title} (${project.slug})\n## Field: ${field ?? label}\n## Current Value Shown: ${value}\n\n## Correction & Verified Source URL:\n[Provide link to official document or reputable news outlet]\n`
  );
  const reportUrl = `https://github.com/Glennx1/Whereismymoneygoing/issues/new?title=${issueTitle}&body=${issueBody}`;

  return (
    <div className="rounded-xl border border-neutral-200/80 bg-[#faf9f6] p-4 flex flex-col justify-between relative group">
      <div>
        <div className="flex items-center justify-between gap-1.5">
          <div className="text-[11px] font-semibold text-neutral-600 uppercase tracking-wider truncate">
            {label}
          </div>
          <div className="flex items-center gap-1">
            {field && !missing && (
              <ConfidenceBadge confidence={check?.confidence ?? confidenceOf(project, field)} />
            )}
            {tier === "Estimated" && (
              <span className="rounded-full bg-blue-50 border border-blue-200 px-1.5 py-0.2 text-[10px] font-medium text-blue-700">
                Estimate
              </span>
            )}
          </div>
        </div>

        <div
          className={`mt-2 tracking-tight ${
            missing ? "text-sm font-medium text-neutral-400" : "text-xl font-bold text-neutral-900"
          }`}
        >
          {value}
        </div>

        {sub && <div className="mt-1 text-[11px] text-neutral-500 leading-snug">{sub}</div>}

        {asOf && (
          <div className="mt-1.5 flex items-center gap-1 text-[10px] text-neutral-400">
            <Clock className="h-2.5 w-2.5" />
            <span>As of {formatMonthYear(asOf)}</span>
            {stale && (
              <span className="text-amber-600 font-medium ml-1">
                (Older than 12 mos)
              </span>
            )}
          </div>
        )}
      </div>

      <div className="mt-3 pt-2 border-t border-neutral-200/60">
        <div className="flex items-center justify-between text-[10px]">
          {check && check.sources.length > 0 ? (
            <button
              type="button"
              onClick={() => setShowSources(!showSources)}
              className="text-neutral-500 hover:text-neutral-900 flex items-center gap-1 font-medium underline underline-offset-2"
            >
              <Info className="h-3 w-3 text-neutral-400" />
              <span>{showSources ? "Hide sources" : `Sources (${check.sources.length})`}</span>
            </button>
          ) : (
            <span />
          )}

          <a
            href={reportUrl}
            target="_blank"
            rel="noreferrer"
            className="text-neutral-400 hover:text-neutral-700 flex items-center gap-1 transition-colors"
            title="Report a data correction on GitHub"
          >
            <AlertCircle className="h-2.5 w-2.5" />
            <span>Report error</span>
          </a>
        </div>

        {showSources && check && check.sources.length > 0 && (
          <div className="mt-2 p-2 rounded bg-white border border-neutral-200 text-[11px] space-y-1 shadow-xs">
            <div className="font-semibold text-neutral-700 text-[10px]">Citations:</div>
            <ul className="space-y-1">
              {check.sources.map((s, idx) => (
                <li key={idx}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-600 hover:text-neutral-900 hover:underline flex items-center gap-1"
                  >
                    <span className="truncate">{s.label}</span>
                    <ExternalLink className="h-2.5 w-2.5 shrink-0 text-neutral-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export function FinancialPipeline({ project }: FinancialPipelineProps) {
  const isCompleted = project.status === "completed";
  const overrunPct = calculateCostOverrunPct(project.sanctionedAmountCr, project.revisedEstimatedCostCr);
  const overrunCr =
    project.sanctionedAmountCr !== null && project.revisedEstimatedCostCr !== null
      ? project.revisedEstimatedCostCr - project.sanctionedAmountCr
      : null;

  const estimatedSpent = calculateEstimatedSpentCr(project);

  const checks = Object.entries(project.dataQuality.fields) as [
    CheckedField,
    NonNullable<Project["dataQuality"]["fields"][CheckedField]>
  ][];

  const FIELD_LABELS: Record<CheckedField, string> = {
    announcedAmountCr: "Announced amount",
    sanctionedAmountCr: isCompleted ? "Initial Approved Cost" : "Approved / estimated cost",
    revisedEstimatedCostCr: isCompleted ? "Final Cost (Reported)" : "Latest cost estimate",
    actualDisbursedCr: "Money paid out",
    physicalProgressPct: "Work done on site",
    originalDeadline: "Original deadline",
    revisedDeadline: isCompleted ? "Opening date" : "Current target date",
    status: "Status",
    contractors: "Contractors",
  };

  return (
    <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-neutral-100 pb-5">
        <div>
          <h3 className="text-base font-semibold text-neutral-900 tracking-tight flex items-center gap-2">
            <span>Cost and progress</span>
            {isCompleted && (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-2 py-0.5 text-[11px] font-semibold text-emerald-800">
                <CheckCircle2 className="h-3 w-3" />
                Completed Project
              </span>
            )}
          </h3>
          <p className="text-xs text-neutral-500 mt-0.5">
            Every figure cites its published source. Estimated figures are derived from reported progress and never mixed with audited vouchers.
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

      {/* 4 Pipeline Step Cards */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5">
        {/* Card 1: Announced */}
        <Step
          label="Announced"
          value={formatCrores(project.announcedAmountCr)}
          sub={project.announcedDate ? formatMonthYear(project.announcedDate) : undefined}
          project={project}
          field="announcedAmountCr"
          tier={project.announcedAmountCr !== null ? "Reported" : "Not available"}
          asOf={project.dataQuality.fields.announcedAmountCr?.asOf}
        />

        {/* Card 2: Approved / Initial Sanction */}
        <Step
          label={isCompleted ? "Initial Approved" : "Approved Budget"}
          value={formatCrores(project.sanctionedAmountCr)}
          sub={project.sanctionedDate ? formatMonthYear(project.sanctionedDate) : undefined}
          project={project}
          field="sanctionedAmountCr"
          tier={project.sanctionedAmountCr !== null ? "Reported" : "Not available"}
          asOf={project.dataQuality.fields.sanctionedAmountCr?.asOf}
        />

        {/* Card 3: Latest / Final Cost */}
        <Step
          label={isCompleted ? "Final Cost (Reported)" : "Latest Cost Estimate"}
          value={formatCrores(bestCostCr(project))}
          sub={
            isCompleted
              ? `Opened in ${formatMonthYear(project.completionDate ?? project.revisedDeadline)}`
              : project.dataQuality.fields.revisedEstimatedCostCr?.note
          }
          project={project}
          field="revisedEstimatedCostCr"
          tier={bestCostCr(project) !== null ? "Reported" : "Not available"}
          asOf={project.dataQuality.fields.revisedEstimatedCostCr?.asOf ?? project.dataQuality.fields.sanctionedAmountCr?.asOf}
          isCompletedFinal={isCompleted}
        />

        {/* Card 4: Paid Out / Derived Spend */}
        {project.actualDisbursedCr !== null ? (
          <Step
            label="Paid out so far"
            value={formatCrores(project.actualDisbursedCr)}
            sub="Officially reported expenditure vouchers"
            project={project}
            field="actualDisbursedCr"
            tier="Reported"
            asOf={project.dataQuality.fields.actualDisbursedCr?.asOf}
          />
        ) : estimatedSpent !== null ? (
          <Step
            label={isCompleted ? "Estimated Final Spend" : "Estimated Spend (Derived)"}
            value={`~${formatCrores(estimatedSpent)}`}
            sub="Estimate (cost × reported progress). Not an official payment figure."
            project={project}
            tier="Estimated"
            asOf={project.dataQuality.fields.physicalProgressPct?.asOf}
          />
        ) : (
          <Step
            label="Paid out so far"
            value="Not available"
            sub="Project-wise payment vouchers are rarely published"
            project={project}
            field="actualDisbursedCr"
            tier="Not available"
          />
        )}
      </div>

      {/* Progress & Target Section */}
      <div className="mt-6 rounded-xl bg-[#faf9f6] border border-neutral-200/80 p-5 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-semibold text-neutral-800">
            {isCompleted ? "Completion & Delivery Status" : "Work done on site"}
          </span>
          <span className="text-xs text-neutral-500">
            {isCompleted ? "Opening Date: " : "Current Target: "}
            <strong className="text-neutral-900">
              {formatMonthYear(project.completionDate ?? project.revisedDeadline)}
            </strong>
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
              {isCompleted ? "100% (Completed)" : formatPct(project.physicalProgressPct)}
            </span>
          </div>

          <div className="h-2 w-full rounded-full bg-neutral-200 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                isCompleted ? "bg-emerald-600" : "bg-neutral-900"
              }`}
              style={{
                width: isCompleted ? "100%" : `${Math.min(project.physicalProgressPct ?? 0, 100)}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Audit Disclosure Drawer */}
      <details className="mt-5 group">
        <summary className="cursor-pointer text-xs font-semibold text-neutral-800 select-none flex items-center gap-1.5">
          <span>What we checked and where each number comes from</span>
          <span className="text-neutral-400 font-normal">({checks.length} fields audited)</span>
        </summary>
        <div className="mt-3 space-y-3">
          <p className="text-xs text-neutral-600 leading-relaxed">{project.dataQuality.summary}</p>
          {checks.map(([field, check]) => (
            <div key={field} className="rounded-lg border border-neutral-200/80 p-3 space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-neutral-900">{FIELD_LABELS[field]}</span>
                <div className="flex items-center gap-1.5">
                  {check.asOf && (
                    <span className="text-[10px] text-neutral-400">
                      As of {formatMonthYear(check.asOf)}
                    </span>
                  )}
                  <ConfidenceBadge confidence={check.confidence} />
                </div>
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">{check.note}</p>
              {check.sources.length > 0 && (
                <ul className="space-y-0.5 pt-1">
                  {check.sources.map((s, idx) => (
                    <li key={idx}>
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
