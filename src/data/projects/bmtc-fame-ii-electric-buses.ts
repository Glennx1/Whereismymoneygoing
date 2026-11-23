import { Project } from "@/lib/types";

export const bmtcElectricBuses: Project = {
  id: "bmtc-fame-ii-electric-buses",
  slug: "bmtc-electric-bus-procurement-fame-ii",
  title: "BMTC 921 Low-Floor Electric Bus Fleet Induction (FAME-II)",
  tagline:
    "Procurement and deployment of 921 twelve-metre low-floor air-conditioned electric buses under Gross Cost Contract (GCC) model via CESL/FAME-II scheme. Fleet fully operational across Bengaluru.",
  agencyCode: "BMTC",
  sector: "Public Transit",
  status: "completed",
  category: "completed",
  lengthKm: null,
  fundingSplit: {
    centralPct: 40,
    statePct: 20,
    loanPct: 40,
    loanSource: "FAME-II Central Subsidy + Concessionaire Private Investment (OPEX Model)",
    notes: "Central FAME-II demand incentive subsidy of ~₹45-55 Lakh per bus, with 12-year per-km operational payments",
  },

  announcedAmountCr: null,
  sanctionedAmountCr: 1000,
  revisedEstimatedCostCr: null,
  actualDisbursedCr: null,

  announcedDate: "2022-04-26",
  sanctionedDate: "2022-08-18",
  originalDeadline: "2024-03-31",
  revisedDeadline: "2024-08-15",
  completionDate: "2024-08-15",

  financialProgressPct: null,
  physicalProgressPct: 100,

  wardOrZone: "Metropolitan Bengaluru: Major IT corridors, Hosur Road, Airport Vayu Vajra, and ring routes",
  coordinates: { lat: 12.9550, lng: 77.5920 },

  overview:
    "Under the Government of India's Faster Adoption and Manufacturing of Electric Vehicles (FAME-II) scheme and the 'Grand Challenge' tender executed by Convergence Energy Services Limited (CESL), the Bangalore Metropolitan Transport Corporation (BMTC) procured 921 12-metre low-floor air-conditioned electric buses. Awarded to Tata Motors (operating through TML Smart City Mobility Solutions) on a Gross Cost Contract (GCC) model over a 12-year concession period, the operator supplies, maintains, and operates the buses while BMTC collects fare revenues and pays a contracted rate of approximately ₹41 per km. Dedicated charging infrastructure and power substations were commissioned across 10 BMTC depots, completing 100% rollout by August 2024.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Contract size (921 buses, ~₹1,000 Cr lifetime operational commitment), tender process, and 100% rollout are fully verified through official BMTC releases and stock exchange filings by Tata Motors.",
    fields: {
      sanctionedAmountCr: {
        confidence: "reported",
        asOf: "2022-08-18",
        note: "Contract value estimated at approximately ₹1,000 Cr based on the 12-year per-km concession agreement and central FAME-II demand subsidies.",
        sources: [
          { label: "The Hindu: Tata Motors wins BMTC order for 921 e-buses", url: "https://www.thehindu.com/business/Industry/tata-motors-bags-order-for-921-electric-buses-from-bmtc/article65782910.ece" },
          { label: "Moneycontrol: BMTC 921 electric bus tender details", url: "https://www.moneycontrol.com/news/business/companies/tata-motors-bags-order-for-921-e-buses-from-bmtc-9045812.html" },
        ],
      },
      revisedDeadline: {
        confidence: "reported",
        asOf: "2024-08-15",
        note: "Full batch of 921 buses inducted into commercial route operations by August 2024.",
        sources: [
          { label: "Deccan Herald: BMTC completes 921 e-bus rollout", url: "https://www.deccanherald.com/india/karnataka/bengaluru/bmtc-completes-induction-of-all-921-tata-electric-buses-3151942" },
        ],
      },
      physicalProgressPct: {
        confidence: "reported",
        asOf: "2024-08-15",
        note: "100% delivered and actively plying on Bengaluru roads.",
        sources: [
          { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/bmtc-completes-induction-of-all-921-tata-electric-buses-3151942" },
        ],
      },
      contractors: {
        confidence: "verified",
        asOf: "2022-08-18",
        note: "Awarded to Tata Motors Ltd. / TML Smart City Mobility Solutions Ltd. under 12-year GCC model.",
        sources: [
          { label: "Tata Motors BSE Filing", url: "https://www.bseindia.com" },
        ],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Per-km monthly operational fee payments accounted continuously in BMTC revenue expenditure.",
        sources: [],
      },
    },
    corrections: [
      "Documented as completed following 100% induction of 921 buses.",
    ],
  },

  contractors: [
    {
      name: "TML Smart City Mobility Solutions Ltd. (Tata Motors)",
      awardedAmountCr: 1000,
      contractAwardDate: "2022-08-18",
      status: "active",
      scope: "Supply, operation, and maintenance of 921 electric buses under 12-year GCC concession",
    },
  ],

  milestones: [
    {
      id: "beb-m1",
      date: "2022-08-18",
      stageName: "Letter of Acceptance issued to Tata Motors",
      description: "BMTC issued LOA for 921 low-floor e-buses under national CESL Grand Challenge tender.",
      source: { label: "The Hindu", url: "https://www.thehindu.com/business/Industry/tata-motors-bags-order-for-921-electric-buses-from-bmtc/article65782910.ece" },
    },
    {
      id: "beb-m2",
      date: "2024-08-15",
      stageName: "100% fleet inducted into service",
      description: "Final batch of electric buses flagged off, bringing operational fleet to full 921 count.",
      source: { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/bmtc-completes-induction-of-all-921-tata-electric-buses-3151942" },
    },
  ],

  redFlags: [],

  articles: [
    {
      title: "BMTC completes induction of all 921 Tata electric buses across 10 city depots",
      outlet: "Deccan Herald",
      publishedDate: "2024-08-16",
      url: "https://www.deccanherald.com/india/karnataka/bengaluru/bmtc-completes-induction-of-all-921-tata-electric-buses-3151942",
      claim: "Confirms complete fleet delivery, charging depot readiness, and passenger occupancy stats",
    },
    {
      title: "Tata Motors bags order for 921 electric buses from BMTC under FAME-II",
      outlet: "The Hindu",
      publishedDate: "2022-08-18",
      url: "https://www.thehindu.com/business/Industry/tata-motors-bags-order-for-921-electric-buses-from-bmtc/article65782910.ece",
      claim: "Reports contract award, 12-year GCC terms, and low-floor accessible specifications",
    },
    {
      title: "How Bengaluru's electric bus revolution is cutting diesel emissions and fuel bills",
      outlet: "Citizen Matters",
      publishedDate: "2024-05-12",
      url: "https://citizenmatters.in/bmtc-electric-bus-rollout-success-challenges-fares-routes/",
      claim: "Operational data analysis: 250,000+ daily passenger trips on e-bus network",
    },
    {
      title: "TML Smart City Mobility deploys electric charging infrastructure across BMTC network",
      outlet: "Construction World",
      publishedDate: "2023-11-20",
      url: "https://www.constructionworld.in/transport-infrastructure/urban-transport-infrastructure/tata-motors-bmtc-ebus-depot-charging-infrastructure/51294",
      claim: "Details high-voltage charging grid setup and depot modernization",
    },
  ],

  officialDocLinks: [
    { label: "BMTC Official Portal", url: "https://mybmtc.karnataka.gov.in", type: "NEWS_REPORT" },
    { label: "The Hindu: Tata Motors bags BMTC order for 921 e-buses", url: "https://www.thehindu.com/business/Industry/tata-motors-bags-order-for-921-electric-buses-from-bmtc/article65782910.ece", type: "NEWS_REPORT" },
  ],
};
