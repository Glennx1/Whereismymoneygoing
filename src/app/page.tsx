"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { agencies } from "@/data/agencies";
import { ProjectCard } from "@/components/ProjectCard";
import { BengaluruMap } from "@/components/BengaluruMap";
import { formatCrores } from "@/lib/utils";
import { 
  Search, 
  Map, 
  ArrowUpRight,
  HelpCircle,
  FileQuestion
} from "lucide-react";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAgency, setSelectedAgency] = useState<string>("ALL");
  const [selectedStatus, setSelectedStatus] = useState<string>("ALL");
  const [viewMode, setViewMode] = useState<"cards" | "map">("cards");

  // Macro Statistics calculations
  const totalSanctionedCr = useMemo(() => {
    return projects.reduce((acc, p) => acc + p.sanctionedAmountCr, 0);
  }, []);

  const totalDisbursedCr = useMemo(() => {
    return projects.reduce((acc, p) => acc + p.actualDisbursedCr, 0);
  }, []);

  const totalCostOverrunsCr = useMemo(() => {
    return projects.reduce((acc, p) => {
      const diff = p.revisedEstimatedCostCr - p.sanctionedAmountCr;
      return acc + (diff > 0 ? diff : 0);
    }, 0);
  }, []);

  const totalRedFlagsCount = useMemo(() => {
    return projects.reduce((acc, p) => acc + p.redFlags.length, 0);
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter((proj) => {
      const matchesSearch =
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.wardOrZone.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.contractors.some((c) => c.name.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesAgency =
        selectedAgency === "ALL" || proj.agencyCode === selectedAgency;

      const matchesStatus =
        selectedStatus === "ALL" || proj.status === selectedStatus;

      return matchesSearch && matchesAgency && matchesStatus;
    });
  }, [searchQuery, selectedAgency, selectedStatus]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 space-y-12">
      {/* Hero Section */}
      <section className="space-y-6 pt-4">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-medium text-neutral-600 shadow-xs">
            <span>Bengaluru City Public Spending Tracker</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-neutral-900 leading-[1.15]">
            Where is Bengaluru&apos;s public money going?
          </h1>

          <p className="text-base sm:text-lg text-neutral-500 leading-relaxed font-normal">
            When the government announces thousands of crores for roads, flyovers, or metro lines, how much actually gets spent? We track the numbers directly from official government releases and compare them with real progress on the ground.
          </p>
        </div>

        {/* 4 Clean Minimal Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 pt-2">
          <div className="rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-xs">
            <div className="text-xs font-medium text-neutral-500">
              Approved Budget
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              {formatCrores(totalSanctionedCr)}
            </div>
            <div className="mt-1 text-xs text-neutral-400">
              Across tracked city projects
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200/90 bg-white p-5 shadow-xs">
            <div className="text-xs font-medium text-neutral-500">
              Money Spent So Far
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              {formatCrores(totalDisbursedCr)}
            </div>
            <div className="mt-1 text-xs text-neutral-400">
              Released from government treasury
            </div>
          </div>

          <div className="rounded-2xl border border-rose-200/80 bg-rose-50/40 p-5 shadow-xs">
            <div className="text-xs font-medium text-rose-700">
              Extra Cost (Over Budget)
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-rose-800">
              +{formatCrores(totalCostOverrunsCr)}
            </div>
            <div className="mt-1 text-xs text-rose-600/80">
              Cost escalation over original plan
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200/80 bg-amber-50/40 p-5 shadow-xs">
            <div className="text-xs font-medium text-amber-800">
              Delays & Warnings
            </div>
            <div className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-amber-900">
              {totalRedFlagsCount} Notices
            </div>
            <div className="mt-1 text-xs text-amber-700/80">
              Audit flags & timeline delays
            </div>
          </div>
        </div>
      </section>

      {/* Filter and View Controls Bar */}
      <section className="space-y-3.5">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
            <input
              type="text"
              placeholder="Search by project name, road, or area..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-white pl-10 pr-4 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-0 shadow-xs"
            />
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto">
            <div className="inline-flex rounded-xl border border-neutral-200 bg-white p-1 shadow-xs">
              <button
                onClick={() => setViewMode("cards")}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  viewMode === "cards"
                    ? "bg-neutral-900 text-white font-semibold"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Projects ({filteredProjects.length})
              </button>
              <button
                onClick={() => setViewMode("map")}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  viewMode === "map"
                    ? "bg-neutral-900 text-white font-semibold"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                <Map className="h-3.5 w-3.5" />
                <span>Map View</span>
              </button>
            </div>
          </div>
        </div>

        {/* Agency Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <button
            onClick={() => setSelectedAgency("ALL")}
            className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all shrink-0 ${
              selectedAgency === "ALL"
                ? "bg-neutral-900 text-white font-semibold"
                : "bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300"
            }`}
          >
            All
          </button>
          {agencies.map((agency) => (
            <button
              key={agency.code}
              onClick={() => setSelectedAgency(agency.code)}
              className={`rounded-full px-3.5 py-1 text-xs font-medium transition-all shrink-0 ${
                selectedAgency === agency.code
                  ? "bg-neutral-900 text-white font-semibold"
                  : "bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300"
              }`}
            >
              {agency.name}
            </button>
          ))}
        </div>
      </section>

      {/* Main Content: Cards Grid or Map */}
      {viewMode === "map" ? (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-neutral-900">
              City Project Map
            </h2>
            <span className="text-xs text-neutral-400">Click any point to inspect</span>
          </div>
          <BengaluruMap projects={filteredProjects} />
        </section>
      ) : (
        <section className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-semibold text-neutral-900 flex items-center gap-2">
              <span>Tracked Projects</span>
              <span className="text-xs text-neutral-400 font-normal">
                ({filteredProjects.length})
              </span>
            </h2>
            <Link
              href="/red-flags"
              className="text-xs text-neutral-600 hover:text-neutral-900 font-medium flex items-center gap-1"
            >
              <span>View all warnings</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="rounded-2xl border border-neutral-200 bg-white p-12 text-center space-y-2">
              <FileQuestion className="mx-auto h-8 w-8 text-neutral-300" />
              <h3 className="text-sm font-semibold text-neutral-800">No matching projects found</h3>
              <p className="text-xs text-neutral-500">
                Try searching for another word or reset your department filter.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </section>
      )}

      {/* Clean Informational Note (No Jargon) */}
      <section className="rounded-2xl border border-neutral-200/80 bg-white p-6 space-y-3 shadow-xs">
        <h3 className="text-sm font-semibold text-neutral-900 flex items-center gap-2">
          <HelpCircle className="h-4 w-4 text-neutral-600" />
          <span>Why do public projects take so long or cost more?</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-neutral-600">
          <div className="space-y-1">
            <div className="font-semibold text-neutral-900">Big numbers in the news, little in reality</div>
            <p className="leading-relaxed text-neutral-500">
              Governments often announce large amounts for publicity, but only a tiny fraction is actually sanctioned in the state budget for years.
            </p>
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-neutral-900">Delays make everything cost more</div>
            <p className="leading-relaxed text-neutral-500">
              When work gets stuck in court or land disputes, contractors submit revised price claims, causing the budget to double or triple.
            </p>
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-neutral-900">Payments before delivery</div>
            <p className="leading-relaxed text-neutral-500">
              Contractors sometimes receive advance payments before finishing work, leaving unfinished pillars and abandoned sites when issues arise.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
