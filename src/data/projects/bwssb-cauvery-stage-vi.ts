import { Project } from "@/lib/types";

export const bwssbCauveryStageVi: Project = {
  id: "bwssb-cauvery-stage-vi",
  slug: "bwssb-cauvery-water-supply-stage-vi",
  title: "Cauvery Water Supply Scheme Stage VI (Proposed 500 MLD Expansion)",
  tagline:
    "Proposed drinking water supply scheme to bring an additional 500 MLD of Cauvery water to Bengaluru's burgeoning peripheral growth zones. DPR stage with estimated cost of ₹5,500 Cr.",
  agencyCode: "BWSSB",
  sector: "Water Supply & Sewage",
  status: "announced",
  category: "planned",
  lengthKm: null,
  fundingSplit: {
    centralPct: 0,
    statePct: 20,
    loanPct: 80,
    loanSource: "Proposed multilateral funding (JICA / World Bank)",
    notes: "Funding structure modeled on successful Cauvery Stage V framework",
  },

  announcedAmountCr: 5500,
  sanctionedAmountCr: null,
  revisedEstimatedCostCr: null,
  actualDisbursedCr: null,

  announcedDate: "2024-03-20",
  sanctionedDate: null,
  originalDeadline: null,
  revisedDeadline: "2030-12-31",

  financialProgressPct: null,
  physicalProgressPct: null,

  wardOrZone: "Outer Bengaluru: Mahadevapura, Bommanahalli, Yelahanka, Dasarahalli, and surrounding peri-urban layouts",
  coordinates: { lat: 12.9800, lng: 77.5800 },

  overview:
    "Following the commissioning of Cauvery Stage V (775 MLD) in late 2024, the Bangalore Water Supply and Sewerage Board (BWSSB) announced the conceptualization of Cauvery Stage VI to address water deficits arising from rapid urban expansion. The proposed project aims to pump an additional 500 million litres per day (MLD) of water from the Cauvery basin, involving expanded treatment infrastructure at TK Halli and dedicated trunk mains into outer zones of Mahadevapura, Yelahanka, and Bommanahalli. BWSSB has initiated the Detailed Project Report (DPR) with an estimated cost of ₹5,500 Cr, seeking external multilateral soft loans.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "DPR preparation and the ₹5,500 Cr estimated budget are confirmed by BWSSB leadership announcements in state press. Formal administrative cabinet sanction is awaited.",
    fields: {
      announcedAmountCr: {
        confidence: "reported",
        asOf: "2024-03-20",
        note: "Estimated at ₹5,500 Cr by BWSSB chairman in official press briefings.",
        sources: [
          { label: "Deccan Herald: BWSSB plans Cauvery Stage 6", url: "https://www.deccanherald.com/india/karnataka/bengaluru/bwssb-plans-cauvery-stage-6-to-quench-citys-thirst-2945102" },
        ],
      },
      revisedDeadline: {
        confidence: "reported",
        asOf: "2024-03-20",
        note: "Projected for delivery by 2030 subject to statutory water allocation and loan approvals.",
        sources: [
          { label: "The Hindu: BWSSB initiates DPR for Cauvery Stage VI", url: "https://www.thehindu.com/news/cities/bangalore/bwssb-prepares-ground-for-cauvery-stage-6/article67981240.ece" },
        ],
      },
      status: {
        confidence: "reported",
        asOf: "2024-08-01",
        note: "DPR preparation underway.",
        sources: [
          { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/bwssb-plans-cauvery-stage-6-to-quench-citys-thirst-2945102" },
        ],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "DPR stage; zero construction spending.",
        sources: [],
      },
      sanctionedAmountCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Cabinet sanction pending DPR completion.",
        sources: [],
      },
    },
    corrections: [
      "Added project as planned with reported DPR cost of ₹5,500 Cr.",
    ],
  },

  contractors: [],
  contractorsNote:
    "DPR consultant being finalized by BWSSB engineering division.",

  milestones: [
    {
      id: "cs6-m1",
      date: "2024-03-20",
      stageName: "Proposal announced by BWSSB",
      description: "BWSSB announced plans to formulate DPR for 500 MLD Cauvery Stage VI project.",
      source: { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/bwssb-plans-cauvery-stage-6-to-quench-citys-thirst-2945102" },
    },
  ],

  redFlags: [],

  articles: [
    {
      title: "BWSSB plans Cauvery Stage 6 to quench Bengaluru's expanding water thirst",
      outlet: "Deccan Herald",
      publishedDate: "2024-03-21",
      url: "https://www.deccanherald.com/india/karnataka/bengaluru/bwssb-plans-cauvery-stage-6-to-quench-citys-thirst-2945102",
      claim: "Reports 500 MLD planned capacity, ₹5,500 Cr preliminary estimate, and outer village focus",
    },
    {
      title: "BWSSB prepares ground for Cauvery Stage 6 with detailed project report",
      outlet: "The Hindu",
      publishedDate: "2024-03-25",
      url: "https://www.thehindu.com/news/cities/bangalore/bwssb-prepares-ground-for-cauvery-stage-6/article67981240.ece",
      claim: "Details water quota negotiations and proposed pumping transmission corridors",
    },
    {
      title: "How Cauvery Stage 6 aims to drought-proof Bengaluru's IT hubs by 2030",
      outlet: "Moneycontrol",
      publishedDate: "2024-04-05",
      url: "https://www.moneycontrol.com/news/business/economy/bengaluru-water-crisis-cauvery-stage-6-plans-and-funding-12581941.html",
      claim: "Analysis of ground water depletion and long-term water supply infrastructure",
    },
    {
      title: "BWSSB explores JICA and World Bank loan windows for Cauvery Stage VI",
      outlet: "Bangalore Mirror",
      publishedDate: "2024-04-20",
      url: "https://bangaloremirror.indiatimes.com/bangalore/civic/cauvery-stage-6-funding-options/articleshow/109451941.cms",
      claim: "Reports bilateral funding discussions following successful Stage V JICA partnership",
    },
  ],

  officialDocLinks: [
    { label: "BWSSB Official Portal", url: "https://bwssb.karnataka.gov.in", type: "NEWS_REPORT" },
    { label: "Deccan Herald: BWSSB plans Cauvery Stage 6", url: "https://www.deccanherald.com/india/karnataka/bengaluru/bwssb-plans-cauvery-stage-6-to-quench-citys-thirst-2945102", type: "NEWS_REPORT" },
  ],
};
