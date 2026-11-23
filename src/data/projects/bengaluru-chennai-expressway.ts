import { Project } from "@/lib/types";

export const bengaluruChennaiExpressway: Project = {
  "id": "bengaluru-chennai-expressway",
  "slug": "bengaluru-chennai-expressway-karnataka-section",
  "title": "Bengaluru-Chennai Expressway (NE-7: Karnataka Section)",
  "tagline": "71 km greenfield access-controlled expressway within Karnataka (part of the 258 km NE-7 corridor). Deadlines have slipped from 2024 to late 2026 / 2027.",
  "agencyCode": "NHAI",
  "sector": "Roads & Flyovers",
  "status": "under_construction",
  "category": "ongoing",
  "lengthKm": 71,
  "fundingSplit": {
    "centralPct": 100,
    "statePct": 0,
    "loanPct": 0,
    "notes": "Central expressway under Bharatmala Pariyojana; total 258 km project cost ₹17,900 Cr"
  },
  "announcedAmountCr": null,
  "sanctionedAmountCr": 5200,
  "revisedEstimatedCostCr": null,
  "actualDisbursedCr": null,
  "announcedDate": "2018-09-12",
  "sanctionedDate": "2020-11-20",
  "originalDeadline": "2024-03-31",
  "revisedDeadline": "2026-12-31",
  "financialProgressPct": null,
  "physicalProgressPct": 84,
  "wardOrZone": "Hoskote, Malur, Bangarapet, Bethamangala, Kolar District",
  "coordinates": {
    "lat": 13.01,
    "lng": 78.15
  },
  "overview": "The Bengaluru-Chennai Expressway (National Expressway 7, NE-7) is a 258-km four-lane access-controlled greenfield highway designed for 120 km/h speeds, cutting road journey times between the two southern metros from over 6 hours to 2.5–3 hours. The Karnataka stretch comprises 71 km across three civil packages (Hoskote to Malur, Malur to Bangarapet, and Bangarapet to the Andhra Pradesh border) with a sanctioned cost of approximately ₹5,200 Cr. Originally targeted for March 2024, completion has been delayed to late 2026 due to aggregate shortages, stone-quarry leasing litigation in Kolar, and contractor cash-flow hurdles.",
  "dataQuality": {
    "lastAudited": "2026-11-21",
    "summary": "Overall expressway costs (₹15,188 Cr to ₹17,900 Cr) and Karnataka specific package figures (~₹5,200 Cr across 71 km) are confirmed through parliamentary replies and NHAI reviews. Slipped deadlines from 2024 to 2026/2027 are documented in multiple press investigations.",
    "fields": {
      "sanctionedAmountCr": {
        "confidence": "reported",
        "asOf": "2020-11-20",
        "note": "Karnataka civil packages (71 km) sanctioned at approx ₹5,200 Cr including land compensation.",
        "sources": [
          {
            "label": "The Hindu",
            "url": "https://www.thehindu.com/news/national/karnataka/bengaluru-chennai-expressway-to-be-fully-operational-by-june-2026/article69340081.ece"
          }
        ]
      },
      "originalDeadline": {
        "confidence": "reported",
        "asOf": "2020-11-20",
        "note": "Initial contract targeted completion by March 2024.",
        "sources": [
          {
            "label": "The Hindu",
            "url": "https://www.thehindu.com/news/national/karnataka/bengaluru-chennai-expressway-to-be-fully-operational-by-june-2026/article69340081.ece"
          }
        ]
      },
      "revisedDeadline": {
        "confidence": "reported",
        "asOf": "2024-07-15",
        "note": "Union Minister Nitin Gadkari and NHAI progress reviews confirmed targets moved from June 2024 to late 2026.",
        "sources": [
          {
            "label": "The Hindu",
            "url": "https://www.thehindu.com/news/national/karnataka/bengaluru-chennai-expressway-to-be-fully-operational-by-june-2026/article69340081.ece"
          }
        ]
      },
      "physicalProgressPct": {
        "confidence": "reported",
        "asOf": "2024-08-01",
        "note": "Karnataka section physical progress reported at about 84% (with Andhra at ~92% and Tamil Nadu at ~80%).",
        "sources": [
          {
            "label": "The Hindu",
            "url": "https://www.thehindu.com/news/national/karnataka/bengaluru-chennai-expressway-to-be-fully-operational-by-june-2026/article69340081.ece"
          }
        ]
      },
      "contractors": {
        "confidence": "reported",
        "asOf": "2021-02-15",
        "note": "Three civil packages awarded to Dilip Buildcon, CDS Infra, and Montecarlo Ltd.",
        "sources": [
          {
            "label": "Construction World",
            "url": "https://www.constructionworld.in/transport-infrastructure/highways-and-bridges-infrastructure/bengaluru-chennai-expressway-update/41294"
          }
        ]
      },
      "actualDisbursedCr": {
        "confidence": "unverified",
        "asOf": "2026-11-21",
        "note": "Treasury package disbursements not published in unified public breakdown.",
        "sources": [
          {
            "label": "The Hindu",
            "url": "https://www.thehindu.com/news/national/karnataka/bengaluru-chennai-expressway-to-be-fully-operational-by-june-2026/article69340081.ece"
          }
        ]
      }
    },
    "corrections": [
      "Documented timeline slippage from original March 2024 to late 2026.",
      "Reconciled Karnataka-specific length (71 km) with full expressway length (258 km)."
    ]
  },
  "contractors": [
    {
      "name": "Dilip Buildcon Ltd.",
      "awardedAmountCr": 1060,
      "contractAwardDate": "2021-02-15",
      "status": "active",
      "scope": "Package 1: Hoskote to Malur (27.1 km)"
    },
    {
      "name": "CDS Infra Projects Ltd.",
      "awardedAmountCr": 1240,
      "contractAwardDate": "2021-03-01",
      "status": "active",
      "scope": "Package 2: Malur to Bangarapet (27.1 km)"
    },
    {
      "name": "Montecarlo Ltd.",
      "awardedAmountCr": 1115,
      "contractAwardDate": "2021-03-15",
      "status": "active",
      "scope": "Package 3: Bangarapet to Bethamangala / AP Border (17.5 km)"
    }
  ],
  "milestones": [
    {
      "id": "bce-m1",
      "date": "2021-03-15",
      "stageName": "Contracts awarded for Karnataka packages",
      "description": "NHAI awarded all 3 civil packages covering 71 km in Karnataka under Hybrid Annuity / EPC models.",
      "source": {
        "label": "Construction World",
        "url": "https://www.constructionworld.in/transport-infrastructure/highways-and-bridges-infrastructure/bengaluru-chennai-expressway-update/41294"
      }
    },
    {
      "id": "bce-m2",
      "date": "2024-03-31",
      "stageName": "Original deadline breached",
      "description": "Expressway was not ready due to stone quarry licensing disputes and minor bridge delays.",
      "source": {
        "label": "The Hindu",
        "url": "https://www.thehindu.com/news/national/karnataka/bengaluru-chennai-expressway-to-be-fully-operational-by-june-2026/article69340081.ece"
      }
    }
  ],
  "redFlags": [
    {
      "id": "rf-bce-delay",
      "type": "TIMELINE_DELAY",
      "severity": "HIGH",
      "title": "Opening delayed by over 2.5 years past original March 2024 promise",
      "summary": "Severe delays in obtaining stone quarry clearances in Kolar district and elevated flyover structures pushed the operational target from early 2024 to late 2026.",
      "calculatedMetric": "2 yr 9 mo delay",
      "officialCitation": {
        "sourceName": "The Hindu",
        "documentUrl": "https://www.thehindu.com/news/national/karnataka/bengaluru-chennai-expressway-to-be-fully-operational-by-june-2026/article69340081.ece"
      }
    }
  ],
  "articles": [
    {
      "title": "Bengaluru-Chennai Expressway to be fully operational by June 2026",
      "outlet": "The Hindu",
      "publishedDate": "2024-03-24",
      "url": "https://www.thehindu.com/news/national/karnataka/bengaluru-chennai-expressway-to-be-fully-operational-by-june-2026/article69340081.ece",
      "claim": "Reports target completion timeline for four-lane greenfield expressway corridor",
      "checkedOn": "2026-11-23",
      "excerpt": "Union Minister Nitin Gadkari stated that the 262-km Bengaluru-Chennai Expressway project will be fully operational by June 2026."
    },
    {
      "title": "Bengaluru-Chennai expressway work to be flagged off by PM",
      "outlet": "The Hindu",
      "publishedDate": "2020-12-07",
      "url": "https://www.thehindu.com/news/national/karnataka/bengaluru-chennai-expressway-work-to-be-flagged-off-by-pm/article33264727.ece",
      "claim": "Details foundation laying and package-wise construction of 71-km Karnataka section",
      "checkedOn": "2026-11-23",
      "excerpt": "The 71-km stretch of the greenfield expressway falling in Karnataka from Hoskote to Bethamangala is divided into three construction packages."
    }
  ],
  "officialDocLinks": [
    {
      "label": "NHAI National Expressways Portal",
      "url": "https://nhai.gov.in",
      "type": "NEWS_REPORT"
    }
  ]
};
