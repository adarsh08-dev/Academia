import React from 'react';
import { Award, CheckCircle, Brain } from 'lucide-react';

export const SkillAssessmentView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
        <h1 className="text-2xl font-extrabold text-slate-100 flex items-center gap-3">
          <Brain className="w-7 h-7 text-indigo-400" /> Clinical & Technical Skill Assessments
        </h1>
        <p className="text-sm text-slate-400 mt-1">Verify clinical reasoning, diagnostic skills, and protocol compliance with automated benchmarks.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
          <h3 className="text-base font-bold text-slate-100">Advanced Diagnostic Reasoning</h3>
          <p className="text-xs text-slate-400 mt-2">Test complex case presentations and differential diagnoses under time constraints.</p>
          <button className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition">
            Start Assessment
          </button>
        </div>
        <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
          <h3 className="text-base font-bold text-slate-100">ICG-GCP & Clinical Trial Ethics</h3>
          <p className="text-xs text-slate-400 mt-2">Compliance certification test for clinical research trials and patient safety.</p>
          <button className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition">
            Start Assessment
          </button>
        </div>
        <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
          <h3 className="text-base font-bold text-slate-100">Emergency & ACLS Resuscitation</h3>
          <p className="text-xs text-slate-400 mt-2">Rapid trauma triage and cardiac arrest protocol simulation.</p>
          <button className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition">
            Start Assessment
          </button>
        </div>
      </div>
    </div>
  );
};
