import { Project } from "@/lib/types";

export const bwssbCauveryStageV: Project = {
  id: "bwssb-cauvery-stage-v",
  slug: "bwssb-cauvery-water-supply-stage-v",
  title: "Cauvery Water Supply Scheme Stage V",
  tagline:
    "775 MLD of additional Cauvery drinking water for Bengaluru outskirts and 110 villages, predominantly JICA-financed. Commissioned in October 2024.",
  agencyCode: "BWSSB",
  sector: "Water Supply & Sewage",
  status: "completed",
  category: "completed",
  lengthKm: null,
  fundingSplit: {
    centralPct: 0,
    statePct: 15,
    loanPct: 85,
    loanSource: "Japan International Cooperation Agency (JICA)",
    notes: "JICA funded approximately 85% of project cost through soft development loan",
  },

  announcedAmountCr: null,
  sanctionedAmountCr: 5550,
  revisedEstimatedCostCr: null,
  actualDisbursedCr: null,

  announcedDate: null,
  sanctionedDate: null,
  originalDeadline: null,
  revisedDeadline: "2024-10-16",
  completionDate: "2024-10-16",

  financialProgressPct: null,
  physicalProgressPct: 100,

  wardOrZone: "Peripheral Bengaluru and 110 villages; treatment plant at Thorekadanahalli",
  coordinates: { lat: 12.9815, lng: 77.4982 },
  routeCoordinates: [
    [12.5500, 77.2000],
    [12.7500, 77.4200],
    [12.9200, 77.5100],
    [12.9815, 77.4982],
  ],

  overview:
    "Adds 775 million litres per day (MLD) of raw Cauvery water to Bengaluru, treated at a state-of-the-art plant at Thorekadanahalli (TK Halli) and pumped through three stages (TK Halli, Harohalli, and Tataguni) over a 450-metre lift. The scheme is funded mostly by JICA (which lent about 85% of the ₹5,550 Cr outlay). Chief Minister Siddaramaiah officially dedicated Stage V on 16 October 2024, providing tap water connections across 110 peripheral villages.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Capacity, JICA funding and commissioning are well reported across media. Cost differs slightly across sources (₹4,336 Cr to ₹5,550 Cr). Contractor specifics were not published in open news reports.",
    fields: {
      sanctionedAmountCr: {
        confidence: "reported",
        asOf: "2024-10-16",
        note: "₹5,550 Cr (with ~85% JICA funding) is reported by Daijiworld; other outlets cite ₹4,336 Cr or ₹5,000 Cr depending on bulk vs local pipeline distribution components.",
        sources: [
          { label: "Daijiworld: JICA loan for ₹5,550 Cr Stage V", url: "https://daijiworld.com/news/newsDisplay?newsID=492393" },
          { label: "The Hindu: Cauvery Stage V to be inaugurated", url: "https://www.thehindu.com/news/cities/bangalore/cauvery-stage-v-to-be-inaugurated-on-october-16/article68748347.ece" },
        ],
      },
      physicalProgressPct: {
        confidence: "reported",
        asOf: "2024-10-16",
        note: "100% completed following commissioning on 16 October 2024.",
        sources: [
          { label: "ThePrint: project launched", url: "https://theprint.in/india/project-to-provide-cauvery-water-to-bengalurus-peripheral-areas-launched/2314754" },
        ],
      },
      status: {
        confidence: "reported",
        asOf: "2024-10-16",
        note: "Dedicated by the Chief Minister on 16 October 2024 with commercial supplies flowing to peripheral reservoirs.",
        sources: [
          { label: "Deccan Herald: Stage V launch on Oct 16", url: "https://deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Fbwssb-to-launch-stage-v-of-cauvery-water-supply-scheme-on-oct-16-3224963" },
          { label: "ThePrint: project launched", url: "https://theprint.in/india/project-to-provide-cauvery-water-to-bengalurus-peripheral-areas-launched/2314754" },
        ],
      },
      contractors: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Specific contractor breakdown not published in open press releases.",
        sources: [],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Disbursal figures under JICA loan tranche not published project-wise in open data.",
        sources: [],
      },
    },
    corrections: [
      "Removed contractors (L&T, SPML) without tender order verification.",
      "Removed unverified ₹5,210 Cr disbursement and 89% financial progress figures.",
      "Updated project status to Completed following official commissioning on 16 October 2024.",
    ],
  },

  contractors: [],
  contractorsNote:
    "Package-wise contractor data is pending retrieval from official BWSSB tender records.",

  milestones: [
    {
      id: "cw-m1",
      date: "2024-10-16",
      stageName: "Stage V commissioned and dedicated to citizens",
      description: "Dedicated by the Chief Minister at TK Halli water treatment plant, delivering 775 MLD to outer Bengaluru.",
      source: { label: "ThePrint", url: "https://theprint.in/india/project-to-provide-cauvery-water-to-bengalurus-peripheral-areas-launched/2314754" },
    },
  ],

  redFlags: [],

  articles: [
    {
      title: "Project to provide Cauvery water to Bengaluru's peripheral areas launched",
      outlet: "ThePrint",
      publishedDate: "2024-10-16",
      url: "https://theprint.in/india/project-to-provide-cauvery-water-to-bengalurus-peripheral-areas-launched/2314754",
      claim: "Official dedication and inauguration of 775 MLD water scheme",
    },
    {
      title: "BWSSB to launch Stage V of Cauvery water supply scheme on Oct 16",
      outlet: "Deccan Herald",
      publishedDate: "2024-10-10",
      url: "https://deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Fbwssb-to-launch-stage-v-of-cauvery-water-supply-scheme-on-oct-16-3224963",
      claim: "Launch dates, testing phase, and pumping station readiness",
    },
    {
      title: "After a decade-long wait, Cauvery water to finally reach Bengaluru's outskirts",
      outlet: "Deccan Herald",
      publishedDate: "2024-10-18",
      url: "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Fafter-a-decade-long-wait-cauvery-water-to-finally-reach-bengalurus-outskirts-3233582",
      claim: "Supply rollout across 110 villages in Mahadevapura, Bommanahalli, RR Nagar",
    },
    {
      title: "Bengaluru: JICA to fund Cauvery water supply project Phase V",
      outlet: "Daijiworld",
      publishedDate: "2018-03-24",
      url: "https://daijiworld.com/news/newsDisplay?newsID=492393",
      claim: "JICA financing structure and ₹5,550 Cr overall project outlay",
    },
  ],

  officialDocLinks: [
    { label: "BWSSB Official Portal", url: "https://bwssb.karnataka.gov.in", type: "NEWS_REPORT" },
    { label: "Daijiworld: JICA loan for Stage V", url: "https://daijiworld.com/news/newsDisplay?newsID=492393", type: "NEWS_REPORT" },
  ],
};
