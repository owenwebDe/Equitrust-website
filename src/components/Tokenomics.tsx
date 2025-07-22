import React from 'react';
import { PieChart, Shield, TrendingUp, Users } from 'lucide-react';

const Tokenomics = () => {
  const tokenomicsData = [
    {
      icon: <Shield className="h-6 w-6" />,
      label: "No Developer Allocation",
      percentage: "0%",
      description: "Complete transparency with zero developer tokens",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      label: "Liquidity Pool",
      percentage: "60%",
      description: "Ensuring stable trading and market depth",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="h-6 w-6" />,
      label: "Marketing & Growth",
      percentage: "40%",
      description: "Community building and ecosystem expansion",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="tokenomics" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Tokenomics
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Transparent distribution with no developer allocation - all funds directed to liquidity and marketing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Chart Placeholder */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-green-500/20 rounded-full w-64 h-64 mx-auto flex items-center justify-center">
              <PieChart className="h-32 w-32 text-blue-400" />
            </div>
            <div className="text-center mt-6">
              <p className="text-2xl font-bold text-white">$EQAI</p>
              <p className="text-slate-400">Token Distribution</p>
            </div>
          </div>

          {/* Distribution Details */}
          <div className="space-y-6">
            {tokenomicsData.map((item, index) => (
              <div
                key={index}
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`bg-gradient-to-r ${item.color} w-12 h-12 rounded-lg flex items-center justify-center text-white`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {item.label}
                    </h3>
                  </div>
                  <span className="text-2xl font-bold text-green-400">
                    {item.percentage}
                  </span>
                </div>
                <p className="text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Highlights */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/50 to-green-900/50 border border-blue-500/30 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Why Our Tokenomics Matter
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <p className="text-slate-300">Community Focused</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">60%</div>
              <p className="text-slate-300">Liquidity Secured</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">0%</div>
              <p className="text-slate-300">Dev Allocation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;