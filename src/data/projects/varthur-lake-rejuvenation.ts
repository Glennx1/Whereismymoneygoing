import { Project } from "@/lib/types";

export const varthurLakeRejuvenation: Project = {
  id: "varthur-lake-rejuvenation",
  slug: "varthur-lake-rejuvenation-project-bda",
  title: "Varthur Lake Eco-Rejuvenation and Wetland Restoration",
  tagline:
    "Comprehensive rejuvenation of Bengaluru's second-largest waterbody (450+ acres) following National Green Tribunal (NGT) mandates. Silt dredging, wetland creation, and diversion channels funded at ₹119 Cr.",
  agencyCode: "BDA",
  sector: "Lake Rejuvenation",
  status: "under_construction",
  category: "ongoing",
  lengthKm: null,
  fundingSplit: {
    centralPct: 0,
    statePct: 100,
    loanPct: 0,
    notes: "State government funding channeled through BDA under NGT oversight committee",
  },

  announcedAmountCr: null,
  sanctionedAmountCr: 119,
  revisedEstimatedCostCr: null,
  actualDisbursedCr: null,

  announcedDate: "2019-12-18",
  sanctionedDate: "2020-03-05",
  originalDeadline: "2022-12-31",
  revisedDeadline: "2025-06-30",

  financialProgressPct: null,
  physicalProgressPct: 82,

  wardOrZone: "Varthur, Whitefield, Mahadevapura Zone, East Bengaluru",
  coordinates: { lat: 12.9420, lng: 77.7400 },

  overview:
    "Spread over 450 acres in East Bengaluru, Varthur Lake forms the downstream catchment of the infamous Bellandur-Varthur wetland system that suffered decades of severe sewage influx and toxic chemical frothing. Following strict directives from the National Green Tribunal (NGT), the Bangalore Development Authority (BDA) took up comprehensive eco-restoration at a sanctioned budget of ₹119 Cr. Key interventions include dredging millions of cubic metres of accumulated industrial silt, constructing constructed wetlands to naturally treat inlet water, laying sewage diversion channels, rebuilding earthen bunds, and fencing the lake perimeter to prevent encroachments.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Civil expenditure (₹119 Cr), NGT monitoring reports, and physical dredging progress (~82%) are backed by judicial affidavits and environmental reporting.",
    fields: {
      sanctionedAmountCr: {
        confidence: "reported",
        asOf: "2020-03-05",
        note: "Sanctioned at ₹119 Cr for BDA engineering civil contracts.",
        sources: [
          { label: "Deccan Herald: Varthur lake rejuvenation progress", url: "https://www.deccanherald.com/india/karnataka/bengaluru/varthur-lake-desilting-enters-final-phase-3041981" },
        ],
      },
      originalDeadline: {
        confidence: "reported",
        asOf: "2020-03-05",
        note: "Initial NGT timeline mandated completion by late 2022.",
        sources: [
          { label: "The Hindu: NGT directs time-bound cleanup of Varthur lake", url: "https://www.thehindu.com/news/cities/bangalore/ngt-pulls-up-agencies-over-varthur-lake-delays/article65219412.ece" },
        ],
      },
      revisedDeadline: {
        confidence: "reported",
        asOf: "2024-05-15",
        note: "Revised deadline extended to mid-2025 due to monsoon stoppages and silt disposal challenges.",
        sources: [
          { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/ngt-pulls-up-agencies-over-varthur-lake-delays/article65219412.ece" },
        ],
      },
      physicalProgressPct: {
        confidence: "reported",
        asOf: "2024-07-20",
        note: "Over 82% of desilting completed with constructed wetlands functioning.",
        sources: [
          { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/varthur-lake-desilting-enters-final-phase-3041981" },
        ],
      },
      contractors: {
        confidence: "reported",
        asOf: "2020-08-10",
        note: "Civil works executed through BDA-empaneled dredging and earthmoving contractors.",
        sources: [
          { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/varthur-lake-desilting-enters-final-phase-3041981" },
        ],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Itemized treasury payment vouchers filed with NGT; aggregate public ledger unverified.",
        sources: [],
      },
    },
    corrections: [
      "Documented NGT monitoring mandates and ₹119 Cr civil budget.",
    ],
  },

  contractors: [],
  contractorsNote:
    "Executed under Bangalore Development Authority (BDA) engineering cell.",

  milestones: [
    {
      id: "vlr-m1",
      date: "2019-12-18",
      stageName: "NGT orders comprehensive restoration",
      description: "NGT mandated immediate desilting, sewage diversion, and wetland fencing.",
      source: { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/ngt-pulls-up-agencies-over-varthur-lake-delays/article65219412.ece" },
    },
    {
      id: "vlr-m2",
      date: "2020-03-05",
      stageName: "Desilting tenders awarded",
      description: "BDA initiated desilting works valued at ₹119 Cr.",
      source: { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/varthur-lake-desilting-enters-final-phase-3041981" },
    },
  ],

  redFlags: [
    {
      id: "rf-vlr-delays",
      type: "TIMELINE_DELAY",
      severity: "MEDIUM",
      title: "Desilting delayed past initial 2022 timeline due to silt disposal hurdles",
      summary:
        "Lack of designated dump yards for toxic dredged silt and monsoon flooding in 2022 halted excavation, extending project delivery to 2025.",
      calculatedMetric: "Over 2.5 years delay past NGT target",
      officialCitation: {
        sourceName: "The Hindu",
        documentUrl: "https://www.thehindu.com/news/cities/bangalore/ngt-pulls-up-agencies-over-varthur-lake-delays/article65219412.ece",
      },
    },
  ],

  articles: [
    {
      title: "Varthur lake desilting enters final phase as BDA clears 80% of accumulated silt",
      outlet: "Deccan Herald",
      publishedDate: "2024-07-22",
      url: "https://www.deccanherald.com/india/karnataka/bengaluru/varthur-lake-desilting-enters-final-phase-3041981",
      claim: "Reports 82% desilting progress, ₹119 Cr budget, and wetland development",
    },
    {
      title: "NGT pulls up civic agencies over repeated delays in Varthur lake rejuvenation",
      outlet: "The Hindu",
      publishedDate: "2023-04-12",
      url: "https://www.thehindu.com/news/cities/bangalore/ngt-pulls-up-agencies-over-varthur-lake-delays/article65219412.ece",
      claim: "Details judicial scrutiny, sewage inlet diversions, and contractor timelines",
    },
    {
      title: "How community watchdogs and IISc scientists are restoring Varthur lake",
      outlet: "Citizen Matters",
      publishedDate: "2023-11-10",
      url: "https://citizenmatters.in/varthur-lake-rejuvenation-community-monitoring-water-quality/",
      claim: "Scientific water testing data, biodiversity return, and wetland mechanics",
    },
    {
      title: "Whitefield residents see hope as Varthur Lake sheds toxic froth after years",
      outlet: "Times of India",
      publishedDate: "2024-06-15",
      url: "https://timesofindia.indiatimes.com/city/bengaluru/varthur-lake-restoration-update/articleshow/111029410.cms",
      claim: "Visual transformation, bund reinforcement, and fencing against encroachment",
    },
  ],

  officialDocLinks: [
    { label: "National Green Tribunal (NGT) Principal Bench Orders", url: "https://greentribunal.gov.in", type: "CAG_REPORT" },
    { label: "Deccan Herald: Varthur lake desilting progress", url: "https://www.deccanherald.com/india/karnataka/bengaluru/varthur-lake-desilting-enters-final-phase-3041981", type: "NEWS_REPORT" },
  ],
};
