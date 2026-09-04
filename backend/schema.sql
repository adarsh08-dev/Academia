-- ============================================================
-- LADDER — Medical Education, Career, Research & Healthcare Industry Platform
-- PostgreSQL Database Schema & Seed Data
-- ============================================================

-- 1. MEDICAL STUDENTS & CANDIDATES
CREATE TABLE IF NOT EXISTS students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    course VARCHAR(150) DEFAULT 'Bachelor of Medicine & Bachelor of Surgery (MBBS)',
    batch VARCHAR(50) DEFAULT '2022-2027 (Clinical Phase)',
    college VARCHAR(200) DEFAULT 'All India Institute of Medical Sciences (AIIMS)',
    target_role VARCHAR(150) DEFAULT 'Junior Resident / Clinical Fellow',
    career_readiness INT DEFAULT 88,
    experience_score INT DEFAULT 74,
    clinical_logbook_entries INT DEFAULT 42,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. CLINICAL & HEALTHCARE COMPETENCIES
CREATE TABLE IF NOT EXISTS skills (
    id SERIAL PRIMARY KEY,
    skill_name VARCHAR(120) NOT NULL,
    category VARCHAR(100) NOT NULL, -- e.g. Emergency & Resuscitation, Diagnostics, Pharmacology, Clinical Communication
    nmc_domain VARCHAR(100) DEFAULT 'Cognitive & Psychomotor',
    accreditation_body VARCHAR(100) DEFAULT 'NMC / NABH'
);

-- 3. STUDENT CLINICAL COMPETENCY MAPPINGS
CREATE TABLE IF NOT EXISTS student_skills (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    skill_id INT REFERENCES skills(id) ON DELETE CASCADE,
    proficiency INT DEFAULT 1 CHECK (proficiency BETWEEN 1 AND 5),
    verified_by_faculty BOOLEAN DEFAULT FALSE,
    cases_performed INT DEFAULT 0,
    last_evaluated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 4. CLINICIANS & MEDICAL SPECIALIST MENTORS
CREATE TABLE IF NOT EXISTS mentors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    role VARCHAR(150) NOT NULL,
    company VARCHAR(150) NOT NULL, -- Hospital or Academic Institution
    specialization VARCHAR(150) DEFAULT 'Internal Medicine',
    medical_council_reg VARCHAR(50),
    experience_years INT DEFAULT 10,
    availability BOOLEAN DEFAULT TRUE,
    rating DECIMAL(2,1) DEFAULT 4.9,
    sessions_completed INT DEFAULT 38
);

