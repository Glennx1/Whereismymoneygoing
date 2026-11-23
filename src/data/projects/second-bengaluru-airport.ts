import { Project } from "@/lib/types";

export const secondBengaluruAirport: Project = {
  "id": "second-bengaluru-airport",
  "slug": "second-bengaluru-commercial-airport-feasibility",
  "title": "Second Bengaluru Commercial Airport (Site Selection & Feasibility)",
  "tagline": "Feasibility study tendered by KSIIDC to identify the location for Bengaluru's second international airport. Unresolved 150-km exclusivity clause with BIAL until May 2033.",
  "agencyCode": "BDA",
  "sector": "Aviation",
  "status": "announced",
  "category": "planned",
  "lengthKm": null,
  "announcedAmountCr": null,
  "sanctionedAmountCr": null,
  "revisedEstimatedCostCr": null,
  "actualDisbursedCr": null,
  "announcedDate": "2024-06-20",
  "sanctionedDate": null,
  "originalDeadline": null,
  "revisedDeadline": null,
  "financialProgressPct": null,
  "physicalProgressPct": null,
  "wardOrZone": "Candidate sites: Bidadi / Ramanagara, Harohalli, Kanakapura, Tumakuru Road",
  "coordinates": {
    "lat": 12.68,
    "lng": 77.4
  },
  "overview": "With Kempegowda International Airport (KIA) at Devanahalli projected to reach its peak capacity of 100 million passengers annually by the mid-2030s, the Karnataka government initiated formal steps to build a second commercial airport for the Bengaluru metropolitan region. The Karnataka State Industrial and Infrastructure Development Corporation (KSIIDC) invited tenders for a techno-economic feasibility study. Candidate locations under active assessment include Bidadi/Ramanagara, Harohalli, Kanakapura Road, and Tumakuru. A major legal constraint is the 150-km exclusivity clause in BIAL's concession agreement, which bars another commercial airport within 150 km of Devanahalli until May 2033. No cost estimate has been finalized yet.",
  "dataQuality": {
    "lastAudited": "2026-11-21",
    "summary": "Tender for feasibility study, site debates, and the 2033 BIAL exclusivity clause are verified across national news reports. No capital outlay or project cost has been sanctioned yet; cost fields remain null as per data rules.",
    "fields": {
      "sanctionedAmountCr": {
        "confidence": "unverified",
        "asOf": "2026-11-21",
        "note": "No capital project budget sanctioned yet; pre-feasibility study phase.",
        "sources": [
          {
            "label": "The Hindu",
            "url": "https://www.thehindu.com/news/cities/bangalore/second-airport-in-bengaluru-will-be-within-50-70-km-from-city/article68411387.ece"
          }
        ]
      },
      "status": {
        "confidence": "reported",
        "asOf": "2024-07-01",
        "note": "Announced by Karnataka infrastructure minister; KSIIDC feasibility study tendered.",
        "sources": [
          {
            "label": "The Hindu",
            "url": "https://www.thehindu.com/news/cities/bangalore/second-airport-in-bengaluru-will-be-within-50-70-km-from-city/article68411387.ece"
          }
        ]
      },
      "actualDisbursedCr": {
        "confidence": "unverified",
        "asOf": "2026-11-21",
        "note": "Zero construction expenditure incurred.",
        "sources": [
          {
            "label": "The Hindu",
            "url": "https://www.thehindu.com/news/cities/bangalore/second-airport-in-bengaluru-will-be-within-50-70-km-from-city/article68411387.ece"
          }
        ]
      }
    },
    "corrections": [
      "Retained cost as null: no government or DPR budget exists at this exploratory stage."
    ]
  },
  "contractors": [],
  "contractorsNote": "Feasibility consultant selection underway by KSIIDC.",
  "milestones": [
    {
      "id": "sba-m1",
      "date": "2024-06-20",
      "stageName": "Feasibility study tendered",
      "description": "KSIIDC invited global bids to evaluate passenger demand and site suitability for a second airport.",
      "source": {
        "label": "The Hindu",
        "url": "https://www.thehindu.com/news/cities/bangalore/second-airport-in-bengaluru-will-be-within-50-70-km-from-city/article68411387.ece"
      }
    }
  ],
  "redFlags": [
    {
      "id": "rf-sba-exclusivity",
      "type": "TIMELINE_DELAY",
      "severity": "MEDIUM",
      "title": "150-km exclusivity clause with BIAL bars commercial operations until May 2033",
      "summary": "The concession agreement signed between the Ministry of Civil Aviation and BIAL stipulates that no new or existing airport can be operated commercially within an aerial distance of 150 km of KIA until 25 years after its opening (May 2033).",
      "calculatedMetric": "Exclusivity active until May 2033",
      "officialCitation": {
        "sourceName": "The Hindu",
        "documentUrl": "https://www.thehindu.com/news/cities/bangalore/second-airport-in-bengaluru-will-be-within-50-70-km-from-city/article68411387.ece"
      }
    }
  ],
  "articles": [
    {
      "title": "Second airport in Bengaluru will be within 50-70 km from city",
      "outlet": "The Hindu",
      "publishedDate": "2024-07-17",
      "url": "https://www.thehindu.com/news/cities/bangalore/second-airport-in-bengaluru-will-be-within-50-70-km-from-city/article68411387.ece",
      "claim": "Confirms feasibility study and shortlist of potential locations within 50-70 km",
      "checkedOn": "2026-11-23",
      "excerpt": "Infrastructure Minister M.B. Patil said the proposed second international airport for Bengaluru will be located within 50 to 70 km from the city."
    },
    {
      "title": "Bengaluru's 2nd international airport plans accelerate: two locations shortlisted",
      "outlet": "The Times of India",
      "publishedDate": "2024-11-18",
      "url": "https://timesofindia.indiatimes.com/city/bengaluru/bengalurus-2nd-international-airport-plans-accelerate-two-locations-shortlisted/articleshow/115424685.cms",
      "claim": "Reports shortlisted sites along Kanakapura and Nelamangala corridors",
      "checkedOn": "2026-11-23",
      "excerpt": "The state government submitted shortlisted locations including sites along Kanakapura Road and Nelamangala-Kunigal Road to the Airports Authority of India."
    }
  ],
  "officialDocLinks": [
    {
      "label": "KSIIDC Tenders Portal",
      "url": "https://ksiidc.karnataka.gov.in",
      "type": "TENDER_NOTICE"
    }
  ]
};
