"use client";

import { useMemo } from "react";
import { Project } from "@/lib/types";
import { formatMonthYear, calculateDelayString, BUILD_DATE } from "@/lib/utils";
import { Clock, CheckCircle2, AlertTriangle, Calendar, Flag } from "lucide-react";

interface ProjectTimelineBarProps {
  project: Project;
}

interface TimelinePoint {
  label: string;
  dateStr: string;
  displayDate: string;
  status: "past" | "current" | "future";
  type: "start" | "original" | "today" | "target" | "completed";
  detail?: string;
}

export function ProjectTimelineBar({ project }: ProjectTimelineBarProps) {
  const isCompleted = project.status === "completed" || project.category === "completed";
  const todayStr = BUILD_DATE; // "2026-11-23"

  const delayStr = calculateDelayString(
    project.originalDeadline,
    project.revisedDeadline,
    isCompleted,
    project.completionDate
  );

  const timelineData = useMemo(() => {
    const points: TimelinePoint[] = [];

    // 1. Original Deadline
    if (project.originalDeadline) {
      const isPast = project.originalDeadline < todayStr;
      points.push({
        label: "Original Promise",
        dateStr: project.originalDeadline,
        displayDate: formatMonthYear(project.originalDeadline),
        status: isPast ? "past" : "future",
        type: "original",
        detail: "Sanctioned completion date",
      });
    }

    // 2. Today marker
    points.push({
      label: "Today (Audit)",
      dateStr: todayStr,
      displayDate: formatMonthYear(todayStr),
      status: "current",
      type: "today",
      detail: "Current tracking date",
    });

    // 3. Current Target or Completed Date
    if (isCompleted && project.completionDate) {
      points.push({
        label: "Actual Opening",
        dateStr: project.completionDate,
        displayDate: formatMonthYear(project.completionDate),
        status: "past",
        type: "completed",
        detail: "Commercial operation commenced",
      });
    } else if (project.revisedDeadline) {
      const isPast = project.revisedDeadline < todayStr;
      points.push({
        label: isPast ? "Passed Target" : "Current Target",
        dateStr: project.revisedDeadline,
        displayDate: formatMonthYear(project.revisedDeadline),
        status: isPast ? "past" : "future",
        type: "target",
        detail: isPast ? "Overdue deadline" : "Revised expected opening",
      });
    }

    // Sort chronologically
    points.sort((a, b) => new Date(a.dateStr).getTime() - new Date(b.dateStr).getTime());

    return points;
  }, [project, isCompleted, todayStr]);

  if (!project.originalDeadline && !project.revisedDeadline && !project.completionDate) {
    return null;
  }

  // Calculate percentage positions along the timeline
  const minTime = Math.min(
    ...timelineData.map((p) => new Date(p.dateStr).getTime())
  );
  const maxTime = Math.max(
    ...timelineData.map((p) => new Date(p.dateStr).getTime())
  );
  const span = maxTime - minTime || 1;

  const isOverdue =
    !isCompleted &&
    project.revisedDeadline &&
    new Date(project.revisedDeadline).getTime() < new Date(todayStr).getTime();

  return (
    <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-5 shadow-xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-100 pb-4">
        <div>
          <h2 className="text-base font-semibold text-neutral-900 tracking-tight flex items-center gap-2">
            <Clock className="h-4 w-4 text-neutral-700" />
            <span>Promised vs. Actual Timeline</span>
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Original contract target compared against current operational timeline.
          </p>
        </div>

        {delayStr && (
          <div
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border ${
              isCompleted
                ? "bg-neutral-100 text-neutral-800 border-neutral-200"
                : isOverdue
                ? "bg-rose-50 text-rose-800 border-rose-200"
                : delayStr === "On Schedule"
                ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                : "bg-amber-50 text-amber-800 border-amber-200"
            }`}
          >
            {isCompleted ? (
              <CheckCircle2 className="h-3.5 w-3.5 text-neutral-600" />
            ) : isOverdue ? (
              <AlertTriangle className="h-3.5 w-3.5 text-rose-600" />
            ) : (
              <Clock className="h-3.5 w-3.5 text-amber-600" />
            )}
            <span>{delayStr}</span>
          </div>
        )}
      </div>

      {/* Visual Timeline Bar */}
      <div className="pt-4 pb-2">
        {/* Track Line */}
        <div className="relative w-full h-2 bg-neutral-100 rounded-full my-6">
          {/* Progress bar fill if dates exist */}
          {timelineData.length >= 2 && (
            <div
              className={`absolute top-0 bottom-0 left-0 rounded-full ${
                isCompleted
                  ? "bg-emerald-600"
                  : isOverdue
                  ? "bg-rose-500"
                  : "bg-neutral-900"
              }`}
              style={{
                width: isCompleted
                  ? "100%"
                  : `${Math.min(
                      100,
                      Math.max(
                        0,
                        ((new Date(todayStr).getTime() - minTime) / span) * 100
                      )
                    )}%`,
              }}
            />
          )}

          {/* Markers */}
          {timelineData.map((pt, idx) => {
            const pct = Math.min(
              95,
              Math.max(5, ((new Date(pt.dateStr).getTime() - minTime) / span) * 100)
            );

            const isToday = pt.type === "today";
            const isOrig = pt.type === "original";
            const isDone = pt.type === "completed";
            const isTarget = pt.type === "target";

            return (
              <div
                key={idx}
                className="absolute -top-2 -translate-x-1/2 flex flex-col items-center"
                style={{ left: `${pct}%` }}
              >
                {/* Dot */}
                <div
                  className={`h-6 w-6 rounded-full border-2 flex items-center justify-center transition-transform hover:scale-110 shadow-xs ${
                    isDone
                      ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                      : isToday
                      ? "border-neutral-900 bg-neutral-900 text-white"
                      : isOrig
                      ? "border-neutral-400 bg-white text-neutral-600"
                      : isOverdue && isTarget
                      ? "border-rose-500 bg-rose-50 text-rose-700"
                      : "border-neutral-800 bg-white text-neutral-900"
                  }`}
                  title={`${pt.label}: ${pt.displayDate}`}
                >
                  {isDone ? (
                    <CheckCircle2 className="h-3 w-3" />
                  ) : isToday ? (
                    <span className="text-[9px] font-bold">Now</span>
                  ) : isOrig ? (
                    <Calendar className="h-3 w-3" />
                  ) : (
                    <Flag className="h-3 w-3" />
                  )}
                </div>

                {/* Text Label */}
                <div
                  className={`mt-2 text-center whitespace-nowrap text-[11px] ${
                    isToday
                      ? "font-bold text-neutral-900"
                      : isDone
                      ? "font-semibold text-emerald-800"
                      : "text-neutral-600"
                  }`}
                >
                  <div className="font-medium text-[10px] uppercase text-neutral-400">
                    {pt.label}
                  </div>
                  <div>{pt.displayDate}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Explanatory notes */}
      <div className="pt-8 border-t border-neutral-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-500">
        <div>
          <span className="font-medium text-neutral-700">Contract target: </span>
          <span>
            {project.originalDeadline
              ? formatMonthYear(project.originalDeadline)
              : "No original contract deadline published"}
          </span>
        </div>
        <div>
          <span className="font-medium text-neutral-700">
            {isCompleted ? "Delivered on: " : "Current operational target: "}
          </span>
          <span>
            {isCompleted
              ? formatMonthYear(project.completionDate)
              : project.revisedDeadline
              ? formatMonthYear(project.revisedDeadline)
              : "Unannounced"}
          </span>
        </div>
      </div>
    </div>
  );
}
