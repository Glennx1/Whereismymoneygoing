-- =========================================================================
-- NAMMAKHARCHA / BENGALURU SPENDWATCH - POSTGRESQL & POSTGIS SCHEMA
-- Designed for Supabase / PostgreSQL deployment with Vercel Next.js App
-- =========================================================================

-- Enable PostGIS for geographic locations (points and line corridors)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "postgis";

-- 1. AGENCIES (BBMP, BMRCL, BDA, BWSSB, K-RIDE, etc.)
CREATE TABLE IF NOT EXISTS agencies (
    id TEXT PRIMARY KEY,
    code VARCHAR(20) UNIQUE NOT NULL,
    name VARCHAR(100) NOT NULL,
    full_name VARCHAR(255) NOT NULL,
    website VARCHAR(255),
    annual_budget_cr NUMERIC(12, 2) DEFAULT 0.00,
    description TEXT,
    headquarters VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. PROJECTS (The central public project entity)
CREATE TABLE IF NOT EXISTS projects (
    id TEXT PRIMARY KEY,
    slug VARCHAR(150) UNIQUE NOT NULL,
    title VARCHAR(255) NOT NULL,
    tagline TEXT,
    agency_code VARCHAR(20) REFERENCES agencies(code) ON DELETE RESTRICT,
    sector VARCHAR(50) NOT NULL,
    status VARCHAR(30) NOT NULL CHECK (status IN ('announced', 'tendering', 'under_construction', 'stalled', 'partially_operational', 'completed')),
    
    -- Financial tracking (All figures in INR Crores)
    announced_amount_cr NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    sanctioned_amount_cr NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    revised_estimated_cost_cr NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    actual_disbursed_cr NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    
    -- Timeline tracking
    announced_date DATE,
    sanctioned_date DATE,
    original_deadline DATE,
    revised_deadline DATE,
    
    -- Progress percentages
    financial_progress_pct NUMERIC(5, 2) DEFAULT 0.00,
    physical_progress_pct NUMERIC(5, 2) DEFAULT 0.00,
    
    -- Geo & Administrative details
    ward_or_zone VARCHAR(100),
    coordinates GEOMETRY(Point, 4326),
    route_geometry GEOMETRY(LineString, 4326),
    
    overview TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. CONTRACTORS & TENDERS
CREATE TABLE IF NOT EXISTS contractors (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id TEXT REFERENCES projects(id) ON DELETE CASCADE,
    name VARCHAR(255) NOT NULL,
    awarded_amount_cr NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    contract_award_date DATE,
    status VARCHAR(30) NOT NULL CHECK (status IN ('active', 'terminated', 'under_litigation', 'completed')),
    kppp_tender_id VARCHAR(100),
    joint_venture_partners TEXT[]
);

-- 4. FINANCIAL MILESTONES & DISBURSEMENTS
CREATE TABLE IF NOT EXISTS milestones (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id TEXT REFERENCES projects(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    stage_name VARCHAR(150) NOT NULL,
    amount_released_cr NUMERIC(12, 2) NOT NULL DEFAULT 0.00,
    description TEXT,
    document_ref VARCHAR(255)
);

-- 5. RED FLAGS & ANOMALY DETECTIONS
CREATE TABLE IF NOT EXISTS red_flags (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id TEXT REFERENCES projects(id) ON DELETE CASCADE,
    type VARCHAR(50) NOT NULL CHECK (type IN (
        'COST_OVERRUN',
        'TIMELINE_DELAY',
        'SINGLE_BIDDER',
        'ABANDONED_SITE',
        'CAG_AUDIT_STRIKE',
        'LAND_ACQUISITION_DISPUTE',
        'FREQUENT_CONTRACTOR_TERMINATION'
    )),
    severity VARCHAR(20) NOT NULL CHECK (severity IN ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL')),
    title VARCHAR(255) NOT NULL,
    summary TEXT NOT NULL,
    calculated_metric VARCHAR(100),
    official_source_name VARCHAR(255) NOT NULL,
    official_source_url VARCHAR(500),
    page_or_order_number VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. CITIZEN GROUND VERIFICATIONS & PHOTO AUDITS
CREATE TABLE IF NOT EXISTS citizen_verifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id TEXT REFERENCES projects(id) ON DELETE CASCADE,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    author_alias VARCHAR(100) NOT NULL,
    location_name VARCHAR(255) NOT NULL,
    lat NUMERIC(9, 6) NOT NULL,
    lng NUMERIC(9, 6) NOT NULL,
    photo_url VARCHAR(500) NOT NULL,
    caption TEXT NOT NULL,
    reported_status VARCHAR(50) NOT NULL CHECK (reported_status IN (
        'zero_work_visible',
        'slow_progress',
        'active_work',
        'blocked_by_debris',
        'completed'
    )),
    upvotes INT DEFAULT 0,
    is_verified_by_moderator BOOLEAN DEFAULT FALSE
);

-- 7. OFFICIAL DOCUMENT CITATIONS
CREATE TABLE IF NOT EXISTS official_documents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    project_id TEXT REFERENCES projects(id) ON DELETE CASCADE,
    label VARCHAR(255) NOT NULL,
    url VARCHAR(500) NOT NULL,
    type VARCHAR(50) NOT NULL CHECK (type IN ('GOVERNMENT_ORDER', 'CAG_REPORT', 'TENDER_NOTICE', 'BMRCL_REPORT', 'RTI_REPLY'))
);

-- Indices for performance
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_agency ON projects(agency_code);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_red_flags_project ON red_flags(project_id);
CREATE INDEX IF NOT EXISTS idx_citizen_project ON citizen_verifications(project_id);
