import React from 'react';
import { Briefcase, Users } from 'lucide-react';

export const RecruiterDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
        <h1 className="text-2xl font-extrabold text-slate-100 flex items-center gap-3">
          <Briefcase className="w-7 h-7 text-indigo-400" /> Healthcare Recruiter Dashboard
        </h1>
        <p className="text-sm text-slate-400 mt-1">Discover top medical residents, clinical fellows, and healthcare engineering talent.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
          <h3 className="text-sm font-bold text-slate-400">Active Job Postings</h3>
          <p className="text-3xl font-extrabold text-slate-100 mt-2">6</p>
        </div>
        <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
          <h3 className="text-sm font-bold text-slate-400">Candidate Applications</h3>
          <p className="text-3xl font-extrabold text-indigo-400 mt-2">128</p>
        </div>
        <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
          <h3 className="text-sm font-bold text-slate-400">Shortlisted Candidates</h3>
          <p className="text-3xl font-extrabold text-emerald-400 mt-2">34</p>
        </div>
      </div>
    </div>
  );
};
