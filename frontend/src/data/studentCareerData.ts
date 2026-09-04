import { 
  SkillItem, 
  SkillGapItem, 
  JobOpportunity, 
  ApplicationItem, 
  LearningCourse, 
  ProjectItem, 
  CertificationItem, 
  AchievementItem, 
  AssessmentCategory, 
  AssessmentResult, 
  MentorSession
} from '../types';

// ==========================================
// 1. HEALTHCARE & MEDICAL SKILLS INVENTORY
// ==========================================
export const INITIAL_SKILLS: SkillItem[] = [
  {
    id: 'sk-anatomy',
    name: 'Anatomy & Physiology',
    category: 'technical',
    subCategory: 'Pre-Clinical Sciences',
    level: 3,
    maxLevel: 5,
    score: 74,
    requiredLevel: 4,
    verified: true,
    assessmentScore: 74,
    lastAssessed: '2026-08-20',
    trend: 'up'
  },
  {
    id: 'sk-pharmacology',
    name: 'Pharmacology',
    category: 'technical',
    subCategory: 'Para-Clinical Therapeutics',
    level: 2,
    maxLevel: 5,
    score: 62,
    requiredLevel: 4,
    verified: false,
    assessmentScore: 62,
    lastAssessed: '2026-08-14',
    trend: 'up'
  },
  {
    id: 'sk-diagnostics',
    name: 'Clinical Diagnosis',
    category: 'technical',
    subCategory: 'Clinical Medicine',
    level: 4,
    maxLevel: 5,
    score: 88,
    requiredLevel: 4,
    verified: true,
    assessmentScore: 88,
    lastAssessed: '2026-08-15',
    trend: 'up'
  },
  {
    id: 'sk-pathology',
    name: 'Pathology Basics',
    category: 'technical',
    subCategory: 'Para-Clinical Lab Medicine',
    level: 3,
    maxLevel: 5,
    score: 72,
    requiredLevel: 4,
    verified: true,
    assessmentScore: 72,
    lastAssessed: '2026-08-11',
    trend: 'stable'
  },
  {
    id: 'sk-patient-exam',
    name: 'Patient History Taking & Physical Exam',
    category: 'technical',
    subCategory: 'Clinical Practice',
    level: 5,
    maxLevel: 5,
    score: 94,
    requiredLevel: 4,
    verified: true,
    assessmentScore: 94,
    lastAssessed: '2026-08-10',
    trend: 'up'
  },
  {
    id: 'sk-gcp-trials',
    name: 'Medical Research & GCP Guidelines',
    category: 'technical',
    subCategory: 'Research Methodology',
    level: 4,
    maxLevel: 5,
    score: 86,
    requiredLevel: 4,
    verified: true,
    assessmentScore: 86,
    lastAssessed: '2026-08-18',
    trend: 'stable'
  },
  {
    id: 'sk-biostats',
    name: 'Biostatistics & Epidemiological Data Analysis',
    category: 'technical',
    subCategory: 'Health Data & Informatics',
    level: 3,
    maxLevel: 5,
    score: 68,
    requiredLevel: 4,
    verified: false,
    assessmentScore: 68,
    lastAssessed: '2026-08-05',
    trend: 'stable'
  },
  {
    id: 'sk-emergency-acls',
    name: 'Emergency Triaging & BLS/ACLS Protocols',
    category: 'technical',
    subCategory: 'Emergency Medicine',
    level: 4,
    maxLevel: 5,
    score: 82,
    requiredLevel: 4,
    verified: true,
    assessmentScore: 82,
    lastAssessed: '2026-08-12',
    trend: 'up'
  },
  {
    id: 'sk-health-informatics',
    name: 'Health Informatics & EHR Interoperability (HL7/FHIR)',
    category: 'technical',
    subCategory: 'Digital Health',
    level: 2,
    maxLevel: 5,
    score: 52,
    requiredLevel: 4,
    verified: false,
    assessmentScore: 52,
    lastAssessed: '2026-07-28',
    trend: 'down'
  },
  {
    id: 'sk-ethics-irb',
    name: 'Medical Ethics, IRB Compliance & Informed Consent',
    category: 'technical',
    subCategory: 'Bioethics & Governance',
    level: 4,
    maxLevel: 5,
    score: 85,
    requiredLevel: 4,
    verified: true,
    assessmentScore: 85,
    lastAssessed: '2026-08-01',
    trend: 'stable'
  },
  {
    id: 'sk-pharmacovigilance',
    name: 'Pharmacovigilance & Adverse Drug Reaction Reporting',
    category: 'technical',
    subCategory: 'Pharmacology & Therapeutics',
    level: 3,
    maxLevel: 5,
    score: 70,
    requiredLevel: 4,
    verified: false,
    assessmentScore: 70,
    lastAssessed: '2026-08-14',
    trend: 'up'
  },
  // Soft & Interpersonal Skills
  {
    id: 'sk-comm-empathy',
    name: 'Doctor-Patient Communication & Empathetic Counseling',
    category: 'soft',
    subCategory: 'Clinical Communication',
    level: 4,
    maxLevel: 5,
    score: 86,
    requiredLevel: 4,
    verified: true,
    assessmentScore: 86,
    lastAssessed: '2026-08-14',
    trend: 'up'
  },
  {
    id: 'sk-multidisciplinary',
    name: 'Multidisciplinary Clinical Teamwork & Ward Rounds',
    category: 'soft',
    subCategory: 'Teamwork',
    level: 4,
    maxLevel: 5,
    score: 84,
    requiredLevel: 4,
    verified: true,
    assessmentScore: 84,
    lastAssessed: '2026-08-16',
    trend: 'up'
  },
  {
    id: 'sk-critical-reasoning',
    name: 'Critical Reasoning in Complex Diagnostic Dilemmas',
    category: 'soft',
    subCategory: 'Problem Solving',
    level: 4,
    maxLevel: 5,
    score: 88,
    requiredLevel: 4,
    verified: true,
    assessmentScore: 88,
    lastAssessed: '2026-08-19',
    trend: 'up'
  },
  {
    id: 'sk-clinical-leadership',
    name: 'Clinical Leadership & Healthcare Unit Governance',
    category: 'soft',
    subCategory: 'Leadership',
    level: 3,
    maxLevel: 5,
    score: 66,
    requiredLevel: 4,
    verified: false,
    assessmentScore: 66,
    lastAssessed: '2026-08-08',
    trend: 'stable'
  },
  {
    id: 'sk-rotational-agility',
    name: 'Time Management in High-Acuity Clinical Rotations',
    category: 'soft',
    subCategory: 'Time Management',
    level: 4,
    maxLevel: 5,
    score: 82,
    requiredLevel: 4,
    verified: true,
    assessmentScore: 82,
    lastAssessed: '2026-08-11',
    trend: 'stable'
  }
];

