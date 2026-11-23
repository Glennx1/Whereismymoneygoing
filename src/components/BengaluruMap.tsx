"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Project } from "@/lib/types";
import { formatCrores, formatPct, statusLabel, bestCostCr, calculateEstimatedSpentCr } from "@/lib/utils";
import { ArrowRight, MapPin } from "lucide-react";

// Dynamically import Leaflet map with no SSR
const LeafletMapInner = dynamic(() => import("./LeafletMapInner"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[60vh] lg:min-h-[460px] rounded-xl bg-neutral-100 flex items-center justify-center text-xs text-neutral-400">
      Loading OpenStreetMap alignments...
    </div>
  ),
});

interface BengaluruMapProps {
  projects: Project[];
}

export function BengaluruMap({ projects }: BengaluruMapProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(
    projects[0]?.id || ""
  );
  const [filterStage, setFilterStage] = useState<string>("ALL");

  const filteredProjects = projects.filter((p) => {
    if (filterStage === "ALL") return true;
    return p.category === filterStage;
  });

  const selectedProject =
    filteredProjects.find((p) => p.id === selectedProjectId) ||
    filteredProjects[0] ||
    null;

  const isCompleted = selectedProject?.category === "completed" || selectedProject?.status === "completed";
  const estimatedSpent = selectedProject && !isCompleted ? calculateEstimatedSpentCr(selectedProject) : null;

  return (
    <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 rounded-2xl border border-neutral-200/90 bg-white p-3 sm:p-5 shadow-xs">
      {/* Map Area */}
      <div className="lg:col-span-2 relative rounded-xl border border-neutral-200/80 overflow-hidden flex flex-col justify-between min-h-[60vh] lg:min-h-[500px]">
        {/* Map Header / Filters & Legend */}
        <div className="z-10 bg-white/95 border-b border-neutral-200 p-3 backdrop-blur-sm flex flex-wrap items-center justify-between gap-2.5">
          {/* Stage Filters */}
          <div className="flex items-center gap-1 overflow-x-auto text-xs scrollbar-none">
            {[
              { id: "ALL", label: "All" },
              { id: "ongoing", label: "In Progress" },
              { id: "completed", label: "Completed" },
              { id: "planned", label: "Planned" },
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => setFilterStage(st.id)}
                className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium transition-colors shrink-0 ${
                  filterStage === st.id
                    ? "bg-neutral-900 text-white"
                    : "bg-neutral-100 text-neutral-600 hover:text-neutral-900"
                }`}
              >
                {st.label}
              </button>
            ))}
          </div>

          {/* Color Legend */}
          <div className="flex items-center gap-3 text-[11px] text-neutral-500">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Completed
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-amber-500" /> In Progress
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-blue-500" /> Planned
            </span>
          </div>
        </div>

        {/* Real Leaflet Map with OSM Tiles & Real GeoJSON */}
        <div className="relative w-full min-h-[60vh] lg:min-h-[460px] flex-1">
          <LeafletMapInner
            projects={filteredProjects}
            selectedProject={selectedProject}
            onSelectProject={(p) => setSelectedProjectId(p.id)}
          />
        </div>

        {/* Map Footer Note */}
        <div className="z-10 bg-white/95 border-t border-neutral-200/80 px-3 py-1.5 text-[11px] text-neutral-500 flex items-center justify-between">
          <span>Click any marker or line to inspect spending and delays</span>
          <span>{filteredProjects.length} shown</span>
        </div>
      </div>

      {/* Project Inspector: Bottom Sheet on Mobile / Sidebar on Desktop */}
      <div className="rounded-2xl lg:rounded-xl border border-neutral-200/90 bg-[#faf9f6] p-4 sm:p-5 flex flex-col justify-between space-y-4 shadow-sm lg:shadow-none">
        {selectedProject ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-1 flex-wrap">
              <span className="rounded bg-white px-2 py-0.5 text-xs font-semibold text-neutral-800 border border-neutral-200">
                {selectedProject.agencyCode} • {selectedProject.sector}
              </span>
              <span className="text-[11px] font-medium text-neutral-500 capitalize">
                {statusLabel(selectedProject.status)}
              </span>
            </div>

            <div>
              <h3 className="text-base font-semibold text-neutral-900 leading-snug">
                {selectedProject.title}
              </h3>
              <p className="mt-1 text-xs text-neutral-500 line-clamp-3 leading-relaxed">
                {selectedProject.tagline}
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-neutral-500">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-neutral-400" />
              <span className="truncate">{selectedProject.wardOrZone}</span>
            </div>

            {/* 3 Metric Mini Grid */}
            <div className="grid grid-cols-3 gap-2 rounded-lg bg-white border border-neutral-200/70 p-3 text-center">
              <div>
                <div className="text-[10px] uppercase font-medium text-neutral-400">
                  {isCompleted ? "Final Cost (Reported)" : "Reported Cost"}
                </div>
                <div className="text-xs font-semibold text-neutral-900 mt-0.5 truncate">
                  {formatCrores(bestCostCr(selectedProject))}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase font-medium text-neutral-400">
                  {isCompleted ? "Paid Out" : "Spent (Est.)"}
                </div>
                <div className="text-xs font-semibold text-neutral-900 mt-0.5 truncate">
                  {isCompleted ? (
                    formatCrores(bestCostCr(selectedProject))
                  ) : selectedProject.actualDisbursedCr !== null ? (
                    formatCrores(selectedProject.actualDisbursedCr)
                  ) : estimatedSpent !== null ? (
                    <span title="Estimated from cost × progress">~{formatCrores(estimatedSpent)}</span>
                  ) : (
                    "Not available"
                  )}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase font-medium text-neutral-400">Work Done</div>
                <div className="text-xs font-semibold text-neutral-900 mt-0.5">
                  {isCompleted ? "100%" : formatPct(selectedProject.physicalProgressPct)}
                </div>
              </div>
            </div>

            {/* Target and Notices info */}
            <div className="space-y-1.5 text-xs text-neutral-600 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">
                  {isCompleted ? "Opened On:" : "Current Target:"}
                </span>
                <span className="font-medium text-neutral-900">
                  {selectedProject.completionDate
                    ? new Date(selectedProject.completionDate).toLocaleDateString("en-IN", { month: "short", year: "numeric" })
                    : selectedProject.revisedDeadline
                    ? new Date(selectedProject.revisedDeadline).toLocaleDateString("en-IN", { month: "short", year: "numeric" })
                    : "Not confirmed"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-neutral-400">Sourced Notices:</span>
                <span className="font-medium text-neutral-900">
                  {selectedProject.redFlags.length} notice{selectedProject.redFlags.length === 1 ? "" : "s"}
                </span>
              </div>
              {selectedProject.geometrySource && (
                <div className="flex items-center justify-between text-[11px] text-neutral-400 pt-1 border-t border-neutral-200/50">
                  <span>Alignment:</span>
                  <span className="truncate max-w-[180px] font-mono text-[10px]">
                    OSM verified
                  </span>
                </div>
              )}
            </div>

            {selectedProject.redFlags.length > 0 && (
              <div className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-200/80 space-y-1">
                <div className="text-[11px] font-semibold text-amber-900">Top Notice:</div>
                <p className="text-[11px] text-amber-900/90 line-clamp-2 leading-relaxed">
                  {selectedProject.redFlags[0].title}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="p-8 text-center text-xs text-neutral-400">
            No projects in this stage filter.
          </div>
        )}

        {selectedProject && (
          <div className="pt-3 border-t border-neutral-200">
            <Link
              href={`/projects/${selectedProject.slug}`}
              className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-neutral-900 px-4 py-2.5 text-xs font-medium text-white hover:bg-neutral-800 transition-colors"
            >
              <span>View Full Project Dossier</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
