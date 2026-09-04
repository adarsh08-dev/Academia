import { CareerLadderStep, MedicalCareerPathway, ClinicalCaseStudy } from '../types';

// ==========================================
// 1. THE 7-STEP LADDER FRAMEWORK
// Learning → Skills → Mentorship → Research → Internship → Industry Exposure → Career Opportunities
// ==========================================
export const CAREER_LADDER_STEPS: CareerLadderStep[] = [
  {
    id: 'ladder-step-1',
    stepNumber: 1,
    stageName: 'Learning',
    title: 'Core Medical & Clinical Foundations',
    description: 'Master didactic pre-clinical and paraclinical syllabi, clinical pharmacology, pathology, and evidence-based medicine modules.',
    status: 'completed',
    progressPercent: 100,
    targetTab: 'learning-hub',
    metricLabel: 'Curriculum Modules',
    metricValue: '18 / 18 Completed',
    recommendedAction: 'Review Advanced Pharmacotherapy & Bioethics'
  },
  {
    id: 'ladder-step-2',
    stepNumber: 2,
    stageName: 'Skills',
    title: 'Objective Clinical Competency & Diagnostics',
    description: 'Verify hands-on diagnostic reasoning, emergency triaging (BLS/ACLS), bedside history taking, and standardized clinical skills.',
    status: 'completed',
    progressPercent: 92,
    targetTab: 'skill-intelligence',
    metricLabel: 'Clinical Acumen',
    metricValue: '88% (Level 4/5)',
    recommendedAction: 'Complete Biostatistics & R Assessment'
  },
  {
    id: 'ladder-step-3',
    stepNumber: 3,
    stageName: 'Mentorship',
    title: 'Senior Clinician & Researcher Matching',
    description: '1-on-1 micro-mentorship capsules with AIIMS professors, hospital directors, and international clinical trialists.',
    status: 'in_progress',
    progressPercent: 75,
    targetTab: 'smart-mentor-match',
    metricLabel: 'Mentor Sessions',
    metricValue: '2 Completed, 1 Booked',
    recommendedAction: 'Book upcoming Protocol Defense session with Dr. Ananya Iyer'
  },
  {
    id: 'ladder-step-4',
    stepNumber: 4,
    stageName: 'Research',
    title: 'ICMR Grants, GCP Trials & Scientific Papers',
    description: 'Lead or collaborate on IRB-approved observational registries, clinical trials, and epidemiological study publications.',
    status: 'in_progress',
    progressPercent: 65,
    targetTab: 'research-hub',
    metricLabel: 'Research Projects',
    metricValue: '2 Active, 1 Published',
    recommendedAction: 'Submit Heart Failure Cohort interim data table'
  },
  {
    id: 'ladder-step-5',
    stepNumber: 5,
    stageName: 'Internship',
    title: 'Hospital Ward Rotations & Micro-Internships',
    description: 'Accredited clinical observerships, rotatory inpatient postings, and hospital quality audits across premier teaching hospitals.',
    status: 'in_progress',
    progressPercent: 50,
    targetTab: 'internship-portal',
    metricLabel: 'Clinical Rotation',
    metricValue: 'Shortlisted (Apollo Research)',
    recommendedAction: 'Prepare for Round 1 Protocol Defense on Sep 05'
  },
  {
    id: 'ladder-step-6',
    stepNumber: 6,
    stageName: 'Industry Exposure',
    title: 'MedTech, BioPharma & Digital Health Ecosystem',
    description: 'Engage with health tech innovators, pharmaceutical sponsor audits, HL7/FHIR interoperability projects, and clinical trials ops.',
    status: 'upcoming',
    progressPercent: 30,
    targetTab: 'industry-exposure',
    metricLabel: 'Industry Connects',
    metricValue: '3 Partner Organizations',
    recommendedAction: 'Explore IQVIA Clinical Data Specialist track'
  },
  {
    id: 'ladder-step-7',
    stepNumber: 7,
    stageName: 'Career Opportunities',
    title: 'Residency Match & Hospital Appointments',
    description: 'Transition into competitive postgraduate residency programs, clinical research fellowships, and institutional positions.',
    status: 'upcoming',
    progressPercent: 20,
    targetTab: 'jobs-placements',
    metricLabel: 'Career Readiness',
    metricValue: '84% (Tier-1 Target: 85%)',
    recommendedAction: 'Close remaining 1% gap in Health Informatics to unlock priority status'
  }
];

