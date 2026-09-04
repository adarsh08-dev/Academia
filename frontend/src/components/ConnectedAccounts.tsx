import React from 'react';
import { Shield, CheckCircle } from 'lucide-react';

export const ConnectedAccounts: React.FC = () => {
  return (
    <div className="p-3 bg-[#131A36] border border-slate-800 rounded-xl">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
        <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5 text-emerald-400" /> Connected Ledger</span>
        <span className="text-emerald-400">Synced</span>
      </div>
    </div>
  );
};
