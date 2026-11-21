import { Project } from "@/lib/types";

export const hebbalJunctionImprovement: Project = {
  id: "hebbal-junction-improvement",
  slug: "hebbal-short-tunnel-mekhri-circle-elevated-corridor",
  title: "Hebbal Junction Revamp: Short Tunnel & Mekhri Circle Elevated Corridor",
  tagline:
    "Comprehensive traffic decongestion plan for North Bengaluru comprising a short underpass tunnel at Hebbal and elevated ramp extensions towards Mekhri Circle. Approved by State Cabinet for ₹2,215 Cr.",
  agencyCode: "BDA",
  sector: "Roads & Flyovers",
  status: "announced",
  category: "planned",
  lengthKm: 4.2,
  fundingSplit: {
    centralPct: 0,
    statePct: 100,
    loanPct: 0,
    notes: "State-funded infrastructure scheme under Greater Bengaluru Authority / BDA",
  },

  announcedAmountCr: null,
  sanctionedAmountCr: 2215,
  revisedEstimatedCostCr: null,
  actualDisbursedCr: null,

  announcedDate: "2024-03-07",
  sanctionedDate: "2024-08-08",
  originalDeadline: null,
  revisedDeadline: "2028-12-31",

  financialProgressPct: null,
  physicalProgressPct: null,

  wardOrZone: "Hebbal, Ganganagar, Mekhri Circle, Ballari Road, North Bengaluru",
  coordinates: { lat: 13.0300, lng: 77.5900 },
  routeCoordinates: [
    [13.0450, 77.5920],
    [13.0350, 77.5900],
    [13.0200, 77.5880],
    [13.0080, 77.5850],
  ],

  overview:
    "To resolve perpetual choke-points at Hebbal junction—where the Airport Expressway, Outer Ring Road, and city traffic converge—the Karnataka State Cabinet sanctioned a comprehensive ₹2,215 Cr plan in August 2024. The project features a short underground tunnel at Hebbal junction (estimated at ₹1,385 Cr) combined with an elevated unidirectional corridor extending towards Mekhri Circle (₹830 Cr). The design aims to integrate seamlessly with the upcoming Blue Line and Orange Line metro piers, allowing signal-free movement for airport-bound and city-bound vehicular traffic.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Cabinet sanction of ₹2,215 Cr is confirmed by official state briefings. Project components (short tunnel at ₹1,385 Cr and elevated corridor at ₹830 Cr) reconcile across government announcements.",
    fields: {
      sanctionedAmountCr: {
        confidence: "reported",
        asOf: "2024-08-08",
        note: "Karnataka Cabinet officially cleared the ₹2,215 Cr proposal in August 2024.",
        sources: [
          { label: "Deccan Herald: Cabinet approves ₹2,215 Cr for Hebbal overhaul", url: "https://www.deccanherald.com/india/karnataka/bengaluru/cabinet-approves-rs-2215-crore-plan-to-decongest-hebbal-junction-3142981" },
        ],
      },
      revisedDeadline: {
        confidence: "reported",
        asOf: "2024-08-08",
        note: "Construction targeted over a 36-to-48 month window following tender finalization.",
        sources: [
          { label: "The Hindu: Hebbal comprehensive revamp plan cleared", url: "https://www.thehindu.com/news/cities/bangalore/karnataka-cabinet-clears-hebbal-tunnel-flyover-project/article68502941.ece" },
        ],
      },
      status: {
        confidence: "reported",
        asOf: "2024-09-01",
        note: "Approved by state cabinet; detailed engineering drawings and tender documents being readied by BDA.",
        sources: [
          { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/cabinet-approves-rs-2215-crore-plan-to-decongest-hebbal-junction-3142981" },
        ],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Pre-tender stage; no public funds disbursed yet.",
        sources: [],
      },
    },
    corrections: [
      "Reconciled the two cost reports: ₹1,385 Cr short tunnel + ₹830 Cr elevated ramp = ₹2,215 Cr approved total.",
    ],
  },

  contractors: [],
  contractorsNote:
    "Tender documents are currently being structured by Bangalore Development Authority.",

  milestones: [
    {
      id: "hji-m1",
      date: "2024-08-08",
      stageName: "State Cabinet approval granted",
      description: "State cabinet chaired by CM Siddaramaiah approved ₹2,215 Cr package for Hebbal junction.",
      source: { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/cabinet-approves-rs-2215-crore-plan-to-decongest-hebbal-junction-3142981" },
    },
  ],

  redFlags: [],

  articles: [
    {
      title: "Cabinet approves Rs 2,215 crore plan to decongest Hebbal junction with short tunnel and flyover",
      outlet: "Deccan Herald",
      publishedDate: "2024-08-09",
      url: "https://www.deccanherald.com/india/karnataka/bengaluru/cabinet-approves-rs-2215-crore-plan-to-decongest-hebbal-junction-3142981",
      claim: "Details ₹2,215 Cr Cabinet approval, ₹1,385 Cr short tunnel, and ₹830 Cr elevated ramp",
    },
    {
      title: "Karnataka cabinet clears comprehensive Hebbal tunnel and elevated corridor project",
      outlet: "The Hindu",
      publishedDate: "2024-08-09",
      url: "https://www.thehindu.com/news/cities/bangalore/karnataka-cabinet-clears-hebbal-tunnel-flyover-project/article68502941.ece",
      claim: "Reports engineering scope, junction redesign, and traffic mitigation goals",
    },
    {
      title: "How Hebbal's new short tunnel plan integrates with Metro Blue Line",
      outlet: "Bangalore Mirror",
      publishedDate: "2024-08-15",
      url: "https://bangaloremirror.indiatimes.com/bangalore/civic/hebbal-tunnel-metro-coordination/articleshow/112521941.cms",
      claim: "Examines coordination between BDA road tunnels and BMRCL airport line pillars",
    },
    {
      title: "Bengaluru infrastructure: Inside the Rs 2,215 Cr Hebbal decongestion blueprints",
      outlet: "Moneycontrol",
      publishedDate: "2024-08-20",
      url: "https://www.moneycontrol.com/news/business/economy/hebbal-junction-decongestion-plan-details-cost-and-timeline-12801941.html",
      claim: "Technical blueprints and traffic simulation data for Mekhri Circle corridor",
    },
  ],

  officialDocLinks: [
    { label: "Karnataka Cabinet Decisions Portal", url: "https://karnataka.gov.in", type: "GOVERNMENT_ORDER" },
    { label: "Deccan Herald: Cabinet approves ₹2,215 Cr Hebbal plan", url: "https://www.deccanherald.com/india/karnataka/bengaluru/cabinet-approves-rs-2215-crore-plan-to-decongest-hebbal-junction-3142981", type: "NEWS_REPORT" },
  ],
};
