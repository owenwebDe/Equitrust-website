import React from "react";
import { ExternalLink, Wallet, ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";

const PancakeSwapWidget = () => {
  const contractAddress = "0xfEcb15A1810F80Ce6E562c172359565774F47EE8";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pancakeSwapUrl = `https://pancakeswap.finance/swap?theme=dark&inputCurrency=BNB&outputCurrency=${contractAddress}&exactAmount=1&exactField=input`;

  return (
    <section id="swap" className="relative w-full min-h-screen bg-black py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trade $EQAI Now
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Buy and sell $EQAI tokens on PancakeSwap with the best rates on BSC
          </p>
        </div>

        {/* Trading Card */}
        <div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 md:p-12">
          {/* Contract Address */}
          <div className="mb-8">
            <h3 className="text-white font-semibold mb-4 text-lg">Contract Address (BSC)</h3>
            <div className="flex items-center justify-between bg-black/40 rounded-2xl p-4 border border-zinc-700">
              <code className="text-blue-400 font-mono text-sm break-all mr-4 flex-1">
                {contractAddress}
              </code>
              <button
                onClick={copyToClipboard}
                className="flex-shrink-0 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 p-3 rounded-lg transition-all duration-200"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4 text-white" />
                )}
              </button>
            </div>
          </div>

          {/* Trade Button */}
          <div className="text-center">
            <a
              href={pancakeSwapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold text-xl px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl mb-6"
            >
              <Wallet className="mr-3 h-6 w-6" />
              Trade on PancakeSwap
              <ExternalLink className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              This will open PancakeSwap in a new tab where you can connect your wallet directly for secure trading
            </p>
          </div>

          {/* Trading Steps */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-xl p-4 mb-4">
                <Wallet className="h-8 w-8 text-blue-400 mx-auto" />
              </div>
              <h4 className="text-white font-semibold mb-2">1. Connect Wallet</h4>
              <p className="text-gray-400 text-sm">Connect your Trust Wallet, MetaMask, or any BSC-compatible wallet</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 mb-4">
                <ArrowRight className="h-8 w-8 text-green-400 mx-auto" />
              </div>
              <h4 className="text-white font-semibold mb-2">2. Swap Tokens</h4>
              <p className="text-gray-400 text-sm">Exchange BNB for $EQAI tokens with just a few clicks</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-500/20 border border-purple-500/30 rounded-xl p-4 mb-4">
                <Check className="h-8 w-8 text-purple-400 mx-auto" />
              </div>
              <h4 className="text-white font-semibold mb-2">3. Start Mining</h4>
              <p className="text-gray-400 text-sm">Hold $EQAI and start earning rewards through AI-powered mining</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PancakeSwapWidget;
