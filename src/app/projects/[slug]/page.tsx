import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import { agencies } from "@/data/agencies";
import { FinancialPipeline } from "@/components/FinancialPipeline";
import { RedFlagBadge } from "@/components/RedFlagBadge";
import { formatCrores, calculateDelayString } from "@/lib/utils";
import { 
  Building2, 
  MapPin, 
  Clock, 
  Calendar, 
  ArrowLeft, 
  ExternalLink, 
  FileText, 
  AlertCircle, 
  Camera, 
  CheckCircle2,
  Users,
  History
} from "lucide-react";

interface ProjectPageProps {
  params: {
    slug: string;
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

  const agency = agencies.find((a) => a.code === project.agencyCode);
  const delayStr = calculateDelayString(project.originalDeadline, project.revisedDeadline);

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
            {project.status === "stalled" ? "Stalled" : "In Progress"}
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
          <div className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5 text-neutral-400" />
            <span>Approved: <strong className="text-neutral-800">{new Date(project.sanctionedDate).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-neutral-400" />
            <span>Target: <strong className="text-neutral-800">{new Date(project.revisedDeadline).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}</strong> ({delayStr})</span>
          </div>
        </div>
      </div>

      {/* SECTION 1: THE FINANCIAL PIPELINE */}
      <FinancialPipeline project={project} />

      {/* SECTION 2: WHAT WENT WRONG? (DELAYS & AUDITS) */}
      <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
          <div>
            <h2 className="text-base font-semibold text-neutral-900 tracking-tight flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-amber-600" />
              <span>What went wrong? (Audits & Delays)</span>
            </h2>
            <p className="text-xs text-neutral-500 mt-0.5">
              Documented delays, cost increases, and official auditor findings.
            </p>
          </div>
          <span className="rounded-full bg-neutral-100 border border-neutral-200 px-2.5 py-0.5 text-xs font-medium text-neutral-700">
            {project.redFlags.length} notice{project.redFlags.length > 1 ? "s" : ""}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.redFlags.map((flag) => (
            <RedFlagBadge key={flag.id} redFlag={flag} detailed={true} />
          ))}
        </div>
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
            No company currently assigned. Tenders received zero bids or are pending.
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
                    <div className="font-semibold text-neutral-900 mt-0.5">{formatCrores(c.awardedAmountCr)}</div>
                  </div>
                  <div>
                    <span className="text-neutral-400">Awarded Date:</span>
                    <div className="font-semibold text-neutral-900 mt-0.5">{new Date(c.contractAwardDate).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}</div>
                  </div>
                </div>

                {c.kpppTenderId && (
                  <div className="text-[11px] text-neutral-500 font-mono bg-white px-2 py-1 rounded border border-neutral-200 truncate">
                    Tender Reference: {c.kpppTenderId}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SECTION 4: PAYMENT TIMELINE */}
      <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-5 shadow-xs">
        <h2 className="text-base font-semibold text-neutral-900 tracking-tight flex items-center gap-2">
          <History className="h-4 w-4 text-neutral-700" />
          <span>Timeline of payments & milestones</span>
        </h2>

        <div className="relative pl-5 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-neutral-200">
          {project.milestones.map((m) => (
            <div key={m.id} className="relative group">
              <div className="absolute -left-5 top-1.5 h-2.5 w-2.5 rounded-full border border-white bg-neutral-900" />
              <div className="rounded-xl border border-neutral-200/70 bg-[#faf9f6] p-3.5 space-y-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-neutral-900">{m.stageName}</span>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold text-neutral-900">
                      +{formatCrores(m.amountReleasedCr)}
                    </span>
                    <span className="text-neutral-400">
                      {new Date(m.date).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 5: PHOTOS FROM RESIDENTS */}
      <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-5 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold text-neutral-900 tracking-tight flex items-center gap-2">
              <Camera className="h-4 w-4 text-neutral-700" />
              <span>Photos from the ground</span>
            </h2>
            <p className="text-xs text-neutral-500 mt-0.5">
              Photos uploaded by residents showing real site progress.
            </p>
          </div>

          <Link
            href="/submit-report"
            className="inline-flex items-center gap-1.5 rounded-full bg-neutral-900 px-4 py-2 text-xs font-medium text-white hover:bg-neutral-800 transition-colors self-start sm:self-auto"
          >
            <Camera className="h-3.5 w-3.5" />
            <span>Upload a Photo</span>
          </Link>
        </div>

        {project.citizenReports.length === 0 ? (
          <div className="p-8 rounded-xl bg-[#faf9f6] border border-neutral-200 text-center text-xs text-neutral-500 space-y-1">
            <div className="font-medium text-neutral-700">No on-site photos uploaded yet</div>
            <p className="text-neutral-400">If you pass by this project site, upload a photo to help verify real ground progress.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {project.citizenReports.map((report) => (
              <div
                key={report.id}
                className="rounded-xl border border-neutral-200 bg-[#faf9f6] overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full bg-neutral-100 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={report.photoUrl}
                      alt={report.locationName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2.5 left-2.5 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-medium text-neutral-900 shadow-xs">
                      {report.locationName}
                    </div>
                  </div>

                  <div className="p-3.5 space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-neutral-400">
                      <span>By <strong className="text-neutral-700">{report.authorAlias}</strong></span>
                      <span>{new Date(report.submittedAt).toLocaleDateString("en-IN", { month: "short", year: "numeric" })}</span>
                    </div>
                    <p className="text-xs text-neutral-600 leading-relaxed italic">
                      &quot;{report.caption}&quot;
                    </p>
                  </div>
                </div>

                <div className="p-3.5 pt-0 border-t border-neutral-200/60 flex items-center justify-between text-xs text-neutral-500">
                  <span className="rounded bg-white px-2 py-0.5 text-[11px] font-medium border border-neutral-200 text-neutral-700">
                    {report.reportedStatus.replace(/_/g, " ")}
                  </span>
                  <span>{report.upvotes} confirmations</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SECTION 6: OFFICIAL DOCUMENTS */}
      <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-3 shadow-xs">
        <h2 className="text-base font-semibold text-neutral-900 tracking-tight flex items-center gap-2">
          <FileText className="h-4 w-4 text-neutral-700" />
          <span>Official Government Documents</span>
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
