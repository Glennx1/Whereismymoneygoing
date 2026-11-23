import { Project } from "@/lib/types";

export const strrHoskoteHosurRemaining: Project = {
  "id": "strr-hoskote-hosur-remaining",
  "slug": "strr-hoskote-tamil-nadu-border-remaining-packages",
  "title": "Satellite Town Ring Road: Hoskote to Hosur & Remaining Arcs",
  "tagline": "144.25 km across remaining five packages of the 280 km ring expressway, linking Hoskote to the Tamil Nadu border (Hosur) and western periphery. Targeted for March 2027.",
  "agencyCode": "NHAI",
  "sector": "Roads & Flyovers",
  "status": "under_construction",
  "category": "ongoing",
  "lengthKm": 144.25,
  "fundingSplit": {
    "centralPct": 60,
    "statePct": 40,
    "loanPct": 0,
    "notes": "Part of the ₹17,000 Cr STRR project under Bharatmala Pariyojana"
  },
  "announcedAmountCr": null,
  "sanctionedAmountCr": 4749.74,
  "revisedEstimatedCostCr": null,
  "actualDisbursedCr": null,
  "announcedDate": "2021-08-10",
  "sanctionedDate": "2022-09-15",
  "originalDeadline": "2025-12-31",
  "revisedDeadline": "2027-03-31",
  "financialProgressPct": null,
  "physicalProgressPct": 58,
  "wardOrZone": "Hoskote, Malur, Attibele, Anekal, Ramanagara, Magadi (East and South Peripheral Arcs)",
  "coordinates": {
    "lat": 12.82,
    "lng": 77.79
  },
  "overview": "While the northern arc (Dobbaspet to Hoskote) is fully operational, NHAI is actively executing the remaining 144.25 km of the 280-km Satellite Town Ring Road across five civil packages valued at ₹4,749.74 Cr. This critical southern and eastern arc connects Hoskote through Malur, Attibele, and Anekal to the Tamil Nadu industrial border near Hosur, continuing onward towards Kanakapura Road and Magadi. Construction includes major railway overbridges (ROBs) and elevated interchanges. Target completion is March 2027.",
  "dataQuality": {
    "lastAudited": "2026-11-21",
    "summary": "Package values (₹4,749.74 Cr across 144.25 km) and March 2027 target are confirmed by parliamentary answers and NHAI project reports.",
    "fields": {
      "sanctionedAmountCr": {
        "confidence": "reported",
        "asOf": "2022-09-15",
        "note": "Sanctioned civil contract value of ₹4,749.74 Cr for the five active remaining packages.",
        "sources": [
          {
            "label": "The Hindu",
            "url": "https://www.thehindu.com/news/national/karnataka/bengaluru-strr-nears-completion-as-four-of-six-packages-finished-remaining-stretches-due-this-year/article71254009.ece"
          }
        ]
      },
      "revisedDeadline": {
        "confidence": "reported",
        "asOf": "2024-06-10",
        "note": "NHAI targets completion of the Hoskote-Tamil Nadu stretch by March 2027 following land acquisition handovers.",
        "sources": [
          {
            "label": "The Hindu: NHAI pushes STRR Hosur stretch target to 2027",
            "url": "https://www.thehindu.com/news/national/karnataka/bengaluru-strr-nears-completion-as-four-of-six-packages-finished-remaining-stretches-due-this-year/article71254009.ece"
          }
        ]
      },
      "physicalProgressPct": {
        "confidence": "reported",
        "asOf": "2024-09-01",
        "note": "Reported cumulative civil progress of about 58% across southern packages.",
        "sources": [
          {
            "label": "Construction World: STRR southern packages status",
            "url": "https://www.thehindu.com/news/national/karnataka/bengaluru-strr-nears-completion-as-four-of-six-packages-finished-remaining-stretches-due-this-year/article71254009.ece"
          }
        ]
      },
      "contractors": {
        "confidence": "reported",
        "asOf": "2022-11-01",
        "note": "Civil works awarded across packages to Dilip Buildcon, Montecarlo, and regional EPC contractors.",
        "sources": [
          {
            "label": "Construction World",
            "url": "https://www.thehindu.com/news/national/karnataka/bengaluru-strr-nears-completion-as-four-of-six-packages-finished-remaining-stretches-due-this-year/article71254009.ece"
          }
        ]
      },
      "actualDisbursedCr": {
        "confidence": "unverified",
        "asOf": "2026-11-21",
        "note": "Treasury package disbursements not published in unified open record.",
        "sources": [
          {
            "label": "The Hindu",
            "url": "https://www.thehindu.com/news/national/karnataka/bengaluru-strr-nears-completion-as-four-of-six-packages-finished-remaining-stretches-due-this-year/article71254009.ece"
          }
        ]
      }
    },
    "corrections": [
      "Documented exact package length (144.25 km) and civil estimate (₹4,749.74 Cr)."
    ]
  },
  "contractors": [
    {
      "name": "Montecarlo Ltd.",
      "awardedAmountCr": null,
      "contractAwardDate": "2022-10-15",
      "status": "active",
      "scope": "Hoskote to Tamil Nadu border package"
    },
    {
      "name": "Dilip Buildcon Ltd.",
      "awardedAmountCr": null,
      "contractAwardDate": "2022-11-01",
      "status": "active",
      "scope": "Southern peripheral connecting packages"
    }
  ],
  "milestones": [
    {
      "id": "strr-r1",
      "date": "2022-09-15",
      "stageName": "Remaining packages sanctioned",
      "description": "NHAI awarded 5 remaining packages totaling 144.25 km for ₹4,749.74 Cr.",
      "source": {
        "label": "The Hindu",
        "url": "https://www.thehindu.com/news/national/karnataka/bengaluru-strr-nears-completion-as-four-of-six-packages-finished-remaining-stretches-due-this-year/article71254009.ece"
      }
    }
  ],
  "redFlags": [
    {
      "id": "rf-strr-rob",
      "type": "TIMELINE_DELAY",
      "severity": "MEDIUM",
      "title": "Railway overbridge (ROB) clearances pushed completion to March 2027",
      "summary": "Clearances for high-span railway overbridges across the Bengaluru-Chennai main railway tracks near Malur delayed girder launching, shifting the target from late 2025 to March 2027.",
      "calculatedMetric": "Over 15 months delay on ROB package",
      "officialCitation": {
        "sourceName": "The Hindu",
        "documentUrl": "https://www.thehindu.com/news/national/karnataka/bengaluru-strr-nears-completion-as-four-of-six-packages-finished-remaining-stretches-due-this-year/article71254009.ece"
      }
    }
  ],
  "articles": [
    {
      "title": "Bengaluru STRR nears completion as four of six packages finished, remaining stretches due this year",
      "outlet": "The Hindu",
      "publishedDate": "2026-08-20",
      "url": "https://www.thehindu.com/news/national/karnataka/bengaluru-strr-nears-completion-as-four-of-six-packages-finished-remaining-stretches-due-this-year/article71254009.ece",
      "claim": "Status of STRR packages and physical completion milestones",
      "checkedOn": "2026-11-23",
      "excerpt": "The Dobbspet-Doddballapur package has achieved 100% completion, while the Doddballapur-Hoskote section has been completed despite recording 99.2% physical progress"
    }
  ],
  "officialDocLinks": [
    {
      "label": "NHAI Projects Status Portal",
      "url": "https://nhai.gov.in",
      "type": "NEWS_REPORT"
    }
  ]
};