// ==========================================
// 2. MEDICAL CAREER PATHWAYS
// ==========================================
export const MEDICAL_CAREER_PATHWAYS: MedicalCareerPathway[] = [
  {
    id: 'pathway-internal-medicine',
    title: 'Internal Medicine & Clinical Research Fellow',
    specialty: 'Internal Medicine & Translational Therapeutics',
    targetDegree: 'MBBS → MD / DNB (General Medicine) → Research Fellowship',
    overview: 'Combines multi-system patient care with rigorous clinical trial investigation, translational medicine research, and hospital ward leadership.',
    durationYears: '3 Years MD + 1-2 Years Fellowship',
    readinessBenchmark: 85,
    coreCompetencies: [
      'Comprehensive Bedside Diagnostics',
      'ICH-GCP E6(R2) Compliance',
      'Complex Multi-Morbidity Care',
      'Biostatistics & Protocol Writing',
      'Pharmacotherapy Optimization'
    ],
    keyMilestones: [
      { stage: 'Year 1', focus: 'General Inpatient Wards, Emergency Triage & ICU Rotations', duration: '12 Months' },
      { stage: 'Year 2', focus: 'Subspecialty Rotations (Cardio, Nephro, Pulmo) & Dissertation Formulation', duration: '12 Months' },
      { stage: 'Year 3', focus: 'Senior Ward Management, Board Exams & Thesis Defense', duration: '12 Months' },
      { stage: 'Post-Grad', focus: 'Clinical Research Fellowship & Multicenter Trial PI Track', duration: '12-24 Months' }
    ],
    recommendedResearch: [
      'ICMR Post-Graduate Thesis Grants',
      'Biomarker Validation in Acute Systemic Illness',
      'Observational Cohort Registries in Diabetic Nephropathy'
    ],
    hospitalPlacementRoles: [
      'Senior Resident (Internal Medicine)',
      'Clinical Research Fellow',
      'Associate Medical Director (Clinical Studies)',
      'Consultant Physician'
    ],
    industryDemand: 'Critical',
    averageRemuneration: '₹14.0 – ₹24.0 LPA'
  },
  {
    id: 'pathway-cardiology',
    title: 'Cardiovascular Medicine & Interventional Track',
    specialty: 'Cardiology & Hemodynamics',
    targetDegree: 'MD (Gen Med) / DNB → DM / DrNB Cardiology',
    overview: 'Specialized path focused on coronary artery disease, heart failure therapeutics, cardiac imaging, and catheterization lab interventions.',
    durationYears: '3 Years MD + 3 Years DM Super-Specialty',
    readinessBenchmark: 88,
    coreCompetencies: [
      '12-Lead ECG & Arrhythmia Analysis',
      'Transthoracic & Transesophageal Echocardiography',
      'Coronary Angiography Interpretation',
      'Advanced Hemodynamic Resuscitation',
      'Cardiovascular Clinical Trial Management'
    ],
    keyMilestones: [
      { stage: 'Core MD', focus: 'Master general internal medicine foundations and critical care', duration: '36 Months' },
      { stage: 'DM Year 1', focus: 'Non-invasive cardiology, echo labs, Holter, TMT and CCU management', duration: '12 Months' },
      { stage: 'DM Year 2', focus: 'Invasive cath lab immersion, diagnostic coronary angiographies', duration: '12 Months' },
      { stage: 'DM Year 3', focus: 'Complex coronary interventions, structural heart disease and research', duration: '12 Months' }
    ],
    recommendedResearch: [
      'Post-Myocardial Infarction Remodeling Biomarkers',
      'Drug-Eluting Stents Long-Term Patency Registries',
      'Cardiometabolic Risk Factors in South Asian Cohorts'
    ],
    hospitalPlacementRoles: [
      'Interventional Cardiologist',
      'CCU In-Charge Consultant',
      'Principal Investigator (Cardiovascular Trials)'
    ],
    industryDemand: 'Critical',
    averageRemuneration: '₹22.0 – ₹45.0 LPA'
  },
  {
    id: 'pathway-pharmacovigilance',
    title: 'Clinical Pharmacology & Pharmacovigilance Specialist',
    specialty: 'Pharmacovigilance & Drug Safety',
    targetDegree: 'MBBS / MD Pharmacology / PharmD',
    overview: 'Oversees safety surveillance, adverse event signal detection, regulatory risk evaluation, and clinical trial drug safety boards across global biopharma.',
    durationYears: '2-3 Years Specialized Postgrad / Diploma',
    readinessBenchmark: 80,
    coreCompetencies: [
      'MedDRA & WHODrug Medical Coding',
      'Causality Assessment (WHO-UMC / Naranjo)',
      'Periodic Safety Update Reports (PSUR)',
      'Signal Detection & Disproportionality Analysis',
      'Regulatory Compliance (US FDA, EMA, CDSCO)'
    ],
    keyMilestones: [
      { stage: 'Foundation', focus: 'Pharmacokinetics, toxicology, and drug adverse reaction mechanisms', duration: '12 Months' },
      { stage: 'Safety Operations', focus: 'Individual Case Safety Report (ICSR) intake and medical evaluation', duration: '12 Months' },
      { stage: 'Signal Management', focus: 'Disproportionality analysis, benefit-risk assessments & audits', duration: '12 Months' }
    ],
    recommendedResearch: [
      'Real-World Adverse Event Disproportionality Studies',
      'Drug-Induced Liver Injury (DILI) Registry Audits',
      'Antibiotic Resistance Pattern Surveillance'
    ],
    hospitalPlacementRoles: [
      'Drug Safety Physician',
      'Senior Clinical Pharmacovigilance Lead',
      'Medical Reviewer (Global Safety)',
      'Regulatory Affairs Clinical Advisor'
    ],
    industryDemand: 'High',
    averageRemuneration: '₹12.0 – ₹20.0 LPA'
  },
  {
    id: 'pathway-quality-governance',
    title: 'Hospital Quality, Clinical Governance & Patient Safety',
    specialty: 'Healthcare Quality & Operations',
    targetDegree: 'MBBS / Healthcare Admin / MHA',
    overview: 'Drives clinical audit frameworks, hospital accreditation (NABH/JCI), surgical safety checklists, infection control, and sentinel event root cause analysis.',
    durationYears: '1-2 Years Postgraduate Immersion',
    readinessBenchmark: 78,
    coreCompetencies: [
      'NABH / JCI Accreditation Standards',
      'Clinical Audit Design & Plan-Do-Study-Act (PDSA)',
      'Root Cause Analysis (RCA) & FMEA',
      'Infection Prevention & Antimicrobial Stewardship',
      'Healthcare Risk Mitigation & Legal Compliance'
    ],
    keyMilestones: [
      { stage: 'Standardization', focus: 'Mastering quality indicators, nursing handoffs, and safety checklists', duration: '6 Months' },
      { stage: 'Audit Implementation', focus: 'Leading cross-departmental morbidity and mortality review audits', duration: '12 Months' },
      { stage: 'Executive Leadership', focus: 'Overseeing hospital-wide accreditation and clinical safety governance', duration: '12 Months' }
    ],
    recommendedResearch: [
      'Impact of Standardized Surgical Checklists on 30-Day Complication Rates',
      'Reducing Catheter-Associated Bloodstream Infections (CLABSI)',
      'Electronic Prescription Alert Tuning and Medication Error Reduction'
    ],
    hospitalPlacementRoles: [
      'Head of Quality Assurance & Patient Safety',
      'Clinical Governance Officer',
      'Deputy Medical Superintendent',
      'Hospital Accreditation Consultant'
    ],
    industryDemand: 'High',
    averageRemuneration: '₹10.0 – ₹18.0 LPA'
  },
  {
    id: 'pathway-public-health',
    title: 'Public Health, Epidemiology & Global Health Officer',
    specialty: 'Epidemiology & Community Health',
    targetDegree: 'MBBS → MD Community Medicine / MPH',
    overview: 'Leads epidemiological disease surveillance, epidemic outbreak control, maternal-child health programs, and national healthcare policy formulation.',
    durationYears: '2-3 Years Specialized Postgrad',
    readinessBenchmark: 82,
    coreCompetencies: [
      'Epidemiological Outbreak Investigation',
      'Biostatistics & Spatial GIS Disease Mapping',
      'Health Program Monitoring & Evaluation',
      'Vaccine Cold-Chain Management',
      'Policy Brief Formulation & Community Stakeholder Engagement'
    ],
    keyMilestones: [
      { stage: 'Field Epidemiology', focus: 'Primary healthcare centers, communicable disease outbreak responses', duration: '12 Months' },
      { stage: 'Surveillance & Stats', focus: 'Large-scale population health datasets, R/Stata analysis', duration: '12 Months' },
      { stage: 'Policy Leadership', focus: 'Interfacing with state health departments, WHO, and ICMR agencies', duration: '12 Months' }
    ],
    recommendedResearch: [
      'District-Level Dengue Surveillance and Climatic Correlation',
      'Maternal Anemia Intervention Adherence Trials',
      'Non-Communicable Disease Burden in Rural Primary Centers'
    ],
    hospitalPlacementRoles: [
      'District Epidemiologist',
      'Public Health Program Director',
      'WHO / UN Technical Officer',
      'Community Medicine Faculty'
    ],
    industryDemand: 'High',
    averageRemuneration: '₹10.0 – ₹16.0 LPA'
  },
  {
    id: 'pathway-digital-health',
    title: 'Clinical Informatics & AI Health Systems Specialist',
    specialty: 'Digital Health & Health Informatics',
    targetDegree: 'MBBS / Health Science + Fellowship in Health Informatics',
    overview: 'Bridges bedside medicine with clinical software, implementing HL7 FHIR standards, evaluating clinical decision support algorithms, and deploying AI diagnostics safely.',
    durationYears: '1-2 Years Postgrad / Fellowship',
    readinessBenchmark: 84,
    coreCompetencies: [
      'HL7 FHIR & Electronic Health Record Interoperability',
      'Clinical Decision Support System (CDSS) Evaluation',
      'Medical AI Model Validation & Bias Testing',
      'Medical Ethics in Machine Learning',
      'Health Data Privacy (HIPAA / DISHA Compliance)'
    ],
    keyMilestones: [
      { stage: 'Foundations', focus: 'Health data standards (SNOMED-CT, LOINC, ICD-11)', duration: '6 Months' },
      { stage: 'Integration', focus: 'Building EHR data extraction pipelines and CDS alert rules', duration: '12 Months' },
      { stage: 'Clinical Validation', focus: 'Conducting prospective clinical trials of AI diagnostic tools', duration: '12 Months' }
    ],
    recommendedResearch: [
      'Prospective Accuracy of Chest X-Ray AI in Acute Pneumonia Triaging',
      'Minimizing Clinician Burnout from EHR Alert Fatigue',
      'Federated Learning in Multi-Hospital Oncology Registries'
    ],
    hospitalPlacementRoles: [
      'Chief Medical Information Officer (CMIO)',
      'Clinical AI Validation Scientist',
      'Digital Health Lead Architect',
      'Health Informatics Faculty'
    ],
    industryDemand: 'Critical',
    averageRemuneration: '₹15.0 – ₹28.0 LPA'
  }
];

