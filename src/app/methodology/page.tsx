import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ConfidenceBadge } from "@/components/ConfidenceBadge";

export const metadata = {
  title: "How we check data • NammaKharcha",
};

export default function MethodologyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 space-y-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Projects</span>
      </Link>

      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
          How we check data
        </h1>
        <p className="text-sm text-neutral-600 leading-relaxed">
          Public project data in India is scattered, often out of date, and sometimes contradictory. This page explains what the labels on this site mean and what we do when sources disagree.
        </p>
      </div>

      <section className="rounded-2xl border border-neutral-200/90 bg-white p-6 space-y-4 shadow-xs">
        <h2 className="text-base font-semibold text-neutral-900">Confidence labels</h2>
        <ul className="space-y-3 text-sm text-neutral-600">
          <li className="flex items-start gap-3">
            <ConfidenceBadge confidence="verified" />
            <span>Matches a primary official document, such as a government order, tender record or audit report.</span>
          </li>
          <li className="flex items-start gap-3">
            <ConfidenceBadge confidence="reported" />
            <span>Stated in news coverage or a third-party tracker, with a link. Not yet matched to an official document.</span>
          </li>
          <li className="flex items-start gap-3">
            <ConfidenceBadge confidence="unverified" />
            <span>No source found yet. Shown only with a warning.</span>
          </li>
        </ul>
      </section>

      <section className="rounded-2xl border border-neutral-200/90 bg-white p-6 space-y-3 shadow-xs text-sm text-neutral-600 leading-relaxed">
        <h2 className="text-base font-semibold text-neutral-900">Our rules</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>A number without a source is not shown. &quot;Not available&quot; is never the same as zero.</li>
          <li>When sources disagree, we say so and list the different figures instead of picking one silently.</li>
          <li>Money &quot;paid out&quot; needs a document that states it. Project-wise payment data is rarely published, so most projects show &quot;Not available&quot; today.</li>
          <li>Every warning notice links to a report. Severity labels (low, medium, high, critical) are our own judgement.</li>
          <li>Derived figures, such as delay length and cost increase, are calculated from the dates and amounts shown, and only when both inputs are known.</li>
          <li>Each project page lists what was corrected in the latest audit.</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-amber-200/80 bg-amber-50/50 p-6 space-y-3 text-sm text-amber-900 leading-relaxed">
        <h2 className="text-base font-semibold">Current limits</h2>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Only seven projects are tracked. This is a starter set, not a complete list of Bengaluru projects.</li>
          <li>No figure has yet been matched to a primary government document, so none is labelled Verified.</li>
          <li>Source links point to news articles found during the audit; some may need re-checking for the exact figure quoted.</li>
          <li>Citizen photo reports are not yet saved or published.</li>
        </ul>
      </section>
    </div>
  );
}
