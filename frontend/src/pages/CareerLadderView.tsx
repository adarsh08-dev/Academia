import React, { useState } from 'react';
import { 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  BookOpen, 
  Award, 
  Users, 
  Layers, 
  Briefcase, 
  Building2, 
  ChevronRight, 
  Activity, 
  Stethoscope, 
  FileText, 
  AlertCircle, 
  HeartHandshake, 
  CheckCircle,
  BarChart3,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { StudentProfile, CareerLadderStep, MedicalCareerPathway, ClinicalCaseStudy } from '../types';
import { 
  CAREER_LADDER_STEPS, 
  MEDICAL_CAREER_PATHWAYS, 
  CLINICAL_CASE_STUDIES,
  getNextBestAction 
} from '../data/medicalPathwayData';

interface CareerLadderViewProps {
  student: StudentProfile | null;
  onNavigateTab: (tab: string) => void;
  onBookMentor?: (topic: string) => void;
}

export const CareerLadderView: React.FC<CareerLadderViewProps> = ({
  student,
  onNavigateTab,
  onBookMentor
}) => {
  const [activeSubTab, setActiveSubTab] = useState<'ladder' | 'pathways' | 'cases'>('ladder');
  const [selectedStep, setSelectedStep] = useState<CareerLadderStep>(CAREER_LADDER_STEPS[2]); // Mentorship step by default
  const [selectedPathway, setSelectedPathway] = useState<MedicalCareerPathway>(MEDICAL_CAREER_PATHWAYS[0]);
  
  // Case Study Interactive State
  const [selectedCase, setSelectedCase] = useState<ClinicalCaseStudy>(CLINICAL_CASE_STUDIES[0]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmittedCase, setHasSubmittedCase] = useState<boolean>(false);

  const nextAction = getNextBestAction(student);

  // Overall Ladder Progress
  const completedSteps = CAREER_LADDER_STEPS.filter(s => s.status === 'completed').length;
  const inProgressSteps = CAREER_LADDER_STEPS.filter(s => s.status === 'in_progress').length;
  const totalLadderProgress = Math.round(
    CAREER_LADDER_STEPS.reduce((acc, step) => acc + step.progressPercent, 0) / CAREER_LADDER_STEPS.length
  );

  const getStepIcon = (stepNumber: number) => {
    switch (stepNumber) {
      case 1: return BookOpen;
      case 2: return Award;
      case 3: return Users;
      case 4: return Layers;
      case 5: return Activity;
      case 6: return Building2;
      case 7: return Briefcase;
      default: return TrendingUp;
    }
  };

  const handleCaseSelect = (study: ClinicalCaseStudy) => {
    setSelectedCase(study);
    setSelectedOption(null);
    setHasSubmittedCase(false);
  };

  const handleOptionSubmit = () => {
    if (selectedOption !== null) {
      setHasSubmittedCase(true);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in select-none">
      {/* 1. HERO HEADER */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#121A46] via-[#10173F] to-[#0A0F2E] border border-[#1E2B68] relative overflow-hidden shadow-xl">
        <div className="absolute right-0 top-0 w-96 h-96 bg-[#7C5CFC]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                LADDER Framework Active
              </span>
              <span className="text-xs text-slate-400">
                Medical & Healthcare Career Progression
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              The 7-Step Medical Career Ladder
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
              From <strong className="text-cyan-300">Learning</strong> &rarr; <strong className="text-indigo-300">Skills</strong> &rarr; <strong className="text-pink-300">Mentorship</strong> &rarr; <strong className="text-purple-300">Research</strong> &rarr; <strong className="text-amber-300">Internship</strong> &rarr; <strong className="text-blue-300">Industry Exposure</strong> &rarr; <strong className="text-emerald-300">Career Opportunities</strong>.
            </p>

            {/* Sub-Navigation Tabs */}
            <div className="flex flex-wrap items-center gap-2 mt-5">
              <button
                id="tab-ladder-steps"
                onClick={() => setActiveSubTab('ladder')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeSubTab === 'ladder'
                    ? 'bg-[#7C5CFC] text-white shadow-lg shadow-purple-500/25'
                    : 'bg-[#141D4E] hover:bg-[#1D296C] text-slate-300 border border-[#243378]'
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5" />
                <span>The 7 Ladder Steps</span>
              </button>

              <button
                id="tab-pathways"
                onClick={() => setActiveSubTab('pathways')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeSubTab === 'pathways'
                    ? 'bg-[#7C5CFC] text-white shadow-lg shadow-purple-500/25'
                    : 'bg-[#141D4E] hover:bg-[#1D296C] text-slate-300 border border-[#243378]'
                }`}
              >
                <Stethoscope className="w-3.5 h-3.5 text-cyan-400" />
                <span>Medical Career Pathways ({MEDICAL_CAREER_PATHWAYS.length})</span>
              </button>

              <button
                id="tab-cases"
                onClick={() => setActiveSubTab('cases')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  activeSubTab === 'cases'
                    ? 'bg-[#7C5CFC] text-white shadow-lg shadow-purple-500/25'
                    : 'bg-[#141D4E] hover:bg-[#1D296C] text-slate-300 border border-[#243378]'
                }`}
              >
                <Activity className="w-3.5 h-3.5 text-pink-400" />
                <span>Clinical Case Simulations ({CLINICAL_CASE_STUDIES.length})</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Pillar */}
          <div className="grid grid-cols-2 gap-3 min-w-[260px] shrink-0">
            <div className="p-4 rounded-xl bg-[#0B1033] border border-[#1E2B68] text-center flex flex-col justify-center shadow-md">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Ladder Completion</span>
              <div className="text-3xl font-black text-[#A78BFA] my-1">{totalLadderProgress}%</div>
              <div className="w-full bg-[#182352] h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] h-full rounded-full transition-all duration-500" style={{ width: `${totalLadderProgress}%` }} />
              </div>
              <span className="text-[9.5px] text-purple-300 font-medium mt-1">
                {completedSteps} Done &bull; {inProgressSteps} In Progress
              </span>
            </div>

            <div className="p-4 rounded-xl bg-[#0B1033] border border-[#1E2B68] text-center flex flex-col justify-center shadow-md">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Target Specialty</span>
              <div className="text-sm font-black text-white mt-1.5 line-clamp-1">Internal Medicine</div>
              <span className="text-[10px] text-cyan-300 font-bold mt-1">AIIMS New Delhi</span>
              <span className="text-[9px] text-slate-400 mt-1 font-mono">Benchmark: 85%</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SIGNATURE NEXT BEST ACTION CARD */}
      <div className="p-5 rounded-2xl bg-gradient-to-r from-[#141B4D] to-[#0D1338] border border-[#27357D] shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                Priority 1: {nextAction.priority}
              </span>
              <span className="text-[11px] font-bold text-indigo-300">{nextAction.category}</span>
              <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">
                +{nextAction.estimatedXP} XP
              </span>
            </div>
            <h3 className="text-sm font-bold text-white leading-snug">{nextAction.title}</h3>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl">{nextAction.rationale}</p>
          </div>
        </div>

        <button
          onClick={() => onNavigateTab(nextAction.targetTab)}
          className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#7C5CFC] to-[#6366F1] hover:opacity-95 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer shrink-0 self-start md:self-auto"
        >
          <span>{nextAction.actionLabel}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* 3. MAIN CONTENT: SUB-TAB 1 — THE 7 STEPS */}
      {activeSubTab === 'ladder' && (
        <div className="space-y-6">
          {/* Horizontal Rung Tracker */}
          <div className="p-5 rounded-2xl bg-[#0B1033] border border-[#1C265E] shadow-xl overflow-x-auto">
            <div className="flex items-center justify-between gap-2 min-w-[760px] pb-2">
              {CAREER_LADDER_STEPS.map((step, idx) => {
                const IconComponent = getStepIcon(step.stepNumber);
                const isSelected = selectedStep.id === step.id;
                const isDone = step.status === 'completed';
                const isInProg = step.status === 'in_progress';

                return (
                  <React.Fragment key={step.id}>
                    <button
                      onClick={() => setSelectedStep(step)}
                      className={`flex flex-col items-center text-center p-3 rounded-xl border transition-all cursor-pointer relative group flex-1 ${
                        isSelected
                          ? 'bg-[#1C2563] border-[#7C5CFC] shadow-lg shadow-purple-500/20'
                          : isDone
                          ? 'bg-[#0E1538] border-emerald-500/30 hover:border-emerald-500/60'
                          : isInProg
                          ? 'bg-[#0E1538] border-[#7C5CFC]/40 hover:border-[#7C5CFC]'
                          : 'bg-[#0A0E2A] border-white/5 opacity-70 hover:opacity-100'
                      }`}
                    >
                      {/* Step Number Badge */}
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black mb-2 transition-all ${
                        isDone
                          ? 'bg-emerald-500 text-slate-950 shadow-sm'
                          : isInProg
                          ? 'bg-[#7C5CFC] text-white ring-4 ring-[#7C5CFC]/20'
                          : 'bg-white/10 text-slate-400'
                      }`}>
                        {isDone ? <CheckCircle2 className="w-4 h-4 text-white" /> : step.stepNumber}
                      </div>

                      <span className="text-xs font-bold text-white truncate max-w-[90px]">
                        {step.stageName}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                        {step.progressPercent}%
                      </span>

                      {/* Mini Progress Bar */}
                      <div className="w-full bg-[#182352] h-1 rounded-full overflow-hidden mt-1.5">
                        <div 
                          className={`h-full rounded-full ${
                            isDone ? 'bg-emerald-400' : isInProg ? 'bg-[#7C5CFC]' : 'bg-slate-600'
                          }`} 
                          style={{ width: `${step.progressPercent}%` }} 
                        />
                      </div>
                    </button>

                    {idx < CAREER_LADDER_STEPS.length - 1 && (
                      <div className="w-6 flex items-center justify-center shrink-0">
                        <ChevronRight className="w-4 h-4 text-slate-600" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Selected Step Deep Dive Card */}
          <div className="p-6 rounded-2xl bg-[#0B1033] border border-[#1C265E] shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-extrabold text-[#A78BFA] uppercase tracking-wider bg-[#7C5CFC]/15 px-2.5 py-0.5 rounded-lg border border-[#7C5CFC]/30">
                    Step {selectedStep.stepNumber} of 7: {selectedStep.stageName}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    selectedStep.status === 'completed'
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                      : selectedStep.status === 'in_progress'
                      ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                      : 'bg-white/10 text-slate-400'
                  }`}>
                    {selectedStep.status === 'completed' ? 'Completed' : selectedStep.status === 'in_progress' ? 'Active Focus' : 'Upcoming Step'}
                  </span>
                </div>

                <h2 className="text-xl font-black text-white mt-1">
                  {selectedStep.title}
                </h2>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  {selectedStep.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  <div className="p-3 rounded-xl bg-[#0E1538] border border-[#1E2964]">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                      {selectedStep.metricLabel}
                    </span>
                    <span className="text-sm font-bold text-emerald-400">
                      {selectedStep.metricValue}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-[#0E1538] border border-[#1E2964]">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                      Recommended Action
                    </span>
                    <span className="text-xs font-semibold text-slate-200">
                      {selectedStep.recommendedAction}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Trigger Card */}
              <div className="p-5 rounded-xl bg-[#0E1538] border border-[#1E2964] lg:w-72 shrink-0 flex flex-col justify-between shadow-md">
                <div>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Step Progression
                  </span>
                  <div className="text-2xl font-black text-white mb-1">
                    {selectedStep.progressPercent}%
                  </div>
                  <div className="w-full bg-[#182352] h-2 rounded-full overflow-hidden mb-3">
                    <div 
                      className="bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] h-full rounded-full transition-all duration-500" 
                      style={{ width: `${selectedStep.progressPercent}%` }} 
                    />
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Advancing this step directly elevates your institutional placement score.
                  </p>
                </div>

                <button
                  onClick={() => onNavigateTab(selectedStep.targetTab)}
                  className="w-full mt-4 py-2.5 rounded-xl bg-[#7C5CFC] hover:bg-[#6D4AE8] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <span>Open {selectedStep.stageName} Hub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. MAIN CONTENT: SUB-TAB 2 — MEDICAL CAREER PATHWAYS */}
      {activeSubTab === 'pathways' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Pathway Selector Sidebar */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block px-1 mb-2">
              Select Medical Pathway
            </span>
            {MEDICAL_CAREER_PATHWAYS.map(p => {
              const isSelected = selectedPathway.id === p.id;
              return (
                <div
                  key={p.id}
                  onClick={() => setSelectedPathway(p)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col gap-1.5 ${
                    isSelected
                      ? 'bg-[#1C2563] border-[#7C5CFC] shadow-lg shadow-purple-500/20'
                      : 'bg-[#0B1033] border-[#1C265E] hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white">{p.title}</span>
                    <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded ${
                      p.industryDemand === 'Critical' 
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' 
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    }`}>
                      {p.industryDemand} Demand
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 line-clamp-1">{p.specialty}</p>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1 font-mono">
                    <span>Benchmark: {p.readinessBenchmark}%</span>
                    <span className="text-emerald-400 font-bold">{p.averageRemuneration}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pathway Detail Card */}
          <div className="lg:col-span-8 p-6 rounded-2xl bg-[#0B1033] border border-[#1C265E] shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-[#1E2964]">
              <div>
                <span className="text-[10px] font-extrabold text-[#A78BFA] uppercase tracking-wider block mb-1">
                  {selectedPathway.specialty}
                </span>
                <h2 className="text-xl font-black text-white">{selectedPathway.title}</h2>
                <p className="text-xs text-indigo-300 mt-0.5">{selectedPathway.targetDegree}</p>
              </div>

              <div className="text-right sm:self-auto self-start">
                <span className="text-[10px] text-slate-400 uppercase font-bold block">Avg. Remuneration</span>
                <span className="text-sm font-black text-emerald-400">{selectedPathway.averageRemuneration}</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">{selectedPathway.durationYears}</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
              {selectedPathway.overview}
            </p>

            {/* Core Competencies Required */}
            <div className="mb-5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Core Clinical Competencies
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedPathway.coreCompetencies.map((comp, idx) => (
                  <span 
                    key={idx}
                    className="text-xs bg-[#0E1538] border border-[#1E2964] text-slate-200 px-2.5 py-1 rounded-lg flex items-center gap-1.5"
                  >
                    <CheckCircle className="w-3 h-3 text-emerald-400" />
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Career Milestones */}
            <div className="mb-5">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Curricular & Residency Progression
              </span>
              <div className="space-y-2">
                {selectedPathway.keyMilestones.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#0E1538] border border-[#1E2964] flex items-center justify-between gap-3 text-xs">
                    <div className="min-w-0">
                      <span className="font-bold text-indigo-300 block">{m.stage}</span>
                      <p className="text-slate-300 text-[11px] mt-0.5">{m.focus}</p>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-1 rounded shrink-0">
                      {m.duration}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Placement Roles & Research Opportunities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#1E2964]">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Hospital & Institutional Appointments
                </span>
                <ul className="space-y-1 text-xs text-slate-300">
                  {selectedPathway.hospitalPlacementRoles.map((role, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {role}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Recommended Research & Grants
                </span>
                <ul className="space-y-1 text-xs text-slate-300">
                  {selectedPathway.recommendedResearch.map((res, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {res}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. MAIN CONTENT: SUB-TAB 3 — CLINICAL CASE SIMULATIONS */}
      {activeSubTab === 'cases' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Case Vignette List */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block px-1 mb-2">
              Select Clinical Vignette
            </span>
            {CLINICAL_CASE_STUDIES.map(c => {
              const isSelected = selectedCase.id === c.id;
              return (
                <div
                  key={c.id}
                  onClick={() => handleCaseSelect(c)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col gap-1 ${
                    isSelected
                      ? 'bg-[#1C2563] border-[#7C5CFC] shadow-lg shadow-purple-500/20'
                      : 'bg-[#0B1033] border-[#1C265E] hover:border-slate-500'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold text-indigo-300 uppercase">{c.discipline}</span>
                    <span className="text-[9px] font-bold text-amber-300 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">
                      {c.difficulty}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold text-white line-clamp-1">{c.title}</h3>
                  <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-2">{c.patientVignette}</p>
                </div>
              );
            })}
          </div>

          {/* Active Case Simulation Stage */}
          <div className="lg:col-span-8 p-6 rounded-2xl bg-[#0B1033] border border-[#1C265E] shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-[#1E2964]">
              <div>
                <span className="text-[10px] font-extrabold text-pink-400 uppercase tracking-wider block mb-1">
                  Clinical Simulation Case
                </span>
                <h2 className="text-xl font-black text-white">{selectedCase.title}</h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Demographics: {selectedCase.demographics.age}yo {selectedCase.demographics.gender} &bull; {selectedCase.demographics.presentation}
                </p>
              </div>

              <span className="text-xs font-bold text-cyan-300 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1.5 rounded-xl self-start sm:self-auto">
                {selectedCase.discipline}
              </span>
            </div>

            {/* Patient Presentation & Vital Signs */}
            <div className="p-4 rounded-xl bg-[#0E1538] border border-[#1E2964] mb-4">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                Bedside Patient Vignette
              </span>
              <p className="text-xs text-slate-200 leading-relaxed mb-3">
                {selectedCase.patientVignette}
              </p>

              {/* Vitals Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-3 border-t border-white/5">
                <div className="text-center p-1.5 rounded-lg bg-black/20">
                  <span className="text-[9px] text-slate-400 block font-mono">HEART RATE</span>
                  <span className="text-xs font-black text-rose-400">{selectedCase.vitalSigns.hr}</span>
                </div>
                <div className="text-center p-1.5 rounded-lg bg-black/20">
                  <span className="text-[9px] text-slate-400 block font-mono">BLOOD PRESSURE</span>
                  <span className="text-xs font-black text-amber-400">{selectedCase.vitalSigns.bp}</span>
                </div>
                <div className="text-center p-1.5 rounded-lg bg-black/20">
                  <span className="text-[9px] text-slate-400 block font-mono">RESP RATE</span>
                  <span className="text-xs font-black text-cyan-400">{selectedCase.vitalSigns.rr}</span>
                </div>
                <div className="text-center p-1.5 rounded-lg bg-black/20">
                  <span className="text-[9px] text-slate-400 block font-mono">TEMP</span>
                  <span className="text-xs font-black text-slate-200">{selectedCase.vitalSigns.temp}</span>
                </div>
                <div className="text-center p-1.5 rounded-lg bg-black/20">
                  <span className="text-[9px] text-slate-400 block font-mono">SpO2</span>
                  <span className="text-xs font-black text-emerald-400">{selectedCase.vitalSigns.spo2}</span>
                </div>
              </div>
            </div>

            {/* Objective Decision */}
            <div className="mb-4">
              <span className="text-xs font-bold text-white block mb-2">
                Objective: {selectedCase.objective}
              </span>

              {/* Multiple Choice Options */}
              <div className="space-y-2.5">
                {selectedCase.diagnosticOptions.map((opt, idx) => {
                  const isChosen = selectedOption === idx;
                  const isCorrect = idx === selectedCase.correctIndex;
                  let borderClass = 'border-[#1E2964] bg-[#0E1538] hover:border-slate-400';

                  if (hasSubmittedCase) {
                    if (isCorrect) {
                      borderClass = 'border-emerald-500 bg-emerald-500/15 text-emerald-200';
                    } else if (isChosen && !isCorrect) {
                      borderClass = 'border-rose-500 bg-rose-500/15 text-rose-200';
                    }
                  } else if (isChosen) {
                    borderClass = 'border-[#7C5CFC] bg-[#7C5CFC]/15 text-white';
                  }

                  return (
                    <button
                      key={idx}
                      disabled={hasSubmittedCase}
                      onClick={() => setSelectedOption(idx)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 text-xs ${borderClass}`}
                    >
                      <span className="leading-relaxed">{opt}</span>
                      {hasSubmittedCase && isCorrect && (
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      )}
                      {hasSubmittedCase && isChosen && !isCorrect && (
                        <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit / Retest Button */}
            {!hasSubmittedCase ? (
              <button
                disabled={selectedOption === null}
                onClick={handleOptionSubmit}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#7C5CFC] to-[#00D9FF] hover:opacity-95 disabled:opacity-40 text-white text-xs font-bold transition-all cursor-pointer shadow-md"
              >
                Submit Clinical Decision
              </button>
            ) : (
              <div className="space-y-4 animate-fade-in">
                {/* Clinical Reasoning Outcome */}
                <div className={`p-4 rounded-xl border ${
                  selectedOption === selectedCase.correctIndex
                    ? 'bg-emerald-500/10 border-emerald-500/30'
                    : 'bg-rose-500/10 border-rose-500/30'
                }`}>
                  <div className="flex items-center gap-2 mb-2">
                    {selectedOption === selectedCase.correctIndex ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <AlertCircle className="w-4 h-4 text-rose-400" />
                    )}
                    <h4 className="text-xs font-extrabold text-white">
                      {selectedOption === selectedCase.correctIndex ? 'Accurate Clinical Evaluation (+50 XP)' : 'Protocol Discrepancy Identified'}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedCase.clinicalReasoning}
                  </p>
                </div>

                {/* Key Learning Points */}
                <div className="p-3.5 rounded-xl bg-[#0E1538] border border-[#1E2964]">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                    Key Clinical Practice Takeaways
                  </span>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {selectedCase.keyLearningPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="text-cyan-400 font-bold">&bull;</span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedOption(null);
                    setHasSubmittedCase(false);
                  }}
                  className="w-full py-2 rounded-xl bg-[#141D4E] hover:bg-[#1D296C] text-slate-200 text-xs font-bold transition-all cursor-pointer"
                >
                  Retry Case Simulation
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
