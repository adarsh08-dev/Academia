import React from 'react';

interface LogoProps {
  showText?: boolean;
  subtitle?: boolean;
  className?: string;
  lightBg?: boolean;
  iconSize?: number;
  customSubtitle?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  showText = true, 
  subtitle = true, 
  className = '', 
  lightBg = false,
  iconSize = 42,
  customSubtitle
}) => {
  return (
    <div 
      className={`flex items-center gap-3 select-none min-w-0 ${className}`}
    >
      {/* Official LADDER Medical & Healthcare Career Icon */}
      <div 
        className="relative shrink-0 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0D9488]/20 via-[#2563EB]/20 to-[#7C5CFC]/25 border border-teal-500/30 shadow-sm"
        style={{ width: iconSize, height: iconSize }}
      >
        <svg 
          width={iconSize - 12} 
          height={iconSize - 12} 
          viewBox="0 0 32 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="shrink-0"
        >
          {/* Ascending Healthcare Ladder Rungs with Cross Emblem */}
          {/* Vertical Rails */}
          <line x1="8" y1="4" x2="8" y2="28" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="24" y1="4" x2="24" y2="28" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" />
          {/* Ladder Rungs */}
          <line x1="8" y1="9" x2="24" y2="9" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="16" x2="24" y2="16" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" />
          <line x1="8" y1="23" x2="24" y2="23" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" />
          {/* Central Healthcare Cross Glow Emblem */}
          <rect x="14" y="13" width="4" height="6" rx="1" fill="#FFFFFF" />
          <rect x="13" y="14" width="6" height="4" rx="1" fill="#FFFFFF" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className={`text-[19px] font-black tracking-tight font-sans leading-none ${lightBg ? "text-[#0F172A]" : "text-white"}`}>
              LADDER
            </span>
            <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-teal-500/15 text-teal-300 border border-teal-500/30">
              Healthcare
            </span>
          </div>

          {subtitle && (
            <div className="mt-1 leading-tight truncate">
              <span className={`text-[11px] font-medium tracking-tight ${lightBg ? "text-slate-600" : "text-slate-400"}`}>
                {customSubtitle || "Your Ladder to a Better Healthcare Career"}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Logo;

