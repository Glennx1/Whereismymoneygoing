"use client";

import { useMemo } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import {
  formatCrores,
  bestCostCr,
  calculateCostOverrunPct,
  calculateDelayString,
} from "@/lib/utils";
import {
  TrendingUp,
  Clock,
  PieChart,
  BarChart3,
  ShieldCheck,
  ArrowLeft,
  Compass,
  Building,
  Coins,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export default function InsightsPage() {
  // 1. Portfolio category split
  const portfolioStats = useMemo(() => {
    const completed = projects.filter((p) => p.category === "completed");
    const ongoing = projects.filter((p) => p.category === "ongoing");
    const planned = projects.filter((p) => p.category === "planned");

    const costOf = (list: typeof projects) =>
      list.reduce((acc, p) => acc + (bestCostCr(p) ?? 0), 0);

    return {
      completed: { count: completed.length, cost: costOf(completed) },
      ongoing: { count: ongoing.length, cost: costOf(ongoing) },
      planned: { count: planned.length, cost: costOf(planned) },
      totalCost: costOf(projects),
    };
  }, []);

  // 2. Schedule Slippages Leaderboard (projects with both deadlines known & delayed)
  const delayedProjects = useMemo(() => {
    return projects
      .map((p) => {
        if (!p.originalDeadline || !p.revisedDeadline) return null;
        const orig = new Date(p.originalDeadline).getTime();
        const rev = new Date(p.revisedDeadline).getTime();
        const diffMonths = Math.round((rev - orig) / (1000 * 60 * 60 * 24 * 30.4));
        if (diffMonths <= 0) return null;
        return {
          id: p.id,
          title: p.title,
          agency: p.agencyCode,
          sector: p.sector,
          originalDeadline: p.originalDeadline,
          revisedDeadline: p.revisedDeadline,
          delayMonths: diffMonths,
          delayStr: calculateDelayString(p.originalDeadline, p.revisedDeadline),
          slug: p.slug,
          status: p.status,
        };
      })
      .filter((item): item is NonNullable<typeof item> => item !== null)
      .sort((a, b) => b.delayMonths - a.delayMonths);
  }, []);

  // 3. Cost Overrun Jumps
  const costJumpProjects = useMemo(() => {
    return projects
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

  // 4. Cost Per Kilometer Benchmark
  const linearCostStats = useMemo(() => {
    return projects
      .filter((p) => p.lengthKm && p.lengthKm > 0 && bestCostCr(p) !== null)
      .map((p) => {
        const cost = bestCostCr(p)!;
        const km = p.lengthKm!;
        const costPerKm = Math.round((cost / km) * 10) / 10;
        return {
          id: p.id,
          title: p.title,
          sector: p.sector,
          lengthKm: km,
          totalCostCr: cost,
          costPerKm,
          slug: p.slug,
        };
      })
      .sort((a, b) => b.costPerKm - a.costPerKm);
  }, []);

  // 5. Data Quality Audit Metric
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
        <p className="text-sm sm:text-base text-neutral-600 max-w-3xl leading-relaxed">
          Aggregated quantitative findings across all {projects.length} tracked Bengaluru infrastructure investments. Sourced data analyzing capital distribution, timeline slippages, cost growth per kilometer, and verification integrity.
        </p>
      </div>

      {/* Section 1: Portfolio Split */}
      <section className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="border-b border-neutral-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
              <PieChart className="h-4 w-4 text-neutral-700" />
              <span>Capital Portfolio by Project Stage</span>
            </h2>
            <p className="text-xs text-neutral-500 mt-0.5">
              Distribution of public capital across delivered, active, and proposed city schemes.
            </p>
          </div>
          <div className="text-xs font-semibold text-neutral-900">
            Total Monitored: {formatCrores(portfolioStats.totalCost)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Completed */}
          <div className="rounded-xl border border-emerald-200/80 bg-emerald-50/30 p-5 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-900 uppercase tracking-wider">
                Completed / Commissioned
              </span>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-800">
                {portfolioStats.completed.count} projects
              </span>
            </div>
            <div className="text-2xl font-bold text-emerald-950">
              {formatCrores(portfolioStats.completed.cost)}
            </div>
            <p className="text-xs text-emerald-800/80 leading-relaxed">
              Delivered and operational assets including Yellow Line, Mysuru Expressway, STRR North, Cauvery Stage V, and BMTC e-buses.
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
              Active construction sites including Metro Phase 2A/2B (Blue Line), Pink Line Underground, Chennai Expressway, and Suburban Rail.
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
              Approved or tendered initiatives including Metro Phase 3 &amp; 3A, Peripheral Ring Road, Twin Tunnel Road, and Cauvery Stage VI.
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
            Projects with the longest verified timeline delays between initial contractual deadlines and current delivery targets.
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
                </div>
                <Link
                  href={`/projects/${item.slug}`}
                  className="text-sm font-semibold text-neutral-900 hover:text-neutral-600 block leading-snug"
                >
                  {item.title}
                </Link>
                <div className="text-xs text-neutral-500">
                  Original target: <strong className="text-neutral-700">{new Date(item.originalDeadline).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}</strong> • Current target: <strong className="text-neutral-700">{new Date(item.revisedDeadline).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}</strong>
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

      {/* Section 3: Cost Jumps & Escalations */}
      <section className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="border-b border-neutral-100 pb-4">
          <h2 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-amber-600" />
            <span>Documented Cost Escalations</span>
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Verified cost increases where both the original approved budget and revised estimates are published.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {costJumpProjects.map((item) => (
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
                    +{item.pct}% Escalation
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
                  <span>Net Cost Growth:</span>
                  <span>+{formatCrores(item.diffCr)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Cost per Kilometer Benchmark */}
      <section className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="border-b border-neutral-100 pb-4">
          <h2 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
            <Compass className="h-4 w-4 text-neutral-700" />
            <span>Capital Intensity: Cost per Kilometer (₹ Cr / km)</span>
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Comparing the capital requirements across underground metro, elevated viaducts, suburban rail, and greenfield expressways.
          </p>
        </div>

        <div className="space-y-3">
          {linearCostStats.slice(0, 8).map((item) => {
            const maxCostPerKm = linearCostStats[0]?.costPerKm || 1;
            const barWidth = Math.round((item.costPerKm / maxCostPerKm) * 100);

            return (
              <div key={item.id} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                  <Link
                    href={`/projects/${item.slug}`}
                    className="font-semibold text-neutral-900 hover:underline truncate max-w-md"
                  >
                    {item.title} ({item.sector})
                  </Link>
                  <div className="flex items-center gap-3 text-neutral-500 shrink-0">
                    <span>{item.lengthKm} km</span>
                    <span>Total: {formatCrores(item.totalCostCr)}</span>
                    <strong className="text-neutral-900 font-bold">
                      ₹{item.costPerKm} Cr / km
                    </strong>
                  </div>
                </div>

                <div className="h-2 w-full rounded-full bg-neutral-100 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-neutral-800 transition-all duration-300"
                    style={{ width: `${Math.max(barWidth, 4)}%` }}
                  />
                </div>
              </div>
            );
          })}
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
            We hold ourselves to strict verification standards. Every financial and milestone metric carries an explicit audit grade.
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
              Matched directly to government orders, gazette notifications, or PIB releases ({dataQualityStats.verifiedCount} figures)
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
              Cites credible news organizations or technical railway industry trackers ({dataQualityStats.reportedCount} figures)
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
