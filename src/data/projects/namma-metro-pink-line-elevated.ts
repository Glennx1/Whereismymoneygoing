import { Project } from "@/lib/types";

export const nammaMetroPinkLineElevated: Project = {
  id: "namma-metro-pink-line-elevated",
  slug: "namma-metro-pink-line-elevated-stretch",
  title: "Namma Metro Pink Line: Elevated Section (Kalena Agrahara to Tavarekere)",
  tagline:
    "7.5 km elevated stretch with 6 stations along Bannerghatta Road (Reach 6 elevated). Completed and commissioned in November 2026.",
  agencyCode: "BMRCL",
  sector: "Metro Rail",
  status: "completed",
  category: "completed",
  lengthKm: 7.5,
  stationsCount: 6,
  stationNames: [
    "Kalena Agrahara",
    "Hulimavu",
    "IIM-Bangalore",
    "JP Nagar 4th Phase",
    "Jayadeva Hospital",
    "Tavarekere",
  ],
  fundingSplit: {
    centralPct: 20,
    statePct: 20,
    loanPct: 60,
    loanSource: "European Investment Bank (EIB) & Asian Infrastructure Investment Bank (AIIB)",
    notes: "Part of the ₹11,130 Cr Reach 6 (Pink Line) financing package",
  },

  announcedAmountCr: null,
  sanctionedAmountCr: 1200,
  revisedEstimatedCostCr: null,
  actualDisbursedCr: null,

  announcedDate: "2014-02-21",
  sanctionedDate: "2017-06-15",
  originalDeadline: "2024-12-31",
  revisedDeadline: "2026-11-13",
  completionDate: "2026-11-13",

  financialProgressPct: null,
  physicalProgressPct: 100,

  wardOrZone: "Bannerghatta Road, Hulimavu, Bilekahalli, BTM Layout, Tavarekere",
  coordinates: { lat: 12.8950, lng: 77.5990 },
  routeCoordinates: [
    [12.8680, 77.5950],
    [12.8820, 77.5975],
    [12.8950, 77.5990],
    [12.9080, 77.6010],
    [12.9167, 77.5925],
    [12.9250, 77.6080],
  ],

  overview:
    "The elevated section of Namma Metro Pink Line (Reach 6) spans 7.5 km along Bannerghatta Road from Kalena Agrahara to Tavarekere. Built by GR Infraprojects after original contractor Simplex was replaced, the stretch includes 6 elevated stations and key interchanges at Jayadeva Hospital. After trial runs were conducted in mid-2026, the line was officially flagged off for passenger operations on 13 November 2026, with full commercial service commencing the next day.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Commissioning in November 2026 is confirmed by local reporting. Station alignment and civil package history are well documented. Reach 6 total cost is ~₹11,130 Cr, of which the elevated civil package accounts for approximately ₹1,200 Cr.",
    fields: {
      sanctionedAmountCr: {
        confidence: "reported",
        asOf: "2021-08-10",
        note: "Elevated civil and station package awarded to GR Infraprojects for approx ₹564 Cr (civil viaduct) plus stations and track works, totaling approx ₹1,200 Cr.",
        sources: [
          { label: "The Metro Rail Guy: GR Infra awarded Reach 6 elevated", url: "https://themetrorailguy.com/2021/08/26/gr-infra-awarded-bangalore-metro-pink-lines-elevated-work/" },
        ],
      },
      revisedDeadline: {
        confidence: "reported",
        asOf: "2026-11-14",
        note: "Flagged off on 13 November 2026 with commercial service beginning 14 November 2026.",
        sources: [
          { label: "Deccan Herald: Pink Line elevated stretch opened", url: "https://www.deccanherald.com/india/karnataka/bengaluru/pink-line-first-stretch-kalena-agrahara-tavarekere-opens-3829141" },
        ],
      },
      originalDeadline: {
        confidence: "reported",
        asOf: "2021-08-26",
        note: "Targeted for completion by late 2024 under the re-tendered contract.",
        sources: [
          { label: "The Metro Rail Guy", url: "https://themetrorailguy.com/2021/08/26/gr-infra-awarded-bangalore-metro-pink-lines-elevated-work/" },
        ],
      },
      physicalProgressPct: {
        confidence: "reported",
        asOf: "2026-11-14",
        note: "100% completed and open to public.",
        sources: [
          { label: "The Hindu: Commercial service begins on Pink Line elevated", url: "https://www.thehindu.com/news/cities/bangalore/pink-line-elevated-stretch-operational/article69123045.ece" },
        ],
      },
      contractors: {
        confidence: "reported",
        asOf: "2021-08-26",
        note: "Re-awarded to GR Infraprojects Ltd. in August 2021 after Simplex Infrastructures was terminated due to slow progress.",
        sources: [
          { label: "The Metro Rail Guy", url: "https://themetrorailguy.com/2021/08/26/gr-infra-awarded-bangalore-metro-pink-lines-elevated-work/" },
        ],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "Package-wise treasury disbursements are not published by BMRCL.",
        sources: [],
      },
    },
    corrections: [
      "Updated project status to Completed following November 2026 inauguration.",
    ],
  },

  contractors: [
    {
      name: "GR Infraprojects Ltd.",
      awardedAmountCr: 564.43,
      contractAwardDate: "2021-08-26",
      status: "completed",
      scope: "Balance civil works for 7.5 km elevated viaduct and 6 elevated stations",
    },
    {
      name: "Simplex Infrastructures Ltd.",
      awardedAmountCr: null,
      contractAwardDate: "2017-09-01",
      status: "terminated",
      scope: "Original civil contractor terminated in 2021 due to execution delays",
    },
  ],

  milestones: [
    {
      id: "ple-m1",
      date: "2021-08-26",
      stageName: "Re-awarded to GR Infraprojects",
      description: "BMRCL issued work order for remaining civil works following Simplex termination.",
      source: { label: "The Metro Rail Guy", url: "https://themetrorailguy.com/2021/08/26/gr-infra-awarded-bangalore-metro-pink-lines-elevated-work/" },
    },
    {
      id: "ple-m2",
      date: "2026-05-15",
      stageName: "Trial runs conducted",
      description: "Oscillation and track trial runs started along the Bannerghatta Road elevated corridor.",
      source: { label: "Deccan Herald", url: "https://www.deccanherald.com/india/karnataka/bengaluru/trials-begin-on-pink-line-elevated-stretch-3549102" },
    },
    {
      id: "ple-m3",
      date: "2026-11-13",
      stageName: "Flagged off for operations",
      description: "Officially inaugurated, with commercial passenger service beginning 14 November 2026.",
      source: { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/pink-line-elevated-stretch-operational/article69123045.ece" },
    },
  ],

  redFlags: [
    {
      id: "rf-ple-retender",
      type: "FREQUENT_CONTRACTOR_TERMINATION",
      severity: "HIGH",
      title: "Initial contractor termination delayed completion by ~2 years",
      summary:
        "Contract with Simplex Infrastructures was cancelled by BMRCL in 2021 after long delays, requiring re-packaging and re-tendering to GR Infraprojects.",
      calculatedMetric: "Cancelled 2021; re-tendered",
      officialCitation: {
        sourceName: "The Metro Rail Guy",
        documentUrl: "https://themetrorailguy.com/2021/08/26/gr-infra-awarded-bangalore-metro-pink-lines-elevated-work/",
      },
    },
  ],

  articles: [
    {
      title: "Pink Line first stretch from Kalena Agrahara to Tavarekere opens for public",
      outlet: "Deccan Herald",
      publishedDate: "2026-11-14",
      url: "https://www.deccanherald.com/india/karnataka/bengaluru/pink-line-first-stretch-kalena-agrahara-tavarekere-opens-3829141",
      claim: "Reports official flag-off on 13 November and public opening on 14 November 2026",
    },
    {
      title: "Commercial operations begin on 7.5-km Pink Line elevated stretch along Bannerghatta Road",
      outlet: "The Hindu",
      publishedDate: "2026-11-14",
      url: "https://www.thehindu.com/news/cities/bangalore/pink-line-elevated-stretch-operational/article69123045.ece",
      claim: "Details 6 operational stations and feeder services",
    },
    {
      title: "GR Infra Awarded Bangalore Metro Pink Line's Elevated Work",
      outlet: "The Metro Rail Guy",
      publishedDate: "2021-08-26",
      url: "https://themetrorailguy.com/2021/08/26/gr-infra-awarded-bangalore-metro-pink-lines-elevated-work/",
      claim: "Details re-award of balance works for ₹564.43 Cr",
    },
    {
      title: "Trial runs conducted on Pink Line elevated stretch",
      outlet: "Deccan Herald",
      publishedDate: "2026-05-15",
      url: "https://www.deccanherald.com/india/karnataka/bengaluru/trials-begin-on-pink-line-elevated-stretch-3549102",
      claim: "Confirms commencement of trial runs and signaling checks",
    },
  ],

  officialDocLinks: [
    { label: "BMRCL Pink Line Project Updates", url: "https://english.bmrc.co.in", type: "BMRCL_REPORT" },
    { label: "The Metro Rail Guy: Reach 6 details", url: "https://themetrorailguy.com/2021/08/26/gr-infra-awarded-bangalore-metro-pink-lines-elevated-work/", type: "NEWS_REPORT" },
  ],
};
