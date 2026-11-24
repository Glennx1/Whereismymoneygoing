import Link from "next/link";
import { ArrowLeft, CheckCircle2, ShieldAlert, Clock, Database, Search } from "lucide-react";
import { ConfidenceBadge } from "@/components/ConfidenceBadge";

export const metadata = {
  title: "Methodology & Data Sourcing Standards • Bengaluru Project Tracker",
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
          Bengaluru Project Tracker currently tracks 32 major public works spanning Metro Rail, Suburban Rail, National Expressways, Arterial Flyovers, Water Supply, Stormwater Drain Remodelling, and Lake Rejuvenation across the Bengaluru metropolitan region.
        </p>
        <p>
          Our full audit trail documenting every corrected figure and citation is maintained in the <code className="text-neutral-800 font-mono text-[11px] bg-neutral-100 px-1 py-0.5 rounded">docs/data-audit-log.md</code> file in our repository.
        </p>
      </section>

      {/* Karnataka State Budget vs Actual Methodology */}
      <section className="rounded-2xl border border-neutral-200/90 bg-white p-6 space-y-4 shadow-xs text-xs sm:text-sm text-neutral-600 leading-relaxed">
        <h2 className="text-base font-semibold text-neutral-900">
          Karnataka State Budget vs Actual: Methodology & Accounting Standards
        </h2>
        
        <div className="space-y-3">
          <h3 className="font-semibold text-neutral-900 text-xs sm:text-sm">
            1. Understanding BE, RE, and Audited Actuals
          </h3>
          <p>
            In Indian public finance, state budgets undergo three distinct stages:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Budget Estimate (BE):</strong> The planned allocation presented by the Chief Minister / Finance Minister to the State Legislature before or at the start of the financial year.
            </li>
            <li>
              <strong>Revised Estimate (RE):</strong> A mid-year revision prepared roughly 10 months into the fiscal cycle, tabled alongside the following year&apos;s budget. RE incorporates supplementary grants, savings, and re-appropriations.
            </li>
            <li>
              <strong>Actual (Audited Accounts):</strong> The final closed expenditure reconciled by the State Accountant General and certified by the Comptroller and Auditor General of India (CAG) in the official <em>Finance Accounts</em> and <em>Appropriation Accounts</em>.
            </li>
          </ul>
        </div>

        <div className="space-y-3 pt-2 border-t border-neutral-100">
          <h3 className="font-semibold text-neutral-900 text-xs sm:text-sm">
            2. The 1–2 Year Audit Lag
          </h3>
          <p>
            Audited actuals cannot be reported immediately when a fiscal year ends on March 31. Reconciling departmental vouchers, treasury transfers, inter-state settlements, and CAG verification typically requires 12 to 24 months. For instance, audited actuals for FY 2024-25 will only be certified and tabled in late 2025 or early 2026.
          </p>
          <p className="bg-neutral-50 p-2.5 rounded-lg border border-neutral-200/70 font-mono text-neutral-800 text-[11px]">
            Strict rule: Where an audited actual is not yet published, our dataset strictly stores <span className="font-bold text-amber-800">null</span>. We never substitute 0, an estimate, or an unrevised projection.
          </p>
        </div>

        <div className="space-y-3 pt-2 border-t border-neutral-100">
          <h3 className="font-semibold text-neutral-900 text-xs sm:text-sm">
            3. Treatment of Central Transfers (Fiscal Federalism)
          </h3>
          <p>
            Karnataka&apos;s revenue receipts are categorized into State&apos;s Own Revenue and Union Transfers:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Share of Central Taxes (Devolution):</strong> Constitutional transfer under Article 280, based on the formula recommended by the Finance Commission (e.g. 15th FC).
            </li>
            <li>
              <strong>Grants-in-Aid from Centre:</strong> Includes statutory grants, disaster relief, local body grants, and Centrally Sponsored Schemes (CSS) such as Samagra Shiksha, AMRUT, and the National Health Mission.
            </li>
            <li>
              <strong>Sector Split Rule:</strong> We only display sector-level CSS breakdowns when they are explicitly published in primary state Demands for Grants volumes. We never extrapolate or assume splits where the state records block receipts.
            </li>
          </ul>
        </div>

        <div className="space-y-3 pt-2 border-t border-neutral-100">
          <h3 className="font-semibold text-neutral-900 text-xs sm:text-sm">
            4. Limitations of the Budget Data
          </h3>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>
              <strong>Departmental evolution:</strong> Departments periodically merge, bifurcate, or change Demand numbers across budget cycles (e.g., Primary & Secondary Education evolving into School Education and Literacy). Our standard sectors provide multi-year continuity based on the <Link href="/budget" className="text-neutral-900 underline font-medium">Department Mapping</Link> table.
            </li>
            <li>
              <strong>Nominal Rupees (Not Inflation-Adjusted):</strong> All historical budget figures are presented in nominal ₹ Crore as recorded in the respective year&apos;s budget papers.
            </li>
            <li>
              <strong>Off-Budget Borrowings:</strong> Capital expenditures funded through autonomous parastatals (e.g. Krishna Bhagya Jala Nigam Ltd, Karnataka Urban Infrastructure Development and Finance Corporation) issuing sovereign-backed bonds do not always appear under consolidated fund departmental outlays until service payments are made.
            </li>
          </ul>
        </div>
      </section>

    </div>
  );
}
