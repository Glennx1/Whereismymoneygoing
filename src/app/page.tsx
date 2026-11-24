"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { agencies } from "@/data/agencies";
import { ProjectCard } from "@/components/ProjectCard";
import { BengaluruMap } from "@/components/BengaluruMap";
import { formatCrores, bestCostCr, calculateDelayString, haversineDistanceKm } from "@/lib/utils";
import { 
  Search, 
  Map, 
  ArrowUpRight,
  HelpCircle,
  FileQuestion,
  CheckCircle2,
  Clock,
  TrendingUp,
  Layers,
  Navigation,
  Locate,
  LocateFixed,
  X
} from "lucide-react";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAgency, setSelectedAgency] = useState<string>("ALL");
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [sortBy, setSortBy] = useState<"default" | "cost" | "delay" | "near_me">("default");
  const [viewMode, setViewMode] = useState<"cards" | "map">("cards");
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  const requestLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser");
      return;
    }
    setIsLocating(true);
    setLocationError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setIsLocating(false);
        setSortBy("near_me");
      },
      () => {
        setIsLocating(false);
        setLocationError("Location permission denied. You can search by area or ward name above.");
      },
      { timeout: 10000 }
    );
  };

  const clearLocation = () => {
    setUserLocation(null);
    setLocationError(null);
    if (sortBy === "near_me") {
      setSortBy("default");
    }
  };

  // Category counts
  const completedProjects = useMemo(
    () => projects.filter((p) => p.category === "completed"),
    []
  );
  const ongoingProjects = useMemo(
    () => projects.filter((p) => p.category === "ongoing"),
    []
  );
  const plannedProjects = useMemo(
    () => projects.filter((p) => p.category === "planned"),
    []
  );

  // Combined reported cost of ongoing projects
  const ongoingCostKnown = useMemo(
    () => ongoingProjects.filter((p) => bestCostCr(p) !== null),
    [ongoingProjects]
  );
  const ongoingTotalCostCr = useMemo(
    () => ongoingCostKnown.reduce((acc, p) => acc + (bestCostCr(p) ?? 0), 0),
    [ongoingCostKnown]
  );

  // Projects running behind original schedule (where both dates are known)
  const delayedProjects = useMemo(() => {
    return projects.filter((p) => {
      const delay = calculateDelayString(p.originalDeadline, p.revisedDeadline);
      return delay !== null && delay !== "On Schedule";
    });
  }, []);

  // Total sourced notices
  const totalRedFlagsCount = useMemo(() => {
    return projects.reduce((acc, p) => acc + p.redFlags.length, 0);
  }, []);

  // Filtered & sorted projects
  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    const list = projects.filter((proj) => {
      const matchesSearch =
        !query ||
        proj.title.toLowerCase().includes(query) ||
        proj.tagline.toLowerCase().includes(query) ||
        proj.wardOrZone.toLowerCase().includes(query) ||
        proj.contractors.some((c) => c.name.toLowerCase().includes(query));

      const matchesAgency =
        selectedAgency === "ALL" || proj.agencyCode === selectedAgency;

      const matchesCategory =
        selectedCategory === "ALL" || proj.category === selectedCategory;

      return matchesSearch && matchesAgency && matchesCategory;
    });

    if (sortBy === "near_me" && userLocation) {
      return [...list].sort((a, b) => {
        const distA = haversineDistanceKm(
          userLocation.lat,
          userLocation.lng,
          a.coordinates.lat,
          a.coordinates.lng
        );
        const distB = haversineDistanceKm(
          userLocation.lat,
          userLocation.lng,
          b.coordinates.lat,
          b.coordinates.lng
        );
        return distA - distB;
      });
    }

    if (sortBy === "cost") {
      return [...list].sort((a, b) => (bestCostCr(b) ?? 0) - (bestCostCr(a) ?? 0));
    }
    if (sortBy === "delay") {
      return [...list].sort((a, b) => {
        const da = a.originalDeadline && a.revisedDeadline ? new Date(a.revisedDeadline).getTime() - new Date(a.originalDeadline).getTime() : -1;
        const db = b.originalDeadline && b.revisedDeadline ? new Date(b.revisedDeadline).getTime() - new Date(b.originalDeadline).getTime() : -1;
        return db - da;
      });
    }

    return list;
  }, [searchQuery, selectedAgency, selectedCategory, sortBy, userLocation]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 space-y-10">
      {/* Hero Section */}
      <section className="space-y-4 pt-2">
        <div className="max-w-3xl space-y-2.5">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 leading-[1.15]">
            Where is Bengaluru&apos;s public money going?
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal">
            When thousands of crores are announced for Bengaluru roads, expressways, metro lines, and waterworks, how much actually gets delivered? We track reported figures against published records, highlighting delays and unverified outlays.
          </p>
        </div>

        {/* 4 Clean Minimal Stat Cards (2x2 grid on mobile) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3.5 pt-2">
          {/* Card 1: Projects Tracked with Split */}
          <div className="rounded-2xl border border-neutral-200/90 bg-white p-3.5 sm:p-5 shadow-xs">
            <div className="text-[11px] sm:text-xs font-medium text-neutral-500">
              Projects Tracked
            </div>
            <div className="mt-1 sm:mt-2 text-xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              {projects.length}
            </div>
            <div className="mt-1 text-[10px] sm:text-xs text-neutral-500 line-clamp-2">
              {completedProjects.length} completed • {ongoingProjects.length} in progress • {plannedProjects.length} planned
            </div>
          </div>

          {/* Card 2: Combined In-Progress Cost */}
          <div className="rounded-2xl border border-neutral-200/90 bg-white p-3.5 sm:p-5 shadow-xs">
            <div className="text-[11px] sm:text-xs font-medium text-neutral-500">
              Active Projects Cost
            </div>
            <div className="mt-1 sm:mt-2 text-xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              {formatCrores(ongoingTotalCostCr)}
            </div>
            <div className="mt-1 text-[10px] sm:text-xs text-neutral-500 line-clamp-2">
              {ongoingCostKnown.length} of {ongoingProjects.length} active works have a reported cost
            </div>
          </div>

          {/* Card 3: Projects Behind Schedule */}
          <div className="rounded-2xl border border-neutral-200/90 bg-white p-3.5 sm:p-5 shadow-xs">
            <div className="text-[11px] sm:text-xs font-medium text-neutral-500">
              Behind Schedule
            </div>
            <div className="mt-1 sm:mt-2 text-xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              {delayedProjects.length} projects
            </div>
            <div className="mt-1 text-[10px] sm:text-xs text-neutral-500 line-clamp-2">
              Measured from original contract target
            </div>
          </div>

          {/* Card 4: Sourced Notices */}
          <div className="rounded-2xl border border-amber-200/80 bg-amber-50/40 p-3.5 sm:p-5 shadow-xs">
            <div className="text-[11px] sm:text-xs font-medium text-amber-800">
              Documented Notices
            </div>
            <div className="mt-1 sm:mt-2 text-xl sm:text-3xl font-bold tracking-tight text-amber-900">
              {totalRedFlagsCount}
            </div>
            <div className="mt-1 text-[10px] sm:text-xs text-amber-700/80 line-clamp-2">
              Audit strikes, single-bids &amp; disputes
            </div>
          </div>
        </div>
      </section>

      {/* Filter and View Controls Bar */}
      <section className="space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Box and Near Me */}
          <div className="flex items-center gap-2 flex-1 max-w-lg">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search project name, ward, road, area..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-neutral-200 bg-white pl-10 pr-4 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:border-neutral-400 focus:outline-none focus:ring-0 shadow-xs"
              />
            </div>

            {/* Near Me Location Button */}
            {userLocation ? (
              <div className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-800 shadow-xs shrink-0">
                <LocateFixed className="h-3.5 w-3.5 text-emerald-700" />
                <span>Near you</span>
                <button
                  type="button"
                  onClick={clearLocation}
                  className="ml-1 p-0.5 rounded-md hover:bg-emerald-100 text-emerald-700"
                  title="Clear location filter"
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ) : (
              <button
                type="button"
                onClick={requestLocation}
                disabled={isLocating}
                className="inline-flex items-center gap-1.5 rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-700 hover:text-neutral-900 hover:border-neutral-300 shadow-xs shrink-0 transition-colors"
                title="Sort projects by proximity to your current location"
              >
                <Locate className={`h-3.5 w-3.5 ${isLocating ? "animate-spin text-neutral-500" : "text-neutral-500"}`} />
                <span>{isLocating ? "Locating..." : "Near me"}</span>
              </button>
            )}
          </div>

          {/* View Toggle & Sort */}
          <div className="flex items-center gap-2 self-start sm:self-auto flex-wrap">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="rounded-xl border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-700 shadow-xs focus:outline-none"
            >
              <option value="default">Default Sort</option>
              {userLocation && <option value="near_me">Closest to Me</option>}
              <option value="cost">Highest Cost First</option>
              <option value="delay">Longest Delay First</option>
            </select>

            <div className="inline-flex rounded-xl border border-neutral-200 bg-white p-1 shadow-xs">
              <button
                onClick={() => setViewMode("cards")}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                  viewMode === "cards"
                    ? "bg-neutral-900 text-white font-semibold"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Cards ({filteredProjects.length})
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
                <span>Map</span>
              </button>
            </div>
          </div>
        </div>

        {locationError && (
          <div className="text-[11px] text-amber-800 bg-amber-50 border border-amber-200 px-3.5 py-2 rounded-xl flex items-center justify-between">
            <span>{locationError}</span>
            <button
              type="button"
              onClick={() => setLocationError(null)}
              className="text-amber-700 hover:text-amber-900 ml-2"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        {/* Category Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-neutral-400 font-medium mr-1 text-[11px]">Stage:</span>
          {[
            { id: "ALL", label: `All (${projects.length})` },
            { id: "ongoing", label: `In Progress (${ongoingProjects.length})` },
            { id: "completed", label: `Completed (${completedProjects.length})` },
            { id: "planned", label: `Planned (${plannedProjects.length})` },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-all shrink-0 ${
                selectedCategory === cat.id
                  ? "bg-neutral-900 text-white font-semibold"
                  : "bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Agency Filters */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
          <span className="text-neutral-400 font-medium mr-1 text-[11px]">Agency:</span>
          <button
            onClick={() => setSelectedAgency("ALL")}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-all shrink-0 ${
              selectedAgency === "ALL"
                ? "bg-neutral-800 text-white font-semibold"
                : "bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-900 hover:border-neutral-300"
            }`}
          >
            All Agencies
          </button>
          {agencies.map((agency) => (
            <button
              key={agency.code}
              onClick={() => setSelectedAgency(agency.code)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-all shrink-0 ${
                selectedAgency === agency.code
                  ? "bg-neutral-800 text-white font-semibold"
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
              Interactive City Map
            </h2>
            <span className="text-xs text-neutral-500">
              Showing {filteredProjects.length} projects across Bengaluru
            </span>
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
            <div className="flex items-center gap-4 text-xs font-medium">
              <Link
                href="/insights"
                className="text-neutral-600 hover:text-neutral-900 flex items-center gap-1"
              >
                <span>Analytics &amp; Insights</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/red-flags"
                className="text-neutral-600 hover:text-neutral-900 flex items-center gap-1"
              >
                <span>View all notices</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="rounded-2xl border border-neutral-200 bg-white p-12 text-center space-y-2">
              <FileQuestion className="mx-auto h-8 w-8 text-neutral-300" />
              <h3 className="text-sm font-semibold text-neutral-800">No matching projects found</h3>
              <p className="text-xs text-neutral-500">
                Try searching for another keyword or reset your filter filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProjects.map((project) => {
                const dist = userLocation
                  ? haversineDistanceKm(
                      userLocation.lat,
                      userLocation.lng,
                      project.coordinates.lat,
                      project.coordinates.lng
                    )
                  : undefined;
                return (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    distanceKm={dist}
                  />
                );
              })}
            </div>
          )}
        </section>
      )}

      {/* Clean Explainer Note */}
      <section className="rounded-2xl border border-neutral-200/80 bg-white p-6 space-y-3 shadow-xs">
        <h3 className="text-sm font-semibold text-neutral-900 flex items-center gap-2">
          <HelpCircle className="h-4 w-4 text-neutral-600" />
          <span>Understanding public infrastructure spending</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-neutral-600">
          <div className="space-y-1">
            <div className="font-semibold text-neutral-900">Announced vs Approved Budget</div>
            <p className="leading-relaxed text-neutral-500">
              Political announcements are preliminary aspirations. The approved budget (sanctioned amount) reflects legal cabinet approval with tied funding.
            </p>
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-neutral-900">Why Delays Multiply Costs</div>
            <p className="leading-relaxed text-neutral-500">
              When projects stall over land litigation, contractor defaults or utility shifting, tenders must be re-floated at higher current market rates.
            </p>
          </div>
          <div className="space-y-1">
            <div className="font-semibold text-neutral-900">Honest Spend Tracking</div>
            <p className="leading-relaxed text-neutral-500">
              Disbursed contractor payments are rarely disclosed item-by-item. We label derived spending clearly as estimates rather than inventing vouchers.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
