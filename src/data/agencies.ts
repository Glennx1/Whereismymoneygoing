import { Agency } from "@/lib/types";

// annualBudgetCr is null until it is matched to a published budget document.
// Earlier hand-typed values (e.g. BMRCL 8,500, BBMP 12,371) had no source.
export const agencies: Agency[] = [
  {
    id: "bmrcl",
    code: "BMRCL",
    name: "Namma Metro (BMRCL)",
    fullName: "Bangalore Metro Rail Corporation Limited",
    website: "https://english.bmrc.co.in",
    annualBudgetCr: null,
    description: "Joint venture of Govt of India and Govt of Karnataka building and running Bengaluru's metro network.",
    headquarters: "BMTC Complex, Shanthinagar, Bengaluru"
  },
  {
    id: "bbmp",
    code: "BBMP",
    name: "BBMP / GBA",
    fullName: "Bruhat Bengaluru Mahanagara Palike (recent reports refer to the Greater Bengaluru Authority, GBA)",
    website: "https://bbmp.gov.in",
    annualBudgetCr: null,
    description: "Bengaluru's municipal body for arterial roads, flyovers, stormwater drains and ward infrastructure. Recent news reports attribute this work to the Greater Bengaluru Authority (GBA).",
    headquarters: "NR Square, Bengaluru"
  },
  {
    id: "bda",
    code: "BDA",
    name: "BDA",
    fullName: "Bangalore Development Authority",
    website: "https://bdakarnataka.in",
    annualBudgetCr: null,
    description: "Urban planning and development authority for the Bengaluru region, responsible for the Peripheral Ring Road (Bengaluru Business Corridor), layouts and major town schemes.",
    headquarters: "Kumara Park West, Bengaluru"
  },
  {
    id: "k-ride",
    code: "K-RIDE",
    name: "K-RIDE (Suburban Rail)",
    fullName: "Rail Infrastructure Development Company (Karnataka) Limited",
    website: "https://kride.in",
    annualBudgetCr: null,
    description: "Joint venture implementing the roughly 149 km Bengaluru Suburban Rail Project.",
    headquarters: "Bengaluru"
  },
  {
    id: "bwssb",
    code: "BWSSB",
    name: "BWSSB",
    fullName: "Bangalore Water Supply and Sewerage Board",
    website: "https://bwssb.karnataka.gov.in",
    annualBudgetCr: null,
    description: "Statutory body providing drinking water supply and sewage services across Bengaluru and peripheral areas.",
    headquarters: "Cauvery Bhavan, KG Road, Bengaluru"
  },
  {
    id: "smart-city",
    code: "BENGALURU_SMART_CITY",
    name: "Bengaluru Smart City",
    fullName: "Bengaluru Smart City Limited",
    website: "https://smartoneblr.com",
    annualBudgetCr: null,
    description: "Special purpose vehicle under the Smart Cities Mission. No projects are tracked here yet.",
    headquarters: "Bengaluru"
  },
  {
    id: "nhai",
    code: "NHAI",
    name: "NHAI",
    fullName: "National Highways Authority of India",
    website: "https://nhai.gov.in",
    annualBudgetCr: null,
    description: "Central authority executing national expressways and ring roads around Bengaluru including STRR and Bengaluru-Chennai Expressway.",
    headquarters: "G 5&6, Sector-10, Dwarka, New Delhi / Regional Office Bengaluru"
  },
  {
    id: "bmtc",
    code: "BMTC",
    name: "BMTC",
    fullName: "Bangalore Metropolitan Transport Corporation",
    website: "https://mybmtc.karnataka.gov.in",
    annualBudgetCr: null,
    description: "Public bus transport provider for the Bengaluru metropolitan area, operating city bus services and procuring electric bus fleets.",
    headquarters: "Shanthinagar, Bengaluru"
  },
  {
    id: "swr",
    code: "SWR",
    name: "South Western Railway",
    fullName: "South Western Railway (Indian Railways)",
    website: "https://swr.indianrailways.gov.in",
    annualBudgetCr: null,
    description: "Zonal railway headquartered in Hubballi, operating Bengaluru division stations and terminal redevelopment schemes.",
    headquarters: "Bengaluru Division Office, Majestic, Bengaluru"
  }
];
