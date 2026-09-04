import React from 'react';

interface UniversityDropdownProps {
  value: string;
  onChange: (val: string) => void;
}

export const UniversityDropdown: React.FC<UniversityDropdownProps> = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-[#131A36] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-indigo-500"
    >
      <option value="All India Institute of Medical Sciences (AIIMS), New Delhi">All India Institute of Medical Sciences (AIIMS), New Delhi</option>
      <option value="Christian Medical College (CMC), Vellore">Christian Medical College (CMC), Vellore</option>
      <option value="King George's Medical University (KGMU), Lucknow">King George's Medical University (KGMU), Lucknow</option>
      <option value="Maulana Azad Medical College (MAMC), New Delhi">Maulana Azad Medical College (MAMC), New Delhi</option>
    </select>
  );
};
