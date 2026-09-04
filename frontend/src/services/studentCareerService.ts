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
  MentorSession,
  StudentProfile,
  Gig,
  Mentor,
  PassportRecord
} from '../types';

import { 
  INITIAL_SKILLS, 
  INITIAL_SKILL_GAPS, 
  INITIAL_OPPORTUNITIES, 
  INITIAL_APPLICATIONS, 
  INITIAL_COURSES, 
  INITIAL_PROJECTS, 
  INITIAL_CERTIFICATIONS, 
  INITIAL_ACHIEVEMENTS, 
  INITIAL_ASSESSMENT_RESULTS, 
  INITIAL_MENTOR_SESSIONS,
  ASSESSMENT_CATEGORIES
} from '../data/studentCareerData';
import { fetchJobs } from './api';

// Local storage key constants
const STORAGE_KEYS = {
  SKILLS: 'sb_student_skills_v1',
  SKILL_GAPS: 'sb_student_skill_gaps_v1',
  OPPORTUNITIES: 'sb_student_opportunities_v1',
  APPLICATIONS: 'sb_student_applications_v1',
  COURSES: 'sb_student_courses_v1',
  PROJECTS: 'sb_student_projects_v1',
  CERTIFICATIONS: 'sb_student_certifications_v1',
  ACHIEVEMENTS: 'sb_student_achievements_v1',
  ASSESSMENT_RESULTS: 'sb_student_assessment_results_v1',
  MENTOR_SESSIONS: 'sb_student_mentor_sessions_v1',
  CUSTOM_PORTFOLIO: 'sb_student_custom_portfolio_v1'
};

function getFromStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch (e) {
    return fallback;
  }
}

function saveToStorage<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.warn('Storage save failed:', e);
  }
}

// ==========================================
// 1. SKILLS & SCORES MANAGEMENT
// ==========================================
export function getStudentSkills(): SkillItem[] {
  return getFromStorage<SkillItem[]>(STORAGE_KEYS.SKILLS, INITIAL_SKILLS);
}

export function saveStudentSkills(skills: SkillItem[]): void {
  saveToStorage(STORAGE_KEYS.SKILLS, skills);
}

export function calculateReadinessMetrics(skills: SkillItem[] = getStudentSkills()) {
  const technicalSkills = skills.filter(s => s.category === 'technical');
  const softSkills = skills.filter(s => s.category === 'soft');

  const techScore = technicalSkills.length > 0 
    ? Math.round(technicalSkills.reduce((acc, s) => acc + s.score, 0) / technicalSkills.length)
    : 81;

  const softScore = softSkills.length > 0
    ? Math.round(softSkills.reduce((acc, s) => acc + s.score, 0) / softSkills.length)
    : 68;

  const overallScore = Math.round((techScore * 0.65) + (softScore * 0.35));
  
  // Industry readiness is weighted by requirement alignment
  const requiredAlignment = skills.reduce((acc, s) => {
    const ratio = Math.min(1.2, s.level / Math.max(1, s.requiredLevel));
    return acc + ratio;
  }, 0) / Math.max(1, skills.length);

  const industryReadiness = Math.min(99, Math.round(overallScore * 0.88 * requiredAlignment));

  const assessmentResults = getAssessmentResults();
  const completedAssessmentsCount = assessmentResults.length;

  return {
    overallSkillScore: overallScore,
    industryReadiness: industryReadiness,
    technicalSkillScore: techScore,
    softSkillScore: softScore,
    completedAssessmentsCount,
    assessmentStatus: completedAssessmentsCount >= 3 ? 'Proficiency Verified' : 'Assessments Incomplete'
  };
}

// ==========================================
// 2. SKILL GAP ANALYSIS
// ==========================================
export function getSkillGaps(): SkillGapItem[] {
  return getFromStorage<SkillGapItem[]>(STORAGE_KEYS.SKILL_GAPS, INITIAL_SKILL_GAPS);
}

