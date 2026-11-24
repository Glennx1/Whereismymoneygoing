import { Confidence } from "@/lib/types";

const STYLES: Record<Confidence, { label: string; className: string }> = {
  verified: {
    label: "Verified",
    className: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
  reported: {
    label: "Reported",
    className: "bg-sky-50 text-sky-800 border-sky-200",
  },
  unverified: {
    label: "Unverified",
    className: "bg-amber-50 text-amber-800 border-amber-200",
  },
  derived: {
    label: "Derived",
    className: "bg-purple-50 text-purple-800 border-purple-200",
  },
};

export function ConfidenceBadge({ confidence }: { confidence: Confidence }) {
  const s = STYLES[confidence];
  return (
    <span
      title={
        confidence === "verified"
          ? "Matches a primary official document"
          : confidence === "derived"
          ? "Sum of printed component demand rows; not printed as a single total"
          : confidence === "reported"
          ? "Stated in news or a third-party source; not yet matched to an official document"
          : "No source found yet"
      }
      className={`inline-flex items-center rounded-full border px-1.5 py-px text-[10px] font-medium ${s.className}`}
    >
      {s.label}
    </span>
  );
}
