import Link from "next/link";
import { Info } from "lucide-react";

export function DataBanner() {
  return (
    <div className="border-b border-amber-200/80 bg-amber-50/70">
      <div className="mx-auto max-w-6xl px-4 py-2 sm:px-6 flex items-start gap-2 text-[11px] sm:text-xs text-amber-900 leading-relaxed">
        <Info className="h-3.5 w-3.5 mt-0.5 shrink-0 text-amber-700" />
        <p>
          <strong className="font-semibold">Data under verification.</strong>{" "}
          We are re-checking every figure against published sources. Numbers tagged{" "}
          <em>Reported</em> come from news or third-party trackers; anything
          marked <em>Not available</em> has no confirmed source yet.{" "}
          <Link href="/methodology" className="underline underline-offset-2 font-medium">
            How we check data
          </Link>
        </p>
      </div>
    </div>
  );
}
