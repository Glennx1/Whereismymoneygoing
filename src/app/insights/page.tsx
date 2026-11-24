"use client";

import { useMemo } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import {
  formatCrores,
  bestCostCr,
  calculateCostOverrunPct,
  calculateDelayString,
  BUILD_DATE,
} from "@/lib/utils";
import {
  TrendingUp,
  Clock,
  PieChart,
  ShieldCheck,
  ArrowLeft,
  Compass,
  AlertCircle,
} from "lucide-react";

export default function InsightsPage() {
  // 1. Portfolio split: Completed, In Progress, and Planned kept strictly separated
  const portfolioStats = useMemo(() => {
    const completed = projects.filter((p) => p.category === "completed");
    const ongoing = projects.filter((p) => p.category === "ongoing");
    const planned = projects.filter((p) => p.category === "planned");

    const costOf = (list: typeof projects) =>
      list.reduce((acc, p) => acc + (bestCostCr(p) ?? 0), 0);

    const costKnownCount = (list: typeof projects) =>
      list.filter((p) => bestCostCr(p) !== null).length;

    return {
      completed: {
        count: completed.length,
        cost: costOf(completed),
        knownCount: costKnownCount(completed),
      },
      ongoing: {
        count: ongoing.length,
        cost: costOf(ongoing),
        knownCount: costKnownCount(ongoing),
      },
      planned: {
        count: planned.length,
        cost: costOf(planned),
        knownCount: costKnownCount(planned),
      },
    };
  }, []);

  // 2. Schedule Slippages Leaderboard (measuring to max(revised, BUILD_DATE))
  const delayedProjects = useMemo(() => {
    const buildTime = new Date(BUILD_DATE).getTime();

    return projects
      .map((p) => {
        if (!p.originalDeadline) return null;

        const isCompleted = p.status === "completed" || p.category === "completed";
        const origTime = new Date(p.originalDeadline).getTime();

        let endTime: number;
        let isOverdue = false;

        if (isCompleted && p.completionDate) {
          endTime = new Date(p.completionDate).getTime();
        } else if (p.revisedDeadline) {
          const revTime = new Date(p.revisedDeadline).getTime();
          isOverdue = revTime < buildTime;
          endTime = Math.max(revTime, buildTime);
        } else {
          return null;
        }

        const diffDays = Math.round((endTime - origTime) / (1000 * 60 * 60 * 24));
        if (diffDays <= 0) return null;

        const delayMonths = Math.round(diffDays / 30.4);
        const delayStr = calculateDelayString(
          p.originalDeadline,
          p.revisedDeadline,
          isCompleted,
          p.completionDate
        );

        return {
          id: p.id,
          title: p.title,
          agency: p.agencyCode,
          sector: p.sector,
          originalDeadline: p.originalDeadline,
          revisedDeadline: p.revisedDeadline,
          completionDate: p.completionDate,
          isCompleted,
          isOverdue,
          delayMonths,
          delayStr,
          slug: p.slug,
          status: p.status,
        };
      })
      .filter((item): item is NonNullable<typeof item> => item !== null)
      .sort((a, b) => b.delayMonths - a.delayMonths);
  }, []);

  // 3. Documented Cost Changes (consistent basis only: original sanction vs revised)
  // Yellow Line and Bannerghatta Road excluded and moved to "Sources Disagree"
  const documentedCostChanges = useMemo(() => {
    const excludedSlugs = [
      "namma-metro-yellow-line-rv-road-bommasandra",
      "bannerghatta-road-widening-and-jedimara-flyover",
    ];

    return projects
      .filter((p) => !excludedSlugs.includes(p.slug))
      .map((p) => {
        const pct = calculateCostOverrunPct(p.sanctionedAmountCr, p.revisedEstimatedCostCr);
        if (pct === null || pct <= 0) return null;
        const diffCr = (p.revisedEstimatedCostCr ?? 0) - (p.sanctionedAmountCr ?? 0);
        return {
          id: p.id,
          title: p.title,
          agency: p.agencyCode,
          sanctionedCr: p.sanctionedAmountCr,
          revisedCr: p.revisedEstimatedCostCr,
          diffCr,
          pct,
          slug: p.slug,
        };
      })
      .filter((item): item is NonNullable<typeof item> => item !== null)
      .sort((a, b) => b.diffCr - a.diffCr);
  }, []);

  // 4. "Sources Disagree" Card: projects where outlets report conflicting figures
  const conflictingCostProjects = [
    {
      title: "Namma Metro Yellow Line (RV Road – Bommasandra)",
      slug: "namma-metro-yellow-line-rv-road-bommasandra",
      agency: "BMRCL",
      figures: [
        { amount: "₹5,745 Cr", source: "Union Cabinet Phase 2 sanction order (approved baseline)" },
        { amount: "₹7,160 Cr", source: "Commercial launch press reports (Deccan Herald / Times of India)" },
        { amount: "₹7,610 Cr", source: "Trackers & industry cost estimations (including rolling stock)" },
      ],
      note: "No revised Cabinet sanction order has been issued. Different news outlets cite varying total costs depending on whether rolling stock or interest during construction is included.",
    },
    {
      title: "Bannerghatta Road Widening & Flyover",
      slug: "bannerghatta-road-widening-and-jedimara-flyover",
      agency: "BBMP",
      figures: [
        { amount: "₹152 Cr", source: "Civil tender work order for road expansion and Jedimara flyover" },
        { amount: "~₹600 Cr", source: "TDR (Transferable Development Rights) landowner compensation" },
        { amount: "₹800+ Cr", source: "Combined infrastructure package estimate reported in regional media" },
      ],
      note: "The ₹800 Cr figure reported in some articles bundles land acquisition TDR liabilities with civil road widening, rather than reflecting a 395% civil contract overrun.",
    },
  ];

  // 5. Cost Per Kilometer Benchmark: Like-with-Like comparisons
  const likeWithLikeBenchmarks = useMemo(() => {
    return [
      {
        category: "Underground Metro",
        note: "Twin bored tunnels with underground station boxes (civil + systems, excluding land)",
        items: [
          {
            title: "Pink Line Underground (Reach 6 UG)",
            lengthKm: 13.8,
            costCr: 11500,
            costPerKm: 833.3,
            landIncluded: false,
            slug: "namma-metro-pink-line-underground-tavarekere-nagawara",
          },
        ],
      },
      {
        category: "Elevated Metro",
        note: "Elevated viaduct with standard elevated stations along arterial roads",
        items: [
          {
            title: "Phase 2A (Outer Ring Road: Silk Board – KR Puram)",
            lengthKm: 19.75,
            costCr: 5227,
            costPerKm: 264.7,
            landIncluded: false,
            slug: "namma-metro-phase-2a-outer-ring-road",
          },
          {
            title: "Phase 2B (Airport Line: KR Puram – KIA)",
            lengthKm: 37.0,
            costCr: 9617,
            costPerKm: 259.9,
            landIncluded: false,
            slug: "namma-metro-phase-2b-airport-line",
          },
        ],
      },
      {
        category: "Suburban Rail (At-Grade / Elevated)",
        note: "Surface railway corridor utilizing railway right-of-way",
        items: [
          {
            title: "K-RIDE Corridor 2 (Mallige: Baiyappanahalli – Chikkabanavara)",
            lengthKm: 25.2,
            costCr: 1270,
            costPerKm: 50.4,
            landIncluded: false,
            slug: "k-ride-suburban-rail-corridor-2-mallige",
          },
        ],
      },
      {
        category: "Access-Controlled Highways & Ring Roads",
        note: "Multi-lane greenfield / brownfield access-controlled highways",
        items: [
          {
            title: "Bengaluru–Mysuru Expressway (NH 275)",
            lengthKm: 118.0,
            costCr: 8480,
            costPerKm: 71.9,
            landIncluded: true,
            slug: "bengaluru-mysuru-expressway-nh-275",
          },
          {
            title: "STRR Dobbaspet–Hoskote (NH 648)",
            lengthKm: 80.0,
            costCr: 3400,
            costPerKm: 42.5,
            landIncluded: true,
            slug: "strr-dobbaspet-doddaballapur-hoskote",
          },
        ],
      },
    ];
  }, []);

  // 6. Data Quality Audit Metric
  const dataQualityStats = useMemo(() => {
    let totalFiguresChecked = 0;
    let verifiedCount = 0;
    let reportedCount = 0;
    let unverifiedCount = 0;

    projects.forEach((p) => {
      Object.values(p.dataQuality.fields).forEach((field) => {
        if (!field) return;
        totalFiguresChecked++;
        if (field.confidence === "verified") verifiedCount++;
        else if (field.confidence === "reported") reportedCount++;
        else unverifiedCount++;
      });
    });

    return {
      totalFiguresChecked,
      verifiedPct: Math.round((verifiedCount / totalFiguresChecked) * 100),
      reportedPct: Math.round((reportedCount / totalFiguresChecked) * 100),
      unverifiedPct: Math.round((unverifiedCount / totalFiguresChecked) * 100),
      verifiedCount,
      reportedCount,
      unverifiedCount,
    };
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 space-y-10">
      {/* Top Navigation */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900">
          City Infrastructure Insights &amp; Analytics
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed font-normal">
          Honest quantitative audit across {projects.length} tracked Bengaluru public infrastructure investments. Capital figures are segregated by status, timeline delays are calculated against the build date ({BUILD_DATE}), and cost metrics compare only like-with-like modes.
        </p>
      </div>

      {/* Section 1: Capital Portfolio by Project Stage (Segregated, No False Total) */}
      <section className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="border-b border-neutral-100 pb-4">
          <h2 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
            <PieChart className="h-4 w-4 text-neutral-700" />
            <span>Public Capital by Project Stage</span>
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Reported figures are segregated by delivery stage. Proposed works are never added into delivered or active totals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Completed */}
          <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/30 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-900 uppercase tracking-wider">
                Completed
              </span>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-800">
                {portfolioStats.completed.count} projects
              </span>
            </div>
            <div className="text-2xl font-bold text-emerald-950">
              {formatCrores(portfolioStats.completed.cost)}
            </div>
            <p className="text-xs text-emerald-800/80 leading-relaxed">
              Delivered assets ({portfolioStats.completed.knownCount} of {portfolioStats.completed.count} have a reported final cost). Includes Yellow Line, Mysuru Expressway, STRR North, and Cauvery V.
            </p>
          </div>

          {/* In Progress */}
          <div className="rounded-xl border border-amber-200/80 bg-amber-50/30 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-amber-900 uppercase tracking-wider">
                Under Construction
              </span>
              <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-bold text-amber-800">
                {portfolioStats.ongoing.count} projects
              </span>
            </div>
            <div className="text-2xl font-bold text-amber-950">
              {formatCrores(portfolioStats.ongoing.cost)}
            </div>
            <p className="text-xs text-amber-800/80 leading-relaxed">
              Active works ({portfolioStats.ongoing.knownCount} of {portfolioStats.ongoing.count} have a reported cost). Includes Blue Line (ORR/Airport), Pink Line UG, and Suburban Rail.
            </p>
          </div>

          {/* Planned */}
          <div className="rounded-xl border border-blue-200/80 bg-blue-50/30 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-blue-900 uppercase tracking-wider">
                Planned / Tendering
              </span>
              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-bold text-blue-800">
                {portfolioStats.planned.count} projects
              </span>
            </div>
            <div className="text-2xl font-bold text-blue-950">
              {formatCrores(portfolioStats.planned.cost)}
            </div>
            <p className="text-xs text-blue-800/80 leading-relaxed">
              Unfunded or pre-construction proposals ({portfolioStats.planned.knownCount} of {portfolioStats.planned.count} have an estimated DPR/tender cost). Excludes unbudgeted studies.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Schedule Slippages Leaderboard */}
      <section className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="border-b border-neutral-100 pb-4">
          <h2 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
            <Clock className="h-4 w-4 text-rose-600" />
            <span>Schedule Slippage Leaderboard</span>
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Timeline delays calculated from initial contract deadlines to current targets (or actual completion). Past targets are flagged as overdue as of {BUILD_DATE}.
          </p>
        </div>

        <div className="space-y-3">
          {delayedProjects.slice(0, 6).map((item, idx) => (
            <div
              key={item.id}
              className="p-4 rounded-xl border border-neutral-200/80 bg-[#faf9f6] flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-neutral-50 transition-colors"
            >
              <div className="space-y-1 max-w-xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-bold text-neutral-400">#{idx + 1}</span>
                  <span className="text-[10px] font-semibold text-neutral-700 uppercase px-2 py-0.5 rounded bg-neutral-100 border border-neutral-200">
                    {item.agency}
                  </span>
                  <span className="text-xs text-neutral-500">{item.sector}</span>
                  {item.isOverdue && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                      Target Expired
                    </span>
                  )}
                </div>
                <Link
                  href={`/projects/${item.slug}`}
                  className="text-sm font-semibold text-neutral-900 hover:text-neutral-600 block leading-snug"
                >
                  {item.title}
                </Link>
                <div className="text-xs text-neutral-500">
                  Original target: <strong className="text-neutral-700">{new Date(item.originalDeadline).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}</strong> •{" "}
                  {item.isCompleted ? "Actual Opening: " : "Current Target: "}
                  <strong className="text-neutral-700">
                    {item.completionDate
                      ? new Date(item.completionDate).toLocaleDateString("en-IN", { month: "short", year: "numeric" })
                      : item.revisedDeadline
                      ? new Date(item.revisedDeadline).toLocaleDateString("en-IN", { month: "short", year: "numeric" })
                      : "Not confirmed"}
                  </strong>
                </div>
              </div>

              <div className="sm:text-right shrink-0">
                <span className="inline-flex items-center gap-1 rounded-full bg-rose-50 border border-rose-200 px-3 py-1 text-xs font-semibold text-rose-700">
                  <Clock className="h-3 w-3" />
                  {item.delayStr}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Reported Cost Changes & Sources Disagree */}
      <section className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="border-b border-neutral-100 pb-4">
          <h2 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-amber-600" />
            <span>Reported Cost Changes</span>
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Cost increases where both the original approved budget and revised estimates have consistent documentation.
          </p>
        </div>

        {/* Consistent Escalations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {documentedCostChanges.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-neutral-200/80 bg-[#faf9f6] p-4 flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded bg-neutral-100 px-2 py-0.5 font-semibold text-neutral-700 border border-neutral-200">
                    {item.agency}
                  </span>
                  <span className="font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full text-[11px]">
                    +{item.pct}% Reported Increase
                  </span>
                </div>
                <Link
                  href={`/projects/${item.slug}`}
                  className="font-semibold text-xs text-neutral-900 mt-2 block hover:underline leading-snug"
                >
                  {item.title}
                </Link>
              </div>

              <div className="pt-2 border-t border-neutral-200/60 text-xs space-y-1">
                <div className="flex justify-between text-neutral-500">
                  <span>Sanctioned:</span>
                  <span className="font-medium text-neutral-900">{formatCrores(item.sanctionedCr)}</span>
                </div>
                <div className="flex justify-between text-neutral-500">
                  <span>Revised:</span>
                  <span className="font-medium text-neutral-900">{formatCrores(item.revisedCr)}</span>
                </div>
                <div className="flex justify-between text-rose-700 font-semibold pt-1">
                  <span>Reported Net Growth:</span>
                  <span>+{formatCrores(item.diffCr)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sources Disagree Section */}
        <div className="pt-2 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-900 uppercase tracking-wider">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <span>Sources Disagree (Disputed or Multi-Basis Figures)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {conflictingCostProjects.map((item, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-amber-200/80 bg-amber-50/20 p-4 space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="rounded bg-white px-2 py-0.5 font-semibold text-neutral-700 border border-neutral-200">
                      {item.agency}
                    </span>
                    <span className="font-medium text-[11px] text-amber-800 bg-amber-100/60 px-2 py-0.5 rounded border border-amber-200">
                      Disputed Basis
                    </span>
                  </div>
                  <Link
                    href={`/projects/${item.slug}`}
                    className="font-semibold text-xs text-neutral-900 mt-2 block hover:underline leading-snug"
                  >
                    {item.title}
                  </Link>
                </div>

                <div className="space-y-1.5 pt-1 text-xs">
                  {item.figures.map((fig, fIdx) => (
                    <div key={fIdx} className="p-2 rounded bg-white border border-neutral-200/60 space-y-0.5">
                      <div className="font-bold text-neutral-900">{fig.amount}</div>
                      <div className="text-[11px] text-neutral-500 leading-snug">{fig.source}</div>
                    </div>
                  ))}
                </div>

                <p className="text-[11px] text-neutral-500 leading-relaxed pt-1 border-t border-amber-200/50">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Cost per Kilometer Benchmark (Like-With-Like) */}
      <section className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="border-b border-neutral-100 pb-4">
          <h2 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
            <Compass className="h-4 w-4 text-neutral-700" />
            <span>Capital Intensity: Cost per Kilometer (₹ Cr / km)</span>
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Comparing capital density only within identical infrastructure modes. Underground tunneling is segregated from elevated transit and surface highways.
          </p>
        </div>

        <div className="space-y-6">
          {likeWithLikeBenchmarks.map((group, gIdx) => (
            <div key={gIdx} className="space-y-3">
              <div className="border-b border-neutral-100 pb-1 flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                <span className="font-semibold text-neutral-900">{group.category}</span>
                <span className="text-neutral-400 text-[11px]">{group.note}</span>
              </div>

              <div className="space-y-2">
                {group.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="p-3 rounded-xl border border-neutral-200/70 bg-[#faf9f6] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                  >
                    <div>
                      <Link
                        href={`/projects/${item.slug}`}
                        className="font-semibold text-neutral-900 hover:underline"
                      >
                        {item.title}
                      </Link>
                      <div className="text-[11px] text-neutral-500 mt-0.5">
                        {item.lengthKm} km • Total reported: {formatCrores(item.costCr)} •{" "}
                        <span className="text-neutral-600 font-medium">
                          Land {item.landIncluded ? "included" : "excluded"}
                        </span>
                      </div>
                    </div>

                    <div className="sm:text-right shrink-0">
                      <div className="text-sm font-bold text-neutral-900">
                        ₹{item.costPerKm.toFixed(1)} Cr / km
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 5: Data Quality & Audit Integrity */}
      <section className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="border-b border-neutral-100 pb-4">
          <h2 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>Data Transparency &amp; Sourcing Integrity Audit</span>
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Every metric carries an explicit verification tier. The word &ldquo;Verified&rdquo; is reserved strictly for primary official documents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/30 space-y-1 text-center">
            <div className="text-2xl font-bold text-emerald-900">
              {dataQualityStats.verifiedPct}%
            </div>
            <div className="text-xs font-semibold text-emerald-800">
              Verified by Primary Official Document
            </div>
            <p className="text-[11px] text-emerald-700/80">
              Matched directly to government orders, gazette notifications, or parliament answers ({dataQualityStats.verifiedCount} figures)
            </p>
          </div>

          <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 space-y-1 text-center">
            <div className="text-2xl font-bold text-neutral-900">
              {dataQualityStats.reportedPct}%
            </div>
            <div className="text-xs font-semibold text-neutral-800">
              Reported in Reputable Media
            </div>
            <p className="text-[11px] text-neutral-500">
              Cites credible news outlets or published tender notices ({dataQualityStats.reportedCount} figures)
            </p>
          </div>

          <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/30 space-y-1 text-center">
            <div className="text-2xl font-bold text-amber-900">
              {dataQualityStats.unverifiedPct}%
            </div>
            <div className="text-xs font-semibold text-amber-800">
              Unverified / Kept as Not Available
            </div>
            <p className="text-[11px] text-amber-700/80">
              Left null honestly rather than inventing numbers or guessing unrecorded disbursements ({dataQualityStats.unverifiedCount} fields)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
