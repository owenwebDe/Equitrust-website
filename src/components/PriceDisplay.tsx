import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, RefreshCw, DollarSign, Activity, BarChart3 } from 'lucide-react';

const PriceDisplay = () => {
  const [priceData, setPriceData] = useState({
    current: 0,
    change24h: 0,
    volume24h: 0,
    marketCap: 0,
    symbol: 'BabyGrok',
    name: 'Baby Grok'
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [chartType, setChartType] = useState<'poocoin' | 'dexscreener'>('dexscreener');

  const contractAddress = "0x3303113001c51769f2753C2aFb7B5a6d0535660E";

  const fetchPriceData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await fetch(`https://api.dexscreener.com/tokens/v1/bsc/${contractAddress}`);
      
      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }
      
      const pairs = await response.json();
      
      if (pairs && pairs.length > 0) {
        const pair = pairs[0];
        
        setPriceData({
          current: parseFloat(pair.priceUsd) || 0,
          change24h: parseFloat(pair.priceChange?.h24) || 0,
          volume24h: parseFloat(pair.volume?.h24) || 0,
          marketCap: parseFloat(pair.marketCap) || parseFloat(pair.fdv) || 0,
          symbol: pair.baseToken?.symbol || 'BabyGrok',
          name: pair.baseToken?.name || 'Baby Grok'
        });
        
        setLastUpdated(new Date());
      } else {
        throw new Error('No trading data found');
      }
    } catch (err) {
      console.error('Error fetching price data:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPriceData();
    
    // Auto-refresh every 60 seconds
    const interval = setInterval(fetchPriceData, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number) => {
    if (price < 0.001) {
      return price.toFixed(8);
    }
    return price.toFixed(6);
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(2) + 'K';
    }
    return num.toLocaleString();
  };

  const handleRefresh = () => {
    if (!isLoading) {
      fetchPriceData();
    }
  };

  return (
    <section id="price" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Live Token Price
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Real-time ${priceData.symbol} price data and market statistics
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Current Price */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-green-400" />
                Current Price
              </h3>
              <button
                onClick={handleRefresh}
                disabled={isLoading}
                className="p-2 hover:bg-slate-700 rounded-lg transition-colors disabled:opacity-50"
              >
                <RefreshCw className={`h-4 w-4 text-slate-400 ${isLoading ? 'animate-spin' : ''}`} />
              </button>
            </div>
            
            {error ? (
              <div className="text-yellow-400 text-sm">
                {error}
              </div>
            ) : (
              <>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                  ${priceData.current > 0 ? formatPrice(priceData.current) : 'Loading...'}
                </div>
                {priceData.current > 0 && (
                  <div className="text-green-400 text-sm">
                    ✓ Live from DexScreener
                  </div>
                )}
              </>
            )}
          </div>

          {/* 24h Change */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white flex items-center mb-4">
              <Activity className="h-5 w-5 mr-2 text-blue-400" />
              24h Change
            </h3>
            <div className={`flex items-center text-2xl md:text-3xl font-bold mb-2 ${
              priceData.change24h >= 0 ? 'text-green-400' : 'text-red-400'
            }`}>
              {priceData.change24h >= 0 ? (
                <TrendingUp className="h-6 w-6 mr-2" />
              ) : (
                <TrendingDown className="h-6 w-6 mr-2" />
              )}
              {priceData.change24h >= 0 ? '+' : ''}{priceData.change24h.toFixed(2)}%
            </div>
          </div>

          {/* 24h Volume */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white flex items-center mb-4">
              <BarChart3 className="h-5 w-5 mr-2 text-purple-400" />
              24h Volume
            </h3>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">
              ${priceData.volume24h > 0 ? formatNumber(priceData.volume24h) : '--'}
            </div>
          </div>

          {/* Market Cap */}
          <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white flex items-center mb-4">
              <DollarSign className="h-5 w-5 mr-2 text-yellow-400" />
              Market Cap
            </h3>
            <div className="text-2xl md:text-3xl font-bold text-white mb-2">
              ${priceData.marketCap > 0 ? formatNumber(priceData.marketCap) : '--'}
            </div>
          </div>
        </div>

        {/* Real-Time Chart */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 mb-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Real-Time Price Chart
          </h3>
          
          {/* Chart Tabs */}
          <div className="flex justify-center mb-6">
            <div className="bg-slate-700/50 rounded-lg p-1">
              <button 
                onClick={() => setChartType('poocoin')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  chartType === 'poocoin' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                PooCoin Chart
              </button>
              <button 
                onClick={() => setChartType('dexscreener')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  chartType === 'dexscreener' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                DexScreener Chart
              </button>
            </div>
          </div>

          <div className="relative w-full h-[500px] rounded-lg overflow-hidden">
            {chartType === 'poocoin' ? (
              <iframe
                src={`https://poocoin.app/embed-swap?token=${contractAddress}`}
                width="100%"
                height="500"
                frameBorder="0"
                allow="clipboard-read; clipboard-write"
                className="rounded-lg"
                title="PooCoin Chart"
              />
            ) : (
              <iframe
                src={`https://dexscreener.com/bsc/${contractAddress}?embed=1&theme=dark`}
                width="100%"
                height="500"
                frameBorder="0"
                className="rounded-lg"
                title="DexScreener Chart"
              />
            )}
          </div>
          
          <div className="text-center mt-4">
            <p className="text-slate-400 text-sm">
              {chartType === 'poocoin' 
                ? 'Interactive chart powered by PooCoin • Click to trade on PancakeSwap'
                : 'Professional chart powered by DexScreener • Real-time price movements'
              }
            </p>
          </div>
        </div>

        {/* Token Info */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            {priceData.name} (${priceData.symbol})
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-400 mb-2">Contract Address</p>
              <p className="text-green-400 font-mono text-sm break-all">
                {contractAddress}
              </p>
            </div>
            <div>
              <p className="text-slate-400 mb-2">Last Updated</p>
              <p className="text-white">
                {lastUpdated ? lastUpdated.toLocaleTimeString() : 'Never'}
              </p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="text-center mt-8">
          <p className="text-slate-400 text-sm">
            Data provided by DexScreener API • Updates every minute
          </p>
        </div>
      </div>
    </section>
  );
};

export default PriceDisplay;