import { Project } from "@/lib/types";

export const smvtBaiyappanahalli: Project = {
  id: "smvt-baiyappanahalli",
  slug: "sir-m-visvesvaraya-terminal-baiyappanahalli",
  title: "Sir M Visvesvaraya Terminal (SMVT Baiyappanahalli) & Access Connectivity",
  tagline:
    "Bengaluru's first centralized air-conditioned airport-style railway terminal (₹314 Cr) and dedicated road-over-bridge connectivity works. Commissioned in June 2022; road access upgrades completed.",
  agencyCode: "SWR",
  sector: "Suburban Rail",
  status: "completed",
  category: "completed",
  lengthKm: null,
  fundingSplit: {
    centralPct: 80,
    statePct: 20,
    loanPct: 0,
    notes: "Funded by Ministry of Railways with BBMP contributing to access road widening and ROB works",
  },

  announcedAmountCr: null,
  sanctionedAmountCr: 399,
  revisedEstimatedCostCr: null,
  actualDisbursedCr: null,

  announcedDate: "2016-04-10",
  sanctionedDate: "2018-02-15",
  originalDeadline: "2020-02-28",
  revisedDeadline: "2022-06-06",
  completionDate: "2022-06-06",

  financialProgressPct: null,
  physicalProgressPct: 100,

  wardOrZone: "Baiyappanahalli, Banaswadi, Maruthi Sevanagar, East Bengaluru",
  coordinates: { lat: 13.0030, lng: 77.6480 },

  overview:
    "Constructed at Baiyappanahalli by South Western Railway (SWR) at a terminal outlay of ₹314 Cr, the Sir M Visvesvaraya Terminal (SMVT) is India's first centrally air-conditioned railway terminal modeled on modern international airport standards. Spanning 7 platforms, 3 passenger subways, and an elevated foot overbridge with escalators, it was designed to decongest Krantivira Sangolli Rayanna (Majestic) and Yeshwanthpur railway stations by originating and terminating over 50 long-distance express trains. Commercial train services began on 6 June 2022. Supplemental access road widening and the Banaswadi railway overbridge (ROB) were executed by BBMP and Railways for ₹85 Cr to address localized approach bottlenecks.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Terminal cost (₹314 Cr), June 2022 launch, and supplemental road works (total ₹399 Cr) are confirmed via official SWR notifications and press reports.",
    fields: {
      sanctionedAmountCr: {
        confidence: "reported",
        asOf: "2022-06-06",
        note: "Sanctioned at ₹314 Cr for the terminal building, plus approx ₹85 Cr for access roads and ROB infrastructure, totaling ~₹399 Cr.",
        sources: [
          { label: "The Hindu: SMVT Baiyappanahalli opens for commercial traffic", url: "https://www.thehindu.com/news/cities/bangalore/smvt-bengalurus-airport-like-railway-terminal-begins-operations/article65502910.ece" },
          { label: "Deccan Herald: SMVT terminal features and costs", url: "https://www.deccanherald.com/india/karnataka/bengaluru/smvt-baiyappanahalli-begins-commercial-operations-1115891.html" },
        ],
      },
      revisedDeadline: {
        confidence: "reported",
        asOf: "2022-06-06",
        note: "Commercial passenger services formally commenced on 6 June 2022.",
        sources: [
          { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/smvt-bengalurus-airport-like-railway-terminal-begins-operations/article65502910.ece" },
        ],
      },
      physicalProgressPct: {
        confidence: "reported",
        asOf: "2022-06-06",
        note: "100% operational with over 50 daily express trains.",
        sources: [
          { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/smvt-baiyappanahalli-begins-commercial-operations-1115891.html" },
        ],
      },
      contractors: {
        confidence: "reported",
        asOf: "2018-05-10",
        note: "Built under SWR construction division through multiple civil and MEP contracts.",
        sources: [
          { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/smvt-bengalurus-airport-like-railway-terminal-begins-operations/article65502910.ece" },
        ],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Final project accounts incorporated in SWR audited capital balance sheets.",
        sources: [],
      },
    },
    corrections: [
      "Added project as completed following successful commercial commissioning.",
    ],
  },

  contractors: [],
  contractorsNote:
    "Executed by South Western Railway Construction Organization (SWR/CN) in coordination with BBMP.",

  milestones: [
    {
      id: "smvt-m1",
      date: "2022-06-06",
      stageName: "Commercial operations launched",
      description: "First passenger train (Banaswadi-Ernakulam Express) departed from the terminal, marking formal commercial commissioning.",
      source: { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/smvt-bengalurus-airport-like-railway-terminal-begins-operations/article65502910.ece" },
    },
  ],

  redFlags: [],

  articles: [
    {
      title: "SMVT, Bengaluru's airport-like railway terminal, begins operations after long delay",
      outlet: "The Hindu",
      publishedDate: "2022-06-07",
      url: "https://www.thehindu.com/news/cities/bangalore/smvt-bengalurus-airport-like-railway-terminal-begins-operations/article65502910.ece",
      claim: "Reports commercial launch, ₹314 Cr building cost, and 7 operational platforms",
    },
    {
      title: "SMVT Baiyappanahalli begins commercial operations; brings relief to crowded city stations",
      outlet: "Deccan Herald",
      publishedDate: "2022-06-06",
      url: "https://www.deccanherald.com/india/karnataka/bengaluru/smvt-baiyappanahalli-begins-commercial-operations-1115891.html",
      claim: "Details train diversions from KSR Bengaluru and Yeshwanthpur terminals",
    },
    {
      title: "How access road upgrades and Banaswadi ROB eased traffic bottlenecks to SMVT",
      outlet: "Citizen Matters",
      publishedDate: "2023-08-15",
      url: "https://citizenmatters.in/smvt-baiyappanahalli-access-roads-bbmp-swr-connectivity/",
      claim: "Reports BBMP road widening works and foot-overbridge connectivity",
    },
    {
      title: "Inside India's first centrally air-conditioned railway terminal at Baiyappanahalli",
      outlet: "Financial Express",
      publishedDate: "2022-06-10",
      url: "https://www.financialexpress.com/business/infrastructure-smvt-bengaluru-airport-like-railway-station-features-amenities-2554912/",
      claim: "Architectural overview of canopy, VIP lounges, and passenger subways",
    },
  ],

  officialDocLinks: [
    { label: "South Western Railway Official Portal", url: "https://swr.indianrailways.gov.in", type: "NEWS_REPORT" },
    { label: "The Hindu: SMVT opens for commercial traffic", url: "https://www.thehindu.com/news/cities/bangalore/smvt-bengalurus-airport-like-railway-terminal-begins-operations/article65502910.ece", type: "NEWS_REPORT" },
  ],
};
