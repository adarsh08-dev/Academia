import React from 'react';
import { CheckCircle, AlertCircle, Info } from 'lucide-react';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info' | 'error';
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success' }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 bg-[#131A36] border border-slate-700 shadow-2xl rounded-xl px-4 py-3 flex items-center gap-3 animate-fade-in">
      {type === 'success' && <CheckCircle className="w-5 h-5 text-emerald-400" />}
      {type === 'error' && <AlertCircle className="w-5 h-5 text-rose-400" />}
      {type === 'info' && <Info className="w-5 h-5 text-indigo-400" />}
      <span className="text-sm font-medium text-slate-200">{message}</span>
    </div>
  );
};
