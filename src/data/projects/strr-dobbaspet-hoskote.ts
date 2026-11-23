import { Project } from "@/lib/types";

export const strrDobbaspetHoskote: Project = {
  id: "strr-dobbaspet-hoskote",
  slug: "strr-dobbaspet-doddaballapur-hoskote",
  title: "Satellite Town Ring Road: Northern Arc (Dobbaspet to Hoskote, NH-648)",
  tagline:
    "About 80 km 4/6-lane access-controlled ring expressway connecting Dobbaspet, Doddaballapur, Devanahalli, and Hoskote. Commissioned and tolling operational.",
  agencyCode: "NHAI",
  sector: "Roads & Flyovers",
  status: "completed",
  category: "completed",
  lengthKm: 80.0,
  fundingSplit: {
    centralPct: 60,
    statePct: 40,
    loanPct: 0,
    notes: "Central NHAI funding under Bharatmala Pariyojana with 40% state land acquisition sharing",
  },

  announcedAmountCr: null,
  sanctionedAmountCr: 3400,
  revisedEstimatedCostCr: null,
  actualDisbursedCr: null,

  announcedDate: "2018-11-20",
  sanctionedDate: "2019-03-05",
  originalDeadline: "2023-12-31",
  revisedDeadline: "2024-03-11",
  completionDate: "2024-03-11",

  financialProgressPct: null,
  physicalProgressPct: 100,

  wardOrZone: "Dobbaspet, Doddaballapur, Devanahalli, Hoskote (Northern Peri-urban Bengaluru)",
  coordinates: { lat: 13.2450, lng: 77.5800 },
  routeCoordinates: [
    [13.2350, 77.2400],
    [13.2950, 77.5400],
    [13.2450, 77.7100],
    [13.0700, 77.7950],
  ],

  overview:
    "The 80-km northern arc of the Satellite Town Ring Road (STRR / NH-648) links Dobbaspet on Tumakuru Road (NH-48) to Doddaballapur, Devanahalli (NH-44), and Hoskote (NH-75). Built by NHAI in multiple packages at a cost of roughly ₹3,400 Cr, the access-controlled expressway allows commercial freight traveling between Chennai, Hyderabad, and Mumbai to completely bypass Bengaluru's choked city core and Outer Ring Road. Dedicated in March 2024.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Operational status and tolling are confirmed by NHAI fee notifications and news coverage. Built across Packages 1, 2, and 3 of the northern alignment.",
    fields: {
      sanctionedAmountCr: {
        confidence: "reported",
        asOf: "2024-03-11",
        note: "Combined cost of the operational northern packages (Dobbaspet-Doddaballapur-Hoskote) reported at approximately ₹3,400 Cr.",
        sources: [
          { label: "Deccan Herald: STRR northern stretch opened", url: "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-strr-stretch-from-doddaballapur-to-hoskote-opened-2931812" },
        ],
      },
      revisedDeadline: {
        confidence: "reported",
        asOf: "2024-03-11",
        note: "Dedicated and opened for vehicular movement in March 2024.",
        sources: [
          { label: "Times of India: PM inaugurates STRR section", url: "https://timesofindia.indiatimes.com/city/bengaluru/strr-section-inauguration/articleshow/108389102.cms" },
        ],
      },
      physicalProgressPct: {
        confidence: "reported",
        asOf: "2024-03-11",
        note: "100% operational with FASTag electronic toll collection.",
        sources: [
          { label: "Times of India", url: "https://timesofindia.indiatimes.com/city/bengaluru/strr-section-inauguration/articleshow/108389102.cms" },
        ],
      },
      contractors: {
        confidence: "reported",
        asOf: "2021-06-15",
        note: "Constructed by DRA Infracon and Dilip Buildcon under NHAI EPC contract awards.",
        sources: [
          { label: "Construction World: STRR packages awarded", url: "https://www.constructionworld.in/transport-infrastructure/highways-and-bridges-infrastructure/nhai-awards-strr-packages/29148" },
        ],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Treasury disbursal reconciliations not published in single open document.",
        sources: [],
      },
    },
    corrections: [
      "Added project as completed following opening of Hoskote-Doddaballapur-Dobbaspet stretch.",
    ],
  },

  contractors: [
    {
      name: "DRA Infracon Pvt. Ltd.",
      awardedAmountCr: null,
      contractAwardDate: "2021-02-10",
      status: "completed",
      scope: "Doddaballapur bypass to Hoskote section",
    },
    {
      name: "Dilip Buildcon Ltd.",
      awardedAmountCr: null,
      contractAwardDate: "2021-03-15",
      status: "completed",
      scope: "Dobbaspet to Doddaballapur bypass section",
    },
  ],

  milestones: [
    {
      id: "str-m1",
      date: "2021-03-15",
      stageName: "Civil contracts awarded",
      description: "NHAI awarded northern arc packages under Bharatmala Pariyojana.",
      source: { label: "Construction World", url: "https://www.constructionworld.in/transport-infrastructure/highways-and-bridges-infrastructure/nhai-awards-strr-packages/29148" },
    },
    {
      id: "str-m2",
      date: "2024-03-11",
      stageName: "Northern arc dedicated and opened",
      description: "80-km expressway section dedicated by Prime Minister Narendra Modi.",
      source: { label: "Times of India", url: "https://timesofindia.indiatimes.com/city/bengaluru/strr-section-inauguration/articleshow/108389102.cms" },
    },
  ],

  redFlags: [],

  articles: [
    {
      title: "Bengaluru STRR stretch from Doddaballapur to Hoskote opened for commercial traffic",
      outlet: "Deccan Herald",
      publishedDate: "2024-03-12",
      url: "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-strr-stretch-from-doddaballapur-to-hoskote-opened-2931812",
      claim: "Confirms opening of 80 km northern section and freight bypass impact",
    },
    {
      title: "PM inaugurates 80-km section of Satellite Town Ring Road around Bengaluru",
      outlet: "Times of India",
      publishedDate: "2024-03-11",
      url: "https://timesofindia.indiatimes.com/city/bengaluru/strr-section-inauguration/articleshow/108389102.cms",
      claim: "Reports project costs, alignment with KIA airport, and travel time reductions",
    },
    {
      title: "How STRR is diverting heavy trucks away from Bengaluru's Outer Ring Road",
      outlet: "The Hindu",
      publishedDate: "2024-05-18",
      url: "https://www.thehindu.com/news/cities/bangalore/strr-diverts-truck-traffic-from-orr/article68189210.ece",
      claim: "Traffic survey reports 25,000+ trucks diverting daily from city arterial roads",
    },
    {
      title: "NHAI implements FASTag tolling on Dobbaspet-Hoskote expressway",
      outlet: "Moneycontrol",
      publishedDate: "2024-04-01",
      url: "https://www.moneycontrol.com/news/business/economy/nhai-notifies-toll-rates-for-bengaluru-strr-12567841.html",
      claim: "Notifies toll plazas and commercial user charges on NH-648",
    },
  ],

  officialDocLinks: [
    { label: "NHAI STRR Project Portal", url: "https://nhai.gov.in", type: "NEWS_REPORT" },
    { label: "Deccan Herald: STRR northern stretch opened", url: "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-strr-stretch-from-doddaballapur-to-hoskote-opened-2931812", type: "NEWS_REPORT" },
  ],
};
