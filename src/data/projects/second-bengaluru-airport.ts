import { Project } from "@/lib/types";

export const secondBengaluruAirport: Project = {
  id: "second-bengaluru-airport",
  slug: "second-bengaluru-commercial-airport-feasibility",
  title: "Second Bengaluru Commercial Airport (Site Selection & Feasibility)",
  tagline:
    "Feasibility study tendered by KSIIDC to identify the location for Bengaluru's second international airport. Unresolved 150-km exclusivity clause with BIAL until May 2033.",
  agencyCode: "BDA",
  sector: "Aviation",
  status: "announced",
  category: "planned",
  lengthKm: null,

  announcedAmountCr: null,
  sanctionedAmountCr: null,
  revisedEstimatedCostCr: null,
  actualDisbursedCr: null,

  announcedDate: "2024-06-20",
  sanctionedDate: null,
  originalDeadline: null,
  revisedDeadline: null,

  financialProgressPct: null,
  physicalProgressPct: null,

  wardOrZone: "Candidate sites: Bidadi / Ramanagara, Harohalli, Kanakapura, Tumakuru Road",
  coordinates: { lat: 12.6800, lng: 77.4000 },

  overview:
    "With Kempegowda International Airport (KIA) at Devanahalli projected to reach its peak capacity of 100 million passengers annually by the mid-2030s, the Karnataka government initiated formal steps to build a second commercial airport for the Bengaluru metropolitan region. The Karnataka State Industrial and Infrastructure Development Corporation (KSIIDC) invited tenders for a techno-economic feasibility study. Candidate locations under active assessment include Bidadi/Ramanagara, Harohalli, Kanakapura Road, and Tumakuru. A major legal constraint is the 150-km exclusivity clause in BIAL's concession agreement, which bars another commercial airport within 150 km of Devanahalli until May 2033. No cost estimate has been finalized yet.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Tender for feasibility study, site debates, and the 2033 BIAL exclusivity clause are verified across national news reports. No capital outlay or project cost has been sanctioned yet; cost fields remain null as per data rules.",
    fields: {
      sanctionedAmountCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "No capital project budget sanctioned yet; pre-feasibility study phase.",
        sources: [],
      },
      status: {
        confidence: "reported",
        asOf: "2024-07-01",
        note: "Announced by Karnataka infrastructure minister; KSIIDC feasibility study tendered.",
        sources: [
          { label: "The Hindu: KSIIDC tenders feasibility study for second airport", url: "https://www.thehindu.com/news/cities/bangalore/karnataka-to-invite-tenders-for-feasibility-study-for-second-airport-in-bengaluru/article68324102.ece" },
          { label: "Deccan Herald: Second Bengaluru airport site selection", url: "https://www.deccanherald.com/india/karnataka/bengaluru/race-heats-up-for-second-bengaluru-airport-site-3120194" },
        ],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Zero construction expenditure incurred.",
        sources: [],
      },
    },
    corrections: [
      "Retained cost as null: no government or DPR budget exists at this exploratory stage.",
    ],
  },

  contractors: [],
  contractorsNote:
    "Feasibility consultant selection underway by KSIIDC.",

  milestones: [
    {
      id: "sba-m1",
      date: "2024-06-20",
      stageName: "Feasibility study tendered",
      description: "KSIIDC invited global bids to evaluate passenger demand and site suitability for a second airport.",
      source: { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/karnataka-to-invite-tenders-for-feasibility-study-for-second-airport-in-bengaluru/article68324102.ece" },
    },
  ],

  redFlags: [
    {
      id: "rf-sba-exclusivity",
      type: "TIMELINE_DELAY",
      severity: "MEDIUM",
      title: "150-km exclusivity clause with BIAL bars commercial operations until May 2033",
      summary:
        "The concession agreement signed between the Ministry of Civil Aviation and BIAL stipulates that no new or existing airport can be operated commercially within an aerial distance of 150 km of KIA until 25 years after its opening (May 2033).",
      calculatedMetric: "Exclusivity active until May 2033",
      officialCitation: {
        sourceName: "Deccan Herald",
        documentUrl: "https://www.deccanherald.com/india/karnataka/bengaluru/race-heats-up-for-second-bengaluru-airport-site-3120194",
      },
    },
  ],

  articles: [
    {
      title: "Karnataka to invite tenders for feasibility study for second airport in Bengaluru",
      outlet: "The Hindu",
      publishedDate: "2024-06-21",
      url: "https://www.thehindu.com/news/cities/bangalore/karnataka-to-invite-tenders-for-feasibility-study-for-second-airport-in-bengaluru/article68324102.ece",
      claim: "Details KSIIDC study tender, site criteria, and long-term passenger growth",
    },
    {
      title: "Race heats up for second Bengaluru airport: Tumakuru, Kanakapura, Bidadi in contention",
      outlet: "Deccan Herald",
      publishedDate: "2024-07-02",
      url: "https://www.deccanherald.com/india/karnataka/bengaluru/race-heats-up-for-second-bengaluru-airport-site-3120194",
      claim: "Reports candidate locations, political lobbies, and the 2033 BIAL concession barrier",
    },
    {
      title: "Why Bengaluru needs a second airport by 2033: Explaining passenger traffic math",
      outlet: "Moneycontrol",
      publishedDate: "2024-07-05",
      url: "https://www.moneycontrol.com/news/business/economy/bengaluru-second-airport-demand-traffic-projections-12760941.html",
      claim: "Analyzes KIA capacity limits (100 million pax) and metropolitan air traffic trends",
    },
    {
      title: "Second Bengaluru airport: Government weighs land acquisition and connectivity challenges",
      outlet: "Times of India",
      publishedDate: "2024-07-10",
      url: "https://timesofindia.indiatimes.com/city/bengaluru/second-airport-bengaluru-land-options/articleshow/111629410.cms",
      claim: "Reviews 4,000-5,000 acre land requirements and expressway/metro linkage needs",
    },
  ],

  officialDocLinks: [
    { label: "KSIIDC Tenders Portal", url: "https://ksiidc.karnataka.gov.in", type: "TENDER_NOTICE" },
    { label: "The Hindu: Second airport feasibility study", url: "https://www.thehindu.com/news/cities/bangalore/karnataka-to-invite-tenders-for-feasibility-study-for-second-airport-in-bengaluru/article68324102.ece", type: "NEWS_REPORT" },
  ],
};
