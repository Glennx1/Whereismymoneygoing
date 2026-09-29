import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "ejipura-flyover",
    slug: "ejipura-koramangala-flyover",
    title: "Ejipura - Koramangala Elevated Corridor (Sony World Flyover)",
    tagline: "2.5 km flyover connecting Ejipura Junction to Kendriya Sadan, Koramangala. Over 6 years delayed.",
    agencyCode: "BBMP",
    sector: "Roads & Flyovers",
    status: "stalled",
    
    announcedAmountCr: 204.0,
    sanctionedAmountCr: 204.0,
    revisedEstimatedCostCr: 307.96,
    actualDisbursedCr: 142.5,
    
    announcedDate: "2016-11-04",
    sanctionedDate: "2017-05-15",
    originalDeadline: "2019-11-30",
    revisedDeadline: "2025-12-31",
    
    financialProgressPct: 46.2,
    physicalProgressPct: 42.0,
    
    wardOrZone: "Koramangala (Ward 151, South Zone)",
    coordinates: {
      lat: 12.9352,
      lng: 77.6245
    },
    
    overview: "Initially conceptualized to eliminate traffic bottlenecks at Sony World Junction and Ejipura. The initial contract was awarded to Simplex Infrastructures in 2017. Work was abandoned after completing barely 40% of the piers. BBMP terminated Simplex in 2022, re-tendered multiple times, and awarded the remaining works to BSCPL Infrastructure in 2023 at an escalated cost of ₹144.9 Cr for pending works alone.",
    
    contractors: [
      {
        name: "Simplex Infrastructures Ltd.",
        awardedAmountCr: 204.0,
        contractAwardDate: "2017-05-20",
        status: "terminated",
        kpppTenderId: "BBMP/2017-18/RD/WORK_INDENT3214"
      },
      {
        name: "BSCPL Infrastructure Ltd.",
        awardedAmountCr: 144.9,
        contractAwardDate: "2023-08-11",
        status: "active",
        kpppTenderId: "KPPP/BBMP/2023-24/ET/7841"
      }
    ],
    
    milestones: [
      {
        id: "m-1",
        date: "2017-05-15",
        stageName: "Work Order Issued to Simplex",
        amountReleasedCr: 20.4,
        description: "10% mobilization advance disbursed by BBMP accounts department."
      },
      {
        id: "m-2",
        date: "2019-11-01",
        stageName: "Original Deadline Breached",
        amountReleasedCr: 68.2,
        description: "Barely 38 piers cast out of 67. BBMP granted first extension."
      },
      {
        id: "m-3",
        date: "2022-03-04",
        stageName: "Contractor Termination & Penalty Notice",
        amountReleasedCr: 0,
        description: "BBMP formally seized ₹10.2 Cr bank guarantee and initiated retendering."
      },
      {
        id: "m-4",
        date: "2023-08-15",
        stageName: "Fresh Work Order to BSCPL",
        amountReleasedCr: 25.0,
        description: "Retendered at escalated rates. Fresh mobilization advance released."
      }
    ],
    
    redFlags: [
      {
        id: "rf-eji-1",
        type: "TIMELINE_DELAY",
        severity: "CRITICAL",
        title: "6+ Years Past Original Deadline",
        summary: "Project was scheduled for delivery in November 2019. It has remained incomplete through successive state governments.",
        calculatedMetric: "Over 2,200 Days Delayed",
        officialCitation: {
          sourceName: "Karnataka High Court Order (WP No. 12948/2021)",
          documentUrl: "https://services.ecourts.gov.in/ecourtindia_v6/",
          pageOrOrderNumber: "Para 14, Justice B. Veerappa Bench"
        }
      },
      {
        id: "rf-eji-2",
        type: "COST_OVERRUN",
        severity: "HIGH",
        title: "+51% Cost Escalation from Retendering",
        summary: "Original budget was ₹204 Cr for the whole bridge. Retendering for remaining 55% works cost an additional ₹144.9 Cr, pushing total outlay above ₹307 Cr.",
        calculatedMetric: "+₹103.96 Cr Escalation (+51%)",
        officialCitation: {
          sourceName: "BBMP Council Resolution No. 441/2023",
          documentUrl: "https://bengaluruurban.nic.in/en/",
          pageOrOrderNumber: "Resolution Agenda Item 4"
        }
      },
      {
        id: "rf-eji-3",
        type: "CAG_AUDIT_STRIKE",
        severity: "HIGH",
        title: "CAG Cites Unrecovered Mobilization Advances",
        summary: "CAG performance audit of urban local bodies highlighted BBMP failure to invoke liquidated damages within statutory period.",
        calculatedMetric: "Unrecovered Public Advance",
        officialCitation: {
          sourceName: "CAG Karnataka Local Bodies Audit Report",
          documentUrl: "https://cag.gov.in/en/audit-report",
          pageOrOrderNumber: "Chapter 3, Paragraph 3.8.2"
        }
      }
    ],
    
    citizenReports: [],
    
    officialDocLinks: [
      {
        label: "Karnataka High Court Order (WP 12948/2021 on Ejipura Delays)",
        url: "https://services.ecourts.gov.in/ecourtindia_v6/",
        type: "GOVERNMENT_ORDER"
      },
      {
        label: "Karnataka e-Procurement Portal (KPPP Tender Records)",
        url: "https://kppp.karnataka.gov.in",
        type: "TENDER_NOTICE"
      },
      {
        label: "CAG Karnataka Audit Reports Portal",
        url: "https://cag.gov.in/en/audit-report",
        type: "CAG_REPORT"
      }
    ]
  },
  {
    id: "namma-metro-phase-2a",
    slug: "namma-metro-phase-2a-outer-ring-road",
    title: "Namma Metro Phase 2A (Outer Ring Road: Silk Board to KR Puram)",
    tagline: "19.75 km elevated metro corridor passing Bengaluru's prime IT corridor (Bellandur, Marathahalli).",
    agencyCode: "BMRCL",
    sector: "Metro Rail",
    status: "under_construction",
    
    announcedAmountCr: 4202.0,
    sanctionedAmountCr: 5998.0,
    revisedEstimatedCostCr: 6550.0,
    actualDisbursedCr: 3410.0,
    
    announcedDate: "2017-03-01",
    sanctionedDate: "2021-04-20",
    originalDeadline: "2024-12-31",
    revisedDeadline: "2026-06-30",
    
    financialProgressPct: 52.0,
    physicalProgressPct: 56.4,
    
    wardOrZone: "Mahadevapura & Bommanahalli Zones",
    coordinates: {
      lat: 12.9237,
      lng: 77.6835
    },
    routeCoordinates: [
      [12.9174, 77.6238],
      [12.9256, 77.6432],
      [12.9288, 77.6781],
      [12.9559, 77.6983],
      [12.9982, 77.6958]
    ],
    
    overview: "Elevated rapid transit corridor along the Outer Ring Road serving tech corridors. Spanning 13 stations including Central Silk Board, HSR Layout, Agara, Ibbalur, Bellandur, Kadubeesanahalli, and Marathahalli. Awarded in two packages to Shankaranarayana Constructions (SNC). Delayed by GAIL gas pipeline shifting, tree felling litigations, and complex interchange integration at Silk Board.",
    
    contractors: [
      {
        name: "Shankaranarayana Constructions Pvt. Ltd. (SNC)",
        awardedAmountCr: 1530.0,
        contractAwardDate: "2021-05-18",
        status: "active",
        kpppTenderId: "BMRCL/Phase-2A/Pkg-1&2/2020"
      }
    ],
    
    milestones: [
      {
        id: "m-2a-1",
        date: "2021-04-20",
        stageName: "Union Cabinet Approval",
        amountReleasedCr: 1200.0,
        description: "Central sanction of ₹5,998 Cr for Phase 2A and Phase 2B jointly."
      },
      {
        id: "m-2a-2",
        date: "2023-02-10",
        stageName: "Civil Works 40% Completion",
        amountReleasedCr: 950.0,
        description: "Civil progress achieved across Kadubeesanahalli to Mahadevapura."
      },
      {
        id: "m-2a-3",
        date: "2024-03-31",
        stageName: "Target Date Extended to 2026",
        amountReleasedCr: 800.0,
        description: "BMRCL Managing Director confirms revised deadline citing Silk Board viaduct engineering complexities."
      }
    ],
    
    redFlags: [
      {
        id: "rf-2a-1",
        type: "TIMELINE_DELAY",
        severity: "MEDIUM",
        title: "18-Month Schedule Extension",
        summary: "Original target committed was December 2024. Pushed to mid-2026 due to utility line shifting and Silk Board loop construction.",
        calculatedMetric: "18 Months Delay",
        officialCitation: {
          sourceName: "BMRCL Project Implementation Status Report",
          documentUrl: "https://english.bmrc.co.in",
          pageOrOrderNumber: "Phase 2A Quarterly Milestone Sheet"
        }
      },
      {
        id: "rf-2a-2",
        type: "COST_OVERRUN",
        severity: "LOW",
        title: "Contractor Price Escalation Claims",
        summary: "Contractors filed price escalation claims due to commodity index surges during post-sanction execution.",
        calculatedMetric: "+₹552 Cr Claims",
        officialCitation: {
          sourceName: "BMRCL Annual Report",
          documentUrl: "https://english.bmrc.co.in",
          pageOrOrderNumber: "Notes to Accounts"
        }
      }
    ],
    
    citizenReports: [],
    
    officialDocLinks: [
      {
        label: "BMRCL Phase 2A Project Route & Progress Reports",
        url: "https://english.bmrc.co.in",
        type: "BMRCL_REPORT"
      },
      {
        label: "Union Cabinet Sanction Record for Phase 2A & 2B",
        url: "https://sansad.in/ls",
        type: "GOVERNMENT_ORDER"
      }
    ]
  },
  {
    id: "namma-metro-phase-2b",
    slug: "namma-metro-phase-2b-airport-line",
    title: "Namma Metro Phase 2B (Airport Line: KR Puram to KIA Kempegowda Airport)",
    tagline: "37 km elevated corridor linking KR Puram, Hebbal, Yelahanka to Kempegowda International Airport.",
    agencyCode: "BMRCL",
    sector: "Metro Rail",
    status: "under_construction",
    
    announcedAmountCr: 5950.0,
    sanctionedAmountCr: 8846.0,
    revisedEstimatedCostCr: 10584.0,
    actualDisbursedCr: 3920.0,
    
    announcedDate: "2019-01-10",
    sanctionedDate: "2021-04-20",
    originalDeadline: "2024-12-31",
    revisedDeadline: "2026-12-31",
    
    financialProgressPct: 37.0,
    physicalProgressPct: 41.5,
    
    wardOrZone: "Byatarayanapura & Yelahanka Zones",
    coordinates: {
      lat: 13.0827,
      lng: 77.6006
    },
    routeCoordinates: [
      [12.9982, 77.6958],
      [13.0163, 77.6367],
      [13.0358, 77.5970],
      [13.1007, 77.5963],
      [13.1986, 77.7066]
    ],
    
    overview: "Connecting Bengaluru to Kempegowda International Airport. Divided into 3 civil packages, all awarded to NCC Limited. Progress slowed due to defense land transfer clearances, Hebbal flyover coordination, and revised staging safety protocols mandated following the HBR Layout inquiry.",
    
    contractors: [
      {
        name: "NCC Limited (Packages 1, 2 & 3)",
        awardedAmountCr: 2170.0,
        contractAwardDate: "2021-11-25",
        status: "active",
        kpppTenderId: "BMRCL/Phase-2B/PKG123"
      }
    ],
    
    milestones: [
      {
        id: "m-2b-1",
        date: "2021-11-25",
        stageName: "Packages 1, 2, 3 Awarded to NCC Ltd",
        amountReleasedCr: 600.0,
        description: "Contractor mobilized batching plants along Bellary Road."
      },
      {
        id: "m-2b-2",
        date: "2023-01-10",
        stageName: "HBR Layout Inquiry & Safety Upgrades",
        amountReleasedCr: 0,
        description: "IISc probe team mandated reinforced guy-wire supports across all ongoing metro piers."
      },
      {
        id: "m-2b-3",
        date: "2024-06-15",
        stageName: "Airport Segment Integration",
        amountReleasedCr: 1100.0,
        description: "Work on airport campus underground and at-grade terminal station commenced."
      }
    ],
    
    redFlags: [
      {
        id: "rf-2b-1",
        type: "TIMELINE_DELAY",
        severity: "HIGH",
        title: "2-Year Timeline Extension",
        summary: "Commissioning date pushed from end-2024 to late 2026/2027. Delays attributed to NHAI permission for Hebbal crossing and defense land transfers.",
        calculatedMetric: "24 Months Delay",
        officialCitation: {
          sourceName: "Parliamentary Q&A Record (MoHUA)",
          documentUrl: "https://sansad.in/ls",
          pageOrOrderNumber: "Lok Sabha Question No. 1843"
        }
      },
      {
        id: "rf-2b-2",
        type: "COST_OVERRUN",
        severity: "HIGH",
        title: "Land Acquisition & Utility Cost Increase (+19.6%)",
        summary: "Land compensation along Bellary road and defense land compensation ballooned beyond initial budget allocation.",
        calculatedMetric: "+₹1,738 Cr Overrun",
        officialCitation: {
          sourceName: "State Cabinet Land Acquisition Note",
          documentUrl: "https://bengaluruurban.nic.in/en/",
          pageOrOrderNumber: "G.O. No. UDD 23 BMR"
        }
      }
    ],
    
    citizenReports: [],
    
    officialDocLinks: [
      {
        label: "BMRCL Airport Metro Route & Station Map",
        url: "https://english.bmrc.co.in",
        type: "BMRCL_REPORT"
      },
      {
        label: "Lok Sabha Parliamentary Record on Airport Line Timelines",
        url: "https://sansad.in/ls",
        type: "RTI_REPLY"
      }
    ]
  },
  {
    id: "bda-peripheral-ring-road",
    slug: "bda-peripheral-ring-road-business-corridor",
    title: "BDA Bengaluru Business Corridor (Peripheral Ring Road - PRR)",
    tagline: "73 km, 8-lane semi-circular expressway encircling East and North Bengaluru. Stalled for 18 years.",
    agencyCode: "BDA",
    sector: "Roads & Flyovers",
    status: "stalled",
    
    announcedAmountCr: 3800.0,
    sanctionedAmountCr: 15300.0,
    revisedEstimatedCostCr: 27000.0,
    actualDisbursedCr: 850.0,
    
    announcedDate: "2006-02-15",
    sanctionedDate: "2020-09-18",
    originalDeadline: "2011-12-31",
    revisedDeadline: "2029-12-31",
    
    financialProgressPct: 3.1,
    physicalProgressPct: 0.0,
    
    wardOrZone: "Bengaluru Rural & Peripheral Taluks",
    coordinates: {
      lat: 13.0645,
      lng: 77.7214
    },
    
    overview: "Conceived in 2006 to connect Hosur Road to Tumakuru Road via Sarjapur, Whitefield, and Yelahanka. The project requires acquiring 2,560 acres of land across 67 villages. Farmers refused compensation under the 1894 Land Acquisition Act, demanding 2013 LARR market rates. In 2024, BDA floated global tenders with ₹27,000 Cr estimate on PPP model, but received ZERO bids twice as private developers refused to bear land acquisition risks.",
    
    contractors: [],
    
    milestones: [
      {
        id: "m-prr-1",
        date: "2006-02-15",
        stageName: "First Preliminary Notification for 2,560 Acres",
        amountReleasedCr: 50.0,
        description: "Land preliminary notification published in Karnataka Gazette."
      },
      {
        id: "m-prr-2",
        date: "2022-04-10",
        stageName: "Supreme Court Order on Compensation Valuation",
        amountReleasedCr: 0,
        description: "Apex court allowed BDA to proceed with acquisition under structured formula."
      },
      {
        id: "m-prr-3",
        date: "2024-03-01",
        stageName: "Global Tender Retitled 'Bengaluru Business Corridor' Fails",
        amountReleasedCr: 2.5,
        description: "BDA floated ₹27,000 Cr PPP bid. Reached tender deadline with zero bids submitted."
      }
    ],
    
    redFlags: [
      {
        id: "rf-prr-1",
        type: "COST_OVERRUN",
        severity: "CRITICAL",
        title: "Cost Increased from ₹3,800 Cr to ₹27,000 Cr",
        summary: "Due to 18 years of delay and revised land compensation laws, estimated total acquisition and construction costs rose over 7-fold.",
        calculatedMetric: "+₹23,200 Cr Escalation",
        officialCitation: {
          sourceName: "BDA Financial Estimate & Supreme Court Affidavit",
          documentUrl: "https://services.ecourts.gov.in/ecourtindia_v6/",
          pageOrOrderNumber: "Annexure R-4"
        }
      },
      {
        id: "rf-prr-2",
        type: "SINGLE_BIDDER",
        severity: "CRITICAL",
        title: "Zero Bidders in Global Open Tenders",
        summary: "Private developers did not submit bids because BDA sought to pass unacquired land litigations onto concessionaires.",
        calculatedMetric: "0 Valid Bids Received",
        officialCitation: {
          sourceName: "KPPP Tender Record (PRR Global Tender)",
          documentUrl: "https://kppp.karnataka.gov.in"
        }
      },
      {
        id: "rf-prr-3",
        type: "LAND_ACQUISITION_DISPUTE",
        severity: "CRITICAL",
        title: "Over 700 Landowner Petitions Pending",
        summary: "Landowners across 67 villages challenged preliminary notifications demanding fair market valuation.",
        calculatedMetric: "700+ Petitions",
        officialCitation: {
          sourceName: "High Court of Karnataka Land Acquisition Bench",
          documentUrl: "https://services.ecourts.gov.in/ecourtindia_v6/",
          pageOrOrderNumber: "Connected Land Matters"
        }
      }
    ],
    
    citizenReports: [],
    
    officialDocLinks: [
      {
        label: "BDA Official Tender Notice (Bengaluru Business Corridor / PRR)",
        url: "https://kppp.karnataka.gov.in",
        type: "TENDER_NOTICE"
      },
      {
        label: "Supreme Court Affidavit on PRR Land Acquisition",
        url: "https://services.ecourts.gov.in/ecourtindia_v6/",
        type: "GOVERNMENT_ORDER"
      },
      {
        label: "BDA Official Project Land Notifications Portal",
        url: "https://bdakarnataka.in",
        type: "GOVERNMENT_ORDER"
      }
    ]
  },
  {
    id: "k-ride-suburban-rail",
    slug: "k-ride-suburban-rail-corridor-2-mallige",
    title: "Bengaluru Suburban Rail Project (Corridor 2: Baiyappanahalli - Chikkabanavara)",
    tagline: "25.2 km dedicated suburban rail corridor with 14 stations linking east and north-west Bengaluru.",
    agencyCode: "K-RIDE",
    sector: "Suburban Rail",
    status: "under_construction",
    
    announcedAmountCr: 15767.0,
    sanctionedAmountCr: 15767.0,
    revisedEstimatedCostCr: 16800.0,
    actualDisbursedCr: 1150.0,
    
    announcedDate: "2019-10-18",
    sanctionedDate: "2020-10-21",
    originalDeadline: "2023-10-21",
    revisedDeadline: "2026-12-31",
    
    financialProgressPct: 18.5,
    physicalProgressPct: 24.2,
    
    wardOrZone: "East & North Zones (Hebbal, Yeshwanthpur)",
    coordinates: {
      lat: 13.0280,
      lng: 77.5620
    },
    
    overview: "Initially scheduled for early delivery within 40 months from sanction, Corridor-2 (Mallige line from Baiyappanahalli to Chikkabanavara) awarded to Larsen & Toubro has faced delays in railway land transfers from South Western Railway (SWR), slow approvals for track possessions, and technical leadership vacancies.",
    
    contractors: [
      {
        name: "Larsen & Toubro (L&T Construction)",
        awardedAmountCr: 859.97,
        contractAwardDate: "2022-08-26",
        status: "active",
        kpppTenderId: "K-RIDE/BSRP/C-2/2022"
      }
    ],
    
    milestones: [
      {
        id: "m-kr-1",
        date: "2020-10-21",
        stageName: "CCEA Approves 148 km BSRP Project",
        amountReleasedCr: 500.0,
        description: "Union Cabinet approval with 20:20:60 funding ratio (Centre:State:External Loans)."
      },
      {
        id: "m-kr-2",
        date: "2022-08-26",
        stageName: "Civil Contract Awarded to L&T",
        amountReleasedCr: 85.9,
        description: "L&T begins test piling at Chikkabanavara."
      },
      {
        id: "m-kr-3",
        date: "2023-12-15",
        stageName: "KfW & EIB Loan Finalization",
        amountReleasedCr: 450.0,
        description: "External loan pact signed with KfW and European Investment Bank."
      }
    ],
    
    redFlags: [
      {
        id: "rf-kr-1",
        type: "TIMELINE_DELAY",
        severity: "HIGH",
        title: "Project Running Over Scheduled Timeline",
        summary: "The project has missed its initial milestone delivery targets by more than two years due to pending approvals and trackside land handovers.",
        calculatedMetric: "Over 2 Years Past Schedule",
        officialCitation: {
          sourceName: "Ministry of Railways Review & Status",
          documentUrl: "https://sansad.in/ls"
        }
      },
      {
        id: "rf-kr-2",
        type: "LAND_ACQUISITION_DISPUTE",
        severity: "MEDIUM",
        title: "Inter-Agency Land Licensing Delays",
        summary: "Disputes over railway land lease fees delayed physical handover of trackside land parcels.",
        calculatedMetric: "120+ Acres Delayed",
        officialCitation: {
          sourceName: "Infrastructure Development Dept Letter",
          documentUrl: "https://kride.in",
          pageOrOrderNumber: "IDD/18/BSRP"
        }
      }
    ],
    
    citizenReports: [],
    
    officialDocLinks: [
      {
        label: "K-RIDE Corridor-2 (Mallige) Project Status",
        url: "https://kride.in",
        type: "TENDER_NOTICE"
      },
      {
        label: "Ministry of Railways Suburban Rail Project Approvals",
        url: "https://sansad.in/ls",
        type: "GOVERNMENT_ORDER"
      }
    ]
  },
  {
    id: "bwssb-cauvery-stage-v",
    slug: "bwssb-cauvery-water-supply-stage-v",
    title: "Cauvery Water Supply Scheme Stage V (Drinking Water for 110 Villages)",
    tagline: "Mega drinking water project supplying 775 MLD treated Cauvery water to Bengaluru's peripheral suburbs.",
    agencyCode: "BWSSB",
    sector: "Water Supply & Sewage",
    status: "partially_operational",
    
    announcedAmountCr: 5550.0,
    sanctionedAmountCr: 5550.0,
    revisedEstimatedCostCr: 5850.0,
    actualDisbursedCr: 5210.0,
    
    announcedDate: "2017-08-14",
    sanctionedDate: "2018-03-22",
    originalDeadline: "2023-04-30",
    revisedDeadline: "2024-10-31",
    
    financialProgressPct: 89.0,
    physicalProgressPct: 94.0,
    
    wardOrZone: "Mahadevapura, Bommanahalli, RR Nagar & Dasarahalli 110 Villages",
    coordinates: {
      lat: 12.9815,
      lng: 77.4982
    },
    
    overview: "Funded substantially by the Japan International Cooperation Agency (JICA with ₹4,636 Cr loan) alongside Govt of Karnataka. Lays 110 km of massive 3-meter diameter steel water pipelines from TK Halli to pump 775 million litres per day. The major treatment plant was commissioned in late 2024; local ward distribution pipelining continues.",
    
    contractors: [
      {
        name: "L&T Construction (Water & Effluent Treatment IC)",
        awardedAmountCr: 1680.0,
        contractAwardDate: "2019-02-15",
        status: "completed",
        kpppTenderId: "BWSSB/CWSS-V/CP-01/2018"
      },
      {
        name: "SPML Infra Ltd.",
        awardedAmountCr: 450.0,
        contractAwardDate: "2019-05-10",
        status: "active",
        kpppTenderId: "BWSSB/CWSS-V/CP-04"
      }
    ],
    
    milestones: [
      {
        id: "m-cw-1",
        date: "2018-03-22",
        stageName: "JICA Loan Agreement Signed",
        amountReleasedCr: 1200.0,
        description: "Official loan agreement with Japan International Cooperation Agency at concessional interest."
      },
      {
        id: "m-cw-2",
        date: "2024-05-20",
        stageName: "Trial Pumping Initiated at TK Halli Pumping Station",
        amountReleasedCr: 2100.0,
        description: "Successfully pumped raw water to Bengaluru storage reservoirs."
      },
      {
        id: "m-cw-3",
        date: "2024-10-02",
        stageName: "Official Commercial Launch",
        amountReleasedCr: 900.0,
        description: "Water pumping launched; distribution connections rolling out."
      }
    ],
    
    redFlags: [
      {
        id: "rf-cw-1",
        type: "TIMELINE_DELAY",
        severity: "LOW",
        title: "16-Month Timeline Extension",
        summary: "Pipeline laying through forest land in Kanakapura and road-cutting permission delays pushed completion past the 2023 deadline.",
        calculatedMetric: "16 Months Extension",
        officialCitation: {
          sourceName: "BWSSB Board Review Proceedings",
          documentUrl: "https://bengaluruurban.nic.in/en/"
        }
      }
    ],
    
    citizenReports: [],
    
    officialDocLinks: [
      {
        label: "JICA Official Project Record: Cauvery Water Supply (Phase 3)",
        url: "https://www.jica.go.jp/oda/project/ID-P299/",
        type: "GOVERNMENT_ORDER"
      },
      {
        label: "Bengaluru District Administration Water Supply Orders",
        url: "https://bengaluruurban.nic.in/en/",
        type: "GOVERNMENT_ORDER"
      }
    ]
  },
  {
    id: "bbmp-stormwater-drain-remodeling",
    slug: "bbmp-raja-kaluve-flood-mitigation-project",
    title: "BBMP Raja Kaluve (Stormwater Drain) Flood Mitigation & Remodeling",
    tagline: "Remodeling and concrete retaining wall construction across 859 km of stormwater drain network post-2022 floods.",
    agencyCode: "BBMP",
    sector: "Stormwater & Drainage",
    status: "under_construction",
    
    announcedAmountCr: 1800.0,
    sanctionedAmountCr: 1500.0,
    revisedEstimatedCostCr: 1950.0,
    actualDisbursedCr: 980.0,
    
    announcedDate: "2022-09-08",
    sanctionedDate: "2022-10-15",
    originalDeadline: "2024-04-30",
    revisedDeadline: "2026-03-31",
    
    financialProgressPct: 50.2,
    physicalProgressPct: 44.0,
    
    wardOrZone: "Mahadevapura, Bommanahalli & East Zones",
    coordinates: {
      lat: 12.9345,
      lng: 77.6890
    },
    
    overview: "Announced after the 2022 Bengaluru floods to remodel, widen, and build RCC concrete retaining walls along critical SWDs from Bellandur, Varthur, Rainbow Drive, and Manyata. The project has faced delays from encroachment clearance stay orders and audit findings on unverified silt disposal receipts.",
    
    contractors: [
      {
        name: "Multiple Zonal Package Contractors (BBMP SWD Wing)",
        awardedAmountCr: 1250.0,
        contractAwardDate: "2023-01-12",
        status: "active",
        kpppTenderId: "BBMP/SWD/2022-23/INDENT_889"
      }
    ],
    
    milestones: [
      {
        id: "m-sw-1",
        date: "2022-10-15",
        stageName: "Emergency Flood Grant Sanctioned",
        amountReleasedCr: 300.0,
        description: "Chief Minister discretionary emergency fund released to BBMP Chief Engineer (SWD)."
      },
      {
        id: "m-sw-2",
        date: "2023-08-20",
        stageName: "Encroachment Survey Identifies 2,626 Violations",
        amountReleasedCr: 450.0,
        description: "Revenue department maps matched against ground surveys."
      }
    ],
    
    redFlags: [
      {
        id: "rf-sw-1",
        type: "CAG_AUDIT_STRIKE",
        severity: "CRITICAL",
        title: "CAG Cites Missing Geotagged Records for Desilting",
        summary: "Audit noted payments cleared for SWD desilting without geo-stamped photos of silt dumping sites or weighbridge receipts.",
        calculatedMetric: "Unverified Expenditure",
        officialCitation: {
          sourceName: "CAG Performance Audit on Stormwater Drains in Bengaluru",
          documentUrl: "https://cag.gov.in/en/audit-report",
          pageOrOrderNumber: "Report 4 of 2021"
        }
      },
      {
        id: "rf-sw-2",
        type: "TIMELINE_DELAY",
        severity: "HIGH",
        title: "Encroachment Removal Pending Court Clearance",
        summary: "Encroachment clearances on critical drain bottlenecks remain subject to court stay petitions.",
        calculatedMetric: "Bottlenecks Pending",
        officialCitation: {
          sourceName: "Karnataka High Court SWD Monitoring Record",
          documentUrl: "https://services.ecourts.gov.in/ecourtindia_v6/",
          pageOrOrderNumber: "WP 38401/2014"
        }
      }
    ],
    
    citizenReports: [],
    
    officialDocLinks: [
      {
        label: "CAG Audit Report No. 4 of 2021 on Bengaluru Stormwater Drains",
        url: "https://cag.gov.in/en/audit-report",
        type: "CAG_REPORT"
      },
      {
        label: "Karnataka High Court Stormwater Encroachment Compliance Bench",
        url: "https://services.ecourts.gov.in/ecourtindia_v6/",
        type: "GOVERNMENT_ORDER"
      }
    ]
  }
];
