import React, { useState, useEffect, useMemo } from 'react';
import {
  Stethoscope,
  Brain,
  Activity,
  Users,
  Award,
  TrendingUp,
  Search,
  Filter,
  ArrowRight,
  CheckCircle2,
  Clock,
  MapPin,
  Calendar,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  Download,
  Share2,
  ExternalLink,
  BookOpen,
  FileCheck,
  Shield,
  Zap,
  Globe,
  Heart,
  Microscope,
  Briefcase,
  AlertCircle,
  HelpCircle,
  Check,
  Building,
  GraduationCap,
  Play,
  RotateCcw,
  Smartphone,
  Monitor,
  X
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  CartesianGrid
} from 'recharts';

// ==========================================
// MOCK DATA & CONFIGURATIONS
// ==========================================

export interface BranchNode {
  id: string;
  name: string;
  shortDesc: string;
  iconName: 'stethoscope' | 'activity' | 'microscope' | 'brain' | 'globe';
  color: string;
  subSpecialties: {
    title: string;
    duration: string;
    avgStipend: string;
    readinessMatch: number;
    description: string;
    coreSkills: string[];
  }[];
}

const MEDICAL_BRANCHES: BranchNode[] = [
  {
    id: 'clinical',
    name: 'Clinical Medicine',
    shortDesc: 'Bedside diagnosis, pharmacotherapy & long-term patient care',
    iconName: 'stethoscope',
    color: '#3B82F6', // blue
    subSpecialties: [
      {
        title: 'Pediatrics & Neonatology',
        duration: '3 Years (MD/DNB)',
        avgStipend: '₹85,000 – ₹1.1L / mo',
        readinessMatch: 88,
        description: 'Comprehensive physical, developmental, and emergency care for infants, children, and adolescents.',
        coreSkills: ['Neonatal Resuscitation', 'Pediatric Dosage Math', 'Growth Milestones', 'Parental Counseling']
      },
      {
        title: 'Internal Medicine & Critical Care',
        duration: '3 Years (MD)',
        avgStipend: '₹95,000 – ₹1.25L / mo',
        readinessMatch: 82,
        description: 'Prevention, complex differential diagnosis, and management of systemic diseases in hospital & ICU settings.',
        coreSkills: ['Differential Diagnosis', 'Sepsis Management', 'Hemodynamic Monitoring', 'Invasive Line Placement']
      },
      {
        title: 'Cardiology (DM/Fellowship)',
        duration: '3 Years Post-MD',
        avgStipend: '₹1.2L – ₹1.8L / mo',
        readinessMatch: 75,
        description: 'Investigation, non-invasive imaging, and catheter-based interventional therapies for cardiovascular disorders.',
        coreSkills: ['12-Lead ECG Mastery', 'Echocardiography', 'Cardiac Catheterization', 'Arrhythmia Management']
      }
    ]
  },
  {
    id: 'surgical',
    name: 'Surgical Specialties',
    shortDesc: 'Operative procedures, trauma reconstruction & perioperative care',
    iconName: 'activity',
    color: '#EC4899', // pink
    subSpecialties: [
      {
        title: 'General & Minimally Invasive Surgery',
        duration: '3 Years (MS/DNB)',
        avgStipend: '₹90,000 – ₹1.2L / mo',
        readinessMatch: 78,
        description: 'Abdominal, trauma, and laparoscopic surgical interventions with sterile technique and perioperative management.',
        coreSkills: ['Laparoscopic Handling', 'Surgical Knot Tying', 'Post-Op Wound Care', 'Trauma Resuscitation']
      },
      {
        title: 'Orthopedic & Trauma Surgery',
        duration: '3 Years (MS)',
        avgStipend: '₹1.0L – ₹1.35L / mo',
        readinessMatch: 72,
        description: 'Musculoskeletal reconstruction, fracture fixation, arthroscopy, and sports injury rehabilitation.',
        coreSkills: ['Fluoroscopy Reading', 'Cast & Splint Application', 'Arthroplasty Basics', 'Biomechanics']
      },
      {
        title: 'Neurosurgery & Spine (MCh)',
        duration: '3 Years Post-MS',
        avgStipend: '₹1.4L – ₹2.1L / mo',
        readinessMatch: 64,
        description: 'Micro-neurosurgical navigation for cerebral neoplasms, cranial hemorrhages, and complex spinal disorders.',
        coreSkills: ['Stereotactic Navigation', 'Microsurgical Dexterity', 'ICP Monitoring', 'Neuro-Anatomy Topography']
      }
    ]
  },
  {
    id: 'diagnostic',
    name: 'Diagnostic & Lab Medicine',
    shortDesc: 'Imaging physics, biopsy histopathology & laboratory biomarkers',
    iconName: 'microscope',
    color: '#8B5CF6', // purple
    subSpecialties: [
      {
        title: 'Radiodiagnosis & Interventional Radiology',
        duration: '3 Years (MD/DNB)',
        avgStipend: '₹1.1L – ₹1.5L / mo',
        readinessMatch: 85,
        description: 'Cross-sectional imaging interpretation (CT, MRI, POCUS ultrasound) and image-guided biopsy interventions.',
        coreSkills: ['Cross-Sectional CT/MRI', 'Bedside Ultrasound (POCUS)', 'PACS Workflow', 'Radiation Safety']
      },
      {
        title: 'Clinical Pathology & Histopathology',
        duration: '3 Years (MD)',
        avgStipend: '₹80,000 – ₹1.05L / mo',
        readinessMatch: 80,
        description: 'Tissue biopsy examination, immunohistochemistry, hematological smears, and cancer staging.',
        coreSkills: ['Microscopic Slide Reading', 'Immuno-Histo-Chemistry', 'Bone Marrow Biopsy', 'Automated Lab QC']
      }
    ]
  },
  {
    id: 'research',
    name: 'Research & Clinical Trials',
    shortDesc: 'Drug development, translational oncology & biostatistics',
    iconName: 'brain',
    color: '#06B6D4', // cyan
    subSpecialties: [
      {
        title: 'Clinical Pharmacology & Pharmacovigilance',
        duration: '3 Years (MD) / PhD',
        avgStipend: '₹85,000 – ₹1.2L / mo',
        readinessMatch: 84,
        description: 'Phase I-IV clinical trial execution, adverse drug reaction causality scoring, and pharmacokinetic modeling.',
        coreSkills: ['ICH-GCP Compliance', 'MedDRA Coding', 'Bioequivalence Studies', 'Safety Signal Detection']
      },
      {
        title: 'Translational Genomics & Precision Medicine',
        duration: 'Fellowship / PhD',
        avgStipend: '₹95,000 – ₹1.4L / mo',
        readinessMatch: 76,
        description: 'Applying next-generation sequencing (NGS) and molecular biomarkers to customize targeted cancer therapeutics.',
        coreSkills: ['Genomic Variant Calling', 'Bioinformatics in R/Python', 'Molecular Oncology', 'Targeted Drug Delivery']
      }
    ]
  },
  {
    id: 'publichealth',
    name: 'Public Health & Policy',
    shortDesc: 'Epidemiological surveillance, digital health & global initiatives',
    iconName: 'globe',
    color: '#10B981', // emerald
    subSpecialties: [
      {
        title: 'Epidemiology & Outbreak Investigation',
        duration: '2 Years (MPH / MD Community Med)',
        avgStipend: '₹80,000 – ₹1.15L / mo',
        readinessMatch: 90,
        description: 'Population-level disease surveillance, vaccine efficacy assessment, and pandemic response design.',
        coreSkills: ['Field Epidemiology', 'Statistical Modeling in R', 'GIS Mapping', 'Outbreak Contact Tracing']
      },
      {
        title: 'Digital Health & Health Informatics',
        duration: 'M.Sc / Fellowship',
        avgStipend: '₹90,000 – ₹1.35L / mo',
        readinessMatch: 86,
        description: 'Architecting interoperable EHR systems, ABDM standards (FHIR), and clinical AI decision-support algorithms.',
        coreSkills: ['HL7 FHIR Standards', 'Clinical Decision Support', 'EHR Security & HIPPA', 'ABDM Integration']
      }
    ]
  }
];

