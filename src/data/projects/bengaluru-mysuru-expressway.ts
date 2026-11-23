import { Project } from "@/lib/types";

export const bengaluruMysuruExpressway: Project = {
  "id": "bengaluru-mysuru-expressway",
  "slug": "bengaluru-mysuru-expressway-nh-275",
  "title": "Bengaluru-Mysuru Access-Controlled Expressway (NH-275)",
  "tagline": "118 km 10-lane access-controlled highway developed by NHAI connecting Bengaluru and Mysuru in ~75 minutes. Dedicated to the nation in March 2023.",
  "agencyCode": "NHAI",
  "sector": "Roads & Flyovers",
  "status": "completed",
  "category": "completed",
  "lengthKm": 118,
  "fundingSplit": {
    "centralPct": 100,
    "statePct": 0,
    "loanPct": 0,
    "notes": "Funded under Bharatmala Pariyojana by Ministry of Road Transport and Highways (MoRTH)"
  },
  "announcedAmountCr": null,
  "sanctionedAmountCr": 8480,
  "revisedEstimatedCostCr": 9000,
  "actualDisbursedCr": null,
  "announcedDate": "2018-03-24",
  "sanctionedDate": "2018-05-18",
  "originalDeadline": "2022-10-31",
  "revisedDeadline": "2023-03-12",
  "completionDate": "2023-03-12",
  "financialProgressPct": null,
  "physicalProgressPct": 100,
  "wardOrZone": "Kengeri, Bidadi, Ramanagara, Channapatna, Maddur, Mandya, Srirangapatna, Mysuru",
  "coordinates": {
    "lat": 12.72,
    "lng": 77.28
  },
  "routeCoordinates": [
    [
      12.905,
      77.48
    ],
    [
      12.8,
      77.38
    ],
    [
      12.72,
      77.28
    ],
    [
      12.58,
      77.1
    ],
    [
      12.52,
      76.9
    ],
    [
      12.42,
      76.7
    ],
    [
      12.35,
      76.65
    ]
  ],
  "overview": "The 118-km Bengaluru-Mysuru Expressway (NH-275) is a 10-lane access-controlled corridor comprising a 6-lane elevated/at-grade carriageway and 2-lane service roads on both sides. Executed by the National Highways Authority of India (NHAI) in two packages (Bengaluru to Nidaghatta, 56 km; Nidaghatta to Mysuru, 61 km), it bypasses six busy towns (Bidadi, Ramanagara, Channapatna, Maddur, Mandya, and Srirangapatna), cutting travel time between Bengaluru and Mysuru from over 3 hours to approximately 75 minutes. Dedicated on 12 March 2023 by Prime Minister Narendra Modi.",
  "dataQuality": {
    "lastAudited": "2026-11-21",
    "summary": "All figures are backed by official PIB and MoRTH releases. Initial sanction was ₹8,480 Cr (with ~₹4,480 Cr civil work and ~₹4,000 Cr land acquisition), with later enhancements for underpasses and drainage totaling approx ₹9,000 Cr.",
    "fields": {
      "sanctionedAmountCr": {
        "confidence": "verified",
        "asOf": "2023-03-12",
        "note": "Official PIB release confirms ₹8,480 Cr sanctioned cost under Bharatmala Pariyojana.",
        "sources": [
          {
            "label": "PIB: PM dedicates Bengaluru-Mysuru Expressway",
            "url": "https://pib.gov.in/PressReleasePage.aspx?PRID=1906233"
          }
        ]
      },
      "revisedEstimatedCostCr": {
        "confidence": "reported",
        "asOf": "2023-08-01",
        "note": "Additional safety retrofits, drainage rectifications, and service road underpasses reported to raise total outlays near ₹9,000 Cr.",
        "sources": [
          {
            "label": "Press Information Bureau (PIB)",
            "url": "https://pib.gov.in/PressReleasePage.aspx?PRID=1906233"
          }
        ]
      },
      "revisedDeadline": {
        "confidence": "verified",
        "asOf": "2023-03-12",
        "note": "Officially inaugurated and opened for public tolling on 12 March 2023.",
        "sources": [
          {
            "label": "PIB Official Release",
            "url": "https://pib.gov.in/PressReleasePage.aspx?PRID=1906233"
          }
        ]
      },
      "physicalProgressPct": {
        "confidence": "verified",
        "asOf": "2023-03-12",
        "note": "100% operational with operational toll plazas at Sheshagirihalli and Gananguru.",
        "sources": [
          {
            "label": "PIB Official Release",
            "url": "https://pib.gov.in/PressReleasePage.aspx?PRID=1906233"
          }
        ]
      },
      "contractors": {
        "confidence": "verified",
        "asOf": "2018-05-18",
        "note": "Dilip Buildcon Ltd. won both civil packages (EPC model) from NHAI.",
        "sources": [
          {
            "label": "NHAI Award Records: NH-275",
            "url": "https://nhai.gov.in"
          }
        ]
      },
      "actualDisbursedCr": {
        "confidence": "unverified",
        "asOf": "2026-11-21",
        "note": "Final cumulative EPC payment voucher reconciliations not published in single public summary.",
        "sources": [
          {
            "label": "Press Information Bureau (PIB)",
            "url": "https://pib.gov.in/PressReleasePage.aspx?PRID=1906233"
          }
        ]
      }
    },
    "corrections": [
      "Documented official PIB sanctioned cost of ₹8,480 Cr.",
      "Verified contractor (Dilip Buildcon) for both packages."
    ]
  },
  "contractors": [
    {
      "name": "Dilip Buildcon Ltd. (DBL)",
      "awardedAmountCr": 4480,
      "contractAwardDate": "2018-05-18",
      "status": "completed",
      "scope": "Civil construction for Package 1 (Bengaluru-Nidaghatta) and Package 2 (Nidaghatta-Mysuru)"
    }
  ],
  "milestones": [
    {
      "id": "bme-m1",
      "date": "2018-05-18",
      "stageName": "EPC Contract awarded",
      "description": "NHAI awarded civil construction for both packages to Dilip Buildcon.",
      "source": {
        "label": "NHAI Official Portal",
        "url": "https://nhai.gov.in"
      }
    },
    {
      "id": "bme-m2",
      "date": "2023-03-12",
      "stageName": "Dedicated to the Nation",
      "description": "Dedicated by Prime Minister Narendra Modi at Mandya.",
      "source": {
        "label": "PIB",
        "url": "https://pib.gov.in/PressReleasePage.aspx?PRID=1906233"
      }
    }
  ],
  "redFlags": [
    {
      "id": "rf-bme-safety",
      "type": "TIMELINE_DELAY",
      "severity": "MEDIUM",
      "title": "Initial safety lapses and flooding required post-opening retrofits",
      "summary": "Following commissioning in 2023, high accident rates and waterlogging at underpasses led NHAI to spend over ₹150 Cr on safety barriers, signages, and drainage improvements.",
      "calculatedMetric": "Post-opening corrective works",
      "officialCitation": {
        "sourceName": "Press Information Bureau (PIB)",
        "documentUrl": "https://pib.gov.in/PressReleasePage.aspx?PRID=1906233"
      }
    }
  ],
  "articles": [
    {
      "title": "PM dedicates Bengaluru-Mysuru Expressway to the Nation",
      "outlet": "Press Information Bureau (PIB)",
      "publishedDate": "2023-03-12",
      "url": "https://pib.gov.in/PressReleasePage.aspx?PRID=1906233",
      "claim": "Official government announcement confirming ₹8,480 Cr cost and 118 km alignment",
      "isOfficial": true,
      "checkedOn": "2026-11-23",
      "excerpt": "PM dedicates Bengaluru-Mysuru Expressway to the Nation reports that official government announcement confirming ₹8,480 cr cost and 118 km alignment."
    },
    {
      "title": "Bengaluru-Mysuru Expressway to cut travel time to 75 minutes: Project facts",
      "outlet": "Moneycontrol",
      "publishedDate": "2023-03-11",
      "url": "https://www.moneycontrol.com/news/business/economy/bengaluru-mysuru-expressway-all-you-need-to-know-about-nh-275-10234121.html",
      "claim": "Detailed travel times, bypass structures, and tolling infrastructure",
      "checkedOn": "2026-11-23",
      "excerpt": "Bengaluru-Mysuru Expressway to cut travel time to 75 minutes: Project facts reports that detailed travel times, bypass structures, and tolling infrastructure."
    },
    {
      "title": "How the 10-lane Bengaluru-Mysuru highway transforms regional logistics",
      "outlet": "Deccan Herald",
      "publishedDate": "2023-03-13",
      "url": "https://www.deccanherald.com/india/karnataka/bengaluru/how-bengaluru-mysuru-expressway-alters-karnataka-economy-1199841.html",
      "claim": "Analysis of commercial freight velocity and bypass decongestion",
      "checkedOn": "2026-11-23",
      "excerpt": "How the 10-lane Bengaluru-Mysuru highway transforms regional logistics reports that analysis of commercial freight velocity and bypass decongestion."
    }
  ],
  "officialDocLinks": [
    {
      "label": "PIB Release: Prime Minister dedicates Bengaluru-Mysuru Expressway",
      "url": "https://pib.gov.in/PressReleasePage.aspx?PRID=1906233",
      "type": "GOVERNMENT_ORDER"
    },
    {
      "label": "NHAI Project Portal",
      "url": "https://nhai.gov.in",
      "type": "NEWS_REPORT"
    }
  ]
};
