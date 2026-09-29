export type Sector = 
  | 'Metro Rail'
  | 'Roads & Flyovers'
  | 'Stormwater & Drainage'
  | 'Water Supply & Sewage'
  | 'Suburban Rail'
  | 'Smart City'
  | 'Lake Rejuvenation';

export type AgencyCode = 'BMRCL' | 'BBMP' | 'BDA' | 'BWSSB' | 'K-RIDE' | 'BENGALURU_SMART_CITY';

export interface Agency {
  id: string;
  code: AgencyCode;
  name: string;
  fullName: string;
  website: string;
  annualBudgetCr: number;
  description: string;
  headquarters: string;
}

export type ProjectStatus = 
  | 'announced'
  | 'tendering'
  | 'under_construction'
  | 'stalled'
  | 'partially_operational'
  | 'completed';

export type RedFlagSeverity = 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

export type RedFlagType = 
  | 'COST_OVERRUN'
  | 'TIMELINE_DELAY'
  | 'SINGLE_BIDDER'
  | 'ABANDONED_SITE'
  | 'CAG_AUDIT_STRIKE'
  | 'LAND_ACQUISITION_DISPUTE'
  | 'FREQUENT_CONTRACTOR_TERMINATION';

export interface RedFlag {
  id: string;
  type: RedFlagType;
  severity: RedFlagSeverity;
  title: string;
  summary: string;
  calculatedMetric?: string; // e.g. "+145% cost escalation", "6.2 years delay"
  officialCitation: {
    sourceName: string; // e.g., "CAG Karnataka Report 2023", "BMRCL Status Report Jan 2024", "High Court PIL 4120/22"
    documentUrl?: string;
    pageOrOrderNumber?: string;
  };
}

export interface Milestone {
  id: string;
  date: string;
  stageName: string;
  amountReleasedCr: number;
  description: string;
  documentRef?: string;
}

export interface Contractor {
  name: string;
  awardedAmountCr: number;
  contractAwardDate: string;
  status: 'active' | 'terminated' | 'under_litigation' | 'completed';
  jointVenturePartners?: string[];
  kpppTenderId?: string;
}

export interface CitizenVerification {
  id: string;
  submittedAt: string;
  authorAlias: string;
  locationName: string;
  lat: number;
  lng: number;
  photoUrl: string;
  caption: string;
  reportedStatus: 'zero_work_visible' | 'slow_progress' | 'active_work' | 'blocked_by_debris' | 'completed';
  upvotes: number;
  isVerifiedByModerator: boolean;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  agencyCode: AgencyCode;
  sector: Sector;
  status: ProjectStatus;
  
  // Financial Pipeline (all numbers in INR Crores)
  announcedAmountCr: number;
  sanctionedAmountCr: number;
  revisedEstimatedCostCr: number;
  actualDisbursedCr: number;
  
  // Dates
  announcedDate: string;
  sanctionedDate: string;
  originalDeadline: string;
  revisedDeadline: string;
  
  // Progress metrics
  financialProgressPct: number; // Disbursed / RevisedEstimated
  physicalProgressPct: number; // Verified physical completion
  
  // Geographic location
  wardOrZone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  routeCoordinates?: [number, number][]; // Polyline for linear infra like Metro or Ring Road
  
  // Dossier details
  overview: string;
  contractors: Contractor[];
  milestones: Milestone[];
  redFlags: RedFlag[];
  citizenReports: CitizenVerification[];
  officialDocLinks: {
    label: string;
    url: string;
    type: 'GOVERNMENT_ORDER' | 'CAG_REPORT' | 'TENDER_NOTICE' | 'BMRCL_REPORT' | 'RTI_REPLY';
  }[];
}