export function updateSkillAfterAssessment(categoryTitle: string, score: number): void {
  const skills = getStudentSkills();
  const lowerCat = categoryTitle.toLowerCase();

  let targetSkillId = '';
  if (lowerCat.includes('anatomy') || lowerCat.includes('physiology')) targetSkillId = 'sk-anatomy';
  else if (lowerCat.includes('pharmaco') || lowerCat.includes('drug') || lowerCat.includes('therapeutics')) targetSkillId = 'sk-pharmacology';
  else if (lowerCat.includes('diagnos') || lowerCat.includes('clinical reasoning')) targetSkillId = 'sk-diagnostics';
  else if (lowerCat.includes('patholog') || lowerCat.includes('lab medicine')) targetSkillId = 'sk-pathology';
  else if (lowerCat.includes('patient') || lowerCat.includes('exam') || lowerCat.includes('history')) targetSkillId = 'sk-patient-exam';
  else if (lowerCat.includes('gcp') || lowerCat.includes('trial') || lowerCat.includes('research')) targetSkillId = 'sk-gcp-trials';
  else if (lowerCat.includes('biostat') || lowerCat.includes('epidemiology')) targetSkillId = 'sk-biostats';
  else if (lowerCat.includes('emergency') || lowerCat.includes('acls') || lowerCat.includes('triage')) targetSkillId = 'sk-emergency-acls';
  else if (lowerCat.includes('ethics') || lowerCat.includes('irb')) targetSkillId = 'sk-ethics-irb';
  else if (lowerCat.includes('communication') || lowerCat.includes('counseling')) targetSkillId = 'sk-comm';

  if (targetSkillId) {
    const updated = skills.map(s => {
      if (s.id === targetSkillId) {
        const newScore = Math.round((s.score * 0.3) + (score * 0.7));
        const newLevel = newScore >= 90 ? 5 : newScore >= 75 ? 4 : newScore >= 60 ? 3 : newScore >= 45 ? 2 : 1;
        return {
          ...s,
          score: newScore,
          level: newLevel,
          assessmentScore: score,
          lastAssessed: new Date().toISOString().split('T')[0],
          verified: score >= 70,
          trend: score >= s.score ? ('up' as const) : ('down' as const)
        };
      }
      return s;
    });
    saveStudentSkills(updated);
  }
}

// ==========================================
// 3. DETERMINISTIC SKILL MATCHING ALGORITHM
// ==========================================
export function calculateOpportunityMatch(
  opportunityRequiredSkills: string[],
  studentSkills: SkillItem[] = getStudentSkills()
): {
  matchPercentage: number;
  matchedSkills: string[];
  gapSkills: string[];
  isEligible: boolean;
} {
  if (!opportunityRequiredSkills || opportunityRequiredSkills.length === 0) {
    return { matchPercentage: 85, matchedSkills: [], gapSkills: [], isEligible: true };
  }

  const studentSkillMap = new Map<string, SkillItem>();
  studentSkills.forEach(s => {
    studentSkillMap.set(s.name.toLowerCase(), s);
    if (s.subCategory) studentSkillMap.set(s.subCategory.toLowerCase(), s);
  });

  const matchedSkills: string[] = [];
  const gapSkills: string[] = [];
  let totalScoreWeight = 0;

  opportunityRequiredSkills.forEach(req => {
    const reqLower = req.toLowerCase().trim();
    let found = false;

    for (const [key, skill] of studentSkillMap.entries()) {
      if (key.includes(reqLower) || reqLower.includes(key)) {
        found = true;
        if (skill.level >= skill.requiredLevel || skill.score >= 65) {
          matchedSkills.push(req);
          totalScoreWeight += Math.min(100, skill.score);
        } else {
          gapSkills.push(req);
          totalScoreWeight += Math.min(50, skill.score * 0.6);
        }
        break;
      }
    }

    if (!found) {
      gapSkills.push(req);
      totalScoreWeight += 25; // baseline knowledge
    }
  });

  const rawMatch = Math.round(totalScoreWeight / opportunityRequiredSkills.length);
  const matchPercentage = Math.min(99, Math.max(35, rawMatch));
  const isEligible = matchPercentage >= 60;

  return {
    matchPercentage,
    matchedSkills,
    gapSkills,
    isEligible
  };
}

// ==========================================
// 4. OPPORTUNITIES & APPLICATIONS
// ==========================================
export function getOpportunities(): JobOpportunity[] {
  return getFromStorage<JobOpportunity[]>(STORAGE_KEYS.OPPORTUNITIES, INITIAL_OPPORTUNITIES);
}

export function saveOpportunities(opportunities: JobOpportunity[]): void {
  saveToStorage(STORAGE_KEYS.OPPORTUNITIES, opportunities);
}

