import { Project } from "@/lib/types";

export const ejipuraFlyover: Project = {
  id: "ejipura-flyover",
  slug: "ejipura-koramangala-flyover",
  title: "Ejipura - Koramangala Elevated Corridor (Sony World Flyover)",
  tagline:
    "2.5 km flyover at Ejipura / Sony World junction, Koramangala. Work order issued in 2017 with a November 2019 deadline; still being completed.",
  agencyCode: "BBMP",
  sector: "Roads & Flyovers",
  status: "under_construction",
  category: "ongoing",
  lengthKm: 2.5,

  announcedAmountCr: null,
  sanctionedAmountCr: null,
  revisedEstimatedCostCr: 307.96,
  actualDisbursedCr: null,

  announcedDate: null,
  sanctionedDate: null,
  originalDeadline: "2019-11-30",
  revisedDeadline: null,

  financialProgressPct: null,
  physicalProgressPct: null,

  wardOrZone: "Koramangala / Ejipura, South Bengaluru",
  coordinates: { lat: 12.9352, lng: 77.6245 },
  routeCoordinates: [
    [12.9385, 77.6190],
    [12.9352, 77.6245],
    [12.9315, 77.6310],
  ],

  overview:
    "A 2.5 km flyover meant to ease traffic at the Ejipura / Sony World junction. The work was first awarded to Simplex Infrastructures in 2017 with a November 2019 deadline. The original contract was cancelled in March 2022 and the remaining work was re-tendered; reports say BSCPL Infrastructure was the sole bidder on the fourth attempt. Reported causes of delay include late payments to the contractor, transfer of defence and private land, and encroachments by 46 private buildings and 3 government properties. Recent reports give several different completion promises (June 2026, July 2026, December 2026), so the current target is unclear.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Contractor history, the 2019 deadline and the ~₹308 Cr latest cost are reported in several news stories. The original sanctioned cost is reported three different ways. Amounts paid are not published.",
    fields: {
      revisedEstimatedCostCr: {
        confidence: "reported",
        asOf: "2023-11-15",
        note: "Reports put the latest cost at about ₹307.96 Cr, roughly ₹104 Cr above the earlier figure. The original cost is reported as ₹158 Cr, ₹204 Cr and ₹252 Cr by different outlets, so we do not show an 'approved budget' until a primary document settles it.",
        sources: [
          { label: "Swarajya: BBMP finds sole bidder on fourth attempt", url: "https://swarajyamag.com/amp/story/infrastructure/bengaluru-bbmp-finds-sole-bidder-for-long-delayed-ejipura-flyover-on-fourth-attempt-cost-escalation-raises-concerns" },
          { label: "The News Minute: inside the saga of the Ejipura flyover", url: "https://www.thenewsminute.com/karnataka/delays-debt-disputes-inside-the-saga-of-bengalurus-ejipura-flyover" },
        ],
      },
      originalDeadline: {
        confidence: "reported",
        asOf: "2017-05-04",
        note: "Work order issued in May 2017 with a November 2019 completion deadline.",
        sources: [
          { label: "The News Minute: inside the saga of the Ejipura flyover", url: "https://www.thenewsminute.com/karnataka/delays-debt-disputes-inside-the-saga-of-bengalurus-ejipura-flyover" },
        ],
      },
      revisedDeadline: {
        confidence: "unverified",
        asOf: "2024-07-10",
        note: "Conflicting promises: June 2026 (Deputy CM), end of July (GBA chief commissioner), December 2026 (later report). No confirmed current target.",
        sources: [
          { label: "Deccan Herald: June 2026 promise", url: "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Fdycm-dk-shivakumar-promises-completion-of-long-delayed-ejipura-flyover-by-june-2026-3769909" },
          { label: "The News Minute: GBA sets July deadline", url: "https://www.thenewsminute.com/karnataka/after-years-of-delays-gba-sets-july-deadline-to-finish-bengalurus-ejipura-flyover" },
        ],
      },
      contractors: {
        confidence: "reported",
        asOf: "2023-08-20",
        note: "Simplex (original, cancelled 2022) and BSCPL (re-tender). Contract values were not found in any source.",
        sources: [
          { label: "Deccan Herald: BBMP weighs terminating contract", url: "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Fbbmp-weighs-terminating-contract-as-ejipura-flyover-faces-continued-delays-3341865" },
        ],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "No published figure for money paid. Earlier versions showed ₹142.5 Cr, which could not be sourced.",
        sources: [],
      },
      status: {
        confidence: "reported",
        asOf: "2024-05-12",
        note: "Reports describe ongoing pillar and structure work with new piers being cast.",
        sources: [
          { label: "OneIndia: structure takes shape with new pillars", url: "https://www.oneindia.com/bengaluru/ejipura-flyover-status-2-5-km-long-project-takes-shape-with-new-pillars-3870279.html" },
        ],
      },
    },
    corrections: [
      "Removed ₹142.5 Cr 'paid out', 46% financial and 42% physical progress: no source.",
      "Removed ₹204 Cr 'sanctioned' as a single figure: sources disagree (₹158 / ₹204 / ₹252 Cr).",
      "Removed contract values (₹204 Cr, ₹144.9 Cr), tender IDs, the ₹10.2 Cr bank guarantee and the '38 of 67 piers' detail: no source found.",
    ],
  },

  contractors: [
    {
      name: "Simplex Infrastructures Ltd.",
      awardedAmountCr: null,
      contractAwardDate: "2017-05-04",
      status: "terminated",
      scope: "Original contract, cancelled by the state government in March 2022",
    },
    {
      name: "BSCPL Infrastructure Ltd.",
      awardedAmountCr: null,
      contractAwardDate: null,
      status: "active",
      scope: "Re-tendered remaining work (reported sole bidder on 4th attempt)",
    },
  ],

  milestones: [
    {
      id: "eji-m1",
      date: "2017-05-04",
      stageName: "Work order issued to Simplex",
      description: "BBMP issued the work order with a November 2019 completion deadline.",
      source: { label: "The News Minute", url: "https://www.thenewsminute.com/karnataka/delays-debt-disputes-inside-the-saga-of-bengalurus-ejipura-flyover" },
    },
    {
      id: "eji-m2",
      date: "2019-11-30",
      stageName: "Original deadline passes",
      description: "The flyover was not complete.",
      source: { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/half-built-much-delayed-ejipura-flyover-to-open-only-in-2022-969706.html" },
    },
    {
      id: "eji-m3",
      date: "2022-03-01",
      stageName: "Original contract cancelled",
      description: "The state government cancelled the Simplex contract, citing financial and execution problems.",
      source: { label: "Deccan Herald", url: "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Fcabinet-to-decide-fate-of-long-delayed-ejipura-flyover-project-1086805.html" },
    },
  ],

  redFlags: [
    {
      id: "rf-eji-delay",
      type: "TIMELINE_DELAY",
      severity: "HIGH",
      title: "Work order issued in 2017; still incomplete past original 2019 deadline",
      summary:
        "The project has been under construction for over 7 years against an initial 30-month timeline, with repeated tender cancellations and retenders.",
      calculatedMetric: "Over 5 years delayed past original Nov 2019 deadline",
      officialCitation: {
        sourceName: "The News Minute: inside the saga of the Ejipura flyover",
        documentUrl: "https://www.thenewsminute.com/karnataka/delays-debt-disputes-inside-the-saga-of-bengalurus-ejipura-flyover",
      },
    },
    {
      id: "rf-eji-cost",
      type: "COST_OVERRUN",
      severity: "MEDIUM",
      title: "Cost increased to ~₹308 Cr following re-tendering",
      summary:
        "Retendering after the termination of Simplex Infrastructures led to a revised project cost of approximately ₹307.96 Cr.",
      calculatedMetric: "Cost escalation of ~₹104 Cr reported",
      officialCitation: {
        sourceName: "Swarajya: BBMP finds sole bidder on fourth attempt",
        documentUrl: "https://swarajyamag.com/amp/story/infrastructure/bengaluru-bbmp-finds-sole-bidder-for-long-delayed-ejipura-flyover-on-fourth-attempt-cost-escalation-raises-concerns",
      },
    },
  ],

  articles: [
    {
      title: "Dy CM DK Shivakumar promises completion of long-delayed Ejipura flyover",
      outlet: "Deccan Herald",
      publishedDate: "2024-06-25",
      url: "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Fdycm-dk-shivakumar-promises-completion-of-long-delayed-ejipura-flyover-by-june-2026-3769909",
      claim: "Revised completion timeline and inspection update",
    },
    {
      title: "Delays, debt, disputes: Inside the saga of Bengaluru's Ejipura flyover",
      outlet: "The News Minute",
      publishedDate: "2023-09-14",
      url: "https://www.thenewsminute.com/karnataka/delays-debt-disputes-inside-the-saga-of-bengalurus-ejipura-flyover",
      claim: "Original work order issued in May 2017 with November 2019 deadline",
    },
    {
      title: "BBMP finds sole bidder for long-delayed Ejipura flyover on fourth attempt; cost escalation raises concerns",
      outlet: "Swarajya",
      publishedDate: "2023-11-15",
      url: "https://swarajyamag.com/amp/story/infrastructure/bengaluru-bbmp-finds-sole-bidder-for-long-delayed-ejipura-flyover-on-fourth-attempt-cost-escalation-raises-concerns",
      claim: "Revised project estimate around ₹307.96 Cr and sole bidder BSCPL Infrastructure",
    },
    {
      title: "Ejipura flyover status: 2.5 km long project takes shape with new pillars",
      outlet: "OneIndia",
      publishedDate: "2024-05-12",
      url: "https://www.oneindia.com/bengaluru/ejipura-flyover-status-2-5-km-long-project-takes-shape-with-new-pillars-3870279.html",
      claim: "Resumption of physical work and pier casting on ground",
    },
  ],

  officialDocLinks: [
    {
      label: "The News Minute Investigation: Ejipura Flyover",
      url: "https://www.thenewsminute.com/karnataka/delays-debt-disputes-inside-the-saga-of-bengalurus-ejipura-flyover",
      type: "NEWS_REPORT",
    },
    {
      label: "Swarajya Report: Fourth Tender Attempt & ₹307.96 Cr Escalation",
      url: "https://swarajyamag.com/amp/story/infrastructure/bengaluru-bbmp-finds-sole-bidder-for-long-delayed-ejipura-flyover-on-fourth-attempt-cost-escalation-raises-concerns",
      type: "NEWS_REPORT",
    },
  ],
};
