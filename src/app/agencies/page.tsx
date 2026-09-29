import { agencies } from "@/data/agencies";
import { projects } from "@/data/projects";
import { formatCrores } from "@/lib/utils";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function AgenciesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 space-y-8">
      <div className="space-y-1">
        <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
          Departments & Boards
        </h1>
        <p className="text-xs sm:text-sm text-neutral-500 max-w-2xl">
          The public authorities responsible for building roads, metro lines, drains, and water infrastructure in Bengaluru.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {agencies.map((agency) => {
          const agencyProjects = projects.filter((p) => p.agencyCode === agency.code);
          const sanctionedCr = agencyProjects.reduce((sum, p) => sum + p.sanctionedAmountCr, 0);
          const disbursedCr = agencyProjects.reduce((sum, p) => sum + p.actualDisbursedCr, 0);
          const redFlagsCount = agencyProjects.reduce((sum, p) => sum + p.redFlags.length, 0);

          return (
            <div
              key={agency.id}
              className="rounded-2xl border border-neutral-200/90 bg-white p-5 space-y-4 flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="rounded-md bg-neutral-100 px-2.5 py-0.5 text-xs font-semibold text-neutral-900 border border-neutral-200">
                    {agency.code}
                  </span>
                  <a
                    href={agency.website}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-400 hover:text-neutral-900 transition-colors"
                    title="Official Website"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-neutral-900 tracking-tight">{agency.name}</h3>
                  <div className="text-xs text-neutral-400 mt-0.5">{agency.fullName}</div>
                </div>

                <p className="text-xs text-neutral-600 leading-relaxed line-clamp-3">
                  {agency.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-neutral-100 text-xs">
                  <div className="rounded-xl bg-[#faf9f6] p-2.5">
                    <span className="text-neutral-400 text-[11px]">Annual Budget:</span>
                    <div className="font-semibold text-neutral-900 mt-0.5">{formatCrores(agency.annualBudgetCr)}</div>
                  </div>
                  <div className="rounded-xl bg-[#faf9f6] p-2.5">
                    <span className="text-neutral-400 text-[11px]">Tracked Projects:</span>
                    <div className="font-semibold text-neutral-900 mt-0.5">{agencyProjects.length} Projects</div>
                  </div>
                </div>

                {sanctionedCr > 0 && (
                  <div className="rounded-xl bg-[#faf9f6] p-2.5 text-xs space-y-1">
                    <div className="flex justify-between text-neutral-500">
                      <span>Total Approved:</span>
                      <span className="font-semibold text-neutral-900">{formatCrores(sanctionedCr)}</span>
                    </div>
                    <div className="flex justify-between text-neutral-500">
                      <span>Paid Out:</span>
                      <span className="font-semibold text-neutral-900">{formatCrores(disbursedCr)}</span>
                    </div>
                    {redFlagsCount > 0 && (
                      <div className="flex justify-between text-rose-700 font-medium pt-1 border-t border-neutral-200/60">
                        <span>Warnings:</span>
                        <span>{redFlagsCount} Notices</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                <span className="text-neutral-400 text-[11px] truncate max-w-[170px]">
                  HQ: {agency.headquarters.split(",")[0]}
                </span>
                <Link
                  href={`/?agency=${agency.code}`}
                  className="inline-flex items-center gap-1 font-semibold text-neutral-900 hover:text-neutral-600"
                >
                  <span>View Projects</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
