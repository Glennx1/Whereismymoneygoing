import { Project } from "@/lib/types";

export const nammaMetroPhase3OrangeLine: Project = {
  id: "namma-metro-phase-3-orange-line",
  slug: "namma-metro-phase-3-orange-line",
  title: "Namma Metro Phase 3 (Orange Line: West ORR & Magadi Road)",
  tagline:
    "44.65 km elevated network across two corridors: JP Nagar 4th Phase to Kempapura along West ORR (32.15 km) and Hosahalli to Kadabagere on Magadi Road (12.5 km). Approved by Union Cabinet for ₹15,611 Cr.",
  agencyCode: "BMRCL",
  sector: "Metro Rail",
  status: "tendering",
  category: "planned",
  lengthKm: 44.65,
  stationsCount: 31,
  stationNames: [
    "JP Nagar 4th Phase",
    "JP Nagar 5th Phase",
    "JP Nagar",
    "Kadirenahalli",
    "Kamakya",
    "Hosakerahalli",
    "Dwaraka Nagar",
    "Mysuru Road",
    "Nagarbhavi Circle",
    "Vinayaka Layout",
    "Dr. Ambedkar Institute of Technology",
    "Nagarbhavi BD Layout",
    "Sumanahalli Cross",
    "Chowdeshwari Nagar",
    "Bhadrappa Layout",
    "Peenya",
    "Bel Circle",
    "Kempapura",
    "Hosahalli",
    "KHB Colony",
    "Kamakshipalya",
    "Sumanahalli",
    "Sunkadakatte",
    "Herohalli",
    "Byadarahalli",
    "Forest Gate",
    "Kadabagere",
  ],
  fundingSplit: {
    centralPct: 20,
    statePct: 35,
    loanPct: 45,
    loanSource: "Japan International Cooperation Agency (JICA) / Multilateral Banks",
    notes: "Total project cost ₹15,611 Cr approved by Union Cabinet; JICA loan approx ₹6,775 Cr",
  },

  announcedAmountCr: null,
  sanctionedAmountCr: 15611,
  revisedEstimatedCostCr: null,
  actualDisbursedCr: null,

  announcedDate: "2022-11-18",
  sanctionedDate: "2024-08-16",
  originalDeadline: "2029-12-31",
  revisedDeadline: "2031-05-31",

  financialProgressPct: null,
  physicalProgressPct: null,

  wardOrZone: "West Outer Ring Road, Peenya, Nagarbhavi, Magadi Road, Kempapura",
  coordinates: { lat: 12.9800, lng: 77.5200 },
  routeCoordinates: [
    [12.9050, 77.5850],
    [12.9200, 77.5400],
    [12.9550, 77.5150],
    [13.0100, 77.5250],
    [13.0450, 77.5920],
  ],

  overview:
    "Namma Metro Phase 3 was formally approved by the Union Cabinet in August 2024 at a total capital outlay of ₹15,611 Cr. Spanning 44.65 km with 31 elevated stations, it comprises two major lines: Corridor 1 (32.15 km) completing the western semi-circle of the Outer Ring Road from JP Nagar 4th Phase to Kempapura/Hebbal, and Corridor 2 (12.5 km) extending along Magadi Road from Hosahalli to Kadabagere. Land acquisition surveys and utility shifting tenders commenced in late 2024, with full commercial opening projected for May 2031.",

  dataQuality: {
    lastAudited: "2026-11-21",
    summary:
      "Cabinet approval figure of ₹15,611 Cr is verified against official PIB notification. Revised completion date of May 2031 confirmed by state government announcements.",
    fields: {
      sanctionedAmountCr: {
        confidence: "verified",
        asOf: "2024-08-16",
        note: "Official Union Cabinet approval under PM Narendra Modi sanctioned ₹15,611 Cr on 16 August 2024.",
        sources: [
          { label: "PIB: Cabinet approves Bangalore Metro Rail Project Phase 3", url: "https://pib.gov.in/PressReleasePage.aspx?PRID=2045952" },
        ],
      },
      originalDeadline: {
        confidence: "reported",
        asOf: "2022-11-18",
        note: "Initial DPR projected completion within 5 years (by late 2029).",
        sources: [
          { label: "The Hindu: Phase 3 DPR cleared by state cabinet", url: "https://www.thehindu.com/news/cities/bangalore/karnataka-cabinet-clears-phase-3-namma-metro/article66150241.ece" },
        ],
      },
      revisedDeadline: {
        confidence: "reported",
        asOf: "2024-08-16",
        note: "Union Cabinet notice and BMRCL revised timeline set completion target to May 2031 (84 months from sanction).",
        sources: [
          { label: "PIB Official Notification", url: "https://pib.gov.in/PressReleasePage.aspx?PRID=2045952" },
          { label: "Deccan Herald: Phase 3 timeline set for 2031", url: "https://www.deccanherald.com/india/karnataka/bengaluru/namma-metro-phase-3-gets-cabinet-nod-targeted-for-2031-3153912" },
        ],
      },
      status: {
        confidence: "reported",
        asOf: "2024-10-15",
        note: "Approved by Centre; pre-construction land survey and geotechnical investigation underway.",
        sources: [
          { label: "The Metro Rail Guy: Phase 3 status", url: "https://themetrorailguy.com/bangalore-metro-phase-3-information-map/" },
        ],
      },
      actualDisbursedCr: {
        confidence: "unverified",
        asOf: "2026-11-21",
        note: "No capital disbursements made yet prior to civil contract award.",
        sources: [],
      },
    },
    corrections: [
      "Updated project record with official August 2024 Union Cabinet sanction.",
    ],
  },

  contractors: [],
  contractorsNote:
    "Civil packages are currently being prepared for global competitive bidding.",

  milestones: [
    {
      id: "p3-m1",
      date: "2022-11-18",
      stageName: "Karnataka State Cabinet approval",
      description: "State cabinet approved DPR for 44.65 km Phase 3 at ₹16,328 Cr (including double-decker provisions).",
      source: { label: "The Hindu", url: "https://www.thehindu.com/news/cities/bangalore/karnataka-cabinet-clears-phase-3-namma-metro/article66150241.ece" },
    },
    {
      id: "p3-m2",
      date: "2024-08-16",
      stageName: "Union Cabinet sanction granted",
      description: "Cabinet Committee on Economic Affairs (CCEA) approved Phase 3 at ₹15,611 Cr with central equity funding.",
      source: { label: "PIB", url: "https://pib.gov.in/PressReleasePage.aspx?PRID=2045952" },
    },
  ],

  redFlags: [],

  articles: [
    {
      title: "Cabinet approves Bangalore Metro Rail Project Phase-3",
      outlet: "Press Information Bureau (PIB)",
      publishedDate: "2024-08-16",
      url: "https://pib.gov.in/PressReleasePage.aspx?PRID=2045952",
      claim: "Official approval of ₹15,611 Cr project cost, 44.65 km length, and 31 stations",
      isOfficial: true,
    },
    {
      title: "Namma Metro Phase 3 gets Cabinet nod; targeted for completion by 2031",
      outlet: "Deccan Herald",
      publishedDate: "2024-08-17",
      url: "https://www.deccanherald.com/india/karnataka/bengaluru/namma-metro-phase-3-gets-cabinet-nod-targeted-for-2031-3153912",
      claim: "Reports 2031 target date, multi-modal integration at Peenya and Mysuru Road",
    },
    {
      title: "Bangalore Metro Phase 3 Information, Routes and Station List",
      outlet: "The Metro Rail Guy",
      publishedDate: "2024-08-20",
      url: "https://themetrorailguy.com/bangalore-metro-phase-3-information-map/",
      claim: "Detailed station locations, alignment map, and tender packaging breakdown",
    },
    {
      title: "State govt to explore double-decker flyovers on Phase 3 metro corridors",
      outlet: "The Hindu",
      publishedDate: "2024-08-25",
      url: "https://www.thehindu.com/news/cities/bangalore/double-decker-metro-flyover-phase-3/article68564120.ece",
      claim: "Discusses integrated road-cum-rail double-decker flyover plans on West ORR",
    },
  ],

  officialDocLinks: [
    { label: "PIB: Union Cabinet Phase 3 Sanction Order", url: "https://pib.gov.in/PressReleasePage.aspx?PRID=2045952", type: "GOVERNMENT_ORDER" },
    { label: "BMRCL Phase 3 Overview", url: "https://english.bmrc.co.in", type: "BMRCL_REPORT" },
  ],
};
