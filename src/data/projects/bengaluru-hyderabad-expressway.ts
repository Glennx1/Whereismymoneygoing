import { Project } from "@/lib/types";

export const bengaluruHyderabadExpressway: Project = {
  id: "bengaluru-hyderabad-expressway",
  slug: "bengaluru-hyderabad-greenfield-expressway-nhai",
  title: "Bengaluru-Hyderabad High-Speed Greenfield Expressway (NHAI)",
  tagline:
    "512 km planned access-controlled expressway to reduce travel time between Bengaluru and Hyderabad to under 6 hours. Detailed Project Report (DPR) preparation underway.",
  agencyCode: "NHAI",
  sector: "Roads & Flyovers",
  status: "announced",
  category: "planned",
  lengthKm: 512.0,
  fundingSplit: {
    centralPct: 100,
    statePct: 0,
    loanPct: 0,
    notes: "Central expressway corridor under Bharatmala Pariyojana Phase 2",
  },

  announcedAmountCr: null,
  sanctionedAmountCr: null,
  revisedEstimatedCostCr: null,
  actualDisbursedCr: null,

  announcedDate: "2022-08-25",
  sanctionedDate: null,
  originalDeadline: null,
  revisedDeadline: null,

  financialProgressPct: null,
  physicalProgressPct: null,

  wardOrZone: "Bagepalli, Doddaballapur, STRR Junction, Northern Corridor",
  coordinates: { lat: 13.5000, lng: 77.7500 },
  routeCoordinates: [
    [13.1000, 77.6000],
    [13.5000, 77.7500],
    [14.6800, 77.6000],
    [15.8200, 78.0300],
    [17.3800, 78.4800],
  ],

  overview:
    "Proposed by the National Highways Authority of India (NHAI) under Bharatmala Pariyojana Phase 2, the 512-km Bengaluru-Hyderabad Greenfield Expressway is designed as a 6-to-8 lane access-controlled corridor. Running parallel to existing NH-44 through Kurnool, Anantapur, and entering Karnataka near Bagepalli to terminate at the Satellite Town Ring Road (STRR) north of Bengaluru, the highway aims to cut vehicular travel time from 10 hours down to roughly 5.5 hours. Detailed alignment studies, traffic simulations, and environmental impact assessments are ongoing at the DPR stage; no construction outlay has been officially sanctioned yet.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Alignment length (512 km) and DPR status are documented in parliamentary replies and transport ministry notifications. Construction cost remains null as civil tenders have not been issued.",
    fields: {
      sanctionedAmountCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Preliminary DPR estimates vary widely in press reports; no official sanction order passed yet.",
        sources: [],
      },
      status: {
        confidence: "reported",
        asOf: "2024-03-15",
        note: "DPR preparation and alignment finalization underway by NHAI consultants.",
        sources: [
          { label: "The Hindu: Bengaluru-Hyderabad expressway DPR status", url: "https://www.thehindu.com/news/national/nhai-prepares-dpr-for-bengaluru-hyderabad-expressway/article67954120.ece" },
          { label: "Deccan Chronicle: Greenfield corridor route map", url: "https://www.deccanchronicle.com/nation/in-other-news/nhai-speeds-up-bengaluru-hyderabad-greenfield-expressway-dpr-884912" },
        ],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Pre-construction planning stage; zero construction disbursement.",
        sources: [],
      },
    },
    corrections: [
      "Maintained cost as null as per Data Rules for early-stage announced corridors.",
    ],
  },

  contractors: [],
  contractorsNote:
    "DPR consultant appointed by NHAI; civil tenders to be published upon central approval.",

  milestones: [
    {
      id: "bhe-m1",
      date: "2022-08-25",
      stageName: "Corridor conceptualized under Bharatmala Phase 2",
      description: "MoRTH approved preparation of DPR for greenfield 512 km high-speed corridor.",
      source: { label: "The Hindu", url: "https://www.thehindu.com/news/national/nhai-prepares-dpr-for-bengaluru-hyderabad-expressway/article67954120.ece" },
    },
  ],

  redFlags: [],

  articles: [
    {
      title: "NHAI prepares DPR for 512-km Bengaluru-Hyderabad greenfield expressway",
      outlet: "The Hindu",
      publishedDate: "2024-03-16",
      url: "https://www.thehindu.com/news/national/nhai-prepares-dpr-for-bengaluru-hyderabad-expressway/article67954120.ece",
      claim: "Reports 512 km alignment, 120 km/h design speed, and link to Bengaluru STRR",
    },
    {
      title: "NHAI speeds up Bengaluru-Hyderabad greenfield expressway DPR",
      outlet: "Deccan Chronicle",
      publishedDate: "2024-04-10",
      url: "https://www.deccanchronicle.com/nation/in-other-news/nhai-speeds-up-bengaluru-hyderabad-greenfield-expressway-dpr-884912",
      claim: "Details land survey milestones and alignment bypassing congested towns",
    },
    {
      title: "How Bengaluru-Hyderabad greenfield corridor will cut travel time to 5.5 hours",
      outlet: "Financial Express",
      publishedDate: "2024-05-02",
      url: "https://www.financialexpress.com/business/infrastructure-bengaluru-hyderabad-expressway-route-map-travel-time-reduction-3149812/",
      claim: "Analysis of economic freight benefits between Telangana, AP, and Karnataka",
    },
    {
      title: "Southern expressways update: Status of Bengaluru-Hyderabad corridor",
      outlet: "Construction World",
      publishedDate: "2024-06-18",
      url: "https://www.constructionworld.in/transport-infrastructure/highways-and-bridges-infrastructure/bengaluru-hyderabad-expressway-dpr-update/58912",
      claim: "Technical road geometric standards, interchanges, and environmental clearances",
    },
  ],

  officialDocLinks: [
    { label: "NHAI Bharatmala Corridor Portal", url: "https://nhai.gov.in", type: "NEWS_REPORT" },
    { label: "The Hindu: Bengaluru-Hyderabad expressway DPR status", url: "https://www.thehindu.com/news/national/nhai-prepares-dpr-for-bengaluru-hyderabad-expressway/article67954120.ece", type: "NEWS_REPORT" },
  ],
};
