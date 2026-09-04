import React from 'react';
import { X, User, Shield, Mail, Phone, MapPin, Award } from 'lucide-react';
import { StudentProfile } from '../types';

interface ProfileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  student: StudentProfile;
}

export const ProfileDrawer: React.FC<ProfileDrawerProps> = ({ isOpen, onClose, student }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-start bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-[#0B1026] border-l border-slate-800 p-6 overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <h2 className="text-lg font-bold text-slate-100">Professional Medical Profile</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-indigo-600/30 border-2 border-indigo-500/50 flex items-center justify-center text-indigo-300 font-bold text-2xl mb-3">
            AS
          </div>
          <h3 className="text-xl font-bold text-slate-100">{student.name}</h3>
          <p className="text-sm text-indigo-400 font-medium">{student.course}</p>
          <p className="text-xs text-slate-400 mt-1">{student.college}</p>
        </div>

        <div className="mt-8 space-y-4">
          <div className="bg-[#131A36] border border-slate-800 rounded-xl p-4">
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Roll No / ID</div>
            <div className="text-sm font-bold text-slate-200 mt-1">{student.rollNo}</div>
          </div>
          <div className="bg-[#131A36] border border-slate-800 rounded-xl p-4">
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Email</div>
            <div className="text-sm font-bold text-slate-200 mt-1">{student.email}</div>
          </div>
          <div className="bg-[#131A36] border border-slate-800 rounded-xl p-4">
            <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Career Readiness Index</div>
            <div className="text-lg font-extrabold text-indigo-400 mt-1">{student.careerReadiness}%</div>
          </div>
        </div>

        <div className="mt-8">
          <button
            onClick={onClose}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition shadow-lg shadow-indigo-600/20"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
};
