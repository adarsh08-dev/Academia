export interface CollegeItem {
  id: string;
  name: string;
  short: string;
  city: string;
  logo: string;
  fallbackLogo?: string;
  domain?: string;
  badgeColor?: string;
  motto?: string;
}

// Crisp inline SVGs representing authentic medical institutions
export const AIIMS_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="%230F3B82" stroke="%2338BDF8" stroke-width="3"/><circle cx="50" cy="50" r="38" fill="%23FFFFFF"/><path d="M44 26 L56 26 L56 44 L74 44 L74 56 L56 56 L56 74 L44 74 L44 56 L26 56 L26 44 L44 44 Z" fill="%230F3B82"/><circle cx="50" cy="50" r="6" fill="%23F59E0B"/><text x="50" y="88" font-size="7" font-family="sans-serif" font-weight="bold" fill="%23FFFFFF" text-anchor="middle">AIIMS NEW DELHI</text></svg>`;

export const KGMU_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="%23831843" stroke="%23F59E0B" stroke-width="3"/><circle cx="50" cy="50" r="38" fill="%23FFF1F2"/><path d="M50 20 C34 20 28 32 28 48 C28 66 50 76 50 76 C50 76 72 66 72 48 C72 32 66 20 50 20 Z" fill="%23831843"/><circle cx="50" cy="42" r="8" fill="%23F59E0B"/><text x="50" y="88" font-size="7" font-family="sans-serif" font-weight="bold" fill="%23FFFFFF" text-anchor="middle">KGMU LUCKNOW</text></svg>`;

export const PGIMER_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="%23065F46" stroke="%2334D399" stroke-width="3"/><circle cx="50" cy="50" r="38" fill="%23FFFFFF"/><polygon points="50,22 68,38 60,68 40,68 32,38" fill="%23065F46"/><circle cx="50" cy="48" r="8" fill="%2334D399"/><text x="50" y="88" font-size="7" font-family="sans-serif" font-weight="bold" fill="%23FFFFFF" text-anchor="middle">PGIMER CHANDIGARH</text></svg>`;

export const CMC_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="%231E3A8A" stroke="%2360A5FA" stroke-width="3"/><circle cx="50" cy="50" r="38" fill="%23FFFFFF"/><path d="M44 26 L56 26 L56 44 L74 44 L74 56 L56 56 L56 74 L44 74 L44 56 L26 56 L26 44 L44 44 Z" fill="%23EF4444"/><text x="50" y="88" font-size="7" font-family="sans-serif" font-weight="bold" fill="%23FFFFFF" text-anchor="middle">CMC VELLORE</text></svg>`;

export const MAMC_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="%231E293B" stroke="%2338BDF8" stroke-width="3"/><circle cx="50" cy="50" r="38" fill="%23F8FAFC"/><circle cx="50" cy="46" r="14" fill="%230284C7"/><text x="50" y="88" font-size="7" font-family="sans-serif" font-weight="bold" fill="%23FFFFFF" text-anchor="middle">MAMC NEW DELHI</text></svg>`;

export const TATA_MEMORIAL_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="48" fill="%230F766E" stroke="%232DD4BF" stroke-width="3"/><circle cx="50" cy="50" r="38" fill="%23FFFFFF"/><path d="M36 30 L64 30 L50 68 Z" fill="%230F766E"/><text x="50" y="88" font-size="6.5" font-family="sans-serif" font-weight="bold" fill="%23FFFFFF" text-anchor="middle">TATA MEMORIAL ACTREC</text></svg>`;

