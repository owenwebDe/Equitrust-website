import React from 'react';

interface AnimatedLogoProps {
  size?: number;
  className?: string;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({ size = 100, className = "" }) => {
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      {/* Animated SVG Logo */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        className="relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="logoGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          
          {/* Glow Filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Outer Ring */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          strokeDasharray="100 20"
          className="animate-spin"
          style={{ animationDuration: '20s', transformOrigin: '50% 50%' }}
          filter="url(#glow)"
        />

        {/* Inner Ring */}
        <circle
          cx="50"
          cy="50"
          r="35"
          fill="none"
          stroke="url(#logoGradient2)"
          strokeWidth="1"
          strokeDasharray="80 15"
          className="animate-spin"
          style={{ animationDuration: '15s', animationDirection: 'reverse', transformOrigin: '50% 50%' }}
        />

        {/* Central Core */}
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="url(#logoGradient)"
          className="animate-pulse"
          filter="url(#glow)"
        />

        {/* Lightning Bolt */}
        <path
          d="M42 35 L48 35 L44 50 L56 50 L52 65 L58 65 L46 75 L50 60 L38 60 L42 35 Z"
          fill="white"
          className="animate-pulse"
          style={{ animationDelay: '0.5s' }}
        />

        {/* Floating Particles */}
        <circle cx="25" cy="25" r="1.5" fill="#3b82f6" className="animate-ping" />
        <circle cx="75" cy="25" r="1" fill="#8b5cf6" className="animate-ping" style={{ animationDelay: '1s' }} />
        <circle cx="25" cy="75" r="1" fill="#06b6d4" className="animate-ping" style={{ animationDelay: '2s' }} />
        <circle cx="75" cy="75" r="1.5" fill="#10b981" className="animate-ping" style={{ animationDelay: '1.5s' }} />
      </svg>

      {/* Background Glow Effect */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-xl opacity-20 animate-pulse"
        style={{ animationDuration: '3s' }}
      ></div>
    </div>
  );
};

export default AnimatedLogo;