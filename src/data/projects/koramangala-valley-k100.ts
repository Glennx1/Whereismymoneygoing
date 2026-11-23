import { Project } from "@/lib/types";

export const koramangalaValleyK100: Project = {
  id: "koramangala-valley-citizens-waterway-k-100",
  slug: "koramangala-valley-citizens-waterway-k100",
  title: "Koramangala Valley Citizen's Waterway (K-100 Project)",
  tagline:
    "11.5 km ecological waterway and citizen promenade transforming an open sewage canal (Raja Kaluve) from KR Market to Bellandur Lake into a public green corridor. Completed at ₹175 Cr.",
  agencyCode: "BBMP",
  sector: "Stormwater & Drainage",
  status: "completed",
  category: "completed",
  lengthKm: 11.5,
  fundingSplit: {
    centralPct: 0,
    statePct: 100,
    loanPct: 0,
    notes: "Funded by Govt of Karnataka under Bengaluru Mission 2022 / Urban Rejuvenation",
  },

  announcedAmountCr: null,
  sanctionedAmountCr: 175,
  revisedEstimatedCostCr: null,
  actualDisbursedCr: null,

  announcedDate: "2020-03-05",
  sanctionedDate: "2020-11-20",
  originalDeadline: "2022-12-31",
  revisedDeadline: "2023-04-30",
  completionDate: "2023-04-30",

  financialProgressPct: null,
  physicalProgressPct: 100,

  wardOrZone: "KR Market, Kalasipalya, Shanthinagar, Wilson Garden, Ejipura, Koramangala",
  coordinates: { lat: 12.9550, lng: 77.6100 },
  routeCoordinates: [
    [12.9640, 77.5750],
    [12.9580, 77.5920],
    [12.9450, 77.6150],
    [12.9350, 77.6400],
    [12.9350, 77.6700],
  ],

  overview:
    "The K-100 Citizen's Waterway project was designed as a landmark model to reclaim Bengaluru's neglected stormwater canal network (Raja Kaluves). Conceptualized with urban designers at Jana Urban Space Foundation and executed by BBMP at a cost of ₹175 Cr, the project transformed an 11.5-km polluted open drain stretching from KR Market to Bellandur Lake. Interventions included laying subterranean interceptor sewer pipes along both canal banks to capture sewage before it enters the drain, desilting the stormwater bed, building pedestrian promenades, planting thousands of native riverine trees, and installing public recreation plazas. Inaugurated in 2023, it serves as a global benchmark for urban blue-green infrastructure.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Cost (₹175 Cr), 11.5 km length, and completed status are verified across municipal releases, architectural awards, and press reports.",
    fields: {
      sanctionedAmountCr: {
        confidence: "reported",
        asOf: "2020-11-20",
        note: "Sanctioned at ₹175 Cr under Chief Minister's Bengaluru Mission 2022 grant.",
        sources: [
          { label: "Deccan Herald: K-100 waterway transformation", url: "https://www.deccanherald.com/india/karnataka/bengaluru/k-100-waterway-bengalurus-smelly-canal-turns-into-scenic-promenade-1215891.html" },
          { label: "The Hindu: Bengaluru's K-100 project unveiled", url: "https://www.thehindu.com/news/cities/bangalore/bengalurus-k-100-waterway-ready-for-citizens/article66782910.ece" },
        ],
      },
      revisedDeadline: {
        confidence: "reported",
        asOf: "2023-04-30",
        note: "Completed and opened to public visitors in April 2023.",
        sources: [
          { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/bengalurus-k-100-waterway-ready-for-citizens/article66782910.ece" },
        ],
      },
      physicalProgressPct: {
        confidence: "reported",
        asOf: "2023-04-30",
        note: "100% completed and operational.",
        sources: [
          { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/bengalurus-k-100-waterway-ready-for-citizens/article66782910.ece" },
        ],
      },
      contractors: {
        confidence: "reported",
        asOf: "2021-01-15",
        note: "Civil works executed by BBMP engineering contractors; urban design by Jana Urban Space Foundation.",
        sources: [
          { label: "Citizen Matters: Behind the K-100 waterway", url: "https://citizenmatters.in/k100-citizens-waterway-koramangala-valley-redesign-success/" },
        ],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Audited final payment voucher compilations not separated in BBMP public portal.",
        sources: [],
      },
    },
    corrections: [
      "Added project as completed ecological model.",
    ],
  },

  contractors: [
    {
      name: "Jana Urban Space Foundation (Jana USP)",
      awardedAmountCr: null,
      contractAwardDate: "2020-03-05",
      status: "completed",
      scope: "Urban design, landscape architecture, and citizen participation framework",
    },
  ],

  milestones: [
    {
      id: "k100-m1",
      date: "2020-11-20",
      stageName: "Work order approved",
      description: "State government sanctioned ₹175 Cr for eco-restoration of 11.5 km canal.",
      source: { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/k-100-waterway-bengalurus-smelly-canal-turns-into-scenic-promenade-1215891.html" },
    },
    {
      id: "k100-m2",
      date: "2023-04-30",
      stageName: "Promenade and waterway inaugurated",
      description: "Inaugurated as Bengaluru's first restored citizen waterway with active walking plazas.",
      source: { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/bengalurus-k-100-waterway-ready-for-citizens/article66782910.ece" },
    },
  ],

  redFlags: [],

  articles: [
    {
      title: "K-100 waterway: Bengaluru's smelly open drain turns into scenic citizen promenade",
      outlet: "Deccan Herald",
      publishedDate: "2023-05-02",
      url: "https://www.deccanherald.com/india/karnataka/bengaluru/k-100-waterway-bengalurus-smelly-canal-turns-into-scenic-promenade-1215891.html",
      claim: "Details ₹175 Cr budget, 11.5 km stretch, and sewage interception mechanics",
    },
    {
      title: "Bengaluru's K-100 citizen waterway project ready for public use",
      outlet: "The Hindu",
      publishedDate: "2023-04-28",
      url: "https://www.thehindu.com/news/cities/bangalore/bengalurus-k-100-waterway-ready-for-citizens/article66782910.ece",
      claim: "Reports public walkways, tree plantation, and water testing improvements",
    },
    {
      title: "Behind the K-100 waterway: How Koramangala valley was reclaimed from sewage",
      outlet: "Citizen Matters",
      publishedDate: "2023-06-15",
      url: "https://citizenmatters.in/k100-citizens-waterway-koramangala-valley-redesign-success/",
      claim: "Explores architectural design, community co-creation, and flood mitigation",
    },
    {
      title: "How K-100 serves as a template to revive 840 km of stormwater drains in Bengaluru",
      outlet: "The News Minute",
      publishedDate: "2023-05-18",
      url: "https://www.thenewsminute.com/karnataka/can-k-100-project-change-the-way-bengaluru-treats-its-stormwater-drains",
      claim: "Discusses scalability to Vrishabhavathi and Challaghatta valley drain networks",
    },
  ],

  officialDocLinks: [
    { label: "BBMP Official Portal", url: "https://bbmp.gov.in", type: "NEWS_REPORT" },
    { label: "Deccan Herald: K-100 waterway transformation", url: "https://www.deccanherald.com/india/karnataka/bengaluru/k-100-waterway-bengalurus-smelly-canal-turns-into-scenic-promenade-1215891.html", type: "NEWS_REPORT" },
  ],
};
