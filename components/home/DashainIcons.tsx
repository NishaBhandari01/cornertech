import React from 'react';


export const TikaIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">

    <circle cx="16" cy="16" r="14" fill="#DC2626" fillOpacity="0.25" />

    <ellipse cx="16" cy="16" rx="7" ry="9" fill="url(#tikaGrad)" />
    <ellipse cx="16" cy="15" rx="5" ry="7" fill="#EF4444" />

    <ellipse cx="15" cy="12" rx="1.2" ry="2" fill="#FEF08A" transform="rotate(-15 15 12)" />
    <ellipse cx="18" cy="16" rx="1.2" ry="2" fill="#FEF08A" transform="rotate(25 18 16)" />
    <ellipse cx="14" cy="18" rx="1.2" ry="2" fill="#FEF08A" transform="rotate(-30 14 18)" />
    <circle cx="16" cy="15" r="1.5" fill="#FEF9C3" />
    <defs>
      <linearGradient id="tikaGrad" x1="9" y1="7" x2="23" y2="25" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F87171" />
        <stop offset="0.5" stopColor="#DC2626" />
        <stop offset="1" stopColor="#991B1B" />
      </linearGradient>
    </defs>
  </svg>
);


export const JamaraIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" strokeLinecap="round" strokeLinejoin="round">

    <path d="M10 24h12l-2 6H12l-2-6z" fill="#B45309" stroke="#92400E" strokeWidth="1.5" />
    <ellipse cx="16" cy="24" rx="6" ry="1.5" fill="#D97706" />

    <path d="M16 24V12" stroke="#F59E0B" strokeWidth="2" />
    <path d="M15 24C13 18 10 12 6 9c1 6 4 11 9 15z" fill="#10B981" fillOpacity="0.4" stroke="#34D399" strokeWidth="1.5" />
    <path d="M17 24c2-6 5-12 9-15-1 6-4 11-9 15z" fill="#34D399" fillOpacity="0.5" stroke="#6EE7B7" strokeWidth="1.5" />
    <path d="M16 24c-1-7-1-13 0-18 1 5 1 11 0 18z" fill="#FBBF24" stroke="#FDE047" strokeWidth="1.2" />
  </svg>
);


export const ChangaIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none">

    <path d="M16 2L28 16L16 30L4 16L16 2Z" fill="url(#kiteGrad)" stroke="#FBBF24" strokeWidth="1.5" />

    <line x1="16" y1="2" x2="16" y2="30" stroke="#B45309" strokeWidth="1.2" />
    <line x1="4" y1="16" x2="28" y2="16" stroke="#B45309" strokeWidth="1.2" />
    <path d="M10 10L22 22" stroke="#FEF3C7" strokeWidth="0.8" opacity="0.6" />

    <path d="M16 30C14 34 18 36 16 40" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
    <defs>
      <linearGradient id="kiteGrad" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F59E0B" />
        <stop offset="0.5" stopColor="#D97706" />
        <stop offset="1" stopColor="#B45309" />
      </linearGradient>
    </defs>
  </svg>
);


export const PingIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" strokeLinecap="round">

    <line x1="6" y1="6" x2="26" y2="6" stroke="#F59E0B" strokeWidth="3" />
  
    <line x1="8" y1="6" x2="4" y2="28" stroke="#D97706" strokeWidth="2" />
    <line x1="10" y1="6" x2="8" y2="28" stroke="#B45309" strokeWidth="2" />

    <line x1="24" y1="6" x2="28" y2="28" stroke="#D97706" strokeWidth="2" />
    <line x1="22" y1="6" x2="24" y2="28" stroke="#B45309" strokeWidth="2" />

    <line x1="6" y1="18" x2="12" y2="18" stroke="#92400E" strokeWidth="1.5" />
    <line x1="20" y1="18" x2="26" y2="18" stroke="#92400E" strokeWidth="1.5" />
    <g className="origin-top animate-[pingSwing_3s_ease-in-out_infinite]">
      <line x1="14" y1="6" x2="14" y2="20" stroke="#FEF3C7" strokeWidth="1.2" strokeDasharray="2 2" />
      <line x1="18" y1="6" x2="18" y2="20" stroke="#FEF3C7" strokeWidth="1.2" strokeDasharray="2 2" />
      <rect x="12" y="20" width="8" height="2.5" rx="1" fill="#F59E0B" stroke="#FDE047" strokeWidth="1" />
    </g>
  </svg>
);


export const PujaFlowerIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg 
    className={className} 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer Glow / Radiance */}
    <circle cx="16" cy="16" r="14" fill="#F59E0B" fillOpacity="0.2" />

    {/* Marigold Petals Layer (Back) */}
    <g className="origin-center animate-spin-slow">
      {[...Array(10)].map((_, i) => (
        <ellipse
          key={i}
          cx="16"
          cy="16"
          rx="4.5"
          ry="11"
          fill="url(#orangePetalGrad)"
          transform={`rotate(${i * 36} 16 16)`}
          stroke="#FCD34D"
          strokeWidth="0.4"
        />
      ))}
    </g>

    {/* Center Flower Core (Inner Blossoms) */}
    <circle cx="16" cy="16" r="6" fill="#D97706" />
    <circle cx="16" cy="16" r="4.5" fill="#F59E0B" />
    <circle cx="16" cy="16" r="2.5" fill="#FEF08A" />

    {/* SVG Gradients */}
    <defs>
      <linearGradient id="orangePetalGrad" x1="16" y1="5" x2="16" y2="27" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE047" />
        <stop offset="0.35" stopColor="#F59E0B" />
        <stop offset="0.8" stopColor="#EA580C" />
        <stop offset="1" stopColor="#C2410C" />
      </linearGradient>
    </defs>
  </svg>
);