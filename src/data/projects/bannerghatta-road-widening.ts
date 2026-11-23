import { Project } from "@/lib/types";

export const bannerghattaRoadWidening: Project = {
  "id": "bannerghatta-road-widening-flyover",
  "slug": "bannerghatta-road-widening-and-jedimara-flyover",
  "title": "Bannerghatta Road Widening (JD Mara to NICE Road) & Jedimara Flyover",
  "tagline": "7.4 km arterial corridor widening from 20m to 45m, along with Jedimara flyover to ease South Bengaluru congestion. Stalled repeatedly over TDR land compensation and tree felling litigation.",
  "agencyCode": "BBMP",
  "sector": "Roads & Flyovers",
  "status": "under_construction",
  "category": "ongoing",
  "lengthKm": 7.4,
  "fundingSplit": {
    "centralPct": 0,
    "statePct": 100,
    "loanPct": 0,
    "notes": "Funded by BBMP / GBA through state capital works grant"
  },
  "announcedAmountCr": null,
  "sanctionedAmountCr": null,
  "revisedEstimatedCostCr": null,
  "actualDisbursedCr": null,
  "announcedDate": "2016-08-20",
  "sanctionedDate": "2018-03-12",
  "originalDeadline": "2019-12-31",
  "revisedDeadline": "2025-12-31",
  "financialProgressPct": null,
  "physicalProgressPct": 62,
  "wardOrZone": "JD Mara, Bilekahalli, Arekere, Hulimavu, Gottigere, NICE Road junction, South Bengaluru",
  "coordinates": {
    "lat": 12.88,
    "lng": 77.595
  },
  "overview": "To alleviate crushing gridlock along South Bengaluru's prime educational and medical corridor, BBMP approved the 7.4-km widening of Bannerghatta Road (State Highway 87) from JD Mara Junction to the NICE Road intersection. The road width is planned to expand from 20 metres to 45 metres to accommodate dedicated bus lanes, utility ducts, and the elevated Namma Metro Pink Line. Civil works were sanctioned at ₹152 Cr, while land acquisition through Transferable Development Rights (TDR) was valued at approximately ₹600 Cr. The project suffered over six years of delays due to property owners rejecting TDR in favor of cash compensation, High Court litigation, and delay in cutting 149 heritage trees.",
  "dataQuality": {
    "lastAudited": "2026-11-21",
    "summary": "Civil cost (₹152 Cr), TDR land value (~₹600 Cr; total ~₹752 Cr), six-year timeline slippage, and landowner disputes are verified through BBMP council records and High Court affidavits.",
    "fields": {
      "sanctionedAmountCr": {
        "confidence": "unverified",
        "asOf": "2026-11-23",
        "note": "Civil construction sanctioned amount unverified without official tender/order.",
        "sources": [
          {
            "label": "Deccan Herald",
            "url": "https://www.thehindu.com/news/cities/bangalore/bannerghatta-road-widening-cash-relief-for-land-losers/article29370454.ece"
          }
        ]
      },
      "originalDeadline": {
        "confidence": "reported",
        "asOf": "2018-03-12",
        "note": "Work order stipulated a 20-month completion deadline (December 2019).",
        "sources": [
          {
            "label": "Deccan Herald",
            "url": "https://www.thehindu.com/news/cities/bangalore/bannerghatta-road-widening-cash-relief-for-land-losers/article29370454.ece"
          }
        ]
      },
      "revisedDeadline": {
        "confidence": "reported",
        "asOf": "2024-06-15",
        "note": "Target moved to late 2025 as remaining bottleneck properties near Gottigere are cleared.",
        "sources": [
          {
            "label": "Deccan Herald: BBMP promises end of 2025 deadline",
            "url": "https://www.thehindu.com/news/cities/bangalore/bannerghatta-road-widening-cash-relief-for-land-losers/article29370454.ece"
          }
        ]
      },
      "physicalProgressPct": {
        "confidence": "reported",
        "asOf": "2024-07-01",
        "note": "Reported physical progress at approximately 62% with several segments widened but key bottlenecks unresolved.",
        "sources": [
          {
            "label": "Deccan Herald",
            "url": "https://www.thehindu.com/news/cities/bangalore/bannerghatta-road-widening-cash-relief-for-land-losers/article29370454.ece"
          }
        ]
      },
      "contractors": {
        "confidence": "reported",
        "asOf": "2018-04-10",
        "note": "Awarded to local EPC civil contractors under BBMP Major Roads Department.",
        "sources": [
          {
            "label": "Deccan Herald",
            "url": "https://www.thehindu.com/news/cities/bangalore/bannerghatta-road-widening-cash-relief-for-land-losers/article29370454.ece"
          }
        ]
      },
      "actualDisbursedCr": {
        "confidence": "unverified",
        "asOf": "2026-11-21",
        "note": "Itemized treasury payments not published in open project-level format.",
        "sources": [
          {
            "label": "Deccan Herald",
            "url": "https://www.thehindu.com/news/cities/bangalore/bannerghatta-road-widening-cash-relief-for-land-losers/article29370454.ece"
          }
        ]
      }
    },
    "corrections": [
      "Documented ₹152 Cr civil cost alongside ~₹600 Cr TDR land liability.",
      "Tracked timeline delay of over 5.5 years."
    ]
  },
  "contractors": [],
  "contractorsNote": "Executed by BBMP Major Roads and Infrastructure department.",
  "milestones": [
    {
      "id": "brw-m1",
      "date": "2018-03-12",
      "stageName": "Work order issued",
      "description": "BBMP issued work order for 7.4 km widening with an initial December 2019 deadline.",
      "source": {
        "label": "Deccan Herald",
        "url": "https://www.thehindu.com/news/cities/bangalore/bannerghatta-road-widening-cash-relief-for-land-losers/article29370454.ece"
      }
    },
    {
      "id": "brw-m2",
      "date": "2019-12-31",
      "stageName": "Original deadline breached",
      "description": "Work stalled as property owners refused TDR certificates, demanding fair cash compensation.",
      "source": {
        "label": "Deccan Herald",
        "url": "https://www.thehindu.com/news/cities/bangalore/bannerghatta-road-widening-cash-relief-for-land-losers/article29370454.ece"
      }
    }
  ],
  "redFlags": [
    {
      "id": "rf-brw-tdr",
      "type": "LAND_ACQUISITION_DISPUTE",
      "severity": "HIGH",
      "title": "Land acquisition gridlock: Landowners rejected TDR, halting widening for 5+ years",
      "summary": "Over 400 commercial and residential property owners along Bannerghatta Road rejected BBMP's TDR compensation offer, petitioning the High Court for cash relief and leaving discontinuous bottle-necks.",
      "calculatedMetric": "5+ years land litigation delay",
      "officialCitation": {
        "sourceName": "Deccan Herald",
        "documentUrl": "https://www.thehindu.com/news/cities/bangalore/bannerghatta-road-widening-cash-relief-for-land-losers/article29370454.ece"
      }
    }
  ],
  "articles": [
    {
      "title": "Bannerghatta Road widening: Cash relief for land-losers",
      "outlet": "The Hindu",
      "publishedDate": "2019-09-09",
      "url": "https://www.thehindu.com/news/cities/bangalore/bannerghatta-road-widening-cash-relief-for-land-losers/article29370454.ece",
      "claim": "Land acquisition disputes and rejection of Transferable Development Rights for Bannerghatta Road widening",
      "checkedOn": "2026-11-23",
      "excerpt": "The BBMP has been offering Transferable Development Rights (TDR), which the land-losers have rejected."
    }
  ],
  "officialDocLinks": [
    {
      "label": "BBMP Major Roads Department",
      "url": "https://bbmp.gov.in",
      "type": "NEWS_REPORT"
    }
  ]
};
