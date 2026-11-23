import { Project } from "@/lib/types";

export const nammaMetroPhase2b: Project = {
  "id": "namma-metro-phase-2b",
  "slug": "namma-metro-phase-2b-airport-line",
  "title": "Namma Metro Phase 2B (Airport Line: KR Puram to Kempegowda Airport)",
  "tagline": "About 37 km elevated line from KR Puram via Hebbal and Yelahanka to Kempegowda International Airport (Blue Line, part 2). Target December 2027.",
  "agencyCode": "BMRCL",
  "sector": "Metro Rail",
  "status": "under_construction",
  "category": "ongoing",
  "lengthKm": 37,
  "stationsCount": 17,
  "stationNames": [
    "KR Puram",
    "Kasturi Nagar",
    "Horamavu",
    "HRBR Layout",
    "Kalyan Nagar",
    "HBR Layout",
    "Nagawara",
    "Veerannapalya",
    "Kempapura",
    "Hebbal",
    "Kodigehalli",
    "Jakkur Cross",
    "Yelahanka",
    "Bagalur Cross",
    "Bettahalasuru",
    "Doddajala",
    "Airport City",
    "KIAL Terminals"
  ],
  "fundingSplit": {
    "centralPct": 20,
    "statePct": 20,
    "loanPct": 60,
    "loanSource": "ADB and JICA co-financing",
    "notes": "Total combined Phase 2A and 2B approval ₹14,788.10 Cr"
  },
  "announcedAmountCr": null,
  "sanctionedAmountCr": 9617,
  "revisedEstimatedCostCr": null,
  "actualDisbursedCr": null,
  "announcedDate": null,
  "sanctionedDate": null,
  "originalDeadline": null,
  "revisedDeadline": "2027-12-31",
  "financialProgressPct": null,
  "physicalProgressPct": 72,
  "wardOrZone": "KR Puram, Hebbal, Yelahanka, Kempegowda Airport",
  "coordinates": {
    "lat": 13.0827,
    "lng": 77.6006
  },
  "routeCoordinates": [
    [
      12.998,
      77.678
    ],
    [
      13.018,
      77.652
    ],
    [
      13.036,
      77.62
    ],
    [
      13.045,
      77.592
    ],
    [
      13.1,
      77.595
    ],
    [
      13.15,
      77.61
    ],
    [
      13.198,
      77.706
    ]
  ],
  "overview": "Elevated line connecting KR Puram to Kempegowda International Airport, built in three civil packages. NCC Ltd. was the lowest bidder for all three packages (about 15 of the 17 stations). RITES is the project management consultant. An earlier report warned the line might miss a June 2027 target; the latest reports say December 2027.",
  "dataQuality": {
    "lastAudited": "2026-11-21",
    "summary": "Contractor and December 2027 target are consistently reported. The cost is an older third-party estimate that does not add up exactly with the combined ₹14,788 Cr approval. Amounts paid are not published.",
    "fields": {
      "sanctionedAmountCr": {
        "confidence": "reported",
        "asOf": "2021-04-20",
        "note": "A tracker site gives about ₹9,617 Cr for Phase 2B alone; the combined 2A + 2B approval is reported at ₹14,788.10 Cr. The two do not reconcile exactly. Treat as indicative until matched to the approval document.",
        "sources": [
          {
            "label": "The Metro Rail Guy: Phase 2B",
            "url": "https://themetrorailguy.com/bangalore-metro-phase-2b-information-map"
          },
          {
            "label": "NBM&CW: MPC approves ₹14,788.10 Cr expansion",
            "url": "https://www.nbmcw.com/news/mpc-approves-14-788-10-cr-namma-metro-expansion.html"
          }
        ]
      },
      "revisedDeadline": {
        "confidence": "reported",
        "asOf": "2024-08-01",
        "note": "Blue Line reported as slated for end of 2027. An earlier report said the airport connection may miss June 2027. The original target date was not confirmed.",
        "sources": [
          {
            "label": "Swarajya: Blue Line to KIA by end of 2027",
            "url": "https://swarajyamag.com/infrastructure/bengaluru-metros-blue-line-to-kia-airport-slated-for-completion-by-end-of-2027-report"
          }
        ]
      },
      "physicalProgressPct": {
        "confidence": "reported",
        "asOf": "2024-08-06",
        "note": "Business Today reports the airport line civil works have crossed the 72% mark.",
        "sources": [
          {
            "label": "Business Today: Airport Metro crosses 72%",
            "url": "https://www.businesstoday.in/amp/india/story/tired-of-bengaluru-traffic-airport-metro-crosses-72-mark-heres-what-it-means-for-you-547584-2026-08-06"
          }
        ]
      },
      "contractors": {
        "confidence": "reported",
        "asOf": "2021-12-17",
        "note": "NCC Ltd. lowest bidder for all three civil packages. Contract value reported at about ₹2,200 Cr in one source only.",
        "sources": [
          {
            "label": "The Metro Rail Guy: NCC wins airport line",
            "url": "https://themetrorailguy.com/?p=42789"
          }
        ]
      },
      "actualDisbursedCr": {
        "confidence": "unverified",
        "asOf": "2026-11-21",
        "note": "No published figure. Earlier version showed ₹3,920 Cr, which could not be sourced.",
        "sources": [
          {
            "label": "Business Today",
            "url": "https://www.businesstoday.in/amp/india/story/tired-of-bengaluru-traffic-airport-metro-crosses-72-mark-heres-what-it-means-for-you-547584-2026-08-06"
          }
        ]
      },
      "status": {
        "confidence": "reported",
        "asOf": "2024-08-06",
        "note": "Civil works past the halfway mark across packages.",
        "sources": [
          {
            "label": "Business Today",
            "url": "https://www.businesstoday.in/amp/india/story/tired-of-bengaluru-traffic-airport-metro-crosses-72-mark-heres-what-it-means-for-you-547584-2026-08-06"
          }
        ]
      }
    },
    "corrections": [
      "Replaced ₹8,846 Cr sanctioned / ₹10,584 Cr revised / ₹5,950 Cr announced with a single reported figure.",
      "Changed the deadline from December 2026 to December 2027 per latest reports.",
      "Removed ₹3,920 Cr 'paid out', 37% financial progress, 41.5% physical progress (now 72% reported)."
    ]
  },
  "contractors": [
    {
      "name": "NCC Ltd. (Packages 1, 2 and 3)",
      "awardedAmountCr": null,
      "contractAwardDate": null,
      "status": "active",
      "scope": "Three elevated civil packages covering about 15 of 17 stations"
    }
  ],
  "contractorsNote": "RITES Ltd. is the project management consultant for Phases 2A and 2B.",
  "milestones": [
    {
      "id": "2b-m1",
      "date": "2021-12-17",
      "stageName": "RITES appointed project management consultant (Phases 2A and 2B)",
      "description": "RITES awarded the PMC contract for the civil works.",
      "source": {
        "label": "The Metro Rail Guy",
        "url": "https://themetrorailguy.com/2021/12/17/rites-awarded-bangalore-metro-phase-2a-2bs-pmc-contract/"
      }
    },
    {
      "id": "2b-m2",
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
      "id": "rf-2b-delay",
      "type": "TIMELINE_DELAY",
      "severity": "MEDIUM",
      "title": "Airport connection target pushed to December 2027",
      "summary": "An earlier report warned the airport connection would not be ready by June 2027; latest reports target completion by December 2027.",
      "calculatedMetric": "Target now Dec 2027 (reported)",
      "officialCitation": {
        "sourceName": "Swarajya",
        "documentUrl": "https://swarajyamag.com/infrastructure/bengaluru-metros-blue-line-to-kia-airport-slated-for-completion-by-end-of-2027-report"
      }
    }
  ],
  "articles": [
    {
      "title": "Tired of Bengaluru traffic? Airport Metro crosses 72% mark, here's what it means for you",
      "outlet": "Business Today",
      "publishedDate": "2024-08-06",
      "url": "https://www.businesstoday.in/amp/india/story/tired-of-bengaluru-traffic-airport-metro-crosses-72-mark-heres-what-it-means-for-you-547584-2026-08-06",
      "claim": "Reports 72% construction progress on the Airport Metro corridor",
      "checkedOn": "2026-11-23",
      "excerpt": "Tired of Bengaluru traffic? Airport Metro crosses 72% mark, here's what it means for you reports that reports 72% construction progress on the airport..."
    },
    {
      "title": "Bengaluru Metro's Blue Line to KIA airport slated for completion by end of 2027: report",
      "outlet": "Swarajya",
      "publishedDate": "2024-05-18",
      "url": "https://swarajyamag.com/infrastructure/bengaluru-metros-blue-line-to-kia-airport-slated-for-completion-by-end-of-2027-report",
      "claim": "Revised completion timeline targeting late 2027",
      "checkedOn": "2026-11-23",
      "excerpt": "Bengaluru Metro's Blue Line to KIA airport slated for completion by end of 2027: report reports that revised completion timeline targeting late 2027."
    },
    {
      "title": "Bangalore Metro Phase 2B Information and Stations Map",
      "outlet": "The Metro Rail Guy",
      "publishedDate": "2023-06-05",
      "url": "https://themetrorailguy.com/bangalore-metro-phase-2b-information-map",
      "claim": "Detailed station alignment and package tender specifications",
      "checkedOn": "2026-11-23",
      "excerpt": "Bangalore Metro Phase 2B Information and Stations Map reports that detailed station alignment and package tender specifications."
    },
    {
      "title": "MPC approves Rs 14,788.10 cr Namma Metro expansion",
      "outlet": "NBM&CW",
      "publishedDate": "2021-04-20",
      "url": "https://www.nbmcw.com/news/mpc-approves-14-788-10-cr-namma-metro-expansion.html",
      "claim": "Combined sanction of Phase 2A and Phase 2B network",
      "checkedOn": "2026-11-23",
      "excerpt": "MPC approves Rs 14,788.10 cr Namma Metro expansion reports that combined sanction of phase 2a and phase 2b network."
    }
  ],
  "officialDocLinks": [
    {
      "label": "The Metro Rail Guy: Phase 2B tenders & updates",
      "url": "https://themetrorailguy.com/bangalore-metro-phase-2b-information-map",
      "type": "NEWS_REPORT"
    },
    {
      "label": "Business Today: Airport Metro crosses 72%",
      "url": "https://www.businesstoday.in/amp/india/story/tired-of-bengaluru-traffic-airport-metro-crosses-72-mark-heres-what-it-means-for-you-547584-2026-08-06",
      "type": "NEWS_REPORT"
    }
  ]
};
