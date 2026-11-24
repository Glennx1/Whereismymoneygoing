import { Project } from "@/lib/types";

export const bdaPeripheralRingRoad: Project = {
  "id": "bda-peripheral-ring-road",
  "slug": "bda-peripheral-ring-road-business-corridor",
  "title": "BDA Bengaluru Business Corridor (Peripheral Ring Road)",
  "tagline": "73 km planned ring road around eastern and northern Bengaluru. After multiple failed tender rounds, Package 1 (21 km, Madavara to Ballari Road) was awarded.",
  "agencyCode": "BDA",
  "sector": "Roads & Flyovers",
  "status": "tendering",
  "category": "planned",
  "lengthKm": 73,
  "announcedAmountCr": null,
  "sanctionedAmountCr": null,
  "revisedEstimatedCostCr": 27000,
  "actualDisbursedCr": null,
  "announcedDate": null,
  "sanctionedDate": null,
  "originalDeadline": null,
  "revisedDeadline": "2029-12-31",
  "financialProgressPct": null,
  "physicalProgressPct": null,
  "wardOrZone": "Peripheral Bengaluru: Tumakuru Road, Ballari Road, Old Madras Road, Hosur Road",
  "coordinates": {
    "lat": 13.0645,
    "lng": 77.7214
  },
  "overview": "A planned ring expressway around Bengaluru, now branded the Bengaluru Business Corridor. Tenders in 2022 drew no response, partly because farmer compensation was unsettled; a 2024 re-tender drew only one bidder. Global tenders for the first phase (about 19.8 km between Tumakuru and Ballari roads) were floated in early 2026. A Letter of Acceptance for Package 1 (about 21 km, Madavara to Ballari Road; package estimate ₹3,348 Cr) has reportedly been issued to Shankaranarayana Constructions after two firms bid. The whole corridor is estimated at roughly ₹27,000 Cr, of which about ₹21,000 Cr is earmarked for land acquisition.",
  "dataQuality": {
    "lastAudited": "2026-11-21",
    "summary": "Recent tender events are reported by several outlets, but the exact award date and award value of Package 1 are not confirmed. The earlier claim of 'zero bids' is outdated.",
    "fields": {
      "revisedEstimatedCostCr": {
        "confidence": "reported",
        "asOf": "2024-03-31",
        "note": "Whole-corridor cost reported between ₹26,786 Cr and about ₹27,000 Cr including land acquisition (about ₹21,000 Cr). Package 1 alone is estimated at ₹3,348 Cr.",
        "sources": [
          {
            "label": "ETV Bharat: global tenders floated for first phase",
            "url": "https://www.etvbharat.com/en/state/bengaluru-business-corridor-global-tenders-floated-for-20k-first-phase-works-enn26033105183"
          },
          {
            "label": "Swarajya: ₹3,348 Cr bids for first package",
            "url": "https://swarajyamag.com/amp/story/news-brief%2Fbangalore-development-authority-invites-rs-3348-crore-bids-for-first-package-of-bengaluru-business-corridor-project"
          }
        ]
      },
      "revisedDeadline": {
        "confidence": "reported",
        "asOf": "2024-04-15",
        "note": "Completion targeted around 2029; the contract deadline is 36 months from the work order date, which is not confirmed.",
        "sources": [
          {
            "label": "Deccan Herald",
            "url": "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-business-corridor-deadlock-over-as-bda-begins-issuing-awards-for-land-3809159"
          }
        ]
      },
      "contractors": {
        "confidence": "reported",
        "asOf": "2024-06-01",
        "note": "Letter of Acceptance for Package 1 reported to Shankaranarayana Constructions. Award date and value not confirmed.",
        "sources": [
          {
            "label": "OneIndia: two firms bid for Package 1",
            "url": "https://www.oneindia.com/bengaluru/bengaluru-business-corridor-nears-execution-as-two-firms-bid-for-prr-package-1-8081733.html"
          }
        ]
      },
      "status": {
        "confidence": "reported",
        "asOf": "2024-06-15",
        "note": "First package awarded; land awards being issued. No construction progress figure found.",
        "sources": [
          {
            "label": "Deccan Herald: BDA begins issuing land awards",
            "url": "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-business-corridor-deadlock-over-as-bda-begins-issuing-awards-for-land-3809159"
          }
        ]
      },
      "actualDisbursedCr": {
        "confidence": "unverified",
        "asOf": "2026-11-21",
        "note": "No published figure for public expenditure disbursed so far.",
        "sources": [
          {
            "label": "Deccan Herald",
            "url": "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-business-corridor-deadlock-over-as-bda-begins-issuing-awards-for-land-3809159"
          }
        ]
      },
      "sanctionedAmountCr": {
        "confidence": "unverified",
        "asOf": "2026-11-21",
        "note": "Earlier version showed ₹15,300 Cr sanctioned; no primary government order matched yet.",
        "sources": [
          {
            "label": "Deccan Herald",
            "url": "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-business-corridor-deadlock-over-as-bda-begins-issuing-awards-for-land-3809159"
          }
        ]
      }
    },
    "corrections": [
      "Removed 'zero bids received': Package 1 drew two bids and a Letter of Acceptance was reported.",
      "Removed 'Stalled for 18 years', ₹3,800 Cr original cost, ₹15,300 Cr sanctioned, ₹850 Cr paid, '700+ landowner petitions': no source.",
      "Corrected the headline cost to the ~₹27,000 Cr corridor estimate with ₹21,000 Cr land acquisition component."
    ]
  },
  "contractors": [
    {
      "name": "Shankaranarayana Constructions",
      "awardedAmountCr": null,
      "contractAwardDate": null,
      "status": "active",
      "scope": "Package 1: about 21 km, Madavara to Ballari Road (Letter of Acceptance reported; package estimate ₹3,348 Cr)"
    }
  ],
  "milestones": [
    {
      "id": "prr-m1",
      "date": "2024-01-15",
      "stageName": "Tender re-issued as Bengaluru Business Corridor",
      "description": "Earlier 2022 tenders drew no response; re-tendered under new branding.",
      "source": {
        "label": "Swarajya",
        "url": "https://swarajyamag.com/amp/story/infrastructure/bengaluru-business-corridor-bda-initiates-global-tender-for-long-pending-peripheral-ring-road-project"
      }
    },
    {
      "id": "prr-m2",
      "date": "2024-03-31",
      "stageName": "Global tenders floated for first phase",
      "description": "First phase between Tumakuru and Ballari roads with 36 months construction window.",
      "source": {
        "label": "ETV Bharat",
        "url": "https://www.etvbharat.com/en/state/bengaluru-business-corridor-global-tenders-floated-for-20k-first-phase-works-enn26033105183"
      }
    }
  ],
  "redFlags": [
    {
      "id": "rf-prr-bidders",
      "type": "SINGLE_BIDDER",
      "severity": "HIGH",
      "title": "Earlier tender rounds struggled with low participation",
      "summary": "Tenders in 2022 drew no response and the 2024 re-tender drew only one bidder; large firms stayed away due to unacquired land risks. Package 1 later drew two bids.",
      "calculatedMetric": "0 bids (2022), 1 bid (2024), 2 bids (Package 1)",
      "officialCitation": {
        "sourceName": "Deccan Herald",
        "documentUrl": "https://www.deccanherald.com/amp/story/india%2Fkarnataka%2Fbengaluru%2Fperipheral-ring-road-project-bda-issues-tender-for-3rd-time-2871899"
      }
    },
    {
      "id": "rf-prr-cost",
      "type": "COST_OVERRUN",
      "severity": "HIGH",
      "title": "Corridor estimated at about ₹27,000 Cr, largely driven by land acquisition",
      "summary": "Reports put the total corridor at roughly ₹27,000 Cr, with about ₹21,000 Cr allocated to land compensation across peripheral taluks.",
      "calculatedMetric": "≈ ₹27,000 Cr total, ≈ ₹21,000 Cr land (reported)",
      "officialCitation": {
        "sourceName": "ETV Bharat",
        "documentUrl": "https://www.etvbharat.com/en/state/bengaluru-business-corridor-global-tenders-floated-for-20k-first-phase-works-enn26033105183"
      }
    }
  ],
  "articles": [
    {
      "title": "Bengaluru Business Corridor deadlock over as BDA begins issuing awards for land",
      "outlet": "Deccan Herald",
      "publishedDate": "2024-06-15",
      "url": "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-business-corridor-deadlock-over-as-bda-begins-issuing-awards-for-land-3809159",
      "claim": "Reports BDA issuing compensation awards to land owners",
      "checkedOn": "2026-11-23",
      "excerpt": "the pace of awards will accelerate in the coming days, putting the land acquisition machinery into its most active phase"
    },
    {
      "title": "Bengaluru Business Corridor: Global tenders floated for 20k first phase works",
      "outlet": "ETV Bharat",
      "publishedDate": "2024-03-31",
      "url": "https://www.etvbharat.com/en/state/bengaluru-business-corridor-global-tenders-floated-for-20k-first-phase-works-enn26033105183",
      "claim": "Corridor cost ₹27,000 Cr and Phase 1 tender issuance",
      "checkedOn": "2026-11-23",
      "excerpt": "The project will use a design, build, operate and transfer model and includes 10 years of operations and maintenance."
    },
    {
      "title": "Bangalore Development Authority invites Rs 3,348 crore bids for first package of PRR",
      "outlet": "Swarajya",
      "publishedDate": "2024-04-10",
      "url": "https://swarajyamag.com/amp/story/news-brief%2Fbangalore-development-authority-invites-rs-3348-crore-bids-for-first-package-of-bengaluru-business-corridor-project",
      "claim": "Package 1 estimate of ₹3,348 Cr for Madavara to Ballari Road stretch",
      "checkedOn": "2026-11-23",
      "excerpt": "The Bangalore Development Authority (BDA) has invited bids for civil works covering a nearly 20 km section."
    },
    {
      "title": "Bengaluru Business Corridor nears execution as two firms bid for PRR Package 1",
      "outlet": "OneIndia",
      "publishedDate": "2024-05-28",
      "url": "https://www.oneindia.com/bengaluru/bengaluru-business-corridor-nears-execution-as-two-firms-bid-for-prr-package-1-8081733.html",
      "claim": "Bidding outcome with 2 bidders and LOA recommendation",
      "checkedOn": "2026-11-23",
      "excerpt": "The Bengaluru Business Corridor is estimated to cost around Rs 26,786 crore, including land acquisition costs."
    }
  ],
  "officialDocLinks": [
    {
      "label": "Deccan Herald: BDA issues land awards",
      "url": "https://www.deccanherald.com/india/karnataka/bengaluru/bengaluru-business-corridor-deadlock-over-as-bda-begins-issuing-awards-for-land-3809159",
      "type": "NEWS_REPORT"
    },
    {
      "label": "ETV Bharat: global tenders for first phase",
      "url": "https://www.etvbharat.com/en/state/bengaluru-business-corridor-global-tenders-floated-for-20k-first-phase-works-enn26033105183",
      "type": "NEWS_REPORT"
    }
  ]
};
