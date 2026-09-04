import React from 'react';
import { Code, Award } from 'lucide-react';
import { getProjects } from '../services/studentCareerService';

export const ProjectsChallengesView: React.FC = () => {
  const projects = getProjects();

  return (
    <div className="space-y-6">
      <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
        <h1 className="text-2xl font-extrabold text-slate-100 flex items-center gap-3">
          <Code className="w-7 h-7 text-indigo-400" /> Clinical Research Projects & Challenges
        </h1>
        <p className="text-sm text-slate-400 mt-1">Participate in multicenter clinical registries, case studies, and healthcare AI analytics challenges.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-indigo-600/20 text-indigo-400 text-xs font-semibold rounded-full border border-indigo-500/30">
                  {p.type}
                </span>
                <span className="text-xs text-emerald-400 font-semibold">{p.bountyOrReward || 'Verified'}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-100 mt-3">{p.title}</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{p.description}</p>
            </div>
            <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400">Duration: {p.duration}</span>
              <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
