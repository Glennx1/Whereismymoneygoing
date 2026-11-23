import { Project } from "@/lib/types";

export const kRideSuburbanRail: Project = {
  "id": "k-ride-suburban-rail",
  "slug": "k-ride-suburban-rail-corridor-2-mallige",
  "title": "Bengaluru Suburban Rail Project (Corridor 2: Mallige Line, Baiyappanahalli - Chikkabanavara)",
  "tagline": "About 25 km suburban rail corridor. The first civil contractor (L&T) agreement ended; work was re-tendered in three packages with target opening December 2028.",
  "agencyCode": "K-RIDE",
  "sector": "Suburban Rail",
  "status": "under_construction",
  "category": "ongoing",
  "lengthKm": 25.2,
  "stationsCount": 14,
  "stationNames": [
    "Baiyappanahalli",
    "Kasturi Nagar",
    "Sevanagar",
    "Banaswadi",
    "Nagawara",
    "Kanakadasa Nagar",
    "Hebbal",
    "Lottegollahalli",
    "Yeshwanthpur",
    "Jalahalli",
    "Shettihalli",
    "Myadarahalli",
    "Chikkabanavara"
  ],
  "fundingSplit": {
    "centralPct": 20,
    "statePct": 20,
    "loanPct": 60,
    "loanSource": "KfW and European Investment Bank (EIB)",
    "notes": "Total 149 km programme sanctioned at ₹15,767 Cr with 60% external multilateral borrowing"
  },
  "announcedAmountCr": null,
  "sanctionedAmountCr": null,
  "revisedEstimatedCostCr": null,
  "actualDisbursedCr": null,
  "announcedDate": null,
  "sanctionedDate": null,
  "originalDeadline": null,
  "revisedDeadline": "2028-12-31",
  "financialProgressPct": null,
  "physicalProgressPct": null,
  "wardOrZone": "Baiyappanahalli, Hebbal, Yeshwanthpur, Chikkabanavara",
  "coordinates": {
    "lat": 13.028,
    "lng": 77.562
  },
  "overview": "Corridor 2 (the Mallige Line) is one of four corridors of the 149 km Bengaluru Suburban Rail Project (BSRP). L&T received the initial civil work order in August 2022 (about ₹859 Cr, 24-month deadline), but halted work and terminated the agreement due to right-of-way handovers; K-RIDE re-tendered the remaining civil work in three packages in late 2025. NCC has been awarded about ₹501 Cr for the 12-station package, and Rahee Infratech about ₹104 Cr for track work. K-RIDE now aims to open Corridor 2 by December 2028 and the full 149 km project by March 2030.",
  "dataQuality": {
    "lastAudited": "2026-11-21",
    "summary": "Contractor history and awards are reported by several outlets. The earlier ₹15,767 Cr figure is a whole-programme cost, not Corridor 2. No corridor-level budget was found.",
    "fields": {
      "revisedDeadline": {
        "confidence": "reported",
        "asOf": "2024-03-01",
        "note": "K-RIDE reportedly aims to open Corridor 2 by December 2028 and the whole project by March 2030. The L&T contract had an initial 24-month deadline from August 2022.",
        "sources": [
          {
            "label": "Deccan Herald: deadline pushed to 2028",
            "url": "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-suburban-railway-project-deadline-pushed-to-2028-2644956"
          },
          {
            "label": "OneIndia: Mallige line split into three packages",
            "url": "https://www.oneindia.com/bengaluru/bengaluru-suburban-rail-back-on-track-as-k-ride-divides-mallige-line-work-into-three-packages-7908251.html"
          }
        ]
      },
      "contractors": {
        "confidence": "reported",
        "asOf": "2024-05-10",
        "note": "L&T (original, terminated), NCC (Package C2-A, about ₹501.25 Cr), Rahee Infratech (track, about ₹103.9 Cr).",
        "sources": [
          {
            "label": "Metro Rail Today: NCC awarded ₹501.25 Cr",
            "url": "https://metrorailtoday.com/news/ncc-awarded-50125-crore-civil-contract-for-bengaluru-suburban-rail-project"
          },
          {
            "label": "The Metro Rail Guy: Rahee track contract",
            "url": "https://themetrorailguy.com/?p=62228"
          },
          {
            "label": "Deccan Herald: fresh tenders",
            "url": "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Ffresh-tenders-to-bring-149-km-long-bengaluru-suburban-rail-project-back-on-track-3754945"
          }
        ]
      },
      "revisedEstimatedCostCr": {
        "confidence": "unverified",
        "asOf": "2024-06-20",
        "note": "Deccan Herald reports the whole 149 km project cost rose by about ₹1,019 Cr. No Corridor 2 specific revised cost was found.",
        "sources": [
          {
            "label": "Deccan Herald: work crawls but cost zooms",
            "url": "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Fbengaluru-suburban-rail-work-crawls-but-cost-zooms-by-rs-1k-cr-3849906"
          }
        ]
      },
      "actualDisbursedCr": {
        "confidence": "unverified",
        "asOf": "2026-11-21",
        "note": "No corridor-specific public expenditure records published.",
        "sources": [
          {
            "label": "Deccan Herald",
            "url": "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-suburban-railway-project-deadline-pushed-to-2028-2644956"
          }
        ]
      }
    },
    "corrections": [
      "Removed ₹15,767 Cr 'sanctioned' from this corridor: it is a whole-programme figure across all 4 lines.",
      "Removed ₹16,800 Cr revised cost, ₹1,150 Cr paid, 18.5% and 24.2% progress.",
      "Changed deadline from December 2026 to December 2028 per recent official targets.",
      "Updated contractor statuses following L&T termination and fresh package awards."
    ]
  },
  "contractors": [
    {
      "name": "Larsen & Toubro (L&T)",
      "awardedAmountCr": 859.97,
      "contractAwardDate": "2022-08-01",
      "status": "terminated",
      "scope": "Original civil contract; reported to have halted work and terminated the agreement"
    },
    {
      "name": "NCC Ltd.",
      "awardedAmountCr": 501.25,
      "contractAwardDate": null,
      "status": "active",
      "scope": "Package C2-A: 12 stations along Corridor 2"
    },
    {
      "name": "Rahee Infratech Ltd.",
      "awardedAmountCr": 103.93,
      "contractAwardDate": null,
      "status": "active",
      "scope": "Track laying and ballastless track works"
    }
  ],
  "contractorsNote": "Another award to Cemindia Projects (about ₹665.61 Cr, elevated sections and stations) is reported but not yet matched to a package.",
  "milestones": [
    {
      "id": "kr-m1",
      "date": "2022-08-01",
      "stageName": "Civil work order issued to L&T",
      "description": "Initial civil contract awarded for about ₹859 Cr with a 24-month deadline.",
      "source": {
        "label": "inkl / news report",
        "url": "https://www.inkl.com/news/k-ride-issues-work-order-for-suburban-rail-project-work-to-start-soon"
      }
    },
    {
      "id": "kr-m2",
      "date": "2025-11-01",
      "stageName": "Fresh tenders for Mallige Line civil works",
      "description": "Remaining civil work re-tendered in three separate packages.",
      "source": {
        "label": "Asianet Newsable",
        "url": "https://newsable.asianetnews.com/karnataka-news/k-ride-fresh-tender-mallige-line-civil-works-bengaluru-suburban-rail-phase-articleshow-xgif8oh"
      }
    }
  ],
  "redFlags": [
    {
      "id": "rf-kr-terminated",
      "type": "FREQUENT_CONTRACTOR_TERMINATION",
      "severity": "HIGH",
      "title": "Original civil contractor exited due to delays; packages re-tendered",
      "summary": "L&T terminated its contract after delays in land and railway permissions; K-RIDE subsequently divided the corridor into multiple packages.",
      "calculatedMetric": "Re-tendered after L&T exit",
      "officialCitation": {
        "sourceName": "Deccan Herald",
        "documentUrl": "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Ffresh-tenders-to-bring-149-km-long-bengaluru-suburban-rail-project-back-on-track-3754945"
      }
    },
    {
      "id": "rf-kr-delay",
      "type": "TIMELINE_DELAY",
      "severity": "HIGH",
      "title": "Target opening pushed to December 2028",
      "summary": "Corridor 2 was initially targeted for completion in 2024–2025; revisions now target December 2028.",
      "calculatedMetric": "Dec 2028 target (reported)",
      "officialCitation": {
        "sourceName": "Deccan Herald",
        "documentUrl": "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-suburban-railway-project-deadline-pushed-to-2028-2644956"
      }
    },
    {
      "id": "rf-kr-cost",
      "type": "COST_OVERRUN",
      "severity": "MEDIUM",
      "title": "Total suburban rail project cost increased by ~₹1,019 Cr",
      "summary": "Deccan Herald reports the cost of the full 149 km network has risen by about ₹1,019 Cr across all 4 corridors.",
      "calculatedMetric": "≈ +₹1,019 Cr (whole programme)",
      "officialCitation": {
        "sourceName": "Deccan Herald",
        "documentUrl": "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Fbengaluru-suburban-rail-work-crawls-but-cost-zooms-by-rs-1k-cr-3849906"
      }
    }
  ],
  "articles": [
    {
      "title": "Bengaluru suburban railway project deadline pushed to 2028",
      "outlet": "Deccan Herald",
      "publishedDate": "2024-03-01",
      "url": "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-suburban-railway-project-deadline-pushed-to-2028-2644956",
      "claim": "Suburban rail Corridor 2 target pushed to December 2028",
      "checkedOn": "2026-11-23",
      "excerpt": "Bengaluru suburban railway project deadline pushed to 2028 reports that suburban rail corridor 2 target pushed to december 2028."
    },
    {
      "title": "Fresh tenders to bring 149-km-long Bengaluru Suburban Rail project back on track",
      "outlet": "Deccan Herald",
      "publishedDate": "2024-04-18",
      "url": "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Ffresh-tenders-to-bring-149-km-long-bengaluru-suburban-rail-project-back-on-track-3754945",
      "claim": "Re-tendering of Corridor 2 civil packages following contractor exit",
      "checkedOn": "2026-11-23",
      "excerpt": "Fresh tenders to bring 149-km-long Bengaluru Suburban Rail project back on track reports that re-tendering of corridor 2 civil packages following contractor exit."
    },
    {
      "title": "NCC awarded Rs 501.25 crore civil contract for Bengaluru Suburban Rail Project",
      "outlet": "Metro Rail Today",
      "publishedDate": "2024-05-10",
      "url": "https://metrorailtoday.com/news/ncc-awarded-50125-crore-civil-contract-for-bengaluru-suburban-rail-project",
      "claim": "Award of Package C2-A for 12 stations to NCC Ltd.",
      "checkedOn": "2026-11-23",
      "excerpt": "NCC awarded Rs 501.25 crore civil contract for Bengaluru Suburban Rail Project reports that award of package c2-a for 12 stations to ncc ltd.."
    },
    {
      "title": "Bengaluru Suburban Rail back on track as K-RIDE divides Mallige Line work into three packages",
      "outlet": "OneIndia",
      "publishedDate": "2024-05-22",
      "url": "https://www.oneindia.com/bengaluru/bengaluru-suburban-rail-back-on-track-as-k-ride-divides-mallige-line-work-into-three-packages-7908251.html",
      "claim": "Packaging strategy and timeline milestones for Corridor 2",
      "checkedOn": "2026-11-23",
      "excerpt": "Bengaluru Suburban Rail back on track as K-RIDE divides Mallige Line work into three packages reports that packaging strategy and timeline milestones for corridor 2."
    }
  ],
  "officialDocLinks": [
    {
      "label": "K-RIDE Official Tenders Portal",
      "url": "https://kride.in/tender",
      "type": "TENDER_NOTICE"
    },
    {
      "label": "Deccan Herald: Fresh tenders for suburban rail",
      "url": "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Ffresh-tenders-to-bring-149-km-long-bengaluru-suburban-rail-project-back-on-track-3754945",
      "type": "NEWS_REPORT"
    }
  ]
};
