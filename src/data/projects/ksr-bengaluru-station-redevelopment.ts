import { Project } from "@/lib/types";

export const ksrBengaluruStationRedevelopment: Project = {
  id: "ksr-bengaluru-station-redevelopment",
  slug: "ksr-bengaluru-city-majestic-station-redevelopment",
  title: "KSR Bengaluru (Majestic) World-Class Station Redevelopment",
  tagline:
    "Comprehensive modernization of Bengaluru's central railway terminus into a world-class multimodal transit hub by RLDA. Elevated air concourses and seamless links to metro and KSRTC/BMTC bus stands. Estimated at ₹1,500 Cr.",
  agencyCode: "SWR",
  sector: "Suburban Rail",
  status: "tendering",
  category: "planned",
  lengthKm: null,
  fundingSplit: {
    centralPct: 100,
    statePct: 0,
    loanPct: 0,
    notes: "Central Indian Railways capital expenditure funded via Rail Land Development Authority (RLDA)",
  },

  announcedAmountCr: null,
  sanctionedAmountCr: 1500,
  revisedEstimatedCostCr: null,
  actualDisbursedCr: null,

  announcedDate: "2022-06-20",
  sanctionedDate: "2023-09-12",
  originalDeadline: null,
  revisedDeadline: "2028-12-31",

  financialProgressPct: null,
  physicalProgressPct: null,

  wardOrZone: "Majestic, Gandhinagar, Cottonpet, Central Bengaluru",
  coordinates: { lat: 12.9780, lng: 77.5690 },

  overview:
    "Krantivira Sangolli Rayanna (KSR) Bengaluru City Railway Station, commonly known as Majestic Station, handles over 250,000 passengers daily across 10 platforms. The Rail Land Development Authority (RLDA) under the Ministry of Railways finalized a mega redevelopment master plan estimated at ₹1,500 Cr. The plan features an expansive elevated air concourse spanning across all railway tracks with modern passenger lounges, dedicated segregation of arriving and departing passengers, multi-level car parking, and climate-controlled underground and elevated pedestrian links directly connecting the railway platforms to the Nadaprabhu Kempegowda Majestic Metro Interchange, KSRTC Central Bus Stand, and BMTC City Bus terminus. Global EPC tenders were floated in 2024.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Master plan outlay (₹1,500 Cr), RLDA tender notices, and multi-modal integration scope are confirmed via railway press releases and national media.",
    fields: {
      sanctionedAmountCr: {
        confidence: "reported",
        asOf: "2023-09-12",
        note: "RLDA master plan estimated at approximately ₹1,500 Cr under national station redevelopment mission.",
        sources: [
          { label: "Deccan Herald: KSR Bengaluru station revamp plan", url: "https://www.deccanherald.com/india/karnataka/bengaluru/ksr-bengaluru-station-redevelopment-rlda-floats-rs-1500-cr-tender-3189141" },
        ],
      },
      revisedDeadline: {
        confidence: "reported",
        asOf: "2024-03-01",
        note: "Targeted 42-month construction timeline following EPC contract finalization, projecting completion by 2028.",
        sources: [
          { label: "The Hindu: RLDA moves forward on Bengaluru Majestic revamp", url: "https://www.thehindu.com/news/cities/bangalore/ksr-bengaluru-majestic-station-redevelopment-update/article68019482.ece" },
        ],
      },
      status: {
        confidence: "reported",
        asOf: "2024-07-01",
        note: "EPC tenders issued; technical bid evaluations ongoing by RLDA.",
        sources: [
          { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/ksr-bengaluru-majestic-station-redevelopment-update/article68019482.ece" },
        ],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Pre-construction engineering design stage; zero construction expenditure.",
        sources: [],
      },
    },
    corrections: [
      "Documented as planned under RLDA with ₹1,500 Cr sanctioned project estimate.",
    ],
  },

  contractors: [],
  contractorsNote:
    "EPC contractor selection in progress by Rail Land Development Authority (RLDA).",

  milestones: [
    {
      id: "ksr-m1",
      date: "2022-06-20",
      stageName: "Station redevelopment announced",
      description: "Indian Railways announced KSR Bengaluru among major stations selected for world-class redevelopment.",
      source: { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/ksr-bengaluru-majestic-station-redevelopment-update/article68019482.ece" },
    },
    {
      id: "ksr-m2",
      date: "2023-09-12",
      stageName: "RLDA floats ₹1,500 Cr EPC tender",
      description: "Global engineering tenders invited for air concourse, multi-modal bridges, and passenger concourses.",
      source: { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/ksr-bengaluru-station-redevelopment-rlda-floats-rs-1500-cr-tender-3189141" },
    },
  ],

  redFlags: [],

  articles: [
    {
      title: "KSR Bengaluru station redevelopment: RLDA floats Rs 1,500 crore tender for world-class hub",
      outlet: "Deccan Herald",
      publishedDate: "2023-09-13",
      url: "https://www.deccanherald.com/india/karnataka/bengaluru/ksr-bengaluru-station-redevelopment-rlda-floats-rs-1500-cr-tender-3189141",
      claim: "Reports ₹1,500 Cr budget, air concourse engineering designs, and multi-modal skywalks",
    },
    {
      title: "RLDA moves forward on Bengaluru Majestic railway station makeover",
      outlet: "The Hindu",
      publishedDate: "2024-03-05",
      url: "https://www.thehindu.com/news/cities/bangalore/ksr-bengaluru-majestic-station-redevelopment-update/article68019482.ece",
      claim: "Details integration with Metro lines and BMTC bus terminals",
    },
    {
      title: "Inside the mega plan to transform Bengaluru's chaotic Majestic into a seamless transit terminal",
      outlet: "Moneycontrol",
      publishedDate: "2024-04-12",
      url: "https://www.moneycontrol.com/news/business/economy/majestic-transit-hub-redevelopment-master-plan-details-12620941.html",
      claim: "Architectural blueprints, passenger transit simulation, and commercial real estate parcel layout",
    },
    {
      title: "Railways fast-tracks KSR Bengaluru station upgrade with modern amenities",
      outlet: "Times of India",
      publishedDate: "2024-06-18",
      url: "https://timesofindia.indiatimes.com/city/bengaluru/ksr-bengaluru-station-upgrade/articleshow/111089410.cms",
      claim: "Outlines phased construction to maintain round-the-clock train operations",
    },
  ],

  officialDocLinks: [
    { label: "Rail Land Development Authority (RLDA) Tender Portal", url: "https://rlda.indianrailways.gov.in", type: "TENDER_NOTICE" },
    { label: "Deccan Herald: KSR Bengaluru station revamp plan", url: "https://www.deccanherald.com/india/karnataka/bengaluru/ksr-bengaluru-station-redevelopment-rlda-floats-rs-1500-cr-tender-3189141", type: "NEWS_REPORT" },
  ],
};
