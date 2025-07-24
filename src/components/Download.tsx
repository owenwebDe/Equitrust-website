import { Download as DownloadIcon, Smartphone, Shield, Zap, Star } from 'lucide-react';

const Download = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Mining",
      description: "Optimized mining algorithm for maximum efficiency"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure Wallet",
      description: "Built-in secure wallet with advanced encryption"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Easy to Use",
      description: "Simple interface designed for everyone"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Optimized",
      description: "Perfect performance on all Android devices"
    }
  ];

  const systemRequirements = [
    "Android 7.0 or higher",
    "2GB RAM minimum",
    "100MB storage space",
    "Internet connection required"
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <DownloadIcon className="h-12 w-12 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Download <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Equitrust AI</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-12">
            Start mining $EQAI tokens with our powerful and secure mobile application. 
            Join thousands of users already earning rewards through our innovative mining platform.
          </p>

          {/* Main Download Button */}
          <div className="mb-16">
            <a 
              href="/application-b8cc3892-b53e-4341-9881-15c91e6333d1.apk" 
              download
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-green-500 text-white px-12 py-6 rounded-xl text-xl font-bold hover:from-blue-700 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <DownloadIcon className="h-6 w-6" />
              Download APK Now
            </a>
            <p className="text-sm text-slate-400 mt-4">
              File size: ~75MB • Version 1.0 • Android 7.0+
            </p>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105"
            >
              <div className="bg-gradient-to-r from-blue-500 to-green-500 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-300 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Installation Instructions */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">How to Install</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Download the APK</h3>
                  <p className="text-slate-300 text-sm">Click the download button above to get the APK file</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Enable Unknown Sources</h3>
                  <p className="text-slate-300 text-sm">Go to Settings → Security → Enable "Unknown Sources"</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Install the App</h3>
                  <p className="text-slate-300 text-sm">Open the downloaded file and follow installation prompts</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Start Mining</h3>
                  <p className="text-slate-300 text-sm">Open the app and start earning $EQAI tokens!</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/30 border border-slate-700 rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-6">System Requirements</h2>
            <div className="space-y-3">
              {systemRequirements.map((requirement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-slate-300">{requirement}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-blue-900/30 border border-blue-500/30 rounded-lg">
              <h3 className="font-semibold text-blue-300 mb-2">Coming Soon</h3>
              <p className="text-slate-300 text-sm">
                iOS version and official Play Store release are in development. 
                Join our community to get notified when they're available!
              </p>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-500/30 rounded-xl p-8 text-center">
          <Shield className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-4">Security & Trust</h2>
          <p className="text-slate-300 mb-6 max-w-3xl mx-auto">
            Our APK is digitally signed and verified. We recommend only downloading from this official source. 
            The app requires minimal permissions and your private keys never leave your device.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-green-600/20 border border-green-500/30 px-4 py-2 rounded-lg">
              <span className="text-green-300 font-semibold">✓ Digitally Signed</span>
            </div>
            <div className="bg-green-600/20 border border-green-500/30 px-4 py-2 rounded-lg">
              <span className="text-green-300 font-semibold">✓ No Root Required</span>
            </div>
            <div className="bg-green-600/20 border border-green-500/30 px-4 py-2 rounded-lg">
              <span className="text-green-300 font-semibold">✓ Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;