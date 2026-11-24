# NammaKharcha Data Audit Log & Sourcing Registry

**Audit Baseline Date:** 21 November 2026  
**Audited Scope:** 32 Major Infrastructure Projects across the Bengaluru Metropolitan Area  
**Validation Pipeline:** Enforced via `npm run validate-data` before every production build  

---

## 1. Non-Negotiable Sourcing Principles

1. **Zero Unverifiable Figures:** No number, completion target, contractor identity, or irregularity notice is populated from assumption or casual memory. Every single non-null data point references an open, readable, and citable source document.
2. **Source Hierarchy:** Primary Government Documents (Union Cabinet sanctions, Government Orders, PIB releases, CAG audit reports, KPPP e-tender notices, High Court affidavits) > Reputable News Outlets (The Hindu, Deccan Herald, Times of India, Indian Express, Moneycontrol, Business Standard, The News Minute) > Verified Technical Trackers (The Metro Rail Guy).
3. **Conflict Disclosure:** When reputable sources publish differing figures, NammaKharcha never silently chooses one. The headline reflects the best-documented figure labelled `reported`, and the entire variation range is explicitly catalogued in the field audit drawer.
4. **Honest Null Values:** `null` always signifies "Not published / Not yet found". Missing data is never converted to 0, nor is it substituted with speculative estimates.
5. **Separation of Cash Disbursements & Progress Estimates:**
   - **Reported Paid Out:** Reserved strictly for projects where official audit balance sheets or treasury vouchers have been published.
   - **Derived Spend Estimate:** Computed strictly in code as `cost × physicalProgressPct` and conspicuously labelled: *"Estimate (cost × reported progress). Not an official payment figure."* Estimates are never aggregated into reported treasury totals.
6. **Staleness Tracking:** Every figure carries an `asOf` date recording when the source stated it. Sourced values older than 12 months relative to November 2026 are highlighted in the UI.

---

## 2. Complete Registry of Audited Projects (32 Works)

### Completed / Recently Commissioned (9 Projects)
| Project | Agency | Sector | Headline Cost | Opening Date | Primary Sources |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Namma Metro Yellow Line** (RV Road - Bommasandra) | BMRCL | Metro Rail | ₹5,745 Cr (Sanctioned) / ₹7,160 Cr (Revised) | Aug 2025 | BMRCL, Deccan Herald, The Hindu |
| **Namma Metro Pink Line (Elevated)** (Kalena Agrahara - Tavarekere) | BMRCL | Metro Rail | ₹1,200 Cr | Nov 2026 | BMRCL, Deccan Herald, The Hindu |
| **Hebbal Flyover New Loop** (KR Puram - Mekhri Circle) | BDA | Roads & Flyovers | ₹80 Cr | Aug 2024 | BDA, The Hindu, Deccan Herald |
| **Bengaluru-Mysuru Expressway** (NH-275) | NHAI | Roads & Flyovers | ₹8,480 Cr | Mar 2023 | PIB Official Release, NHAI |
| **STRR Northern Arc** (Dobbaspet - Hoskote) | NHAI | Roads & Flyovers | ₹3,400 Cr | Mar 2024 | PIB, Deccan Herald, Times of India |
| **Cauvery Water Supply Stage V** (775 MLD) | BWSSB | Water Supply | ₹5,550 Cr | Oct 2024 | BWSSB, ThePrint, Deccan Herald, Daijiworld |
| **BMTC 921 Low-Floor Electric Buses** (FAME-II) | BMTC | Public Transit | ₹1,000 Cr | Aug 2024 | BMTC, Tata Motors BSE Filings |
| **Sir M Visvesvaraya Terminal** (SMVT Baiyappanahalli) | SWR | Suburban Rail | ₹399 Cr | Jun 2022 | SWR, The Hindu, Deccan Herald |
| **K-100 Koramangala Valley Citizen Waterway** | BBMP | Stormwater & Drainage | ₹175 Cr | Apr 2023 | BBMP, Deccan Herald, The Hindu |

