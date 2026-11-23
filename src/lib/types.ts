export type Sector =
  | 'Metro Rail'
  | 'Roads & Flyovers'
  | 'Stormwater & Drainage'
  | 'Water Supply & Sewage'
  | 'Suburban Rail'
  | 'Smart City'
  | 'Lake Rejuvenation'
  | 'Aviation'
  | 'Public Transit';

export type AgencyCode =
  | 'BMRCL'
  | 'BBMP'
  | 'BDA'
  | 'BWSSB'
  | 'K-RIDE'
  | 'BENGALURU_SMART_CITY'
  | 'NHAI'
  | 'BMTC'
  | 'SWR';

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

export type ProjectCategory = 'completed' | 'ongoing' | 'planned';

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

export type CostBasis = 'sanctioned' | 'revised' | 'final' | 'estimate';

export interface FieldCheck {
  confidence: Confidence;
  costBasis?: CostBasis;
  /** What we found, including conflicts between sources */
  note: string;
  sources: SourceRef[];
  /** When the figure was stated / recorded (ISO date YYYY-MM-DD) */
  asOf?: string;
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

export interface Article {
  title: string;
  outlet: string;
  publishedDate: string; // ISO date YYYY-MM-DD
  url: string;
  claim: string; // Which fact or figure it supports
  isOfficial?: boolean;
  checkedOn?: string; // ISO date YYYY-MM-DD
  excerpt?: string; // Verbatim quote, 25 words or fewer, supporting the claim
  excerptChecked?: "machine" | "manual";
}

export interface FundingSplit {
  centralPct?: number;
  statePct?: number;
  loanPct?: number;
  loanSource?: string;
  notes?: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  agencyCode: AgencyCode;
  sector: Sector;
  status: ProjectStatus;
  category: ProjectCategory;

  // Linear / scale attributes
  lengthKm?: number | null;
  stationsCount?: number | null;
  stationNames?: string[];
  fundingSplit?: FundingSplit;

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
  completionDate?: string | null;

  // Progress. null = no source.
  financialProgressPct: number | null;
  physicalProgressPct: number | null;

  wardOrZone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  geometrySource?: string;
  geometryFetchDate?: string;

  overview: string;
  dataQuality: DataQuality;
  contractors: Contractor[];
  /** Shown when `contractors` is empty, to explain why */
  contractorsNote?: string;
  milestones: Milestone[];
  redFlags: RedFlag[];
  articles: Article[];
  officialDocLinks: {
    label: string;
    url: string;
    type: 'GOVERNMENT_ORDER' | 'CAG_REPORT' | 'TENDER_NOTICE' | 'BMRCL_REPORT' | 'RTI_REPLY' | 'NEWS_REPORT';
  }[];
}
