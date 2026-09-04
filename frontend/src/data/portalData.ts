import { 
  SkillItem, 
  JobOpportunity
} from '../types';

export {
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
} from './studentCareerData';

// Helper calculations for Healthcare Skills
export function calculateOverallSkillScore(skills: SkillItem[]): number {
  if (!skills.length) return 84;
  const total = skills.reduce((acc, s) => acc + s.score, 0);
  return Math.round(total / skills.length);
}

export function calculateTechnicalSkillScore(skills: SkillItem[]): number {
  const tech = skills.filter(s => s.category === 'technical');
  if (!tech.length) return 82;
  const total = tech.reduce((acc, s) => acc + s.score, 0);
  return Math.round(total / tech.length);
}

export function calculateSoftSkillScore(skills: SkillItem[]): number {
  const soft = skills.filter(s => s.category === 'soft');
  if (!soft.length) return 85;
  const total = soft.reduce((acc, s) => acc + s.score, 0);
  return Math.round(total / soft.length);
}

export function calculateIndustryReadiness(skills: SkillItem[]): number {
  if (!skills.length) return 80;
  let matches = 0;
  skills.forEach(s => {
    if (s.level >= s.requiredLevel) {
      matches += 1;
    } else {
      matches += s.level / s.requiredLevel;
    }
  });
  return Math.min(100, Math.round((matches / skills.length) * 100));
}

// Deterministic matching between student healthcare skills and clinical/hospital opportunity
export function calculateJobMatch(job: JobOpportunity, skills: SkillItem[]): {
  matchScore: number;
  matchedSkills: string[];
  missingSkills: string[];
  isEligible: boolean;
} {
  const studentSkillNames = new Set(skills.map(s => s.name.toLowerCase()));
  const matchedSkills: string[] = [];
  const missingSkills: string[] = [];

  job.requiredSkills.forEach(req => {
    const isMatched = Array.from(studentSkillNames).some(sk => 
      sk.includes(req.toLowerCase()) || req.toLowerCase().includes(sk)
    );
    if (isMatched) {
      matchedSkills.push(req);
    } else {
      missingSkills.push(req);
    }
  });

  const baseMatch = job.requiredSkills.length > 0
    ? (matchedSkills.length / job.requiredSkills.length) * 85
    : 80;

  // bonus for preferred skills
  let bonus = 0;
  if (job.preferredSkills) {
    job.preferredSkills.forEach(pref => {
      if (Array.from(studentSkillNames).some(sk => sk.includes(pref.toLowerCase()) || pref.toLowerCase().includes(sk))) {
        bonus += 5;
      }
    });
  }

  const matchScore = Math.min(98, Math.round(baseMatch + bonus));
  const isEligible = matchedSkills.length >= Math.ceil(job.requiredSkills.length * 0.5);

  return {
    matchScore,
    matchedSkills,
    missingSkills,
    isEligible
  };
}
