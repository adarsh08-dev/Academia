import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';
import { getCertifications, getAchievements } from '../services/studentCareerService';

export const CertificationsAchievementsView: React.FC = () => {
  const certs = getCertifications();
  const achievements = getAchievements();

  return (
    <div className="space-y-6">
      <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
        <h1 className="text-2xl font-extrabold text-slate-100 flex items-center gap-3">
          <Award className="w-7 h-7 text-indigo-400" /> Certifications & Achievements Ledger
        </h1>
        <p className="text-sm text-slate-400 mt-1">Cryptographically verified medical board certifications, life support credentials, and research awards.</p>
      </div>

      <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-slate-100 mb-4">Certifications ({certs.length})</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certs.map((c) => (
            <div key={c.id} className="bg-[#131A36] border border-slate-800 rounded-xl p-4 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-100">{c.name}</h4>
                <p className="text-xs text-indigo-400 mt-1">{c.issuer} • Issued: {c.issueDate}</p>
              </div>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full border border-emerald-500/30 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> {c.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