const SPOTLIGHT_ITEMS = [
  {
    id: 'spot-1',
    title: 'Telemedicine & Virtual Care',
    growthRate: '+38% CAGR',
    category: 'Digital Health',
    description: 'Transforming rural healthcare delivery with remote monitoring, ABDM integrated tele-consults, and wearable bio-sensors.',
    stats: '15,000+ Active Tele-Clinics',
    keyCompetency: 'Remote Triage & E-Prescribing Regulations',
    icon: '🌐'
  },
  {
    id: 'spot-2',
    title: 'AI in Clinical Diagnostics',
    growthRate: '+45% YoY',
    category: 'MedTech & AI',
    description: 'Deep learning neural models assisting radiologists in lung CT nodule detection, retinal fundus scans, and ECG arrhythmia flags.',
    stats: '89 FDA-Approved Algorithms',
    keyCompetency: 'Algorithmic Validation & Diagnostic Ethics',
    icon: '🤖'
  },
  {
    id: 'spot-3',
    title: 'Lifestyle & Metabolic Medicine',
    growthRate: '+29% YoY',
    category: 'Preventive Care',
    description: 'Evidence-based lifestyle interventions reversing Type-2 diabetes, cardiovascular atheroma, and non-alcoholic fatty liver diseases.',
    stats: '60M+ Candidate Patients in India',
    keyCompetency: 'Motivational Interviewing & Nutritional Genomics',
    icon: '🥗'
  },
  {
    id: 'spot-4',
    title: 'Robotic Surgery & Tele-Robotics',
    growthRate: '+34% YoY',
    category: 'Advanced Surgery',
    description: 'Robotic da Vinci surgical systems offering 3D-HD stereoscopic visualization and 7 degrees of freedom wristed instrumentation.',
    stats: 'Sub-millimeter Surgical Accuracy',
    keyCompetency: 'Endoscopic Console Ergonomics & Spatial Haptics',
    icon: '🦾'
  }
];

// Interactive Quiz Questions
const QUIZ_QUESTIONS = [
  {
    id: 1,
    category: 'Clinical Reasoning',
    question: 'A 54-year-old patient presents to the ER with sudden crushing substernal chest pain radiating to the left jaw. Blood pressure is 85/55 mmHg. What is your immediate priority step?',
    options: [
      { text: 'Order an emergency contrast-enhanced chest CT scan', score: { surgery: 0, clinical: 1, research: 0, publicHealth: 0 } },
      { text: 'Perform a stat 12-lead ECG and establish wide-bore IV access while monitoring vitals', score: { surgery: 0, clinical: 3, research: 0, publicHealth: 0 } },
      { text: 'Schedule a treadmill stress test for the following morning', score: { surgery: 0, clinical: 0, research: 0, publicHealth: 0 } },
      { text: 'Administer oral antacids and discharge with dietary instructions', score: { surgery: 0, clinical: 0, research: 0, publicHealth: 0 } }
    ]
  },
  {
    id: 2,
    category: 'Doctor-Patient Communication',
    question: 'You must communicate a confirmed malignant biopsy result to an anxious patient accompanied by their spouse. How do you initiate the consultation using the SPIKES protocol?',
    options: [
      { text: 'Hand them the pathology paper immediately and advise them to read the conclusion', score: { surgery: 0, clinical: 0, research: 0, publicHealth: 0 } },
      { text: 'Set a private environment, assess their current understanding of tests, and provide an empathetic warning shot', score: { surgery: 1, clinical: 3, research: 1, publicHealth: 2 } },
      { text: 'Delegate the conversation to the junior intern to save clinical rounds time', score: { surgery: 0, clinical: 0, research: 0, publicHealth: 0 } },
      { text: 'Assure them unconditionally that everything will be completely normal without explaining the report', score: { surgery: 0, clinical: 0, research: 0, publicHealth: 0 } }
    ]
  },
  {
    id: 3,
    category: 'Digital Health & Data Literacy',
    question: 'During a hospital quality audit, which clinical data standard is universally recommended for exchanging electronic health records and diagnostic observations?',
    options: [
      { text: 'HL7 FHIR (Fast Healthcare Interoperability Resources)', score: { surgery: 0, clinical: 1, research: 2, publicHealth: 3 } },
      { text: 'Unencrypted CSV files shared via standard email attachments', score: { surgery: 0, clinical: 0, research: 0, publicHealth: 0 } },
      { text: 'Scanned paper prescriptions stored as raster images on physical flash drives', score: { surgery: 0, clinical: 0, research: 0, publicHealth: 0 } },
      { text: 'Proprietary binary databases without standard export schemas', score: { surgery: 0, clinical: 0, research: 0, publicHealth: 0 } }
    ]
  },
  {
    id: 4,
    category: 'Public Health & Epidemiology',
    question: 'A sudden cluster of acute diarrheal illnesses with severe dehydration is reported across 3 peri-urban wards. What is your immediate epidemiological intervention?',
    options: [
      { text: 'Wait for 30 days to see if the incidence returns to baseline spontaneously', score: { surgery: 0, clinical: 0, research: 0, publicHealth: 0 } },
      { text: 'Institute rapid field water source testing, deploy ORS/zinc supply stations, and initiate an epidemic spot map', score: { surgery: 0, clinical: 2, research: 2, publicHealth: 3 } },
      { text: 'Advise residents to buy expensive commercial bottled water without testing community borewells', score: { surgery: 0, clinical: 0, research: 0, publicHealth: 1 } },
      { text: 'Conduct an in-vitro animal study on intestinal epithelial permeability', score: { surgery: 0, clinical: 0, research: 2, publicHealth: 0 } }
    ]
  }
];

const LEARNING_MODULES = [
  {
    id: 'mod-1',
    title: '3D Anatomy & AR Surgery Simulations',
    subtitle: 'Interactive virtual dissection, vascular branching & laparoscopic camera navigation',
    progress: 68,
    duration: '18 Hours',
    level: 'Intermediate',
    icon: '🫀',
    color: 'from-blue-500/20 to-indigo-500/10',
    borderColor: 'border-blue-500/30',
    tags: ['Cross-Sectional', 'Surgical Landmarks', 'POCUS']
  },
  {
    id: 'mod-2',
    title: 'Case-Based Diagnostic Challenges',
    subtitle: '20 high-fidelity emergency department vignettes with real lab & imaging findings',
    progress: 42,
    duration: '24 Hours',
    level: 'Advanced',
    icon: '🩺',
    color: 'from-purple-500/20 to-pink-500/10',
    borderColor: 'border-purple-500/30',
    tags: ['Differential Diagnosis', 'ABG Analysis', 'Chest X-Rays']
  },
  {
    id: 'mod-3',
    title: 'Clinical Empathy & Soft Skills Mastery',
    subtitle: 'Doctor-patient bedside communication, SPIKES bad news delivery, and trauma team dynamics',
    progress: 85,
    duration: '12 Hours',
    level: 'Foundational',
    icon: '🤝',
    color: 'from-emerald-500/20 to-teal-500/10',
    borderColor: 'border-emerald-500/30',
    tags: ['Informed Consent', 'Medical Ethics', 'ICU Handover']
  }
];

const CERTIFICATIONS_DATA = [
  {
    id: 'cert-1',
    title: 'Public Health Surveillance & Field Epidemiology',
    issuer: 'ICMR National Institute of Epidemiology',
    duration: '6 Weeks',
    status: 'Completed',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    skills: ['Outbreak Mapping', 'Statistical Modeling in R', 'Vaccine Cold-Chain']
  },
  {
    id: 'cert-2',
    title: 'Medical Ethics, Patient Autonomy & NMC Guidelines',
    issuer: 'National Medical Commission & AIIMS Bioethics Cell',
    duration: '4 Weeks',
    status: 'In Progress',
    badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    skills: ['Surrogate Consent', 'Living Wills', 'Clinical Trial IRB Review']
  },
  {
    id: 'cert-3',
    title: 'ICH-GCP Guidelines & Clinical Trial Site Management',
    issuer: 'LADDER Clinical Research Academy & CDSCO',
    duration: '8 Weeks',
    status: 'Completed',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    skills: ['Adverse Event Reporting', 'Source Data Verification', 'CRF Audits']
  },
  {
    id: 'cert-4',
    title: 'Digital Health & ABDM Health Records Interoperability',
    issuer: 'National Health Authority (NHA) & Ayushman Bharat',
    duration: '5 Weeks',
    status: 'Not Started',
    badgeColor: 'bg-slate-700/40 text-slate-300 border-slate-600/40',
    skills: ['HL7 FHIR Architecture', 'ABHA ID Protocol', 'Telemedicine Practice']
  }
];

const STUDENT_OPPORTUNITIES = [
  {
    id: 'opp-1',
    title: 'Emergency & Acute Trauma Clinical Observership',
    hospital: 'AIIMS Apex Trauma Centre, New Delhi',
    type: 'Hospital Internship',
    deadline: 'In 12 Days',
    location: 'New Delhi (On-Site)',
    stipend: '₹28,000 / month',
    seats: '4 Cohort Seats',
    tags: ['ACLS Certified', 'Emergency Triage', 'POCUS Bedside']
  },
  {
    id: 'opp-2',
    title: 'Multicentric Sepsis Biomarker Phase-III Trial Associate',
    hospital: 'Fortis Memorial Research Institute & ICMR',
    type: 'Pharma Research Project',
    deadline: 'In 18 Days',
    location: 'Gurugram / Hybrid',
    stipend: '₹32,000 / month',
    seats: '2 Research Seats',
    tags: ['ICH-GCP', 'CRF Management', 'Biostatistics']
  },
  {
    id: 'opp-3',
    title: 'Rural Health Tele-Consultation Clinical Fellow',
    hospital: 'Apollo TeleHealth & Himalayan Health Mission',
    type: 'Telemedicine Apprenticeship',
    deadline: 'In 24 Days',
    location: 'Bengaluru / Remote',
    stipend: '₹25,000 / month',
    seats: '6 Seats',
    tags: ['ABDM Standards', 'EHR Systems', 'Patient Counseling']
  }
];

