import React from 'react';
import { ArrowRight, Copy, Check, Sparkles, TrendingUp, Zap, Play } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  const [copied, setCopied] = React.useState(false);
  const contractAddress = "0xfEcb15A1810F80Ce6E562c172359565774F47EE8";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <AnimatedBackground />

      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto z-10 px-4">
          {/* Two Column Layout - Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            
            {/* Left Side - Main Content */}
            <div className="space-y-6 md:space-y-8 text-center lg:text-left order-1 lg:order-1">
              {/* Coming Soon Badge */}
              <div className="inline-flex items-center bg-white/10 border border-white/20 rounded-full px-4 md:px-6 py-2 md:py-3 backdrop-blur-sm">
                <Sparkles className="h-3 w-3 md:h-4 md:w-4 text-white mr-2" />
                <span className="text-xs md:text-sm font-medium text-white">AI Trading Bot Launching Soon</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-3 md:space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tight">
                  <span className="block">EquiTrust Ai</span>
                  <span className="block text-white">$EQAI</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed">
                  Earn Rewards Through
                  <span className="text-white font-semibold"> AI-Powered Mining</span>
                </p>
                <p className="text-base md:text-lg text-gray-400 max-w-lg mx-auto lg:mx-0">
                  Join the next generation of cryptocurrency mining with our revolutionary AI algorithms and start earning $EQAI tokens today.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 justify-center lg:justify-start">
                <a 
                  href="#features" 
                  className="group bg-white text-black text-lg md:text-xl font-bold px-6 md:px-8 py-3 md:py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  <div className="flex items-center justify-center">
                    <Zap className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5" />
                    Start Mining Now
                    <ArrowRight className="ml-2 md:ml-3 h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
                <a 
                  href="#swap" 
                  className="group bg-transparent border-2 border-white text-white text-lg md:text-xl font-semibold px-6 md:px-8 py-3 md:py-4 rounded-2xl transition-all duration-300 hover:bg-white hover:text-black flex items-center justify-center"
                >
                  <Play className="mr-2 md:mr-3 h-4 w-4 md:h-5 md:w-5" />
                  Trade $EQAI
                </a>
              </div>
            </div>

            {/* Right Side - Stats & Contract */}
            <div className="space-y-6 md:space-y-8 order-2 lg:order-2">
              {/* Mining Stats */}
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 text-center lg:text-left">Mining Features</h3>
                <div className="space-y-3 md:space-y-4">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">24/7</div>
                    <div className="text-gray-300 font-medium text-sm md:text-base">Mining Active</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">AI-Powered</div>
                    <div className="text-gray-300 font-medium text-sm md:text-base">Smart Mining</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2">Instant</div>
                    <div className="text-gray-300 font-medium text-sm md:text-base">Rewards</div>
                  </div>
                </div>
              </div>

              {/* Contract Address */}
              <div className="bg-black/20 backdrop-blur-xl border border-white/20 rounded-2xl md:rounded-3xl p-4 md:p-6">
                <div className="flex items-center mb-3 md:mb-4">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full mr-2 md:mr-3"></div>
                  <span className="text-gray-300 font-medium text-xs md:text-sm">Contract Address - BSC Network</span>
                </div>
                <div className="flex items-center justify-between bg-black/40 rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/10">
                  <code className="text-white text-xs md:text-sm font-mono truncate mr-2 md:mr-4 flex-1">
                    {contractAddress}
                  </code>
                  <button
                    onClick={copyToClipboard}
                    className="flex-shrink-0 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 p-2 rounded-lg transition-all duration-200"
                  >
                    {copied ? (
                      <Check className="h-3 w-3 md:h-4 md:w-4 text-white" />
                    ) : (
                      <Copy className="h-3 w-3 md:h-4 md:w-4 text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Subtle floating elements */}
        <div className="absolute top-32 left-8 w-2 h-2 bg-blue-400/50 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-8 w-2 h-2 bg-purple-400/50 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-16 w-1 h-1 bg-cyan-400/50 rounded-full animate-pulse delay-2000"></div>
      </section>
    </>
  );
};

export default Hero;