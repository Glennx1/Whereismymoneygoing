import { DepartmentMap } from '@/lib/types';

/**
 * Mapping of Karnataka Government Demands for Grants to standardized Budget Sectors.
 * Sourced directly from Summary of Demands for Grants (Page 6) in official Demands for Grants volumes.
 */
export const departmentMappings: DepartmentMap = [
  // --- EDUCATION ---
  {
    departmentCode: 'DEMAND_17',
    departmentName: 'Education (²PÀët)',
    demandNumber: '17',
    sector: 'Education',
    sourceDocument: 'Demands for Grants 2024-25 (Page 6), Demands for Grants 2023-24 July (Page 6), Demands for Grants 2022-23 (Page 6)',
    notes: 'Covers General Education, Higher Education, and School Education and Literacy capital and revenue expenditures.',
  },

  // --- HEALTH ---
  {
    departmentCode: 'DEMAND_22',
    departmentName: 'Health and Family Welfare (DgÉÆÃUÀå ªÀÄvÀÄÛ PÀÄlÄA§ PÀ®Áåt)',
    demandNumber: '22',
    sector: 'Health',
    sourceDocument: 'Demands for Grants 2024-25 (Page 6), Demands for Grants 2023-24 July (Page 6), Demands for Grants 2022-23 (Page 6)',
    notes: 'Covers public health, family welfare, district hospitals, and primary health centre networks.',
  },

  // --- URBAN DEVELOPMENT ---
  {
    departmentCode: 'DEMAND_19',
    departmentName: 'Urban Development and Housing (£ÀUÀgÁ©sªÀÈ¢Þ ªÀÄvÀÄÛ ªÀ¸Àw)',
    demandNumber: '19',
    sector: 'Urban Development',
    sourceDocument: 'Demands for Grants 2024-25 (Page 6), Demands for Grants 2023-24 July (Page 6), Demands for Grants 2022-23 (Page 6)',
    notes: 'Covers urban local body grants, municipal administration, town planning, and state housing schemes.',
  },

  // --- TRANSPORT AND ROADS ---
  {
    departmentCode: 'DEMAND_20',
    departmentName: 'Public Works (¯ÉÆÃPÉÆÃ¥ÀAiÉÆÃV)',
    demandNumber: '20',
    sector: 'Transport and Roads',
    sourceDocument: 'Demands for Grants 2024-25 (Page 6), Demands for Grants 2023-24 July (Page 6), Demands for Grants 2022-23 (Page 6)',
    notes: 'Public Works department only (Demand 20): state highways, major district roads and bridges. Does NOT include metro funding, BMTC/KSRTC subsidies or the Transport department.',
  },

  // --- WATER RESOURCES ---
  {
    departmentCode: 'DEMAND_21',
    departmentName: 'Irrigation / Water Resources (¤ÃgÁªÀj / d® ¸ÀA¥À£ÀÆä®)',
    demandNumber: '21',
    sector: 'Water Resources',
    sourceDocument: 'Demands for Grants 2024-25 (Page 6), Demands for Grants 2023-24 July (Page 6), Demands for Grants 2022-23 (Page 6)',
    notes: 'Covers major and medium irrigation canal systems, dam infrastructure, and minor irrigation works.',
  },
];

export function getSectorDepartments(sector: string) {
  return departmentMappings.filter((m) => m.sector === sector);
}