export async function fetchLiveOpportunities(): Promise<JobOpportunity[]> {
  try {
    const rawJobs = await fetchJobs();
    if (Array.isArray(rawJobs) && rawJobs.length > 0) {
      // Map API/Database jobs to JobOpportunity interface
      const dbOpportunities: JobOpportunity[] = rawJobs.map((j, idx) => {
        const skills = Array.isArray(j.requiredSkills) && j.requiredSkills.length > 0
          ? j.requiredSkills
          : (Array.isArray(j.skills) && j.skills.length > 0 ? j.skills : ['Engineering', 'Problem Solving']);

        const workMode: 'Remote' | 'Hybrid' | 'On-site' = 
          j.location?.toLowerCase().includes('remote') || j.type?.toLowerCase().includes('remote') ? 'Remote' :
          j.type?.toLowerCase().includes('hybrid') ? 'Hybrid' : 'On-site';

        const isIntern = j.title.toLowerCase().includes('intern') || 
          (j.duration && j.duration.toLowerCase().includes('month')) ||
          (j.type && j.type.toLowerCase().includes('intern'));

        const oppType: 'Full-Time' | 'Internship' | 'Contract' = 
          isIntern ? 'Internship' : 
          (j.type === 'Contract' ? 'Contract' : 'Full-Time');

        return {
          id: String(j.id || `opp-${idx}`),
          company: j.company || 'Enterprise Partner',
          title: j.title || 'Software Engineer',
          location: j.location || 'Bengaluru / Remote',
          workMode: workMode,
          opportunityType: oppType,
          duration: j.duration || (isIntern ? '6 Months' : 'Full-Time'),
          stipendOrSalary: j.stipend || j.salary || 'Competitive Stipend',
          requiredSkills: skills,
          preferredSkills: skills.slice(0, 2),
          eligibility: j.eligibility || 'B.Tech / MCA with minimum 7.0 CGPA',
          applicationDeadline: j.deadline || 'Open Until Filled',
          description: j.description || 'Verified enterprise hiring opportunity on the Ladder network.',
          responsibilities: [
            'Design, develop and maintain scalable software modules',
            'Collaborate across product and engineering teams',
            'Write clean, testable code and documentation'
          ],
          openingsCount: Number(j.openings || 2),
          postedDate: j.postedDate || new Date().toISOString().split('T')[0],
          featured: idx < 2
        };
      });

      // Merge: DB jobs first, then any initial opportunities that aren't already represented
      const existingIds = new Set(dbOpportunities.map(o => String(o.id)));
      const filteredInitial = INITIAL_OPPORTUNITIES.filter(o => !existingIds.has(String(o.id)));
      const combined = [...dbOpportunities, ...filteredInitial];

      saveOpportunities(combined);
      return combined;
    }
  } catch (err) {
    console.warn('Failed to fetch live jobs in studentCareerService:', err);
  }

  return getOpportunities();
}

export function getApplications(): ApplicationItem[] {
  return getFromStorage<ApplicationItem[]>(STORAGE_KEYS.APPLICATIONS, INITIAL_APPLICATIONS);
}

export function applyToOpportunity(
  opportunity: JobOpportunity | Gig,
  studentProfile: StudentProfile,
  opportunityType: 'Internship' | 'Job' | 'Micro-Gig' | 'Industry Project' = 'Internship'
): ApplicationItem {
  const currentApps = getApplications();
  const oppId = String(opportunity.id);

  // Check if already applied
  const existing = currentApps.find(a => a.opportunityId === oppId);
  if (existing) {
    return existing;
  }

  const reqSkills = 'requiredSkills' in opportunity && Array.isArray(opportunity.requiredSkills) 
    ? opportunity.requiredSkills 
    : ('skill' in opportunity ? [opportunity.skill] : ['Engineering']);

  const matchData = calculateOpportunityMatch(reqSkills);

  const newApp: ApplicationItem = {
    id: `app-${Date.now()}`,
    opportunityId: oppId,
    opportunityTitle: opportunity.title,
    opportunityType: opportunityType,
    company: opportunity.company,
    location: 'location' in opportunity ? opportunity.location : 'Remote',
    workMode: 'workMode' in opportunity ? (opportunity.workMode as string) : 'Remote',
    stipendOrSalary: 'stipendOrSalary' in opportunity ? opportunity.stipendOrSalary : `₹${'payment' in opportunity ? opportunity.payment : 'Competitive'}`,
    status: 'Applied',
    appliedDate: new Date().toISOString().split('T')[0],
    lastUpdated: new Date().toISOString().split('T')[0],
    deadline: 'applicationDeadline' in opportunity ? (opportunity.applicationDeadline as string) : 'Open',
    matchScore: matchData.matchPercentage,
    notes: `Application lodged with ${studentProfile.name}'s verified Ladder profile.`,
    timeline: [
      { status: 'Applied', date: new Date().toISOString().split('T')[0], note: 'Application and Skill DNA submitted successfully', completed: true },
      { status: 'Under Review', date: 'In 24-48 hours', note: 'Automated profile & portfolio verification', completed: false },
      { status: 'Shortlisted', date: 'Pending', note: 'Recruiter cohort shortlisting', completed: false },
      { status: 'Interview', date: 'Pending', note: 'Technical evaluation round', completed: false },
      { status: 'Selected', date: 'Pending', note: 'Final selection and onboarding', completed: false }
    ]
  };

  const updated = [newApp, ...currentApps];
  saveToStorage(STORAGE_KEYS.APPLICATIONS, updated);
  return newApp;
}

