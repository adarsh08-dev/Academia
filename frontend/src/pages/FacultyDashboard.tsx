import React from 'react';
import { Shield, Award } from 'lucide-react';

export const FacultyDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
        <h1 className="text-2xl font-extrabold text-slate-100 flex items-center gap-3">
          <Shield className="w-7 h-7 text-indigo-400" /> Faculty & HOD Dashboard
        </h1>
        <p className="text-sm text-slate-400 mt-1">Manage departmental student cohorts, clinical rotation approvals, and institutional MOUs.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
          <h3 className="text-sm font-bold text-slate-400">Total Department Students</h3>
          <p className="text-3xl font-extrabold text-slate-100 mt-2">486</p>
        </div>
        <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
          <h3 className="text-sm font-bold text-slate-400">Clinical Passports Verified</h3>
          <p className="text-3xl font-extrabold text-emerald-400 mt-2">412</p>
        </div>
        <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
          <h3 className="text-sm font-bold text-slate-400">Active Hospital MOUs</h3>
          <p className="text-3xl font-extrabold text-indigo-400 mt-2">14</p>
        </div>
      </div>
    </div>
  );
};