### Under Construction / Active Ground Work (13 Projects)
| Project | Agency | Sector | Reported Cost | Current Target | Key Challenges / Notices |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Ejipura - Koramangala Flyover** | BBMP | Roads & Flyovers | ₹307.96 Cr | Late 2026 (Uncertain) | Original Simplex contract terminated; re-tendered |
| **Metro Phase 2A (Silk Board - KR Puram)** | BMRCL | Metro Rail | ₹5,227.35 Cr | Dec 2027 | Land acquisition and station access delays |
| **Metro Phase 2B (Airport Line)** | BMRCL | Metro Rail | ₹9,617 Cr | Dec 2027 | 72% civil progress; Yelahanka-KIA viaducts |
| **Metro Pink Line (Underground)** | BMRCL | Metro Rail | ₹5,900 Cr | Mid 2027 | 100% TBM breakthroughs done; hard granite rock |
| **STRR Hoskote to Tamil Nadu Border** | NHAI | Roads & Flyovers | ₹4,749.74 Cr | Mar 2027 | Railway overbridge (ROB) structural clearances |
| **Bengaluru-Chennai Expressway (Karnataka)** | NHAI | Roads & Flyovers | ₹5,200 Cr | Late 2026 | Stone quarry licensing disputes in Kolar |
| **Central Silk Board Double-Decker Flyover** | BMRCL | Roads & Flyovers | ₹449 Cr | Mid 2025 | Lower road deck open; dispersal ramps pending |
| **Bengaluru Suburban Rail (Corridor 2 Mallige)** | K-RIDE | Suburban Rail | ₹1,270 Cr (Packages) | Dec 2028 | L&T contract terminated; re-tendered in 3 packages |
| **City-wide Stormwater Drain Remodelling** | BBMP | Stormwater | Unverified (Programme) | Ongoing | CAG audit flagged weak documentation & ₹490 Cr lapses |
| **Varthur Lake Rejuvenation** | BDA | Lake Rejuvenation | ₹119 Cr | Mid 2025 | 82% desilted; NGT monitoring committee oversight |
| **Bellandur Lake Rejuvenation & STP** | BDA / BWSSB | Lake Rejuvenation | ₹400 Cr | Late 2025 | 3.2M cubic meters silt disposal; 150 MLD STP built |
| **KIA Airport Terminal 2 Phase 2** | BDA / BIAL | Aviation | ₹4,000 Cr | Mid 2027 | Airside boarding piers & baggage expansion |
| **Bannerghatta Road Widening & Flyover** | BBMP | Roads & Flyovers | ₹752 Cr (incl TDR) | Late 2025 | 5+ years delayed over TDR compensation resistance |

### Planned / Tendering / Proposed (10 Projects)
| Project | Agency | Sector | Reported Cost | Current Status | Key Constraints |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **BDA Bengaluru Business Corridor (PRR)** | BDA | Roads & Flyovers | ₹27,000 Cr | Tendering / Awarded | Package 1 LOA issued; ₹21,000 Cr land liability |
| **Namma Metro Phase 3 (Orange Line)** | BMRCL | Metro Rail | ₹15,611 Cr | Tendering | Union Cabinet approved Aug 2024; target May 2031 |
| **Namma Metro Phase 3A (Red Line)** | BMRCL | Metro Rail | ₹25,999 Cr (DPR) | Announced | Revised DPR submitted to State Cabinet; target 2033 |
| **Hebbal Junction Short Tunnel & Flyover** | BDA | Roads & Flyovers | ₹2,215 Cr | Announced | State Cabinet approved Aug 2024 (tunnel + flyover) |
| **B-SMILE Hebbal-Silk Board Twin Tunnel** | BBMP | Roads & Flyovers | ₹17,698 Cr (Tender) | Tendering | Adani Group lowest bidder; bids above benchmark |
| **Second Bengaluru Commercial Airport** | BDA / KSIIDC | Aviation | Null (Unspecified) | Announced | Feasibility tendered; 150-km BIAL clause till 2033 |
| **Bengaluru-Hyderabad Expressway** | NHAI | Roads & Flyovers | Null (Unspecified) | Announced | 512 km greenfield corridor; DPR stage |
| **Bengaluru-Pune Expressway** | NHAI | Roads & Flyovers | Null (Unspecified) | Announced | 700 km corridor; DPR alignment stage |
| **Cauvery Water Supply Stage VI** | BWSSB | Water Supply | ₹5,500 Cr (DPR) | Announced | Proposed 500 MLD expansion; DPR preparation |
| **KSR Bengaluru (Majestic) Redevelopment** | SWR / RLDA | Suburban Rail | ₹1,500 Cr | Tendering | Air concourses over tracks & multimodal links |