// ==========================================
// 2. HEALTHCARE SKILL GAP ANALYSIS DATA
// ==========================================
export const INITIAL_SKILL_GAPS: SkillGapItem[] = [
  {
    skill: 'Pharmacology (Antimicrobial Stewardship & Pharmacokinetics)',
    category: 'technical',
    currentLevel: 2,
    requiredLevel: 4,
    currentScore: 62,
    requiredScore: 80,
    gapStatus: 'Moderate Gap',
    impactOnPlacement: 'High',
    recommendedCourses: [
      {
        title: 'Clinical Pharmacology & Adverse Drug Reaction Reporting',
        provider: 'AIIMS Dept of Pharmacology & LADDER',
        duration: '14 Hours'
      },
      {
        title: 'Antimicrobial Stewardship & Rational Drug Prescribing',
        provider: 'ICMR Clinical Training Wing',
        duration: '10 Hours'
      }
    ],
    recommendedCertifications: ['Clinical Pharmacovigilance & Drug Safety Certification'],
    recommendedMentorTopic: 'Optimizing ICU Pharmacotherapy & Mitigating Nephrotoxicity',
    recommendedProject: 'Hospital ICU Adverse Drug Event (ADE) Surveillance & Protocol Audit'
  },
  {
    skill: 'Anatomy & Applied Surgical Physiology',
    category: 'technical',
    currentLevel: 3,
    requiredLevel: 4,
    currentScore: 74,
    requiredScore: 85,
    gapStatus: 'Moderate Gap',
    impactOnPlacement: 'Medium',
    recommendedCourses: [
      {
        title: 'Applied Surgical Anatomy & Bedside Surface Landmarks',
        provider: 'AIIMS Dept of Anatomy & LADDER',
        duration: '12 Hours'
      }
    ],
    recommendedCertifications: ['Advanced Clinical Anatomy & Ultrasound Topography Certificate'],
    recommendedMentorTopic: 'Translating Cross-Sectional Anatomy to Bedside Diagnostic Imaging',
    recommendedProject: 'Clinical Anatomical Landmark Guide for Emergency Central Venous Line Access'
  },
  {
    skill: 'Health Informatics & EHR Interoperability (HL7/FHIR)',
    category: 'technical',
    currentLevel: 2,
    requiredLevel: 4,
    currentScore: 52,
    requiredScore: 80,
    gapStatus: 'Critical Gap',
    impactOnPlacement: 'High',
    recommendedCourses: [
      {
        title: 'Modern Digital Health Systems & HL7 FHIR Interoperability',
        provider: 'AIIMS Digital Health Wing & LADDER',
        duration: '12 Hours'
      },
      {
        title: 'Clinical Decision Support Systems & Electronic Medical Records',
        provider: 'Healthcare Informatics Consortium',
        duration: '8 Hours'
      }
    ],
    recommendedCertifications: ['Certified Healthcare Informatics Professional (CHIP)'],
    recommendedMentorTopic: 'EHR Data Standards & Clinical Decision Support Alert Fatigue',
    recommendedProject: 'Regional Hospital EHR Clinical Data Normalization Pipeline'
  },
  {
    skill: 'Biostatistics & Epidemiological Data Analysis',
    category: 'technical',
    currentLevel: 3,
    requiredLevel: 4,
    currentScore: 68,
    requiredScore: 82,
    gapStatus: 'Moderate Gap',
    impactOnPlacement: 'High',
    recommendedCourses: [
      {
        title: 'Applied Biostatistics with R for Clinical Trialists',
        provider: 'IQVIA Clinical Academy & LADDER',
        duration: '14 Hours'
      },
      {
        title: 'Survival Analysis & Multivariate Logistic Regression in Medicine',
        provider: 'ICMR Biostatistics Wing',
        duration: '6 Hours'
      }
    ],
    recommendedCertifications: ['Certified Clinical Data Analyst (CCDA)'],
    recommendedMentorTopic: 'Sample Size Calculation & Kaplan-Meier Survival Curves',
    recommendedProject: 'Retrospective Cohort Analysis of Biomarkers in Heart Failure'
  },
  {
    skill: 'Pharmacovigilance & Adverse Drug Reaction Reporting',
    category: 'technical',
    currentLevel: 3,
    requiredLevel: 4,
    currentScore: 70,
    requiredScore: 82,
    gapStatus: 'Moderate Gap',
    impactOnPlacement: 'Medium',
    recommendedCourses: [
      {
        title: 'Global Pharmacovigilance & Drug Safety Signal Detection',
        provider: 'Biocon Clinical Academy',
        duration: '8 Hours'
      }
    ],
    recommendedCertifications: ['Postgraduate Certificate in Pharmacovigilance & Drug Safety'],
    recommendedMentorTopic: 'Causality Assessment using Naranjo and WHO-UMC Algorithms',
    recommendedProject: 'Multi-Centre ICU Adverse Drug Reaction Surveillance Audit'
  },
  {
    skill: 'Clinical Leadership & Healthcare Unit Governance',
    category: 'soft',
    currentLevel: 3,
    requiredLevel: 4,
    currentScore: 66,
    requiredScore: 78,
    gapStatus: 'Moderate Gap',
    impactOnPlacement: 'Medium',
    recommendedCourses: [
      {
        title: 'Healthcare Team Leadership & Patient Safety Culture',
        provider: 'Max Healthcare Institute of Quality',
        duration: '6 Hours'
      }
    ],
    recommendedCertifications: ['Certified Healthcare Quality & Patient Safety Manager'],
    recommendedMentorTopic: 'Conflict Resolution and Root Cause Analysis (RCA) in Ward Teams',
    recommendedProject: 'Morbidity & Mortality Audit Protocol Implementation'
  },
  {
    skill: 'Clinical Diagnostics & Differential Reasoning',
    category: 'technical',
    currentLevel: 4,
    requiredLevel: 4,
    currentScore: 88,
    requiredScore: 85,
    gapStatus: 'Mastered',
    impactOnPlacement: 'Low',
    recommendedCourses: [],
    recommendedCertifications: ['Advanced Clinical Diagnostic Reasoning Credential'],
    recommendedMentorTopic: 'Complex Multi-Morbidity Diagnostic Strategy',
    recommendedProject: 'Rare Presentation Clinical Case Vignette Publication'
  },
  {
    skill: 'GCP Guidelines & Clinical Trials Protocol',
    category: 'technical',
    currentLevel: 4,
    requiredLevel: 4,
    currentScore: 86,
    requiredScore: 85,
    gapStatus: 'Mastered',
    impactOnPlacement: 'Low',
    recommendedCourses: [],
    recommendedCertifications: ['ICH-GCP E6(R2) Certified Clinical Investigator'],
    recommendedMentorTopic: 'Phase III Multi-Center Trial Quality Audits',
    recommendedProject: 'Investigator-Initiated Clinical Trial Protocol Formulation'
  },
  {
    skill: 'Patient History & Systematic Physical Exam',
    category: 'technical',
    currentLevel: 5,
    requiredLevel: 4,
    currentScore: 94,
    requiredScore: 85,
    gapStatus: 'Mastered',
    impactOnPlacement: 'Low',
    recommendedCourses: [],
    recommendedCertifications: ['Master of Bedside Clinical Examination'],
    recommendedMentorTopic: 'Advanced Bedside Cardiovascular & Neurological Signs',
    recommendedProject: 'Video-Assisted Clinical Examination Teaching Repository'
  }
];

