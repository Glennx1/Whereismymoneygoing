import { Project } from "@/lib/types";

export const bbmpStormwaterDrain: Project = {
  "id": "bbmp-stormwater-drain-remodeling",
  "slug": "bbmp-raja-kaluve-flood-mitigation-project",
  "title": "Bengaluru Stormwater Drain Remodelling and Maintenance",
  "tagline": "City-wide programme to remodel and maintain 840+ km of stormwater drains (Raja Kaluves). Audited by the CAG, which identified significant documentation lapses.",
  "agencyCode": "BBMP",
  "sector": "Stormwater & Drainage",
  "status": "under_construction",
  "category": "ongoing",
  "lengthKm": 842,
  "announcedAmountCr": null,
  "sanctionedAmountCr": null,
  "revisedEstimatedCostCr": null,
  "actualDisbursedCr": null,
  "announcedDate": null,
  "sanctionedDate": null,
  "originalDeadline": null,
  "revisedDeadline": null,
  "financialProgressPct": null,
  "physicalProgressPct": null,
  "wardOrZone": "City-wide: Koramangala, Challaghatta, Hebbal, and Vrishabhavathi valleys",
  "coordinates": {
    "lat": 12.9345,
    "lng": 77.689
  },
  "overview": "This entry covers the city's stormwater drain (SWD) programme across primary and secondary valleys. The Comptroller and Auditor General (CAG) audited the department and found records unreliable, with significant delays in clearing encroachments. At one point 2,626 encroachments were identified, of which 714 remained to be cleared. Remodelling the whole 842 km primary and secondary drain network has been estimated at over ₹6,000 Cr across various phases, with ongoing civil packages across flood-prone zones.",
  "dataQuality": {
    "lastAudited": "2026-11-21",
    "summary": "Audit findings come from CAG-based reporting. Programme-wide cost estimates range widely, and contractor works are distributed across scores of local zonal tenders.",
    "fields": {
      "revisedEstimatedCostCr": {
        "confidence": "unverified",
        "asOf": "2022-01-15",
        "note": "Different reports give ₹800 Cr to ₹1,100 Cr for 192 km, and ₹6,328 Cr for the whole 842 km network. None is a confirmed budget for a single package, so cost is left null.",
        "sources": [
          {
            "label": "Deccan Herald: cost of remodelling jumps three times",
            "url": "https://www.deccanherald.com/india/karnataka/bengaluru/cost-of-remodelling-bengalurus-drains-jumps-three-times-1065065.html"
          }
        ]
      },
      "actualDisbursedCr": {
        "confidence": "unverified",
        "asOf": "2023-06-20",
        "note": "The only spending figure found is ₹490 Cr spent between April 2019 and March 2021 flagged by state auditors. It is not tied to a single project budget.",
        "sources": [
          {
            "label": "Deccan Herald: audit flags lapses in SWD department",
            "url": "https://www.deccanherald.com/india/karnataka/bengaluru/audit-flags-lapses-in-bbmps-swd-department-1231205.html"
          }
        ]
      },
      "contractors": {
        "confidence": "unverified",
        "asOf": "2026-11-21",
        "note": "Zonal maintenance and remodelling packages awarded to dozens of local contractors; no single mega-concessionaire.",
        "sources": [
          {
            "label": "Deccan Herald",
            "url": "https://www.deccanherald.com/india/karnataka/bengaluru/cag-raps-bbmp-bda-over-unreliable-records-on-storm-water-drains-1030811.html"
          }
        ]
      },
      "status": {
        "confidence": "reported",
        "asOf": "2024-05-10",
        "note": "Programme-level; ongoing remodelling, desilting, and retaining wall construction.",
        "sources": [
          {
            "label": "Deccan Herald: CAG raps BBMP over stormwater drains",
            "url": "https://www.deccanherald.com/india/karnataka/bengaluru/cag-raps-bbmp-bda-over-unreliable-records-on-storm-water-drains-1030811.html"
          }
        ]
      }
    },
    "corrections": [
      "Replaced 'Raja Kaluve ₹1,800 Cr' with city-wide SWD programme.",
      "Removed ₹1,500 Cr sanctioned, ₹1,950 Cr revised, ₹980 Cr paid, 50.2% progress.",
      "Corrected the date of the '2,626 encroachments' finding to December 2020."
    ]
  },
  "contractors": [],
  "contractorsNote": "Programme executed across multiple zonal packages by regional contractors.",
  "milestones": [
    {
      "id": "sw-m1",
      "date": "2020-12-01",
      "stageName": "2,626 encroachments on drains identified",
      "description": "SWD chief engineer identified 2,626 encroachments, of which 714 were pending clearance.",
      "source": {
        "label": "Citizen Matters",
        "url": "https://citizenmatters.in/bbmp-encroachment-clearance-delay-problems/"
      }
    }
  ],
  "redFlags": [
    {
      "id": "rf-sw-records",
      "type": "CAG_AUDIT_STRIKE",
      "severity": "HIGH",
      "title": "CAG found stormwater drain records and asset mapping unreliable",
      "summary": "A CAG performance audit found BBMP's data on primary and secondary drains and encroachments incomplete and unreliable.",
      "calculatedMetric": "Audit period 2013-14 to 2017-18",
      "officialCitation": {
        "sourceName": "Deccan Herald (on the CAG audit)",
        "documentUrl": "https://www.deccanherald.com/india/karnataka/bengaluru/cag-raps-bbmp-bda-over-unreliable-records-on-storm-water-drains-1030811.html"
      }
    },
    {
      "id": "rf-sw-490",
      "type": "CAG_AUDIT_STRIKE",
      "severity": "HIGH",
      "title": "State audit flagged serious lapses in ₹490 Cr drain expenditure",
      "summary": "Auditors identified lapses and procedural irregularities in ₹490 Cr spent by BBMP's stormwater drain division between 2019 and 2021.",
      "calculatedMetric": "₹490 Cr (April 2019 to March 2021)",
      "officialCitation": {
        "sourceName": "Deccan Herald",
        "documentUrl": "https://www.deccanherald.com/india/karnataka/bengaluru/audit-flags-lapses-in-bbmps-swd-department-1231205.html"
      }
    }
  ],
  "articles": [
    {
      "title": "CAG raps BBMP, BDA over unreliable records on storm water drains",
      "outlet": "Deccan Herald",
      "publishedDate": "2021-09-23",
      "url": "https://www.deccanherald.com/india/karnataka/bengaluru/cag-raps-bbmp-bda-over-unreliable-records-on-storm-water-drains-1030811.html",
      "claim": "CAG performance audit findings on documentation and encroachment tracking",
      "checkedOn": "2026-11-23",
      "excerpt": "CAG raps BBMP, BDA over unreliable records on storm water drains reports that cag performance audit findings on documentation and encroachment tracking."
    },
    {
      "title": "Audit flags lapses in BBMP's SWD department",
      "outlet": "Deccan Herald",
      "publishedDate": "2023-06-20",
      "url": "https://www.deccanherald.com/india/karnataka/bengaluru/audit-flags-lapses-in-bbmps-swd-department-1231205.html",
      "claim": "Irregularities flagged in ₹490 Cr drain development spending",
      "checkedOn": "2026-11-23",
      "excerpt": "Audit flags lapses in BBMP's SWD department reports that irregularities flagged in ₹490 cr drain development spending."
    },
    {
      "title": "Why BBMP encroachment clearance on storm water drains faces endless delays",
      "outlet": "Citizen Matters",
      "publishedDate": "2020-12-15",
      "url": "https://citizenmatters.in/bbmp-encroachment-clearance-delay-problems/",
      "claim": "Encroachment survey data: 714 of 2,626 encroachments remaining",
      "checkedOn": "2026-11-23",
      "excerpt": "Why BBMP encroachment clearance on storm water drains faces endless delays reports that encroachment survey data: 714 of 2,626 encroachments remaining."
    },
    {
      "title": "Executive Summary: Performance Audit on Management of Storm Water Drains in Bengaluru",
      "outlet": "Comptroller and Auditor General of India",
      "publishedDate": "2021-09-20",
      "url": "https://cag.gov.in/uploads/download_audit_report/2021/2.%20Executive%20Summary-061430463965e68.70381499.pdf",
      "claim": "Official CAG audit findings on stormwater drains in Bengaluru",
      "isOfficial": true,
      "checkedOn": "2026-11-23",
      "excerpt": "Executive Summary: Performance Audit on Management of Storm Water Drains in Bengaluru reports that official cag audit findings on stormwater drains in bengaluru."
    }
  ],
  "officialDocLinks": [
    {
      "label": "CAG Audit Report on Stormwater Drains (Executive Summary)",
      "url": "https://cag.gov.in/uploads/download_audit_report/2021/2.%20Executive%20Summary-061430463965e68.70381499.pdf",
      "type": "CAG_REPORT"
    },
    {
      "label": "Deccan Herald: CAG raps BBMP, BDA over drains",
      "url": "https://www.deccanherald.com/india/karnataka/bengaluru/cag-raps-bbmp-bda-over-unreliable-records-on-storm-water-drains-1030811.html",
      "type": "NEWS_REPORT"
    }
  ]
};
