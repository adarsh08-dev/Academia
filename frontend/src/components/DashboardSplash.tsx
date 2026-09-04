import React from 'react';
import { X, Award, CheckCircle } from 'lucide-react';

interface DashboardSplashProps {
  isOpen: boolean;
  onClose: () => void;
  role: string;
}

export const DashboardSplash: React.FC<DashboardSplashProps> = ({ isOpen, onClose, role }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="w-full max-w-md bg-[#0B1026] border border-slate-800 rounded-2xl p-6 text-center shadow-2xl">
        <div className="w-16 h-16 bg-indigo-600/20 border border-indigo-500/40 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-400 font-bold text-xl">
          L
        </div>
        <h3 className="text-xl font-bold text-slate-100">Welcome to LADDER</h3>
        <p className="text-xs text-slate-400 mt-2">
          Medical Education, Career, Research & Healthcare Industry Collaboration Platform initialized successfully for role: <span className="text-indigo-400 font-semibold">{role}</span>.
        </p>

        <div className="mt-6">
          <button
            onClick={onClose}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition shadow-lg shadow-indigo-600/20"
          >
            Enter Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};