// ==========================================
// 3. HEALTHCARE OPPORTUNITIES & INTERNSHIPS
// ==========================================
export const INITIAL_OPPORTUNITIES: JobOpportunity[] = [
  {
    id: 'opp-1',
    company: 'Apollo Hospitals & Research Foundation',
    title: 'Clinical Research Fellow / Micro-Intern (GCP Protocol & Patient Cohorts)',
    location: 'Hyderabad / Hybrid',
    workMode: 'Hybrid',
    opportunityType: 'Internship',
    duration: '3 Months',
    stipendOrSalary: '₹35,000 / month',
    requiredSkills: ['Clinical Diagnostics', 'GCP Guidelines', 'Patient History', 'Medical Ethics'],
    preferredSkills: ['Biostatistics', 'Electronic Health Records', 'Literature Synthesis'],
    eligibility: 'MBBS / Healthcare Final Year or Postgraduates with valid institutional affiliation and GCP certification',
    applicationDeadline: '2026-09-25',
    description: 'Join Apollo Research Foundation’s international cardiology clinical trials cohort. Work closely with Principal Investigators on protocol adherence, electronic case report forms (eCRF), patient screening audits, and observational biomarker registries.',
    responsibilities: [
      'Conduct rigorous protocol audits in accordance with ICH-GCP E6(R2) guidelines.',
      'Review electronic Case Report Forms (eCRFs) and verify primary source documentation.',
      'Collaborate with the Institutional Ethics Committee (IEC) on annual safety updates.',
      'Participate in bi-weekly multi-disciplinary translational research presentations.'
    ],
    openingsCount: 4,
    postedDate: '2026-08-25',
    featured: true
  },
  {
    id: 'opp-2',
    company: 'AIIMS Clinical Innovation Wing',
    title: 'Cardiovascular Clinical Trials Trainee & Research Associate',
    location: 'New Delhi / On-site',
    workMode: 'On-site',
    opportunityType: 'Full-Time',
    stipendOrSalary: '₹12.0 – ₹16.5 LPA',
    requiredSkills: ['Clinical Diagnostics', 'GCP Guidelines', 'Biostatistics', 'Emergency Medicine'],
    preferredSkills: ['Echocardiography Fundamentals', 'Epidemiology', 'Medical Writing'],
    eligibility: 'Medical Graduates (MBBS/MD/MS) or Allied Health Masters with clinical trial aptitude',
    applicationDeadline: '2026-10-15',
    description: 'Premier national institute appointment under the Department of Cardiology and Translational Medicine. Selected associates coordinate ICMR-funded multicenter clinical trials evaluating novel cardiovascular devices and drug protocols.',
    responsibilities: [
      'Coordinate patient recruitment, informed consent execution, and follow-up clinical visits.',
      'Analyze hemodynamic trial data alongside senior cardiology consultants.',
      'Co-author research manuscripts for peer-reviewed indexed medical journals (PubMed/Scopus).',
      'Supervise junior medical interns on clinical data collection and patient safety monitoring.'
    ],
    openingsCount: 6,
    postedDate: '2026-08-26',
    featured: true
  },
  {
    id: 'opp-3',
    company: 'IQVIA Global Clinical Solutions',
    title: 'Associate Clinical Data Specialist (Biostatistics & GCP)',
    location: 'Bengaluru / Hybrid',
    workMode: 'Hybrid',
    opportunityType: 'Full-Time',
    stipendOrSalary: '₹10.5 – ₹14.0 LPA',
    requiredSkills: ['Biostatistics', 'GCP Guidelines', 'Health Informatics', 'Critical Reasoning'],
    preferredSkills: ['R / SAS Basics', 'MedDRA Coding', 'Clinical Data Quality'],
    eligibility: 'Medical, Pharmacy, or Biomedical graduates with minimum 75% Career Readiness and verified GCP credentials',
    applicationDeadline: '2026-10-20',
    description: 'Work with the world leader in clinical trials execution. Manage clinical database validation, adverse event MedDRA coding, statistical cohort analysis, and trial monitoring reports for global pharmaceutical sponsors.',
    responsibilities: [
      'Perform data validation checks on Phase II & III clinical trial databases.',
      'Apply standard MedDRA and WHODrug dictionaries for adverse event classification.',
      'Collaborate with biostatisticians on Interim Safety Analysis data extractions.',
      'Ensure strict regulatory compliance with US FDA 21 CFR Part 11 and EMA requirements.'
    ],
    openingsCount: 10,
    postedDate: '2026-08-28',
    featured: true
  },
  {
    id: 'opp-4',
    company: 'Max Healthcare Institute of Academics',
    title: 'Hospital Clinical Quality & Patient Safety Observer',
    location: 'Delhi NCR / On-site',
    workMode: 'On-site',
    opportunityType: 'Internship',
    duration: '4 Months',
    stipendOrSalary: '₹30,000 / month',
    requiredSkills: ['Patient History', 'Clinical Diagnostics', 'Medical Ethics', 'Teamwork'],
    preferredSkills: ['NABH / JCI Standards', 'Clinical Audit', 'Infection Control'],
    eligibility: 'Healthcare & Medical students seeking structured clinical governance and hospital quality exposure',
    applicationDeadline: '2026-09-30',
    description: 'Immerse in NABH & JCI quality assurance workflows across super-specialty hospital units. Participate in clinical audit rounds, surgical checklist verifications, and medication safety monitoring committees.',
    responsibilities: [
      'Audit clinical documentation compliance across intensive care and surgical inpatient wards.',
      'Assist the Quality Assurance team with Root Cause Analysis (RCA) on sentinel events.',
      'Track hospital-acquired infection surveillance metrics with infection control nurses.',
      'Present monthly patient safety improvement findings to the hospital medical director.'
    ],
    openingsCount: 5,
    postedDate: '2026-08-20'
  },
  {
    id: 'opp-5',
    company: 'Biocon Biologics Clinical Development',
    title: 'Biosimilar Clinical Pharmacovigilance Trainee',
    location: 'Bengaluru / Hybrid',
    workMode: 'Hybrid',
    opportunityType: 'Internship',
    duration: '6 Months',
    stipendOrSalary: '₹40,000 / month',
    requiredSkills: ['Pharmacovigilance', 'GCP Guidelines', 'Clinical Diagnostics'],
    preferredSkills: ['Signal Detection', 'Literature Review', 'Drug Safety Regulation'],
    eligibility: 'Medical, Pharmacology, or Clinical Research students with strong pharmacotherapy foundation',
    applicationDeadline: '2026-09-22',
    description: 'Support post-marketing surveillance and global safety reporting for biologic therapies in oncology and immunology. Gain hands-on exposure to ICSR case processing, signal evaluation, and periodic safety update reports (PSUR).',
    responsibilities: [
      'Screen Individual Case Safety Reports (ICSRs) from clinical studies and global registries.',
      'Evaluate medical causality for adverse events using standardized diagnostic algorithms.',
      'Prepare narrative summaries for expedited reporting to international health authorities.',
      'Attend weekly clinical review meetings with European and US regulatory liaisons.'
    ],
    openingsCount: 3,
    postedDate: '2026-08-28'
  },
  {
    id: 'opp-6',
    company: 'WHO Collaborating Centre & ICMR',
    title: 'Public Health Surveillance & Epidemiology Field Fellow',
    location: 'Lucknow / Hybrid',
    workMode: 'Hybrid',
    opportunityType: 'Internship',
    duration: '6 Months',
    stipendOrSalary: '₹45,000 / month',
    requiredSkills: ['Biostatistics', 'Clinical Diagnostics', 'Medical Ethics', 'Teamwork'],
    preferredSkills: ['GIS Mapping', 'Outbreak Investigation', 'Community Health'],
    eligibility: 'Final year medical students or MPH scholars with passion for epidemiological research',
    applicationDeadline: '2026-10-10',
    description: 'Work at the frontier of community health and vector-borne epidemic surveillance. Analyze district-level health data, conduct outbreak response field audits, and support evidence-based healthcare policy formulation.',
    responsibilities: [
      'Analyze epidemiological surveillance datasets for early outbreak warning indicators.',
      'Conduct community health audit surveys alongside district health officers.',
      'Draft policy briefs on vector control efficacy and maternal health immunization rates.',
      'Contribute to state-level disease burden statistical reports.'
    ],
    openingsCount: 8,
    postedDate: '2026-08-22'
  }
];

