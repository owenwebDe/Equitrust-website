import { TrendingUp, Smartphone, ArrowLeftRight } from 'lucide-react';

interface NewFeaturesProps {
  setCurrentPage?: (page: string) => void;
}

const NewFeatures = ({ setCurrentPage }: NewFeaturesProps) => {
  return (
    <section id="trading" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            New Features
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Enhanced functionality to elevate your $EQAI experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Token Trading */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-green-400 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <ArrowLeftRight className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Token Trading</h3>
            <p className="text-slate-300 mb-6">
              Buy and sell $EQAI directly through PancakeSwap integration. Seamless trading with the best rates.
            </p>
            <a 
              href="#swap" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              Start Trading
            </a>
          </div>

          {/* Live Charts */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 hover:border-green-500/50 transition-all duration-300">
            <div className="bg-gradient-to-r from-green-500 to-blue-400 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Live Charts</h3>
            <p className="text-slate-300 mb-6">
              View real-time price charts sourced from PancakeSwap. Stay updated with the latest market movements and trends.
            </p>
            <a 
              href="#price" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
            >
              View Charts
            </a>
          </div>

          {/* App Download */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-xl p-8 hover:border-yellow-500/50 transition-all duration-300">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-400 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Smartphone className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">App Download</h3>
            <p className="text-slate-300 mb-6">
              Download our mining app for iOS (coming soon) and Android (APK available now). Play Store and App Store launches coming soon.
            </p>
            <div className="space-y-2">
              <button 
                onClick={() => setCurrentPage?.('download')}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                Download APK
              </button>
              <button className="w-full bg-slate-600 text-slate-400 px-6 py-3 rounded-lg cursor-not-allowed" disabled>
                iOS Coming Soon
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewFeatures;