import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200/80 bg-[#f7f6f2] text-neutral-500 text-xs">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand info */}
          <div className="space-y-2 md:col-span-1">
            <div className="font-semibold text-neutral-900 text-sm">NammaKharcha</div>
            <p className="text-neutral-500 leading-relaxed">
              A simple public tracker for Bengaluru infrastructure projects. We follow government announcements, budget orders, and contractor payments to see where the money goes.
            </p>
          </div>

          {/* Sources */}
          <div>
            <div className="font-semibold text-neutral-900 mb-2.5">Official Sources</div>
            <ul className="space-y-1.5 text-neutral-600">
              <li>
                <a
                  href="https://kppp.karnataka.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-neutral-900 inline-flex items-center gap-1"
                >
                  Karnataka e-Procurement (KPPP) <ExternalLink className="h-3 w-3 text-neutral-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://english.bmrc.co.in"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-neutral-900 inline-flex items-center gap-1"
                >
                  Namma Metro (BMRCL) <ExternalLink className="h-3 w-3 text-neutral-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://cag.gov.in/en/audit-report"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-neutral-900 inline-flex items-center gap-1"
                >
                  CAG Audit Reports <ExternalLink className="h-3 w-3 text-neutral-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://bengaluruurban.nic.in/en/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-neutral-900 inline-flex items-center gap-1"
                >
                  Bengaluru Administration Portal <ExternalLink className="h-3 w-3 text-neutral-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Disclaimer */}
          <div>
            <div className="font-semibold text-neutral-900 mb-2.5">Public Record</div>
            <p className="text-neutral-500 leading-relaxed">
              All figures, dates, and delays are sourced directly from published government orders, official project status reports, and court filings.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-neutral-400 text-[11px]">
          <div>© {new Date().getFullYear()} NammaKharcha • Independent public project tracker</div>
          <div>Bengaluru, Karnataka</div>
        </div>
      </div>
    </footer>
  );
}
