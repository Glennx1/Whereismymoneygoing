import { Project } from "@/lib/types";

export const bengaluruPuneExpressway: Project = {
  id: "bengaluru-pune-expressway",
  slug: "bengaluru-pune-greenfield-expressway-nhai",
  title: "Bengaluru-Pune Access-Controlled Greenfield Expressway (NHAI)",
  tagline:
    "700 km high-speed greenfield expressway planned by NHAI to connect Bengaluru and Pune in ~7 hours. Alignment planning and Detailed Project Report (DPR) stage.",
  agencyCode: "NHAI",
  sector: "Roads & Flyovers",
  status: "announced",
  category: "planned",
  lengthKm: 700.0,
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

  announcedDate: "2022-09-01",
  sanctionedDate: null,
  originalDeadline: null,
  revisedDeadline: null,

  financialProgressPct: null,
  physicalProgressPct: null,

  wardOrZone: "Dobbaspet, Tumakuru, Davanagere, Hubballi-Dharwad, Belagavi, Western Corridor",
  coordinates: { lat: 14.5000, lng: 75.8000 },
  routeCoordinates: [
    [13.2350, 77.2400],
    [13.7000, 76.8000],
    [14.4500, 75.9000],
    [15.3600, 75.1200],
    [15.8500, 74.5000],
    [18.5200, 73.8500],
  ],

  overview:
    "Envisioned as a primary economic spine connecting Karnataka and Maharashtra, the 700-km Bengaluru-Pune Greenfield Expressway is planned by NHAI as an 8-lane access-controlled highway. It will run east of the existing congested NH-48 (Bengaluru-Tumakuru-Dharwad-Pune highway), terminating on the Bengaluru side at the Satellite Town Ring Road (STRR) near Dobbaspet. Designed for 120 km/h speeds, it is projected to reduce driving time between Bengaluru and Pune from 15 hours to 7–8 hours. The project is currently at the DPR alignment and environmental survey stage; no formal construction budget has been sanctioned yet.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Corridor length (700 km) and DPR preparation are verified through NHAI and parliamentary communications. Cost figures remain null as project approval is pending central cabinet clearance.",
    fields: {
      sanctionedAmountCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Preliminary figures of ₹50,000 Cr circulate in news, but no sanctioned government order exists yet.",
        sources: [],
      },
      status: {
        confidence: "reported",
        asOf: "2024-05-10",
        note: "DPR alignment preparation and land marking studies underway by NHAI.",
        sources: [
          { label: "The Hindu: Bengaluru-Pune expressway DPR update", url: "https://www.thehindu.com/news/national/karnataka/nhai-finalises-alignment-for-bengaluru-pune-expressway/article68154120.ece" },
          { label: "Deccan Herald: Greenfield corridor between Pune and Bengaluru", url: "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-pune-greenfield-expressway-to-cut-travel-time-by-half-3012981" },
        ],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Planning phase; zero construction disbursement.",
        sources: [],
      },
    },
    corrections: [
      "Retained cost as null as per Data Rules for early-stage proposed megaprojects.",
    ],
  },

  contractors: [],
  contractorsNote:
    "DPR consultant appointed by NHAI; construction packages to be tendered following cabinet sanction.",

  milestones: [
    {
      id: "bpe-m1",
      date: "2022-09-01",
      stageName: "Corridor conceptualized",
      description: "MoRTH approved preparation of DPR for greenfield 700 km expressway between Pune and Bengaluru.",
      source: { label: "The Hindu", url: "https://www.thehindu.com/news/national/karnataka/nhai-finalises-alignment-for-bengaluru-pune-expressway/article68154120.ece" },
    },
  ],

  redFlags: [],

  articles: [
    {
      title: "NHAI finalises alignment for 700-km Bengaluru-Pune greenfield expressway",
      outlet: "The Hindu",
      publishedDate: "2024-05-11",
      url: "https://www.thehindu.com/news/national/karnataka/nhai-finalises-alignment-for-bengaluru-pune-expressway/article68154120.ece",
      claim: "Reports 700 km route, Dobbaspet STRR terminal interchange, and 12 districts traversed",
    },
    {
      title: "Bengaluru-Pune greenfield expressway to cut travel time by half: Alignment details",
      outlet: "Deccan Herald",
      publishedDate: "2024-05-15",
      url: "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-pune-greenfield-expressway-to-cut-travel-time-by-half-3012981",
      claim: "Analysis of freight logistics corridor and bypass geometry away from NH-48",
    },
    {
      title: "How the 8-lane Bengaluru-Pune Expressway transforms Western Karnataka connectivity",
      outlet: "Financial Express",
      publishedDate: "2024-06-02",
      url: "https://www.financialexpress.com/business/infrastructure-bengaluru-pune-expressway-route-map-cost-and-benefits-3158912/",
      claim: "Discusses multi-modal freight connectivity, speed design (120 km/h), and timeline",
    },
    {
      title: "Mega infrastructure in the pipeline: A look at the proposed Bengaluru-Pune expressway",
      outlet: "Moneycontrol",
      publishedDate: "2024-06-25",
      url: "https://www.moneycontrol.com/news/business/economy/bengaluru-pune-expressway-alignment-land-acquisition-challenges-12750941.html",
      claim: "Examines land acquisition requirements across Karnataka and Maharashtra borders",
    },
  ],

  officialDocLinks: [
    { label: "NHAI Official Expressway Portal", url: "https://nhai.gov.in", type: "NEWS_REPORT" },
    { label: "The Hindu: Bengaluru-Pune expressway alignment", url: "https://www.thehindu.com/news/national/karnataka/nhai-finalises-alignment-for-bengaluru-pune-expressway/article68154120.ece", type: "NEWS_REPORT" },
  ],
};