// ==========================================
// 3. CLINICAL CASE STUDIES (DIAGNOSTIC SIMULATION)
// ==========================================
export const CLINICAL_CASE_STUDIES: ClinicalCaseStudy[] = [
  {
    id: 'case-1',
    title: 'Acute Retrosternal Chest Pain with Pulse Asymmetry',
    discipline: 'Cardiology & Emergency Medicine',
    difficulty: 'Intermediate',
    patientVignette: 'A 58-year-old male with a 15-year history of poorly managed essential hypertension presents to the emergency room with sudden-onset, excruciating retrosternal chest pain that he describes as a "tearing sensation" radiating between his shoulder blades. He feels lightheaded and diaphoretic.',
    demographics: { age: 58, gender: 'Male', presentation: 'Acute severe chest pain radiating to back' },
    vitalSigns: {
      hr: '106 bpm (tachycardia)',
      bp: 'Right arm: 188/104 mmHg | Left arm: 138/82 mmHg',
      rr: '22 breaths/min',
      temp: '36.8 °C (normothermic)',
      spo2: '97% on room air'
    },
    objective: 'Determine the most likely diagnosis and immediate gold-standard diagnostic modality.',
    diagnosticOptions: [
      'Acute Aortic Dissection (Type A) — Perform immediate contrast-enhanced CT Aortography',
      'Acute Antero-Lateral STEMI — Administer immediate weight-based Thrombolysis (Tenecteplase)',
      'Massive Acute Pulmonary Embolism — Perform immediate systemic anticoagulation with unfractionated heparin',
      'Acute Pericarditis — Initiate high-dose oral NSAIDs and Colchicine'
    ],
    correctIndex: 0,
    clinicalReasoning: 'The combination of severe tearing chest pain radiating to the interscapular region, significant blood pressure asymmetry (>20 mmHg difference between arms), and history of chronic hypertension is virtually pathognomonic for Acute Aortic Dissection. Contrast-enhanced CT Aortography (or TEE in an unstable patient) is the mandatory investigation. Administering thrombolysis or anticoagulants in aortic dissection is catastrophic and frequently fatal.',
    keyLearningPoints: [
      'Never administer thrombolysis in suspected MI without first excluding aortic dissection if clinical red flags (pulse deficit, tearing back pain) are present.',
      'Stanford Type A dissection involves the ascending aorta and requires emergency cardiothoracic surgical intervention.',
      'Target heart rate < 60 bpm and systolic BP 100-120 mmHg using intravenous beta-blockers (e.g. Esmolol, Labetalol) as initial medical stabilization.'
    ]
  },
  {
    id: 'case-2',
    title: 'Septic Shock with Hypoperfusion in Intensive Care',
    discipline: 'Critical Care & Internal Medicine',
    difficulty: 'Advanced',
    patientVignette: 'A 67-year-old female with type 2 diabetes mellitus is admitted from an inpatient ward to the ICU due to progressive altered mental status, high-grade fever, and marked oliguria (<15 mL/hour over the preceding 4 hours). She had been receiving oral antibiotics for a complicated urinary tract infection.',
    demographics: { age: 67, gender: 'Female', presentation: 'Fever, altered sensorium, oliguria, hypotension' },
    vitalSigns: {
      hr: '124 bpm',
      bp: '82/48 mmHg (Mean Arterial Pressure 59 mmHg)',
      rr: '28 breaths/min',
      temp: '39.2 °C',
      spo2: '92% on 4L nasal cannula'
    },
    objective: 'Select the optimal resuscitation sequence per Surviving Sepsis Campaign guidelines.',
    diagnosticOptions: [
      'Measure blood lactate, draw blood cultures, infuse 30 mL/kg isotonic crystalloids, and start IV Norepinephrine if MAP remains < 65 mmHg',
      'Immediately administer IV furosemide 80 mg bolus to force urine production in the setting of oliguria',
      'Initiate high-dose Dopamine infusion as first-line inotropic agent before fluid administration',
      'Perform urgent renal biopsy to investigate acute tubular necrosis'
    ],
    correctIndex: 0,
    clinicalReasoning: 'The patient meets diagnostic criteria for Septic Shock (hypotension refractory to fluid resuscitation requiring vasopressors to maintain MAP >= 65 mmHg, accompanied by hyperlactatemia). The Hour-1 Sepsis Bundle mandates: blood lactate measurement, blood cultures prior to broad-spectrum antimicrobials, rapid infusion of 30 mL/kg balanced crystalloids, and Norepinephrine as the first-line vasopressor targeting MAP >= 65 mmHg. Diuretics are contraindicated in hypovolemic septic shock.',
    keyLearningPoints: [
      'Norepinephrine is the first-line vasopressor of choice; dopamine is associated with higher tachyarrhythmia rates and mortality.',
      'Administer broad-spectrum antibiotics within 1 hour of recognition of septic shock.',
      'Lactate serves as a key surrogate marker of tissue hypoperfusion; clearance over time guides resuscitation adequacy.'
    ]
  },
  {
    id: 'case-3',
    title: 'Dyspnea, Hemoptysis and Pleuritic Pain in Post-Op Patient',
    discipline: 'Pulmonology & Emergency Medicine',
    difficulty: 'Intermediate',
    patientVignette: 'A 42-year-old woman who underwent an elective open right knee replacement 8 days ago presents to the acute clinic with sudden-onset pleuritic right-sided chest pain, tachypnea, and an episode of blood-tinged sputum (hemoptysis). She stopped taking prophylactic anticoagulant medication 3 days ago due to mild bruising.',
    demographics: { age: 42, gender: 'Female', presentation: 'Sudden pleuritic chest pain, hemoptysis, tachypnea' },
    vitalSigns: {
      hr: '118 bpm',
      bp: '122/76 mmHg',
      rr: '26 breaths/min',
      temp: '37.3 °C',
      spo2: '91% on room air'
    },
    objective: 'Select the primary diagnostic test of choice and initial clinical approach.',
    diagnosticOptions: [
      'CT Pulmonary Angiography (CTPA) to confirm Acute Pulmonary Embolism',
      'Immediate diagnostic Pleural Tap (Thoracentesis) for suspected bacterial empyema',
      'High-resolution CT (HRCT) of chest without contrast to evaluate interstitial fibrosis',
      'Sputum Gram stain and discharge home on oral Amoxicillin-Clavulanate'
    ],
    correctIndex: 0,
    clinicalReasoning: 'Recent orthopedic surgery, premature discontinuation of thromboprophylaxis, acute pleuritic chest pain, tachycardia, tachypnea, hypoxia, and hemoptysis calculate a high Wells Score for Pulmonary Embolism (> 4 points). CT Pulmonary Angiography (CTPA) is the definitive investigation of choice in hemodynamically stable patients. D-dimer is inappropriate because it would be non-specifically elevated post-operatively.',
    keyLearningPoints: [
      'In high-probability clinical scenarios, proceed directly to CTPA without delaying for D-dimer testing.',
      'Major orthopedic surgery of the lower extremity represents a profound acquired risk factor for venous thromboembolism.',
      'Anticoagulation with low molecular weight heparin (LMWH) or direct oral anticoagulants (DOAC) should be initiated promptly if no absolute contraindications exist.'
    ]
  }
];

// ==========================================
// 4. SIGNATURE NEXT-BEST-ACTION RECOMMENDER
// Deterministic clinical progression recommendation engine
// ==========================================
export interface NextBestAction {
  priority: string;
  category: string;
  estimatedXP: number;
  title: string;
  rationale: string;
  targetTab: string;
  actionLabel: string;
}

export function getNextBestAction(student: any): NextBestAction {
  return {
    priority: 'Next Critical Milestones',
    category: 'Step 3: Mentorship Capsule',
    estimatedXP: 120,
    title: 'Schedule Grand Rounds Protocol Defense with Prof. Dr. Vikramaditya Roy',
    rationale: 'Your clinical competency score in Diagnostic Reasoning is 88%. A 15-minute case discussion with a Senior AIIMS Consultant will unlock verified recommendation letters for Tier-1 Residency Matching.',
    targetTab: 'smart-mentor-match',
    actionLabel: 'Book Mentorship Capsule'
  };
}