export function withdrawApplication(appId: string): void {
  const currentApps = getApplications();
  const updated = currentApps.map(a => {
    if (a.id === appId) {
      return {
        ...a,
        status: 'Withdrawn' as const,
        lastUpdated: new Date().toISOString().split('T')[0],
        timeline: [
          ...a.timeline,
          { status: 'Withdrawn' as const, date: new Date().toISOString().split('T')[0], note: 'Application retracted by student candidate', completed: true }
        ]
      };
    }
    return a;
  });
  saveToStorage(STORAGE_KEYS.APPLICATIONS, updated);
}

// ==========================================
// 5. LEARNING HUB
// ==========================================
export function getLearningCourses(): LearningCourse[] {
  return getFromStorage<LearningCourse[]>(STORAGE_KEYS.COURSES, INITIAL_COURSES);
}

export function updateCourseProgress(courseId: string, deltaModules: number = 1): LearningCourse[] {
  const courses = getLearningCourses();
  const updated = courses.map(c => {
    if (c.id === courseId) {
      const newCompleted = Math.min(c.modulesCount, c.completedModules + deltaModules);
      const newPercent = Math.round((newCompleted / c.modulesCount) * 100);
      const newStatus = newPercent >= 100 ? ('Completed' as const) : ('In Progress' as const);
      return {
        ...c,
        completedModules: newCompleted,
        progressPercent: newPercent,
        status: newStatus,
        enrolledDate: c.enrolledDate || new Date().toISOString().split('T')[0]
      };
    }
    return c;
  });
  saveToStorage(STORAGE_KEYS.COURSES, updated);
  return updated;
}

// ==========================================
// 6. PROJECTS & CHALLENGES
// ==========================================
export function getProjects(): ProjectItem[] {
  return getFromStorage<ProjectItem[]>(STORAGE_KEYS.PROJECTS, INITIAL_PROJECTS);
}

export function saveProjects(projects: ProjectItem[]): void {
  saveToStorage(STORAGE_KEYS.PROJECTS, projects);
}

export function addProject(project: Omit<ProjectItem, 'id'>): ProjectItem {
  const current = getProjects();
  const newProj: ProjectItem = {
    ...project,
    id: `proj-${Date.now()}`
  };
  const updated = [newProj, ...current];
  saveToStorage(STORAGE_KEYS.PROJECTS, updated);
  return newProj;
}

export function joinProjectChallenge(projectId: string): void {
  const current = getProjects();
  const updated = current.map(p => {
    if (p.id === projectId) {
      return { ...p, status: 'Joined' as const };
    }
    return p;
  });
  saveToStorage(STORAGE_KEYS.PROJECTS, updated);
}

// ==========================================
// 7. CERTIFICATIONS & ACHIEVEMENTS
// ==========================================
export function getCertifications(): CertificationItem[] {
  return getFromStorage<CertificationItem[]>(STORAGE_KEYS.CERTIFICATIONS, INITIAL_CERTIFICATIONS);
}

export function saveCertifications(certs: CertificationItem[]): void {
  saveToStorage(STORAGE_KEYS.CERTIFICATIONS, certs);
}

export function addCertification(cert: Omit<CertificationItem, 'id'>): CertificationItem {
  const current = getCertifications();
  const newCert: CertificationItem = {
    ...cert,
    id: `cert-${Date.now()}`
  };
  const updated = [newCert, ...current];
  saveToStorage(STORAGE_KEYS.CERTIFICATIONS, updated);
  return newCert;
}

