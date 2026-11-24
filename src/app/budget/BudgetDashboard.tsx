'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  allBudgetYears,
  budgetSectors,
  getBudgetYear,
  getSectorTrend,
  departmentMappings,
} from '@/data/budget';
import { projects } from '@/data/projects';
import { BudgetSector, SectorYear, BudgetFigure, Project } from '@/lib/types';
import { ConfidenceBadge } from '@/components/ConfidenceBadge';
import {
  Landmark,
  Building2,
  ExternalLink,
  AlertCircle,
  HelpCircle,
  TrendingUp,
  Scale,
  Users,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ShieldCheck,
  Flag,
} from 'lucide-react';

export default function BudgetDashboard() {
  const [selectedYear, setSelectedYear] = useState<string>('2024-25');
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [perCapita, setPerCapita] = useState<boolean>(false);
  const [expandedSectors, setExpandedSectors] = useState<Record<string, boolean>>({
    'Urban Development': true,
    'Transport and Roads': true,
  });
  const [activeTab, setActiveTab] = useState<'sectors' | 'trends' | 'centre-state' | 'departments'>('sectors');

  const yearSummary = getBudgetYear(selectedYear) || allBudgetYears[allBudgetYears.length - 1];
  const populationCr = yearSummary.populationCr?.countCr || 6.88;

  const toggleSector = (sector: string) => {
    setExpandedSectors((prev) => ({
      ...prev,
      [sector]: !prev[sector],
    }));
  };

  const formatAmount = (amountCr: number | null | undefined): string => {
    if (amountCr === null || amountCr === undefined) return 'Not published';
    if (perCapita) {
      // Amount in Cr / Population in Cr = Amount in Rupees
      const perPerson = Math.round((amountCr * 10000000) / (populationCr * 10000000));
      return `₹${perPerson.toLocaleString('en-IN')} / person`;
    }
    return `₹${amountCr.toLocaleString('en-IN')} Cr`;
  };

  // Map tracker projects to sectors
  const getLinkedProjects = (sector: BudgetSector): Project[] => {
    if (sector === 'Transport and Roads') {
      return projects.filter((p) =>
        ['Metro Rail', 'Roads & Flyovers', 'Public Transit', 'Suburban Rail', 'Aviation'].includes(p.sector)
      );
    }
    if (sector === 'Water Resources') {
      return projects.filter((p) =>
        ['Water Supply & Sewage', 'Stormwater & Drainage', 'Lake Rejuvenation'].includes(p.sector)
      );
    }
    if (sector === 'Urban Development') {
      return projects.filter((p) =>
        ['bda-peripheral-ring-road', 'bannerghatta-road-widening', 'hebbal-junction-improvement', 'bbmp-stormwater-drain', 'bengaluru-twin-tunnel'].includes(p.slug)
      );
    }
    return [];
  };

  const filteredSectors = selectedSector === 'all'
    ? yearSummary.sectors
    : yearSummary.sectors.filter((s) => s.sector === selectedSector);

  // Maximum BE across sectors for relative bar scaling
  const maxBarValue = Math.max(
    ...yearSummary.sectors.map((s) => Math.max(s.budgetEstimate.amountCr || 0, s.actual.amountCr || 0, s.revisedEstimate.amountCr || 0)),
    1
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 space-y-8">
      {/* Page Header */}
      <div className="space-y-2 border-b border-neutral-200/80 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-md bg-neutral-900 px-2 py-0.5 text-[11px] font-semibold text-white">
                Official Fiscal Data
              </span>
              <span className="text-xs text-neutral-500">Finance Dept & CAG Audits</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight mt-1.5">
              Karnataka Budget vs Actual
            </h1>
            <p className="text-xs sm:text-sm text-neutral-600 max-w-3xl mt-1 leading-relaxed">
              Compare Karnataka&apos;s Budget Estimates (BE), Revised Estimates (RE), and actual CAG-audited expenditure across key infrastructure and social sectors.
            </p>
          </div>

          {/* Controls: Per-Capita Toggle */}
          <div className="flex items-center gap-3 bg-white p-2 rounded-xl border border-neutral-200/90 shadow-2xs">
            <button
              onClick={() => setPerCapita(!perCapita)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                perCapita
                  ? 'bg-neutral-900 text-white shadow-2xs'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              <Users className="h-3.5 w-3.5" />
              <span>Per-Capita View</span>
            </button>
            {perCapita && (
              <span className="text-[11px] text-neutral-500 pr-1">
                Pop: <strong className="text-neutral-800">{populationCr} Cr</strong> (MoHFW)
              </span>
            )}
          </div>
        </div>

        {/* Fiscal Year Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pt-4 no-scrollbar">
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider shrink-0 mr-1">
            Fiscal Year:
          </span>
          {allBudgetYears
            .slice()
            .reverse()
            .map((yr) => (
              <button
                key={yr.fiscalYear}
                onClick={() => setSelectedYear(yr.fiscalYear)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedYear === yr.fiscalYear
                    ? 'bg-neutral-900 text-white shadow-xs font-semibold'
                    : 'bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-100'
                }`}
              >
                FY {yr.fiscalYear}
                {yr.totalExpenditure.actual.amountCr === null ? ' (BE)' : ' (Audited)'}
              </button>
            ))}
        </div>
      </div>

      {/* State Macro Overview Card */}
      <div className="rounded-2xl border border-neutral-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 pb-4">
          <div>
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              State Macro Finances (FY {yearSummary.fiscalYear})
            </span>
            <div className="text-lg font-bold text-neutral-900">
              Total Budget Outlay & Revenue Profile
            </div>
          </div>
          <div className="flex items-center gap-2">
            <ConfidenceBadge confidence="verified" />
            <Link
              href={`/feedback?category=budget&year=${selectedYear}&field=StateMacro`}
              className="text-xs text-neutral-400 hover:text-neutral-700 inline-flex items-center gap-1"
            >
              <Flag className="h-3 w-3" /> Report Error
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Outlay Card */}
          <div className="rounded-xl bg-[#faf9f6] p-4 border border-neutral-200/70 space-y-2">
            <span className="text-xs text-neutral-500 font-medium">Total State Expenditure</span>
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline text-xs">
                <span className="text-neutral-500">Budget Estimate (BE):</span>
                <span className="font-semibold text-neutral-900">
                  {formatAmount(yearSummary.totalExpenditure.budgetEstimate.amountCr)}
                </span>
              </div>
              <div className="flex justify-between items-baseline text-xs">
                <span className="text-neutral-500">Revised Estimate (RE):</span>
                <span className="font-semibold text-neutral-800">
                  {formatAmount(yearSummary.totalExpenditure.revisedEstimate.amountCr)}
                </span>
              </div>
              <div className="flex justify-between items-baseline text-xs pt-1 border-t border-neutral-200/60">
                <span className="text-neutral-600 font-medium">Audited Actual:</span>
                {yearSummary.totalExpenditure.actual.amountCr === null ? (
                  <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded text-[10px] font-medium border border-amber-200">
                    Lagging by 1-2 years
                  </span>
                ) : (
                  <span className="font-bold text-emerald-900">
                    {formatAmount(yearSummary.totalExpenditure.actual.amountCr)}
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Revenue Receipts: State Own */}
          <div className="rounded-xl bg-[#faf9f6] p-4 border border-neutral-200/70 space-y-2">
            <span className="text-xs text-neutral-500 font-medium">State&apos;s Own Revenue</span>
            <div className="text-base font-bold text-neutral-900">
              {formatAmount(yearSummary.revenueReceipts.totalStateOwn.amountCr)}
            </div>
            <div className="space-y-1 text-xs text-neutral-500">
              <div className="flex justify-between">
                <span>Own Tax Revenue:</span>
                <span className="font-medium text-neutral-800">
                  {formatAmount(yearSummary.revenueReceipts.stateOwnTax.amountCr)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Non-Tax Revenue:</span>
                <span className="font-medium text-neutral-800">
                  {formatAmount(yearSummary.revenueReceipts.stateOwnNonTax.amountCr)}
                </span>
              </div>
            </div>
          </div>

          {/* Revenue Receipts: Central Transfers */}
          <div className="rounded-xl bg-[#faf9f6] p-4 border border-neutral-200/70 space-y-2">
            <span className="text-xs text-neutral-500 font-medium">Central Transfers (Centre to State)</span>
            <div className="text-base font-bold text-neutral-900">
              {formatAmount(yearSummary.revenueReceipts.totalCentralTransfers.amountCr)}
            </div>
            <div className="space-y-1 text-xs text-neutral-500">
              <div className="flex justify-between">
                <span>Central Tax Share:</span>
                <span className="font-medium text-neutral-800">
                  {formatAmount(yearSummary.revenueReceipts.centralTaxDevolution.amountCr)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Grants-in-Aid from GoI:</span>
                <span className="font-medium text-neutral-800">
                  {formatAmount(yearSummary.revenueReceipts.centralGrants.amountCr)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs inside Budget page */}
        <div className="flex items-center gap-2 border-t border-neutral-100 pt-3 text-xs">
          <button
            onClick={() => setActiveTab('sectors')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              activeTab === 'sectors'
                ? 'bg-neutral-100 text-neutral-900 font-semibold'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            Sector Allocations & Bars
          </button>
          <button
            onClick={() => setActiveTab('trends')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              activeTab === 'trends'
                ? 'bg-neutral-100 text-neutral-900 font-semibold'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            6-Year Trend Analysis
          </button>
          <button
            onClick={() => setActiveTab('centre-state')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              activeTab === 'centre-state'
                ? 'bg-neutral-100 text-neutral-900 font-semibold'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            Centre vs State Breakdown
          </button>
          <button
            onClick={() => setActiveTab('departments')}
            className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
              activeTab === 'departments'
                ? 'bg-neutral-100 text-neutral-900 font-semibold'
                : 'text-neutral-500 hover:text-neutral-900'
            }`}
          >
            Demands & Departments Mapping
          </button>
        </div>
      </div>

      {/* VIEW 1: SECTORS BREAKDOWN */}
      {activeTab === 'sectors' && (
        <div className="space-y-6">
          {/* Sector filter pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <span className="text-xs font-medium text-neutral-500 mr-1 shrink-0">Filter:</span>
            <button
              onClick={() => setSelectedSector('all')}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                selectedSector === 'all'
                  ? 'bg-neutral-800 text-white'
                  : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-100'
              }`}
            >
              All Sectors ({yearSummary.sectors.length})
            </button>
            {budgetSectors.map((sec) => (
              <button
                key={sec}
                onClick={() => setSelectedSector(sec)}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedSector === sec
                    ? 'bg-neutral-800 text-white'
                    : 'bg-white border border-neutral-200 text-neutral-600 hover:bg-neutral-100'
                }`}
              >
                {sec}
              </button>
            ))}
          </div>

          {/* Sector Cards */}
          <div className="space-y-5">
            {filteredSectors.map((sectorYear) => {
              const be = sectorYear.budgetEstimate.amountCr;
              const re = sectorYear.revisedEstimate.amountCr;
              const actual = sectorYear.actual.amountCr;
              const spentPct = be && actual ? Math.round((actual / be) * 100) : null;
              const isExpanded = !!expandedSectors[sectorYear.sector];
              const linkedProjects = getLinkedProjects(sectorYear.sector);

              return (
                <div
                  key={sectorYear.sector}
                  className="rounded-2xl border border-neutral-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-4"
                >
                  {/* Sector Header */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-neutral-100 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-neutral-100 text-neutral-800">
                        {sectorYear.sector === 'Transport and Roads' ? (
                          <Landmark className="h-5 w-5" />
                        ) : sectorYear.sector === 'Urban Development' ? (
                          <Building2 className="h-5 w-5" />
                        ) : sectorYear.sector === 'Water Resources' ? (
                          <Scale className="h-5 w-5" />
                        ) : (
                          <ShieldCheck className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <h2 className="text-base sm:text-lg font-bold text-neutral-900">
                          {sectorYear.sector}
                        </h2>
                        <p className="text-xs text-neutral-500">
                          {sectorYear.notes || `State budgetary allocations for ${sectorYear.sector.toLowerCase()}`}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <ConfidenceBadge confidence={sectorYear.budgetEstimate.confidence} />
                      <button
                        onClick={() => toggleSector(sectorYear.sector)}
                        className="text-xs text-neutral-500 hover:text-neutral-900 inline-flex items-center gap-1 p-1 rounded-md hover:bg-neutral-100 transition-colors"
                      >
                        {isExpanded ? (
                          <>
                            <span>Hide Details</span>
                            <ChevronUp className="h-4 w-4" />
                          </>
                        ) : (
                          <>
                            <span>Show Details & Audit</span>
                            <ChevronDown className="h-4 w-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* 3 Bars Comparison: BE, RE, Actual */}
                  <div className="space-y-3 pt-1">
                    {/* BE Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-medium text-neutral-600">Budget Estimate (BE):</span>
                        <span className="font-semibold text-neutral-900">{formatAmount(be)}</span>
                      </div>
                      <div className="h-3 w-full rounded-full bg-neutral-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-indigo-600 transition-all duration-500"
                          style={{ width: `${Math.min(100, ((be || 0) / maxBarValue) * 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* RE Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-medium text-neutral-600">Revised Estimate (RE):</span>
                        <span className="font-semibold text-neutral-800">{formatAmount(re)}</span>
                      </div>
                      <div className="h-3 w-full rounded-full bg-neutral-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-amber-500 transition-all duration-500"
                          style={{ width: `${Math.min(100, ((re || 0) / maxBarValue) * 100)}%` }}
                        />
                      </div>
                    </div>

                    {/* Actual Bar */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-medium text-neutral-600">Audited Actual Spent:</span>
                        {actual === null ? (
                          <span className="text-amber-800 text-[11px] font-medium">
                            Not published yet (audited accounts lag by 1-2 years)
                          </span>
                        ) : (
                          <span className="font-bold text-emerald-800">{formatAmount(actual)}</span>
                        )}
                      </div>
                      <div className="h-3 w-full rounded-full bg-neutral-100 overflow-hidden">
                        {actual === null ? (
                          <div className="h-full rounded-full bg-neutral-200/60 dashed" />
                        ) : (
                          <div
                            className="h-full rounded-full bg-emerald-600 transition-all duration-500"
                            style={{ width: `${Math.min(100, ((actual || 0) / maxBarValue) * 100)}%` }}
                          />
                        )}
                      </div>
                    </div>

                    {/* Utilization metric */}
                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="text-neutral-500">Spent as % of Budgeted (Actual / BE):</span>
                      {spentPct !== null ? (
                        <span
                          className={`font-semibold px-2 py-0.5 rounded text-[11px] ${
                            spentPct >= 95
                              ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                              : spentPct >= 80
                              ? 'bg-sky-50 text-sky-800 border border-sky-200'
                              : 'bg-amber-50 text-amber-800 border border-amber-200'
                          }`}
                        >
                          {spentPct}% spent
                        </span>
                      ) : (
                        <span className="text-neutral-400 text-[11px]">
                          Pending CAG Finance Accounts
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Expandable Details Drawer */}
                  {isExpanded && (
                    <div className="mt-4 pt-4 border-t border-neutral-100 space-y-4 text-xs">
                      {/* Centre vs State Split */}
                      <div className="rounded-xl bg-[#faf9f6] p-3.5 border border-neutral-200/80 space-y-2">
                        <div className="font-semibold text-neutral-900 flex items-center justify-between">
                          <span>Centre vs State Funding Split</span>
                          <span className="text-[10px] text-neutral-400 font-normal">
                            Centrally Sponsored Schemes (CSS) vs State Own
                          </span>
                        </div>
                        {sectorYear.centralShare && sectorYear.stateOwn ? (
                          <div className="grid grid-cols-2 gap-3 text-xs">
                            <div className="bg-white p-2.5 rounded-lg border border-neutral-200/70">
                              <span className="text-neutral-500 text-[11px]">Central Share (CSS / Grants):</span>
                              <div className="font-semibold text-neutral-900 mt-0.5">
                                {formatAmount(sectorYear.centralShare.amountCr)}
                              </div>
                            </div>
                            <div className="bg-white p-2.5 rounded-lg border border-neutral-200/70">
                              <span className="text-neutral-500 text-[11px]">State&apos;s Own Budget Share:</span>
                              <div className="font-semibold text-neutral-900 mt-0.5">
                                {formatAmount(sectorYear.stateOwn.amountCr)}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="text-neutral-500 text-xs italic bg-white p-2.5 rounded-lg border border-neutral-200/70">
                            Where the split for this sector isn&apos;t published separately in state budget volumes, we do not derive or guess it.
                          </div>
                        )}
                      </div>

                      {/* Source & Verbatim Excerpt */}
                      <div className="rounded-xl bg-white p-3.5 border border-neutral-200/80 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-neutral-900">Official Document Citation</span>
                          <Link
                            href={`/feedback?category=budget&year=${sectorYear.fiscalYear}&sector=${sectorYear.sector}&figure=BE`}
                            className="text-neutral-500 hover:text-neutral-900 inline-flex items-center gap-1 text-[11px]"
                          >
                            <Flag className="h-3 w-3" /> Report an error on this figure
                          </Link>
                        </div>
                        <div className="space-y-1.5 text-neutral-600">
                          <div>
                            <strong className="text-neutral-800">Source:</strong>{' '}
                            <a
                              href={sectorYear.budgetEstimate.source.url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-neutral-900 underline hover:text-neutral-700 inline-flex items-center gap-1 font-medium"
                            >
                              {sectorYear.budgetEstimate.source.label}{' '}
                              <ExternalLink className="h-3 w-3 text-neutral-400" />
                            </a>
                          </div>
                          {sectorYear.budgetEstimate.source.page && (
                            <div>
                              <strong className="text-neutral-800">Location:</strong>{' '}
                              <span>{sectorYear.budgetEstimate.source.page}</span>
                            </div>
                          )}
                          {sectorYear.budgetEstimate.source.excerpt && (
                            <div className="rounded-lg bg-neutral-50 p-2.5 border border-neutral-200/60 mt-1">
                              <span className="text-[10px] font-semibold text-neutral-400 uppercase tracking-wider block mb-1">
                                Verbatim Excerpt ({sectorYear.budgetEstimate.source.excerptChecked || 'manual'} verified):
                              </span>
                              <p className="italic text-neutral-700 font-serif text-[12px] leading-relaxed">
                                &ldquo;{sectorYear.budgetEstimate.source.excerpt}&rdquo;
                              </p>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Linked Infrastructure Projects */}
                      {linkedProjects.length > 0 && (
                        <div className="space-y-2 pt-1">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-neutral-900">
                              Linked Infrastructure Projects in Tracker ({linkedProjects.length})
                            </span>
                            <span className="text-[11px] text-neutral-500">
                              Funded in whole or part via {sectorYear.sector}
                            </span>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                            {linkedProjects.slice(0, 6).map((proj) => (
                              <Link
                                key={proj.id}
                                href={`/projects/${proj.slug}`}
                                className="group block rounded-lg border border-neutral-200/80 bg-[#faf9f6] p-2.5 hover:border-neutral-400 hover:bg-white transition-all"
                              >
                                <div className="font-semibold text-neutral-900 text-xs group-hover:text-neutral-950 truncate">
                                  {proj.title}
                                </div>
                                <div className="text-[11px] text-neutral-500 flex justify-between mt-1">
                                  <span>{proj.agencyCode}</span>
                                  <span className="font-medium text-neutral-700">
                                    {proj.sanctionedAmountCr ? `₹${proj.sanctionedAmountCr} Cr` : 'Cost unconfirmed'}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* VIEW 2: MULTI-YEAR TREND ANALYSIS */}
      {activeTab === 'trends' && (
        <div className="rounded-2xl border border-neutral-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-6">
          <div className="border-b border-neutral-100 pb-3">
            <h2 className="text-lg font-bold text-neutral-900">
              6-Year Sector Spending Trends (FY 2019-20 to 2024-25)
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Nominal expenditure comparisons across years. Note: figures are not adjusted for inflation.
            </p>
          </div>

          <div className="space-y-8">
            {budgetSectors.map((sector) => {
              const trend = getSectorTrend(sector);
              return (
                <div key={sector} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-neutral-900">{sector}</h3>
                    <span className="text-xs text-neutral-400">Nominal ₹ Crore</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-xs text-left border-collapse">
                      <thead>
                        <tr className="border-b border-neutral-200 text-neutral-500">
                          <th className="py-2 pr-4 font-semibold">Fiscal Year</th>
                          <th className="py-2 px-3 font-semibold text-right">Budget Estimate (BE)</th>
                          <th className="py-2 px-3 font-semibold text-right">Revised Estimate (RE)</th>
                          <th className="py-2 px-3 font-semibold text-right">Audited Actual</th>
                          <th className="py-2 pl-3 font-semibold text-right">Utilization %</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-100">
                        {trend.map((row) => {
                          const util =
                            row.be && row.actual ? Math.round((row.actual / row.be) * 100) : null;
                          return (
                            <tr key={row.fiscalYear} className="hover:bg-neutral-50">
                              <td className="py-2 pr-4 font-medium text-neutral-900">
                                FY {row.fiscalYear}
                              </td>
                              <td className="py-2 px-3 text-right text-neutral-700">
                                {formatAmount(row.be)}
                              </td>
                              <td className="py-2 px-3 text-right text-neutral-700">
                                {formatAmount(row.re)}
                              </td>
                              <td className="py-2 px-3 text-right font-semibold text-neutral-900">
                                {row.actual === null ? (
                                  <span className="text-amber-700 text-[11px] font-normal">
                                    Audit Pending
                                  </span>
                                ) : (
                                  formatAmount(row.actual)
                                )}
                              </td>
                              <td className="py-2 pl-3 text-right">
                                {util !== null ? (
                                  <span
                                    className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold ${
                                      util >= 90
                                        ? 'bg-emerald-50 text-emerald-800'
                                        : 'bg-amber-50 text-amber-800'
                                    }`}
                                  >
                                    {util}%
                                  </span>
                                ) : (
                                  <span className="text-neutral-400">—</span>
                                )}
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-xl bg-amber-50 p-3.5 border border-amber-200/70 text-xs text-amber-900 flex items-start gap-2.5">
            <AlertCircle className="h-4 w-4 shrink-0 text-amber-700 mt-0.5" />
            <div>
              <strong>Methodology note on trends:</strong> Nominal rupees reflect figures stated in budget books of each year without CPI / WPI discounting. Large jumps (e.g. 2022-23 to 2023-24) reflect both state economic growth and policy introductions such as universal bus fare support (Shakti) and major metro equity infusions.
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: CENTRE VS STATE BREAKDOWN */}
      {activeTab === 'centre-state' && (
        <div className="rounded-2xl border border-neutral-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-6">
          <div className="border-b border-neutral-100 pb-3">
            <h2 className="text-lg font-bold text-neutral-900">
              Centre vs State Fiscal Federalism (FY {yearSummary.fiscalYear})
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              Breakdown of how much of Karnataka&apos;s revenue is self-generated vs received through Union tax devolution and central grants-in-aid.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* State's Own Funds */}
            <div className="rounded-xl border border-neutral-200 bg-[#faf9f6] p-4 space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-sm text-neutral-900">State&apos;s Own Resources</h3>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-900">
                  Self-Generated
                </span>
              </div>
              <div className="text-2xl font-bold text-neutral-900">
                {formatAmount(yearSummary.revenueReceipts.totalStateOwn.amountCr)}
              </div>
              <ul className="space-y-2 text-xs text-neutral-600 pt-2 border-t border-neutral-200/60">
                <li className="flex justify-between">
                  <span>State Own Tax Revenue (Commercial tax, Stamps, Excise, Motor Vehicles):</span>
                  <strong className="text-neutral-900">
                    {formatAmount(yearSummary.revenueReceipts.stateOwnTax.amountCr)}
                  </strong>
                </li>
                <li className="flex justify-between">
                  <span>Non-Tax Revenue (Mines, royalties, interest receipts, user fees):</span>
                  <strong className="text-neutral-900">
                    {formatAmount(yearSummary.revenueReceipts.stateOwnNonTax.amountCr)}
                  </strong>
                </li>
              </ul>
            </div>

            {/* Central Transfers */}
            <div className="rounded-xl border border-neutral-200 bg-[#faf9f6] p-4 space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-sm text-neutral-900">Union Government Transfers</h3>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-sky-100 text-sky-900">
                  Devolution & Grants
                </span>
              </div>
              <div className="text-2xl font-bold text-neutral-900">
                {formatAmount(yearSummary.revenueReceipts.totalCentralTransfers.amountCr)}
              </div>
              <ul className="space-y-2 text-xs text-neutral-600 pt-2 border-t border-neutral-200/60">
                <li className="flex justify-between">
                  <span>Share of Central Taxes (15th Finance Commission devolution):</span>
                  <strong className="text-neutral-900">
                    {formatAmount(yearSummary.revenueReceipts.centralTaxDevolution.amountCr)}
                  </strong>
                </li>
                <li className="flex justify-between">
                  <span>Grants-in-Aid from Centre (CSS, disaster relief, local bodies):</span>
                  <strong className="text-neutral-900">
                    {formatAmount(yearSummary.revenueReceipts.centralGrants.amountCr)}
                  </strong>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-xl bg-neutral-50 p-4 border border-neutral-200 text-xs text-neutral-600 space-y-1.5">
            <div className="font-semibold text-neutral-900">Data Rule on Sector Splits:</div>
            <p>
              While macro transfers are audited in Annual Financial Statements (AFS) and CAG Accounts, sector-level splits (such as CSS allocations for specific urban projects) are presented only when directly published in Demand volumes. We never derive or guess sector splits where official accounts combine them into block grants.
            </p>
          </div>
        </div>
      )}

      {/* VIEW 4: DEPARTMENTS MAPPING */}
      {activeTab === 'departments' && (
        <div className="rounded-2xl border border-neutral-200/90 bg-white p-5 sm:p-6 shadow-xs space-y-6">
          <div className="border-b border-neutral-100 pb-3">
            <h2 className="text-lg font-bold text-neutral-900">
              Department & Demand for Grants Mapping
            </h2>
            <p className="text-xs text-neutral-500 mt-1">
              How individual State Government departments and legislative demand numbers map into our five standard sectors.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 text-neutral-500">
                  <th className="py-2 pr-3 font-semibold">Demand #</th>
                  <th className="py-2 px-3 font-semibold">Standard Sector</th>
                  <th className="py-2 px-3 font-semibold">Department Name</th>
                  <th className="py-2 pl-3 font-semibold">Scope & Inclusions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100">
                {departmentMappings.map((d, i) => (
                  <tr key={i} className="hover:bg-neutral-50">
                    <td className="py-2.5 pr-3 font-mono font-medium text-neutral-800">
                      Demand {d.demandNumber || '—'}
                    </td>
                    <td className="py-2.5 px-3 font-semibold text-neutral-900 whitespace-nowrap">
                      {d.sector}
                    </td>
                    <td className="py-2.5 px-3 font-medium text-neutral-800">
                      {d.departmentName}
                    </td>
                    <td className="py-2.5 pl-3 text-neutral-600">
                      {d.notes || '—'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Footer / Report Error Callout */}
      <div className="rounded-2xl border border-neutral-200/80 bg-[#faf9f6] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-neutral-900">Spot an error or missing budget table?</h3>
          <p className="text-xs text-neutral-500">
            All data points cite official Finance Department volumes and CAG audit reports. If you find a discrepancy with an official gazette, report it with page number.
          </p>
        </div>
        <Link
          href={`/feedback?category=budget&year=${selectedYear}`}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 shadow-xs shrink-0 transition-colors"
        >
          <span>Report Data Discrepancy</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