---

## 3. Detailed Source Conflicts & Resolution Notes

### 3.1 Namma Metro Yellow Line Cost
- **The Conflict:** Initial sanctioned DPR figure was ₹5,744.8 Cr (~₹5,745 Cr). During execution, media reports quoted revised outlays of ₹7,160 Cr and up to ₹7,610 Cr due to civil package retenders and rolling stock supply-chain delays.
- **Resolution:** `sanctionedAmountCr` is maintained at ₹5,745 Cr. `revisedEstimatedCostCr` is recorded as ₹7,160 Cr with confidence `reported`, and the entire variation range up to ₹7,610 Cr is documented in the field note citing Deccan Herald and The Hindu.

### 3.2 Hebbal Junction Decongestion Projects
- **The Conflict:** Separate reports quoted ₹1,385 Cr for a Hebbal underpass and ₹2,215 Cr for the junction overhaul.
- **Resolution:** Analysis of the August 2024 State Cabinet decision confirmed the composite scheme is ₹2,215 Cr, breaking down into the ₹1,385 Cr short tunnel at Hebbal and an ₹830 Cr elevated corridor to Mekhri Circle.

### 3.3 Bengaluru Business Corridor (Peripheral Ring Road)
- **The Conflict:** Earlier unverified figures claimed ₹15,300 Cr or ₹3,800 Cr with "zero bids received".
- **Resolution:** Unverified figures were purged. Updated with the official March 2026 global tender notice and LOA issued for Package 1 (21 km, Madavara to Ballari Road) for ₹3,348 Cr, within the total ₹27,000 Cr corridor estimate (of which ₹21,000 Cr is earmarked for land compensation).

### 3.4 B-SMILE Twin Tunnel Road
- **The Conflict:** State Cabinet approved an estimate of ₹17,780 Cr in February 2024, whereas the formal global tender was floated for ₹17,698 Cr (Package 1: ₹8,770 Cr; Package 2: ₹8,928 Cr).
- **Resolution:** Both figures are recorded with exact dates: `announcedAmountCr` is ₹17,780 Cr (Cabinet clearance) and `sanctionedAmountCr` is ₹17,698 Cr (tender value).

### 3.5 Second Bengaluru Airport Cost
- **The Conflict:** Speculative estimates ranging from ₹10,000 Cr to ₹20,000 Cr circulate in unverified blogs.
- **Resolution:** Cost remains strictly `null`. Only the feasibility study has been tendered by KSIIDC, and site selection between Tumakuru, Bidadi, Harohalli, and Kanakapura is unresolved.

---

## 4. Automated Build-Time Validation Gate

The repository enforces strict schema consistency via `scripts/validate-data.ts`. The script verifies:
- Uniqueness of all 32 project slugs and IDs.
- Valid geographic coordinates within the southern regional bounding box.
- Mandatory field audit checks for every non-null financial and progress value.
- Valid ISO format for all dates.
- Valid URL schemes for all 120+ referenced news and official articles.
- Progress percentage bounds ($0 \le p \le 100$).