// ==========================================
// PORTFOLIO CUSTOM DATA & OVERRIDES
// ==========================================
export interface CustomPortfolioData {
  name?: string;
  role?: string;
  headline?: string;
  bio?: string;
  email?: string;
  phone?: string;
  location?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  portfolioUrl?: string;
  college?: string;
  degree?: string;
  batch?: string;
  cgpa?: number | string;
  experiences?: Array<{
    id: string;
    role: string;
    company: string;
    period: string;
    type: string;
    description: string;
    verified: boolean;
  }>;
}

export function getCustomPortfolioData(): CustomPortfolioData {
  return getFromStorage<CustomPortfolioData>(STORAGE_KEYS.CUSTOM_PORTFOLIO, {
    name: 'Dr. Adarsh Pratap Singh',
    role: 'Junior Resident / Clinical Fellow',
    headline: 'Clinical Intern & Medical Researcher specializing in Emergency Medicine, Critical Care, and Evidence-Based Protocols.',
    bio: 'Dedicated medical learner and clinical intern with demonstrated competencies in emergency resuscitation (ACLS/BLS), clinical pharmacology, diagnostic reasoning, and multicenter ICMR clinical research. Cryptographically verified clinical logbooks and ranked in top percentile for clinical readiness.',
    email: 'adarsh@aiims.edu',
    phone: '+91 98765 43210',
    location: 'New Delhi, India',
    githubUrl: 'https://github.com/adarshpratap-med',
    linkedinUrl: 'https://linkedin.com/in/dr-adarsh-pratap-singh',
    portfolioUrl: 'https://adarsh-med.aiims.edu',
    college: 'All India Institute of Medical Sciences (AIIMS), New Delhi',
    degree: 'Bachelor of Medicine & Bachelor of Surgery (MBBS)',
    batch: '2022 - 2027 (Clinical Intern)',
    cgpa: 8.8,
    experiences: [
      {
        id: 'exp-1',
        role: 'Emergency & Trauma Care Clinical Intern',
        company: 'AIIMS Apex Trauma Center',
        period: 'Jun 2026 – Aug 2026',
        type: 'Verified Clinical Rotation',
        description: 'Supervised emergency resuscitation, bedside POCUS ultrasound, and ICU sepsis protocol management. Verified on LADDER Medical Ledger.',
        verified: true
      },
      {
        id: 'exp-2',
        role: 'Clinical Research Fellow Assistant',
        company: 'Fortis Memorial Research Institute',
        period: 'Apr 2026 – May 2026',
        type: 'ICMR Multicentric Clinical Trial',
        description: 'Assisted in multicenter double-blind clinical trial protocol monitoring, CRF compliance, and patient adverse event reporting under ICH-GCP standards.',
        verified: true
      }
    ]
  });
}

export function saveCustomPortfolioData(data: CustomPortfolioData): void {
  saveToStorage(STORAGE_KEYS.CUSTOM_PORTFOLIO, data);
}

export function updateStudentSkills(skills: SkillItem[]): void {
  saveToStorage(STORAGE_KEYS.SKILLS, skills);
}

export function getAchievements(): AchievementItem[] {
  return getFromStorage<AchievementItem[]>(STORAGE_KEYS.ACHIEVEMENTS, INITIAL_ACHIEVEMENTS);
}

export function addAchievement(ach: Omit<AchievementItem, 'id'>): AchievementItem {
  const current = getAchievements();
  const newAch: AchievementItem = {
    ...ach,
    id: `ach-${Date.now()}`
  };
  const updated = [newAch, ...current];
  saveToStorage(STORAGE_KEYS.ACHIEVEMENTS, updated);
  return newAch;
}

// ==========================================
// 8. ASSESSMENTS ENGINE
// ==========================================
export function getAssessmentCategories(): AssessmentCategory[] {
  return ASSESSMENT_CATEGORIES;
}

export function getAssessmentResults(): AssessmentResult[] {
  return getFromStorage<AssessmentResult[]>(STORAGE_KEYS.ASSESSMENT_RESULTS, INITIAL_ASSESSMENT_RESULTS);
}

export function recordAssessmentSubmission(result: Omit<AssessmentResult, 'id'>): AssessmentResult {
  const current = getAssessmentResults();
  const newRes: AssessmentResult = {
    ...result,
    id: `res-${Date.now()}`
  };
  const updated = [newRes, ...current];
  saveToStorage(STORAGE_KEYS.ASSESSMENT_RESULTS, updated);

  // Sync skill scores
  updateSkillAfterAssessment(result.assessmentTitle, result.score);

  return newRes;
}

