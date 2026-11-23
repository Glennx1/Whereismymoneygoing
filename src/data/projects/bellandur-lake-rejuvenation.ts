import { Project } from "@/lib/types";

export const bellandurLakeRejuvenation: Project = {
  id: "bellandur-lake-rejuvenation",
  slug: "bellandur-lake-comprehensive-rejuvenation-bda",
  title: "Bellandur Lake Eco-Restoration & KC Valley Sewage Treatment",
  tagline:
    "Massive environmental restoration of Bengaluru's largest lake (915 acres) mandated by the National Green Tribunal. Over 3.2 million cubic metres of toxic silt dredging, diversion channels, and a 150 MLD STP.",
  agencyCode: "BDA",
  sector: "Lake Rejuvenation",
  status: "under_construction",
  category: "ongoing",
  lengthKm: null,
  fundingSplit: {
    centralPct: 0,
    statePct: 100,
    loanPct: 0,
    notes: "State government budgetary allocations through BDA and BWSSB under judicial monitoring",
  },

  announcedAmountCr: null,
  sanctionedAmountCr: 400,
  revisedEstimatedCostCr: null,
  actualDisbursedCr: null,

  announcedDate: "2019-01-10",
  sanctionedDate: "2019-12-05",
  originalDeadline: "2022-12-31",
  revisedDeadline: "2025-12-31",

  financialProgressPct: null,
  physicalProgressPct: 76,

  wardOrZone: "Bellandur, Yamalur, Mahadevapura, Koramangala Valley Outflow, East Bengaluru",
  coordinates: { lat: 12.9350, lng: 77.6700 },

  overview:
    "Bellandur Lake, spanning approximately 915 acres, is Bengaluru's largest waterbody and the epicenter of urban ecological distress, historically infamous for toxic foam spills and surface fires caused by untreated sewage and industrial chemicals. Under strict supervision from the National Green Tribunal (NGT) and an expert committee, the state government initiated a ₹400 Cr comprehensive clean-up involving BDA and BWSSB. Interventions include excavating over 3.2 million cubic metres of toxic silt (₹150 Cr civil package), constructing a dedicated 150 MLD Sewage Treatment Plant (STP) at KC Valley, building inlet sluice gates, and completing a 32-km diversion channel to bypass untreated raw sewage until treatment infrastructure is fully operational.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Combined outlay (~₹400 Cr between BDA civil dredging and BWSSB KC Valley STP works), physical progress (~76%), and NGT court compliances are verified against state tribunal submissions and press reports.",
    fields: {
      sanctionedAmountCr: {
        confidence: "reported",
        asOf: "2019-12-05",
        note: "Composite sanction: ~₹150 Cr for BDA lake bed dredging and ~₹250 Cr for BWSSB KC Valley STPs and trunk interceptor lines.",
        sources: [
          { label: "Deccan Herald: Bellandur lake clean-up outlay", url: "https://www.deccanherald.com/india/karnataka/bengaluru/bellandur-lake-rejuvenation-cost-reaches-rs-400-cr-2891942" },
          { label: "The Hindu: Bellandur lake desilting status", url: "https://www.thehindu.com/news/cities/bangalore/bellandur-lake-restoration-desilting-reaches-75-percent/article68194812.ece" },
        ],
      },
      originalDeadline: {
        confidence: "reported",
        asOf: "2019-12-05",
        note: "NGT-ordered completion roadmap set original target of December 2022.",
        sources: [
          { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/bellandur-lake-restoration-desilting-reaches-75-percent/article68194812.ece" },
        ],
      },
      revisedDeadline: {
        confidence: "reported",
        asOf: "2024-06-01",
        note: "Extended to late 2025 due to massive silt disposal hurdles and coordination between BDA and BWSSB.",
        sources: [
          { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/bellandur-lake-rejuvenation-cost-reaches-rs-400-cr-2891942" },
        ],
      },
      physicalProgressPct: {
        confidence: "reported",
        asOf: "2024-08-15",
        note: "Reported desilting and civil works progress at approximately 76% across the 915-acre lake bed.",
        sources: [
          { label: "The Hindu: Bellandur lake desilting status", url: "https://www.thehindu.com/news/cities/bangalore/bellandur-lake-restoration-desilting-reaches-75-percent/article68194812.ece" },
        ],
      },
      contractors: {
        confidence: "reported",
        asOf: "2020-02-15",
        note: "Civil works executed through BDA earthmoving contractors; STP constructed by BWSSB-appointed environmental contractors.",
        sources: [
          { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/bellandur-lake-restoration-desilting-reaches-75-percent/article68194812.ece" },
        ],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Tranche-wise audit accounts filed in NGT sealed covers; open single ledger not available.",
        sources: [],
      },
    },
    corrections: [
      "Documented combined BDA/BWSSB budget of ~₹400 Cr and NGT compliance history.",
    ],
  },

  contractors: [],
  contractorsNote:
    "Executed jointly by BDA (lake basin civil works) and BWSSB (KC Valley Sewage Treatment Plants).",

  milestones: [
    {
      id: "blr-m1",
      date: "2019-12-05",
      stageName: "Desilting initiated under NGT mandate",
      description: "BDA began dredging estimated 3.2 million cubic metres of heavy metal-laden silt from the lake bed.",
      source: { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/bellandur-lake-rejuvenation-cost-reaches-rs-400-cr-2891942" },
    },
    {
      id: "blr-m2",
      date: "2023-08-10",
      stageName: "KC Valley 150 MLD STP operationalized",
      description: "BWSSB completed construction and testing of the 150 MLD state-of-the-art treatment facility.",
      source: { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/kc-valley-stp-commissioned/article67184912.ece" },
    },
  ],

  redFlags: [
    {
      id: "rf-blr-delays",
      type: "TIMELINE_DELAY",
      severity: "HIGH",
      title: "Inter-agency friction and silt disposal logistics delayed handover by 3 years",
      summary:
        "Lack of designated quarries for disposing 3.2 million cubic metres of hazardous sludge, coupled with friction between BDA (lake authority) and BWSSB (drainage authority), delayed completion well past the 2022 deadline.",
      calculatedMetric: "3 years delayed past original NGT deadline",
      officialCitation: {
        sourceName: "Deccan Herald",
        documentUrl: "https://www.deccanherald.com/india/karnataka/bengaluru/bellandur-lake-rejuvenation-cost-reaches-rs-400-cr-2891942",
      },
    },
  ],

  articles: [
    {
      title: "Bellandur lake restoration: Desilting reaches 75% mark as BDA clears major zones",
      outlet: "The Hindu",
      publishedDate: "2024-06-02",
      url: "https://www.thehindu.com/news/cities/bangalore/bellandur-lake-restoration-desilting-reaches-75-percent/article68194812.ece",
      claim: "Reports 76% physical completion, dredging volumes, and wetland compartmentalization",
    },
    {
      title: "Bellandur lake rejuvenation cost reaches Rs 400 crore across BDA and BWSSB contracts",
      outlet: "Deccan Herald",
      publishedDate: "2024-03-18",
      url: "https://www.deccanherald.com/india/karnataka/bengaluru/bellandur-lake-rejuvenation-cost-reaches-rs-400-cr-2891942",
      claim: "Details financial breakdown across civil dredging (₹150 Cr) and sewage plants (₹250 Cr)",
    },
    {
      title: "How Bengaluru's infamous flaming lake is making a slow, hard-fought comeback",
      outlet: "Moneycontrol",
      publishedDate: "2024-05-10",
      url: "https://www.moneycontrol.com/news/business/economy/bellandur-lake-revival-challenges-silt-disposal-12710941.html",
      claim: "Investigates silt disposal logistics, farmer agreements, and environmental monitoring",
    },
    {
      title: "NGT warns Karnataka authorities against missing revised Bellandur restoration deadlines",
      outlet: "Times of India",
      publishedDate: "2024-04-22",
      url: "https://timesofindia.indiatimes.com/city/bengaluru/ngt-bellandur-lake-warning/articleshow/109489102.cms",
      claim: "Judicial directives, penalty warnings, and inter-departmental milestone tracking",
    },
  ],

  officialDocLinks: [
    { label: "NGT Principal Bench Case Records: O.A. No. 125/2017 (Bellandur Lake)", url: "https://greentribunal.gov.in", type: "CAG_REPORT" },
    { label: "The Hindu: Bellandur lake desilting status", url: "https://www.thehindu.com/news/cities/bangalore/bellandur-lake-restoration-desilting-reaches-75-percent/article68194812.ece", type: "NEWS_REPORT" },
  ],
};
