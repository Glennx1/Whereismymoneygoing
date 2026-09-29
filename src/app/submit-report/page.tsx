"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function SubmitReportPage() {
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id || "");
  const [locationName, setLocationName] = useState("");
  const [authorAlias, setAuthorAlias] = useState("");
  const [statusClaimed, setStatusClaimed] = useState("slow_progress");
  const [caption, setCaption] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 space-y-8">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Projects</span>
        </Link>
      </div>

      <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">
            Share a Photo from Ground
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">
            See a project that is stalled or moving slowly? Upload a photo and tell us what it actually looks like on site.
          </p>
        </div>

        {submitted ? (
          <div className="rounded-xl border border-neutral-200 bg-[#faf9f6] p-8 text-center space-y-3">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900 text-white">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="text-base font-semibold text-neutral-900">Thank you for sharing!</h3>
            <p className="text-xs text-neutral-500 max-w-sm mx-auto leading-relaxed">
              Your photo and note have been received. We review uploads to make sure they match the location before displaying them on the project page.
            </p>
            <div className="pt-2">
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2 text-xs font-medium text-white hover:bg-neutral-800 transition-colors"
              >
                Back to Projects
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Project Selection */}
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Project *
              </label>
              <select
                value={selectedProjectId}
                onChange={(e) => setSelectedProjectId(e.target.value)}
                className="w-full rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 text-xs text-neutral-900 focus:border-neutral-400 focus:outline-none"
                required
              >
                {projects.map((p) => (
                  <option key={p.id} value={p.id}>
                    [{p.agencyCode}] {p.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Junction & Alias */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Where were you standing? *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sony World Signal or Bellandur Gate"
                  value={locationName}
                  onChange={(e) => setLocationName(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:border-neutral-400 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Your name or alias *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Ramesh K. or Anonymous"
                  value={authorAlias}
                  onChange={(e) => setAuthorAlias(e.target.value)}
                  className="w-full rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:border-neutral-400 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Status selection */}
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1.5">
                How does the work look right now? *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { value: "zero_work_visible", label: "Deserted / No Workers" },
                  { value: "slow_progress", label: "Very Slow / 2-3 Workers" },
                  { value: "active_work", label: "Active Construction" },
                  { value: "blocked_by_debris", label: "Debris Blocking Road" },
                  { value: "completed", label: "Work Looks Finished" },
                ].map((item) => (
                  <button
                    type="button"
                    key={item.value}
                    onClick={() => setStatusClaimed(item.value)}
                    className={`rounded-xl border p-2.5 text-xs font-medium text-left transition-all ${
                      statusClaimed === item.value
                        ? "border-neutral-900 bg-neutral-900 text-white"
                        : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-300"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Photo Link */}
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                Photo link
              </label>
              <input
                type="url"
                placeholder="https://... (paste link to image)"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
                className="w-full rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:border-neutral-400 focus:outline-none"
              />
              <p className="mt-1 text-[11px] text-neutral-400">
                You can paste an image link from Twitter/X, Imgur, or direct photo URL.
              </p>
            </div>

            {/* Observation note */}
            <div>
              <label className="block text-xs font-medium text-neutral-700 mb-1">
                What did you see? *
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe what you noticed (e.g., pillars left unbuilt, dug-up service road, no machinery on site)."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="w-full rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 text-xs text-neutral-900 placeholder-neutral-400 focus:border-neutral-400 focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-neutral-900 py-3 px-4 text-xs font-medium text-white shadow-xs hover:bg-neutral-800 transition-colors"
            >
              Submit Photo & Update
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
