import React from 'react';
import { Bell, Search, User, Moon, Sun, Shield, HelpCircle } from 'lucide-react';

interface TopbarProps {
  onToggleNotifications?: () => void;
  onOpenNotifications?: () => void;
  onToggleTheme: () => void;
  theme: 'dark' | 'light';
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  activeRole?: string;
  currentRole?: string;
  onChangeRole?: (role: any) => void;
  onRoleChange?: (role: any) => void;
  [key: string]: any;
}

export const Topbar: React.FC<TopbarProps> = ({
  onToggleNotifications,
  onOpenNotifications,
  onToggleTheme,
  theme,
  searchQuery,
  setSearchQuery,
  activeRole,
  currentRole,
  onChangeRole,
  onRoleChange
}) => {
  const handleRoleChangeVal = onChangeRole || onRoleChange || (() => {});
  const roleVal = activeRole || currentRole || 'student';
  const toggleNotifVal = onToggleNotifications || onOpenNotifications || (() => {});
  return (
    <header className="h-16 border-b border-slate-800 bg-[#0B1026]/90 backdrop-blur px-6 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-4 flex-1 max-w-md">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search medical skills, clinical gigs, mentors, rotations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#131A36] border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <select
          value={roleVal}
          onChange={(e) => handleRoleChangeVal(e.target.value)}
          className="bg-[#131A36] border border-slate-800 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-lg focus:outline-none focus:border-indigo-500"
        >
          <option value="student">Student / Intern</option>
          <option value="mentor">Faculty Mentor</option>
          <option value="hod">HOD / Dean</option>
          <option value="company">Healthcare Recruiter</option>
        </select>

        <button
          onClick={onToggleTheme}
          className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 rounded-lg transition"
          title="Toggle Theme"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-400" />}
        </button>

        <button
          onClick={toggleNotifVal}
          className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 rounded-lg relative transition"
          title="Notifications"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full"></span>
        </button>
      </div>
    </header>
  );
};