// ==========================================
// 9. MENTOR SESSIONS
// ==========================================
export function getMentorSessions(): MentorSession[] {
  return getFromStorage<MentorSession[]>(STORAGE_KEYS.MENTOR_SESSIONS, INITIAL_MENTOR_SESSIONS);
}

export function bookNewMentorSession(session: Omit<MentorSession, 'id'>): MentorSession {
  const current = getMentorSessions();
  const newSess: MentorSession = {
    ...session,
    id: `sess-${Date.now()}`
  };
  const updated = [newSess, ...current];
  saveToStorage(STORAGE_KEYS.MENTOR_SESSIONS, updated);
  return newSess;
}

// ==========================================
// 10. GLOBAL SEARCH ENGINE
// ==========================================
export interface SearchResultItem {
  id: string;
  type: 'skill' | 'job' | 'internship' | 'gig' | 'mentor' | 'course' | 'project';
  title: string;
  subtitle: string;
  badge?: string;
  targetTab: string;
}

export function performGlobalSearch(
  query: string,
  gigs: Gig[] = [],
  mentors: Mentor[] = []
): SearchResultItem[] {
  if (!query || query.trim().length === 0) return [];
  const q = query.toLowerCase().trim();
  const results: SearchResultItem[] = [];

  // 1. Search skills
  getStudentSkills().forEach(s => {
    if (s.name.toLowerCase().includes(q) || s.subCategory?.toLowerCase().includes(q)) {
      results.push({
        id: s.id,
        type: 'skill',
        title: s.name,
        subtitle: `Level ${s.level} • ${s.category.toUpperCase()} • Score: ${s.score}%`,
        badge: s.verified ? 'Verified' : 'Pending',
        targetTab: 'skills'
      });
    }
  });

  // 2. Search Jobs & Internships
  getOpportunities().forEach(opp => {
    if (
      opp.title.toLowerCase().includes(q) ||
      opp.company.toLowerCase().includes(q) ||
      opp.requiredSkills.some(s => s.toLowerCase().includes(q))
    ) {
      results.push({
        id: opp.id,
        type: opp.opportunityType === 'Internship' ? 'internship' : 'job',
        title: opp.title,
        subtitle: `${opp.company} • ${opp.location} • ${opp.stipendOrSalary}`,
        badge: opp.opportunityType,
        targetTab: 'jobs'
      });
    }
  });

  // 3. Search Gigs
  gigs.forEach(g => {
    if (g.title.toLowerCase().includes(q) || g.company.toLowerCase().includes(q) || g.skill.toLowerCase().includes(q)) {
      results.push({
        id: String(g.id),
        type: 'gig',
        title: g.title,
        subtitle: `${g.company} • ₹${g.payment} • ${g.hours} Hours`,
        badge: 'Micro-Gig',
        targetTab: 'gigs'
      });
    }
  });

  // 4. Search Mentors
  mentors.forEach(m => {
    if (m.name.toLowerCase().includes(q) || m.company.toLowerCase().includes(q) || m.role.toLowerCase().includes(q)) {
      results.push({
        id: String(m.id),
        type: 'mentor',
        title: m.name,
        subtitle: `${m.role} @ ${m.company} • ${m.experience} Yrs Experience`,
        badge: `${m.match}% Match`,
        targetTab: 'mentors'
      });
    }
  });

  // 5. Search Courses
  getLearningCourses().forEach(c => {
    if (c.title.toLowerCase().includes(q) || c.skillsCovered.some(s => s.toLowerCase().includes(q))) {
      results.push({
        id: c.id,
        type: 'course',
        title: c.title,
        subtitle: `${c.provider} • ${c.duration} • ${c.status}`,
        badge: c.level,
        targetTab: 'learning'
      });
    }
  });

  // 6. Search Projects
  getProjects().forEach(p => {
    if (p.title.toLowerCase().includes(q) || p.requiredSkills.some(s => s.toLowerCase().includes(q))) {
      results.push({
        id: p.id,
        type: 'project',
        title: p.title,
        subtitle: `${p.type} • ${p.duration} • ${p.status}`,
        badge: p.status,
        targetTab: 'projects'
      });
    }
  });

  return results.slice(0, 8);
}
