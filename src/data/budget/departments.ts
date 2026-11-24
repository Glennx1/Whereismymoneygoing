import { DepartmentMap } from '@/lib/types';

/**
 * Mapping of Karnataka Government Departments and Demands for Grants to standardized Budget Sectors.
 * Department names and grant demand numbers evolve over time across budget cycles; this mapping
 * standardizes them across fiscal years.
 */
export const departmentMappings: DepartmentMap = [
  // --- EDUCATION ---
  {
    departmentCode: 'EDN_SCH',
    departmentName: 'Department of Primary and Secondary Education / School Education and Literacy',
    demandNumber: '17',
    sector: 'Education',
    notes: 'Includes elementary education, secondary schools, Samagra Shikshana, and Akshara Dasoha mid-day meal scheme.',
  },
  {
    departmentCode: 'EDN_HGH',
    departmentName: 'Department of Higher Education',
    demandNumber: '17',
    sector: 'Education',
    notes: 'Includes universities, collegiate education, technical education, and polytechnics.',
  },

  // --- HEALTH ---
  {
    departmentCode: 'HLT_FW',
    departmentName: 'Health and Family Welfare Services',
    demandNumber: '22',
    sector: 'Health',
    notes: 'Includes urban and rural allopathic hospitals, primary health centres, Ayushman Bharat - Arogya Karnataka, and drug logistics.',
  },
  {
    departmentCode: 'HLT_MED',
    departmentName: 'Department of Medical Education',
    demandNumber: '22',
    sector: 'Health',
    notes: 'Includes government medical colleges, autonomous super-speciality institutes (e.g. Jayadeva, Kidwai), and nursing directorate.',
  },

  // --- URBAN DEVELOPMENT ---
  {
    departmentCode: 'URB_DEV',
    departmentName: 'Urban Development Department (Municipal Administration & Town Planning)',
    demandNumber: '19',
    sector: 'Urban Development',
    notes: 'Covers Directorate of Municipal Administration (DMA), urban local bodies devolution, smart cities, and AMRUT.',
  },
  {
    departmentCode: 'URB_BLR',
    departmentName: 'Bengaluru Development / BDA / BBMP Grants',
    demandNumber: '19',
    sector: 'Urban Development',
    notes: 'State budget capital and revenue transfers to Bruhat Bengaluru Mahanagara Palike (BBMP) and Bangalore Development Authority (BDA).',
  },

  // --- TRANSPORT AND ROADS ---
  {
    departmentCode: 'TRN_PWD',
    departmentName: 'Public Works Department (PWD)',
    demandNumber: '20',
    sector: 'Transport and Roads',
    notes: 'Capital outlay on state highways, major district roads (MDRs), bridges, and communication networks.',
  },
  {
    departmentCode: 'TRN_COMM',
    departmentName: 'Transport Department (Road Transport & RTC Subsidies)',
    demandNumber: '05',
    sector: 'Transport and Roads',
    notes: 'Motor vehicle regulation, road safety cell, RTC viability gap funding, and Shakthi scheme free travel reimbursements.',
  },
  {
    departmentCode: 'TRN_INF',
    departmentName: 'Infrastructure Development Department (IDD)',
    demandNumber: '06',
    sector: 'Transport and Roads',
    notes: 'State equity and cost-sharing for Namma Metro (BMRCL), Bengaluru Suburban Rail (K-RIDE), railway overbridges, and regional airports.',
  },

  // --- WATER RESOURCES ---
  {
    departmentCode: 'WAT_MAJ',
    departmentName: 'Water Resources Department (Major and Medium Irrigation)',
    demandNumber: '21',
    sector: 'Water Resources',
    notes: 'Canal systems, dam modernisation, flood control embankments, and state irrigation corporations (KBJNL, CNNL, KNNL).',
  },
  {
    departmentCode: 'WAT_MIN',
    departmentName: 'Minor Irrigation and Ground Water Development',
    demandNumber: '21',
    sector: 'Water Resources',
    notes: 'Tanks rejuvenation, check dams, watershed management, and KC Valley / HN Valley treated water lift irrigation projects.',
  },
];

export function getSectorDepartments(sector: string) {
  return departmentMappings.filter((m) => m.sector === sector);
}

