import { RedFlag } from "@/lib/types";
import { AlertCircle, Clock, TrendingUp, UserX, FileWarning, ExternalLink } from "lucide-react";

interface RedFlagBadgeProps {
  redFlag: RedFlag;
  detailed?: boolean;
}

export function RedFlagBadge({ redFlag, detailed = false }: RedFlagBadgeProps) {
  const getIcon = () => {
    switch (redFlag.type) {
      case "COST_OVERRUN":
        return <TrendingUp className="h-4 w-4 shrink-0 text-neutral-700" />;
      case "TIMELINE_DELAY":
        return <Clock className="h-4 w-4 shrink-0 text-neutral-700" />;
      case "SINGLE_BIDDER":
        return <UserX className="h-4 w-4 shrink-0 text-neutral-700" />;
      case "CAG_AUDIT_STRIKE":
        return <FileWarning className="h-4 w-4 shrink-0 text-neutral-700" />;
      default:
        return <AlertCircle className="h-4 w-4 shrink-0 text-neutral-700" />;
    }
  };

  if (!detailed) {
    return (
      <span className="inline-flex items-center gap-1 text-xs text-neutral-700">
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-400" />
        <span>{redFlag.title}</span>
      </span>
    );
  }

  return (
    <div className="rounded-xl border border-neutral-200/90 bg-white p-4 space-y-2 shadow-xs transition-colors hover:border-neutral-300">
      <div className="flex items-start gap-2">
        <span className="mt-0.5">{getIcon()}</span>
        <div className="space-y-1 flex-1">
          <div className="font-semibold text-sm text-neutral-900 leading-snug">
            {redFlag.title}
          </div>
          <p className="text-xs text-neutral-600 leading-relaxed">
            {redFlag.summary}
          </p>
        </div>
      </div>

      {redFlag.calculatedMetric && (
        <div className="text-xs text-neutral-500 pl-6 pt-0.5">
          <span>Impact: </span>
          <span className="font-medium text-neutral-900">
            {redFlag.calculatedMetric}
          </span>
        </div>
      )}

      {/* Official Citation */}
      <div className="pt-2.5 pl-6 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-2 text-[11px] text-neutral-500">
        <div>
          <span>Source: </span>
          <span className="font-medium text-neutral-800">{redFlag.officialCitation.sourceName}</span>
          {redFlag.officialCitation.pageOrOrderNumber && (
            <span className="text-neutral-400"> ({redFlag.officialCitation.pageOrOrderNumber})</span>
          )}
        </div>
        {redFlag.officialCitation.documentUrl && (
          <a
            href={redFlag.officialCitation.documentUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-neutral-900 hover:underline font-medium"
          >
            <span>Verify Document</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </div>
  );
}
