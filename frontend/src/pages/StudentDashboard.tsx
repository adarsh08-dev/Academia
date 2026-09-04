import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Sparkles, 
  ArrowRight, 
  Briefcase, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  TrendingUp, 
  ExternalLink,
  ChevronRight,
  Code,
  Dna,
  Clock,
  Award,
  AlertTriangle,
  Zap,
  BookOpen,
  MapPin,
  Building2,
  Calendar,
  CheckCircle,
  FileCheck2,
  BarChart3,
  Bot
} from 'lucide-react';
import { StudentProfile, Mentor, Gig, PassportRecord, JobOpportunity } from '../types';
import { SkillTwinAndQuests } from '../components/SkillTwinAndQuests';
import { 
  getStudentSkills, 
  getSkillGaps, 
  getOpportunities, 
  fetchLiveOpportunities,
  calculateReadinessMetrics, 
  calculateOpportunityMatch 
} from '../services/studentCareerService';

interface StudentDashboardProps {
  student: StudentProfile | null;
  mentors: Mentor[];
  gigs: Gig[];
  passport: PassportRecord[];
  onNavigate: (tab: string) => void;
  onOpenProfile: () => void;
  onBookMentor: (mentor: Mentor) => void;
  onApplyGig: (gig: Gig) => void;
  onApplyJob?: (job: JobOpportunity) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  student,
  mentors,
  gigs,
  passport,
  onNavigate,
  onOpenProfile,
  onBookMentor,
  onApplyGig,
  onApplyJob
}) => {
  const [skills, setSkills] = useState(() => getStudentSkills());
  const [skillGaps, setSkillGaps] = useState(() => getSkillGaps());
  const [jobs, setJobs] = useState<JobOpportunity[]>(() => getOpportunities());

  useEffect(() => {
    setSkills(getStudentSkills());
    setSkillGaps(getSkillGaps());
    setJobs(getOpportunities());

    // Fetch live opportunities from backend/database
    fetchLiveOpportunities().then(live => {
      if (live && live.length > 0) {
        setJobs(live);
      }
    });
  }, []);

  const readiness = React.useMemo(() => calculateReadinessMetrics(skills), [skills]);
  const overallScore = readiness.overallSkillScore;
  const techScore = readiness.technicalScore;
  const softScore = readiness.softScore;
  const industryReadiness = readiness.industryReadiness;

  const strongSkills = skills.filter(s => s.level >= 4);
  const skillsToImprove = skillGaps.filter(s => s.gapStatus !== 'Mastered').slice(0, 4);

  return (
    <div className="space-y-6 animate-fade-in select-none">
      {/* 1. HERO BANNER */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#121A46] via-[#10173F] to-[#0A0F2E] border border-[#1E2B68] relative overflow-hidden shadow-xl">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#7C5CFC]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-xl">


            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              Welcome back, {student?.name?.split(' ')[0] || 'Dr. Adarsh'}
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              Targeting <strong className="text-white">{student?.targetRole || 'Junior Resident / Clinical Fellow'}</strong> at leading academic medical centers and healthcare institutions. Your verified clinical competencies are on track for top-percentile residency matching.
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-5">
              <button
                onClick={() => onNavigate('career-ladder')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#10B981] to-[#06B6D4] hover:opacity-95 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-emerald-500/25 transition-all cursor-pointer"
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>7-Step Career Ladder</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => onNavigate('jobs')}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] hover:opacity-95 text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-purple-500/25 transition-all cursor-pointer"
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Hospital Rotations & Jobs</span>
              </button>

              <button
                onClick={() => onNavigate('assessment')}
                className="px-4 py-2 rounded-xl bg-[#141D4E] hover:bg-[#1D296C] border border-[#243378] text-slate-200 text-xs font-bold flex items-center gap-2 transition-all cursor-pointer"
              >
                <Award className="w-3.5 h-3.5 text-cyan-400" />
                <span>Clinical Assessment</span>
              </button>

              <button
                onClick={() => onNavigate('advisor')}
                className="px-3.5 py-2 rounded-xl bg-[#0E1538] hover:bg-[#18214D] border border-[#1E2964] text-[#C4B5FD] text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Bot className="w-3.5 h-3.5 text-[#A78BFA]" />
                <span>AI Clinical Advisor</span>
              </button>
            </div>
          </div>

          {/* READINESS GAUGES */}
          <div className="grid grid-cols-2 gap-3.5 w-full lg:w-auto lg:min-w-[280px] min-w-0">
            <div className="p-4 rounded-xl bg-[#0B1033] border border-[#1E2B68] text-center flex flex-col justify-center shadow-md">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Clinical Readiness</span>
              <div className="text-3xl font-black text-emerald-400 my-1">{industryReadiness}%</div>
              <div className="w-full bg-[#182352] h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full rounded-full transition-all duration-500" style={{ width: `${industryReadiness}%` }}></div>
              </div>
              <span className="text-[9.5px] text-emerald-300/80 font-medium mt-1">Residency Match Qualified</span>
            </div>

            <div className="p-4 rounded-xl bg-[#0B1033] border border-[#1E2B68] text-center flex flex-col justify-center shadow-md">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Clinical Skill DNA</span>
              <div className="text-3xl font-black text-[#A78BFA] my-1">{overallScore}%</div>
              <div className="w-full bg-[#182352] h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-[#7C5CFC] to-[#6366F1] h-full rounded-full transition-all duration-500" style={{ width: `${overallScore}%` }}></div>
              </div>
              <span className="text-[9.5px] text-purple-300/80 font-medium mt-1">{skills.length} Verified Competencies</span>
            </div>
          </div>
        </div>
      </div>

      <SkillTwinAndQuests />

      {/* 2. SKILL READINESS OVERVIEW & SKILL GAP SUMMARY (GRID) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* A. SKILL READINESS OVERVIEW */}
        <div className="lg:col-span-5 p-5 rounded-2xl bg-[#0B1033] border border-[#1C265E] flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-[#7C5CFC]/20 text-[#A78BFA] flex items-center justify-center">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">Clinical Readiness Overview</h2>
                  <p className="text-[11px] text-slate-400">Diagnostic benchmark against NMC/NABH & residency competencies</p>
                </div>
              </div>
            </div>

            {/* Score Metric Cards */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 rounded-xl bg-[#0E1538] border border-[#1E2964]">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Clinical Skills & Diagnostics</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-black text-cyan-400">{techScore}%</span>
                  <span className="text-[10px] text-emerald-400 font-bold">+5% this rotation</span>
                </div>
                <div className="w-full bg-[#182352] h-1.5 rounded-full overflow-hidden mt-2">
                  <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${techScore}%` }}></div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0E1538] border border-[#1E2964]">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Patient Care & Clinical Ethics</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-black text-pink-400">{softScore}%</span>
                  <span className="text-[10px] text-slate-400 font-medium">Proficient</span>
                </div>
                <div className="w-full bg-[#182352] h-1.5 rounded-full overflow-hidden mt-2">
                  <div className="bg-pink-400 h-full rounded-full" style={{ width: `${softScore}%` }}></div>
                </div>
              </div>
            </div>

            {/* Assessment Completion Status */}
            <div className="p-3.5 rounded-xl bg-[#0E1538] border border-[#1E2964] mb-4">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-slate-300 font-semibold flex items-center gap-1.5">
                  <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
                  Clinical Competency Exams
                </span>
                <span className="text-emerald-400 font-bold">3 of 4 Completed</span>
              </div>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1">✓ Emergency Triage & ACLS Resuscitation</span>
                  <span className="text-slate-400 font-mono">94%</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1">✓ Diagnostic Imaging & ECG Interpretation</span>
                  <span className="text-slate-400 font-mono">88%</span>
                </div>
                <div className="flex items-center justify-between text-amber-300">
                  <span className="flex items-center gap-1">⏳ Clinical Pharmacology & Stewardship</span>
                  <span className="text-amber-400 font-semibold">Ready to Take</span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('skills')}
            className="w-full py-2.5 rounded-xl bg-[#141D4E] hover:bg-[#1D296C] border border-[#243378] text-[#C4B5FD] text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>View Full Clinical Competencies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* B. SKILL GAP SUMMARY */}
        <div className="lg:col-span-7 p-5 rounded-2xl bg-[#0B1033] border border-[#1C265E] flex flex-col justify-between shadow-lg">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-sm font-bold text-white">Clinical Skill Gap Summary</h2>
                  <p className="text-[11px] text-slate-400">Target Role: {student?.targetRole || 'Junior Resident / Clinical Fellow'}</p>
                </div>
              </div>

              <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-1 rounded-lg border border-amber-500/20">
                {skillsToImprove.length} Priority Gaps
              </span>
            </div>

            {/* Top Strengths */}
            <div className="mb-3.5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                Verified Clinical Strengths (Ready)
              </span>
              <div className="flex flex-wrap gap-2">
                {strongSkills.slice(0, 3).map(s => (
                  <span key={s.id} className="text-xs bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1.5">
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    {s.name} (L{s.level})
                  </span>
                ))}
              </div>
            </div>

            {/* Gap List */}
            <div className="space-y-2 mb-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Priority Procedures to Improve
              </span>

              {skillsToImprove.map((gap, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-[#0E1538] border border-[#1E2964] flex items-center justify-between gap-3 text-xs">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white truncate">{gap.skill}</span>
                      <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded ${
                        gap.gapStatus === 'Critical Gap' 
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                          : gap.gapStatus === 'Moderate Gap'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      }`}>
                        {gap.gapStatus}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Current: <strong className="text-white font-medium">L{gap.currentLevel}</strong> · Required: <strong className="text-indigo-300 font-bold">L{gap.requiredLevel}</strong> · Impact: <strong className="text-amber-300 font-semibold">{gap.impactOnPlacement}</strong>
                    </p>
                  </div>

                  <button
                    onClick={() => onNavigate('learning')}
                    className="px-2.5 py-1.5 rounded-lg bg-[#7C5CFC]/20 hover:bg-[#7C5CFC]/30 text-[#C4B5FD] text-[11px] font-bold shrink-0 transition-colors cursor-pointer"
                  >
                    Bridge Gap
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => onNavigate('skill-gap')}
            className="w-full py-2.5 rounded-xl bg-[#141D4E] hover:bg-[#1D296C] border border-[#243378] text-[#C4B5FD] text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <span>View Full Clinical Gap Matrix & Roadmap</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 3. RECOMMENDED OPPORTUNITIES (JOBS & INTERNSHIPS) */}
      <div className="p-5 rounded-2xl bg-[#0B1033] border border-[#1C265E] shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Recommended Opportunities for You</h2>
              <p className="text-[11px] text-slate-400">Deterministic algorithmic match based on your verified skills</p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('jobs')}
            className="text-xs font-bold text-[#A78BFA] hover:text-white flex items-center gap-1 transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>Browse All Openings ({jobs.length})</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.slice(0, 3).map((job) => {
            const match = calculateOpportunityMatch(job.requiredSkills, skills);
            return (
              <div 
                key={job.id} 
                className="p-4 rounded-xl bg-[#0E1538] border border-[#1E2964] hover:border-[#7C5CFC] transition-all flex flex-col justify-between group shadow-sm"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block truncate">
                        {job.company}
                      </span>
                      <h3 className="text-xs font-bold text-white group-hover:text-[#C4B5FD] transition-colors line-clamp-1">
                        {job.title}
                      </h3>
                    </div>
                    <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20 shrink-0">
                      {match.matchPercentage}% Match
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-3">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-slate-400" /> {job.location}</span>
                    <span>•</span>
                    <span className="text-indigo-300 font-semibold">{job.workMode}</span>
                  </div>

                  <div className="p-2 rounded-lg bg-[#090D25] border border-white/5 mb-3">
                    <span className="text-[10px] text-slate-400 block">Package / Stipend:</span>
                    <span className="text-xs font-black text-emerald-400">{job.stipendOrSalary}</span>
                  </div>

                  {/* Required Skill Match Indicators */}
                  <div className="mb-4">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                      Skill Alignment:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {job.requiredSkills.map((sk, sIdx) => {
                        const isMatched = match.matchedSkills.includes(sk);
                        return (
                          <span 
                            key={sIdx} 
                            className={`text-[10px] px-2 py-0.5 rounded font-medium flex items-center gap-1 ${
                              isMatched 
                                ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20' 
                                : 'bg-white/5 text-slate-400 border border-white/10'
                            }`}
                          >
                            {isMatched ? '✓' : '○'} {sk}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-[#18214D]">
                  <button
                    onClick={() => onNavigate('jobs')}
                    className="flex-1 py-1.5 rounded-lg bg-[#141C48] hover:bg-[#1D296C] text-slate-200 text-xs font-semibold transition-colors cursor-pointer text-center"
                  >
                    View Details
                  </button>
                  <button
                    onClick={() => {
                      if (onApplyJob) {
                        onApplyJob(job);
                      } else {
                        onNavigate('jobs');
                      }
                    }}
                    className="flex-1 py-1.5 rounded-lg bg-[#7C5CFC] hover:bg-[#6D4AE8] text-white text-xs font-bold shadow transition-all cursor-pointer text-center"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4. CLINICAL ACTION RECOMMENDATIONS */}
      <div className="p-4 rounded-xl bg-[#0E1538] border border-[#1E2964]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <h3 className="text-xs font-extrabold text-white uppercase tracking-wider">AI Recommended Clinical Next Actions</h3>
          </div>
          <span className="text-[10px] font-bold text-slate-400">Target Competency: Clinical Pharmacology & Sepsis Protocol</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div 
            onClick={() => onNavigate('career-ladder')}
            className="p-3 rounded-lg bg-[#141C48] border border-[#232F6E] hover:border-[#7C5CFC] cursor-pointer transition-all flex items-start gap-3 group"
          >
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300 mt-0.5">
              <TrendingUp className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white group-hover:text-[#C4B5FD] transition-colors">Solve Clinical Case Simulation</p>
              <p className="text-[11px] text-slate-400 mt-0.5">+15 points to clinical readiness on successful triage.</p>
            </div>
          </div>

          <div 
            onClick={() => onNavigate('mentors')}
            className="p-3 rounded-lg bg-[#141C48] border border-[#232F6E] hover:border-[#7C5CFC] cursor-pointer transition-all flex items-start gap-3 group"
          >
            <div className="p-2 rounded-lg bg-pink-500/20 text-pink-300 mt-0.5">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white group-hover:text-[#C4B5FD] transition-colors">Book Clinician Mentor Match</p>
              <p className="text-[11px] text-slate-400 mt-0.5">15-min grand rounds case review with AIIMS Consultant.</p>
            </div>
          </div>

          <div 
            onClick={() => onNavigate('projects')}
            className="p-3 rounded-lg bg-[#141C48] border border-[#232F6E] hover:border-[#7C5CFC] cursor-pointer transition-all flex items-start gap-3 group"
          >
            <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 mt-0.5">
              <Code className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white group-hover:text-[#C4B5FD] transition-colors">Join ICMR Research Cohort</p>
              <p className="text-[11px] text-slate-400 mt-0.5">Multi-centric observational trial with publication credit.</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. TWO-COLUMN SPLIT: ACTIVE GIGS & MENTOR MATCHES */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Micro-Internship Gigs */}
        <div className="p-5 rounded-2xl bg-[#0B1033] border border-[#1C265E] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-amber-400" />
                <h2 className="text-sm font-bold text-white">Clinical Micro-Rotations & Observerships</h2>
              </div>
              <button
                onClick={() => onNavigate('gigs')}
                className="text-xs font-bold text-[#A78BFA] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>View All ({gigs.length})</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3">
              {gigs.slice(0, 3).map((gig) => (
                <div
                  key={gig.id}
                  className="p-3.5 rounded-xl bg-[#0E1538] border border-[#1E2964] hover:border-[#7C5CFC] transition-all flex items-center justify-between gap-4"
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold text-slate-400">{gig.company}</span>
                      <span className="text-[9px] bg-indigo-500/20 text-[#C4B5FD] px-1.5 py-0.5 rounded font-bold">{gig.skill}</span>
                    </div>
                    <p className="text-xs font-bold text-white truncate">{gig.title}</p>
                    <p className="text-[11px] text-emerald-400 font-extrabold mt-1">₹{gig.payment} · {gig.hours} Hours</p>
                  </div>

                  <button
                    onClick={() => onApplyGig(gig)}
                    className="px-3 py-1.5 rounded-lg bg-[#7C5CFC] hover:bg-[#6D4AE8] text-white text-[11px] font-bold shrink-0 shadow transition-all cursor-pointer"
                  >
                    Apply
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Mentors */}
        <div className="p-5 rounded-2xl bg-[#0B1033] border border-[#1C265E] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-pink-400" />
                <h2 className="text-sm font-bold text-white">Clinician & Specialist Mentors</h2>
              </div>
              <button
                onClick={() => onNavigate('mentors')}
                className="text-xs font-bold text-[#A78BFA] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
              >
                <span>Browse Clinicians ({mentors.length})</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-3">
              {mentors.slice(0, 3).map((m) => (
                <div
                  key={m.id}
                  className="p-3.5 rounded-xl bg-[#0E1538] border border-[#1E2964] hover:border-[#7C5CFC] transition-all flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7C5CFC] to-[#EC4899] flex items-center justify-center font-bold text-white text-xs shrink-0 shadow">
                      {m.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-xs font-bold text-white truncate">{m.name}</p>
                        <span className="text-[10px] font-extrabold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                          {m.match}% Match
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate">{m.role} · <strong>{m.company}</strong></p>
                      <p className="text-[10px] text-slate-400">{m.experience} years experience</p>
                    </div>
                  </div>

                  <button
                    onClick={() => onBookMentor(m)}
                    className="px-3 py-1.5 rounded-lg bg-[#141D4E] hover:bg-[#1D296C] border border-[#243378] text-white text-[11px] font-bold shrink-0 transition-all cursor-pointer"
                  >
                    Capsule
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 6. RECENT EXPERIENCE PASSPORT VERIFICATIONS */}
      <div className="p-5 rounded-2xl bg-[#0B1033] border border-[#1C265E]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <h2 className="text-sm font-bold text-white">Experience Passport · Verified Ledger</h2>
          </div>
          <button
            onClick={() => onNavigate('passport')}
            className="text-xs font-bold text-[#A78BFA] hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>Open Passport ({passport.length} Badges)</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {passport.slice(0, 2).map((item) => (
            <div key={item.id} className="p-3.5 rounded-xl bg-[#0E1538] border border-[#1E2964] flex items-start gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold text-white truncate">{item.title}</p>
                  <span className="text-[10px] font-black text-emerald-400">{item.score}/100</span>
                </div>
                <p className="text-[11px] text-slate-400">{item.company} · {item.experience_type}</p>
                <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400 font-mono">
                  <span>Hash: {item.hash?.slice(0, 16) || '0x7f4b8921e90a88...'}</span>
                  <span className="text-emerald-400 font-bold">✓ Blockchain Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
