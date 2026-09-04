import React from 'react';
import { X, Bell, CheckCircle } from 'lucide-react';

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  time: string;
  type: string;
  read: boolean;
}

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: NotificationItem[];
}

export const NotificationModal: React.FC<NotificationModalProps> = ({ isOpen, onClose, notifications }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-[#0B1026] border-l border-slate-800 p-6 overflow-y-auto">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <h2 className="text-lg font-bold text-slate-100 flex items-center gap-2">
            <Bell className="w-5 h-5 text-indigo-400" /> Notifications
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-6 space-y-3">
          {notifications.map((n) => (
            <div key={n.id} className="bg-[#131A36] border border-slate-800 rounded-xl p-4">
              <div className="flex items-start justify-between">
                <h4 className="text-sm font-bold text-slate-200">{n.title}</h4>
                <span className="text-xs text-slate-400">{n.time}</span>
              </div>
              <p className="text-xs text-slate-300 mt-1.5">{n.message}</p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <button
            onClick={onClose}
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition shadow-lg shadow-indigo-600/20"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
