import { Project } from "@/lib/types";

export const bengaluruChennaiExpressway: Project = {
  id: "bengaluru-chennai-expressway",
  slug: "bengaluru-chennai-expressway-karnataka-section",
  title: "Bengaluru-Chennai Expressway (NE-7: Karnataka Section)",
  tagline:
    "71 km greenfield access-controlled expressway within Karnataka (part of the 258 km NE-7 corridor). Deadlines have slipped from 2024 to late 2026 / 2027.",
  agencyCode: "NHAI",
  sector: "Roads & Flyovers",
  status: "under_construction",
  category: "ongoing",
  lengthKm: 71.0,
  fundingSplit: {
    centralPct: 100,
    statePct: 0,
    loanPct: 0,
    notes: "Central expressway under Bharatmala Pariyojana; total 258 km project cost ₹17,900 Cr",
  },

  announcedAmountCr: null,
  sanctionedAmountCr: 5200,
  revisedEstimatedCostCr: null,
  actualDisbursedCr: null,

  announcedDate: "2018-09-12",
  sanctionedDate: "2020-11-20",
  originalDeadline: "2024-03-31",
  revisedDeadline: "2026-12-31",

  financialProgressPct: null,
  physicalProgressPct: 84,

  wardOrZone: "Hoskote, Malur, Bangarapet, Bethamangala, Kolar District",
  coordinates: { lat: 13.0100, lng: 78.1500 },
  routeCoordinates: [
    [13.0700, 77.8000],
    [13.0200, 77.9400],
    [12.9800, 78.2000],
    [12.9600, 78.3600],
  ],

  overview:
    "The Bengaluru-Chennai Expressway (National Expressway 7, NE-7) is a 258-km four-lane access-controlled greenfield highway designed for 120 km/h speeds, cutting road journey times between the two southern metros from over 6 hours to 2.5–3 hours. The Karnataka stretch comprises 71 km across three civil packages (Hoskote to Malur, Malur to Bangarapet, and Bangarapet to the Andhra Pradesh border) with a sanctioned cost of approximately ₹5,200 Cr. Originally targeted for March 2024, completion has been delayed to late 2026 due to aggregate shortages, stone-quarry leasing litigation in Kolar, and contractor cash-flow hurdles.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Overall expressway costs (₹15,188 Cr to ₹17,900 Cr) and Karnataka specific package figures (~₹5,200 Cr across 71 km) are confirmed through parliamentary replies and NHAI reviews. Slipped deadlines from 2024 to 2026/2027 are documented in multiple press investigations.",
    fields: {
      sanctionedAmountCr: {
        confidence: "reported",
        asOf: "2020-11-20",
        note: "Karnataka civil packages (71 km) sanctioned at approx ₹5,200 Cr including land compensation.",
        sources: [
          { label: "The Hindu: Bengaluru-Chennai Expressway progress", url: "https://www.thehindu.com/news/national/karnataka/bengaluru-chennai-expressway-karnataka-stretch-faces-delays/article68102941.ece" },
          { label: "Financial Express: NE-7 project overview", url: "https://www.financialexpress.com/business/infrastructure-bengaluru-chennai-expressway-route-map-cost-and-completion-date-3142981/" },
        ],
      },
      originalDeadline: {
        confidence: "reported",
        asOf: "2020-11-20",
        note: "Initial contract targeted completion by March 2024.",
        sources: [
          { label: "Financial Express", url: "https://www.financialexpress.com/business/infrastructure-bengaluru-chennai-expressway-route-map-cost-and-completion-date-3142981/" },
        ],
      },
      revisedDeadline: {
        confidence: "reported",
        asOf: "2024-07-15",
        note: "Union Minister Nitin Gadkari and NHAI progress reviews confirmed targets moved from June 2024 to late 2026.",
        sources: [
          { label: "Times of India: Bengaluru-Chennai expressway deadline extended", url: "https://timesofindia.indiatimes.com/city/bengaluru/bengaluru-chennai-expressway-deadline-extended/articleshow/111894102.cms" },
        ],
      },
      physicalProgressPct: {
        confidence: "reported",
        asOf: "2024-08-01",
        note: "Karnataka section physical progress reported at about 84% (with Andhra at ~92% and Tamil Nadu at ~80%).",
        sources: [
          { label: "The Hindu", url: "https://www.thehindu.com/news/national/karnataka/bengaluru-chennai-expressway-karnataka-stretch-faces-delays/article68102941.ece" },
        ],
      },
      contractors: {
        confidence: "reported",
        asOf: "2021-02-15",
        note: "Three civil packages awarded to Dilip Buildcon, CDS Infra, and Montecarlo Ltd.",
        sources: [
          { label: "Construction World", url: "https://www.constructionworld.in/transport-infrastructure/highways-and-bridges-infrastructure/bengaluru-chennai-expressway-update/41294" },
        ],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Treasury package disbursements not published in unified public breakdown.",
        sources: [],
      },
    },
    corrections: [
      "Documented timeline slippage from original March 2024 to late 2026.",
      "Reconciled Karnataka-specific length (71 km) with full expressway length (258 km).",
    ],
  },

  contractors: [
    {
      name: "Dilip Buildcon Ltd.",
      awardedAmountCr: 1060,
      contractAwardDate: "2021-02-15",
      status: "active",
      scope: "Package 1: Hoskote to Malur (27.1 km)",
    },
    {
      name: "CDS Infra Projects Ltd.",
      awardedAmountCr: 1240,
      contractAwardDate: "2021-03-01",
      status: "active",
      scope: "Package 2: Malur to Bangarapet (27.1 km)",
    },
    {
      name: "Montecarlo Ltd.",
      awardedAmountCr: 1115,
      contractAwardDate: "2021-03-15",
      status: "active",
      scope: "Package 3: Bangarapet to Bethamangala / AP Border (17.5 km)",
    },
  ],

  milestones: [
    {
      id: "bce-m1",
      date: "2021-03-15",
      stageName: "Contracts awarded for Karnataka packages",
      description: "NHAI awarded all 3 civil packages covering 71 km in Karnataka under Hybrid Annuity / EPC models.",
      source: { label: "Construction World", url: "https://www.constructionworld.in/transport-infrastructure/highways-and-bridges-infrastructure/bengaluru-chennai-expressway-update/41294" },
    },
    {
      id: "bce-m2",
      date: "2024-03-31",
      stageName: "Original deadline breached",
      description: "Expressway was not ready due to stone quarry licensing disputes and minor bridge delays.",
      source: { label: "Times of India", url: "https://timesofindia.indiatimes.com/city/bengaluru/bengaluru-chennai-expressway-deadline-extended/articleshow/111894102.cms" },
    },
  ],

  redFlags: [
    {
      id: "rf-bce-delay",
      type: "TIMELINE_DELAY",
      severity: "HIGH",
      title: "Opening delayed by over 2.5 years past original March 2024 promise",
      summary:
        "Severe delays in obtaining stone quarry clearances in Kolar district and elevated flyover structures pushed the operational target from early 2024 to late 2026.",
      calculatedMetric: "2 yr 9 mo delay",
      officialCitation: {
        sourceName: "Times of India",
        documentUrl: "https://timesofindia.indiatimes.com/city/bengaluru/bengaluru-chennai-expressway-deadline-extended/articleshow/111894102.cms",
      },
    },
  ],

  articles: [
    {
      title: "Bengaluru-Chennai Expressway Karnataka stretch faces delays over quarry licenses",
      outlet: "The Hindu",
      publishedDate: "2024-05-20",
      url: "https://www.thehindu.com/news/national/karnataka/bengaluru-chennai-expressway-karnataka-stretch-faces-delays/article68102941.ece",
      claim: "Details 84% progress, quarrying disputes, and state coordination issues",
    },
    {
      title: "Bengaluru-Chennai Expressway deadline extended to late 2026: MoRTH review",
      outlet: "Times of India",
      publishedDate: "2024-07-20",
      url: "https://timesofindia.indiatimes.com/city/bengaluru/bengaluru-chennai-expressway-deadline-extended/articleshow/111894102.cms",
      claim: "Reports official revised deadline of late 2026 from Union transport ministry",
    },
    {
      title: "Bengaluru-Chennai Expressway: Route map, cost, and completion date of NE-7",
      outlet: "Financial Express",
      publishedDate: "2024-04-10",
      url: "https://www.financialexpress.com/business/infrastructure-bengaluru-chennai-expressway-route-map-cost-and-completion-date-3142981/",
      claim: "Comprehensive route analysis, total ₹17,900 Cr cost, and speed regulations",
    },
    {
      title: "How the new greenfield NE-7 expressway cuts Bengaluru-Chennai transit to 2.5 hours",
      outlet: "Deccan Herald",
      publishedDate: "2024-06-05",
      url: "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-chennai-expressway-speed-and-connectivity-features-3162981",
      claim: "Examines industrial corridor impact along Hoskote-Malur-Bangarapet industrial belt",
    },
  ],

  officialDocLinks: [
    { label: "NHAI National Expressways Portal", url: "https://nhai.gov.in", type: "NEWS_REPORT" },
    { label: "The Hindu: Bengaluru-Chennai Expressway progress", url: "https://www.thehindu.com/news/national/karnataka/bengaluru-chennai-expressway-karnataka-stretch-faces-delays/article68102941.ece", type: "NEWS_REPORT" },
  ],
};
