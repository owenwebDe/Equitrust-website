import React, { useState } from 'react';
import { Wallet, ArrowRight, Copy, Check, ExternalLink, Shield, Clock } from 'lucide-react';

const HowToBuy = () => {
  const [copiedStep, setCopiedStep] = useState<number | null>(null);
  const contractAddress = "0x3303113001c51769f2753C2aFb7B5a6d0535660E";

  const copyToClipboard = (text: string, step: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(step);
    setTimeout(() => setCopiedStep(null), 2000);
  };

  const steps = [
    {
      number: 1,
      title: "Set Up Your Wallet",
      description: "Download and install a BNB Chain compatible wallet",
      details: [
        "Download MetaMask, Trust Wallet, or Binance Chain Wallet",
        "Create a new wallet or import existing one",
        "Secure your seed phrase safely",
        "Add BNB Smart Chain network to your wallet"
      ],
      action: "Download MetaMask",
      link: "https://metamask.io/download/"
    },
    {
      number: 2,
      title: "Get BNB",
      description: "Purchase BNB to use for swapping to $EQAI",
      details: [
        "Buy BNB from Binance, Coinbase, or other exchanges",
        "Transfer BNB to your wallet address",
        "Ensure you have enough BNB for gas fees (~$1-2)",
        "Verify BNB appears in your wallet"
      ],
      action: "Buy BNB",
      link: "https://www.binance.com/"
    },
    {
      number: 3,
      title: "Connect to PancakeSwap",
      description: "Access the decentralized exchange to swap tokens",
      details: [
        "Visit PancakeSwap official website",
        "Click 'Connect Wallet' and select your wallet",
        "Approve the connection in your wallet",
        "Ensure you're on BNB Smart Chain network"
      ],
      action: "Open PancakeSwap",
      link: "https://pancakeswap.finance/swap"
    },
    {
      number: 4,
      title: "Add $EQAI Token",
      description: "Import the $EQAI token contract to your wallet",
      details: [
        "Copy the contract address below",
        "In PancakeSwap, paste the contract address",
        "Verify token details match: Equitrust ($EQAI)",
        "Add token to your wallet for easy tracking"
      ],
      action: "Copy Contract",
      copyText: contractAddress
    },
    {
      number: 5,
      title: "Make the Swap",
      description: "Exchange your BNB for $EQAI tokens",
      details: [
        "Enter the amount of BNB you want to swap",
        "Set slippage tolerance to 3-5% if needed",
        "Review the transaction details carefully",
        "Confirm the swap in your wallet"
      ],
      action: "Start Trading",
      link: "#swap"
    }
  ];

  const walletOptions = [
    {
      name: "MetaMask",
      description: "Most popular Web3 wallet",
      logo: "/meta maak.webp",
      link: "https://metamask.io/"
    },
    {
      name: "Trust Wallet",
      description: "Mobile-first crypto wallet",
      logo: "/trust wallet.webp",
      link: "https://trustwallet.com/"
    },
    {
      name: "Binance Wallet",
      description: "Official Binance wallet",
      logo: "/binance.webp",
      link: "https://www.binance.org/"
    }
  ];

  return (
    <section id="how-to-buy" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How to Buy $EQAI
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Follow these simple steps to purchase $EQAI tokens and join the Equitrust ecosystem
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
            <Shield className="h-8 w-8 text-green-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Secure</h3>
            <p className="text-slate-300 text-sm">Audited smart contract on BNB Chain</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
            <Clock className="h-8 w-8 text-blue-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Fast</h3>
            <p className="text-slate-300 text-sm">Instant swaps with low gas fees</p>
          </div>
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
            <Wallet className="h-8 w-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">Easy</h3>
            <p className="text-slate-300 text-sm">Simple 5-step process</p>
          </div>
        </div>

        {/* Step-by-step guide */}
        <div className="space-y-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-gradient-to-r from-blue-500 to-green-400 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {step.title}
                      </h3>
                      <p className="text-slate-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 ml-16">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-slate-300">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 lg:mt-0 lg:ml-8">
                  {step.copyText ? (
                    <button
                      onClick={() => copyToClipboard(step.copyText!, step.number)}
                      className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-200 flex items-center"
                    >
                      {copiedStep === step.number ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          {step.action}
                        </>
                      )}
                    </button>
                  ) : (
                    <a
                      href={step.link}
                      target={step.link?.startsWith('http') ? '_blank' : '_self'}
                      rel={step.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-200 flex items-center"
                    >
                      {step.action}
                      {step.link?.startsWith('http') ? (
                        <ExternalLink className="h-4 w-4 ml-2" />
                      ) : (
                        <ArrowRight className="h-4 w-4 ml-2" />
                      )}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contract Address Highlight */}
        <div className="bg-gradient-to-r from-blue-900/50 to-green-900/50 border border-blue-500/30 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            $EQAI Contract Address
          </h3>
          <div className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-between">
              <code className="text-green-400 text-sm md:text-base font-mono break-all">
                {contractAddress}
              </code>
              <button
                onClick={() => copyToClipboard(contractAddress, 0)}
                className="ml-3 p-2 hover:bg-slate-700 rounded-lg transition-colors flex-shrink-0"
              >
                {copiedStep === 0 ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4 text-slate-400" />
                )}
              </button>
            </div>
          </div>
          <p className="text-center text-slate-300 mt-4 text-sm">
            Always verify the contract address before making any transactions
          </p>
        </div>

        {/* Supported Wallets */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Supported Wallets
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {walletOptions.map((wallet, index) => (
              <a
                key={index}
                href={wallet.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 text-center"
              >
                <div className="mb-3 flex justify-center">
                  <img 
                    src={wallet.logo} 
                    alt={wallet.name} 
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {wallet.name}
                </h4>
                <p className="text-slate-300 text-sm">
                  {wallet.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;