import React from 'react';
import { CheckCircle, Clock, ArrowRight } from 'lucide-react';

const Roadmap = () => {
  const roadmapItems = [
    {
      phase: "Q1 2024",
      title: "Foundation & Launch",
      status: "completed",
      items: [
        "Token Launch on BNB Chain",
        "Initial Liquidity Pool Creation",
        "Website Development",
        "Community Building"
      ]
    },
    {
      phase: "Q2 2024",
      title: "Mining App & Trading",
      status: "in-progress",
      items: [
        "Mining Application Release",
        "Direct Token Trading Integration",
        "Live Charts Implementation",
        "Android APK Distribution"
      ]
    },
    {
      phase: "Q3 2024",
      title: "AI Integration",
      status: "upcoming",
      items: [
        "AI Trading Bots Development",
        "Signal Analysis Tools",
        "iOS App Store Launch",
        "Advanced Analytics Dashboard"
      ]
    },
    {
      phase: "Q4 2024",
      title: "Ecosystem Expansion",
      status: "planned",
      items: [
        "Play Store Release",
        "Partnership Integrations",
        "Staking Mechanisms",
        "Cross-chain Compatibility"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-6 w-6 text-green-400" />;
      case 'in-progress':
        return <Clock className="h-6 w-6 text-yellow-400" />;
      default:
        return <ArrowRight className="h-6 w-6 text-slate-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-500/50 bg-green-900/20';
      case 'in-progress':
        return 'border-yellow-500/50 bg-yellow-900/20';
      default:
        return 'border-slate-600 bg-slate-800/30';
    }
  };

  return (
    <section id="roadmap" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Roadmap
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A detailed timeline of our upcoming milestones and achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className={`border rounded-xl p-6 transition-all duration-300 hover:scale-105 ${getStatusColor(item.status)}`}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-blue-400 font-semibold">
                    {item.phase}
                  </p>
                </div>
                {getStatusIcon(item.status)}
              </div>
              
              <ul className="space-y-2">
                {item.items.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-slate-300"
                  >
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-4 pt-4 border-t border-slate-600">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  item.status === 'completed' ? 'bg-green-900/50 text-green-300' :
                  item.status === 'in-progress' ? 'bg-yellow-900/50 text-yellow-300' :
                  'bg-slate-700/50 text-slate-400'
                }`}>
                  {item.status === 'completed' ? 'Completed' :
                   item.status === 'in-progress' ? 'In Progress' :
                   item.status === 'upcoming' ? 'Upcoming' : 'Planned'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;