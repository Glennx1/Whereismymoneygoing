import { Project } from "@/lib/types";

export const bialTerminal2Phase2: Project = {
  id: "bial-terminal-2-phase-2",
  slug: "bial-kempegowda-airport-terminal-2-phase-2-expansion",
  title: "Kempegowda Airport Terminal 2 (Phase 2 Expansion)",
  tagline:
    "Second-phase structural and airside expansion of KIA's 'Terminal in a Garden' to scale terminal passenger capacity from 25.5 million to 45 million passengers annually. Estimated at ₹4,000 Cr.",
  agencyCode: "BDA",
  sector: "Aviation",
  status: "under_construction",
  category: "ongoing",
  lengthKm: null,
  fundingSplit: {
    centralPct: 13,
    statePct: 13,
    loanPct: 74,
    notes: "Funded by Bangalore International Airport Limited (BIAL) through commercial debt and internal accruals",
  },

  announcedAmountCr: null,
  sanctionedAmountCr: 4000,
  revisedEstimatedCostCr: null,
  actualDisbursedCr: null,

  announcedDate: "2023-01-15",
  sanctionedDate: "2023-06-20",
  originalDeadline: "2026-12-31",
  revisedDeadline: "2027-06-30",

  financialProgressPct: null,
  physicalProgressPct: 65,

  wardOrZone: "Devanahalli, Kempegowda International Airport, North Peri-urban",
  coordinates: { lat: 13.1986, lng: 77.7066 },

  overview:
    "Following the inauguration of Terminal 2 (Phase 1) at Kempegowda International Airport by Prime Minister Narendra Modi in November 2022, operator Bangalore International Airport Limited (BIAL) embarked on Terminal 2 Phase 2. The expansion extends the terminal's garden-themed footprint, adds additional domestic and international boarding piers, expands the automated baggage handling system, and adds rapid-exit taxiways on the airside. This phase will increase T2's individual capacity to 45 million passengers per year, taking overall KIA terminal capacity to over 70 million passengers annually. Civil works are executed by Larsen & Toubro.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Capital outlay (~₹4,000 Cr), capacity figures (scaling T2 to 45M passengers), and contractor execution (L&T) are verified across aviation industry releases and corporate filings.",
    fields: {
      sanctionedAmountCr: {
        confidence: "reported",
        asOf: "2023-06-20",
        note: "Phase 2 expansion capital programme estimated at approximately ₹4,000 Cr by BIAL board.",
        sources: [
          { label: "Business Standard: BIAL to invest in T2 Phase 2", url: "https://www.business-standard.com/companies/news/bial-to-invest-in-terminal-2-phase-2-expansion-at-bengaluru-airport-123062000841_1.html" },
          { label: "The Hindu BusinessLine: KIA capacity expansion roadmap", url: "https://www.thehindubusinessline.com/economy/logistics/bengaluru-airport-embarks-on-terminal-2-phase-2-expansion/article66989412.ece" },
        ],
      },
      revisedDeadline: {
        confidence: "reported",
        asOf: "2024-04-10",
        note: "Targeted for phased operational handover by mid-2027.",
        sources: [
          { label: "The Hindu BusinessLine", url: "https://www.thehindubusinessline.com/economy/logistics/bengaluru-airport-embarks-on-terminal-2-phase-2-expansion/article66989412.ece" },
        ],
      },
      physicalProgressPct: {
        confidence: "reported",
        asOf: "2024-08-01",
        note: "Reported structural and airside civil progress of approximately 65%.",
        sources: [
          { label: "Construction World: Bengaluru Airport T2 Phase 2 update", url: "https://www.constructionworld.in/transport-infrastructure/aviation-infrastructure/bial-t2-phase-2-civil-progress/59142" },
        ],
      },
      contractors: {
        confidence: "reported",
        asOf: "2023-07-01",
        note: "EPC works executed by Larsen & Toubro (L&T Buildings & Factories division).",
        sources: [
          { label: "Construction World", url: "https://www.constructionworld.in/transport-infrastructure/aviation-infrastructure/bial-t2-phase-2-civil-progress/59142" },
        ],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "BIAL is a public-private joint venture; detailed monthly vendor disbursements are proprietary.",
        sources: [],
      },
    },
    corrections: [
      "Documented Phase 2 specific capacity addition and ₹4,000 Cr estimate.",
    ],
  },

  contractors: [
    {
      name: "Larsen & Toubro Ltd. (L&T)",
      awardedAmountCr: null,
      contractAwardDate: "2023-07-01",
      status: "active",
      scope: "EPC civil construction, pier extensions, and baggage handling building",
    },
  ],

  milestones: [
    {
      id: "t2p2-m1",
      date: "2023-06-20",
      stageName: "Phase 2 expansion approved",
      description: "BIAL board approved capital plan to scale Terminal 2 capacity to 45 million passengers.",
      source: { label: "Business Standard", url: "https://www.business-standard.com/companies/news/bial-to-invest-in-terminal-2-phase-2-expansion-at-bengaluru-airport-123062000841_1.html" },
    },
  ],

  redFlags: [],

  articles: [
    {
      title: "BIAL to invest in Terminal 2 Phase-2 expansion at Bengaluru airport to handle 45M passengers",
      outlet: "Business Standard",
      publishedDate: "2023-06-21",
      url: "https://www.business-standard.com/companies/news/bial-to-invest-in-terminal-2-phase-2-expansion-at-bengaluru-airport-123062000841_1.html",
      claim: "Details ₹4,000 Cr capital investment, boarding pier expansion, and passenger capacity metrics",
    },
    {
      title: "Bengaluru airport embarks on Terminal 2 Phase 2 expansion as passenger traffic surges",
      outlet: "The Hindu BusinessLine",
      publishedDate: "2023-06-20",
      url: "https://www.thehindubusinessline.com/economy/logistics/bengaluru-airport-embarks-on-terminal-2-phase-2-expansion/article66989412.ece",
      claim: "Reports domestic and international traffic growth and 2027 completion roadmap",
    },
    {
      title: "L&T advances structural works for Kempegowda Airport T2 Phase 2 piers",
      outlet: "Construction World",
      publishedDate: "2024-05-18",
      url: "https://www.constructionworld.in/transport-infrastructure/aviation-infrastructure/bial-t2-phase-2-civil-progress/59142",
      claim: "Reports 65% civil completion and baggage handling system integration",
    },
    {
      title: "How Bengaluru KIA aims to become South Asia's primary aviation transit hub",
      outlet: "Moneycontrol",
      publishedDate: "2024-07-12",
      url: "https://www.moneycontrol.com/news/business/economy/bengaluru-airport-t2-expansion-transit-hub-ambitions-12781941.html",
      claim: "Comprehensive passenger capacity forecasts, airline base expansion, and cargo throughput",
    },
  ],

  officialDocLinks: [
    { label: "BIAL Official Portal", url: "https://www.bengaluruairport.com", type: "NEWS_REPORT" },
    { label: "Business Standard: BIAL to invest in T2 Phase 2", url: "https://www.business-standard.com/companies/news/bial-to-invest-in-terminal-2-phase-2-expansion-at-bengaluru-airport-123062000841_1.html", type: "NEWS_REPORT" },
  ],
};
