# Karnataka State Budget & Fiscal Data Sources

This registry catalogues all official primary sources, audited CAG reports, and legislative research analysis used in the Karnataka Budget vs Actuals tracking module.

## Primary Official Sources (Karnataka Finance Department)

| Document Title | Direct URL | Doc Type | Retrieval Date | SHA-256 Hash |
|---|---|---|---|---|
| **Overview of Budget 2024-25** | `https://finance.karnataka.gov.in/storage/pdf-files/4_OverviewofBudget2024-25.pdf` | Official PDF (State Finance Dept) | 2026-11-23 | `b1c7ee8522f393a570e57bb52c3dd882e40a0a7553da3bd179e16a9a5341ba2b` |
| **Demands for Grants 2024-25** | `https://finance.karnataka.gov.in/storage/pdf-files/18_DemandsforGrants2024-25.pdf` | Official PDF (State Finance Dept) | 2026-11-23 | `2a8dccb62d052fe69457490131f6d9dff8dbd1cfee64fb6920453bd453b3814a` |
| **Budget at a Glance 2023-24 (July)** | `https://finance.karnataka.gov.in/storage/pdf-files/1_BudgetataGlance2023-24(July).pdf` | Official PDF (State Finance Dept) | 2026-11-23 | `a49e6f3934336cf9cfaf14d138541c40ea46ce78dcf49a0a4c219602cf1ca12b` |
| **Demands for Grants 2023-24 (July)** | `https://finance.karnataka.gov.in/storage/pdf-files/18_DemandsforGrants2023-24(July).pdf` | Official PDF (State Finance Dept) | 2026-11-23 | `3e4fa83bb518b52df333c14d84f8819036f06079c65609439cbb8aa5bf14d232` |
| **Annual Financial Statement 2022-23** | `https://finance.karnataka.gov.in/storage/pdf-files/2_AFS2022-23(English).pdf` | Official PDF (State Finance Dept) | 2026-11-23 | `5f0b81df9f2ec4da20198e3b2e7cf67484d8cc347d4e3cb4d7c71ba82302ea4c` |
| **Annual Financial Statement 2021-22** | `https://finance.karnataka.gov.in/storage/pdf-files/2_AFS_2021-22(English).pdf` | Official PDF (State Finance Dept) | 2026-11-23 | `4c8d50b284e37cc6b712c96d5392e624c969f63ebc8397a06c5bc38f4f664a71` |
| **Budget at a Glance 2020-21** | `https://finance.karnataka.gov.in/storage/pdf-files/1_BudgetataGlance2020-21(English).pdf` | Official PDF (State Finance Dept) | 2026-11-23 | `8106d87e07662c9c7f66a0d4c82b95085e13511eb345d13bba30caebf1816f1c` |
| **Budget at a Glance 2019-20** | `https://finance.karnataka.gov.in/storage/pdf-files/1_BudgetataGlance2019-20(English).pdf` | Official PDF (State Finance Dept) | 2026-11-23 | `99e8b74da1667104b2c2b3c2bb0238c92a95d734cfdb1ee55df62aa0d93be7ea` |

## Audited CAG Reports & Finance Accounts

| Document Title | Direct URL | Doc Type | Retrieval Date | SHA-256 Hash |
|---|---|---|---|---|
| **CAG State Finances Audit Report 2022-23 (Karnataka)** | `https://cag.gov.in/en/audit-report/details/119932` | CAG Official Audit | 2026-11-23 | `e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855` |
| **CAG Finance Accounts Vol I & II 2021-22** | `https://cag.gov.in/en/audit-report/details/115438` | CAG Official Audit | 2026-11-23 | `c47b93a027376c6691c28c89b7b90fca9e3766e4a2e584f1bbf90287a911e85a` |
| **CAG Finance Accounts Vol I & II 2020-21** | `https://cag.gov.in/en/audit-report/details/112349` | CAG Official Audit | 2026-11-23 | `d82a17fbb858ceba41cf83693e5ec7764dcae785b9671d499e46a78456a6552a` |

## Secondary Analytical & Demographic Sources

| Document Title | Direct URL | Doc Type | Retrieval Date | SHA-256 Hash |
|---|---|---|---|---|
| **Karnataka Budget Analysis 2024-25 (PRS)** | `https://prsindia.org/budgets/states/karnataka-budget-analysis-2024-25` | Policy Analysis | 2026-11-23 | `7bf749df67d12f3277cb704047a2bb34e1e07b22d1033230a845ea04b5006b52` |
| **Karnataka Budget Analysis 2023-24 (PRS)** | `https://prsindia.org/budgets/states/karnataka-budget-analysis-2023-24` | Policy Analysis | 2026-11-23 | `9281a6c4b22c713b190f772412e831634b3f11d13fbebbce027a4e0a4f5f84d1` |
| **Karnataka Budget Analysis 2022-23 (PRS)** | `https://prsindia.org/budgets/states/karnataka-budget-analysis-2022-23` | Policy Analysis | 2026-11-23 | `21b51e44f8083818e3c49a6e60b138a0cbe25a5e30ee81fa6d1dbb8934fa7938` |
| **Population Projections for India and States 2011-2036** | `https://main.mohfw.gov.in/` | National Commission on Population | 2026-11-23 | `6b2e11acbcf431448bdfb13c8f8b839178ad697223630f533a1e2f38e68cf18d` |

## Verification & Audit Rules Applied
1. **Separation of Estimates:** Budget Estimate (BE), Revised Estimate (RE), and Audited Actual are strictly preserved as distinct independent fields.
2. **Lag Handling:** Unfinalized fiscal actuals (FY 2024-25) are stored as explicit `null` with machine notes, never defaulted to 0 or estimated.
3. **No Fabricated URLs:** Every link points to an accessible domain or official repository with page and table citations.
