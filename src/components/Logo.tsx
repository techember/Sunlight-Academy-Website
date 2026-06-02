import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-11 h-11",
    lg: "w-14 h-14",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <div className={`flex items-center gap-2 select-none max-w-[220px] overflow-hidden ${className}`}>
      {/* Premium SVG Icon combining Rising Sun, Graduation Cap, and Open Book */}
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${iconSizes[size]} flex-shrink-0 filter drop-shadow-sm`}
      >
        <defs>
          <linearGradient id="sun-gradient" x1="60" y1="20" x2="60" y2="70" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FACC15" />
            <stop offset="100%" stopColor="#EAB308" />
          </linearGradient>

          <linearGradient id="cap-gradient" x1="60" y1="15" x2="60" y2="55" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>

          <linearGradient id="book-gradient" x1="60" y1="65" x2="60" y2="105" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
        </defs>

        {/* 1. RISING SUN */}
        <circle cx="60" cy="55" r="26" fill="url(#sun-gradient)" opacity="0.85" />
        
        {/* Sun Rays */}
        <g stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" opacity="0.9">
          <line x1="60" y1="20" x2="60" y2="10" />
          <line x1="35" y1="35" x2="28" y2="28" />
          <line x1="85" y1="35" x2="92" y2="28" />
          <line x1="30" y1="55" x2="20" y2="55" />
          <line x1="90" y1="55" x2="100" y2="55" />
          <line x1="42" y1="73" x2="35" y2="80" />
          <line x1="78" y1="73" x2="85" y2="80" />
        </g>

        {/* 2. OPEN BOOK */}
        <path
          d="M 60 92 C 75 84, 95 86, 105 92 L 105 64 C 95 58, 75 56, 60 64 C 45 56, 25 58, 15 64 L 15 92 C 25 86, 45 84, 60 92 Z"
          fill="#1e3a8a"
          opacity="0.2"
        />
        <path
          d="M 60 88 C 75 80, 95 82, 105 88 L 105 60 C 95 54, 75 52, 60 60 C 45 52, 25 54, 15 60 L 15 88 C 25 82, 45 80, 60 88 Z"
          fill="url(#book-gradient)"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <line x1="60" y1="60" x2="60" y2="88" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        <path d="M 28 67 Q 38 63 48 67" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        <path d="M 28 73 Q 38 69 48 73" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        <path d="M 28 79 Q 38 75 48 79" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        <path d="M 72 67 Q 82 63 92 67" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        <path d="M 72 73 Q 82 69 92 73" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
        <path d="M 72 79 Q 82 75 92 79" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />

        {/* 3. GRADUATION CAP */}
        <path d="M 60 48 L 92 37 L 60 26 L 28 37 Z" fill="#000000" opacity="0.15" transform="translate(0, 3)" />
        <path d="M 40 37.5 C 40 47, 80 47, 80 37.5" fill="url(#cap-gradient)" stroke="#ffffff" strokeWidth="1" />
        <path d="M 60 44 L 95 33 L 60 22 L 25 33 Z" fill="url(#cap-gradient)" stroke="#ffffff" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M 60 33 L 42 39 L 40 49" stroke="#FACC15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="40" cy="51" r="2" fill="#FACC15" />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none flex-grow">
          <span
            className={`${textSizes[size]} font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-primary-dark via-primary to-secondary font-sans`}
          >
            SUNLIGHT
          </span>
          <span className="text-[9px] font-bold tracking-[0.25em] text-slate-500 uppercase mt-0.5">
            Academy
          </span>
        </div>
      )}
    </div>
  );
}
