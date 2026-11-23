import Link from "next/link";
import { Project } from "@/lib/types";
import {
  formatCrores,
  formatPct,
  calculateDelayString,
  calculateCostOverrunPct,
  bestCostCr,
  calculateEstimatedSpentCr,
  statusLabel,
} from "@/lib/utils";
import { Clock, TrendingUp, ArrowRight, MapPin } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  distanceKm?: number;
}

export function ProjectCard({ project, distanceKm }: ProjectCardProps) {
  const isCompleted = project.status === "completed";
  const delayStr = calculateDelayString(project.originalDeadline, project.revisedDeadline);
  const isDelayed = delayStr !== null && delayStr !== "On Schedule" && !isCompleted;
  const costOverrunPct = calculateCostOverrunPct(project.sanctionedAmountCr, project.revisedEstimatedCostCr);
  const hasCostOverrun = costOverrunPct !== null && costOverrunPct > 0;
  const estimatedSpent = calculateEstimatedSpentCr(project);

  const getStatusBadge = (status: Project["status"]) => {
    switch (status) {
      case "stalled":
        return "bg-rose-50 text-rose-700 border-rose-200";
      case "under_construction":
        return "bg-amber-50 text-amber-800 border-amber-200";
      case "partially_operational":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "completed":
        return "bg-emerald-50 text-emerald-800 border-emerald-200";
      case "tendering":
      case "announced":
        return "bg-purple-50 text-purple-700 border-purple-200";
      default:
        return "bg-neutral-100 text-neutral-600 border-neutral-200";
    }
  };

  return (
    <div className="group rounded-2xl border border-neutral-200/90 bg-white p-5 transition-all duration-200 hover:border-neutral-300 hover:shadow-md flex flex-col justify-between">
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="rounded-md bg-neutral-100 px-2 py-0.5 text-xs font-semibold text-neutral-800 border border-neutral-200/60">
              {project.agencyCode}
            </span>
            <span className="text-xs text-neutral-500">
              {project.sector}
            </span>
            {project.lengthKm && (
              <span className="text-[11px] text-neutral-400">
                • {project.lengthKm} km
              </span>
            )}
          </div>

          <span
            className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium border ${getStatusBadge(
              project.status
            )}`}
          >
            {statusLabel(project.status)}
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
        <div className="mt-3 flex items-center justify-between gap-1.5 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5 truncate">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-neutral-400" />
            <span className="truncate">{project.wardOrZone}</span>
          </div>
          {distanceKm !== undefined && (
            <span className="shrink-0 text-[10px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
              {distanceKm < 1 ? `${Math.round(distanceKm * 1000)}m away` : `${distanceKm.toFixed(1)} km away`}
            </span>
          )}
        </div>

        {/* 3-Box Stats */}
        <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-[#faf9f6] border border-neutral-200/60 p-3 text-center">
          <div>
            <div className="text-[10px] uppercase font-medium text-neutral-400">
              {isCompleted ? "Final Cost (Reported)" : "Reported Cost"}
            </div>
            <div className="mt-0.5 text-xs sm:text-sm font-semibold text-neutral-900 truncate">
              {formatCrores(bestCostCr(project))}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-medium text-neutral-400">
              {isCompleted ? "Paid Out" : "Spent (Est.)"}
            </div>
            <div className="mt-0.5 text-xs sm:text-sm font-semibold text-neutral-900 truncate">
              {isCompleted ? (
                formatCrores(bestCostCr(project))
              ) : project.actualDisbursedCr !== null ? (
                formatCrores(project.actualDisbursedCr)
              ) : estimatedSpent !== null ? (
                <span title="Estimated from cost × progress">~{formatCrores(estimatedSpent)}</span>
              ) : (
                <span className="text-neutral-400 text-xs">Not available</span>
              )}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase font-medium text-neutral-400">Work Done</div>
            <div className="mt-0.5 text-xs sm:text-sm font-semibold text-neutral-900 truncate">
              {isCompleted ? "100%" : formatPct(project.physicalProgressPct)}
            </div>
          </div>
        </div>

        {/* Delay & Overrun Badges */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {isDelayed && (
            <span className="inline-flex items-center gap-1 rounded-md bg-rose-50 border border-rose-200 px-2 py-0.5 text-[11px] font-medium text-rose-700">
              <Clock className="h-3 w-3" />
              {delayStr}
            </span>
          )}
          {hasCostOverrun && (
            <span className="inline-flex items-center gap-1 rounded-md bg-amber-50 border border-amber-200 px-2 py-0.5 text-[11px] font-medium text-amber-800">
              <TrendingUp className="h-3 w-3" />
              +{costOverrunPct}% Extra Cost
            </span>
          )}
        </div>

        {/* Clean Notices Preview */}
        {project.redFlags.length === 0 ? (
          <div className="mt-3.5 pt-3 border-t border-neutral-100 text-[11px] text-neutral-400">
            No sourced notices recorded
          </div>
        ) : (
          <div className="mt-3.5 pt-3 border-t border-neutral-100 space-y-1.5">
            <div className="text-[11px] font-medium text-neutral-500">
              Documented Notices ({project.redFlags.length}):
            </div>
            <div className="space-y-1">
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
          {isCompleted
            ? `Opened: ${project.completionDate ? new Date(project.completionDate).getFullYear() : "Done"}`
            : `Target: ${project.revisedDeadline ? new Date(project.revisedDeadline).getFullYear() : "Pending"}`}
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