// ==========================================
// 4. APPLICATION TRACKER INITIAL DATA
// ==========================================
export const INITIAL_APPLICATIONS: ApplicationItem[] = [
  {
    id: 'app-101',
    opportunityId: 'opp-1',
    opportunityTitle: 'Clinical Research Fellow / Micro-Intern (GCP Protocol & Patient Cohorts)',
    opportunityType: 'Internship',
    company: 'Apollo Hospitals & Research Foundation',
    location: 'Hyderabad / Hybrid',
    workMode: 'Hybrid',
    stipendOrSalary: '₹35,000 / month',
    status: 'Shortlisted',
    appliedDate: '2026-08-22',
    lastUpdated: '2026-08-28',
    deadline: '2026-09-25',
    matchScore: 94,
    notes: 'Clinical curriculum vitae and ICH-GCP verification passed PI screening. Candidate invited for Round 1 Protocol Defense Interview.',
    timeline: [
      { status: 'Applied', date: '2026-08-22', note: 'Application and LADDER Skill Passport submitted', completed: true },
      { status: 'Under Review', date: '2026-08-24', note: 'Profile & Research Portfolio reviewed by Dr. Priya Nair', completed: true },
      { status: 'Shortlisted', date: '2026-08-28', note: 'Selected for live Clinical Trial Protocol Presentation', completed: true },
      { status: 'Interview', date: 'Upcoming (Sep 05)', note: '30-Min Technical Conversation with Senior Clinical Scientist', completed: false },
      { status: 'Selected', date: 'Pending', note: 'Official Fellowship Onboarding', completed: false }
    ]
  },
  {
    id: 'app-102',
    opportunityId: 'opp-3',
    opportunityTitle: 'Associate Clinical Data Specialist (Biostatistics & GCP)',
    opportunityType: 'Job',
    company: 'IQVIA Global Clinical Solutions',
    location: 'Bengaluru / Hybrid',
    workMode: 'Hybrid',
    stipendOrSalary: '₹10.5 – ₹14.0 LPA',
    status: 'Under Review',
    appliedDate: '2026-08-27',
    lastUpdated: '2026-08-29',
    deadline: '2026-10-20',
    matchScore: 88,
    notes: 'Application submitted with verified Biostatistics and Diagnostic assessment scores attached.',
    timeline: [
      { status: 'Applied', date: '2026-08-27', note: 'Application received by Talent Acquisition', completed: true },
      { status: 'Under Review', date: '2026-08-29', note: 'Verifying GCP credentials and biostatistics aptitude', completed: true },
      { status: 'Shortlisted', date: 'Pending', note: 'Awaiting cohort shortlisting announcement', completed: false },
      { status: 'Interview', date: 'Pending', note: 'Clinical data logic & case presentation', completed: false },
      { status: 'Selected', date: 'Pending', note: 'Formal offer issuance', completed: false }
    ]
  },
  {
    id: 'app-103',
    opportunityId: 'opp-2',
    opportunityTitle: 'Cardiovascular Clinical Trials Trainee & Research Associate',
    opportunityType: 'Job',
    company: 'AIIMS Clinical Innovation Wing',
    location: 'New Delhi / On-site',
    workMode: 'On-site',
    stipendOrSalary: '₹12.0 – ₹16.5 LPA',
    status: 'Applied',
    appliedDate: '2026-08-30',
    lastUpdated: '2026-08-30',
    deadline: '2026-10-15',
    matchScore: 91,
    notes: 'Research fellow application registered with institutional endorsement from academic dean.',
    timeline: [
      { status: 'Applied', date: '2026-08-30', note: 'Application dossier and research publications uploaded', completed: true },
      { status: 'Under Review', date: 'Pending', note: 'Automated eligibility verification', completed: false },
      { status: 'Shortlisted', date: 'Pending', note: 'Written trial methodology assessment', completed: false },
      { status: 'Interview', date: 'Pending', note: 'Departmental Faculty Interview Board', completed: false },
      { status: 'Selected', date: 'Pending', note: 'National Fellowship confirmation', completed: false }
    ]
  },
  {
    id: 'app-104',
    opportunityId: 'opp-4',
    opportunityTitle: 'Hospital Clinical Quality & Patient Safety Observer',
    opportunityType: 'Internship',
    company: 'Max Healthcare Institute of Academics',
    location: 'Delhi NCR / On-site',
    workMode: 'On-site',
    stipendOrSalary: '₹30,000 / month',
    status: 'Selected',
    appliedDate: '2026-08-10',
    lastUpdated: '2026-08-18',
    deadline: '2026-08-20',
    matchScore: 96,
    notes: 'Clinical audit proposal approved with distinction. Onboarding completed and Experience Passport credential verified!',
    timeline: [
      { status: 'Applied', date: '2026-08-10', note: 'Application submitted with clinical case portfolio', completed: true },
      { status: 'Under Review', date: '2026-08-12', note: 'Medical Director review completed', completed: true },
      { status: 'Shortlisted', date: '2026-08-14', note: 'Invited for orientation interview', completed: true },
      { status: 'Interview', date: '2026-08-16', note: 'Interview with Head of Quality Assurance', completed: true },
      { status: 'Selected', date: '2026-08-18', note: 'Approved & Rotational Badge Issued', completed: true }
    ]
  }
];

// ==========================================
// 5. HEALTHCARE LEARNING HUB COURSES
// ==========================================
export const INITIAL_COURSES: LearningCourse[] = [
  {
    id: 'course-1',
    title: 'Good Clinical Practice (GCP) & Clinical Trial Management Masterclass',
    provider: 'ICMR & LADDER Clinical Academy',
    category: 'Research Methodology',
    skillsCovered: ['GCP Guidelines', 'Clinical Trials', 'Medical Ethics', 'Informed Consent'],
    level: 'Intermediate',
    duration: '14 Hours',
    modulesCount: 8,
    completedModules: 8,
    progressPercent: 100,
    status: 'Completed',
    targetSkillGap: 'GCP Guidelines & Clinical Trials Protocol',
    recommendationReason: 'Verified foundational certification required for all hospital clinical trial fellowships.',
    rating: 4.95,
    enrolledDate: '2026-08-01'
  },
  {
    id: 'course-2',
    title: 'Modern Digital Health Systems & HL7 FHIR Interoperability',
    provider: 'AIIMS Digital Health Wing & LADDER',
    category: 'Digital Health & Informatics',
    skillsCovered: ['Health Informatics', 'HL7/FHIR', 'EHR Standards', 'Clinical Decision Support'],
    level: 'Intermediate',
    duration: '12 Hours',
    modulesCount: 8,
    completedModules: 1,
    progressPercent: 12,
    status: 'In Progress',
    targetSkillGap: 'Health Informatics & EHR Interoperability (HL7/FHIR)',
    recommendationReason: 'Recommended because: Your Digital Health score (L2) is your highest-priority placement gap for Healthcare Innovation roles.',
    rating: 4.9,
    enrolledDate: '2026-08-20'
  },
  {
    id: 'course-3',
    title: 'Applied Biostatistics with R for Clinical Trialists',
    provider: 'IQVIA Clinical Academy & LADDER',
    category: 'Health Data & Research',
    skillsCovered: ['Biostatistics', 'Survival Analysis', 'Epidemiology', 'R Statistics'],
    level: 'Advanced',
    duration: '16 Hours',
    modulesCount: 10,
    completedModules: 3,
    progressPercent: 30,
    status: 'In Progress',
    targetSkillGap: 'Biostatistics & Epidemiological Data Analysis',
    recommendationReason: 'Recommended because: Upgrading Biostatistics from Level 3 to Level 4 unlocks premier clinical data science appointments.',
    rating: 4.88,
    enrolledDate: '2026-08-16'
  },
  {
    id: 'course-4',
    title: 'Global Pharmacovigilance & Drug Safety Signal Detection',
    provider: 'Biocon Clinical Academy',
    category: 'Pharmacology & Safety',
    skillsCovered: ['Pharmacovigilance', 'Adverse Drug Reactions', 'MedDRA', 'Signal Detection'],
    level: 'Intermediate',
    duration: '10 Hours',
    modulesCount: 6,
    completedModules: 0,
    progressPercent: 0,
    status: 'Not Started',
    targetSkillGap: 'Pharmacovigilance & Adverse Drug Reaction Reporting',
    recommendationReason: 'Recommended because: Crucial for pharmaceutical clinical research and safety officer applications.',
    rating: 4.82
  },
  {
    id: 'course-5',
    title: 'Doctor-Patient Communication, Breaking Bad News & Clinical Ethics',
    provider: 'Medical Education Council',
    category: 'Clinical Communication',
    skillsCovered: ['Clinical Communication', 'Medical Ethics', 'Empathy', 'Conflict Resolution'],
    level: 'Beginner',
    duration: '6 Hours',
    modulesCount: 5,
    completedModules: 3,
    progressPercent: 60,
    status: 'In Progress',
    targetSkillGap: 'Doctor-Patient Communication & Empathetic Counseling',
    recommendationReason: 'Master empathetic communication and difficult prognosis conversations in hospital settings.',
    rating: 4.92,
    enrolledDate: '2026-08-14'
  }
];

