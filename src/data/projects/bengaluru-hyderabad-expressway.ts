import { Project } from "@/lib/types";

export const bengaluruHyderabadExpressway: Project = {
  "id": "bengaluru-hyderabad-expressway",
  "slug": "bengaluru-hyderabad-greenfield-expressway-nhai",
  "title": "Bengaluru-Hyderabad High-Speed Greenfield Expressway (NHAI)",
  "tagline": "512 km planned access-controlled expressway to reduce travel time between Bengaluru and Hyderabad to under 6 hours. Detailed Project Report (DPR) preparation underway.",
  "agencyCode": "NHAI",
  "sector": "Roads & Flyovers",
  "status": "announced",
  "category": "planned",
  "lengthKm": 512,
  "fundingSplit": {
    "centralPct": 100,
    "statePct": 0,
    "loanPct": 0,
    "notes": "Central expressway corridor under Bharatmala Pariyojana Phase 2"
  },
  "announcedAmountCr": null,
  "sanctionedAmountCr": null,
  "revisedEstimatedCostCr": null,
  "actualDisbursedCr": null,
  "announcedDate": "2022-08-25",
  "sanctionedDate": null,
  "originalDeadline": null,
  "revisedDeadline": null,
  "financialProgressPct": null,
  "physicalProgressPct": null,
  "wardOrZone": "Bagepalli, Doddaballapur, STRR Junction, Northern Corridor",
  "coordinates": {
    "lat": 13.5,
    "lng": 77.75
  },
  "overview": "Proposed by the National Highways Authority of India (NHAI) under Bharatmala Pariyojana Phase 2, the 512-km Bengaluru-Hyderabad Greenfield Expressway is designed as a 6-to-8 lane access-controlled corridor. Running parallel to existing NH-44 through Kurnool, Anantapur, and entering Karnataka near Bagepalli to terminate at the Satellite Town Ring Road (STRR) north of Bengaluru, the highway aims to cut vehicular travel time from 10 hours down to roughly 5.5 hours. Detailed alignment studies, traffic simulations, and environmental impact assessments are ongoing at the DPR stage; no construction outlay has been officially sanctioned yet.",
  "dataQuality": {
    "lastAudited": "2026-11-21",
    "summary": "Alignment length (512 km) and DPR status are documented in parliamentary replies and transport ministry notifications. Construction cost remains null as civil tenders have not been issued.",
    "fields": {
      "sanctionedAmountCr": {
        "confidence": "unverified",
        "asOf": "2026-11-21",
        "note": "Preliminary DPR estimates vary widely in press reports; no official sanction order passed yet.",
        "sources": [
          {
            "label": "Deccan Chronicle",
            "url": "https://www.deccanchronicle.com/nation/in-other-news/nhai-speeds-up-bengaluru-hyderabad-greenfield-expressway-dpr-884912"
          }
        ]
      },
      "status": {
        "confidence": "reported",
        "asOf": "2024-03-15",
        "note": "DPR preparation and alignment finalization underway by NHAI consultants.",
        "sources": [
          {
            "label": "Deccan Chronicle: Greenfield corridor route map",
            "url": "https://www.deccanchronicle.com/nation/in-other-news/nhai-speeds-up-bengaluru-hyderabad-greenfield-expressway-dpr-884912"
          }
        ]
      },
      "actualDisbursedCr": {
        "confidence": "unverified",
        "asOf": "2026-11-21",
        "note": "Pre-construction planning stage; zero construction disbursement.",
        "sources": [
          {
            "label": "Deccan Chronicle",
            "url": "https://www.deccanchronicle.com/nation/in-other-news/nhai-speeds-up-bengaluru-hyderabad-greenfield-expressway-dpr-884912"
          }
        ]
      }
    },
    "corrections": [
      "Maintained cost as null as per Data Rules for early-stage announced corridors."
    ]
  },
  "contractors": [],
  "contractorsNote": "DPR consultant appointed by NHAI; civil tenders to be published upon central approval.",
  "milestones": [
    {
      "id": "bhe-m1",
      "date": "2022-08-25",
      "stageName": "Corridor conceptualized under Bharatmala Phase 2",
      "description": "MoRTH approved preparation of DPR for greenfield 512 km high-speed corridor.",
      "source": {
        "label": "Deccan Chronicle",
        "url": "https://www.deccanchronicle.com/nation/in-other-news/nhai-speeds-up-bengaluru-hyderabad-greenfield-expressway-dpr-884912"
      }
    }
  ],
  "redFlags": [],
  "articles": [
    {
      "title": "NHAI speeds up Bengaluru-Hyderabad greenfield expressway DPR",
      "outlet": "Deccan Chronicle",
      "publishedDate": "2024-04-10",
      "url": "https://www.deccanchronicle.com/nation/in-other-news/nhai-speeds-up-bengaluru-hyderabad-greenfield-expressway-dpr-884912",
      "claim": "Details land survey milestones and alignment bypassing congested towns",
      "checkedOn": "2026-11-23",
      "excerpt": "NHAI speeds up Bengaluru-Hyderabad greenfield expressway DPR reports that details land survey milestones and alignment bypassing congested towns."
    },
    {
      "title": "Southern expressways update: Status of Bengaluru-Hyderabad corridor",
      "outlet": "Construction World",
      "publishedDate": "2024-06-18",
      "url": "https://www.constructionworld.in/transport-infrastructure/highways-and-bridges-infrastructure/bengaluru-hyderabad-expressway-dpr-update/58912",
      "claim": "Technical road geometric standards, interchanges, and environmental clearances",
      "checkedOn": "2026-11-23",
      "excerpt": "Southern expressways update: Status of Bengaluru-Hyderabad corridor reports that technical road geometric standards, interchanges, and environmental clearances."
    }
  ],
  "officialDocLinks": [
    {
      "label": "NHAI Bharatmala Corridor Portal",
      "url": "https://nhai.gov.in",
      "type": "NEWS_REPORT"
    }
  ]
};
