import { Project } from "@/lib/types";

export const nammaMetroPhase2a: Project = {
  "id": "namma-metro-phase-2a",
  "slug": "namma-metro-phase-2a-outer-ring-road",
  "title": "Namma Metro Phase 2A (Outer Ring Road: Silk Board to KR Puram)",
  "tagline": "19.75 km elevated metro line along the Outer Ring Road (Blue Line, part 1). Latest reports target full opening around December 2027, with trial runs earlier.",
  "agencyCode": "BMRCL",
  "sector": "Metro Rail",
  "status": "under_construction",
  "category": "ongoing",
  "lengthKm": 19.75,
  "stationsCount": 13,
  "stationNames": [
    "Central Silk Board",
    "HSR Layout",
    "Agara",
    "Ibbalur",
    "Bellandur",
    "Kadubeesanahalli",
    "Kodibeesanahalli",
    "Marathahalli",
    "ISRO",
    "Doddanekundi",
    "DRDO Sports Complex",
    "Saraswathi Nagar",
    "KR Puram"
  ],
  "fundingSplit": {
    "centralPct": 20,
    "statePct": 20,
    "loanPct": 60,
    "loanSource": "ADB and JICA co-financing",
    "notes": "Total combined Phase 2A and 2B approval ₹14,788.10 Cr with multilateral loans"
  },
  "announcedAmountCr": null,
  "sanctionedAmountCr": 5227.35,
  "revisedEstimatedCostCr": null,
  "actualDisbursedCr": null,
  "announcedDate": null,
  "sanctionedDate": null,
  "originalDeadline": null,
  "revisedDeadline": "2027-12-31",
  "financialProgressPct": null,
  "physicalProgressPct": 87,
  "wardOrZone": "Outer Ring Road: Silk Board, Bellandur, Marathahalli, KR Puram",
  "coordinates": {
    "lat": 12.9237,
    "lng": 77.6835
  },
  "overview": "Elevated metro line from Central Silk Board to KR Puram along the Outer Ring Road, built in two civil packages. Together with Phase 2B (KR Puram to the airport) it forms the Blue Line, approved at about ₹14,788 Cr combined. Trial runs were expected from October 2026, but reports say some stations (Marathahalli, Silk Board) will be delayed by pending work.",
  "dataQuality": {
    "lastAudited": "2026-11-21",
    "summary": "Cost, progress and target date each rest on one or two news/third-party sources and sources disagree on cost. No official BMRCL document has been matched yet. Amounts paid are not published.",
    "fields": {
      "sanctionedAmountCr": {
        "confidence": "reported",
        "asOf": "2021-04-20",
        "note": "One tracker site lists ₹5,227.35 Cr for Phase 2A. The combined Phase 2A + 2B approval is reported at ₹14,788.10 Cr. Per-phase cost split has not been matched to the approval document.",
        "sources": [
          {
            "label": "The Metro Rail Guy: Phase 2A",
            "url": "https://themetrorailguy.com/bangalore-metro-phase-2a-information-map/"
          },
          {
            "label": "NBM&CW: MPC approves ₹14,788.10 Cr expansion",
            "url": "https://www.nbmcw.com/news/mpc-approves-14-788-10-cr-namma-metro-expansion.html"
          }
        ]
      },
      "revisedEstimatedCostCr": {
        "confidence": "unverified",
        "asOf": "2024-03-10",
        "note": "Deccan Herald reports Phase 2 delays pushed costs up by about ₹10,000 Cr programme-wide, but no 2A-specific revised cost was found.",
        "sources": [
          {
            "label": "Deccan Herald: Phase 2 delays push up cost",
            "url": "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-metro-phase-2-delays-push-up-cost-by-rs-10000-cr-3307265"
          }
        ]
      },
      "revisedDeadline": {
        "confidence": "reported",
        "asOf": "2024-08-01",
        "note": "Recent reports say the Silk Board to KR Puram section has been pushed to December 2027; trial runs were expected from October 2026. The original target is reported as FY 2023-24 (month not confirmed), so no delay length is shown.",
        "sources": [
          {
            "label": "OneIndia: Blue Line to open by December 2027",
            "url": "https://www.oneindia.com/bengaluru/namma-metro-blue-line-bengaluru-s-silk-board-to-airport-route-to-open-by-december-2027-7854863.html"
          },
          {
            "label": "Construction World: trials by October end",
            "url": "https://www.constructionworld.in/amp/transport-infrastructure/metro-rail-and-railways-infrastructure/kr-puram-silk-board-metro-trials-set-to-begin-by-october-end/99490"
          }
        ]
      },
      "physicalProgressPct": {
        "confidence": "reported",
        "asOf": "2024-08-06",
        "note": "Reported overall construction progress of about 87% (as of the trial-run report).",
        "sources": [
          {
            "label": "Construction World: trials by October end",
            "url": "https://www.constructionworld.in/amp/transport-infrastructure/metro-rail-and-railways-infrastructure/kr-puram-silk-board-metro-trials-set-to-begin-by-october-end/99490"
          }
        ]
      },
      "contractors": {
        "confidence": "reported",
        "asOf": "2021-12-17",
        "note": "Afcons is listed for the Silk Board package (viaduct, six stations, Silk Board flyover). The contractor for the second package (Kadubeesanahalli to KR Puram) was not confirmed.",
        "sources": [
          {
            "label": "The Metro Rail Guy: Phase 2A",
            "url": "https://themetrorailguy.com/bangalore-metro-phase-2a-information-map/"
          }
        ]
      },
      "actualDisbursedCr": {
        "confidence": "unverified",
        "asOf": "2026-11-21",
        "note": "No published figure. Earlier version showed ₹3,410 Cr, which could not be sourced.",
        "sources": [
          {
            "label": "OneIndia",
            "url": "https://www.oneindia.com/bengaluru/namma-metro-blue-line-bengaluru-s-silk-board-to-airport-route-to-open-by-december-2027-7854863.html"
          }
        ]
      },
      "status": {
        "confidence": "reported",
        "asOf": "2024-08-06",
        "note": "Under construction with trial runs planned.",
        "sources": [
          {
            "label": "Construction World",
            "url": "https://www.constructionworld.in/amp/transport-infrastructure/metro-rail-and-railways-infrastructure/kr-puram-silk-board-metro-trials-set-to-begin-by-october-end/99490"
          }
        ]
      }
    },
    "corrections": [
      "Replaced the contractor (SNC, ₹1,530 Cr) with Afcons; SNC is linked to the Peripheral Ring Road package.",
      "Removed ₹6,550 Cr revised cost, ₹4,202 Cr announced and ₹5,998 Cr sanctioned: sources show ₹5,227 Cr (2A) and ₹14,788 Cr (2A + 2B).",
      "Changed the deadline from June 2026 to December 2027 per latest reports.",
      "Removed ₹3,410 Cr 'paid out', 52% financial progress, all milestone payment amounts."
    ]
  },
  "contractors": [
    {
      "name": "Afcons Infrastructure Ltd.",
      "awardedAmountCr": null,
      "contractAwardDate": null,
      "status": "active",
      "scope": "Silk Board package: 9.859 km viaduct, six elevated stations, Silk Board flyover"
    }
  ],
  "contractorsNote": "The contractor for the second civil package (Kadubeesanahalli to KR Puram) has not been confirmed yet. Contract values are not shown because no source was found.",
  "milestones": [
    {
      "id": "2a-m1",
      "date": "2021-12-17",
      "stageName": "RITES appointed project management consultant (Phases 2A and 2B)",
      "description": "RITES awarded the PMC contract for the civil works.",
      "source": {
        "label": "The Metro Rail Guy",
        "url": "https://themetrorailguy.com/2021/12/17/rites-awarded-bangalore-metro-phase-2a-2bs-pmc-contract/"
      }
    },
    {
      "id": "2a-m2",
      "date": "2023-06-05",
      "stageName": "L&T awarded track work (Phases 2A and 2B)",
      "description": "Track work contracts for both phases awarded to L&T.",
      "source": {
        "label": "The Metro Rail Guy",
        "url": "https://themetrorailguy.com/2023/06/05/lt-awarded-bangalore-metro-phase-2a-2bs-track-work-contracts/"
      }
    }
  ],
  "redFlags": [
    {
      "id": "rf-2a-delay",
      "type": "TIMELINE_DELAY",
      "severity": "MEDIUM",
      "title": "Completion pushed to around December 2027",
      "summary": "Silk Board to KR Puram was reported to open earlier; recent reports say the full line has been pushed to December 2027, with some stations delayed by pending work.",
      "calculatedMetric": "Target now Dec 2027 (reported)",
      "officialCitation": {
        "sourceName": "OneIndia",
        "documentUrl": "https://www.oneindia.com/bengaluru/namma-metro-blue-line-bengaluru-s-silk-board-to-airport-route-to-open-by-december-2027-7854863.html"
      }
    },
    {
      "id": "rf-2a-cost",
      "type": "COST_OVERRUN",
      "severity": "MEDIUM",
      "title": "Namma Metro Phase 2 delays raised costs by about ₹10,000 Cr",
      "summary": "Deccan Herald reports that delays across Phase 2 (all lines, not only 2A) added roughly ₹10,000 Cr to costs. The share belonging to this line is not published.",
      "calculatedMetric": "~₹10,000 Cr across Phase 2 (programme-wide)",
      "officialCitation": {
        "sourceName": "Deccan Herald",
        "documentUrl": "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-metro-phase-2-delays-push-up-cost-by-rs-10000-cr-3307265"
      }
    }
  ],
  "articles": [
    {
      "title": "Namma Metro Blue Line: Bengaluru's Silk Board to airport route to open by December 2027",
      "outlet": "OneIndia",
      "publishedDate": "2024-08-01",
      "url": "https://www.oneindia.com/bengaluru/namma-metro-blue-line-bengaluru-s-silk-board-to-airport-route-to-open-by-december-2027-7854863.html",
      "claim": "Revised December 2027 timeline for Blue Line",
      "checkedOn": "2026-11-23",
      "excerpt": "Once completed, the Namma Metro Blue Line will provide Bengaluru with its first direct metro connectivity to the airport."
    },
    {
      "title": "KR Puram-Silk Board metro trials set to begin by October end",
      "outlet": "Construction World",
      "publishedDate": "2024-08-06",
      "url": "https://www.constructionworld.in/amp/transport-infrastructure/metro-rail-and-railways-infrastructure/kr-puram-silk-board-metro-trials-set-to-begin-by-october-end/99490",
      "claim": "Reports 87% civil progress and planned trial runs",
      "checkedOn": "2026-11-23",
      "excerpt": "75-km KR Puram-Central Silk Board stretch are expected to begin by the end of October, with overall construction 87 per cent complete."
    },
    {
      "title": "Bengaluru Metro Phase 2 delays push up cost by Rs 10,000 crore",
      "outlet": "Deccan Herald",
      "publishedDate": "2023-12-14",
      "url": "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-metro-phase-2-delays-push-up-cost-by-rs-10000-cr-3307265",
      "claim": "Cost increases across Namma Metro Phase 2 extensions",
      "checkedOn": "2026-11-23",
      "excerpt": "Going by the revised estimation, Phase 2 will cost Rs 541."
    },
    {
      "title": "Bangalore Metro Phase 2A Information and Alignment Map",
      "outlet": "The Metro Rail Guy",
      "publishedDate": "2023-06-05",
      "url": "https://themetrorailguy.com/bangalore-metro-phase-2a-information-map/",
      "claim": "Phase 2A alignment details and ₹5,227.35 Cr project figure",
      "checkedOn": "2026-11-23",
      "excerpt": "An official PDF route map of Bangalore Metro Phase 2A will be added here when available."
    }
  ],
  "officialDocLinks": [
    {
      "label": "The Metro Rail Guy: Phase 2A tenders & updates",
      "url": "https://themetrorailguy.com/bangalore-metro-phase-2a-information-map/",
      "type": "NEWS_REPORT"
    },
    {
      "label": "NBM&CW: ₹14,788.10 Cr Namma Metro expansion approved",
      "url": "https://www.nbmcw.com/news/mpc-approves-14-788-10-cr-namma-metro-expansion.html",
      "type": "NEWS_REPORT"
    }
  ],
  "geometrySource": "OpenStreetMap (Overpass API - Outer Ring Road primary highway corridor)",
  "geometryFetchDate": "2026-11-23"
};