const FACULTY_OPPORTUNITIES = [
  {
    id: 'fac-1',
    title: 'Faculty Development Program (FDP): Generative AI in Medical Pedagogy',
    institution: 'National Medical Commission Academic Cell',
    type: 'FDP Program',
    duration: '2 Weeks (Online Evening)',
    stipend: 'CME 15 Credits',
    tags: ['Curriculum Design', 'Simulated Patients', 'OSCE Evaluation']
  },
  {
    id: 'fac-2',
    title: 'Clinical Advisory Consultant: Point-of-Care Microfluidics Device',
    institution: 'MedTech Incubator (IIT Delhi Bio-Design)',
    type: 'Clinical Consultancy',
    duration: '6 Months Retainer',
    stipend: '₹75,000 / month retainer',
    tags: ['Bench-to-Bedside', 'Sensitivity Auditing', 'CDSCO Filing']
  },
  {
    id: 'fac-3',
    title: 'Collaborative Research: Antimicrobial Resistance Surveillance Registry',
    institution: 'WHO Regional AMR Network & ICMR',
    type: 'Collaborative Research',
    duration: '12 Months Grant',
    stipend: '₹14 Lakhs Research Grant',
    tags: ['Genotypic Resistance', 'Hospital Antibiograms', 'ICU Audits']
  }
];

const TRACKING_DATA = [
  {
    id: 'app-1',
    role: 'Emergency Trauma Clinical Intern',
    organization: 'AIIMS Apex Trauma Center',
    appliedDate: '2026-08-28',
    status: 'Selected',
    statusColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    mentorFeedback: 'Outstanding clinical reflexes in ACLS simulations. Clear bedside communication.',
    completionRecord: 'Logbook Verified (100%)'
  },
  {
    id: 'app-2',
    role: 'Clinical Research Fellow (Pharmacovigilance)',
    organization: 'Fortis Memorial Institute',
    appliedDate: '2026-08-15',
    status: 'Interview Scheduled',
    statusColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    mentorFeedback: 'GCP protocol knowledge confirmed. Technical interview scheduled for Sep 10.',
    completionRecord: 'Round 1 Cleared'
  },
  {
    id: 'app-3',
    role: 'Telemedicine Rural Fellow',
    organization: 'Apollo TeleHealth Network',
    appliedDate: '2026-08-05',
    status: 'Applied',
    statusColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    mentorFeedback: 'Application under faculty screening by the medical directorate.',
    completionRecord: 'Dossier Under Review'
  }
];

const MENTORS_DATA = [
  {
    id: 'm-1',
    name: 'Prof. Dr. Vikramaditya Roy',
    role: 'Chief of Interventional Cardiology',
    hospital: 'All India Institute of Medical Sciences (AIIMS)',
    experience: '22+ Years Clinical & Academic Experience',
    availability: 'Available for 15-min Grand Rounds',
    slots: ['Today 4:30 PM', 'Tomorrow 11:00 AM'],
    avatar: '👨‍⚕️'
  },
  {
    id: 'm-2',
    name: 'Dr. Priya Nair, MD, PhD',
    role: 'Senior Clinical Research Lead',
    hospital: 'ICMR Clinical Trials Directorate',
    experience: '16+ Years Phase III Drug Development',
    availability: 'Next Slot: Thursday',
    slots: ['Thu 3:00 PM', 'Fri 5:00 PM'],
    avatar: '👩‍⚕️'
  },
  {
    id: 'm-3',
    name: 'Dr. Sameer Deshmukh',
    role: 'Director of Emergency & Critical Care',
    hospital: 'Fortis Healthcare Group',
    experience: '18+ Years Acute Resuscitation',
    availability: 'Available Saturday',
    slots: ['Sat 10:00 AM', 'Sat 2:00 PM'],
    avatar: '👨‍⚕️'
  }
];

const WEBINARS_DATA = [
  {
    id: 'web-1',
    title: 'AI in Clinical Diagnostics: From Research Bench to Bedside Implementation',
    speaker: 'Dr. Arvind Swaminathan (Lead AI Researcher, MedTech AI Lab)',
    date: 'Sep 12, 2026 · 6:00 PM IST',
    attendees: '480 Registered',
    category: 'MedTech & AI',
    isLiveSoon: true
  },
  {
    id: 'web-2',
    title: 'Next-Gen Minimally Invasive Robotic Surgery: 3D Visualization & Haptics',
    speaker: 'Prof. Dr. Meenakshi Sundaram (Surgical Robotic Console Specialist)',
    date: 'Sep 18, 2026 · 5:30 PM IST',
    attendees: '320 Registered',
    category: 'Surgery',
    isLiveSoon: false
  }
];

const INNOVATION_CHALLENGES = [
  {
    id: 'chal-1',
    title: 'Low-Cost Point-of-Care Diagnostic Tools Hackathon',
    description: 'Design a sub-₹500 battery-operated diagnostic assay reader for rural community health centers.',
    prize: '₹3,00,000 Grant + Incubation',
    deadlineDays: 14,
    teamsCount: '42 Teams Enrolled',
    sponsor: 'Biotechnology Industry Research Assistance Council (BIRAC)'
  },
  {
    id: 'chal-2',
    title: 'National Public Health Outbreak Surveillance Challenge',
    description: 'Build an automated early warning prediction algorithm using public health PHC morbidity logs.',
    prize: '₹2,50,000 Grant + Pilot Deployment',
    deadlineDays: 21,
    teamsCount: '65 Teams Enrolled',
    sponsor: 'National Centre for Disease Control (NCDC)'
  }
];

const LIVE_PROJECTS = [
  {
    id: 'proj-1',
    title: 'Community Health & Hypertension Screening Registry',
    partner: 'WHO Collaborating Center & AIIMS Community Med',
    duration: '8 Weeks Field Work',
    stipend: '₹20,000 + Academic Authorship',
    status: 'Recruiting Interns',
    domain: 'Public Health'
  },
  {
    id: 'proj-2',
    title: 'Phase-II Oncology Targeted Antibody Pharmacokinetics Pilot',
    partner: 'Biocon Biologics Research Wing',
    duration: '12 Weeks Lab Protocol',
    stipend: '₹35,000 + Co-Investigator Credit',
    status: 'Active Protocol',
    domain: 'Pharma & Biotech'
  },
  {
    id: 'proj-3',
    title: 'Ayushman Bharat ABDM Tele-Triage Workflow Deployment',
    partner: 'National Health Authority (NHA)',
    duration: '6 Weeks Hybrid',
    stipend: '₹25,000 + NHA Certificate',
    status: 'Fast-Track Pilot',
    domain: 'Digital Health'
  }
];

const SPECIALTY_TRENDS_DATA = [
  { specialty: 'Telemedicine', demandIndex: 94, growth: '+38%', stipendGrowth: 28 },
  { specialty: 'AI Diagnostics', demandIndex: 91, growth: '+45%', stipendGrowth: 35 },
  { specialty: 'Critical Care', demandIndex: 88, growth: '+26%', stipendGrowth: 22 },
  { specialty: 'Robotic Surgery', demandIndex: 84, growth: '+34%', stipendGrowth: 30 },
  { specialty: 'Public Health', demandIndex: 82, growth: '+24%', stipendGrowth: 18 },
  { specialty: 'Genomic Oncology', demandIndex: 79, growth: '+31%', stipendGrowth: 25 }
];

