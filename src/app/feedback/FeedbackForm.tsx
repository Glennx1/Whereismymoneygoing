'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  Copy,
  ExternalLink,
  Github,
  AlertCircle,
  MessageSquare,
  Sparkles,
} from 'lucide-react';

const REPO_URL = 'https://github.com/Glennx1/Whereismymoneygoing';

export default function FeedbackForm() {
  const searchParams = useSearchParams();

  const [category, setCategory] = useState<string>('Budget data error');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [sourceUrl, setSourceUrl] = useState<string>('');
  const [pageOrTable, setPageOrTable] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const catParam = searchParams.get('category');
    const yearParam = searchParams.get('year');
    const sectorParam = searchParams.get('sector');
    const figureParam = searchParams.get('figure');
    const projectParam = searchParams.get('project');

    if (catParam === 'budget' || catParam === 'Budget data error') {
      setCategory('Budget data error');
      if (yearParam && sectorParam) {
        setTitle(`[Budget Error] ${sectorParam} FY ${yearParam} ${figureParam || ''}`.trim());
        setDescription(
          `**Fiscal Year:** ${yearParam}\n**Sector:** ${sectorParam}\n**Figure:** ${figureParam || 'General'}\n\n**Discrepancy Details:**\n- Stated in tracker: \n- Expected value: \n\n**Primary Official Source:**\n- Document Name / URL: \n- Page / Table Number: \n- Verbatim excerpt: `
        );
      } else if (yearParam) {
        setTitle(`[Budget Error] FY ${yearParam} Macro Figure`);
        setDescription(`**Fiscal Year:** ${yearParam}\n\n**Discrepancy Details:**\n`);
      }
    } else if (catParam === 'project' || catParam === 'Project data error') {
      setCategory('Project data error');
      if (projectParam) {
        setTitle(`[Project Error] ${projectParam}`);
        setDescription(`**Project:** ${projectParam}\n\n**Field in Error (Cost/Deadline/Contractor/Status):**\n\n**Official Document Link:**\n`);
      }
    } else if (catParam === 'feature') {
      setCategory('Feature request');
      setTitle('[Feature Request] ');
    }
  }, [searchParams]);

  const generateIssueMarkdown = () => {
    return `### Category
${category}

### Summary
${title || 'Data Discrepancy / Feedback'}

### Report Details
${description}

${sourceUrl ? `### Official Document Source\n- URL: ${sourceUrl}\n- Page / Table: ${pageOrTable || 'N/A'}` : ''}

${userEmail ? `### Submitter Contact\n${userEmail}` : ''}

---
*Submitted via Bengaluru Project Tracker (NammaKharcha) Citizen Feedback Portal*`;
  };

  const handleOpenGitHub = (e: React.FormEvent) => {
    e.preventDefault();
    const issueTitle = encodeURIComponent(title || `[${category}] Data Report`);
    const issueBody = encodeURIComponent(generateIssueMarkdown());
    const githubUrl = `${REPO_URL}/issues/new?title=${issueTitle}&body=${issueBody}`;

    // Open GitHub issue in new tab
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  const handleCopyClipboard = () => {
    const md = generateIssueMarkdown();
    navigator.clipboard.writeText(md).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 space-y-8">
      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Tracker</span>
        </Link>
      </div>

      <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 space-y-6 shadow-xs">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-2.5 py-0.5 text-xs font-medium text-neutral-800">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Public Data Integrity</span>
          </div>
          <h1 className="text-2xl font-bold text-neutral-900 tracking-tight">
            Report Data Error & Feedback
          </h1>
          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            Spot a discrepancy with an official gazette, budget document, or CAG audit? Tell us so we can review, verify against primary documents, and update the record.
          </p>
        </div>

        <form onSubmit={handleOpenGitHub} className="space-y-5">
          {/* Category Dropdown */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700">
              Report Category <span className="text-red-500">*</span>
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full rounded-xl border border-neutral-200 bg-[#faf9f6] px-3.5 py-2.5 text-xs text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none transition-colors"
            >
              <option value="Budget data error">Budget data error</option>
              <option value="Project data error">Project data error</option>
              <option value="Feature request">Feature request</option>
              <option value="General feedback">General feedback</option>
            </select>
          </div>

          {/* Title */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700">
              Short Summary / Subject <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. FY 2022-23 Urban Development Actuals discrepancy"
              className="w-full rounded-xl border border-neutral-200 bg-[#faf9f6] px-3.5 py-2.5 text-xs text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          {/* Report Description */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700">
              Report Details <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={6}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what is wrong, what the figure should be, and why..."
              className="w-full rounded-xl border border-neutral-200 bg-[#faf9f6] px-3.5 py-2.5 text-xs font-mono text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none transition-colors leading-relaxed"
            />
          </div>

          {/* Primary Official Source URL */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-700">
                Official Document URL (if applicable)
              </label>
              <input
                type="url"
                value={sourceUrl}
                onChange={(e) => setSourceUrl(e.target.value)}
                placeholder="https://finance.karnataka.gov.in/..."
                className="w-full rounded-xl border border-neutral-200 bg-[#faf9f6] px-3.5 py-2.5 text-xs text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-neutral-700">
                Page / Table Number
              </label>
              <input
                type="text"
                value={pageOrTable}
                onChange={(e) => setPageOrTable(e.target.value)}
                placeholder="Page 12, Table 4"
                className="w-full rounded-xl border border-neutral-200 bg-[#faf9f6] px-3.5 py-2.5 text-xs text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Optional Email */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-neutral-700">
              Your Email / Contact (optional, for follow-up)
            </label>
            <input
              type="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="citizen@bengaluru.org"
              className="w-full rounded-xl border border-neutral-200 bg-[#faf9f6] px-3.5 py-2.5 text-xs text-neutral-900 focus:border-neutral-900 focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-xs font-semibold text-white hover:bg-neutral-800 shadow-xs transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>Format & Open GitHub Issue</span>
              <ExternalLink className="h-3 w-3 text-neutral-400" />
            </button>

            <button
              type="button"
              onClick={handleCopyClipboard}
              className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-neutral-200 bg-white px-4 py-3 text-xs font-medium text-neutral-700 hover:bg-neutral-50 transition-colors"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">Copied Markdown!</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-neutral-500" />
                  <span>Copy Issue Markdown</span>
                </>
              )}
            </button>
          </div>
        </form>

        {submitted && (
          <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-4 text-xs text-emerald-900 space-y-1">
            <div className="font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>GitHub issue window opened!</span>
            </div>
            <p>
              Thank you for keeping public data accountable. Once verified against the primary gazette or audit volume, our automated build tests will ensure the correction is locked in.
            </p>
          </div>
        )}

        <div className="rounded-xl bg-neutral-50 p-4 border border-neutral-200/80 text-xs text-neutral-500 space-y-1">
          <div className="font-semibold text-neutral-800">Our Data Integrity Commitment:</div>
          <p>
            We do not accept unverified claims or anonymous numbers without a cited document. Every correction must link to an official Finance Department PDF, CAG audit volume, or verified government gazette.
          </p>
        </div>
      </div>
    </div>
  );
}
