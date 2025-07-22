import React from 'react';
import { Pickaxe, Bot, Coins, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Coins className="h-8 w-8" />,
      title: "Utility Token",
      description: "$EQAI is designed for real-world use within our ecosystem, providing genuine value and functionality."
    },
    {
      icon: <Pickaxe className="h-8 w-8" />,
      title: "Mining Application", 
      description: "Earn $EQAI by completing simple tasks. Making crypto mining fun, accessible, and rewarding for everyone."
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Trading Bots",
      description: "Upcoming AI-powered trading and signal bots to optimize your trading experience and maximize profits."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "BNB Chain",
      description: "Built on the fast and efficient BNB Chain, ensuring low fees and quick transaction processing."
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Key Features
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Discover what makes Equitrust the future of cryptocurrency mining and trading
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:border-blue-500/50"
            >
              <div className="bg-gradient-to-r from-blue-500 to-green-400 w-16 h-16 rounded-lg flex items-center justify-center mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;