// ==========================================
// 6. HEALTHCARE RESEARCH & CHALLENGES
// ==========================================
export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Prospective Multi-Center Heart Failure Cohort Registry & Biomarker Audit',
    type: 'Live Industry Challenge',
    industry: 'Cardiovascular Clinical Research',
    company: 'Apollo Hospitals & Research Foundation',
    description: 'Design and implement an electronic clinical data registry tracking NT-proBNP and high-sensitivity troponin trajectories in 500 post-infarction patients, assessing 90-day readmission predictors.',
    requiredSkills: ['Clinical Diagnostics', 'GCP Guidelines', 'Biostatistics', 'Medical Ethics'],
    duration: '4 Weeks Sprint',
    teamSize: '2 – 3 Researchers',
    deadline: '2026-09-30',
    status: 'Joined',
    bountyOrReward: '₹25,000 Research Grant + Co-Authorship in Indexed Journal',
    githubRepo: 'https://github.com/ladder-health/hf-biomarker-registry',
    milestones: [
      { title: 'ICH-GCP Compliant eCRF Protocol Drafted', completed: true },
      { title: 'Institutional Ethics Committee (IEC) Dossier Approved', completed: true },
      { title: 'Cohort Pilot Data Extraction (N=50)', completed: false },
      { title: 'Multivariate Logistic Regression Analysis in R', completed: false }
    ]
  },
  {
    id: 'proj-2',
    title: 'Urban Ward Vector-Borne Dengue Early Warning & Spatial Risk Mapping',
    type: 'Academic',
    industry: 'Public Health & Epidemiology',
    company: 'ICMR / WHO Collaborating Lab',
    description: 'Epidemiological surveillance study correlating monsoon rainfall patterns, larval density indices, and emergency department triage surges across 12 municipal health zones.',
    requiredSkills: ['Biostatistics', 'Clinical Diagnostics', 'Public Health'],
    duration: '6 Weeks',
    teamSize: '3 Students',
    deadline: '2026-10-25',
    status: 'In Progress',
    bountyOrReward: 'National ICMR Short-Term Studentship (STS) Award Nomination',
    githubRepo: 'https://github.com/ladder-health/dengue-surveillance-model',
    milestones: [
      { title: 'Historical Surveillance Dataset Cleaning (2020-2025)', completed: true },
      { title: 'Spatial Mapping of High-Burden Vector Clusters', completed: true },
      { title: 'Predictive Model Sensitivity Validation vs Real Cases', completed: false }
    ]
  },
  {
    id: 'proj-3',
    title: 'Hospital Antimicrobial Stewardship & ICU Prescribing Pattern Audit',
    type: 'Personal',
    industry: 'Hospital Quality & Patient Safety',
    company: 'Max Healthcare Academics',
    description: 'Comprehensive retrospective audit of reserve antibiotic utilization (Colistin, Meropenem) in medical and surgical intensive care units, identifying stewardship compliance gaps.',
    requiredSkills: ['Clinical Diagnostics', 'Patient History', 'Medical Ethics'],
    duration: '2 Weeks',
    teamSize: 'Solo',
    status: 'Completed',
    bountyOrReward: 'Verified LADDER Skill Passport Credential Minted',
    githubRepo: 'https://github.com/ladder-health/antimicrobial-stewardship-audit',
    liveDemoUrl: 'https://ladder.internal/research/stewardship-audit',
    milestones: [
      { title: 'Microbiology Culture Sensitivity Correlation Matrix', completed: true },
      { title: 'WHO AWaRe Classification Analysis', completed: true },
      { title: 'Stewardship Recommendation Report Delivered to Medical Director', completed: true }
    ]
  }
];

// ==========================================
// 7. HEALTHCARE CERTIFICATIONS & ACHIEVEMENTS
// ==========================================
export const INITIAL_CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-1',
    name: 'ICH-GCP E6(R2) Certified Clinical Investigator',
    issuingOrganization: 'Global Health Network & NIDA Clinical Trials Network',
    issueDate: 'August 2026',
    expiryDate: 'August 2029',
    credentialId: 'GCP-E6R2-98421-LADDER',
    credentialUrl: 'https://ladder.internal/credentials/gcp-e6r2-98421',
    skills: ['GCP Guidelines', 'Clinical Trials', 'Informed Consent', 'Ethics'],
    status: 'Active',
    verified: true
  },
  {
    id: 'cert-2',
    name: 'Advanced Cardiovascular Life Support (ACLS) Provider',
    issuingOrganization: 'American Heart Association / Apollo Emergency Centre',
    issueDate: 'July 2026',
    expiryDate: 'July 2028',
    credentialId: 'ACLS-AHA-2026-7812',
    credentialUrl: 'https://ladder.internal/credentials/acls-aha-7812',
    skills: ['Emergency Medicine', 'Resuscitation Protocols', 'Defibrillation'],
    status: 'Active',
    verified: true
  },
  {
    id: 'cert-3',
    name: 'Applied Healthcare Biostatistics & R Programming',
    issuingOrganization: 'IQVIA Clinical Academy & LADDER Hub',
    issueDate: 'June 2026',
    expiryDate: 'Does not expire',
    credentialId: 'BIOSTAT-IQV-2026-4412',
    credentialUrl: 'https://ladder.internal/credentials/biostat-iqv-4412',
    skills: ['Biostatistics', 'R Programming', 'Survival Curves'],
    status: 'Active',
    verified: true
  }
];

export const INITIAL_ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-1',
    title: 'ICMR Short-Term Studentship (STS) Research Fellowship',
    organization: 'Indian Council of Medical Research (ICMR)',
    date: 'July 2026',
    category: 'Research Fellowship',
    awardRank: 'National STS Awardee (Top 5% Cohort)',
    description: 'Awarded national research grant for clinical study on acute coronary syndrome biomarkers and regional diagnostic timeliness.',
    status: 'Verified'
  },
  {
    id: 'ach-2',
    title: 'Gold Medal — Departmental Clinical Pathology & Diagnostics',
    organization: 'King George’s Medical University / AIIMS Academic Board',
    date: 'August 2026',
    category: 'Academic Distinction',
    awardRank: 'Rank #1 in Clinical Diagnostics Cohort',
    description: 'Recognized for highest diagnostic accuracy and clinical reasoning in annual objective structured clinical examinations (OSCE).',
    status: 'Verified'
  }
];

