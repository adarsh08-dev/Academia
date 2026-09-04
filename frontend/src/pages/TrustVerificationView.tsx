import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const TrustVerificationView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
        <h1 className="text-2xl font-extrabold text-slate-100 flex items-center gap-3">
          <ShieldCheck className="w-7 h-7 text-emerald-400" /> Trust & Cryptographic Verification Ledger
        </h1>
        <p className="text-sm text-slate-400 mt-1">SHA-256 verifiable credentials and immutable clinical rotation proof records.</p>
      </div>

      <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-bold text-slate-100">Immutable Ledger Status</h3>
        <p className="text-xs text-slate-400 mt-2">All student competencies and rotation proofs are secured with cryptographic hashes.</p>
      </div>
    </div>
  );
};
