import { Project } from "@/lib/types";

export const nammaMetroPhase3aRedLine: Project = {
  id: "namma-metro-phase-3a-red-line",
  slug: "namma-metro-phase-3a-red-line-sarjapur-hebbal",
  title: "Namma Metro Phase 3A (Red Line: Sarjapur to Hebbal)",
  tagline:
    "37 km north-south high-density transit corridor connecting Sarjapur to Hebbal via Agara, Koramangala, and central Bengaluru. Revised DPR prepared for ₹25,999 Cr.",
  agencyCode: "BMRCL",
  sector: "Metro Rail",
  status: "announced",
  category: "planned",
  lengthKm: 37.0,
  stationsCount: 28,
  fundingSplit: {
    centralPct: 20,
    statePct: 20,
    loanPct: 60,
    loanSource: "Multilateral development banks (to be finalized)",
    notes: "Proposed 50:50 equity between Centre and State with 60% senior debt",
  },

  announcedAmountCr: 28405,
  sanctionedAmountCr: null,
  revisedEstimatedCostCr: 25999,
  actualDisbursedCr: null,

  announcedDate: "2023-03-01",
  sanctionedDate: null,
  originalDeadline: null,
  revisedDeadline: "2033-04-30",

  financialProgressPct: null,
  physicalProgressPct: null,

  wardOrZone: "Sarjapur, Carmelaram, Agara, Koramangala, Dairy Circle, MG Road, Ganganagar, Hebbal",
  coordinates: { lat: 12.9300, lng: 77.6500 },
  routeCoordinates: [
    [12.8600, 77.7800],
    [12.9050, 77.6800],
    [12.9250, 77.6400],
    [12.9350, 77.6200],
    [12.9750, 77.6050],
    [13.0100, 77.5950],
    [13.0350, 77.5900],
  ],

  overview:
    "Phase 3A (Red Line) is planned as a critical 37-km north-south transit spine connecting the rapidly expanding IT corridor of Sarjapur in Southeast Bengaluru to Hebbal in the north. The line includes an underground section beneath central commercial areas (Koramangala, Dairy Circle, and Cantonment) and elevated sections at both ends. BMRCL revised the Detailed Project Report (DPR) cost from an initial ₹28,405 Cr down to ₹25,999 Cr following alignment optimizations. State cabinet review is underway, with target completion around April 2033.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Cost estimates (initial ₹28,405 Cr and revised ₹25,999 Cr) and 2033 timeline are reported in major dailies. Formal central cabinet sanction is awaited.",
    fields: {
      announcedAmountCr: {
        confidence: "reported",
        asOf: "2023-03-01",
        note: "Initial DPR preliminary estimate pegged the line at ₹28,405 Cr.",
        sources: [
          { label: "Deccan Herald: Sarjapur-Hebbal metro DPR cost", url: "https://www.deccanherald.com/india/karnataka/bengaluru/revised-dpr-for-sarjapur-hebbal-metro-line-ready-cost-cut-by-rs-2400-cr-3129182" },
        ],
      },
      revisedEstimatedCostCr: {
        confidence: "reported",
        asOf: "2024-07-20",
        note: "Revised DPR submitted to Karnataka state government cut the estimated cost to ₹25,999 Cr by optimizing underground station lengths.",
        sources: [
          { label: "Deccan Herald: Revised DPR cuts cost by ₹2,400 Cr", url: "https://www.deccanherald.com/india/karnataka/bengaluru/revised-dpr-for-sarjapur-hebbal-metro-line-ready-cost-cut-by-rs-2400-cr-3129182" },
          { label: "The Hindu: Sarjapur-Hebbal metro DPR updates", url: "https://www.thehindu.com/news/cities/bangalore/sarjapur-hebbal-metro-dpr-sent-to-cabinet/article68412984.ece" },
        ],
      },
      revisedDeadline: {
        confidence: "reported",
        asOf: "2024-07-20",
        note: "DPR documents project commercial operations by April 2033.",
        sources: [
          { label: "Deccan Herald: 2033 target for Red Line", url: "https://www.deccanherald.com/india/karnataka/bengaluru/revised-dpr-for-sarjapur-hebbal-metro-line-ready-cost-cut-by-rs-2400-cr-3129182" },
        ],
      },
      status: {
        confidence: "reported",
        asOf: "2024-08-01",
        note: "DPR completed and submitted for government approvals.",
        sources: [
          { label: "The Metro Rail Guy: Bangalore Metro Phase 3A info", url: "https://themetrorailguy.com/bangalore-metro-phase-3-information-map/" },
        ],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "No construction expenditure incurred.",
        sources: [],
      },
      sanctionedAmountCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Central Cabinet sanction pending.",
        sources: [],
      },
    },
    corrections: [
      "Recorded both original (₹28,405 Cr) and revised DPR (₹25,999 Cr) cost figures in audit logs.",
    ],
  },

  contractors: [],
  contractorsNote:
    "DPR consultant: RITES Ltd. Civil tenders to be called after Union Cabinet approval.",

  milestones: [
    {
      id: "p3a-m1",
      date: "2024-07-20",
      stageName: "Revised DPR submitted to State Government",
      description: "BMRCL submitted revised DPR of ₹25,999 Cr for 37 km corridor with 28 stations.",
      source: { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/revised-dpr-for-sarjapur-hebbal-metro-line-ready-cost-cut-by-rs-2400-cr-3129182" },
    },
  ],

  redFlags: [],

  articles: [
    {
      title: "Revised DPR for Sarjapur-Hebbal metro line ready; cost cut by Rs 2,400 crore to Rs 25,999 crore",
      outlet: "Deccan Herald",
      publishedDate: "2024-07-22",
      url: "https://www.deccanherald.com/india/karnataka/bengaluru/revised-dpr-for-sarjapur-hebbal-metro-line-ready-cost-cut-by-rs-2400-cr-3129182",
      claim: "Details DPR revisions from ₹28,405 Cr to ₹25,999 Cr and April 2033 target",
    },
    {
      title: "Sarjapur-Hebbal metro DPR sent to Karnataka cabinet for clearance",
      outlet: "The Hindu",
      publishedDate: "2024-08-05",
      url: "https://www.thehindu.com/news/cities/bangalore/sarjapur-hebbal-metro-dpr-sent-to-cabinet/article68412984.ece",
      claim: "Reports corridor length (37 km), 28 station names, and underground alignment",
    },
    {
      title: "Why Sarjapur-Hebbal Red Line is crucial for Bengaluru's tech workforce",
      outlet: "Moneycontrol",
      publishedDate: "2024-08-10",
      url: "https://www.moneycontrol.com/news/business/economy/bengaluru-red-line-sarjapur-hebbal-metro-dpr-details-12791821.html",
      claim: "Analyzes traffic reduction across Outer Ring Road and Sarjapur Road",
    },
    {
      title: "Bangalore Metro Phase 3A Information and Alignment",
      outlet: "The Metro Rail Guy",
      publishedDate: "2024-07-25",
      url: "https://themetrorailguy.com/bangalore-metro-phase-3-information-map/",
      claim: "Route layout, interchange provisions at Agara and Hebbal",
    },
  ],

  officialDocLinks: [
    { label: "BMRCL Future Lines Overview", url: "https://english.bmrc.co.in", type: "BMRCL_REPORT" },
    { label: "Deccan Herald: Revised DPR for Sarjapur-Hebbal", url: "https://www.deccanherald.com/india/karnataka/bengaluru/revised-dpr-for-sarjapur-hebbal-metro-line-ready-cost-cut-by-rs-2400-cr-3129182", type: "NEWS_REPORT" },
  ],
};
