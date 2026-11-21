import { Project } from "@/lib/types";

/**
 * PHASE 0 AUDIT (2026-11-21)
 *
 * The original version of this file was typed by hand with no sources, and
 * many figures, contractor names, court citations and payment amounts could
 * not be traced. Every value below is either:
 *   - backed by a source listed in `dataQuality.fields` (confidence "reported"
 *     = news/third-party, "verified" = primary official document), or
 *   - null, meaning "no confirmed figure yet".
 *
 * Nothing here has been matched to a primary government document yet, so no
 * field is marked "verified". That is the goal of Phase 1-3.
 *
 * Rule: never put a number in this file without a source. If you can't source
 * it, leave it null.
 */

const AUDIT_DATE = "2026-11-21";

export const projects: Project[] = [
  // ---------------------------------------------------------------------
  // 1. EJIPURA FLYOVER
  // ---------------------------------------------------------------------
  {
    id: "ejipura-flyover",
    slug: "ejipura-koramangala-flyover",
    title: "Ejipura - Koramangala Elevated Corridor (Sony World Flyover)",
    tagline:
      "2.5 km flyover at Ejipura / Sony World junction, Koramangala. Work order issued in 2017 with a November 2019 deadline; still being completed.",
    agencyCode: "BBMP",
    sector: "Roads & Flyovers",
    status: "under_construction",

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

    overview:
      "A 2.5 km flyover meant to ease traffic at the Ejipura / Sony World junction. The work was first awarded to Simplex Infrastructures in 2017 with a November 2019 deadline. The original contract was cancelled in March 2022 and the remaining work was re-tendered; reports say BSCPL Infrastructure was the sole bidder on the fourth attempt. Reported causes of delay include late payments to the contractor, transfer of defence and private land, and encroachments by 46 private buildings and 3 government properties. Recent reports give several different completion promises (June 2026, July 2026, December 2026), so the current target is unclear.",

    dataQuality: {
      lastAudited: AUDIT_DATE,
      summary:
        "Contractor history, the 2019 deadline and the ~₹308 Cr latest cost are reported in several news stories. The original sanctioned cost is reported three different ways. Amounts paid are not published.",
      fields: {
        revisedEstimatedCostCr: {
          confidence: "reported",
          note: "Reports put the latest cost at about ₹307.96 Cr, roughly ₹104 Cr above the earlier figure. The original cost is reported as ₹158 Cr, ₹204 Cr and ₹252 Cr by different outlets, so we do not show an 'approved budget' until a primary document settles it.",
          sources: [
            { label: "Swarajya: BBMP finds sole bidder on fourth attempt", url: "https://swarajyamag.com/amp/story/infrastructure/bengaluru-bbmp-finds-sole-bidder-for-long-delayed-ejipura-flyover-on-fourth-attempt-cost-escalation-raises-concerns" },
            { label: "The News Minute: inside the saga of the Ejipura flyover", url: "https://www.thenewsminute.com/karnataka/delays-debt-disputes-inside-the-saga-of-bengalurus-ejipura-flyover" },
          ],
        },
        originalDeadline: {
          confidence: "reported",
          note: "Work order issued in May 2017 with a November 2019 completion deadline.",
          sources: [
            { label: "The News Minute: inside the saga of the Ejipura flyover", url: "https://www.thenewsminute.com/karnataka/delays-debt-disputes-inside-the-saga-of-bengalurus-ejipura-flyover" },
          ],
        },
        revisedDeadline: {
          confidence: "unverified",
          note: "Conflicting promises: June 2026 (Deputy CM), end of July (GBA chief commissioner), December 2026 (later report). No confirmed current target.",
          sources: [
            { label: "Deccan Herald: June 2026 promise", url: "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Fdycm-dk-shivakumar-promises-completion-of-long-delayed-ejipura-flyover-by-june-2026-3769909" },
            { label: "The News Minute: GBA sets July deadline", url: "https://www.thenewsminute.com/karnataka/after-years-of-delays-gba-sets-july-deadline-to-finish-bengalurus-ejipura-flyover" },
          ],
        },
        contractors: {
          confidence: "reported",
          note: "Simplex (original, cancelled 2022) and BSCPL (re-tender). Contract values were not found in any source.",
          sources: [
            { label: "Deccan Herald: BBMP weighs terminating contract", url: "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Fbbmp-weighs-terminating-contract-as-ejipura-flyover-faces-continued-delays-3341865" },
          ],
        },
        actualDisbursedCr: {
          confidence: "unverified",
          note: "No published figure for money paid. Earlier versions showed ₹142.5 Cr, which could not be sourced.",
          sources: [],
        },
        status: {
          confidence: "unverified",
          note: "Reports describe ongoing pillar and structure work, but also tender cancellation risk. Earlier version said 'stalled'.",
          sources: [
            { label: "OneIndia: structure takes shape with new pillars", url: "https://www.oneindia.com/bengaluru/ejipura-flyover-status-2-5-km-long-project-takes-shape-with-new-pillars-3870279.html" },
          ],
        },
      },
      corrections: [
        "Removed ₹142.5 Cr 'paid out', 46% financial and 42% physical progress: no source.",
        "Removed ₹204 Cr 'sanctioned' as a single figure: sources disagree (₹158 / ₹204 / ₹252 Cr).",
        "Removed contract values (₹204 Cr, ₹144.9 Cr), tender IDs, the ₹10.2 Cr bank guarantee and the '38 of 67 piers' detail: no source found.",
        "Removed red flags citing 'Karnataka High Court WP 12948/2021', 'BBMP Resolution 441/2023' and a CAG paragraph: citations could not be traced and links pointed to generic homepages.",
        "Corrected the Simplex work-order date to May 2017 (was 15 May).",
        "BBMP has been replaced by the Greater Bengaluru Authority (GBA) in recent reports; the agency label needs updating.",
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
        severity: "CRITICAL",
        title: "Years past the original November 2019 deadline",
        summary:
          "The flyover was due in November 2019 and is still being built. Several different new completion dates have been announced.",
        calculatedMetric: "Original deadline Nov 2019; still incomplete",
        officialCitation: {
          sourceName: "Deccan Herald",
          documentUrl: "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Fbbmp-weighs-terminating-contract-as-ejipura-flyover-faces-continued-delays-3341865",
        },
      },
      {
        id: "rf-eji-cost",
        type: "COST_OVERRUN",
        severity: "HIGH",
        title: "Cost reported at about ₹308 Cr after contractor change",
        summary:
          "Re-tendering after the first contractor left pushed the reported cost up by roughly ₹104 Cr. The original cost is reported inconsistently across outlets.",
        calculatedMetric: "About ₹104 Cr higher (reported)",
        officialCitation: {
          sourceName: "Swarajya",
          documentUrl: "https://swarajyamag.com/amp/story/infrastructure/bengaluru-bbmp-finds-sole-bidder-for-long-delayed-ejipura-flyover-on-fourth-attempt-cost-escalation-raises-concerns",
        },
      },
    ],

    citizenReports: [],

    officialDocLinks: [
      { label: "Deccan Herald: High Court asks BBMP when the flyover will be ready", url: "https://www.deccanherald.com/india/karnataka/bengaluru/tell-us-when-ejipura-flyover-will-be-ready-hc-pulls-up-bbmp-over-delay-1070345.html", type: "NEWS_REPORT" },
      { label: "The News Minute: delays, debt, disputes", url: "https://www.thenewsminute.com/karnataka/delays-debt-disputes-inside-the-saga-of-bengalurus-ejipura-flyover", type: "NEWS_REPORT" },
    ],
  },

  // ---------------------------------------------------------------------
  // 2. NAMMA METRO PHASE 2A
  // ---------------------------------------------------------------------
  {
    id: "namma-metro-phase-2a",
    slug: "namma-metro-phase-2a-outer-ring-road",
    title: "Namma Metro Phase 2A (Outer Ring Road: Silk Board to KR Puram)",
    tagline:
      "19.75 km elevated metro line along the Outer Ring Road (Blue Line, part 1). Latest reports target full opening around December 2027, with trial runs earlier.",
    agencyCode: "BMRCL",
    sector: "Metro Rail",
    status: "under_construction",

    announcedAmountCr: null,
    sanctionedAmountCr: 5227.35,
    revisedEstimatedCostCr: null,
    actualDisbursedCr: null,

    announcedDate: null,
    sanctionedDate: null,
    originalDeadline: null,
    revisedDeadline: "2027-12-31",

    financialProgressPct: null,
    physicalProgressPct: 87,

    wardOrZone: "Outer Ring Road: Silk Board, Bellandur, Marathahalli, KR Puram",
    coordinates: { lat: 12.9237, lng: 77.6835 },

    overview:
      "Elevated metro line from Central Silk Board to KR Puram along the Outer Ring Road, built in two civil packages. Together with Phase 2B (KR Puram to the airport) it forms the Blue Line, approved at about ₹14,788 Cr combined. Trial runs were expected from October 2026, but reports say some stations (Marathahalli, Silk Board) will be delayed by pending work.",

    dataQuality: {
      lastAudited: AUDIT_DATE,
      summary:
        "Cost, progress and target date each rest on one or two news/third-party sources and sources disagree on cost. No official BMRCL document has been matched yet. Amounts paid are not published.",
      fields: {
        sanctionedAmountCr: {
          confidence: "reported",
          note: "One tracker site lists ₹5,227.35 Cr for Phase 2A. The combined Phase 2A + 2B approval is reported at ₹14,788.10 Cr. Per-phase cost split has not been matched to the approval document.",
          sources: [
            { label: "The Metro Rail Guy: Phase 2A", url: "https://themetrorailguy.com/bangalore-metro-phase-2a-information-map/" },
            { label: "NBM&CW: MPC approves ₹14,788.10 Cr expansion", url: "https://www.nbmcw.com/news/mpc-approves-14-788-10-cr-namma-metro-expansion.html" },
          ],
        },
        revisedEstimatedCostCr: {
          confidence: "unverified",
          note: "Deccan Herald reports Phase 2 delays pushed costs up by about ₹10,000 Cr programme-wide, but no 2A-specific revised cost was found.",
          sources: [
            { label: "Deccan Herald: Phase 2 delays push up cost", url: "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-metro-phase-2-delays-push-up-cost-by-rs-10000-cr-3307265" },
          ],
        },
        revisedDeadline: {
          confidence: "reported",
          note: "Recent reports say the Silk Board to KR Puram section has been pushed to December 2027; trial runs were expected from October 2026. The original target is reported as FY 2023-24 (month not confirmed), so no delay length is shown.",
          sources: [
            { label: "OneIndia: Blue Line to open by December 2027", url: "https://www.oneindia.com/bengaluru/namma-metro-blue-line-bengaluru-s-silk-board-to-airport-route-to-open-by-december-2027-7854863.html" },
            { label: "Construction World: trials by October end", url: "https://www.constructionworld.in/amp/transport-infrastructure/metro-rail-and-railways-infrastructure/kr-puram-silk-board-metro-trials-set-to-begin-by-october-end/99490" },
          ],
        },
        physicalProgressPct: {
          confidence: "reported",
          note: "Reported overall construction progress of about 87% (as of the trial-run report).",
          sources: [
            { label: "Construction World: trials by October end", url: "https://www.constructionworld.in/amp/transport-infrastructure/metro-rail-and-railways-infrastructure/kr-puram-silk-board-metro-trials-set-to-begin-by-october-end/99490" },
          ],
        },
        contractors: {
          confidence: "reported",
          note: "Afcons is listed for the Silk Board package (viaduct, six stations, Silk Board flyover). The contractor for the second package (Kadubeesanahalli to KR Puram) was not confirmed. The earlier version named Shankaranarayana Constructions (SNC) here; that appears to be the Peripheral Ring Road contractor instead.",
          sources: [
            { label: "The Metro Rail Guy: Phase 2A", url: "https://themetrorailguy.com/bangalore-metro-phase-2a-information-map/" },
          ],
        },
        actualDisbursedCr: {
          confidence: "unverified",
          note: "No published figure. Earlier version showed ₹3,410 Cr, which could not be sourced.",
          sources: [],
        },
        status: {
          confidence: "reported",
          note: "Under construction with trial runs planned.",
          sources: [
            { label: "Construction World", url: "https://www.constructionworld.in/amp/transport-infrastructure/metro-rail-and-railways-infrastructure/kr-puram-silk-board-metro-trials-set-to-begin-by-october-end/99490" },
          ],
        },
      },
      corrections: [
        "Replaced the contractor (SNC, ₹1,530 Cr) with Afcons; SNC is linked to the Peripheral Ring Road package.",
        "Removed ₹6,550 Cr revised cost, ₹4,202 Cr announced and ₹5,998 Cr sanctioned: sources show ₹5,227 Cr (2A) and ₹14,788 Cr (2A + 2B).",
        "Changed the deadline from June 2026 to December 2027 per latest reports.",
        "Removed ₹3,410 Cr 'paid out', 52% financial progress, all milestone payment amounts and the '₹552 Cr price escalation claims' flag: no source.",
        "Removed the 'Union Cabinet Approval April 2021 for ₹5,998 Cr' milestone: date and figure could not be confirmed.",
      ],
    },

    contractors: [
      {
        name: "Afcons Infrastructure Ltd.",
        awardedAmountCr: null,
        contractAwardDate: null,
        status: "active",
        scope: "Silk Board package: 9.859 km viaduct, six elevated stations, Silk Board flyover",
      },
    ],
    contractorsNote:
      "The contractor for the second civil package (Kadubeesanahalli to KR Puram) has not been confirmed yet. Contract values are not shown because no source was found.",

    milestones: [
      {
        id: "2a-m1",
        date: "2021-12-17",
        stageName: "RITES appointed project management consultant (Phases 2A and 2B)",
        description: "RITES awarded the PMC contract for the civil works.",
        source: { label: "The Metro Rail Guy", url: "https://themetrorailguy.com/2021/12/17/rites-awarded-bangalore-metro-phase-2a-2bs-pmc-contract/" },
      },
      {
        id: "2a-m2",
        date: "2023-06-05",
        stageName: "L&T awarded track work (Phases 2A and 2B)",
        description: "Track work contracts for both phases awarded to L&T.",
        source: { label: "The Metro Rail Guy", url: "https://themetrorailguy.com/2023/06/05/lt-awarded-bangalore-metro-phase-2a-2bs-track-work-contracts/" },
      },
    ],

    redFlags: [
      {
        id: "rf-2a-delay",
        type: "TIMELINE_DELAY",
        severity: "MEDIUM",
        title: "Completion pushed to around December 2027",
        summary:
          "Silk Board to KR Puram was reported to open earlier; recent reports say the full line has been pushed to December 2027, with some stations delayed by pending work.",
        calculatedMetric: "Target now Dec 2027 (reported)",
        officialCitation: {
          sourceName: "OneIndia",
          documentUrl: "https://www.oneindia.com/bengaluru/namma-metro-blue-line-bengaluru-s-silk-board-to-airport-route-to-open-by-december-2027-7854863.html",
        },
      },
      {
        id: "rf-2a-cost",
        type: "COST_OVERRUN",
        severity: "MEDIUM",
        title: "Namma Metro Phase 2 delays raised costs by about ₹10,000 Cr",
        summary:
          "Deccan Herald reports that delays across Phase 2 (all lines, not only 2A) added roughly ₹10,000 Cr to costs. The share belonging to this line is not published.",
        calculatedMetric: "~₹10,000 Cr across Phase 2 (programme-wide)",
        officialCitation: {
          sourceName: "Deccan Herald",
          documentUrl: "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-metro-phase-2-delays-push-up-cost-by-rs-10000-cr-3307265",
        },
      },
    ],

    citizenReports: [],

    officialDocLinks: [
      { label: "The Metro Rail Guy: Phase 2A tenders & updates", url: "https://themetrorailguy.com/bangalore-metro-phase-2a-information-map/", type: "NEWS_REPORT" },
      { label: "NBM&CW: ₹14,788.10 Cr Namma Metro expansion approved", url: "https://www.nbmcw.com/news/mpc-approves-14-788-10-cr-namma-metro-expansion.html", type: "NEWS_REPORT" },
    ],
  },

  // ---------------------------------------------------------------------
  // 3. NAMMA METRO PHASE 2B
  // ---------------------------------------------------------------------
  {
    id: "namma-metro-phase-2b",
    slug: "namma-metro-phase-2b-airport-line",
    title: "Namma Metro Phase 2B (Airport Line: KR Puram to Kempegowda Airport)",
    tagline:
      "About 37 to 38 km elevated line from KR Puram via Hebbal to the airport (Blue Line, part 2). Latest reports target December 2027.",
    agencyCode: "BMRCL",
    sector: "Metro Rail",
    status: "under_construction",

    announcedAmountCr: null,
    sanctionedAmountCr: 9617,
    revisedEstimatedCostCr: null,
    actualDisbursedCr: null,

    announcedDate: null,
    sanctionedDate: null,
    originalDeadline: null,
    revisedDeadline: "2027-12-31",

    financialProgressPct: null,
    physicalProgressPct: 72,

    wardOrZone: "KR Puram, Hebbal, Yelahanka, Kempegowda Airport",
    coordinates: { lat: 13.0827, lng: 77.6006 },

    overview:
      "Elevated line connecting KR Puram to Kempegowda International Airport, built in three civil packages. NCC Ltd. was the lowest bidder for all three packages (about 15 of the 17 stations). RITES is the project management consultant. An earlier report warned the line might miss a June 2027 target; the latest reports say December 2027.",

    dataQuality: {
      lastAudited: AUDIT_DATE,
      summary:
        "Contractor and December 2027 target are consistently reported. The cost is an older third-party estimate that does not add up exactly with the combined ₹14,788 Cr approval. Amounts paid are not published.",
      fields: {
        sanctionedAmountCr: {
          confidence: "reported",
          note: "A tracker site gives about ₹9,617 Cr for Phase 2B alone; the combined 2A + 2B approval is reported at ₹14,788.10 Cr. The two do not reconcile exactly. Treat as indicative until matched to the approval document.",
          sources: [
            { label: "The Metro Rail Guy: Phase 2B", url: "https://themetrorailguy.com/bangalore-metro-phase-2b-information-map" },
            { label: "NBM&CW: MPC approves ₹14,788.10 Cr expansion", url: "https://www.nbmcw.com/news/mpc-approves-14-788-10-cr-namma-metro-expansion.html" },
          ],
        },
        revisedDeadline: {
          confidence: "reported",
          note: "Blue Line reported as slated for end of 2027. An earlier report said the airport connection may miss June 2027. The original target date was not confirmed.",
          sources: [
            { label: "Swarajya: Blue Line to KIA by end of 2027", url: "https://swarajyamag.com/infrastructure/bengaluru-metros-blue-line-to-kia-airport-slated-for-completion-by-end-of-2027-report" },
          ],
        },
        physicalProgressPct: {
          confidence: "reported",
          note: "Business Today (Aug 2026) reports the airport line has crossed 72%.",
          sources: [
            { label: "Business Today: Airport Metro crosses 72%", url: "https://www.businesstoday.in/amp/india/story/tired-of-bengaluru-traffic-airport-metro-crosses-72-mark-heres-what-it-means-for-you-547584-2026-08-06" },
          ],
        },
        contractors: {
          confidence: "reported",
          note: "NCC Ltd. lowest bidder for all three packages. Contract value reported at about ₹2,200 Cr in one source only, so it is not shown.",
          sources: [
            { label: "The Metro Rail Guy: NCC wins airport line", url: "https://themetrorailguy.com/?p=42789" },
          ],
        },
        actualDisbursedCr: {
          confidence: "unverified",
          note: "No published figure. Earlier version showed ₹3,920 Cr, which could not be sourced.",
          sources: [],
        },
        status: {
          confidence: "reported",
          note: "Civil works past the halfway mark.",
          sources: [
            { label: "Business Today", url: "https://www.businesstoday.in/amp/india/story/tired-of-bengaluru-traffic-airport-metro-crosses-72-mark-heres-what-it-means-for-you-547584-2026-08-06" },
          ],
        },
      },
      corrections: [
        "Replaced ₹8,846 Cr sanctioned / ₹10,584 Cr revised / ₹5,950 Cr announced with a single reported figure; the others could not be sourced.",
        "Changed the deadline from December 2026 to December 2027 per latest reports.",
        "Removed ₹3,920 Cr 'paid out', 37% financial progress, 41.5% physical progress (now 72% reported) and all milestone payment amounts.",
        "Removed the 'Lok Sabha Question 1843', 'G.O. UDD 23 BMR' and 'HBR Layout inquiry' citations and the '₹1,738 Cr land overrun': could not be traced.",
        "Removed contract value of ₹2,170 Cr and the tender ID: single-source or invented.",
      ],
    },

    contractors: [
      {
        name: "NCC Ltd. (Packages 1, 2 and 3)",
        awardedAmountCr: null,
        contractAwardDate: null,
        status: "active",
        scope: "Three elevated civil packages covering about 15 of 17 stations",
      },
    ],
    contractorsNote:
      "RITES Ltd. is the project management consultant for Phases 2A and 2B.",

    milestones: [
      {
        id: "2b-m1",
        date: "2021-12-17",
        stageName: "RITES appointed project management consultant (Phases 2A and 2B)",
        description: "RITES awarded the PMC contract for the civil works.",
        source: { label: "The Metro Rail Guy", url: "https://themetrorailguy.com/2021/12/17/rites-awarded-bangalore-metro-phase-2a-2bs-pmc-contract/" },
      },
      {
        id: "2b-m2",
        date: "2023-06-05",
        stageName: "L&T awarded track work (Phases 2A and 2B)",
        description: "Track work contracts for both phases awarded to L&T.",
        source: { label: "The Metro Rail Guy", url: "https://themetrorailguy.com/2023/06/05/lt-awarded-bangalore-metro-phase-2a-2bs-track-work-contracts/" },
      },
    ],

    redFlags: [
      {
        id: "rf-2b-delay",
        type: "TIMELINE_DELAY",
        severity: "MEDIUM",
        title: "Airport connection at risk of missing mid-2027 target",
        summary:
          "An earlier report warned the airport connection would not be ready by June 2027; the latest reports now say December 2027.",
        calculatedMetric: "Target now Dec 2027 (reported)",
        officialCitation: {
          sourceName: "Swarajya",
          documentUrl: "https://swarajyamag.com/infrastructure/bengaluru-metros-blue-line-to-kia-airport-slated-for-completion-by-end-of-2027-report",
        },
      },
    ],

    citizenReports: [],

    officialDocLinks: [
      { label: "The Metro Rail Guy: Phase 2B tenders & updates", url: "https://themetrorailguy.com/bangalore-metro-phase-2b-information-map", type: "NEWS_REPORT" },
      { label: "Business Today: Airport Metro crosses 72%", url: "https://www.businesstoday.in/amp/india/story/tired-of-bengaluru-traffic-airport-metro-crosses-72-mark-heres-what-it-means-for-you-547584-2026-08-06", type: "NEWS_REPORT" },
    ],
  },

  // ---------------------------------------------------------------------
  // 4. BENGALURU BUSINESS CORRIDOR (PRR)
  // ---------------------------------------------------------------------
  {
    id: "bda-peripheral-ring-road",
    slug: "bda-peripheral-ring-road-business-corridor",
    title: "BDA Bengaluru Business Corridor (Peripheral Ring Road)",
    tagline:
      "Long-delayed ring road around Bengaluru. After failed tender rounds, the first package (about 21 km, Madavara to Ballari Road) has reportedly been awarded.",
    agencyCode: "BDA",
    sector: "Roads & Flyovers",
    status: "tendering",

    announcedAmountCr: null,
    sanctionedAmountCr: null,
    revisedEstimatedCostCr: 27000,
    actualDisbursedCr: null,

    announcedDate: null,
    sanctionedDate: null,
    originalDeadline: null,
    revisedDeadline: "2029-12-31",

    financialProgressPct: null,
    physicalProgressPct: null,

    wardOrZone: "Peripheral Bengaluru: Tumakuru Road, Ballari Road, Old Madras Road, Hosur Road",
    coordinates: { lat: 13.0645, lng: 77.7214 },

    overview:
      "A planned ring expressway around Bengaluru, now branded the Bengaluru Business Corridor. Tenders in 2022 drew no response, partly because farmer compensation was unsettled; a 2024 re-tender drew only one bidder. Global tenders for the first phase (about 19.8 km between Tumakuru and Ballari roads) were floated on 31 March 2026. A Letter of Acceptance for Package 1 (about 21 km, Madavara to Ballari Road; package estimate ₹3,348 Cr) has reportedly been issued to Shankaranarayana Constructions after two firms bid. The whole corridor is estimated at roughly ₹27,000 Cr, of which about ₹21,000 Cr is land acquisition.",

    dataQuality: {
      lastAudited: AUDIT_DATE,
      summary:
        "Recent tender events are reported by several outlets, but the exact award date and award value of Package 1 are not confirmed. The earlier claim of 'zero bids' is outdated.",
      fields: {
        revisedEstimatedCostCr: {
          confidence: "reported",
          note: "Whole-corridor cost reported between ₹26,786 Cr and about ₹27,000 Cr including land acquisition (about ₹21,000 Cr). Package 1 alone is estimated at ₹3,348 Cr.",
          sources: [
            { label: "ETV Bharat: global tenders floated for first phase", url: "https://www.etvbharat.com/en/state/bengaluru-business-corridor-global-tenders-floated-for-20k-first-phase-works-enn26033105183" },
            { label: "Swarajya: ₹3,348 Cr bids for first package", url: "https://swarajyamag.com/amp/story/news-brief%2Fbangalore-development-authority-invites-rs-3348-crore-bids-for-first-package-of-bengaluru-business-corridor-project" },
          ],
        },
        revisedDeadline: {
          confidence: "reported",
          note: "Completion targeted around 2029; the contract deadline is 36 months from the work order date, which is not confirmed.",
          sources: [
            { label: "OneIndia: project enters execution phase", url: "https://www.oneindia.com/bengaluru/bengaluru-business-corridor-project-enters-execution-phase-as-21-km-madavara-ballari-stretch-to-be-d-014-8119463.html" },
          ],
        },
        contractors: {
          confidence: "reported",
          note: "Letter of Acceptance for Package 1 reported to Shankaranarayana Constructions. Award date and value not confirmed.",
          sources: [
            { label: "OneIndia: two firms bid for Package 1", url: "https://www.oneindia.com/bengaluru/bengaluru-business-corridor-nears-execution-as-two-firms-bid-for-prr-package-1-8081733.html" },
          ],
        },
        status: {
          confidence: "reported",
          note: "First package awarded; land awards being issued. No construction progress figure found.",
          sources: [
            { label: "Deccan Herald: BDA begins issuing land awards", url: "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-business-corridor-deadlock-over-as-bda-begins-issuing-awards-for-land-3809159" },
          ],
        },
        actualDisbursedCr: {
          confidence: "unverified",
          note: "No published figure. Earlier version showed ₹850 Cr, which could not be sourced.",
          sources: [],
        },
        sanctionedAmountCr: {
          confidence: "unverified",
          note: "Earlier version showed ₹15,300 Cr sanctioned and ₹3,800 Cr announced; neither could be found.",
          sources: [],
        },
      },
      corrections: [
        "Removed 'zero bids received': outdated. Package 1 drew two bids and a Letter of Acceptance has been reported.",
        "Removed 'Stalled for 18 years', ₹3,800 Cr original cost, ₹15,300 Cr sanctioned, ₹850 Cr paid, '700+ landowner petitions' and 'Supreme Court affidavit Annexure R-4': no source.",
        "Removed 'Supreme Court order 2022' milestone: not found.",
        "Corrected the cost to the ~₹27,000 Cr corridor estimate, with the ₹3,348 Cr first-package estimate noted separately.",
      ],
    },

    contractors: [
      {
        name: "Shankaranarayana Constructions",
        awardedAmountCr: null,
        contractAwardDate: null,
        status: "active",
        scope: "Package 1: about 21 km, Madavara to Ballari Road (Letter of Acceptance reported; package estimate ₹3,348 Cr)",
      },
    ],

    milestones: [
      {
        id: "prr-m1",
        date: "2024-01-15",
        stageName: "Tender re-issued as Bengaluru Business Corridor",
        description: "Earlier 2022 tenders drew no response; the re-tender drew a single bidder.",
        source: { label: "Swarajya", url: "https://swarajyamag.com/amp/story/infrastructure/bengaluru-business-corridor-bda-initiates-global-tender-for-long-pending-peripheral-ring-road-project" },
      },
      {
        id: "prr-m2",
        date: "2026-03-31",
        stageName: "Global tenders floated for first phase",
        description: "About 19.8 km between Tumakuru and Ballari roads; 36 months from work order.",
        source: { label: "ETV Bharat", url: "https://www.etvbharat.com/en/state/bengaluru-business-corridor-global-tenders-floated-for-20k-first-phase-works-enn26033105183" },
      },
    ],

    redFlags: [
      {
        id: "rf-prr-bidders",
        type: "SINGLE_BIDDER",
        severity: "HIGH",
        title: "Earlier tender rounds drew no or a single bid",
        summary:
          "Tenders in 2022 drew no response and the 2024 re-tender drew only one bidder; large firms stayed away. Package 1 later drew two bids.",
        calculatedMetric: "0 bids (2022), 1 bid (2024), 2 bids (Package 1)",
        officialCitation: {
          sourceName: "Deccan Herald",
          documentUrl: "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Fperipheral-ring-road-project-bda-issues-tender-for-3rd-time-2871899",
        },
      },
      {
        id: "rf-prr-cost",
        type: "COST_OVERRUN",
        severity: "HIGH",
        title: "Corridor estimated at about ₹27,000 Cr, most of it land",
        summary:
          "Reports put the whole corridor at roughly ₹27,000 Cr, with about ₹21,000 Cr going to land acquisition. A like-for-like comparison with the original estimate is not available.",
        calculatedMetric: "≈ ₹27,000 Cr total, ≈ ₹21,000 Cr land (reported)",
        officialCitation: {
          sourceName: "ETV Bharat",
          documentUrl: "https://www.etvbharat.com/en/state/bengaluru-business-corridor-global-tenders-floated-for-20k-first-phase-works-enn26033105183",
        },
      },
    ],

    citizenReports: [],

    officialDocLinks: [
      { label: "Deccan Herald: BDA issues land awards, deadlock over", url: "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-business-corridor-deadlock-over-as-bda-begins-issuing-awards-for-land-3809159", type: "NEWS_REPORT" },
      { label: "ETV Bharat: global tenders for first phase", url: "https://www.etvbharat.com/en/state/bengaluru-business-corridor-global-tenders-floated-for-20k-first-phase-works-enn26033105183", type: "NEWS_REPORT" },
    ],
  },

  // ---------------------------------------------------------------------
  // 5. K-RIDE CORRIDOR 2 (MALLIGE LINE)
  // ---------------------------------------------------------------------
  {
    id: "k-ride-suburban-rail",
    slug: "k-ride-suburban-rail-corridor-2-mallige",
    title: "Bengaluru Suburban Rail Project (Corridor 2: Mallige Line, Baiyappanahalli - Chikkabanavara)",
    tagline:
      "About 25 km suburban rail corridor. The first civil contractor (L&T) left and the work was re-tendered in three packages; opening is now targeted for December 2028.",
    agencyCode: "K-RIDE",
    sector: "Suburban Rail",
    status: "under_construction",

    announcedAmountCr: null,
    sanctionedAmountCr: null,
    revisedEstimatedCostCr: null,
    actualDisbursedCr: null,

    announcedDate: null,
    sanctionedDate: null,
    originalDeadline: null,
    revisedDeadline: "2028-12-31",

    financialProgressPct: null,
    physicalProgressPct: null,

    wardOrZone: "Baiyappanahalli, Hebbal, Yeshwanthpur, Chikkabanavara",
    coordinates: { lat: 13.028, lng: 77.562 },

    overview:
      "Corridor 2 (the Mallige Line) is one of four corridors of the Bengaluru Suburban Rail Project. L&T received the civil work order in August 2022 (about ₹859 Cr, 24-month deadline), halted work and terminated the agreement; K-RIDE re-tendered the remaining civil work in three packages in November 2025. NCC has been awarded about ₹501 Cr for the 12-station package, and Rahee Infratech about ₹104 Cr for track work. K-RIDE now aims to open Corridor 2 in December 2028 and the full project by March 2030.",

    dataQuality: {
      lastAudited: AUDIT_DATE,
      summary:
        "Contractor history and awards are reported by several outlets. The earlier ₹15,767 Cr figure is a whole-programme cost, not Corridor 2. No corridor-level budget was found.",
      fields: {
        revisedDeadline: {
          confidence: "reported",
          note: "K-RIDE reportedly aims to open Corridor 2 by December 2028 and the whole project by March 2030. The L&T contract itself had a 24-month deadline from August 2022.",
          sources: [
            { label: "Deccan Herald: deadline pushed to 2028", url: "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-suburban-railway-project-deadline-pushed-to-2028-2644956" },
            { label: "OneIndia: Mallige line split into three packages", url: "https://www.oneindia.com/bengaluru/bengaluru-suburban-rail-back-on-track-as-k-ride-divides-mallige-line-work-into-three-packages-7908251.html" },
          ],
        },
        contractors: {
          confidence: "reported",
          note: "L&T (original, terminated), NCC (Package C2-A, about ₹501.25 Cr), Rahee Infratech (track, about ₹103.9 Cr). A further award to Cemindia (about ₹665.61 Cr) is reported but not matched to a package.",
          sources: [
            { label: "Metro Rail Today: NCC awarded ₹501.25 Cr", url: "https://metrorailtoday.com/news/ncc-awarded-50125-crore-civil-contract-for-bengaluru-suburban-rail-project" },
            { label: "The Metro Rail Guy: Rahee track contract", url: "https://themetrorailguy.com/?p=62228" },
            { label: "Deccan Herald: fresh tenders", url: "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Ffresh-tenders-to-bring-149-km-long-bengaluru-suburban-rail-project-back-on-track-3754945" },
          ],
        },
        revisedEstimatedCostCr: {
          confidence: "unverified",
          note: "Deccan Herald reports the whole 149 km project cost rose by about ₹1,019 Cr. No Corridor 2 cost was found.",
          sources: [
            { label: "Deccan Herald: work crawls but cost zooms", url: "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Fbengaluru-suburban-rail-work-crawls-but-cost-zooms-by-rs-1k-cr-3849906" },
          ],
        },
        actualDisbursedCr: {
          confidence: "unverified",
          note: "No published figure. Earlier version showed ₹1,150 Cr, which could not be sourced.",
          sources: [],
        },
      },
      corrections: [
        "Removed ₹15,767 Cr 'sanctioned' from this corridor: it is a whole-programme figure.",
        "Removed ₹16,800 Cr revised cost, ₹1,150 Cr paid, 18.5% and 24.2% progress: no source.",
        "Changed the deadline from December 2026 to December 2028 per recent reports.",
        "Updated the contractor story: L&T terminated; NCC, Rahee and others re-tendered. Earlier version listed L&T as 'active'.",
        "Removed the 'KfW and EIB loan finalisation' milestone, '120+ acres delayed' and 'IDD/18/BSRP' letter citations: not found.",
      ],
    },

    contractors: [
      {
        name: "Larsen & Toubro (L&T)",
        awardedAmountCr: 859.97,
        contractAwardDate: "2022-08-01",
        status: "terminated",
        scope: "Original civil contract; reported to have halted work and terminated the agreement",
      },
      {
        name: "NCC Ltd.",
        awardedAmountCr: 501.25,
        contractAwardDate: null,
        status: "active",
        scope: "Package C2-A: 12 stations",
      },
      {
        name: "Rahee Infratech Ltd.",
        awardedAmountCr: 103.93,
        contractAwardDate: null,
        status: "active",
        scope: "Track work",
      },
    ],
    contractorsNote:
      "Another award to Cemindia Projects (about ₹665.61 Cr, elevated sections and stations) is reported but is not yet matched to a package.",

    milestones: [
      {
        id: "kr-m1",
        date: "2022-08-01",
        stageName: "Civil work order issued to L&T",
        description: "About ₹859 Cr with a 24-month deadline.",
        source: { label: "inkl / news report", url: "https://www.inkl.com/news/k-ride-issues-work-order-for-suburban-rail-project-work-to-start-soon" },
      },
      {
        id: "kr-m2",
        date: "2025-11-01",
        stageName: "Fresh tenders for Mallige Line civil works",
        description: "Remaining civil work re-tendered in three packages.",
        source: { label: "Asianet Newsable", url: "https://newsable.asianetnews.com/karnataka-news/k-ride-fresh-tender-mallige-line-civil-works-bengaluru-suburban-rail-phase-articleshow-xgif8oh" },
      },
    ],

    redFlags: [
      {
        id: "rf-kr-terminated",
        type: "FREQUENT_CONTRACTOR_TERMINATION",
        severity: "HIGH",
        title: "Original civil contractor left; work re-tendered",
        summary:
          "L&T halted work and terminated its agreement; K-RIDE re-tendered the remaining civil work in three packages in November 2025.",
        calculatedMetric: "Re-tendered after L&T exit",
        officialCitation: {
          sourceName: "Deccan Herald",
          documentUrl: "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Ffresh-tenders-to-bring-149-km-long-bengaluru-suburban-rail-project-back-on-track-3754945",
        },
      },
      {
        id: "rf-kr-delay",
        type: "TIMELINE_DELAY",
        severity: "HIGH",
        title: "Opening now targeted for December 2028",
        summary:
          "The L&T contract had a 24-month deadline from August 2022; K-RIDE now aims to open Corridor 2 in December 2028.",
        calculatedMetric: "Dec 2028 target (reported)",
        officialCitation: {
          sourceName: "Deccan Herald",
          documentUrl: "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-suburban-railway-project-deadline-pushed-to-2028-2644956",
        },
      },
      {
        id: "rf-kr-cost",
        type: "COST_OVERRUN",
        severity: "MEDIUM",
        title: "Whole suburban rail project cost up by about ₹1,019 Cr",
        summary:
          "Deccan Herald reports the cost of the full 149 km network has risen by about ₹1,019 Cr. This is programme-wide, not specific to Corridor 2.",
        calculatedMetric: "≈ +₹1,019 Cr (whole programme)",
        officialCitation: {
          sourceName: "Deccan Herald",
          documentUrl: "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Fbengaluru-suburban-rail-work-crawls-but-cost-zooms-by-rs-1k-cr-3849906",
        },
      },
    ],

    citizenReports: [],

    officialDocLinks: [
      { label: "K-RIDE tenders", url: "https://kride.in/tender", type: "TENDER_NOTICE" },
      { label: "Deccan Herald: fresh tenders for the suburban rail project", url: "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Ffresh-tenders-to-bring-149-km-long-bengaluru-suburban-rail-project-back-on-track-3754945", type: "NEWS_REPORT" },
    ],
  },

  // ---------------------------------------------------------------------
  // 6. CAUVERY STAGE V
  // ---------------------------------------------------------------------
  {
    id: "bwssb-cauvery-stage-v",
    slug: "bwssb-cauvery-water-supply-stage-v",
    title: "Cauvery Water Supply Scheme Stage V",
    tagline:
      "775 MLD of additional Cauvery water for Bengaluru's outskirts and 110 villages, mainly JICA-funded. Launched in October 2024.",
    agencyCode: "BWSSB",
    sector: "Water Supply & Sewage",
    status: "partially_operational",

    announcedAmountCr: null,
    sanctionedAmountCr: 5550,
    revisedEstimatedCostCr: null,
    actualDisbursedCr: null,

    announcedDate: null,
    sanctionedDate: null,
    originalDeadline: null,
    revisedDeadline: null,

    financialProgressPct: null,
    physicalProgressPct: null,

    wardOrZone: "Peripheral Bengaluru and 110 villages; treatment plant at Thorekadanahalli",
    coordinates: { lat: 12.9815, lng: 77.4982 },

    overview:
      "Adds 775 million litres a day of raw Cauvery water, treated at a new plant at Thorekadanahalli and pumped to Bengaluru via Harohalli and Tataguni. The scheme is funded mostly by the Japan International Cooperation Agency (JICA lends about 85% of the reported ₹5,550 Cr). Chief Minister Siddaramaiah launched Stage V on 16 October; reports differ on the cost (₹4,336 Cr, ₹5,000 Cr, ₹5,550 Cr).",

    dataQuality: {
      lastAudited: AUDIT_DATE,
      summary:
        "Capacity, JICA funding and launch are well reported. Cost differs across sources, and no contractor information was found.",
      fields: {
        sanctionedAmountCr: {
          confidence: "reported",
          note: "₹5,550 Cr (JICA about 85%) is reported by Daijiworld; other outlets say about ₹4,336 Cr or ₹5,000 Cr, and ₹4,500 Cr is quoted for the bulk-water component.",
          sources: [
            { label: "Daijiworld: JICA loan for ₹5,550 Cr Stage V", url: "https://daijiworld.com/news/newsDisplay?newsID=492393" },
          ],
        },
        status: {
          confidence: "reported",
          note: "Launched by the Chief Minister on 16 October (2024). Distribution to all 110 villages was still being rolled out.",
          sources: [
            { label: "Deccan Herald: Stage V launch on Oct 16", url: "https://deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Fbwssb-to-launch-stage-v-of-cauvery-water-supply-scheme-on-oct-16-3224963" },
            { label: "ThePrint: project launched", url: "https://theprint.in/india/project-to-provide-cauvery-water-to-bengalurus-peripheral-areas-launched/2314754" },
          ],
        },
        contractors: {
          confidence: "unverified",
          note: "No contractor named in any source found. The earlier version listed L&T (₹1,680 Cr) and SPML (₹450 Cr) with tender IDs; those could not be sourced.",
          sources: [],
        },
        actualDisbursedCr: {
          confidence: "unverified",
          note: "No published figure. Earlier version showed ₹5,210 Cr and 89% financial progress, which could not be sourced.",
          sources: [],
        },
      },
      corrections: [
        "Removed contractors (L&T ₹1,680 Cr, SPML ₹450 Cr) and tender IDs: no source.",
        "Removed ₹5,210 Cr 'paid out', 89% financial and 94% physical progress, ₹5,850 Cr revised cost and the '₹4,636 Cr JICA loan' figure.",
        "Removed '16-month delay' flag: citation ('BWSSB Board Review') could not be traced.",
        "Removed milestone payment amounts (₹1,200 Cr, ₹2,100 Cr, ₹900 Cr) and the unverified March 2018 loan-signing date.",
      ],
    },

    contractors: [],
    contractorsNote:
      "Contractors for this scheme have not been confirmed yet. Contract data will be added from BWSSB / KPPP tender records.",

    milestones: [
      {
        id: "cw-m1",
        date: "2024-10-16",
        stageName: "Stage V launched",
        description: "Launched by the Chief Minister at Thorekadanahalli, Mandya district.",
        source: { label: "ThePrint", url: "https://theprint.in/india/project-to-provide-cauvery-water-to-bengalurus-peripheral-areas-launched/2314754" },
      },
    ],

    redFlags: [],

    citizenReports: [],

    officialDocLinks: [
      { label: "Daijiworld: JICA loan for Stage V", url: "https://daijiworld.com/news/newsDisplay?newsID=492393", type: "NEWS_REPORT" },
      { label: "Deccan Herald: Cauvery water finally reaches the outskirts", url: "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Fafter-a-decade-long-wait-cauvery-water-to-finally-reach-bengalurus-outskirts-3233582", type: "NEWS_REPORT" },
    ],
  },

  // ---------------------------------------------------------------------
  // 7. STORMWATER DRAINS
  // ---------------------------------------------------------------------
  {
    id: "bbmp-stormwater-drain-remodeling",
    slug: "bbmp-raja-kaluve-flood-mitigation-project",
    title: "Bengaluru Stormwater Drain Remodelling and Maintenance",
    tagline:
      "City-wide programme to remodel and maintain stormwater drains. Audited by the CAG, which found weak records and lapses.",
    agencyCode: "BBMP",
    sector: "Stormwater & Drainage",
    status: "under_construction",

    announcedAmountCr: null,
    sanctionedAmountCr: null,
    revisedEstimatedCostCr: null,
    actualDisbursedCr: null,

    announcedDate: null,
    sanctionedDate: null,
    originalDeadline: null,
    revisedDeadline: null,

    financialProgressPct: null,
    physicalProgressPct: null,

    wardOrZone: "City-wide",
    coordinates: { lat: 12.9345, lng: 77.689 },

    overview:
      "This entry covers the city's stormwater drain (SWD) programme, not a single contract. The CAG audited 2013-14 to 2017-18, when the SWD department remodelled about 332 km of drains and maintained about 308 km, and found the department's records unreliable. At one point 2,626 encroachments were identified, of which 714 were still to be removed. Remodelling the whole 842 km network has been estimated at about ₹6,328 Cr in one report. A separate audit flagged lapses in ₹490 Cr spent between April 2019 and March 2021. A single named, costed project (for example a specific post-2022 flood-mitigation package) still needs to be identified and added.",

    dataQuality: {
      lastAudited: AUDIT_DATE,
      summary:
        "Audit findings come from CAG-based reporting and are the best-supported part of this entry. There is no project-level budget or contractor data: the earlier 'Raja Kaluve ₹1,800 Cr' project could not be confirmed.",
      fields: {
        revisedEstimatedCostCr: {
          confidence: "unverified",
          note: "Different reports give ₹800 Cr to ₹1,100 Cr for 192 km, and ₹6,328 Cr for the whole 842 km network. None is a confirmed budget for a single project, so no cost is shown.",
          sources: [
            { label: "Deccan Herald: cost of remodelling jumps three times", url: "https://www.deccanherald.com/india/karnataka/bengaluru/cost-of-remodelling-bengalurus-drains-jumps-three-times-1065065.html" },
          ],
        },
        contractors: {
          confidence: "unverified",
          note: "No project-level contractor data found. The earlier 'Multiple zonal package contractors, ₹1,250 Cr' entry could not be sourced.",
          sources: [],
        },
        actualDisbursedCr: {
          confidence: "unverified",
          note: "The only spending figure found is ₹490 Cr spent April 2019 to March 2021, flagged by auditors. It is not tied to this programme's budget.",
          sources: [
            { label: "Deccan Herald: audit flags lapses in SWD department", url: "https://www.deccanherald.com/india/karnataka/bengaluru/audit-flags-lapses-in-bbmps-swd-department-1231205.html" },
          ],
        },
        status: {
          confidence: "unverified",
          note: "Programme-level; ongoing remodelling and clearance of encroachments.",
          sources: [],
        },
      },
      corrections: [
        "Replaced the 'Raja Kaluve ₹1,800 Cr flood mitigation project' with the city-wide SWD programme: the specific project and its figures could not be confirmed.",
        "Removed ₹1,500 Cr sanctioned, ₹1,950 Cr revised, ₹980 Cr paid, 50.2% and 44% progress and the ₹1,250 Cr contractor entry: no source.",
        "Corrected the date of the '2,626 encroachments' finding: reported as December 2020, not August 2023.",
        "Removed the 'Report 4 of 2021, geotagged records' and 'WP 38401/2014' citations: could not be traced. Replaced by sourced CAG-based findings.",
      ],
    },

    contractors: [],
    contractorsNote:
      "This is a programme with many works. Contractor-level data has not been collected yet.",

    milestones: [
      {
        id: "sw-m1",
        date: "2020-12-01",
        stageName: "2,626 encroachments on drains identified",
        description: "The SWD chief engineer identified 2,626 encroachments, of which 714 were yet to be removed.",
        source: { label: "Citizen Matters", url: "https://citizenmatters.in/bbmp-encroachment-clearance-delay-problems/" },
      },
    ],

    redFlags: [
      {
        id: "rf-sw-records",
        type: "CAG_AUDIT_STRIKE",
        severity: "HIGH",
        title: "CAG found stormwater drain records unreliable",
        summary:
          "A CAG performance audit covering 2013-14 to 2017-18 found BBMP's data on drains and encroachments incomplete and unreliable, with more encroachments found than BBMP had recorded.",
        calculatedMetric: "Audit period 2013-14 to 2017-18",
        officialCitation: {
          sourceName: "Deccan Herald (on the CAG audit)",
          documentUrl: "https://www.deccanherald.com/india/karnataka/bengaluru/cag-raps-bbmp-bda-over-unreliable-records-on-storm-water-drains-1030811.html",
        },
      },
      {
        id: "rf-sw-490",
        type: "CAG_AUDIT_STRIKE",
        severity: "HIGH",
        title: "Audit flags lapses in ₹490 Cr spent by the SWD department",
        summary:
          "Auditors found serious lapses in ₹490 Cr spent by BBMP's stormwater drain department between April 2019 and March 2021.",
        calculatedMetric: "₹490 Cr (April 2019 to March 2021)",
        officialCitation: {
          sourceName: "Deccan Herald",
          documentUrl: "https://www.deccanherald.com/india/karnataka/bengaluru/audit-flags-lapses-in-bbmps-swd-department-1231205.html",
        },
      },
      {
        id: "rf-sw-encroach",
        type: "TIMELINE_DELAY",
        severity: "MEDIUM",
        title: "Hundreds of drain encroachments still to be cleared",
        summary:
          "In December 2020, 2,626 encroachments had been identified and 714 were still to be removed. Clearance has been repeatedly delayed.",
        calculatedMetric: "714 of 2,626 pending (Dec 2020)",
        officialCitation: {
          sourceName: "Citizen Matters",
          documentUrl: "https://citizenmatters.in/bbmp-encroachment-clearance-delay-problems/",
        },
      },
    ],

    citizenReports: [],

    officialDocLinks: [
      { label: "CAG audit report on stormwater drains (2021), executive summary", url: "https://cag.gov.in/uploads/download_audit_report/2021/2.%20Executive%20Summary-061430463965e68.70381499.pdf", type: "CAG_REPORT" },
      { label: "Citizen Matters: no records, excess payments in drain works", url: "https://citizenmatters.in/cag-report-stormwater-drain-works-no-accountability/", type: "NEWS_REPORT" },
    ],
  },
];