// ==========================================
// 8. HEALTHCARE MENTOR SESSIONS HISTORY
// ==========================================
export const INITIAL_MENTOR_SESSIONS: MentorSession[] = [
  {
    id: 'sess-1',
    mentorId: 1,
    mentorName: 'Dr. Priya Nair, MD',
    mentorCompany: 'Apollo Hospitals & Research Foundation',
    mentorRole: 'Lead Clinical Research Scientist',
    topic: 'Designing GCP-Compliant Clinical Trial Protocols & Ethics Defense',
    date: '2026-08-25',
    timeSlot: '4:00 PM – 4:15 PM',
    status: 'Completed',
    feedback: 'Outstanding grasp of protocol architecture and adverse event reporting. Recommended focusing on survival analysis in R to stand out in global pharmaceutical trial teams.',
    rating: 5
  },
  {
    id: 'sess-2',
    mentorId: 2,
    mentorName: 'Dr. Rajesh K. Sengupta, MD, DNB',
    mentorCompany: 'AIIMS / Max Healthcare Institute',
    mentorRole: 'Senior Consultant & Clinical Professor',
    topic: 'Differential Diagnostics in Complex Multi-Organ Pathology',
    date: '2026-08-28',
    timeSlot: '11:30 AM – 11:45 AM',
    status: 'Completed',
    feedback: 'Adarsh demonstrated remarkable clinical acumen during our case discussion. Advised him to complete the hospital quality audit project to bolster his fellowship profile.',
    rating: 5
  },
  {
    id: 'sess-3',
    mentorId: 3,
    mentorName: 'Dr. Ananya Iyer, PhD',
    mentorCompany: 'IQVIA Global Clinical Solutions',
    mentorRole: 'Director of Biostatistics & Health Informatics',
    topic: 'Kaplan-Meier Survival Curves & Propensity Score Matching in Clinical Trials',
    date: '2026-09-04',
    timeSlot: '5:00 PM – 5:15 PM',
    status: 'Confirmed',
    meetLink: 'https://meet.ladder.health/capsule-sess-3'
  }
];