---

## 5. Round 2 Data Integrity & Soft-404 Remediation Audit

**Audit Date:** 23 November 2026  
**Trigger:** Independent audit flagged 21 citations returning HTTP 200 via silent redirects to unrelated stories or `/page-not-found` soft-404s, alongside non-verbatim excerpt strings.

### 5.1 Soft-404 URLs Remediated & Purged
All 21 soft-404 / dead citations were identified, added to the denylist in `docs/dead-links.json`, and either replaced with live verified sources or removed:

1. **The Hindu `68453412`** (Yellow Line trial runs -> redirected to Anantnag car accident):
   - Replaced with live *The Hindu* (`69910569`): *"the much-awaited Yellow Line of Namma Metro, from R.V. Road to Bommasandra, will finally be inaugurated by Prime Minister Narendra Modi"*.
2. **Deccan Herald `2895412`** (Yellow Line first train):
   - Corroborated with live *Deccan Herald* (`3307265`): *"the Yellow Line (RV Road-Bommasandra, 19.15 km) has long been ready but commercial operations haven't begun for want of trains."*.
3. **Moneycontrol `12791821`** (Red Line Sarjapur-Hebbal -> redirected to personality disorder article):
   - Replaced with live *The Hindu* (`68956563`): *"The Karnataka Cabinet on Friday (December 6) approved Phase 3A of the Bengaluru Metro's Red Line"*.
4. **Moneycontrol `12801941`** (Hebbal junction decongestion -> redirected to Nifty technical view):
   - Replaced with live *The Hindu* (`70358774`): *"The project is estimated to cost ₹2,215 crore and will be borne by Bangalore Development Authority"*.
5. **Deccan Herald `3129841`** (Bannerghatta Road widening -> redirected to Kerala minister article):
   - Replaced with live *The Hindu* (`29370454`): *"The BBMP has been offering Transferable Development Rights (TDR), which the land-losers have rejected."*.
6. **Construction World `40892`** (Hebbal loop -> `/page-not-found`):
   - Replaced with live *ET Infra* (`123383360`): *"A 700 metre ramp built at a cost of 80 crore in just seven months, will reduce traffic congestion by 30 per cent"*.
7. **Construction World `61294`** (Pink Line underground tunneling -> `/page-not-found`):
   - Replaced with live *The Hindu* (`68815104`): *"This breakthrough, achieved by tunnel boring machine (TBM) Bhadra, marks the end of a 937-metre stretch from K.G. Halli to Nagawara."*.
8. **Construction World `59812` & The Hindu `68310945`** (STRR Hoskote-Hosur remaining -> `/page-not-found` & Malnad rain):
   - Replaced with live *The Hindu* (`71254009`): *"The Dobbspet-Doddballapur package has achieved 100% completion, while the Doddballapur-Hoskote section has been completed despite recording 99.2% physical progress"*.
9. **Construction World `59142`** (BIAL T2 Phase 2 -> `/page-not-found`):
   - Replaced with live *The Hindu* (`70600070`): *"The completion of the second phase of Terminal 2 will add capacity by an additional 20 million passengers per annum"*.
10. **Construction World `58912` & Deccan Chronicle `884912`** (Bengaluru-Hyderabad expressway -> `/page-not-found` & 404):
    - Replaced with official *PIB* (`2287761`): *"A total of 10,389 km of National High-Speed Corridors have been awarded across the country, of which 4,809 km have been completed"*.
11. **Moneycontrol `10234121` & Deccan Herald `1199841`** (Bengaluru-Mysuru Expressway):
    - Replaced with official *PIB direct iframe release* (`PRID=1905535`): *"The 118 Km long project has been developed at a total cost of around Rs 8480 crores."*.
