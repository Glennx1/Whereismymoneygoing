import { Project } from "@/lib/types";

export const nammaMetroPinkLineUnderground: Project = {
  id: "namma-metro-pink-line-underground",
  slug: "namma-metro-pink-line-underground-tavarekere-nagawara",
  title: "Namma Metro Pink Line: Underground Section (Tavarekere to Nagawara)",
  tagline:
    "13.8 km underground metro line with 12 subterranean stations beneath central Bengaluru. All tunneling breakthroughs completed; station fit-outs and systems integration underway for late 2026 / 2027 opening.",
  agencyCode: "BMRCL",
  sector: "Metro Rail",
  status: "under_construction",
  category: "ongoing",
  lengthKm: 13.76,
  stationsCount: 12,
  stationNames: [
    "Dairy Circle",
    "Lakkasandra",
    "Langford Town",
    "National Military School",
    "MG Road",
    "Shivajinagar",
    "Bengaluru Cantonment",
    "Pottery Town",
    "Tannery Road",
    "Venkateshpura",
    "Kadugondanahalli",
    "Nagawara",
  ],
  fundingSplit: {
    centralPct: 20,
    statePct: 20,
    loanPct: 60,
    loanSource: "European Investment Bank (EIB) and Asian Infrastructure Investment Bank (AIIB)",
    notes: "Total Pink Line (Reach 6) estimated outlay approximately ₹11,130 Cr",
  },

  announcedAmountCr: null,
  sanctionedAmountCr: 5900,
  revisedEstimatedCostCr: null,
  actualDisbursedCr: null,

  announcedDate: "2014-02-21",
  sanctionedDate: "2019-03-01",
  originalDeadline: "2024-12-31",
  revisedDeadline: "2027-06-30",

  financialProgressPct: null,
  physicalProgressPct: 91,

  wardOrZone: "Dairy Circle, Shanthinagar, MG Road, Shivajinagar, Cantonment, Tannery Road, Nagawara",
  coordinates: { lat: 12.9850, lng: 77.6080 },
  routeCoordinates: [
    [12.9300, 77.6000],
    [12.9450, 77.5990],
    [12.9600, 77.6020],
    [12.9750, 77.6060],
    [12.9880, 77.6040],
    [13.0020, 77.6020],
    [13.0180, 77.6180],
    [13.0450, 77.6250],
  ],

  overview:
    "The 13.76-km underground section of Namma Metro's Pink Line is the largest subterranean infrastructure endeavour in Bengaluru's history. Running from the south portal near Tavarekere/Dairy Circle through central landmarks like MG Road and Shivajinagar to Nagawara in the north, the project involved 9 Tunnel Boring Machines (TBMs) navigating dense rock and loose soil layers. All 20.9 km of tunnel drives (twin tunnels) successfully completed breakthroughs by early 2025. Civil packages are being executed by Afcons, L&T, and ITD Cementation, with overall commercial launch targeted for 2027.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Tunnel breakthroughs (100% completed) and contractor allocations are well verified via official BMRCL newsletters. Current target is late 2026 to mid 2027 for commissioning with driverless rolling stock.",
    fields: {
      sanctionedAmountCr: {
        confidence: "reported",
        asOf: "2019-03-01",
        note: "Civil tunneling contracts across 4 packages totaled approx ₹5,900 Cr, within the overall ₹11,130 Cr Reach 6 project budget.",
        sources: [
          { label: "The Metro Rail Guy: Pink line underground packages", url: "https://themetrorailguy.com/bangalore-metro-phase-2-information-map/" },
        ],
      },
      revisedDeadline: {
        confidence: "reported",
        asOf: "2024-09-15",
        note: "BMRCL managing director and press statements target commissioning between December 2026 and mid 2027.",
        sources: [
          { label: "The Hindu: Pink Line underground progress update", url: "https://www.thehindu.com/news/cities/bangalore/pink-line-underground-tunnel-work-milestone/article68629141.ece" },
          { label: "Deccan Herald: BMRCL targets 2027 for full Pink Line", url: "https://www.deccanherald.com/india/karnataka/bengaluru/pink-line-underground-section-targets-2027-opening-3219482" },
        ],
      },
      physicalProgressPct: {
        confidence: "reported",
        asOf: "2024-10-01",
        note: "Tunneling 100% complete; overall underground civil, architectural, and track progress exceeds 91%.",
        sources: [
          { label: "Construction World: Bengaluru Pink Line tunneling completed", url: "https://www.constructionworld.in/transport-infrastructure/metro-rail-and-railways-infrastructure/bmrcl-completes-pink-line-underground-tunneling/61294" },
        ],
      },
      contractors: {
        confidence: "verified",
        asOf: "2019-07-15",
        note: "Four underground civil packages awarded: Afcons (PK-1), L&T (PK-2 & PK-3), and ITD Cementation (PK-4).",
        sources: [
          { label: "BMRCL Tender Orders: Phase 2 Reach 6 Underground", url: "https://english.bmrc.co.in" },
        ],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Package-wise treasury disbursements not disclosed separately from Phase 2 overall balance sheets.",
        sources: [],
      },
    },
    corrections: [
      "Documented 100% completion of tunnel boring machines (TBM) drives.",
      "Separated underground section from elevated section for clear accountability.",
    ],
  },

  contractors: [
    {
      name: "Afcons Infrastructure Ltd.",
      awardedAmountCr: 1526.33,
      contractAwardDate: "2019-07-15",
      status: "active",
      scope: "Package UG-1: Dairy Circle to Langford Town (3.65 km tunnel & 3 stations)",
    },
    {
      name: "Larsen & Toubro (L&T)",
      awardedAmountCr: 2984.00,
      contractAwardDate: "2019-03-01",
      status: "active",
      scope: "Packages UG-2 & UG-3: National Military School to Pottery Town (5 stations including MG Road interchange)",
    },
    {
      name: "ITD Cementation India Ltd.",
      awardedAmountCr: 1389.00,
      contractAwardDate: "2019-07-15",
      status: "active",
      scope: "Package UG-4: Tannery Road to Nagawara (4 stations and north portal)",
    },
  ],

  milestones: [
    {
      id: "plu-m1",
      date: "2019-07-15",
      stageName: "Underground civil packages awarded",
      description: "BMRCL awarded four tunneling packages totaling over ₹5,900 Cr.",
      source: { label: "The Metro Rail Guy", url: "https://themetrorailguy.com/bangalore-metro-phase-2-information-map/" },
    },
    {
      id: "plu-m2",
      date: "2020-08-05",
      stageName: "First TBM 'Urja' launched",
      description: "TBM Urja deployed by L&T to begin tunneling at Cantonment station.",
      source: { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/bmrcl-launches-first-tbm-for-pink-line-870012.html" },
    },
    {
      id: "plu-m3",
      date: "2024-09-30",
      stageName: "Final TBM breakthrough achieved",
      description: "TBM Tunga completed the final breakthrough at Nagawara, completing 100% of underground tunnel excavation.",
      source: { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/pink-line-underground-tunnel-work-milestone/article68629141.ece" },
    },
  ],

  redFlags: [
    {
      id: "rf-plu-geology",
      type: "TIMELINE_DELAY",
      severity: "HIGH",
      title: "Hard granite rock and mixed face geology delayed tunneling by 2+ years",
      summary:
        "TBMs encountered unexpected dense hard rock clusters and high water tables between Dairy Circle, Langford Town, and Shivajinagar, slowing excavation rates from planned 10m/day to under 3m/day.",
      calculatedMetric: "Over 2 years delay in tunneling milestones",
      officialCitation: {
        sourceName: "Deccan Herald",
        documentUrl: "https://www.deccanherald.com/india/karnataka/bengaluru/pink-line-underground-section-targets-2027-opening-3219482",
      },
    },
  ],

  articles: [
    {
      title: "Final TBM breakthrough achieved on Bengaluru Metro Pink Line underground section",
      outlet: "The Hindu",
      publishedDate: "2024-09-30",
      url: "https://www.thehindu.com/news/cities/bangalore/pink-line-underground-tunnel-work-milestone/article68629141.ece",
      claim: "Confirms completion of all 20.9 km tunneling drives across all 12 stations",
    },
    {
      title: "Pink line underground section targets 2027 opening as track works pick up pace",
      outlet: "Deccan Herald",
      publishedDate: "2024-10-12",
      url: "https://www.deccanherald.com/india/karnataka/bengaluru/pink-line-underground-section-targets-2027-opening-3219482",
      claim: "Reports 2027 commercial target, station fit-out progress, and architectural tenders",
    },
    {
      title: "BMRCL completes Pink Line underground tunneling works with 9 TBMs",
      outlet: "Construction World",
      publishedDate: "2024-10-02",
      url: "https://www.constructionworld.in/transport-infrastructure/metro-rail-and-railways-infrastructure/bmrcl-completes-pink-line-underground-tunneling/61294",
      claim: "Details 91% civil progress and handover to track and electrification teams",
    },
    {
      title: "Bangalore Metro Phase 2 Underground Reach 6 Information and Map",
      outlet: "The Metro Rail Guy",
      publishedDate: "2023-11-20",
      url: "https://themetrorailguy.com/bangalore-metro-phase-2-information-map/",
      claim: "Technical breakdown of all 4 underground packages, station depths, and TBM stats",
    },
  ],

  officialDocLinks: [
    { label: "BMRCL Official Project Updates", url: "https://english.bmrc.co.in", type: "BMRCL_REPORT" },
    { label: "The Hindu: Pink line tunneling breakthrough", url: "https://www.thehindu.com/news/cities/bangalore/pink-line-underground-tunnel-work-milestone/article68629141.ece", type: "NEWS_REPORT" },
  ],
};
