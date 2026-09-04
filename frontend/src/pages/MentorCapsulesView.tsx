import React from 'react';
import { Users, Calendar } from 'lucide-react';

export const MentorCapsulesView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
        <h1 className="text-2xl font-extrabold text-slate-100 flex items-center gap-3">
          <Users className="w-7 h-7 text-indigo-400" /> 15-Minute Mentor Capsules
        </h1>
        <p className="text-sm text-slate-400 mt-1">High-impact 1-on-1 career and research consultations with senior medical consultants and hospital professors.</p>
      </div>

      <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-slate-100">Available Faculty Mentors</h3>
        <div className="mt-6 space-y-4">
          <div className="bg-[#131A36] border border-slate-800 rounded-xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300 font-bold">
                VR
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-100">Prof. Dr. Vikramaditya Roy</h4>
              <p className="text-xs text-indigo-400">Senior Professor of Internal Medicine & Cardiology @ AIIMS New Delhi</p>
            </div>
            </div>
            <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition">
              Book Capsule
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
