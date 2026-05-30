import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  size?: number;
}

export default function Logo({ className = "", variant = 'full', size = 32 }: LogoProps) {
  const cream = "#f1ede4";
  const navy = "#11212d";

  const IconSVG = (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      {/* Shield Shape */}
      <path 
        d="M10 20V60C10 85 50 110 50 110C50 110 90 85 90 60V20H10Z" 
        stroke="currentColor" 
        strokeWidth="8" 
        strokeLinejoin="round" 
      />
      {/* Right side solid block */}
      <rect x="55" y="35" width="23" height="50" fill="currentColor" />
    </svg>
  );

  if (variant === 'icon') return <div className={`text-brand-accent ${className}`}>{IconSVG}</div>;

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="text-brand-accent">{IconSVG}</div>
      
      {/* Vertical Separator */}
      <div className="h-12 w-[1px] bg-brand-accent/30" />

      <div className="flex flex-col justify-center">
        <span 
          className="font-semibold tracking-tight text-brand-accent leading-none" 
          style={{ fontSize: size * 0.95 }}
        >
          LedgerPro
        </span>
        <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-brand-accent/60">
          Precision. Trust. Innovation.
        </span>
      </div>
    </div>
  );
}
