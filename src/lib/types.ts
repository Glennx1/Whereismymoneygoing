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
  /** null = not yet verified against a budget document */
  annualBudgetCr: number | null;
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

/**
 * How well a number or fact is backed by a source.
 *  - verified:   matches a primary official document (order, tender, CAG report)
 *  - reported:   stated in news or a third-party tracker, not yet matched to a primary document
 *  - unverified: no source found yet; shown with a warning
 */
export type Confidence = 'verified' | 'reported' | 'unverified';

export interface SourceRef {
  label: string;
  url: string;
}

export type CheckedField =
  | 'announcedAmountCr'
  | 'sanctionedAmountCr'
  | 'revisedEstimatedCostCr'
  | 'actualDisbursedCr'
  | 'physicalProgressPct'
  | 'originalDeadline'
  | 'revisedDeadline'
  | 'status'
  | 'contractors';

export interface FieldCheck {
  confidence: Confidence;
  /** What we found, including conflicts between sources */
  note: string;
  sources: SourceRef[];
}

export interface DataQuality {
  /** ISO date of the last manual audit */
  lastAudited: string;
  /** Plain-language summary of what is and is not confirmed */
  summary: string;
  fields: Partial<Record<CheckedField, FieldCheck>>;
  /** Things that were wrong or missing in earlier versions of this page */
  corrections: string[];
}

export interface RedFlag {
  id: string;
  type: RedFlagType;
  severity: RedFlagSeverity;
  title: string;
  summary: string;
  calculatedMetric?: string;
  /** Every notice must point to a real, citable source. */
  officialCitation: {
    sourceName: string;
    documentUrl: string;
    pageOrOrderNumber?: string;
  };
}

export interface Milestone {
  id: string;
  /** ISO date; month precision is fine */
  date: string;
  stageName: string;
  /** Only set when a source states the amount */
  amountReleasedCr?: number;
  description: string;
  source: SourceRef;
}

export interface Contractor {
  name: string;
  /** null = contract value not confirmed */
  awardedAmountCr: number | null;
  contractAwardDate: string | null;
  status: 'active' | 'terminated' | 'under_litigation' | 'completed';
  scope?: string;
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

  // Financial figures (INR Crores). null = no confirmed figure yet.
  announcedAmountCr: number | null;
  sanctionedAmountCr: number | null;
  revisedEstimatedCostCr: number | null;
  /** Money actually paid out. Almost never published project-wise, so usually null. */
  actualDisbursedCr: number | null;

  // Dates (ISO). null = not confirmed.
  announcedDate: string | null;
  sanctionedDate: string | null;
  originalDeadline: string | null;
  revisedDeadline: string | null;

  // Progress. null = no source.
  financialProgressPct: number | null;
  physicalProgressPct: number | null;

  wardOrZone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  routeCoordinates?: [number, number][];

  overview: string;
  dataQuality: DataQuality;
  contractors: Contractor[];
  /** Shown when `contractors` is empty, to explain why */
  contractorsNote?: string;
  milestones: Milestone[];
  redFlags: RedFlag[];
  citizenReports: CitizenVerification[];
  officialDocLinks: {
    label: string;
    url: string;
    type: 'GOVERNMENT_ORDER' | 'CAG_REPORT' | 'TENDER_NOTICE' | 'BMRCL_REPORT' | 'RTI_REPLY' | 'NEWS_REPORT';
  }[];
}
