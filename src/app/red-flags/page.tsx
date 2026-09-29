import Link from "next/link";
import { projects } from "@/data/projects";
import { RedFlagBadge } from "@/components/RedFlagBadge";
import { ArrowRight } from "lucide-react";

export default function RedFlagsPage() {
  const allFlagsWithProjects = projects.flatMap((p) =>
    p.redFlags.map((flag) => ({
      flag,
      project: p,
    }))
  );

  const criticalFlags = allFlagsWithProjects.filter((item) => item.flag.severity === "CRITICAL");
  const highFlags = allFlagsWithProjects.filter((item) => item.flag.severity === "HIGH");
  const otherFlags = allFlagsWithProjects.filter(
    (item) => item.flag.severity === "MEDIUM" || item.flag.severity === "LOW"
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 space-y-10">
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
          Delays & Warnings
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 max-w-2xl">
          A list of projects with severe timeline delays, large budget increases, or official audit notices.
        </p>
      </div>

      {/* Stalled & Large Delays */}
      <section className="space-y-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-rose-600" />
          <h2 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">
            Stalled Projects & Major Delays ({criticalFlags.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {criticalFlags.map(({ flag, project }) => (
            <div
              key={flag.id}
              className="rounded-2xl border border-neutral-200/90 bg-white p-5 space-y-3 flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-2.5">
                <div className="text-xs font-medium text-neutral-500">
                  Project: <strong className="text-neutral-900">{project.title}</strong>
                </div>

                <RedFlagBadge redFlag={flag} detailed={true} />
              </div>

              <div className="pt-2 border-t border-neutral-100 flex justify-end">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
                >
                  <span>View Project</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* High */}
      <section className="space-y-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber-600" />
          <h2 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">
            Major Delays & Cost Increases ({highFlags.length})
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highFlags.map(({ flag, project }) => (
            <div
              key={flag.id}
              className="rounded-2xl border border-neutral-200/90 bg-white p-5 space-y-3 flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-2.5">
                <div className="text-xs font-medium text-neutral-500">
                  Project: <strong className="text-neutral-900">{project.title}</strong>
                </div>

                <RedFlagBadge redFlag={flag} detailed={true} />
              </div>

              <div className="pt-2 border-t border-neutral-100 flex justify-end">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
                >
                  <span>View Project</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other */}
      {otherFlags.length > 0 && (
        <section className="space-y-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-neutral-400" />
            <h2 className="text-sm font-semibold text-neutral-900 uppercase tracking-wider">
              Other Notices ({otherFlags.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherFlags.map(({ flag, project }) => (
              <div
                key={flag.id}
                className="rounded-2xl border border-neutral-200/90 bg-white p-5 space-y-3 flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-2.5">
                  <div className="text-xs font-medium text-neutral-500">
                    Project: <strong className="text-neutral-900">{project.title}</strong>
                  </div>

                  <RedFlagBadge redFlag={flag} detailed={true} />
                </div>

                <div className="pt-2 border-t border-neutral-100 flex justify-end">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 hover:text-neutral-600 transition-colors"
                  >
                    <span>View Project</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
