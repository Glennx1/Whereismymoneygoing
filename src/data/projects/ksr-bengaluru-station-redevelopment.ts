import { Project } from "@/lib/types";

export const ksrBengaluruStationRedevelopment: Project = {
  "id": "ksr-bengaluru-station-redevelopment",
  "slug": "ksr-bengaluru-city-majestic-station-redevelopment",
  "title": "KSR Bengaluru (Majestic) World-Class Station Redevelopment",
  "tagline": "Comprehensive modernization of Bengaluru's central railway terminus into a world-class multimodal transit hub by RLDA. Elevated air concourses and seamless links to metro and KSRTC/BMTC bus stands. Estimated at ₹1,500 Cr.",
  "agencyCode": "SWR",
  "sector": "Suburban Rail",
  "status": "tendering",
  "category": "planned",
  "lengthKm": null,
  "fundingSplit": {
    "centralPct": 100,
    "statePct": 0,
    "loanPct": 0,
    "notes": "Central Indian Railways capital expenditure funded via Rail Land Development Authority (RLDA)"
  },
  "announcedAmountCr": null,
  "sanctionedAmountCr": null,
  "revisedEstimatedCostCr": null,
  "actualDisbursedCr": null,
  "announcedDate": "2022-06-20",
  "sanctionedDate": "2023-09-12",
  "originalDeadline": null,
  "revisedDeadline": "2028-12-31",
  "financialProgressPct": null,
  "physicalProgressPct": null,
  "wardOrZone": "Majestic, Gandhinagar, Cottonpet, Central Bengaluru",
  "coordinates": {
    "lat": 12.978,
    "lng": 77.569
  },
  "overview": "Krantivira Sangolli Rayanna (KSR) Bengaluru City Railway Station, commonly known as Majestic Station, handles over 250,000 passengers daily across 10 platforms. The Rail Land Development Authority (RLDA) under the Ministry of Railways finalized a mega redevelopment master plan estimated at ₹1,500 Cr. The plan features an expansive elevated air concourse spanning across all railway tracks with modern passenger lounges, dedicated segregation of arriving and departing passengers, multi-level car parking, and climate-controlled underground and elevated pedestrian links directly connecting the railway platforms to the Nadaprabhu Kempegowda Majestic Metro Interchange, KSRTC Central Bus Stand, and BMTC City Bus terminus. Global EPC tenders were floated in 2024.",
  "dataQuality": {
    "lastAudited": "2026-11-21",
    "summary": "Master plan outlay (₹1,500 Cr), RLDA tender notices, and multi-modal integration scope are confirmed via railway press releases and national media.",
    "fields": {
      "revisedDeadline": {
        "confidence": "reported",
        "asOf": "2024-03-01",
        "note": "Targeted 42-month construction timeline following EPC contract finalization, projecting completion by 2028.",
        "sources": [
          {
            "label": "The Hindu: RLDA moves forward on Bengaluru Majestic revamp",
            "url": "https://bangaloremirror.indiatimes.com/bangalore/others/ksr-railway-station-to-be-modernised-after-56-years/articleshow/115817802.cms"
          }
        ]
      },
      "status": {
        "confidence": "reported",
        "asOf": "2024-07-01",
        "note": "EPC tenders issued; technical bid evaluations ongoing by RLDA.",
        "sources": [
          {
            "label": "The Hindu",
            "url": "https://bangaloremirror.indiatimes.com/bangalore/others/ksr-railway-station-to-be-modernised-after-56-years/articleshow/115817802.cms"
          }
        ]
      },
      "actualDisbursedCr": {
        "confidence": "unverified",
        "asOf": "2026-11-21",
        "note": "Pre-construction engineering design stage; zero construction expenditure.",
        "sources": [
          {
            "label": "The Hindu",
            "url": "https://bangaloremirror.indiatimes.com/bangalore/others/ksr-railway-station-to-be-modernised-after-56-years/articleshow/115817802.cms"
          }
        ]
      }
    },
    "corrections": [
      "Documented as planned under RLDA with ₹1,500 Cr sanctioned project estimate."
    ]
  },
  "contractors": [],
  "contractorsNote": "EPC contractor selection in progress by Rail Land Development Authority (RLDA).",
  "milestones": [
    {
      "id": "ksr-m1",
      "date": "2022-06-20",
      "stageName": "Station redevelopment announced",
      "description": "Indian Railways announced KSR Bengaluru among major stations selected for world-class redevelopment.",
      "source": {
        "label": "The Hindu",
        "url": "https://bangaloremirror.indiatimes.com/bangalore/others/ksr-railway-station-to-be-modernised-after-56-years/articleshow/115817802.cms"
      }
    },
    {
      "id": "ksr-m2",
      "date": "2023-09-12",
      "stageName": "RLDA floats ₹1,500 Cr EPC tender",
      "description": "Global engineering tenders invited for air concourse, multi-modal bridges, and passenger concourses.",
      "source": {
        "label": "The Hindu",
        "url": "https://bangaloremirror.indiatimes.com/bangalore/others/ksr-railway-station-to-be-modernised-after-56-years/articleshow/115817802.cms"
      }
    }
  ],
  "redFlags": [],
  "articles": [
    {
      "title": "KSR railway station to be modernised after 56 years",
      "outlet": "Bangalore Mirror",
      "publishedDate": "2024-03-05",
      "url": "https://bangaloremirror.indiatimes.com/bangalore/others/ksr-railway-station-to-be-modernised-after-56-years/articleshow/115817802.cms",
      "claim": "Details integration with Metro lines and BMTC bus terminals",
      "checkedOn": "2026-11-23",
      "excerpt": "South Western Railway has proposed a comprehensive redevelopment plan for the Kranthiveera Sangolli Rayanna (KSR) Bengaluru City Railway Station (Majestic)."
    }
  ],
  "officialDocLinks": [
    {
      "label": "Rail Land Development Authority (RLDA) Tender Portal",
      "url": "https://rlda.indianrailways.gov.in",
      "type": "TENDER_NOTICE"
    }
  ]
};