export const UNIS: CollegeItem[] = [
  {
    id: "aiims",
    name: "All India Institute of Medical Sciences, New Delhi",
    short: "AIIMS New Delhi",
    city: "New Delhi",
    logo: "https://www.aiims.edu/images/logo.png",
    fallbackLogo: AIIMS_SVG,
    domain: "aiims.edu",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    motto: "शरीरमाद्यं खलु धर्मसाधनम्"
  },
  {
    id: "kgmu",
    name: "King George's Medical University, Lucknow",
    short: "KGMU",
    city: "Lucknow",
    logo: "https://kgmu.org/images/logo.png",
    fallbackLogo: KGMU_SVG,
    domain: "kgmu.org",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    motto: "Excellence in Medical Education & Patient Care"
  },
  {
    id: "pgimer",
    name: "Postgraduate Institute of Medical Education and Research",
    short: "PGIMER",
    city: "Chandigarh",
    logo: "https://pgimer.edu.in/logo.png",
    fallbackLogo: PGIMER_SVG,
    domain: "pgimer.edu.in",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    motto: "Service to the Community & Medical Research"
  },
  {
    id: "cmc",
    name: "Christian Medical College, Vellore",
    short: "CMC Vellore",
    city: "Vellore",
    logo: "https://cmch-vellore.edu/logo.png",
    fallbackLogo: CMC_SVG,
    domain: "cmch-vellore.edu",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    motto: "Not to be ministered unto, but to minister"
  },
  {
    id: "mamc",
    name: "Maulana Azad Medical College, New Delhi",
    short: "MAMC",
    city: "New Delhi",
    logo: "https://mamc.ac.in/logo.png",
    fallbackLogo: MAMC_SVG,
    domain: "mamc.ac.in",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    motto: "Dedication to Healing & Medical Discovery"
  },
  {
    id: "tmc",
    name: "Tata Memorial Centre & ACTREC, Mumbai",
    short: "TMC ACTREC",
    city: "Mumbai",
    logo: "https://tmc.gov.in/logo.png",
    fallbackLogo: TATA_MEMORIAL_SVG,
    domain: "tmc.gov.in",
    badgeColor: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    motto: "Comprehensive Cancer Care & Translational Research"
  }
];

export const COLLEGES_DATA: CollegeItem[] = UNIS;
export const COLLEGES_LIST = COLLEGES_DATA;

export const DEPARTMENTS = [
  "Medicine & Allied Specialties",
  "General Surgery & Surgical Sciences",
  "Pediatrics & Neonatology",
  "Cardiology & Cardiovascular Sciences",
  "Neurology & Neurosciences",
  "Dermatology & Venereology",
  "Radiology & Medical Imaging",
  "Pathology & Laboratory Medicine",
  "Anesthesiology & Critical Care",
  "Psychiatry & Behavioral Sciences",
  "Orthopedics & Trauma",
  "Ophthalmology",
  "Otorhinolaryngology (ENT)",
  "Obstetrics & Gynecology (OB-GYN)",
  "Emergency Medicine & Acute Care",
  "Public Health & Epidemiology",
  "Clinical Research & Trial Methodologies",
  "Healthcare Administration & Hospital Management",
  "Digital Health & Medical Informatics"
];

export const DEPARTMENTS_DATA = DEPARTMENTS.map(d => ({
  name: d,
  code: d.replace(/[^A-Za-z0-9]/g, '').slice(0, 4).toUpperCase(),
  icon: d.includes('Surgery') || d.includes('Orthopedics') ? '🩺' :
        d.includes('Cardiology') ? '❤️' :
        d.includes('Neurology') ? '🧠' :
        d.includes('Radiology') || d.includes('Imaging') ? '🔬' :
        d.includes('Pediatrics') ? '👶' :
        d.includes('Emergency') ? '🚨' :
        d.includes('Public Health') ? '🌍' :
        d.includes('Research') ? '📑' :
        d.includes('Digital') || d.includes('Informatics') ? '💻' : '🏥'
}));

export const MENTOR_COMPANIES_DATA = [
  "Apollo Hospitals & Research Foundation - 12 Yrs",
  "AIIMS Clinical Innovation Centre - 10 Yrs",
  "Fortis Healthcare & Clinical Trials - 8 Yrs",
  "Max Healthcare Institute - 14 Yrs",
  "Tata Memorial Hospital & Cancer Centre - 15 Yrs",
  "Medanta - The Medicity - 9 Yrs",
  "IQVIA Global Clinical Solutions - 11 Yrs",
  "Biocon Biologics Clinical Development - 7 Yrs",
  "ICMR - Indian Council of Medical Research - 16 Yrs",
  "WHO Collaborating Centre - 13 Yrs"
];

export const MENTOR_EXPERTISE_TAGS = [
  "Clinical Practice & Diagnostics",
  "Clinical Research & GCP Trials",
  "Medical Research Methodology",
  "Biostatistics & Epidemiological Modeling",
  "Public Health & Epidemiology",
  "Research Ethics & IRB Compliance",
  "Digital Health & Telemedicine",
  "Healthcare Administration & Quality Safety",
  "Hospital Management & Clinical Operations",
  "Pharmacovigilance & Drug Safety",
  "Medical Education & Academic Medicine",
  "Clinical Case Auditing & Protocol Design"
];