const REFERENCE_TABLE_ROWS = [
  {
    branchType: 'Primary Care',
    focusArea: 'General health, prevention, primary triage & lifestyle interventions',
    exampleCareers: 'Family Physician, General Practitioner, Pediatrician',
    coreSkills: 'Preventive counseling, broad differential diagnosis, chronic disease management',
    duration: '3 Years (MD/DNB)'
  },
  {
    branchType: 'Subspecialties',
    focusArea: 'Organ-specific tertiary medicine, specialized pathophysiology',
    exampleCareers: 'Cardiologist, Endocrinologist, Gastroenterologist, Nephrologist',
    coreSkills: 'Advanced organ imaging, catheterization, endoscopy, biological therapies',
    duration: '3 Years Post-MD (DM/DNB-SS)'
  },
  {
    branchType: 'Surgical Specialties',
    focusArea: 'Operative interventions, anatomy reconstruction, trauma',
    exampleCareers: 'General Surgeon, Neurosurgeon, Orthopedic Surgeon, Cardiothoracic Surgeon',
    coreSkills: 'Operating room sterile leadership, tissue handling, minimally invasive lap/robotics',
    duration: '3 to 6 Years (MS / MCh)'
  },
  {
    branchType: 'Diagnostic & Support',
    focusArea: 'Medical imaging physics, laboratory pathology & molecular biomarkers',
    exampleCareers: 'Radiologist, Histopathologist, Nuclear Medicine Physician, Geneticist',
    coreSkills: 'Cross-sectional CT/MRI, ultrasound POCUS, tissue biopsy histochemistry',
    duration: '3 Years (MD)'
  },
  {
    branchType: 'Hospital-Based',
    focusArea: 'Acute emergency resuscitation, perioperative anesthesia, critical care',
    exampleCareers: 'Anesthesiologist, Emergency Physician, Intensivist / ICU Specialist',
    coreSkills: 'Endotracheal intubation, central lines, hemodynamic resuscitation, ACLS/BLS',
    duration: '3 Years (MD)'
  },
  {
    branchType: 'Outpatient Specialties',
    focusArea: 'Dermatological, sensory, ophthalmologic & ambulatory rehabilitation',
    exampleCareers: 'Dermatologist, Ophthalmologist, ENT Surgeon, Physiatrist (PMR)',
    coreSkills: 'Slit lamp examination, dermoscopy, micro-suturing, audiometry interpretation',
    duration: '3 Years (MD/MS)'
  },
  {
    branchType: 'Cross-Disciplinary',
    focusArea: 'Population-level health, epidemiological surveillance, digital health tech',
    exampleCareers: 'Public Health Specialist, Chief Medical Information Officer (CMIO), Clinical Trialist',
    coreSkills: 'HL7 FHIR standards, biostatistics in R, outbreak tracking, health economics',
    duration: '2 to 3 Years (MPH/MD)'
  }
];

// ==========================================
// REUSABLE MICRO-COMPONENTS
// ==========================================

export const ProgressBar: React.FC<{ value: number; color?: string; height?: string; className?: string }> = ({
  value,
  color = 'from-blue-500 to-indigo-500',
  height = 'h-2',
  className = ''
}) => (
  <div className={`w-full bg-white/5 rounded-full overflow-hidden border border-white/5 ${className}`}>
    <div
      className={`${height} rounded-full bg-gradient-to-r ${color} transition-all duration-500`}
      style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
    />
  </div>
);

export const CircularGauge: React.FC<{ value: number; size?: number; label: string; strokeColor?: string }> = ({
  value,
  size = 110,
  label,
  strokeColor = '#3B82F6'
}) => {
  const radius = (size - 16) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center p-3">
      <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
        <svg className="w-full h-full transform -rotate-90" viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth="8"
            className="text-white/10 fill-transparent"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={strokeColor}
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="fill-transparent transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center text-center">
          <span className="text-xl font-black text-white">{value}%</span>
        </div>
      </div>
      <span className="mt-2 text-xs font-semibold text-slate-300 text-center tracking-wide">{label}</span>
    </div>
  );
};

// ==========================================
// MAIN COMPONENT: MedicalCareerPathwaysView
// ==========================================