-- 5. CLINICAL MENTORSHIP CAPSULE BOOKINGS
CREATE TABLE IF NOT EXISTS mentor_bookings (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    mentor_id INT REFERENCES mentors(id) ON DELETE CASCADE,
    case_topic VARCHAR(200) DEFAULT 'Grand Rounds Case Presentation & Differential Diagnosis',
    session_date DATE NOT NULL,
    session_time TIME NOT NULL,
    duration_minutes INT DEFAULT 15,
    status VARCHAR(30) DEFAULT 'confirmed' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
    meeting_link VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 6. HEALTHCARE ORGANIZATIONS & ACADEMIC HOSPITALS
CREATE TABLE IF NOT EXISTS companies (
    id SERIAL PRIMARY KEY,
    company_name VARCHAR(150) NOT NULL,
    industry VARCHAR(100) DEFAULT 'Multi-Specialty Tertiary Hospital',
    org_type VARCHAR(100) DEFAULT 'Academic Medical Center',
    accreditation VARCHAR(100) DEFAULT 'NABH / JCI Accredited',
    location VARCHAR(150) DEFAULT 'New Delhi, India',
    verified BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 7. CLINICAL MICRO-ROTATIONS & OBSERVERSHIPS (GIGS)
CREATE TABLE IF NOT EXISTS gigs (
    id SERIAL PRIMARY KEY,
    company_id INT REFERENCES companies(id) ON DELETE SET NULL,
    title VARCHAR(200) NOT NULL,
    department VARCHAR(100) DEFAULT 'Emergency & Trauma',
    description TEXT NOT NULL,
    required_skill VARCHAR(120) NOT NULL,
    duration_hours INT DEFAULT 40,
    duration_weeks INT DEFAULT 4,
    payment DECIMAL(10,2) DEFAULT 25000.00, -- Clinical Stipend / Honorarium
    status VARCHAR(30) DEFAULT 'open' CHECK (status IN ('open', 'filled', 'completed', 'closed')),
    slots_available INT DEFAULT 2,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 8. CLINICAL ROTATION APPLICATIONS
CREATE TABLE IF NOT EXISTS gig_applications (
    id SERIAL PRIMARY KEY,
    gig_id INT REFERENCES gigs(id) ON DELETE CASCADE,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    message TEXT,
    logbook_url VARCHAR(255),
    status VARCHAR(30) DEFAULT 'submitted' CHECK (status IN ('submitted', 'under_review', 'accepted', 'rejected')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 9. LADDER EXPERIENCE PASSPORT & VERIFIED CLINICAL LEDGER
CREATE TABLE IF NOT EXISTS experience_records (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    title VARCHAR(200) NOT NULL,
    company_id INT REFERENCES companies(id) ON DELETE SET NULL,
    hospital_name VARCHAR(150),
    experience_type VARCHAR(100) NOT NULL, -- e.g. Clinical Rotation, Sub-Internship, Clinical Trial, BLS/ACLS
    verified BOOLEAN DEFAULT TRUE,
    score INT DEFAULT 95,
    hash VARCHAR(66) DEFAULT '0x7f4b8921e90a88dfb2938491038294a0',
    verification_authority VARCHAR(150) DEFAULT 'National Medical Commission Digital Ledger',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 10. CLINICAL RESEARCH & ICMR COLLABORATION PROJECTS
CREATE TABLE IF NOT EXISTS research_projects (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    principal_investigator VARCHAR(150) NOT NULL,
    institution VARCHAR(200) NOT NULL,
    funding_agency VARCHAR(100) DEFAULT 'ICMR / DBT Grant',
    study_type VARCHAR(100) DEFAULT 'Randomized Controlled Trial',
    department VARCHAR(100) DEFAULT 'Cardiology & Epidemiology',
    open_positions INT DEFAULT 2,
    required_skills TEXT[] DEFAULT '{}',
    stipend_or_grant VARCHAR(100) DEFAULT '₹35,000/month',
    status VARCHAR(50) DEFAULT 'Recruiting Student Investigators',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 11. USERS (Multi-Role Authentication & Access Control)
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL CHECK (role IN ('student', 'mentor', 'hod', 'recruiter', 'company', 'admin')),
    student_id INTEGER REFERENCES students(id) ON DELETE SET NULL,
    mentor_id INTEGER REFERENCES mentors(id) ON DELETE SET NULL,
    company_id INTEGER REFERENCES companies(id) ON DELETE SET NULL,
    is_verified BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 12. HOSPITAL RESIDENCY & CLINICAL JOB POSTINGS
CREATE TABLE IF NOT EXISTS jobs (
    id SERIAL PRIMARY KEY,
    company_id INT REFERENCES companies(id) ON DELETE SET NULL,
    company VARCHAR(150) NOT NULL,
    title VARCHAR(200) NOT NULL,
    location VARCHAR(150) DEFAULT 'New Delhi, India',
    type VARCHAR(50) DEFAULT 'Residency / Full-Time',
    duration VARCHAR(50) DEFAULT '3 Years (MD/MS)',
    stipend VARCHAR(100) DEFAULT '₹85,000 - ₹1,10,000/month',
    openings INT DEFAULT 4,
    required_skills TEXT[] DEFAULT '{}',
    eligibility VARCHAR(200) DEFAULT 'MBBS with 1-Year Compulsory Rotatory Internship (CRMI)',
    description TEXT,
    deadline VARCHAR(50) DEFAULT '2026-10-31',
    status VARCHAR(30) DEFAULT 'Active',
    apps INT DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 13. AI HELPDESK & CLINICAL ADVISOR TICKETS
CREATE TABLE IF NOT EXISTS helpdesk_tickets (
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    category VARCHAR(100) DEFAULT 'Clinical Rotation',
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    priority VARCHAR(50) DEFAULT 'medium',
    status VARCHAR(50) DEFAULT 'open',
    ai_summary TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- ============================================================
-- SEED DATA FOR LADDER MEDICAL ECOSYSTEM
-- ============================================================

-- Seed Students
INSERT INTO students (id, name, course, batch, college, target_role, career_readiness, experience_score, clinical_logbook_entries)
VALUES 
(1, 'Dr. Adarsh Pratap Singh', 'MBBS (Final Year / Clinical Intern)', 'Batch 2022-2027', 'All India Institute of Medical Sciences (AIIMS), New Delhi', 'Junior Resident / Clinical Fellow', 88, 74, 52)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    course = EXCLUDED.course,
    batch = EXCLUDED.batch,
    college = EXCLUDED.college,
    target_role = EXCLUDED.target_role,
    career_readiness = EXCLUDED.career_readiness,
    experience_score = EXCLUDED.experience_score;

-- Seed Clinical Competencies
INSERT INTO skills (id, skill_name, category, nmc_domain, accreditation_body)
VALUES
(1, 'Emergency Triage & Resuscitation (ACLS/BLS)', 'Emergency & Critical Care', 'Psychomotor', 'American Heart Association / NMC'),
(2, 'Diagnostic Reasoning & Differential Formulation', 'Internal Medicine', 'Cognitive', 'NMC Competency-Based Curriculum'),
(3, 'Bedside Point-of-Care Ultrasound (POCUS)', 'Medical Imaging', 'Psychomotor', 'Society of Critical Care Medicine'),
(4, 'ICH-GCP Clinical Trial Protocol Compliance', 'Clinical Research', 'Regulatory & Ethics', 'CDSCO & ICMR Guidelines'),
(5, 'Arterial Blood Gas (ABG) & Acid-Base Analysis', 'Critical Care', 'Cognitive', 'Indian Society of Critical Care Medicine'),
(6, 'Antibiotic Stewardship & Infection Control', 'Clinical Pharmacology', 'Cognitive & Systems', 'CDC & NABH Standards')
ON CONFLICT (id) DO NOTHING;

-- Seed Student Skills
INSERT INTO student_skills (student_id, skill_id, proficiency, verified_by_faculty, cases_performed)
VALUES
(1, 1, 5, TRUE, 28),
(1, 2, 4, TRUE, 34),
(1, 3, 3, TRUE, 12),
(1, 4, 4, TRUE, 8),
(1, 5, 4, TRUE, 19),
(1, 6, 3, FALSE, 14)
ON CONFLICT DO NOTHING;

-- Seed Healthcare Institutions
INSERT INTO companies (id, company_name, industry, org_type, accreditation, location, verified)
VALUES 
(1, 'AIIMS New Delhi - Apex Trauma Center', 'Academic Medical Center', 'Autonomous Apex Institute', 'NABH & NMC Certified', 'New Delhi, India', TRUE),
(2, 'Fortis Memorial Research Institute', 'Tertiary Super-Specialty Hospital', 'Private Healthcare Network', 'JCI & NABH Accredited', 'Gurugram, Haryana', TRUE),
(3, 'Apollo Hospitals & Clinical Research Division', 'Multi-Specialty Hospital & Research', 'Integrated Healthcare Enterprise', 'JCI & NABL Accredited', 'Chennai, Tamil Nadu', TRUE),
(4, 'Tata Memorial Centre - Advanced Cancer Research', 'Oncology Super-Specialty & Research', 'Department of Atomic Energy Grant', 'NABH & Atomic Energy Board', 'Mumbai, Maharashtra', TRUE)
ON CONFLICT (id) DO UPDATE SET
    company_name = EXCLUDED.company_name,
    industry = EXCLUDED.industry,
    org_type = EXCLUDED.org_type,
    accreditation = EXCLUDED.accreditation,
    location = EXCLUDED.location,
    verified = EXCLUDED.verified;

-- Seed Clinician Mentors
INSERT INTO mentors (id, name, role, company, specialization, medical_council_reg, experience_years, availability, rating, sessions_completed)
VALUES
(1, 'Prof. Dr. Vikramaditya Roy', 'Professor & Head of Cardiology', 'AIIMS New Delhi', 'Interventional Cardiology & Electrophysiology', 'MCI-38291', 18, TRUE, 4.9, 45),
(2, 'Dr. Priya Nair', 'Senior Consultant & Clinical Epidemiologist', 'Christian Medical College (CMC), Vellore', 'Infectious Diseases & Global Health', 'TNC-58291', 14, TRUE, 4.8, 38),
(3, 'Dr. Arvind K. Sharma', 'Head of Clinical Research & Clinical Trials', 'Fortis Memorial Research Institute', 'Translational Medicine & Oncology Trials', 'DMC-29481', 20, TRUE, 5.0, 62),
(4, 'Dr. Sunita Deshmukh', 'Associate Director of Critical Care Medicine', 'Apollo Hospitals', 'Neuro-Intensive Care & ECMO', 'MMC-44910', 12, TRUE, 4.9, 29)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    role = EXCLUDED.role,
    company = EXCLUDED.company,
    specialization = EXCLUDED.specialization,
    experience_years = EXCLUDED.experience_years,
    availability = EXCLUDED.availability;

-- Seed Clinical Micro-Rotations (Gigs)
INSERT INTO gigs (id, company_id, title, department, description, required_skill, duration_hours, duration_weeks, payment, status, slots_available)
VALUES
(1, 1, 'ICU Sepsis Protocol & Mechanical Ventilation Observership', 'Critical Care & Anesthesia', 'Participate in intensive care unit rounds, ventilator waveform analysis, and sepsis bundle adherence under consultant supervision.', 'Emergency Triage & Resuscitation (ACLS/BLS)', 40, 4, 30000.00, 'open', 3),
(2, 2, 'Clinical Trial Sub-Investigator Assistant (Cardiovascular Phase III)', 'Cardiology Research Division', 'Support patient screening, CRF protocol logging, and adverse event adjudication in an international double-blind trial.', 'ICH-GCP Clinical Trial Protocol Compliance', 30, 6, 35000.00, 'open', 2),
(3, 4, 'Oncology Precision Medicine & Tumor Board Case Documentation', 'Medical Oncology', 'Attend weekly multidisciplinary tumor boards, summarize next-generation sequencing genomic reports, and assist with patient registry entry.', 'Diagnostic Reasoning & Differential Formulation', 25, 4, 28000.00, 'open', 2)
ON CONFLICT (id) DO UPDATE SET
    title = EXCLUDED.title,
    department = EXCLUDED.department,
    description = EXCLUDED.description,
    required_skill = EXCLUDED.required_skill,
    payment = EXCLUDED.payment,
    status = EXCLUDED.status;

-- Seed Hospital Residencies & Clinical Jobs
INSERT INTO jobs (id, company_id, company, title, location, type, duration, stipend, openings, required_skills, eligibility, description, deadline, status, apps)
VALUES
(1, 1, 'AIIMS New Delhi', 'Junior Resident (Non-Academic) - Emergency Medicine', 'New Delhi', 'Full-Time Residency', '12 Months', '₹95,000/month', 6, ARRAY['ACLS/BLS Certification', 'Bedside Ultrasound (POCUS)', 'Triage Assessment'], 'MBBS Degree with MCI/SMC Permanent Registration', 'Manage acute resuscitations, procedural sedations, and trauma activations in a state-of-the-art Level-1 trauma center.', '2026-10-15', 'Active', 58),
(2, 2, 'Fortis Memorial Research Institute', 'Clinical Fellow - Advanced Cardiology & Heart Failure', 'Gurugram, NCR', 'Fellowship', '24 Months', '₹1,15,000/month', 3, ARRAY['Echocardiography Interpretation', 'Invasive Line Insertion', 'Heart Failure Protocols'], 'MD/DNB General Medicine or Pediatrics', 'Supervised participation in catheterization lab, coronary care unit (CCU), and outpatient heart failure clinic.', '2026-10-20', 'Active', 34),
(3, 3, 'Apollo Hospitals & Health City', 'Clinical Research Associate (Oncology Trials)', 'Hyderabad / Chennai', 'Full-Time', 'Contractual (Grant Funded)', '₹65,000/month', 4, ARRAY['ICH-GCP Guidelines', 'Clinical Data Management', 'Protocol Compliance'], 'MBBS / BDS / Allied Health Master Degree', 'Liaison with sponsor monitors, prepare ethics committee submissions, and ensure electronic case report form data integrity.', '2026-10-28', 'Active', 27),
(4, 4, 'Tata Memorial Centre', 'Senior Resident - Radiation & Medical Oncology', 'Mumbai', 'Residency (Academic)', '36 Months', '₹1,05,000/month', 5, ARRAY['Targeted Therapy Regimens', 'Radiotherapy Planning', 'Palliative Symptom Management'], 'MD Radiotherapy / MD Medicine', 'Comprehensive multi-modality oncology training across outpatient, inpatient, and clinical trial cohorts.', '2026-11-05', 'Active', 42)
ON CONFLICT (id) DO UPDATE SET
    company = EXCLUDED.company,
    title = EXCLUDED.title,
    location = EXCLUDED.location,
    type = EXCLUDED.type,
    stipend = EXCLUDED.stipend,
    eligibility = EXCLUDED.eligibility,
    description = EXCLUDED.description,
    status = EXCLUDED.status;

-- Seed Experience Passport Records
INSERT INTO experience_records (id, student_id, title, company_id, hospital_name, experience_type, verified, score, hash, verification_authority)
VALUES
(1, 1, 'Emergency Medicine & ACLS Resuscitation Clinical Rotation', 1, 'AIIMS New Delhi', 'Clinical Rotation & Logbook', TRUE, 96, '0x7f4b8921e90a88dfb2938491038294a0', 'National Medical Commission Digital Verifier'),
(2, 1, 'ICMR Multicenter Observational Trial on Sepsis Biomarkers', 2, 'Fortis Memorial Research Institute', 'ICMR Research Grant Assistantship', TRUE, 92, '0x3c991a4b882dfa71029384102938ab01', 'Indian Council of Medical Research (ICMR)'),
(3, 1, 'Point-of-Care Ultrasound (POCUS) Simulation Assessment', 3, 'Apollo Hospitals Simulation Center', 'Simulation Competency Certification', TRUE, 89, '0x99a81b2c4d5e6f7a8b9c0d1e2f3a4b5c', 'Society of Critical Care Medicine')
ON CONFLICT (id) DO NOTHING;

-- Seed Research Projects
INSERT INTO research_projects (id, title, principal_investigator, institution, funding_agency, study_type, department, open_positions, required_skills, stipend_or_grant, status)
VALUES
(1, 'Early Biomarkers of Acute Kidney Injury in Septic Shock Patients', 'Prof. Dr. Arvind Sharma', 'AIIMS New Delhi', 'ICMR Senior Research Fellowship', 'Prospective Cohort Study', 'Critical Care & Nephrology', 2, ARRAY['Urine Biomarker Assays', 'Clinical Data Extraction', 'Statistical Analysis in R'], '₹35,000/month + Contingency', 'Recruiting Student Investigators'),
(2, 'AI-Augmented Electrocardiogram Screening for Asymptomatic Left Ventricular Dysfunction', 'Dr. Vikramaditya Roy', 'PGIMER Chandigarh & MedTech Hub', 'Department of Biotechnology (DBT) Grant', 'Diagnostic Accuracy Trial', 'Cardiology & Health Informatics', 3, ARRAY['12-Lead ECG Analysis', 'Deep Learning Model Validation', 'Patient Consent Ethics'], '₹40,000/month', 'Recruiting Student Investigators')
ON CONFLICT (id) DO NOTHING;

-- Seed Default Authentication Users (Bcrypt hash for "password123": $2a$10$7vI6V2tB5k3K7MeqY.v6jOlBsz2vYQ6.Fw8Lg6gT8x3U6kEwG49l2)
INSERT INTO users (id, name, email, password_hash, role, student_id, mentor_id, company_id)
VALUES
(1, 'Dr. Adarsh Pratap Singh', 'adarsh@aiims.edu', '$2a$10$7vI6V2tB5k3K7MeqY.v6jOlBsz2vYQ6.Fw8Lg6gT8x3U6kEwG49l2', 'student', 1, NULL, NULL),
(2, 'Prof. Dr. Vikramaditya Roy', 'vikramaditya.roy@pgimer.edu.in', '$2a$10$7vI6V2tB5k3K7MeqY.v6jOlBsz2vYQ6.Fw8Lg6gT8x3U6kEwG49l2', 'mentor', NULL, 1, NULL),
(3, 'Dr. Arvind K. Sharma', 'dean.medical@aiims.edu', '$2a$10$7vI6V2tB5k3K7MeqY.v6jOlBsz2vYQ6.Fw8Lg6gT8x3U6kEwG49l2', 'hod', NULL, NULL, NULL),
(4, 'Dr. Rajiv Khanna', 'recruitment@fortishealthcare.com', '$2a$10$7vI6V2tB5k3K7MeqY.v6jOlBsz2vYQ6.Fw8Lg6gT8x3U6kEwG49l2', 'recruiter', NULL, NULL, 2)
ON CONFLICT (id) DO UPDATE SET
    name = EXCLUDED.name,
    email = EXCLUDED.email,
    role = EXCLUDED.role,
    student_id = EXCLUDED.student_id,
    mentor_id = EXCLUDED.mentor_id,
    company_id = EXCLUDED.company_id;

-- Seed Primary Helpdesk Ticket
INSERT INTO helpdesk_tickets (id, student_id, category, title, description, priority, status, ai_summary)
VALUES
(1, 1, 'Clinical Electives & Rotations', 'Verification of Compulsory Rotatory Medical Internship (CRMI) Hours', 'Requesting digital NMC hash attestation for 4-week Emergency Medicine rotation completed at Apex Trauma Center.', 'high', 'in_progress', 'Student requesting digital ledger verification for 4-week ER rotation completion.')
ON CONFLICT (id) DO NOTHING;

-- Synchronize sequences with seeded IDs
SELECT setval('students_id_seq', (SELECT COALESCE(MAX(id), 1) FROM students));
SELECT setval('skills_id_seq', (SELECT COALESCE(MAX(id), 1) FROM skills));
SELECT setval('companies_id_seq', (SELECT COALESCE(MAX(id), 1) FROM companies));
SELECT setval('mentors_id_seq', (SELECT COALESCE(MAX(id), 1) FROM mentors));
SELECT setval('gigs_id_seq', (SELECT COALESCE(MAX(id), 1) FROM gigs));
SELECT setval('experience_records_id_seq', (SELECT COALESCE(MAX(id), 1) FROM experience_records));
SELECT setval('research_projects_id_seq', (SELECT COALESCE(MAX(id), 1) FROM research_projects));
SELECT setval('users_id_seq', (SELECT COALESCE(MAX(id), 1) FROM users));
SELECT setval('jobs_id_seq', (SELECT COALESCE(MAX(id), 1) FROM jobs));
SELECT setval('helpdesk_tickets_id_seq', (SELECT COALESCE(MAX(id), 1) FROM helpdesk_tickets));