// ==========================================
// 9. HEALTHCARE COMPETENCY ASSESSMENTS
// ==========================================
export const ASSESSMENT_CATEGORIES: AssessmentCategory[] = [
  {
    id: 'cat-diagnostics',
    title: 'Clinical Diagnostics & Differential Reasoning',
    type: 'technical',
    subCategory: 'Clinical Practice',
    description: 'Test your clinical acumen across symptom presentations, pathophysiology, lab interpretation, and differential diagnostic formulation.',
    iconName: 'Stethoscope',
    questionCount: 5,
    durationMinutes: 10,
    difficulty: 'Intermediate',
    passingScore: 70,
    questions: [
      {
        id: 'diag-q1',
        category: 'Clinical Practice',
        question: 'A 58-year-old male with a history of poorly controlled hypertension presents to the acute care bay with sudden-onset tearing retrosternal chest pain radiating to the interscapular region. Physical exam reveals blood pressure of 184/102 mmHg in the right arm and 142/84 mmHg in the left arm, alongside a new early diastolic murmur at the right sternal border. What is the most crucial next diagnostic investigation?',
        options: [
          'CT Aortography with IV contrast (or Transesophageal Echocardiography if hemodynamically unstable)',
          'Immediate Coronary Angiography via femoral approach',
          'High-sensitivity cardiac Troponin-T serial assay at 0, 1, and 3 hours',
          'Emergency Bronchoscopy to evaluate tracheobronchial tree'
        ],
        correctIndex: 0,
        explanation: 'The presentation is classic for Acute Aortic Dissection (Type A involving the ascending aorta given the new aortic regurgitation murmur and asymmetric upper extremity pulses). CT Aortography is the gold standard diagnostic modality in stable patients; bedside TEE is preferred in unstable patients. Thrombolysis or delay for cardiac enzymes is contraindicated.',
        difficulty: 'Intermediate'
      },
      {
        id: 'diag-q2',
        category: 'Clinical Practice',
        question: 'In a patient with suspected Acute Pulmonary Embolism, which of the following clinical findings exhibits the highest sensitivity on a standard 12-lead electrocardiogram?',
        options: [
          'Sinus Tachycardia',
          'Classic S1Q3T3 pattern (McGinn-White sign)',
          'Complete Right Bundle Branch Block',
          'Atrial Fibrillation with rapid ventricular response'
        ],
        correctIndex: 0,
        explanation: 'Sinus Tachycardia is the most frequent and sensitive ECG finding in acute pulmonary embolism (found in over 40% of cases). While the classic S1Q3T3 pattern is well known, it is specific rather than sensitive, appearing in only 10–15% of patients.',
        difficulty: 'Beginner'
      },
      {
        id: 'diag-q3',
        category: 'Clinical Practice',
        question: 'An arterial blood gas analysis shows: pH 7.28, PaCO2 28 mmHg, HCO3- 13 mEq/L, Na+ 140 mEq/L, and Cl- 100 mEq/L. Which of the following conditions is the most probable underlying etiology?',
        options: [
          'Diabetic Ketoacidosis or Lactic Acidosis (High Anion Gap Metabolic Acidosis)',
          'Severe Diarrhea (Normal Anion Gap Metabolic Acidosis)',
          'Acute Hypoventilation Secondary to Opioid Toxicity',
          'Prolonged Nasogastric Suctioning'
        ],
        correctIndex: 0,
        explanation: 'Anion Gap = Na+ - (Cl- + HCO3-) = 140 - (100 + 13) = 27 mEq/L (reference: 8–12 mEq/L). The patient has a high anion gap metabolic acidosis (HAGMA) with compensatory respiratory alkalosis (PaCO2 decreased). DKA, lactic acidosis, toxic ingestions (methanol, ethylene glycol), and uremia are premier etiologies.',
        difficulty: 'Advanced'
      },
      {
        id: 'diag-q4',
        category: 'Clinical Practice',
        question: 'Which of the following physical signs indicates peritonitis in an acute surgical abdomen?',
        options: [
          'Involuntary Abdominal Guarding and Rebound Tenderness',
          'Hyperactive bowel sounds in the right upper quadrant',
          'Positive Trousseau sign after sphygmomanometer inflation',
          'Presence of a soft reducible umbilical protrusion without pain'
        ],
        correctIndex: 0,
        explanation: 'Involuntary guarding (rigidity) and rebound tenderness (Blumberg sign) indicate parietal peritoneal inflammation and typically signify a surgical acute abdomen requiring urgent evaluation.',
        difficulty: 'Beginner'
      },
      {
        id: 'diag-q5',
        category: 'Clinical Practice',
        question: 'A 24-year-old female presents with sudden unilateral throbbing headache, photophobia, nausea, and visual aura with scintillating scotomas lasting 25 minutes prior to headache onset. Which primary headache disorder is this?',
        options: [
          'Migraine with Typical Aura',
          'Episodic Tension-Type Headache',
          'Cluster Headache',
          'Temporal Arteritis'
        ],
        correctIndex: 0,
        explanation: 'The reversible visual aura lasting 5–60 minutes followed by unilateral pulsating headache with photophobia and nausea meets the ICHD-3 diagnostic criteria for Migraine with Typical Aura.',
        difficulty: 'Beginner'
      }
    ]
  },
  {
    id: 'cat-gcp-research',
    title: 'Good Clinical Practice (GCP) & Research Ethics',
    type: 'technical',
    subCategory: 'Research Methodology',
    description: 'Assess knowledge of ICH-GCP E6(R2), ethical guidelines, informed consent protocols, adverse event reporting, and trial monitoring.',
    iconName: 'ShieldCheck',
    questionCount: 5,
    durationMinutes: 10,
    difficulty: 'Intermediate',
    passingScore: 75,
    questions: [
      {
        id: 'gcp-q1',
        category: 'Research Methodology',
        question: 'Under ICH-GCP E6(R2) guidelines, who bears the primary responsibility for the ongoing safety of subjects participating in a clinical trial at an investigative site?',
        options: [
          'The Principal Investigator (PI)',
          'The Clinical Research Associate (Monitor)',
          'The Sponsor Company Board',
          'The Hospital Chief Executive Officer'
        ],
        correctIndex: 0,
        explanation: 'ICH-GCP section 4.3 specifically stipulates that a qualified physician who is an investigator or sub-investigator for the trial shall be responsible for all trial-related medical decisions and subject safety.',
        difficulty: 'Beginner'
      },
      {
        id: 'gcp-q2',
        category: 'Research Methodology',
        question: 'What constitutes a "Serious Adverse Event" (SAE) according to international regulatory definitions?',
        options: [
          'Any untoward medical occurrence that results in death, is life-threatening, requires inpatient hospitalization, results in persistent disability, or causes a congenital anomaly',
          'Any mild headache reported within 2 hours of study medication administration',
          'Any protocol deviation involving a missed follow-up telephone call',
          'Any laboratory value slightly outside the reference range that resolves spontaneously'
        ],
        correctIndex: 0,
        explanation: 'An SAE is defined as any event that results in death, is life-threatening, requires or prolongs hospitalization, causes significant disability/incapacity, or is a congenital anomaly/birth defect.',
        difficulty: 'Intermediate'
      },
      {
        id: 'gcp-q3',
        category: 'Research Methodology',
        question: 'Within what timeframe must an Investigator report an unanticipated Serious Adverse Event (SAE) to the Sponsor under GCP guidelines?',
        options: [
          'Immediately (within 24 hours of becoming aware of the event)',
          'Within 14 calendar days during routine monthly reporting',
          'Only at the completion of the entire clinical trial phase',
          'Within 30 business days along with the statistical batch report'
        ],
        correctIndex: 0,
        explanation: 'GCP guidelines mandate that all SAEs must be reported immediately (within 24 hours) by the investigator to the sponsor, followed promptly by detailed, written reports.',
        difficulty: 'Intermediate'
      },
      {
        id: 'gcp-q4',
        category: 'Research Methodology',
        question: 'What is the primary function of an Institutional Ethics Committee (IEC) / Institutional Review Board (IRB)?',
        options: [
          'To safeguard the rights, safety, and well-being of all trial subjects, with special attention to vulnerable populations',
          'To guarantee financial profitability for the sponsoring pharmaceutical company',
          'To ensure that clinical trials achieve statistically significant positive outcomes',
          'To conduct clinical audits exclusively on hospital billing systems'
        ],
        correctIndex: 0,
        explanation: 'The IRB/IEC has the primary responsibility to safeguard the rights, safety, and well-being of human research subjects by reviewing and approving study protocols and informed consent forms.',
        difficulty: 'Beginner'
      },
      {
        id: 'gcp-q5',
        category: 'Research Methodology',
        question: 'When an amendment is made to an ongoing trial protocol that affects subject safety or trial procedures, what action is required?',
        options: [
          'The amendment must receive prior written approval from the IRB/IEC before implementation, and subjects must re-consent if relevant',
          'The investigator can implement it immediately without informing the ethics committee',
          'The trial must be permanently terminated and restarted with new subjects',
          'Approval is only needed if more than 50% of the subjects object'
        ],
        correctIndex: 0,
        explanation: 'Protocol amendments modifying subject safety, rights, or trial scope require formal IRB/IEC review and approval prior to implementation, except when necessary to eliminate immediate hazards.',
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    id: 'cat-biostats',
    title: 'Medical Biostatistics & Epidemiological Methods',
    type: 'technical',
    subCategory: 'Health Data & Informatics',
    description: 'Assess understanding of statistical power, p-values, confidence intervals, survival curves, odds ratios, and diagnostic test metrics.',
    iconName: 'BarChart2',
    questionCount: 4,
    durationMinutes: 8,
    difficulty: 'Advanced',
    passingScore: 70,
    questions: [
      {
        id: 'bio-q1',
        category: 'Health Data & Informatics',
        question: 'A rapid antigen test for an infectious pathogen has a Sensitivity of 95% and a Specificity of 90%. If the disease prevalence in a community drops from 20% to 1%, what happens to the Positive Predictive Value (PPV) of the test?',
        options: [
          'The PPV decreases substantially (higher proportion of false positives among positive test results)',
          'The PPV increases proportionally because the disease is rarer',
          'The PPV remains strictly constant because Sensitivity and Specificity are fixed',
          'The PPV becomes 100%'
        ],
        correctIndex: 0,
        explanation: 'PPV is heavily dependent on disease prevalence. As prevalence drops, true positive cases become scarce, causing the false positives (from 1 - Specificity) to outweigh true positives, markedly decreasing the PPV.',
        difficulty: 'Advanced'
      },
      {
        id: 'bio-q2',
        category: 'Health Data & Informatics',
        question: 'In a randomized controlled cardiovascular trial, Drug X reduces 1-year mortality from 10% (control) to 6% (treatment). What is the Number Needed to Treat (NNT) to prevent one death?',
        options: ['25 patients', '10 patients', '40 patients', '16 patients'],
        correctIndex: 0,
        explanation: 'Absolute Risk Reduction (ARR) = 10% - 6% = 4% (0.04). Number Needed to Treat (NNT) = 1 / ARR = 1 / 0.04 = 25 patients.',
        difficulty: 'Intermediate'
      },
      {
        id: 'bio-q3',
        category: 'Health Data & Informatics',
        question: 'Which statistical test is most appropriate to compare the mean blood pressure before and after an anti-hypertensive intervention in the same cohort of 50 patients?',
        options: [
          'Paired Student t-test',
          'Unpaired Two-Sample t-test',
          'Chi-Square test of independence',
          'Fisher Exact test'
        ],
        correctIndex: 0,
        explanation: 'The Paired t-test is specifically designed to compare continuous variables between two matched or repeated measurements in the same group of subjects.',
        difficulty: 'Beginner'
      },
      {
        id: 'bio-q4',
        category: 'Health Data & Informatics',
        question: 'In a Kaplan-Meier survival analysis curve, what does a sudden vertical drop on the graph represent?',
        options: [
          'The occurrence of an event of interest (e.g., patient death or primary endpoint)',
          'A patient being censored due to loss to follow-up',
          'An increase in the total sample size',
          'A statistical calculation error'
        ],
        correctIndex: 0,
        explanation: 'On a Kaplan-Meier curve, vertical drops signify that an event of interest has occurred at that specific timepoint. Tick marks on the horizontal step lines denote censored patients.',
        difficulty: 'Intermediate'
      }
    ]
  },
  {
    id: 'cat-emergency',
    title: 'Emergency Medicine & Acute Resuscitation',
    type: 'technical',
    subCategory: 'Emergency Medicine',
    description: 'Assess rapid triaging, BLS/ACLS shock algorithms, acute anaphylaxis, status epilepticus, and respiratory failure protocols.',
    iconName: 'Activity',
    questionCount: 4,
    durationMinutes: 8,
    difficulty: 'Intermediate',
    passingScore: 75,
    questions: [
      {
        id: 'em-q1',
        category: 'Emergency Medicine',
        question: 'During resuscitation of an adult patient in cardiac arrest, the monitor reveals Ventricular Fibrillation (VF). What is the immediate highest-priority intervention?',
        options: [
          'Immediate unsynchronized defibrillation shock (e.g., 200J biphasic), followed immediately by high-quality CPR',
          'Immediate intravenous administration of 1 mg Epinephrine before attempting defibrillation',
          'Endotracheal intubation with confirmation by colorimetric capnography',
          'Synchronized electrical cardioversion at 50J'
        ],
        correctIndex: 0,
        explanation: 'Ventricular Fibrillation is a shockable rhythm. The priority is rapid defibrillation followed immediately by 2 minutes of CPR before rhythm recheck. Delays for medications or advanced airways reduce survival.',
        difficulty: 'Intermediate'
      },
      {
        id: 'em-q2',
        category: 'Emergency Medicine',
        question: 'What is the first-line medication and route of administration for an acute severe anaphylactic reaction in an adult?',
        options: [
          'Intramuscular Epinephrine (1:1000) 0.3 to 0.5 mg into the anterolateral mid-thigh',
          'Intravenous Diphenhydramine 50 mg over 10 minutes',
          'Oral Prednisolone 40 mg with water',
          'Subcutaneous Epinephrine into the deltoid region'
        ],
        correctIndex: 0,
        explanation: 'Intramuscular epinephrine into the anterolateral mid-thigh is the immediate first-line lifesaving drug in anaphylaxis. Antihistamines and steroids are secondary adjuvant therapies and must never delay epinephrine.',
        difficulty: 'Beginner'
      },
      {
        id: 'em-q3',
        category: 'Emergency Medicine',
        question: 'In a patient with septic shock who remains hypotensive (mean arterial pressure < 65 mmHg) despite adequate isotonic crystalloid fluid resuscitation (30 mL/kg), what is the first-choice vasopressor?',
        options: ['Norepinephrine', 'Dopamine', 'Phenylephrine', 'Vasopressin monotherapy'],
        correctIndex: 0,
        explanation: 'Surviving Sepsis Campaign guidelines recommend Norepinephrine as the first-choice vasopressor targeting a mean arterial pressure (MAP) of >= 65 mmHg.',
        difficulty: 'Intermediate'
      },
      {
        id: 'em-q4',
        category: 'Emergency Medicine',
        question: 'In suspected acute opioid overdose presenting with respiratory depression, pinpoint pupils, and coma, what is the specific reversal antidote?',
        options: ['Naloxone', 'Flumazenil', 'N-Acetylcysteine', 'Pralidoxime'],
        correctIndex: 0,
        explanation: 'Naloxone is a pure competitive opioid receptor antagonist that rapidly reverses life-threatening respiratory depression caused by opioids.',
        difficulty: 'Beginner'
      }
    ]
  },
  {
    id: 'cat-quality',
    title: 'Healthcare Systems, Patient Safety & Quality (NABH/JCI)',
    type: 'technical',
    subCategory: 'Hospital Governance',
    description: 'Assess understanding of clinical audit, infection control, medication safety, surgical safety checklists, and hospital quality standards.',
    iconName: 'Building',
    questionCount: 4,
    durationMinutes: 8,
    difficulty: 'Intermediate',
    passingScore: 75,
    questions: [
      {
        id: 'qual-q1',
        category: 'Hospital Governance',
        question: 'What are the three distinct phases of the WHO Surgical Safety Checklist?',
        options: [
          'Sign In (before induction), Time Out (before skin incision), and Sign Out (before patient leaves the operating room)',
          'Pre-Admission, Post-Op Recovery, and Discharge Consultation',
          'Anesthesia Check, Nurse Handover, and Billing Clearance',
          'Consent Verification, Specimen Labeling, and Recovery Room Transfer'
        ],
        correctIndex: 0,
        explanation: 'The WHO Surgical Safety Checklist standardizes three critical moments: Sign In (prior to anesthesia induction), Time Out (prior to skin incision), and Sign Out (prior to patient leaving OR).',
        difficulty: 'Beginner'
      },
      {
        id: 'qual-q2',
        category: 'Hospital Governance',
        question: 'In hospital patient safety terminology, what is a "Sentinel Event"?',
        options: [
          'An unexpected occurrence involving death or serious physical or psychological injury, or the risk thereof',
          'A minor documentation error on a routine nursing chart',
          'A patient requesting a second medical opinion',
          'A scheduled maintenance downtime for the hospital generator'
        ],
        correctIndex: 0,
        explanation: 'A sentinel event is an unanticipated event resulting in death or serious physical or psychological harm (such as wrong-site surgery or fatal medication error), requiring immediate root cause analysis (RCA).',
        difficulty: 'Beginner'
      },
      {
        id: 'qual-q3',
        category: 'Hospital Governance',
        question: 'Which of the following is the single most effective hospital practice to reduce healthcare-associated infections (HAIs)?',
        options: [
          'Strict adherence to Hand Hygiene protocols using alcohol-based rub or soap and water at WHO 5 moments',
          'Prophylactic broad-spectrum antibiotic administration to all admitted patients',
          'Routine daily fumigation of all inpatient general wards',
          'Restricting patient visitation to 15 minutes per week'
        ],
        correctIndex: 0,
        explanation: 'Hand hygiene is globally established as the single most effective, evidence-based measure to prevent cross-contamination and healthcare-associated infections.',
        difficulty: 'Beginner'
      },
      {
        id: 'qual-q4',
        category: 'Hospital Governance',
        question: 'What is the primary objective of a Clinical Audit cycle?',
        options: [
          'To systematically review clinical care against explicit criteria and implement changes to improve quality of patient care',
          'To identify individual doctors for disciplinary financial penalties',
          'To maximize hospital pharmacy profit margins',
          'To generate marketing brochures for prospective international patients'
        ],
        correctIndex: 0,
        explanation: 'Clinical audit is a continuous quality improvement process that seeks to improve patient care and outcomes through systematic review against recognized standards and the implementation of change.',
        difficulty: 'Intermediate'
      }
    ]
  }
];

// ==========================================
// 10. ASSESSMENT RESULTS HISTORY
// ==========================================
export const INITIAL_ASSESSMENT_RESULTS: AssessmentResult[] = [
  {
    id: 'res-1',
    assessmentId: 'cat-diagnostics',
    assessmentTitle: 'Clinical Diagnostics & Differential Reasoning',
    category: 'Technical',
    date: '2026-08-15',
    score: 88,
    totalQuestions: 5,
    correctAnswers: 4,
    incorrectAnswers: 1,
    timeSpentSeconds: 340,
    passed: true,
    answers: []
  },
  {
    id: 'res-2',
    assessmentId: 'cat-gcp-research',
    assessmentTitle: 'Good Clinical Practice (GCP) & Research Ethics',
    category: 'Technical',
    date: '2026-08-18',
    score: 86,
    totalQuestions: 5,
    correctAnswers: 4,
    incorrectAnswers: 1,
    timeSpentSeconds: 310,
    passed: true,
    answers: []
  },
  {
    id: 'res-3',
    assessmentId: 'cat-emergency',
    assessmentTitle: 'Emergency Medicine & Acute Resuscitation',
    category: 'Technical',
    date: '2026-08-12',
    score: 82,
    totalQuestions: 4,
    correctAnswers: 3,
    incorrectAnswers: 1,
    timeSpentSeconds: 280,
    passed: true,
    answers: []
  }
];
