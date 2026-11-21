"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Info, X } from "lucide-react";

export function DataBanner() {
  const [dismissed, setDismissed] = useState<boolean>(true);

  useEffect(() => {
    const isDismissed = localStorage.getItem("nk_banner_dismissed");
    if (!isDismissed) {
      setDismissed(false);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("nk_banner_dismissed", "true");
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div className="border-b border-amber-200/80 bg-amber-50/70">
      <div className="mx-auto max-w-6xl px-4 py-2 sm:px-6 flex items-center justify-between gap-3 text-[11px] sm:text-xs text-amber-900 leading-relaxed">
        <div className="flex items-center gap-2">
          <Info className="h-3.5 w-3.5 shrink-0 text-amber-700" />
          <p>
            <strong className="font-semibold">Sourced data only.</strong> Every number cites its source. Numbers without a source are marked <em>Not available</em>.{" "}
            <Link href="/methodology" className="underline underline-offset-2 font-medium ml-1">
              Methodology
            </Link>
          </p>
        </div>
        <button
          onClick={handleDismiss}
          className="p-1 text-amber-800 hover:text-amber-950 rounded hover:bg-amber-100/60 transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
