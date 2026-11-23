import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { agencies } from "@/data/agencies";
import { FinancialPipeline } from "@/components/FinancialPipeline";
import { ProjectTimelineBar } from "@/components/ProjectTimelineBar";
import { RedFlagBadge } from "@/components/RedFlagBadge";
import { formatMonthYear, calculateDelayString, statusLabel } from "@/lib/utils";
import { 
  MapPin, 
  Clock, 
  Calendar, 
  ArrowLeft, 
  ExternalLink, 
  FileText, 
  AlertCircle, 
  Users,
  History,
  Newspaper,
  Compass,
  Train
} from "lucide-react";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Project Not Found | NammaKharcha",
      description: "Bengaluru public infrastructure project spending and timeline tracker.",
    };
  }

  const title = `${project.title} — Budget, Delays & Progress | NammaKharcha`;
  const description = `${project.tagline} Tracking reported budget, contract timeline, delays, and contractor details from verified public records.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      siteName: "NammaKharcha",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export default function ProjectDetailsPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const isCompleted = project.status === "completed" || project.category === "completed";
  const agency = agencies.find((a) => a.code === project.agencyCode);
  const delayStr = calculateDelayString(
    project.originalDeadline,
    project.revisedDeadline,
    isCompleted,
    project.completionDate
  );

  // Group articles into official vs news
  const officialArticles = project.articles.filter((a) => a.isOfficial);
  const newsArticles = project.articles.filter((a) => !a.isOfficial);

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 space-y-8">
      {/* Back button */}
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>All Projects</span>
        </Link>
      </div>

      {/* Project Header */}
      <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-800 border border-neutral-200/60">
              {agency ? agency.name : project.agencyCode}
            </span>
            <span className="text-xs text-neutral-500 font-medium">
              {project.sector}
            </span>
          </div>

          <span className="rounded-full px-2.5 py-0.5 text-xs font-medium border bg-neutral-100 text-neutral-800 border-neutral-200">
            {statusLabel(project.status)}
          </span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight leading-snug">
            {project.title}
          </h1>
          <p className="mt-2 text-sm text-neutral-600 leading-relaxed max-w-3xl">
            {project.tagline}
          </p>
        </div>

        <div className="pt-3 flex flex-wrap items-center gap-5 text-xs text-neutral-500 border-t border-neutral-100">
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 text-neutral-400" />
            <span>Area: <strong className="text-neutral-800">{project.wardOrZone}</strong></span>
          </div>
          {project.lengthKm && (
            <div className="flex items-center gap-1.5">
              <Compass className="h-3.5 w-3.5 text-neutral-400" />
              <span>Length: <strong className="text-neutral-800">{project.lengthKm} km</strong></span>
            </div>
          )}
          {project.stationsCount && (
            <div className="flex items-center gap-1.5">
              <Train className="h-3.5 w-3.5 text-neutral-400" />
              <span>Stations: <strong className="text-neutral-800">{project.stationsCount} stations</strong></span>
            </div>
          )}
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-neutral-400" />
            <span>Original deadline: <strong className="text-neutral-800">{formatMonthYear(project.originalDeadline)}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-neutral-400" />
            <span>
              {project.status === "completed" ? "Completed:" : "Current target:"}{" "}
              <strong className="text-neutral-800">{formatMonthYear(project.revisedDeadline ?? project.completionDate)}</strong>
              {delayStr && project.status !== "completed" ? ` (${delayStr})` : ""}
            </span>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-2 shadow-xs">
        <h2 className="text-base font-semibold text-neutral-900 tracking-tight">About this project</h2>
        <p className="text-sm text-neutral-600 leading-relaxed">{project.overview}</p>
        {project.fundingSplit && (
          <div className="mt-3 pt-3 border-t border-neutral-100 text-xs text-neutral-500">
            <span className="font-medium text-neutral-700">Funding Structure: </span>
            <span>
              {project.fundingSplit.centralPct ? `Central: ${project.fundingSplit.centralPct}% ` : ""}
              {project.fundingSplit.statePct ? `State: ${project.fundingSplit.statePct}% ` : ""}
              {project.fundingSplit.loanPct ? `Loan / Private: ${project.fundingSplit.loanPct}% (${project.fundingSplit.loanSource ?? ""})` : ""}
            </span>
            {project.fundingSplit.notes && <p className="text-[11px] text-neutral-400 mt-0.5">{project.fundingSplit.notes}</p>}
          </div>
        )}
        <p className="text-[11px] text-neutral-400 pt-1">
          Last audited {project.dataQuality.lastAudited}. See the notes under each figure for sources.
        </p>
      </div>

      {/* PROMISED VS ACTUAL TIMELINE */}
      <ProjectTimelineBar project={project} />

      {/* SECTION 1: THE FINANCIAL PIPELINE */}
      <FinancialPipeline project={project} />

      {/* SECTION 2: WHAT WENT WRONG? (DELAYS & AUDITS) */}
      <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
          <div>
            <h2 className="text-base font-semibold text-neutral-900 tracking-tight flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <span>Documented Delays &amp; Audit Notices</span>
            </h2>
            <p className="text-xs text-neutral-500 mt-0.5">
              Documented delays, cost increases and audit findings, each linked to a verified source.
            </p>
          </div>
          <span className="rounded-full bg-neutral-100 border border-neutral-200 px-2.5 py-0.5 text-xs font-medium text-neutral-700">
            {project.redFlags.length} notice{project.redFlags.length === 1 ? "" : "s"}
          </span>
        </div>

        {project.redFlags.length === 0 ? (
          <div className="p-5 rounded-xl bg-[#faf9f6] border border-neutral-200 text-center text-xs text-neutral-500">
            No sourced notices recorded. This does not mean there are no issues, only that we have not found a citable report or finding.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.redFlags.map((flag) => (
              <RedFlagBadge key={flag.id} redFlag={flag} detailed={true} />
            ))}
          </div>
        )}
      </div>

      {/* SECTION 3: COMPANIES BUILDING THIS */}
      <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="border-b border-neutral-100 pb-3">
          <h2 className="text-base font-semibold text-neutral-900 tracking-tight flex items-center gap-2">
            <Users className="h-4 w-4 text-neutral-700" />
            <span>Companies building this project</span>
          </h2>
        </div>

        {project.contractors.length === 0 ? (
          <div className="p-5 rounded-xl bg-[#faf9f6] border border-neutral-200 text-center text-xs text-neutral-500">
            {project.contractorsNote ?? "Contractor details have not been confirmed yet from official tender documents."}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.contractors.map((c, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-neutral-200/80 bg-[#faf9f6] p-4 space-y-2.5"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <span className="text-[11px] text-neutral-400">Company Name</span>
                    <h4 className="text-sm font-semibold text-neutral-900 mt-0.5">{c.name}</h4>
                  </div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                      c.status === "terminated"
                        ? "bg-rose-50 text-rose-700 border-rose-200"
                        : "bg-emerald-50 text-emerald-800 border-emerald-200"
                    }`}
                  >
                    {c.status}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs pt-2 border-t border-neutral-200/60">
                  <div>
                    <span className="text-neutral-400">Contract Value:</span>
                    <div className="font-semibold text-neutral-900 mt-0.5">
                      {c.awardedAmountCr ? `₹${c.awardedAmountCr} Cr` : "Not confirmed"}
                    </div>
                  </div>
                  <div>
                    <span className="text-neutral-400">Awarded Date:</span>
                    <div className="font-semibold text-neutral-900 mt-0.5">{formatMonthYear(c.contractAwardDate)}</div>
                  </div>
                </div>

                {c.scope && (
                  <p className="text-[11px] text-neutral-500 leading-relaxed">{c.scope}</p>
                )}

                {c.kpppTenderId && (
                  <div className="text-[11px] text-neutral-500 font-mono bg-white px-2 py-1 rounded border border-neutral-200 truncate">
                    Tender Reference: {c.kpppTenderId}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        {project.contractors.length > 0 && project.contractorsNote && (
          <p className="text-[11px] text-neutral-500 leading-relaxed">{project.contractorsNote}</p>
        )}
      </div>

      {/* SECTION 4: PAYMENT TIMELINE */}
      <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-5 shadow-xs">
        <h2 className="text-base font-semibold text-neutral-900 tracking-tight flex items-center gap-2">
          <History className="h-4 w-4 text-neutral-700" />
          <span>Timeline of key events</span>
        </h2>

        {project.milestones.length === 0 && (
          <div className="p-5 rounded-xl bg-[#faf9f6] border border-neutral-200 text-center text-xs text-neutral-500">
            No sourced timeline events yet.
          </div>
        )}

        <div className="relative pl-5 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-neutral-200">
          {project.milestones.map((m) => (
            <div key={m.id} className="relative group">
              <div className="absolute -left-5 top-1.5 h-2.5 w-2.5 rounded-full border border-white bg-neutral-900" />
              <div className="rounded-xl border border-neutral-200/70 bg-[#faf9f6] p-3.5 space-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-neutral-900">{m.stageName}</span>
                  <div className="flex items-center gap-2 text-xs">
                    {m.amountReleasedCr !== undefined && (
                      <span className="font-semibold text-neutral-900">
                        ₹{m.amountReleasedCr} Cr
                      </span>
                    )}
                    <span className="text-neutral-400">{formatMonthYear(m.date)}</span>
                  </div>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">{m.description}</p>
                <a
                  href={m.source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-neutral-500 hover:underline"
                >
                  <span>Source: {m.source.label}</span>
                  <ExternalLink className="h-3 w-3 text-neutral-400" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: NEWS AND SOURCES (NEW SECTION) */}
      <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="border-b border-neutral-100 pb-3">
          <h2 className="text-base font-semibold text-neutral-900 tracking-tight flex items-center gap-2">
            <Newspaper className="h-4 w-4 text-neutral-700" />
            <span>News and sources</span>
          </h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Published reports and official notifications that back the figures and timeline on this page.
          </p>
        </div>

        {/* Official Documents */}
        {officialArticles.length > 0 && (
          <div className="space-y-2">
            <div className="text-xs font-semibold text-neutral-700 uppercase tracking-wider">
              Official Primary Documents
            </div>
            <div className="space-y-2">
              {officialArticles.map((article, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-emerald-200/80 bg-emerald-50/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-semibold text-emerald-800 uppercase px-2 py-0.5 rounded bg-emerald-100 border border-emerald-200">
                        {article.outlet}
                      </span>
                      <span className="text-xs text-neutral-400">
                        {formatMonthYear(article.publishedDate)}
                      </span>
                      {article.checkedOn && (
                        <span className="text-[11px] text-neutral-400 font-mono">
                          • Link checked {article.checkedOn}
                        </span>
                      )}
                    </div>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold text-neutral-900 hover:text-emerald-700 hover:underline flex items-center gap-1"
                    >
                      <span>{article.title}</span>
                      <ExternalLink className="h-3 w-3 shrink-0 text-neutral-400" />
                    </a>
                    <p className="text-[11px] text-neutral-500 leading-snug">
                      <span className="font-medium text-neutral-700">Supports: </span>
                      {article.claim}
                    </p>
                    {article.excerpt && (
                      <p className="text-[11px] text-neutral-600 italic bg-white/70 rounded px-2 py-1 border border-neutral-200/50 mt-1">
                        &ldquo;{article.excerpt}&rdquo;
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* News Coverage */}
        <div className="space-y-2">
          {officialArticles.length > 0 && (
            <div className="text-xs font-semibold text-neutral-700 uppercase tracking-wider pt-2">
              News Coverage &amp; Investigative Reports
            </div>
          )}
          <div className="space-y-2">
            {newsArticles.map((article, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-neutral-200/80 bg-[#faf9f6] flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-neutral-50 transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold text-neutral-700 uppercase px-2 py-0.5 rounded bg-neutral-100 border border-neutral-200">
                      {article.outlet}
                    </span>
                    <span className="text-xs text-neutral-400">
                      {formatMonthYear(article.publishedDate)}
                    </span>
                    {article.checkedOn && (
                      <span className="text-[11px] text-neutral-400 font-mono">
                        • Link checked {article.checkedOn}
                      </span>
                    )}
                  </div>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-neutral-900 hover:text-neutral-600 hover:underline flex items-center gap-1"
                  >
                    <span>{article.title}</span>
                    <ExternalLink className="h-3 w-3 shrink-0 text-neutral-400" />
                  </a>
                  <p className="text-[11px] text-neutral-500 leading-snug">
                    <span className="font-medium text-neutral-700">Supports: </span>
                    {article.claim}
                  </p>
                  {article.excerpt && (
                    <p className="text-[11px] text-neutral-600 italic bg-white/70 rounded px-2 py-1 border border-neutral-200/50 mt-1">
                      &ldquo;{article.excerpt}&rdquo;
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 6: DIRECT SOURCES AND OFFICIAL DOCUMENTS */}
      <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-3 shadow-xs">
        <h2 className="text-base font-semibold text-neutral-900 tracking-tight flex items-center gap-2">
          <FileText className="h-4 w-4 text-neutral-700" />
          <span>Direct Document Links</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          {project.officialDocLinks.map((doc, idx) => (
            <a
              key={idx}
              href={doc.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-3 rounded-xl border border-neutral-200 bg-[#faf9f6] hover:bg-neutral-100 hover:border-neutral-300 transition-colors group text-xs"
            >
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-neutral-500" />
                <span className="font-medium text-neutral-800">{doc.label}</span>
              </div>
              <ExternalLink className="h-3.5 w-3.5 text-neutral-400 group-hover:text-neutral-700" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
