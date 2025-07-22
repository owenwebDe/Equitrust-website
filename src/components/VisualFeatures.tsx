import React from 'react';
import { Brain, Zap, Shield, TrendingUp, Cpu, Network, Globe, Lock } from 'lucide-react';

const VisualFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Trading',
      description: 'Advanced machine learning algorithms analyze market patterns in real-time',
      gradient: 'from-blue-500 to-cyan-500',
      delay: '0ms'
    },
    {
      icon: Zap,
      title: 'Lightning Fast Execution',
      description: 'Execute trades in milliseconds with our optimized infrastructure',
      gradient: 'from-purple-500 to-pink-500',
      delay: '200ms'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Multi-layer security protocols protect your assets and data',
      gradient: 'from-green-500 to-emerald-500',
      delay: '400ms'
    },
    {
      icon: TrendingUp,
      title: 'Smart Analytics',
      description: 'Comprehensive market insights and predictive analytics dashboard',
      gradient: 'from-orange-500 to-red-500',
      delay: '600ms'
    },
    {
      icon: Cpu,
      title: 'Neural Networks',
      description: 'Deep learning models continuously adapt to market conditions',
      gradient: 'from-indigo-500 to-purple-500',
      delay: '800ms'
    },
    {
      icon: Network,
      title: 'Decentralized Mining',
      description: 'Participate in distributed computation and earn rewards',
      gradient: 'from-teal-500 to-cyan-500',
      delay: '1000ms'
    },
    {
      icon: Globe,
      title: 'Global Liquidity',
      description: 'Access liquidity pools across multiple blockchain networks',
      gradient: 'from-blue-500 to-indigo-500',
      delay: '1200ms'
    },
    {
      icon: Lock,
      title: 'Vault Technology',
      description: 'Secure asset storage with multi-signature protection',
      gradient: 'from-gray-500 to-slate-500',
      delay: '1400ms'
    }
  ];

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-900">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        {/* Animated SVG Background */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="#404040" strokeWidth="0.5" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-zinc-900/50 border border-zinc-700/50 rounded-full px-6 py-3 mb-8">
            <Cpu className="h-5 w-5 text-blue-400 mr-3" />
            <span className="text-zinc-300 font-medium">Next-Generation Infrastructure</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Built for the
            <span className="block gradient-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Future of Finance
            </span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Experience the convergence of artificial intelligence and blockchain technology 
            with our comprehensive suite of trading and mining tools.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              style={{ animationDelay: feature.delay }}
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur p-[1px]"
                   style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur opacity-20`}></div>
              </div>
              
              <div className="relative bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 hover:border-zinc-700 rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-4px] group-hover:bg-zinc-900/70">
                {/* Icon with Gradient Background */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                  <div className="relative bg-zinc-800/50 p-4 rounded-xl border border-zinc-700 group-hover:border-zinc-600 transition-colors">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                    style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }}>
                  {feature.title}
                </h3>
                
                <p className="text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {feature.description}
                </p>

                {/* Hover Effect Glow */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center">
              <Brain className="mr-3 h-5 w-5" />
              Explore AI Features
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VisualFeatures;