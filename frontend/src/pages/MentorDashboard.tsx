import React from 'react';
import { Users, Calendar } from 'lucide-react';

export const MentorDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
        <h1 className="text-2xl font-extrabold text-slate-100 flex items-center gap-3">
          <Users className="w-7 h-7 text-indigo-400" /> Faculty Mentor Dashboard
        </h1>
        <p className="text-sm text-slate-400 mt-1">Manage your 15-minute mentor capsule bookings, student case reviews, and feedback.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-slate-100">Upcoming Capsules Today</h3>
          <p className="text-xs text-slate-400 mt-2">You have 3 mentor sessions scheduled with AIIMS clinical interns.</p>
        </div>
      </div>
    </div>
  );
};
