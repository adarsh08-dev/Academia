import React, { useState } from 'react';
import { X, Calendar, Clock, Award } from 'lucide-react';
import { Mentor } from '../types';

interface BookMentorModalProps {
  mentor: Mentor | null;
  onClose: () => void;
  onBooked: (mentor: Mentor, date: string, time: string) => void;
}

export const BookMentorModal: React.FC<BookMentorModalProps> = ({ mentor, onClose, onBooked }) => {
  const [selectedDate, setSelectedDate] = useState('2026-09-10');
  const [selectedTime, setSelectedTime] = useState('16:00 - 16:15');

  if (!mentor) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg bg-[#0B1026] border border-slate-800 rounded-2xl p-6 shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <h3 className="text-lg font-bold text-slate-100">Book 15-Minute Mentor Capsule</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 bg-[#131A36] border border-slate-800 rounded-xl p-4 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-indigo-600/30 border border-indigo-500/40 flex items-center justify-center text-indigo-300 font-bold">
            {mentor.name.charAt(0)}
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-100">{mentor.name}</h4>
            <p className="text-xs text-indigo-400">{mentor.role} @ {mentor.company}</p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Select Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full mt-1.5 bg-[#131A36] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Select Time Slot</label>
            <select
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              className="w-full mt-1.5 bg-[#131A36] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
            >
              <option value="15:00 - 15:15">3:00 PM - 3:15 PM</option>
              <option value="16:00 - 16:15">4:00 PM - 4:15 PM</option>
              <option value="17:30 - 17:45">5:30 PM - 5:45 PM</option>
            </select>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-xl transition"
          >
            Cancel
          </button>
          <button
            onClick={() => onBooked(mentor, selectedDate, selectedTime)}
            className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition shadow-lg shadow-indigo-600/20"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </div>
  );
};
