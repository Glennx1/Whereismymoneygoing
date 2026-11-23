import { Project } from "@/lib/types";

export const hebbalFlyoverNewLoop: Project = {
  id: "hebbal-flyover-new-loop",
  slug: "hebbal-flyover-new-loop-kr-puram-mekhri",
  title: "Hebbal Flyover Capacity Expansion: KR Puram to Mekhri Circle Loop",
  tagline:
    "700-metre unidirectional 2-lane flyover ramp constructed by BDA to ease bottlenecks from KR Puram onto Ballari Road towards the city centre. Commissioned in 2024.",
  agencyCode: "BDA",
  sector: "Roads & Flyovers",
  status: "completed",
  category: "completed",
  lengthKm: 0.7,

  announcedAmountCr: null,
  sanctionedAmountCr: 80,
  revisedEstimatedCostCr: null,
  actualDisbursedCr: null,

  announcedDate: "2023-01-10",
  sanctionedDate: "2023-03-15",
  originalDeadline: "2024-04-30",
  revisedDeadline: "2024-08-31",
  completionDate: "2024-08-31",

  financialProgressPct: null,
  physicalProgressPct: 100,

  wardOrZone: "Hebbal, North Bengaluru",
  coordinates: { lat: 13.0358, lng: 77.5970 },
  routeCoordinates: [
    [13.0380, 77.6010],
    [13.0358, 77.5970],
    [13.0320, 77.5900],
  ],

  overview:
    "Constructed by the Bangalore Development Authority (BDA) at an estimated cost of ₹80 Cr, this 700-metre 2-lane unidirectional flyover ramp bypasses the congested ground-level junction at Hebbal for vehicles moving from the KR Puram/Nagawara side onto Ballari Road towards Mekhri Circle and Bengaluru city centre. It opened to regular vehicular traffic in late 2024, providing substantial relief to the notorious Hebbal junction bottleneck.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Cost (₹80 Cr), ramp length (700m), and 2024 opening are confirmed across multiple Bangalore news reports. The second arm (towards the airport) was planned under a separate phase.",
    fields: {
      sanctionedAmountCr: {
        confidence: "reported",
        asOf: "2023-03-15",
        note: "Estimated and sanctioned at approximately ₹80 Cr by BDA.",
        sources: [
          { label: "Deccan Herald: Hebbal new ramp status", url: "https://www.deccanherald.com/india/karnataka/bengaluru/new-ramp-at-hebbal-flyover-set-to-open-3142981" },
        ],
      },
      revisedDeadline: {
        confidence: "reported",
        asOf: "2024-08-31",
        note: "Opened to traffic in late August 2024.",
        sources: [
          { label: "The Hindu: New loop opens at Hebbal", url: "https://www.thehindu.com/news/cities/bangalore/new-ramp-at-hebbal-flyover-opened-for-traffic/article68582910.ece" },
        ],
      },
      physicalProgressPct: {
        confidence: "reported",
        asOf: "2024-08-31",
        note: "100% completed and open to vehicles.",
        sources: [
          { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/new-ramp-at-hebbal-flyover-opened-for-traffic/article68582910.ece" },
        ],
      },
      contractors: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Concessionaire details not named in open news releases; executed under BDA engineering supervision.",
        sources: [],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "BDA contract disbursements not published in open budget accounts.",
        sources: [],
      },
    },
    corrections: [
      "Added project as completed following August 2024 commissioning.",
    ],
  },

  contractors: [],
  contractorsNote:
    "Built under Bangalore Development Authority (BDA) engineering works department.",

  milestones: [
    {
      id: "hfl-m1",
      date: "2023-03-15",
      stageName: "Construction started",
      description: "BDA initiated piling and pier casting work on the 2-lane ramp.",
      source: { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/new-ramp-at-hebbal-flyover-set-to-open-3142981" },
    },
    {
      id: "hfl-m2",
      date: "2024-08-31",
      stageName: "Opened for vehicular traffic",
      description: "Commissioned to alleviate traffic coming from KR Puram towards city centre.",
      source: { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/new-ramp-at-hebbal-flyover-opened-for-traffic/article68582910.ece" },
    },
  ],

  redFlags: [],

  articles: [
    {
      title: "New ramp at Hebbal flyover opened for traffic, easing choke point from KR Puram",
      outlet: "The Hindu",
      publishedDate: "2024-08-31",
      url: "https://www.thehindu.com/news/cities/bangalore/new-ramp-at-hebbal-flyover-opened-for-traffic/article68582910.ece",
      claim: "Confirms opening of 700m 2-lane loop ramp and traffic diversion impact",
    },
    {
      title: "New ramp at Hebbal flyover set to open, bringing relief to motorists",
      outlet: "Deccan Herald",
      publishedDate: "2024-08-20",
      url: "https://www.deccanherald.com/india/karnataka/bengaluru/new-ramp-at-hebbal-flyover-set-to-open-3142981",
      claim: "Reports ₹80 Cr estimated cost and structural dimensions",
    },
    {
      title: "Hebbal junction expansion works enter final lap",
      outlet: "Times of India",
      publishedDate: "2024-07-15",
      url: "https://timesofindia.indiatimes.com/city/bengaluru/hebbal-flyover-ramp-ready/articleshow/111756402.cms",
      claim: "Details load testing and alignment checks prior to inauguration",
    },
    {
      title: "BDA plans second arm at Hebbal to facilitate smoother traffic flow",
      outlet: "The New Indian Express",
      publishedDate: "2024-09-05",
      url: "https://www.newindianexpress.com/cities/bengaluru/2024/Sep/05/bda-plans-second-arm-at-hebbal-to-facilitate-traffic-flow",
      claim: "Contextualizes new loop within broader multi-tier Hebbal revamp",
    },
  ],

  officialDocLinks: [
    { label: "BDA Official Website", url: "https://bdakarnataka.in", type: "NEWS_REPORT" },
    { label: "The Hindu: Hebbal ramp opened", url: "https://www.thehindu.com/news/cities/bangalore/new-ramp-at-hebbal-flyover-opened-for-traffic/article68582910.ece", type: "NEWS_REPORT" },
  ],
};