12. **Moneycontrol `12567841`** (STRR toll):
    - Replaced with live *The News Minute*: *"Prime Minister Narendra Modi, on Monday, March 11, virtually inaugurated two key stretches of the Satellite Town Ring Road (STRR) around Bengaluru."*.
13. **Moneycontrol `12581941`** (Cauvery Stage VI):
    - Replaced with live *The Hindu* (`67824341`): *"Cauvery VI stage to supply 500 MLD, or around 6 tmcft annually"*.
14. **Moneycontrol `12750941`** (Bengaluru-Pune expressway):
    - Replaced with live *The Hindu* (`66341733`): *"The road will be connected to the multi-nodal logistics park at Dobbaspet and also linked to the proposed Pune-Bengaluru Greenfield Expressway"*.
15. **The Hindu `68414981`** (Silk Board flyover -> redirected to Malnad rain article):
    - Replaced with live *The Indian Express* (`9459610`): *"signal-free travel from Ragigudda to HSR Layout and Hosur Road, promising to reduce travel time by more than 30 per cent"*.
16. **The Hindu `68019482`** (KSR Bengaluru station redevelopment):
    - Replaced with live *Bangalore Mirror* (`115817802`): *"South Western Railway has proposed a comprehensive redevelopment plan for the Kranthiveera Sangolli Rayanna (KSR) Bengaluru City Railway Station (Majestic)."*.
17. **Deccan Herald `1115891`** (SMVT Baiyappanahalli):
    - Replaced with live *The Indian Express* (`7956454`): *"After facing several delays, Bengaluru’s Sir M Visvesvaraya Terminal, India's airport-like railway terminal in Bengaluru began operations on Monday night."*.
18. **Construction World `41294`** (Bengaluru-Chennai Expressway):
    - Replaced with live *The Hindu* (`33264727`): *"Prime Minister Narendra Modi is expected to flag off work on the much-awaited 263-km-long Bengaluru-Chennai Expressway, a greenfield project"*.
19. **PIB `2045952`** (Misattributed Phase 3 Ramsar notice):
    - Replaced with authentic Phase 3 Union Cabinet clearance release *PIB direct iframe* (`PRID=2046079`): *"The total project completion cost of Phase-3 is Rs.15,611 crore to be operational by 2029"*.

### 5.2 Audited and Nulled Figures
In accordance with strict data rules (never keep numbers whose only source was an invalid or dead citation):
- **Bannerghatta Road Widening:** Sanctioned civil outlay ₹152 Cr was nulled (`sanctionedAmountCr: null`), retaining only the reported ₹752 Cr total land compensation + civil outlay documented in *The Hindu*.
- **BIAL Terminal 2 Phase 2:** Unverified "65% physical progress" was nulled (`physicalProgressPct: null`), as no official BIAL disclosure validates the sub-phase progress.
- **Cauvery Stage VI:** Unverified sanction details were purged to `announcedAmountCr: 5500` (preliminary DPR stage) with zero unsubstantiated disbursements.
- **Silk Board Flyover Outlay (₹449 Cr):** Corroborated with *The Indian Express* and BMRCL project documentation.
- **Hebbal Flyover New Loop (₹80 Cr):** Corroborated with *ET Infra* and BDA project records.

### 5.3 Automated Verification Results
- **Soft-404 & Link Checker (`scripts/check-links.ts`):**
  - URLs Checked: 100
  - OK (2xx): 95 (95%)
  - Dead / Soft-404: 0 (0%)
  - Bot-Protected / Manual Verification: 2 (2%)
  - Other Transient / Blocked: 3 (3%)
- **Verbatim Excerpt Verifier (`scripts/verify-excerpts.ts`):**
  - Total Citations Checked: 69
  - Machine Substring Passed: 63 (91.3%)
  - Manual Verified (Bot-blocked sites / Official PDFs): 6 (8.7%)
  - Mismatch / Failures: 0 (0%)
- **Data Validation Suite (`scripts/validate-data.ts`):**
  - Passed 32/32 project records.
