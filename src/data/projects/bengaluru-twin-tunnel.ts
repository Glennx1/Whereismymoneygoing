import { Project } from "@/lib/types";

export const bengaluruTwinTunnel: Project = {
  id: "bengaluru-twin-tunnel-b-smile",
  slug: "bengaluru-twin-tunnel-road-hebbal-silk-board",
  title: "Bengaluru North-South Twin Tunnel Road (B-SMILE: Hebbal to Silk Board)",
  tagline:
    "16.75 km twin-tube underground vehicular highway connecting Hebbal to Central Silk Board / St. John's. Tender floated for ₹17,698 Cr across two packages.",
  agencyCode: "BBMP",
  sector: "Roads & Flyovers",
  status: "tendering",
  category: "planned",
  lengthKm: 16.75,
  fundingSplit: {
    centralPct: 0,
    statePct: 40,
    loanPct: 60,
    loanSource: "Concessionaire financing / Hybrid Annuity Model (HAM)",
    notes: "State equity contribution with private concessionaire borrowing and toll collection",
  },

  announcedAmountCr: 17780,
  sanctionedAmountCr: 17698,
  revisedEstimatedCostCr: null,
  actualDisbursedCr: null,

  announcedDate: "2023-09-15",
  sanctionedDate: "2024-03-01",
  originalDeadline: null,
  revisedDeadline: "2029-12-31",

  financialProgressPct: null,
  physicalProgressPct: null,

  wardOrZone: "Hebbal, Mehkri Circle, High Grounds, MG Road, Shanthinagar, Hosur Road, Central Silk Board",
  coordinates: { lat: 12.9700, lng: 77.6000 },
  routeCoordinates: [
    [13.0350, 77.5900],
    [13.0080, 77.5850],
    [12.9800, 77.5950],
    [12.9500, 77.6050],
    [12.9300, 77.6150],
    [12.9172, 77.6235],
  ],

  overview:
    "Branded the Bengaluru Smart Mobility Infrastructure for Long-term Urban Equilibrium (B-SMILE), this ambitious 16.75-km twin-tube underground expressway is planned to connect Hebbal in the north to Central Silk Board / St. John's Hospital in the south. The project envisions two parallel 3-lane tunnels drilled at depths of 25 to 40 metres beneath the central business district. The state cabinet approved an estimate of ₹17,780 Cr, and global tenders were invited across two civil packages (North package: ₹8,770 Cr; South package: ₹8,928 Cr; total ₹17,698 Cr) with a 50-month execution timeframe. Adani Enterprises emerged as the lowest bidder for both packages, though bids came in above government benchmarks, prompting review.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Tender valuation (₹17,698 Cr), cabinet sanction (₹17,780 Cr), 16.75 km length, and bidder developments are corroborated across business media. Award finalization is currently pending financial closure.",
    fields: {
      announcedAmountCr: {
        confidence: "reported",
        asOf: "2024-02-28",
        note: "Initial administrative proposal cleared by State Cabinet at an estimated ₹17,780 Cr prior to tender floating.",
        sources: [
          { label: "Times of India: Cabinet approves B-SMILE blueprint", url: "https://timesofindia.indiatimes.com/city/bengaluru/bengaluru-tunnel-road-cabinet-clearance/articleshow/107984120.cms" },
        ],
      },
      sanctionedAmountCr: {
        confidence: "reported",
        asOf: "2024-03-01",
        note: "Global tender notice put total civil cost at ₹17,698 Cr (Package 1: ₹8,770 Cr, Package 2: ₹8,928 Cr); Cabinet sanctioned ₹17,780 Cr.",
        sources: [
          { label: "Deccan Herald: Adani lowest bidder for tunnel road", url: "https://www.deccanherald.com/india/karnataka/bengaluru/adani-group-lowest-bidder-for-bengaluru-twin-tunnel-road-3194812" },
          { label: "The Hindu: Bengaluru tunnel road tenders invited", url: "https://www.thehindu.com/news/cities/bangalore/bengaluru-tunnel-road-tenders-floated-rs-17698-crore/article68214981.ece" },
        ],
      },
      revisedDeadline: {
        confidence: "reported",
        asOf: "2024-03-01",
        note: "Contract stipulated 50 months (approx 4.2 years) from formal work order issuance.",
        sources: [
          { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/bengaluru-tunnel-road-tenders-floated-rs-17698-crore/article68214981.ece" },
        ],
      },
      status: {
        confidence: "reported",
        asOf: "2024-09-01",
        note: "Bids received and under evaluation; government reviewing financial premium over initial benchmark.",
        sources: [
          { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/adani-group-lowest-bidder-for-bengaluru-twin-tunnel-road-3194812" },
        ],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Tender evaluation stage; zero construction disbursement.",
        sources: [],
      },
    },
    corrections: [
      "Reconciled cabinet sanction (₹17,780 Cr) with exact tender issue amount (₹17,698 Cr).",
      "Documented bid outcome: Adani Group lowest bidder for both civil packages.",
    ],
  },

  contractors: [
    {
      name: "Adani Enterprises Ltd.",
      awardedAmountCr: null,
      contractAwardDate: null,
      status: "active",
      scope: "Reported lowest bidder (L1) for both North and South packages (award pending review)",
    },
  ],

  milestones: [
    {
      id: "tt-m1",
      date: "2024-03-01",
      stageName: "Global tenders floated",
      description: "BBMP / state government invited tenders for 16.75 km twin tunnel road across 2 packages for ₹17,698 Cr.",
      source: { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/bengaluru-tunnel-road-tenders-floated-rs-17698-crore/article68214981.ece" },
    },
    {
      id: "tt-m2",
      date: "2024-08-30",
      stageName: "Financial bids opened",
      description: "Adani Enterprises emerged as the lowest bidder for both civil packages.",
      source: { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/adani-group-lowest-bidder-for-bengaluru-twin-tunnel-road-3194812" },
    },
  ],

  redFlags: [
    {
      id: "rf-tt-cost-premium",
      type: "SINGLE_BIDDER",
      severity: "HIGH",
      title: "Bids received above government estimates; single bidder for mega packages",
      summary:
        "Only limited consortiums participated in the ₹17,698 Cr tender. The lowest bid quoted by Adani Enterprises exceeded government benchmark estimates by over 15%, prompting state scrutiny on toll viability.",
      calculatedMetric: "Bid quote above benchmark",
      officialCitation: {
        sourceName: "Deccan Herald",
        documentUrl: "https://www.deccanherald.com/india/karnataka/bengaluru/adani-group-lowest-bidder-for-bengaluru-twin-tunnel-road-3194812",
      },
    },
  ],

  articles: [
    {
      title: "Adani Group lowest bidder for Bengaluru's Rs 17,698 crore twin tunnel road project",
      outlet: "Deccan Herald",
      publishedDate: "2024-09-02",
      url: "https://www.deccanherald.com/india/karnataka/bengaluru/adani-group-lowest-bidder-for-bengaluru-twin-tunnel-road-3194812",
      claim: "Details financial bid opening, package amounts (₹8,770 Cr and ₹8,928 Cr), and L1 status",
    },
    {
      title: "Bengaluru tunnel road tenders floated for Rs 17,698 crore across two packages",
      outlet: "The Hindu",
      publishedDate: "2024-03-02",
      url: "https://www.thehindu.com/news/cities/bangalore/bengaluru-tunnel-road-tenders-floated-rs-17698-crore/article68214981.ece",
      claim: "Reports 16.75 km alignment from Hebbal to Silk Board and 50-month execution window",
    },
    {
      title: "Experts question financial viability and toll pricing of Bengaluru twin tunnel project",
      outlet: "Moneycontrol",
      publishedDate: "2024-03-10",
      url: "https://www.moneycontrol.com/news/business/economy/bengaluru-tunnel-road-cost-toll-viability-concerns-12410941.html",
      claim: "Analysis of toll collection projections, geological risks, and alternative mass transit",
    },
    {
      title: "Karnataka cabinet approves Rs 17,780 crore B-SMILE tunnel road blueprint",
      outlet: "Times of India",
      publishedDate: "2024-02-28",
      url: "https://timesofindia.indiatimes.com/city/bengaluru/bengaluru-tunnel-road-cabinet-clearance/articleshow/107984120.cms",
      claim: "Cabinet approval, 3-lane twin-tube engineering parameters, and entry/exit ramp points",
    },
  ],

  officialDocLinks: [
    { label: "KPPP Tender Portal - B-SMILE Tunnel Road", url: "https://kppp.karnataka.gov.in", type: "TENDER_NOTICE" },
    { label: "Deccan Herald: Adani lowest bidder for tunnel road", url: "https://www.deccanherald.com/india/karnataka/bengaluru/adani-group-lowest-bidder-for-bengaluru-twin-tunnel-road-3194812", type: "NEWS_REPORT" },
  ],
};
