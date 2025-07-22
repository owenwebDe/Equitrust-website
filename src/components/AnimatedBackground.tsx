import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Primary gradient background with neural network effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950"></div>
      
      {/* Tech circuit board pattern background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='circuit' x='0' y='0' width='100' height='100' patternUnits='userSpaceOnUse'%3E%3Cpath d='M10 10h80v80h-80z' fill='none' stroke='%233b82f6' stroke-width='0.5' stroke-opacity='0.3'/%3E%3Ccircle cx='10' cy='10' r='2' fill='%233b82f6' fill-opacity='0.4'/%3E%3Ccircle cx='90' cy='10' r='2' fill='%238b5cf6' fill-opacity='0.4'/%3E%3Ccircle cx='10' cy='90' r='2' fill='%2306b6d4' fill-opacity='0.4'/%3E%3Ccircle cx='90' cy='90' r='2' fill='%233b82f6' fill-opacity='0.4'/%3E%3Cpath d='M10 50h80M50 10v80' stroke='%238b5cf6' stroke-width='0.3' stroke-opacity='0.2'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23circuit)'/%3E%3C/svg%3E")`
      }}></div>
      
      {/* Neural network nodes effect */}
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), 
                         radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.08) 0%, transparent 50%), 
                         radial-gradient(circle at 40% 80%, rgba(6, 182, 212, 0.06) 0%, transparent 50%), 
                         radial-gradient(circle at 90% 70%, rgba(16, 185, 129, 0.04) 0%, transparent 50%)`
      }}></div>
      
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/12 to-pink-500/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/8 to-blue-500/6 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {/* Large floating squares */}
        <div className="absolute top-32 left-16 w-2 h-2 bg-blue-400/30 rotate-45 animate-pulse"></div>
        <div className="absolute top-1/3 right-32 w-3 h-3 bg-purple-400/20 rotate-45 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-cyan-400/25 rotate-45 animate-pulse delay-2000"></div>
        
        {/* Medium floating circles */}
        <div className="absolute top-1/2 left-32 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 right-16 w-2 h-2 bg-purple-400/30 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-cyan-400/35 rounded-full animate-pulse delay-3000"></div>
        
        {/* Small accent dots */}
        <div className="absolute top-20 right-20 w-1 h-1 bg-green-400/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-yellow-400/30 rounded-full animate-ping delay-1000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23404040' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      {/* Animated SVG graphics */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        
        {/* Animated geometric paths */}
        <path
          d="M100 100 L200 150 L300 100 L400 200 L500 100"
          stroke="url(#gradient1)"
          strokeWidth="1"
          fill="none"
          opacity="0.3"
          className="animate-pulse"
        />
        <path
          d="M0 300 Q200 250 400 300 T800 300"
          stroke="url(#gradient2)"
          strokeWidth="2"
          fill="none"
          opacity="0.2"
          className="animate-pulse delay-1000"
        />
        
        {/* Floating geometric shapes */}
        <circle
          cx="150"
          cy="200"
          r="2"
          fill="#3b82f6"
          opacity="0.4"
          className="animate-pulse"
        />
        <circle
          cx="650"
          cy="400"
          r="1.5"
          fill="#8b5cf6"
          opacity="0.3"
          className="animate-pulse delay-2000"
        />
        <circle
          cx="450"
          cy="150"
          r="1"
          fill="#06b6d4"
          opacity="0.5"
          className="animate-pulse delay-500"
        />
      </svg>

      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10"></div>
    </div>
  );
};

export default AnimatedBackground;