export const MedicalCareerPathwaysView: React.FC = () => {
  // Navigation & Active View state
  const [activeSection, setActiveSection] = useState<'pathways' | 'skills' | 'placements' | 'industry' | 'analytics' | 'reference'>('pathways');
  const [selectedBranch, setSelectedBranch] = useState<BranchNode>(MEDICAL_BRANCHES[0]);
  const [quickFilter, setQuickFilter] = useState<string>('All');
  
  // Spotlight carousel state
  const [spotlightIndex, setSpotlightIndex] = useState(0);
  const [isSpotlightPaused, setIsSpotlightPaused] = useState(false);

  // Quiz state
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Placements portal tab
  const [placementTab, setPlacementTab] = useState<'student' | 'faculty'>('student');

  // Interactive Modals
  const [activeModal, setActiveModal] = useState<{
    type: 'apply' | 'module' | 'mentor' | 'spotlight' | 'share';
    data?: any;
  } | null>(null);

  // Feedback Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Mobile preview simulation
  const [isMobileFrame, setIsMobileFrame] = useState(false);

  // Reference table search & sort
  const [tableSearch, setTableSearch] = useState('');
  const [tableSortOrder, setTableSortOrder] = useState<'asc' | 'desc'>('asc');

  // Auto-rotating Spotlight timer
  useEffect(() => {
    if (isSpotlightPaused) return;
    const interval = setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % SPOTLIGHT_ITEMS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isSpotlightPaused]);

  // Toast Helper
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  // Scroll to section helper
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId as any);
    const element = document.getElementById(`section-${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Quiz score calculator
  const quizScores = useMemo(() => {
    const scores = { clinical: 0, surgery: 0, research: 0, publicHealth: 0 };
    userAnswers.forEach((answerIdx, qIdx) => {
      const q = QUIZ_QUESTIONS[qIdx];
      if (q && q.options[answerIdx]) {
        const optionScore = q.options[answerIdx].score;
        scores.clinical += optionScore.clinical;
        scores.surgery += optionScore.surgery;
        scores.research += optionScore.research;
        scores.publicHealth += optionScore.publicHealth;
      }
    });
    return scores;
  }, [userAnswers]);

  // Quiz recommended career
  const recommendation = useMemo(() => {
    const { clinical, publicHealth, research } = quizScores;
    if (publicHealth >= 5) {
      return {
        specialties: 'Pediatrics & Public Health Informatics',
        matchPercent: 92,
        rationale: 'High aptitude for epidemiological thinking, digital healthcare standards, and family-centered preventive care.',
        suggestedNextStep: 'Enroll in the ABDM FHIR Standards workshop and ICMR Outbreak Investigation Module.'
      };
    } else if (clinical >= 5) {
      return {
        specialties: 'Internal Medicine & Critical Care Cardiology',
        matchPercent: 88,
        rationale: 'Demonstrated strong acumen in high-acuity emergency triage, ACLS algorithms, and systematic differential diagnosis.',
        suggestedNextStep: 'Apply for the AIIMS Apex Trauma Observership and complete the 20 Case Diagnostic Challenges.'
      };
    } else if (research >= 4) {
      return {
        specialties: 'Clinical Pharmacology & Translational Oncology',
        matchPercent: 84,
        rationale: 'Rigorous attention to protocol design, ICH-GCP regulatory ethics, and biomarker biostatistics.',
        suggestedNextStep: 'Take on the Fortis Sepsis Biomarker Trial Associate role and review MedDRA coding.'
      };
    }
    return {
      specialties: 'Clinical Diagnostics & Pediatric Medicine',
      matchPercent: 85,
      rationale: 'Balanced clinical judgment, strong empathetic bedside communication, and rapid diagnostic problem solving.',
      suggestedNextStep: 'Continue foundational bedside rotations and review clinical simulation modules.'
    };
  }, [quizScores]);

  // Filtered reference table rows
  const filteredTableRows = useMemo(() => {
    let list = [...REFERENCE_TABLE_ROWS];
    if (tableSearch.trim()) {
      const q = tableSearch.toLowerCase();
      list = list.filter(
        (r) =>
          r.branchType.toLowerCase().includes(q) ||
          r.focusArea.toLowerCase().includes(q) ||
          r.exampleCareers.toLowerCase().includes(q) ||
          r.coreSkills.toLowerCase().includes(q)
      );
    }
    list.sort((a, b) => {
      return tableSortOrder === 'asc'
        ? a.branchType.localeCompare(b.branchType)
        : b.branchType.localeCompare(a.branchType);
    });
    return list;
  }, [tableSearch, tableSortOrder]);

  const handleSelectQuizAnswer = (optionIndex: number) => {
    const updated = [...userAnswers];
    updated[currentQuestionIndex] = optionIndex;
    setUserAnswers(updated);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleResetQuiz = () => {
    setUserAnswers([]);
    setCurrentQuestionIndex(0);
    setQuizCompleted(false);
    setQuizStarted(true);
  };

  return (
    <div
      className={`min-h-screen bg-[#070B19] text-slate-100 font-sans selection:bg-[#7C5CFC]/30 selection:text-white pb-20 ${
        isMobileFrame ? 'max-w-md mx-auto my-6 rounded-3xl border-4 border-slate-700 shadow-2xl overflow-hidden' : 'w-full'
      }`}
    >
      {/* ==========================================
          HEADER & DASHBOARD CONTROL BAR
          ========================================== */}
      <header className="sticky top-0 z-40 bg-[#0A0E23]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 py-3.5 shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-[#7C5CFC] flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Medical Career Pathways
                </h1>
                <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  Clinical OS
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">
                Specialty branches, competency benchmarking, clinical internships & industry collaboration
              </p>
            </div>
          </div>

          {/* Quick Action Buttons & Mobile Preview Toggle */}
          <div className="flex items-center gap-2 self-end md:self-auto">
            <button
              onClick={() => setIsMobileFrame(!isMobileFrame)}
              className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                isMobileFrame
                  ? 'bg-indigo-600 text-white border-indigo-500 shadow-sm'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
              title="Toggle Mobile View Simulator"
            >
              {isMobileFrame ? <Monitor className="w-4 h-4" /> : <Smartphone className="w-4 h-4" />}
              <span className="hidden sm:inline">{isMobileFrame ? 'Exit Mobile' : 'Mobile Preview'}</span>
            </button>

            <button
              onClick={() => {
                triggerToast('Medical Career Dossier & Portfolio generated! Ready to print or save.');
                window.print();
              }}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-xs flex items-center gap-1.5 shadow-md hover:from-blue-500 hover:to-indigo-500 transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Export Portfolio</span>
            </button>
          </div>
        </div>

        {/* Sticky Sub-Navigation Tabs */}
        <nav className="max-w-7xl mx-auto mt-3 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-t border-white/5 pt-2 text-xs">
          {[
            { id: 'pathways', label: '1. Specialty Flowchart', icon: CompassIcon },
            { id: 'skills', label: '2. Skill Hub & Quiz', icon: Brain },
            { id: 'placements', label: '3. Placements & Internships', icon: Briefcase },
            { id: 'industry', label: '4. Industry Collaboration', icon: Users },
            { id: 'analytics', label: '5. Career Analytics', icon: TrendingUp },
            { id: 'reference', label: 'Medical Branches Table', icon: BookOpen }
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-lg font-medium flex items-center gap-1.5 transition-colors ${
                  isActive
                    ? 'bg-[#7C5CFC]/20 text-[#C4B5FD] border border-[#7C5CFC]/40 font-bold'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </header>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#141A38] border border-indigo-500/40 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 animate-fade-in text-xs sm:text-sm">
          <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <span>{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="text-slate-400 hover:text-white ml-2">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 space-y-16">
        {/* ===================================================================
            SECTION 1: HOMEPAGE SECTION - MEDICAL CAREER PATHWAYS
            =================================================================== */}
        <section id="section-pathways" className="space-y-6 scroll-mt-28">
          <div className="border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Zap className="w-4 h-4" />
              <span>Section 1 · Specialty Exploration</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Interactive Medical Career Pathways & Specialization Map
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Click on any core branch node to examine residency pathways, real-time clinical readiness match, and core procedural competencies.
            </p>
          </div>

          {/* Quick Explore Buttons Row */}
          <div className="flex flex-wrap items-center gap-2 bg-[#0C112B] p-2 rounded-2xl border border-white/10">
            <span className="text-xs font-semibold text-slate-400 px-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-indigo-400" />
              Explore:
            </span>
            {['All', 'Pediatrics', 'Cardiology', 'Surgery', 'Radiology', 'Public Health', 'MedTech'].map((pill) => (
              <button
                key={pill}
                onClick={() => {
                  setQuickFilter(pill);
                  triggerToast(`Filtering pathways & recommendations by "${pill}"`);
                }}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  quickFilter === pill
                    ? 'bg-gradient-to-r from-blue-600 to-[#7C5CFC] text-white shadow-md'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {pill}
              </button>
            ))}
          </div>

          {/* Flowchart: Interactive Branch Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {MEDICAL_BRANCHES.map((branch) => {
              const isSelected = selectedBranch.id === branch.id;
              return (
                <button
                  key={branch.id}
                  onClick={() => setSelectedBranch(branch)}
                  className={`text-left p-4 rounded-2xl border transition-all relative overflow-hidden group ${
                    isSelected
                      ? 'bg-[#141A3D] border-indigo-500 shadow-xl shadow-indigo-500/10 scale-[1.02]'
                      : 'bg-[#0B0F26] border-white/10 hover:border-white/20 hover:bg-[#0F1533]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: `${branch.color}25`, border: `1px solid ${branch.color}50` }}
                    >
                      {branch.iconName === 'stethoscope' && <Stethoscope className="w-5 h-5" style={{ color: branch.color }} />}
                      {branch.iconName === 'activity' && <Activity className="w-5 h-5" style={{ color: branch.color }} />}
                      {branch.iconName === 'microscope' && <Microscope className="w-5 h-5" style={{ color: branch.color }} />}
                      {branch.iconName === 'brain' && <Brain className="w-5 h-5" style={{ color: branch.color }} />}
                      {branch.iconName === 'globe' && <Globe className="w-5 h-5" style={{ color: branch.color }} />}
                    </div>
                    {isSelected && (
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 ring-4 ring-emerald-400/20" />
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                    {branch.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                    {branch.shortDesc}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-[10px] font-bold text-indigo-400">
                    <span>{branch.subSpecialties.length} Tracks</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Flowchart Deep-Dive Subspecialty Panel */}
          <div className="bg-[#0D1230] border border-white/10 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: selectedBranch.color }}
                />
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {selectedBranch.name} Sub-Specialty Roadmap
                </h3>
              </div>
              <span className="text-xs text-slate-400 font-medium">
                Showing {selectedBranch.subSpecialties.length} residency and fellowship tracks
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedBranch.subSpecialties.map((sub, idx) => (
                <div
                  key={idx}
                  className="bg-[#12183D] border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:border-indigo-500/40 transition-all hover:shadow-lg"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                        {sub.duration}
                      </span>
                      <div className="flex items-center gap-1 text-xs font-bold text-emerald-400">
                        <span>{sub.readinessMatch}% Match</span>
                      </div>
                    </div>
                    <h4 className="text-sm font-bold text-white">{sub.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{sub.description}</p>
                    <div className="text-[11px] font-semibold text-slate-300">
                      Stipend: <span className="text-emerald-400 font-bold">{sub.avgStipend}</span>
                    </div>

                    <div className="space-y-1 pt-1">
                      <span className="text-[10px] uppercase font-bold text-slate-400">Core Competencies:</span>
                      <div className="flex flex-wrap gap-1">
                        {sub.coreSkills.map((sk, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[10px] bg-white/5 border border-white/10 text-slate-300 px-2 py-0.5 rounded"
                          >
                            {sk}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      triggerToast(`Saved track "${sub.title}" to career roadmap`);
                    }}
                    className="mt-4 w-full py-2 rounded-xl bg-white/5 hover:bg-indigo-600 hover:text-white border border-white/10 text-slate-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>View Curriculum</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Auto-Rotating Career Spotlight Carousel */}
          <div
            className="relative bg-gradient-to-br from-[#12183D] via-[#0E1332] to-[#0A0E26] border border-white/10 rounded-3xl p-5 sm:p-6 overflow-hidden shadow-2xl"
            onMouseEnter={() => setIsSpotlightPaused(true)}
            onMouseLeave={() => setIsSpotlightPaused(false)}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Career Spotlight · Emerging Healthcare Fields</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-400">Auto-rotates every 4.5s</span>
                <div className="flex items-center gap-1">
                  {SPOTLIGHT_ITEMS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSpotlightIndex(i)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        spotlightIndex === i ? 'w-6 bg-indigo-500' : 'bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Active Spotlight Card */}
            {(() => {
              const item = SPOTLIGHT_ITEMS[spotlightIndex];
              return (
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                  <div className="space-y-3 max-w-2xl">
                    <div className="flex items-center gap-2.5">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                          <span className="text-xs font-bold bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
                            {item.growthRate}
                          </span>
                        </div>
                        <span className="text-xs text-indigo-400 font-semibold">{item.category}</span>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-xs">
                      <div className="text-slate-400">
                        Metric: <span className="text-white font-bold">{item.stats}</span>
                      </div>
                      <div className="text-slate-400">
                        Key Competency: <span className="text-indigo-300 font-bold">{item.keyCompetency}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 w-full md:w-auto">
                    <button
                      onClick={() => {
                        setActiveModal({ type: 'spotlight', data: item });
                      }}
                      className="w-full md:w-auto px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-[#7C5CFC] text-white font-semibold text-xs shadow-lg hover:from-blue-500 hover:to-[#6b47fc] transition-all flex items-center justify-center gap-2"
                    >
                      <span>Learn More</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                    <div className="hidden sm:flex items-center gap-1">
                      <button
                        onClick={() => setSpotlightIndex((prev) => (prev === 0 ? SPOTLIGHT_ITEMS.length - 1 : prev - 1))}
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300"
                        title="Previous Spotlight"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setSpotlightIndex((prev) => (prev + 1) % SPOTLIGHT_ITEMS.length)}
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300"
                        title="Next Spotlight"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* ===================================================================
            SECTION 2: SKILL DEVELOPMENT HUB
            =================================================================== */}
        <section id="section-skills" className="space-y-8 scroll-mt-28">
          <div className="border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Brain className="w-4 h-4" />
              <span>Section 2 · Competency Benchmark & Assessment</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Skill Development Hub & Clinical Aptitude Diagnostic
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Take the clinical reasoning quiz to dynamically map your residency readiness, explore 3D simulated modules, and track certifications.
            </p>
          </div>

          {/* Interactive Quiz / Aptitude UI */}
          <div className="bg-[#0C112C] border border-white/10 rounded-3xl p-5 sm:p-7 shadow-xl space-y-6">
            {!quizStarted && !quizCompleted && (
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-4">
                <div className="space-y-2 max-w-xl">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>4-Question Mini Clinical Assessment</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Diagnose Your Clinical & Digital Health Competencies
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Evaluates acute clinical decision-making, SPIKES patient communication, digital health standards (HL7 FHIR), and epidemiological outbreak response.
                  </p>
                </div>
                <button
                  onClick={() => setQuizStarted(true)}
                  className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-[#7C5CFC] text-white font-bold text-sm shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  <span>Start Assessment Quiz</span>
                </button>
              </div>
            )}

            {quizStarted && !quizCompleted && (
              <div className="space-y-5">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold">
                      Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-semibold">
                      {QUIZ_QUESTIONS[currentQuestionIndex].category}
                    </span>
                  </div>
                  <span>{Math.round(((currentQuestionIndex) / QUIZ_QUESTIONS.length) * 100)}% Completed</span>
                </div>

                <ProgressBar
                  value={((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}
                  color="from-blue-500 via-indigo-500 to-purple-500"
                  height="h-2"
                />

                <div className="p-4 rounded-2xl bg-[#11173D] border border-white/10">
                  <h4 className="text-sm sm:text-base font-bold text-white leading-relaxed">
                    {QUIZ_QUESTIONS[currentQuestionIndex].question}
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {QUIZ_QUESTIONS[currentQuestionIndex].options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectQuizAnswer(idx)}
                      className="text-left p-3.5 rounded-xl bg-white/5 hover:bg-indigo-600/20 border border-white/10 hover:border-indigo-500/50 text-xs sm:text-sm text-slate-200 hover:text-white transition-all flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-indigo-300 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{opt.text}</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-transform group-hover:translate-x-1" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {quizCompleted && (
              <div className="space-y-6 animate-fade-in">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Clinical Assessment Complete!</h3>
                      <p className="text-xs text-slate-400">Your responses have been processed through our clinical benchmarking engine.</p>
                    </div>
                  </div>
                  <button
                    onClick={handleResetQuiz}
                    className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-semibold flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retake Quiz</span>
                  </button>
                </div>

                {/* Personalized Skill Mapping Recommendation Card */}
                <div className="bg-gradient-to-r from-[#141B44] to-[#192257] border border-indigo-500/40 rounded-2xl p-5 shadow-xl">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      Skill Mapping Result
                    </span>
                    <div className="flex items-center gap-1.5 text-sm font-bold text-emerald-400">
                      <Zap className="w-4 h-4" />
                      <span>{recommendation.matchPercent}% Pathway Alignment</span>
                    </div>
                  </div>

                  <h4 className="text-base sm:text-lg font-black text-white mb-1">
                    Your profile matches: <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-[#A78BFA]">{recommendation.specialties}</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {recommendation.rationale}
                  </p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 rounded-xl bg-[#0B0F2A]/60 border border-white/5 text-xs">
                    <div className="flex items-center gap-2 text-indigo-300">
                      <Sparkles className="w-4 h-4 shrink-0" />
                      <span><strong>Recommended Milestone:</strong> {recommendation.suggestedNextStep}</span>
                    </div>
                    <button
                      onClick={() => {
                        triggerToast(`Applied recommended roadmap: ${recommendation.specialties}`);
                      }}
                      className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shrink-0"
                    >
                      Accept Roadmap
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Learning Modules Grid (3 requested cards) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <span>Simulated Learning Modules</span>
              </h3>
              <span className="text-xs text-slate-400">Self-paced interactive curricula</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {LEARNING_MODULES.map((mod) => (
                <div
                  key={mod.id}
                  className={`bg-[#0C112C] border ${mod.borderColor} rounded-2xl p-5 flex flex-col justify-between hover:shadow-xl transition-all hover:scale-[1.01]`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{mod.icon}</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                        {mod.level} · {mod.duration}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white leading-snug">{mod.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{mod.subtitle}</p>

                    <div className="space-y-1.5 pt-2">
                      <div className="flex justify-between text-xs text-slate-300 font-medium">
                        <span>Curriculum Progress</span>
                        <span className="text-indigo-400 font-bold">{mod.progress}%</span>
                      </div>
                      <ProgressBar value={mod.progress} color="from-blue-500 to-indigo-500" />
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {mod.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] bg-white/5 text-slate-400 px-2 py-0.5 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveModal({ type: 'module', data: mod })}
                    className="mt-4 w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-[#7C5CFC] hover:from-blue-500 hover:to-[#6b47fc] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md transition-all"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>{mod.progress > 0 ? 'Continue Module' : 'Start Module'}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Certification Programs Grid */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-indigo-400" />
                <span>Certification Programs</span>
              </h3>
              <span className="text-xs text-slate-400">Recognized by ICMR, NMC & LADDER</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div
                  key={cert.id}
                  className="bg-[#0B0F26] border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:border-white/20 transition-all"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-slate-400">{cert.duration}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${cert.badgeColor}`}>
                        {cert.status}
                      </span>
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-white">{cert.title}</h4>
                    <p className="text-[11px] text-slate-400">{cert.issuer}</p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {cert.skills.map((s, idx) => (
                        <span key={idx} className="text-[9px] bg-white/5 text-slate-300 px-1.5 py-0.5 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => triggerToast(`Status updated for "${cert.title}"`)}
                    className="mt-3 w-full py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-medium transition-colors"
                  >
                    {cert.status === 'Completed' ? 'View Certificate' : cert.status === 'In Progress' ? 'Resume Course' : 'Enroll Now'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 3: INTERNSHIP & PLACEMENT PORTAL
            =================================================================== */}
        <section id="section-placements" className="space-y-8 scroll-mt-28">
          <div className="border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Briefcase className="w-4 h-4" />
              <span>Section 3 · Clinical Rotations & Placements</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Internship & Placement Portal
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Explore hospital clinical internships, pharma trial fellowships, faculty development programs, and verifiable digital logbooks.
            </p>
          </div>

          {/* Student vs Faculty Opportunities Switcher */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPlacementTab('student')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  placementTab === 'student'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                    : 'bg-white/5 text-slate-300 hover:text-white'
                }`}
              >
                Student Clinical Opportunities (3)
              </button>
              <button
                onClick={() => setPlacementTab('faculty')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  placementTab === 'faculty'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                    : 'bg-white/5 text-slate-300 hover:text-white'
                }`}
              >
                Faculty Opportunities & Consultancy (3)
              </button>
            </div>
            <span className="text-xs text-slate-400 hidden sm:inline">Verified Placement Partners</span>
          </div>

          {/* Opportunities Card List */}
          {placementTab === 'student' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {STUDENT_OPPORTUNITIES.map((opp) => (
                <div
                  key={opp.id}
                  className="bg-[#0C112C] border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-indigo-500/40 transition-all hover:shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {opp.type}
                      </span>
                      <span className="text-[11px] font-semibold text-amber-400 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {opp.deadline}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white leading-snug">{opp.title}</h4>
                    <p className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span>{opp.hospital}</span>
                    </p>

                    <div className="flex items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {opp.location}
                      </span>
                      <span className="text-emerald-400 font-bold">{opp.stipend}</span>
                    </div>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {opp.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] bg-white/5 text-slate-300 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveModal({ type: 'apply', data: opp })}
                    className="mt-4 w-full py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95"
                  >
                    <span>Apply for Rotation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {FACULTY_OPPORTUNITIES.map((opp) => (
                <div
                  key={opp.id}
                  className="bg-[#0C112C] border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-purple-500/40 transition-all hover:shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        {opp.type}
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-400">
                        {opp.stipend}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white leading-snug">{opp.title}</h4>
                    <p className="text-xs text-slate-300 font-medium flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span>{opp.institution}</span>
                    </p>

                    <p className="text-xs text-slate-400">
                      Duration: <span className="text-white font-semibold">{opp.duration}</span>
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {opp.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] bg-white/5 text-slate-300 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => triggerToast(`Faculty application submitted for "${opp.title}"`)}
                    className="mt-4 w-full py-2 rounded-xl bg-purple-600/30 hover:bg-purple-600 text-purple-200 hover:text-white border border-purple-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>Submit Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Tracking Dashboard (Table) */}
          <div className="bg-[#0A0E26] border border-white/10 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white">Application Status & Rotation Tracking</h3>
                <p className="text-xs text-slate-400">Live synchronization with hospital medical education boards</p>
              </div>
              <span className="text-xs font-bold text-emerald-400">3 Active Applications</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-white/5 text-slate-400 uppercase text-[10px] tracking-wider border-b border-white/10">
                  <tr>
                    <th className="py-3 px-3">Role & Hospital</th>
                    <th className="py-3 px-3">Applied Date</th>
                    <th className="py-3 px-3">Application Status</th>
                    <th className="py-3 px-3">Mentor Feedback</th>
                    <th className="py-3 px-3 text-right">Logbook / Records</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {TRACKING_DATA.map((row) => (
                    <tr key={row.id} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-3 font-semibold text-white">
                        <div>{row.role}</div>
                        <div className="text-[11px] text-slate-400 font-normal">{row.organization}</div>
                      </td>
                      <td className="py-3 px-3 text-slate-400">{row.appliedDate}</td>
                      <td className="py-3 px-3">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${row.statusColor}`}>
                          {row.status}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-slate-300 max-w-xs">{row.mentorFeedback}</td>
                      <td className="py-3 px-3 text-right text-emerald-400 font-semibold">{row.completionRecord}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Verified Digital Portfolio Section */}
          <div className="bg-gradient-to-r from-[#10163A] via-[#141C47] to-[#0E1436] border border-white/10 rounded-3xl p-5 sm:p-7 shadow-2xl space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 font-black text-lg">
                  DA
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base sm:text-lg font-bold text-white">Dr. Adarsh Pratap Singh</h3>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30">
                      ✓ Verified Clinical Fellow
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    MBBS / Junior Resident · All India Institute of Medical Sciences (AIIMS), New Delhi
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('https://ladder-health.org/portfolio/dr-adarsh-singh');
                    triggerToast('Portfolio public ledger URL copied to clipboard!');
                  }}
                  className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-semibold flex items-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share Portfolio</span>
                </button>
                <button
                  onClick={() => {
                    triggerToast('Downloading official verifiable PDF portfolio...');
                    window.print();
                  }}
                  className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-[#7C5CFC] text-white text-xs font-semibold flex items-center gap-1.5 shadow-md"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-[#0A0E26]/80 border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Clinical Rotations</span>
                <p className="text-sm font-black text-white mt-1">4 Verified (ER, ICU, Ward)</p>
              </div>
              <div className="p-3 rounded-xl bg-[#0A0E26]/80 border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Certifications</span>
                <p className="text-sm font-black text-indigo-400 mt-1">ACLS, GCP, Epidemiology</p>
              </div>
              <div className="p-3 rounded-xl bg-[#0A0E26]/80 border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Research Papers</span>
                <p className="text-sm font-black text-emerald-400 mt-1">2 ICMR Cohort Audits</p>
              </div>
              <div className="p-3 rounded-xl bg-[#0A0E26]/80 border border-white/5">
                <span className="text-[10px] text-slate-400 uppercase font-bold">Ledger Integrity</span>
                <p className="text-sm font-black text-cyan-400 mt-1">100% Cryptographic Proof</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 4: INDUSTRY COLLABORATION ZONE
            =================================================================== */}
        <section id="section-industry" className="space-y-8 scroll-mt-28">
          <div className="border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Users className="w-4 h-4" />
              <span>Section 4 · Industry & Academia Partnerships</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Industry Collaboration Zone
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Connect with senior hospital mentors, register for live clinical webinars, compete in diagnostic hackathons, and join live pharma projects.
            </p>
          </div>

          {/* Mentorship Programs Cards */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-blue-400" />
                <span>1-on-1 Clinical Mentorship Capsules</span>
              </h3>
              <span className="text-xs text-slate-400">15-minute high-impact case reviews</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {MENTORS_DATA.map((mentor) => (
                <div
                  key={mentor.id}
                  className="bg-[#0C112C] border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-indigo-500/40 transition-all hover:shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl">
                        {mentor.avatar}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{mentor.name}</h4>
                        <p className="text-xs text-indigo-300">{mentor.role}</p>
                        <p className="text-[11px] text-slate-400">{mentor.hospital}</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-300">{mentor.experience}</p>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-[11px] text-emerald-400 font-semibold flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{mentor.availability}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveModal({ type: 'mentor', data: mentor })}
                    className="mt-4 w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-[#7C5CFC] hover:from-blue-500 hover:to-[#6b47fc] text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-md transition-all active:scale-95"
                  >
                    <span>Request Mentorship Capsule</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Guest Lectures & Webinars */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-amber-400" />
                <span>Guest Lectures & Clinical Webinars</span>
              </h3>
              <span className="text-xs text-slate-400">Live CME accredited broadcasts</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {WEBINARS_DATA.map((web) => (
                <div
                  key={web.id}
                  className="bg-[#0B0F26] border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-white/20 transition-all"
                >
                  <div className="space-y-2 max-w-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        {web.category}
                      </span>
                      {web.isLiveSoon && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-red-500/20 text-red-300 animate-pulse">
                          ● Broadcast This Week
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-white">{web.title}</h4>
                    <p className="text-xs text-slate-400">{web.speaker}</p>
                    <div className="text-xs text-slate-300 flex items-center gap-3">
                      <span className="text-indigo-400 font-semibold">{web.date}</span>
                      <span>·</span>
                      <span className="text-slate-400">{web.attendees}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => triggerToast(`Registered for "${web.title}"! Calendar invite dispatched.`)}
                    className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-indigo-600 hover:text-white border border-white/10 text-slate-200 text-xs font-semibold whitespace-nowrap transition-all active:scale-95"
                  >
                    Register Free
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Innovation Challenges (Hackathon Banner Cards with Live Countdown) */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-indigo-400" />
                <span>Healthcare Innovation Challenges</span>
              </h3>
              <span className="text-xs text-slate-400">Institutional grants & incubation</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {INNOVATION_CHALLENGES.map((chal) => (
                <div
                  key={chal.id}
                  className="bg-gradient-to-br from-[#13193E] to-[#0D1230] border border-indigo-500/30 rounded-3xl p-6 shadow-xl space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                      Grant: {chal.prize}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-amber-400 font-mono font-bold bg-amber-500/10 px-2 py-0.5 rounded">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{chal.deadlineDays}d : 14h : 32m left</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-base font-black text-white">{chal.title}</h4>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">{chal.description}</p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-3">
                    <span>Sponsor: <strong className="text-white">{chal.sponsor}</strong></span>
                    <span className="text-indigo-300 font-semibold">{chal.teamsCount}</span>
                  </div>

                  <button
                    onClick={() => triggerToast(`Team registration docket opened for "${chal.title}"`)}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-[#7C5CFC] text-white text-xs font-bold shadow-md hover:from-blue-500 hover:to-[#6b47fc] transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Register Innovation Team</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Live Projects List */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Microscope className="w-5 h-5 text-cyan-400" />
                <span>Live Sponsored Research & Clinical Projects</span>
              </h3>
              <span className="text-xs text-slate-400">Join active multicentric protocols</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {LIVE_PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-[#0B0F26] border border-white/10 rounded-2xl p-4 flex flex-col justify-between hover:border-cyan-500/40 transition-all hover:shadow-lg"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                        {proj.domain}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold">{proj.status}</span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-white">{proj.title}</h4>
                    <p className="text-xs text-slate-400">{proj.partner}</p>

                    <div className="text-xs text-slate-300 font-medium">
                      Duration: <span className="text-white">{proj.duration}</span>
                    </div>
                    <div className="text-xs text-emerald-400 font-bold">
                      {proj.stipend}
                    </div>
                  </div>

                  <button
                    onClick={() => triggerToast(`Application submitted to join "${proj.title}"`)}
                    className="mt-3 w-full py-2 rounded-xl bg-white/5 hover:bg-cyan-600 hover:text-white border border-white/10 text-slate-200 text-xs font-semibold transition-all"
                  >
                    Join Project CTA
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 5: ANALYTICS & CAREER GUIDANCE
            =================================================================== */}
        <section id="section-analytics" className="space-y-8 scroll-mt-28">
          <div className="border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">
              <TrendingUp className="w-4 h-4" />
              <span>Section 5 · Placement Readiness & Labor Insights</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Analytics & Career Guidance
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Examine circular readiness gauges, AI career suggestions based on your profile DNA, and demand forecasts across medical specialties.
            </p>
          </div>

          {/* Placement Readiness Dashboard (3 Circular Progress Gauges) */}
          <div className="bg-[#0C112C] border border-white/10 rounded-3xl p-6 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-white">Placement Readiness Metrics</h3>
                <p className="text-xs text-slate-400">Composite score based on clinical simulations and rotation evaluations</p>
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                Top 12% Cohort Ranking
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-2">
              <div className="bg-[#11173D] border border-white/5 rounded-2xl p-4 flex flex-col items-center">
                <CircularGauge value={82} label="Clinical Competency Score" strokeColor="#3B82F6" />
                <span className="text-[11px] text-slate-400 text-center mt-1">Anatomy, ACLS, Diagnostics</span>
              </div>
              <div className="bg-[#11173D] border border-white/5 rounded-2xl p-4 flex flex-col items-center">
                <CircularGauge value={75} label="Internship & Rotation Progress" strokeColor="#8B5CF6" />
                <span className="text-[11px] text-slate-400 text-center mt-1">4 Completed / 1 Underway</span>
              </div>
              <div className="bg-[#11173D] border border-white/5 rounded-2xl p-4 flex flex-col items-center">
                <CircularGauge value={88} label="Employability & Match Score" strokeColor="#10B981" />
                <span className="text-[11px] text-slate-400 text-center mt-1">AIIMS, Fortis & Max Eligible</span>
              </div>
            </div>
          </div>

          {/* Career Pathway Explorer (AI Suggestion Panel) */}
          <div className="bg-gradient-to-r from-[#121942] to-[#161F54] border border-indigo-500/40 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-300">
                  <Brain className="w-4 h-4" />
                </div>
                <h3 className="text-base font-bold text-white">AI Career Pathway Explorer</h3>
              </div>
              <span className="text-xs bg-indigo-500/20 text-indigo-300 px-2.5 py-0.5 rounded-full border border-indigo-500/30 font-semibold">
                Autonomous Recommendation Engine
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Based on your clinical logbook metrics, high diagnostic reasoning score (88%), and interest in digital healthcare standards, the AI Advisor suggests pursuing a dual-track pathway:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-[#0B0F2A] border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Primary: Clinical Practice</span>
                  <span className="text-[10px] text-emerald-400 font-bold">92% Match</span>
                </div>
                <p className="text-[11px] text-slate-400">Internal Medicine residency followed by Critical Care or Neonatology fellowship.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0B0F2A] border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Secondary: Public Health</span>
                  <span className="text-[10px] text-blue-400 font-bold">86% Match</span>
                </div>
                <p className="text-[11px] text-slate-400">Digital Health Informatics, ABDM interoperability, and epidemiological surveillance.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0B0F2A] border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-white">Tertiary: Clinical Research</span>
                  <span className="text-[10px] text-purple-400 font-bold">80% Match</span>
                </div>
                <p className="text-[11px] text-slate-400">Multicentric Phase III trial monitoring, GCP regulatory compliance, and pharmacovigilance.</p>
              </div>
            </div>
          </div>

          {/* Industry Trends Chart (Recharts) */}
          <div className="bg-[#0C112C] border border-white/10 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-base font-bold text-white">Emerging Medical Specialties Demand Index</h3>
                <p className="text-xs text-slate-400">5-year projected talent deficit across national healthcare networks</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#7C5CFC]" />
                <span className="text-xs text-slate-300 font-medium">Demand Index (Out of 100)</span>
              </div>
            </div>

            <div className="h-64 w-full pt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SPECIALTY_TRENDS_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                  <XAxis
                    dataKey="specialty"
                    stroke="#94a3b8"
                    fontSize={11}
                    tickLine={false}
                    axisLine={{ stroke: '#ffffff15' }}
                  />
                  <YAxis
                    stroke="#94a3b8"
                    fontSize={11}
                    tickLine={false}
                    axisLine={{ stroke: '#ffffff15' }}
                    domain={[0, 100]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#0F1535',
                      borderColor: '#7C5CFC50',
                      borderRadius: '12px',
                      color: '#ffffff',
                      fontSize: '12px'
                    }}
                    formatter={(val: any, name: any, item: any) => [
                      `${val} / 100 (Growth: ${item.payload.growth})`,
                      'Demand Index'
                    ]}
                  />
                  <Bar dataKey="demandIndex" radius={[8, 8, 0, 0]}>
                    {SPECIALTY_TRENDS_DATA.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={index % 2 === 0 ? '#7C5CFC' : '#3B82F6'}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>

        {/* ===================================================================
            BONUS SECTION: MEDICAL BRANCHES REFERENCE TABLE
            =================================================================== */}
        <section id="section-reference" className="space-y-6 scroll-mt-28">
          <div className="border-b border-white/10 pb-4">
            <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">
              <BookOpen className="w-4 h-4" />
              <span>Reference Matrix · Comprehensive Specialties Guide</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Medical Branches Reference Table
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Sortable and searchable reference guide containing branch classifications, focus areas, example careers, and average residency duration.
            </p>
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#0C112C] p-3 rounded-2xl border border-white/10">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search branch, focus area, or career..."
                value={tableSearch}
                onChange={(e) => setTableSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#070B1E] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={() => setTableSortOrder(tableSortOrder === 'asc' ? 'desc' : 'asc')}
                className="px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 flex items-center gap-1.5"
              >
                <span>Sort Alphabetical ({tableSortOrder.toUpperCase()})</span>
              </button>
              <span className="text-xs text-slate-400 px-2">
                Showing {filteredTableRows.length} of {REFERENCE_TABLE_ROWS.length} Branches
              </span>
            </div>
          </div>

          {/* Reference Table */}
          <div className="bg-[#0A0E26] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-[#111738] text-slate-300 uppercase text-[10px] tracking-wider border-b border-white/10">
                  <tr>
                    <th className="py-3.5 px-4 font-bold">Branch Type</th>
                    <th className="py-3.5 px-4 font-bold">Focus Area</th>
                    <th className="py-3.5 px-4 font-bold">Example Careers</th>
                    <th className="py-3.5 px-4 font-bold">Core Procedural Skills</th>
                    <th className="py-3.5 px-4 font-bold text-right">Residency Period</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredTableRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/5 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">
                        <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                          {row.branchType}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-300 max-w-xs">{row.focusArea}</td>
                      <td className="py-3.5 px-4 font-semibold text-emerald-300">{row.exampleCareers}</td>
                      <td className="py-3.5 px-4 text-slate-400 max-w-sm">{row.coreSkills}</td>
                      <td className="py-3.5 px-4 text-right font-mono text-slate-300 whitespace-nowrap">
                        {row.duration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      {/* ===================================================================
          INTERACTIVE MODALS
          =================================================================== */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#0D1233] border border-indigo-500/40 rounded-3xl max-w-lg w-full p-6 space-y-4 shadow-2xl relative">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-white/5"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal.type === 'apply' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Rotation Application</span>
                </div>
                <h3 className="text-lg font-bold text-white">{activeModal.data?.title}</h3>
                <p className="text-xs text-slate-300">{activeModal.data?.hospital}</p>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1">
                  <div>Location: <strong>{activeModal.data?.location}</strong></div>
                  <div>Stipend: <strong className="text-emerald-400">{activeModal.data?.stipend}</strong></div>
                  <div>Deadline: <strong className="text-amber-400">{activeModal.data?.deadline}</strong></div>
                </div>
                <p className="text-xs text-slate-400">
                  Your verified clinical passport, ACLS certificates, and Dean recommendation will be securely transmitted.
                </p>
                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 text-xs font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setActiveModal(null);
                      triggerToast(`Application officially submitted to ${activeModal.data?.hospital}!`);
                    }}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-md"
                  >
                    Confirm & Submit Dossier
                  </button>
                </div>
              </div>
            )}

            {activeModal.type === 'module' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-bold uppercase">
                  <GraduationCap className="w-4 h-4" />
                  <span>Module Simulator</span>
                </div>
                <h3 className="text-lg font-bold text-white">{activeModal.data?.title}</h3>
                <p className="text-xs text-slate-300">{activeModal.data?.subtitle}</p>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1">
                  <div>Estimated Duration: <strong>{activeModal.data?.duration}</strong></div>
                  <div>Current Completion: <strong>{activeModal.data?.progress}%</strong></div>
                </div>
                <p className="text-xs text-slate-400">
                  Loading 3D WebGL anatomical models and interactive clinical vignette player...
                </p>
                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 rounded-xl bg-white/5 text-slate-300 text-xs font-semibold"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      setActiveModal(null);
                      triggerToast(`Interactive simulator launched for "${activeModal.data?.title}"!`);
                    }}
                    className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold shadow-md"
                  >
                    Launch Fullscreen Simulator
                  </button>
                </div>
              </div>
            )}

            {activeModal.type === 'mentor' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase">
                  <Users className="w-4 h-4" />
                  <span>Book Mentorship Capsule</span>
                </div>
                <h3 className="text-lg font-bold text-white">{activeModal.data?.name}</h3>
                <p className="text-xs text-indigo-300">{activeModal.data?.role} · {activeModal.data?.hospital}</p>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-2">
                  <span className="font-semibold text-slate-300">Select an Available 15-Minute Slot:</span>
                  <div className="grid grid-cols-2 gap-2">
                    {activeModal.data?.slots?.map((slot: string, sIdx: number) => (
                      <button
                        key={sIdx}
                        onClick={() => {
                          setActiveModal(null);
                          triggerToast(`Booked 15-minute capsule with ${activeModal.data?.name} for ${slot}!`);
                        }}
                        className="p-2 rounded-lg bg-indigo-600/30 hover:bg-indigo-600 text-indigo-200 hover:text-white border border-indigo-500/40 text-xs font-medium text-center"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeModal.type === 'spotlight' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>Field Spotlight Deep-Dive</span>
                </div>
                <h3 className="text-lg font-bold text-white">{activeModal.data?.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{activeModal.data?.description}</p>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1">
                  <div>Industry Growth: <strong className="text-emerald-400">{activeModal.data?.growthRate}</strong></div>
                  <div>Current Scale: <strong>{activeModal.data?.stats}</strong></div>
                  <div>Priority Skill: <strong className="text-indigo-300">{activeModal.data?.keyCompetency}</strong></div>
                </div>
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-bold"
                  >
                    Done
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

// Fallback compass icon
function CompassIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

export default MedicalCareerPathwaysView;
