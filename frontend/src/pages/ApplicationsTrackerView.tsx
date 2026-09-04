import React from 'react';
import { Briefcase, CheckCircle, Clock } from 'lucide-react';
import { getApplications } from '../services/studentCareerService';

export const ApplicationsTrackerView: React.FC = () => {
  const apps = getApplications();

  return (
    <div className="space-y-6">
      <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
        <h1 className="text-2xl font-extrabold text-slate-100 flex items-center gap-3">
          <Briefcase className="w-7 h-7 text-indigo-400" /> Applications & Placement Tracker
        </h1>
        <p className="text-sm text-slate-400 mt-1">Track your active hospital residencies, fellowships, and clinical rotation applications.</p>
      </div>

      <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-slate-100">Submitted Applications ({apps.length})</h3>
        <div className="mt-6 space-y-4">
          {apps.map((a) => (
            <div key={a.id} className="bg-[#131A36] border border-slate-800 rounded-xl p-4 flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-slate-100">{a.opportunityTitle}</h4>
                <p className="text-xs text-indigo-400 mt-1">{a.company} • {a.location} • <span className="text-slate-300 font-semibold">{a.stipendOrSalary}</span></p>
              </div>
              <div className="text-right">
                <span className="px-3 py-1 bg-indigo-600/20 text-indigo-400 text-xs font-semibold rounded-full border border-indigo-500/30">
                  {a.status}
                </span>
                <p className="text-xs text-slate-400 mt-1">Applied: {a.appliedDate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
