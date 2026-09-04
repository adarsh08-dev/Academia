import React, { useState } from 'react';
import { HelpCircle, Send, Sparkles } from 'lucide-react';

export const AIHelpdeskView: React.FC = () => {
  const [ticketTitle, setTicketTitle] = useState('');
  const [ticketDesc, setTicketDesc] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ticketTitle) setSubmitted(true);
  };

  return (
    <div className="space-y-6">
      <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
        <h1 className="text-2xl font-extrabold text-slate-100 flex items-center gap-3">
          <HelpCircle className="w-7 h-7 text-indigo-400" /> AI Helpdesk & Support Center
        </h1>
        <p className="text-sm text-slate-400 mt-1">Instant AI-powered answers and support ticketing for clinical students and faculty.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#0B1026] border border-slate-800 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-slate-100 mb-4">Raise Support Ticket</h3>
          {submitted ? (
            <div className="p-4 bg-emerald-500/20 border border-emerald-500/30 rounded-xl text-emerald-300 text-sm">
              Ticket successfully lodged and AI diagnostic generated!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs text-slate-400 font-semibold uppercase">Subject</label>
                <input
                  type="text"
                  value={ticketTitle}
                  onChange={(e) => setTicketTitle(e.target.value)}
                  placeholder="e.g. Clinical Passport verification delay"
                  className="w-full mt-1.5 bg-[#131A36] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <div>
                <label className="text-xs text-slate-400 font-semibold uppercase">Description</label>
                <textarea
                  value={ticketDesc}
                  onChange={(e) => setTicketDesc(e.target.value)}
                  placeholder="Provide details..."
                  rows={4}
                  className="w-full mt-1.5 bg-[#131A36] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
                  required
                />
              </div>
              <button type="submit" className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition">
                Submit Ticket
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
