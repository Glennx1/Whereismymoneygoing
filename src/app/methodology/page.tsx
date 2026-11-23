import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldAlert, Clock, Database, Search } from "lucide-react";
import { ConfidenceBadge } from "@/components/ConfidenceBadge";

export const metadata = {
  title: "Methodology & Data Sourcing Standards • NammaKharcha",
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
          How we source and verify project data
        </h1>
        <p className="text-sm text-neutral-600 leading-relaxed">
          Public infrastructure data in India is fragmented across disparate departmental orders, press briefings, and tribunal affidavits. This page explains our data tiering, verification standards, and what we do when official sources disagree.
        </p>
      </div>

      {/* Confidence tiers */}
      <section className="rounded-2xl border border-neutral-200/90 bg-white p-6 space-y-4 shadow-xs">
        <h2 className="text-base font-semibold text-neutral-900">Confidence Labels</h2>
        <ul className="space-y-3.5 text-xs sm:text-sm text-neutral-600">
          <li className="flex items-start gap-3">
            <ConfidenceBadge confidence="verified" />
            <div>
              <strong className="text-neutral-900 block font-medium">Verified (Primary Official Record)</strong>
              <span>Matches an unedited primary government document, such as a Union Cabinet sanction order, PIB notification, KPPP tender award, Comptroller and Auditor General (CAG) audit report, or court affidavit.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <ConfidenceBadge confidence="reported" />
            <div>
              <strong className="text-neutral-900 block font-medium">Reported (Credible Media / Industry Trackers)</strong>
              <span>Stated in published investigative coverage by reputed national and local outlets (The Hindu, Deccan Herald, Times of India, Indian Express, Moneycontrol) or technical infrastructure trackers (The Metro Rail Guy). Every reported number links directly to its source.</span>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <ConfidenceBadge confidence="unverified" />
            <div>
              <strong className="text-neutral-900 block font-medium">Unverified / Explanatory Note</strong>
              <span>Where figures are conflicting, contested, or pending documentary verification, we document the range of claims in the field audit drawer.</span>
            </div>
          </li>
        </ul>
      </section>

      {/* Data Rules */}
      <section className="rounded-2xl border border-neutral-200/90 bg-white p-6 space-y-4 shadow-xs text-xs sm:text-sm text-neutral-600 leading-relaxed">
        <h2 className="text-base font-semibold text-neutral-900">Our Strict Data Rules</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-neutral-800">No memory or assumptions:</strong> Never put a number, date, or claim from memory. Every non-null value requires a verified source that was opened, read, and cited.
          </li>
          <li>
            <strong className="text-neutral-800">&quot;Not available&quot; is never zero:</strong> When a government body has not published cumulative project disbursements or contract values, we display &quot;Not available&quot;.
          </li>
          <li>
            <strong className="text-neutral-800">Clear spend tiering:</strong>
            <ul className="list-circle pl-5 mt-1 space-y-1">
              <li><strong>Reported Disbursal:</strong> Only when an explicit payment voucher or budget expenditure document states it.</li>
              <li><strong>Derived Estimated Spend:</strong> When physical progress % and a verified cost are both sourced, we compute <code className="text-neutral-800 font-mono text-[11px] bg-neutral-100 px-1 py-0.5 rounded">estimatedSpent = cost × progress%</code> and explicitly label it &quot;Estimate (cost × reported progress). Not an official payment figure.&quot;</li>
            </ul>
          </li>
          <li>
            <strong className="text-neutral-800">Staleness tracking:</strong> Every sourced figure carries an <code className="text-neutral-800 font-mono text-[11px] bg-neutral-100 px-1 py-0.5 rounded">asOf</code> date. Figures older than 12 months are visibly flagged as stale.
          </li>
          <li>
            <strong className="text-neutral-800">Conflict transparency:</strong> When sources conflict (e.g. Yellow Line cost reported as ₹5,745 Cr, ₹7,160 Cr, or ₹7,610 Cr), we do not pick silently. We record the conflicting figures in the field note and display the best-supported value as reported.
          </li>
          <li>
            <strong className="text-neutral-800">Automated build-time validation:</strong> A comprehensive validation script (<code className="text-neutral-800 font-mono text-[11px] bg-neutral-100 px-1 py-0.5 rounded">npm run validate-data</code>) validates all 32 project records before every build.
          </li>
        </ul>
      </section>

      {/* Audit Scope */}
      <section className="rounded-2xl border border-neutral-200/90 bg-white p-6 space-y-3 text-xs sm:text-sm text-neutral-600 leading-relaxed shadow-xs">
        <h2 className="text-base font-semibold text-neutral-900">Coverage Scope</h2>
        <p>
          NammaKharcha currently tracks 32 major public works spanning Metro Rail, Suburban Rail, National Expressways, Arterial Flyovers, Water Supply, Stormwater Drain Remodelling, and Lake Rejuvenation across the Bengaluru metropolitan region.
        </p>
        <p>
          Our full audit trail documenting every corrected figure and citation is maintained in the <code className="text-neutral-800 font-mono text-[11px] bg-neutral-100 px-1 py-0.5 rounded">docs/data-audit-log.md</code> file in our repository.
        </p>
      </section>
    </div>
  );
}
