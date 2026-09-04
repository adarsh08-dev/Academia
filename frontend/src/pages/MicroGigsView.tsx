import React from 'react';
import { Briefcase, Zap } from 'lucide-react';

export const MicroGigsView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
        <h1 className="text-2xl font-extrabold text-slate-100 flex items-center gap-3">
          <Zap className="w-7 h-7 text-indigo-400" /> Clinical Micro-Gigs & Sprints
        </h1>
        <p className="text-sm text-slate-400 mt-1">Short-duration clinical research assistance and hospital protocol reviews with instant stipends.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-indigo-600/20 text-indigo-400 text-xs font-semibold rounded-full border border-indigo-500/30">Micro-Gig</span>
              <span className="text-xs text-emerald-400 font-semibold">₹30,000 Stipend</span>
            </div>
            <h3 className="text-lg font-bold text-slate-100 mt-3">ICU Sepsis Protocol Observership</h3>
            <p className="text-xs text-slate-400 mt-2">Assist AIIMS Apex Trauma Center in reviewing ICU sepsis bundle adherence and data entry.</p>
          </div>
          <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800">
            <span className="text-xs text-slate-400">Duration: 2 Weeks</span>
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
