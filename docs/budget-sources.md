# Karnataka State Budget & Fiscal Data Sources

This registry catalogues all official primary sources retrieved from the Karnataka State Finance Department portal (`finance.karnataka.gov.in`). Every file listed here was retrieved with standard TLS certificate validation, hashed, and inspected directly.

## Primary Official Documents (Downloaded & Verified)

| Document Title | Direct URL | File Type | File Size (Bytes) | SHA-256 Hash | Retrieval Date |
|---|---|---|---|---|---|
| **Overview of Budget 2024-25** | `https://finance.karnataka.gov.in/storage/pdf-files/4_OverviewofBudget2024-25.pdf` | PDF | 3,675,317 | `b1c7ee8522f393a570e57bb52c3dd882e40a0a7553da3bd179e16a9a5341ba2b` | 2026-11-24 |
| **Demands for Grants 2024-25** | `https://finance.karnataka.gov.in/storage/pdf-files/18_DemandsforGrants2024-25.pdf` | PDF | 8,115,619 | `2a8dccb62d052fe69457490131f6d9dff8dbd1cfee64fb6920453bd453b3814a` | 2026-11-24 |
| **Demands for Grants 2023-24 (July)** | `https://finance.karnataka.gov.in/storage/pdf-files/17_DemandsforGrantsJULY2023-24.pdf` | PDF | 4,807,856 | `bde398d9c162514a62162720ad11bff8b21d76466957541054c0ab657ce4d113` | 2026-11-24 |
| **Demands for Grants 2022-23** | `https://finance.karnataka.gov.in/storage/pdf-files/Demands%20for%20Grants%202022-23.pdf` | PDF | 4,142,259 | `3e7363a32b8fcae699ed914a49f3243ece4aa11f0ff5777ae52886b307518ff0` | 2026-11-24 |
| **Overview of Budget 2022-23** | `https://finance.karnataka.gov.in/storage/pdf-files/Overview%20of%20Budget%202022-23.pdf` | PDF | 3,678,176 | `ff0112c5d8d8865d141ebc095c37b441c18cb41f030776c8fc89335ba073a471` | 2026-11-24 |
| **Final Overview 2021-22** | `https://finance.karnataka.gov.in/storage/pdf-files/04-Final%20Overview%2021-22.pdf` | PDF | 2,355,970 | `507402e3efb9b8765fd5a245407d207ab8236aed4c43311976dc0e81f8229732` | 2026-11-24 |

## External Portals & Limitations

| Portal / Document | URL | File Type | Note |
|---|---|---|---|
| **CAG State Finances Audit Reports** | `https://cag.gov.in/en/audit-report/details/119932` | HTML | Portal landing page. Does not serve direct static PDF; individual state audit chapters require browser-based navigation. Not used for raw numerical extraction. |

## Strict Data & Extraction Rules
1. **Printed Figures Only:** If a figure is not literally printed in one of the verified documents listed above, it is stored as `null`.
2. **Derived Figures:** Sector totals derived from component Demand rows (e.g., Revenue Voted + Capital Voted) are explicitly marked `confidence: "derived"`. All component demand amounts, page numbers, and printed units are saved in `docs/budget-evidence/` and exposed in the UI via source expanders.
3. **No Paraphrasing:** Excerpts must be exact substring matches of the text extracted from the document page, containing the exact digits as printed.
4. **No TLS Bypasses:** All downloads must succeed under standard operating system certificate verification.
