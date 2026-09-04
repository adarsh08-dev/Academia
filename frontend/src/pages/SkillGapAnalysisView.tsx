import React from 'react';
import { Target, TrendingUp } from 'lucide-react';

export const SkillGapAnalysisView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
        <h1 className="text-2xl font-extrabold text-slate-100 flex items-center gap-3">
          <Target className="w-7 h-7 text-indigo-400" /> Skill Gap & Residency Readiness Analysis
        </h1>
        <p className="text-sm text-slate-400 mt-1">AI-driven gap identification comparing your current clinical competencies against top residency benchmarks.</p>
      </div>

      <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-slate-100">Core Skill Gaps</h3>
        <p className="text-xs text-slate-400 mt-1">Focus on these areas to increase your placement readiness score from 84% to 95%.</p>
        <div className="mt-6 space-y-4">
          <div className="bg-[#131A36] border border-slate-800 rounded-xl p-4 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-slate-200">Advanced Biostatistics & Clinical Epidemiology</h4>
              <p className="text-xs text-slate-400 mt-1">Required for high-tier journal publications and research fellowship matching.</p>
            </div>
            <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs font-semibold rounded-full border border-amber-500/30">Moderate Gap</span>
          </div>
          <div className="bg-[#131A36] border border-slate-800 rounded-xl p-4 flex items-center justify-between">
            <div>
              <h4 className="text-sm font-bold text-slate-200">ICMR Protocol Documentation Rigor</h4>
              <p className="text-xs text-slate-400 mt-1">Needed for clinical trial investigator clearance.</p>
            </div>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/30">Minor Gap</span>
          </div>
        </div>
      </div>
    </div>
  );
};
