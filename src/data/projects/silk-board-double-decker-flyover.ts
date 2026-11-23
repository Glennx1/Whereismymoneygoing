import { Project } from "@/lib/types";

export const silkBoardDoubleDeckerFlyover: Project = {
  id: "silk-board-double-decker-flyover",
  slug: "silk-board-double-decker-flyover-and-ramps",
  title: "Central Silk Board Double-Decker Road-cum-Rail Flyover & Ramps",
  tagline:
    "5.12 km integrated two-tier structure between Ragigudda and Central Silk Board (lower deck for cars/buses, upper deck for Yellow Line metro). Main deck opened in July 2024; connecting loop ramps underway.",
  agencyCode: "BMRCL",
  sector: "Roads & Flyovers",
  status: "partially_operational",
  category: "ongoing",
  lengthKm: 5.12,
  fundingSplit: {
    centralPct: 20,
    statePct: 50,
    loanPct: 30,
    notes: "Funded jointly by BMRCL and BBMP under Bengaluru Traffic Decongestion initiative",
  },

  announcedAmountCr: null,
  sanctionedAmountCr: 449,
  revisedEstimatedCostCr: null,
  actualDisbursedCr: null,

  announcedDate: "2017-07-20",
  sanctionedDate: "2019-01-15",
  originalDeadline: "2021-12-31",
  revisedDeadline: "2025-06-30",

  financialProgressPct: null,
  physicalProgressPct: 92,

  wardOrZone: "Ragigudda, BTM Layout, Central Silk Board, HSR Layout, Madiwala",
  coordinates: { lat: 12.9172, lng: 77.6235 },
  routeCoordinates: [
    [12.9167, 77.5925],
    [12.9170, 77.6100],
    [12.9172, 77.6235],
    [12.9180, 77.6350],
  ],

  overview:
    "Built by BMRCL in coordination with BBMP at a cost of ₹449 Cr, this innovative 5.12 km double-decker infrastructure features a 4-lane elevated vehicular roadway on the lower deck and the Namma Metro Yellow Line viaduct on the upper deck. It eliminates several signalized bottlenecks between Ragigudda and Central Silk Board. The main vehicular carriageway was inaugurated on 17 July 2024, enabling motorists from Jayanagar and BTM to reach Silk Board signal-free. Five dedicated loop ramps connecting directly into HSR Layout, Hosur Road, and Electronic City are currently being completed.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Cost (₹449 Cr), main flyover opening date (17 July 2024), and pending ramps are confirmed across all major newspapers. Status is classified as Partially Operational.",
    fields: {
      sanctionedAmountCr: {
        confidence: "reported",
        asOf: "2019-01-15",
        note: "Sanctioned at approximately ₹449 Cr for the road-deck component and dedicated access ramps.",
        sources: [
          { label: "The Hindu: Silk Board double-decker flyover opened", url: "https://www.thehindu.com/news/cities/bangalore/silk-board-double-decker-flyover-opened-for-traffic/article68414981.ece" },
        ],
      },
      originalDeadline: {
        confidence: "reported",
        asOf: "2019-01-15",
        note: "Initial target tied to Yellow Line delivery in late 2021.",
        sources: [
          { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/silk-board-double-decker-flyover-opened-for-traffic/article68414981.ece" },
        ],
      },
      revisedDeadline: {
        confidence: "reported",
        asOf: "2024-07-17",
        note: "Main deck opened July 2024; balance connecting ramps targeted for mid-2025.",
        sources: [
          { label: "Deccan Herald: Silk board flyover opens, ramps by 2025", url: "https://www.deccanherald.com/india/karnataka/bengaluru/silk-board-double-decker-flyover-opens-for-traffic-3110291" },
        ],
      },
      physicalProgressPct: {
        confidence: "reported",
        asOf: "2024-08-01",
        note: "Main carriageway 100% operational; loop ramps under construction bring composite completion to ~92%.",
        sources: [
          { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/silk-board-double-decker-flyover-opens-for-traffic-3110291" },
        ],
      },
      contractors: {
        confidence: "reported",
        asOf: "2019-01-15",
        note: "HCC-URC JV constructed the composite structure as part of Metro Reach 5 civil contract.",
        sources: [
          { label: "The Metro Rail Guy: Reach 5 details", url: "https://themetrorailguy.com/bangalore-metro-phase-2-information-map/" },
        ],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Flyover package payments merged within Reach 5 milestone bills.",
        sources: [],
      },
    },
    corrections: [
      "Updated project status to partially operational following July 2024 launch.",
    ],
  },

  contractors: [
    {
      name: "HCC - URC Construction JV",
      awardedAmountCr: null,
      contractAwardDate: "2017-07-20",
      status: "active",
      scope: "Civil construction of 5.12 km double-decker piers, lower road deck, and loop ramps",
    },
  ],

  milestones: [
    {
      id: "sbd-m1",
      date: "2024-07-17",
      stageName: "Lower vehicular deck opened",
      description: "Inaugurated by Karnataka Deputy Chief Minister DK Shivakumar for vehicular traffic.",
      source: { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/silk-board-double-decker-flyover-opened-for-traffic/article68414981.ece" },
    },
  ],

  redFlags: [
    {
      id: "rf-sbd-ramps",
      type: "TIMELINE_DELAY",
      severity: "MEDIUM",
      title: "Connecting loop ramps to HSR and Hosur Road still under construction",
      summary:
        "While the main trunk carriageway is operational, crucial dispersal loop ramps required to untangle traffic entering HSR Layout and Hosur Road are still pending completion.",
      calculatedMetric: "Ramps delayed past main opening",
      officialCitation: {
        sourceName: "Deccan Herald",
        documentUrl: "https://www.deccanherald.com/india/karnataka/bengaluru/silk-board-double-decker-flyover-opens-for-traffic-3110291",
      },
    },
  ],

  articles: [
    {
      title: "Silk Board double-decker flyover opened for vehicular traffic",
      outlet: "The Hindu",
      publishedDate: "2024-07-17",
      url: "https://www.thehindu.com/news/cities/bangalore/silk-board-double-decker-flyover-opened-for-traffic/article68414981.ece",
      claim: "Reports inauguration of lower road deck and ₹449 Cr project outlay",
    },
    {
      title: "Silk Board double-decker flyover opens; balance ramps expected by mid-2025",
      outlet: "Deccan Herald",
      publishedDate: "2024-07-18",
      url: "https://www.deccanherald.com/india/karnataka/bengaluru/silk-board-double-decker-flyover-opens-for-traffic-3110291",
      claim: "Details remaining ramp civil construction work and traffic routing",
    },
    {
      title: "How Bengaluru's first road-cum-rail flyover works at Central Silk Board",
      outlet: "Moneycontrol",
      publishedDate: "2024-07-19",
      url: "https://www.moneycontrol.com/news/business/economy/silk-board-double-decker-flyover-route-features-and-traffic-impact-12771921.html",
      claim: "Engineering breakdown of multi-tier interchange and structural design",
    },
    {
      title: "Commuters welcome Silk Board flyover opening but demand swift completion of ramps",
      outlet: "Bangalore Mirror",
      publishedDate: "2024-07-22",
      url: "https://bangaloremirror.indiatimes.com/bangalore/civic/silk-board-flyover-relief-commuters/articleshow/111928410.cms",
      claim: "Citizen travel time feedback between Ragigudda and Silk Board junction",
    },
  ],

  officialDocLinks: [
    { label: "BMRCL Official Project Portal", url: "https://english.bmrc.co.in", type: "BMRCL_REPORT" },
    { label: "The Hindu: Silk Board double-decker flyover opened", url: "https://www.thehindu.com/news/cities/bangalore/silk-board-double-decker-flyover-opened-for-traffic/article68414981.ece", type: "NEWS_REPORT" },
  ],
};
