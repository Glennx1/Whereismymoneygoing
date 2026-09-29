"use client";

import { useState } from "react";
import Link from "next/link";
import { Project } from "@/lib/types";
import { formatCrores } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface BengaluruMapProps {
  projects: Project[];
}

export function BengaluruMap({ projects }: BengaluruMapProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(projects[0] || null);

  const minLat = 12.85;
  const maxLat = 13.22;
  const minLng = 77.45;
  const maxLng = 77.80;

  const projectToSvgCoords = (lat: number, lng: number) => {
    const x = ((lng - minLng) / (maxLng - minLng)) * 800;
    const y = ((maxLat - lat) / (maxLat - minLat)) * 600;
    return { x, y };
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-sm">
      {/* Map Visualizer */}
      <div className="lg:col-span-2 relative rounded-xl border border-neutral-200/70 bg-[#f9f9fb] overflow-hidden min-h-[460px] flex flex-col justify-between p-4">
        {/* Map Header / Legend */}
        <div className="z-10 flex flex-wrap items-center justify-between gap-3 bg-white/90 border border-neutral-200/80 rounded-lg p-3 backdrop-blur-sm shadow-xs">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-neutral-900" />
            <span className="text-xs font-semibold text-neutral-900">
              Bengaluru City Map
            </span>
          </div>
          <div className="flex items-center gap-3 text-xs text-neutral-500">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-rose-500" /> Stalled
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-amber-500" /> In Progress
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500" /> Finished
            </span>
          </div>
        </div>

        {/* SVG Canvas */}
        <div className="relative w-full h-[400px] my-auto">
          <svg viewBox="0 0 800 600" className="w-full h-full select-none">
            <defs>
              <pattern id="light-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#f0f0f2" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#light-grid)" />

            {/* Outer Ring Road outline */}
            <ellipse
              cx="410"
              cy="340"
              rx="210"
              ry="170"
              fill="none"
              stroke="#d1d1d6"
              strokeWidth="2"
              strokeDasharray="6 4"
            />
            <text x="430" y="525" fill="#8e8e93" fontSize="11" fontFamily="sans-serif">
              Outer Ring Road (ORR)
            </text>

            {/* Airport Expressway Corridor line */}
            <line
              x1="410"
              y1="300"
              x2="480"
              y2="50"
              stroke="#cbd5e1"
              strokeWidth="2"
              strokeDasharray="4 2"
            />
            <text x="490" y="60" fill="#64748b" fontSize="11" fontWeight="bold">
              Airport (KIA)
            </text>

            {/* Project Nodes */}
            {projects.map((proj) => {
              const { x, y } = projectToSvgCoords(proj.coordinates.lat, proj.coordinates.lng);
              const isSelected = selectedProject?.id === proj.id;

              let nodeColor = "#f59e0b"; // amber
              if (proj.status === "stalled") nodeColor = "#e11d48"; // rose
              if (proj.status === "completed" || proj.status === "partially_operational") nodeColor = "#10b981"; // emerald

              return (
                <g
                  key={proj.id}
                  className="cursor-pointer"
                  onClick={() => setSelectedProject(proj)}
                >
                  {isSelected && (
                    <circle
                      cx={x}
                      cy={y}
                      r="16"
                      fill={nodeColor}
                      opacity="0.15"
                    />
                  )}
                  <circle
                    cx={x}
                    cy={y}
                    r={isSelected ? "9" : "6"}
                    fill={nodeColor}
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                  <text
                    x={x + 10}
                    y={y + 4}
                    fill={isSelected ? "#1d1d1f" : "#6e6e73"}
                    fontSize={isSelected ? "12" : "11"}
                    fontWeight={isSelected ? "600" : "500"}
                  >
                    {proj.title.split("(")[0].trim().slice(0, 22)}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        <div className="z-10 text-[11px] text-neutral-400 text-center">
          Click any point to view money spent and delays.
        </div>
      </div>

      {/* Inspector Sidebar */}
      <div className="rounded-xl border border-neutral-200/70 bg-[#faf9f6] p-5 flex flex-col justify-between">
        {selectedProject ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="rounded bg-white px-2 py-0.5 text-xs font-semibold text-neutral-800 border border-neutral-200">
                {selectedProject.agencyCode} • {selectedProject.sector}
              </span>
              <span className="text-xs text-neutral-500 font-medium">
                {selectedProject.status === "stalled" ? "Stalled" : "In Progress"}
              </span>
            </div>

            <div>
              <h4 className="text-base font-semibold text-neutral-900 leading-snug">
                {selectedProject.title}
              </h4>
              <p className="mt-1 text-xs text-neutral-500 line-clamp-3 leading-relaxed">
                {selectedProject.tagline}
              </p>
            </div>

            <div className="rounded-xl bg-white border border-neutral-200/80 p-3.5 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-neutral-500">Approved Budget:</span>
                <span className="font-semibold text-neutral-900">{formatCrores(selectedProject.sanctionedAmountCr)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Paid Out So Far:</span>
                <span className="font-semibold text-neutral-900">{formatCrores(selectedProject.actualDisbursedCr)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Current Cost Estimate:</span>
                <span className="font-semibold text-neutral-900">{formatCrores(selectedProject.revisedEstimatedCostCr)}</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-neutral-100">
                <span className="text-neutral-500">Work Finished:</span>
                <span className="font-semibold text-neutral-900">{selectedProject.physicalProgressPct}%</span>
              </div>
            </div>

            {selectedProject.redFlags.length > 0 && (
              <div className="rounded-lg bg-rose-50 border border-rose-200/60 p-3 text-xs space-y-1">
                <div className="font-semibold text-rose-900">{selectedProject.redFlags[0].title}</div>
                <div className="text-rose-700 text-[11px] leading-relaxed">{selectedProject.redFlags[0].summary}</div>
              </div>
            )}

            <div className="pt-2">
              <Link
                href={`/projects/${selectedProject.slug}`}
                className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-neutral-900 py-2.5 px-4 text-xs font-medium text-white hover:bg-neutral-800 transition-colors"
              >
                <span>View Full Details</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="text-center text-xs text-neutral-400 py-10">
            Select a project on the map.
          </div>
        )}
      </div>
    </div>
  );
}
