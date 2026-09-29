import Link from "next/link";
import { Project } from "@/lib/types";
import { formatCrores, calculateDelayString, calculateCostOverrunPct } from "@/lib/utils";
import { RedFlagBadge } from "./RedFlagBadge";
import { Clock, TrendingUp, ArrowRight, MapPin, AlertCircle } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const delayStr = calculateDelayString(project.originalDeadline, project.revisedDeadline);
  const isDelayed = delayStr !== "On Schedule";
  const costOverrun = project.revisedEstimatedCostCr - project.sanctionedAmountCr;
  const costOverrunPct = calculateCostOverrunPct(project.sanctionedAmountCr, project.revisedEstimatedCostCr);

  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "stalled":
        return "bg-rose-50 text-rose-700 border-rose-200";
      case "under_construction":
        return "bg-neutral-100 text-neutral-800 border-neutral-200";
      case "partially_operational":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "completed":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      default:
        return "bg-neutral-100 text-neutral-600 border-neutral-200";
    }
  };

  const getStatusText = (status: Project["status"]) => {
    switch (status) {
      case "stalled":
        return "Stalled";
      case "under_construction":
        return "In Progress";
      case "partially_operational":
        return "Partially Open";
      case "completed":
        return "Completed";
      default:
        return "Announced";
    }
  };

  return (
    <div className="group rounded-2xl border border-neutral-200/90 bg-white p-5 transition-all duration-200 hover:border-neutral-300 hover:shadow-md flex flex-col justify-between">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-semibold text-neutral-800 border border-neutral-200/60">
              {project.agencyCode}
            </span>
            <span className="text-xs text-neutral-500">
              {project.sector}
            </span>
          </div>

          <span
            className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium border ${getStatusBadge(
              project.status
            )}`}
          >
            {getStatusText(project.status)}
          </span>
        </div>

        {/* Title */}
        <Link href={`/projects/${project.slug}`} className="block mt-3 group-hover:text-neutral-600 transition-colors">
          <h3 className="text-base font-semibold text-neutral-900 tracking-tight leading-snug">
            {project.title}
          </h3>
        </Link>

        {/* Tagline */}
        <p className="mt-1.5 text-xs text-neutral-500 line-clamp-2 leading-relaxed">
          {project.tagline}
        </p>

        {/* Location */}
        <div className="mt-3 flex items-center gap-1.5 text-xs text-neutral-400">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-neutral-400" />
          <span className="truncate">{project.wardOrZone}</span>
        </div>

        {/* Simple 3-Box Stats */}
        <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-[#faf9f6] border border-neutral-200/60 p-3 text-center">
          <div>
            <div className="text-[10px] uppercase font-medium text-neutral-400">Approved</div>
            <div className="mt-0.5 text-xs sm:text-sm font-semibold text-neutral-900">
              {formatCrores(project.sanctionedAmountCr)}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-medium text-neutral-400">Paid Out</div>
            <div className="mt-0.5 text-xs sm:text-sm font-semibold text-neutral-900">
              {formatCrores(project.actualDisbursedCr)}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-medium text-neutral-400">Work Done</div>
            <div className="mt-0.5 text-xs sm:text-sm font-semibold text-neutral-900">
              {project.physicalProgressPct}%
            </div>
          </div>
        </div>

        {/* Delay & Extra Cost Badges */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {isDelayed && (
            <span className="inline-flex items-center gap-1 rounded-md bg-rose-50 border border-rose-200 px-2 py-0.5 text-[11px] font-medium text-rose-700">
              <Clock className="h-3 w-3" />
              {delayStr}
            </span>
          )}
          {costOverrun > 0 && (
            <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 border border-amber-200 px-2 py-0.5 text-[11px] font-medium text-amber-800">
              <TrendingUp className="h-3 w-3" />
              +{costOverrunPct}% Extra Cost
            </span>
          )}
        </div>

        {/* Clean Notices Preview */}
        {project.redFlags.length > 0 && (
          <div className="mt-3.5 pt-3 border-t border-neutral-100 space-y-1.5">
            <div className="text-[11px] font-medium text-neutral-500">
              Notices:
            </div>
            <div className="space-y-1.5">
              {project.redFlags.slice(0, 2).map((rf) => (
                <div key={rf.id} className="text-xs text-neutral-700 flex items-start gap-1.5 leading-snug">
                  <span className="text-neutral-400 mt-1.5 h-1 w-1 rounded-full bg-neutral-400 shrink-0" />
                  <span className="line-clamp-1">{rf.title}</span>
                </div>
              ))}
              {project.redFlags.length > 2 && (
                <span className="text-[11px] text-neutral-400 block pt-0.5">
                  +{project.redFlags.length - 2} more notices
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
        <span className="text-neutral-400">
          Target: {new Date(project.revisedDeadline).getFullYear()}
        </span>
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors"
        >
          <span>See Details</span>
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
