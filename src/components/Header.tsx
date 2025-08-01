import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Header = ({ setCurrentPage }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'Protocol',
      items: [
        { href: '#features', label: 'Features' },
        { href: '#tokenomics', label: 'Tokenomics' },
        { href: '#roadmap', label: 'Roadmap' }
      ]
    },
    {
      label: 'Products',
      items: [
        { href: '#swap', label: 'DEX Trading' },
        { href: '#charts', label: 'Analytics' },
        { href: '#mining', label: 'AI Mining' }
      ]
    },
    {
      label: 'Ecosystem',
      items: [
        { href: '#community', label: 'Community' },
        { href: '#partnerships', label: 'Partners' },
        { href: '#developers', label: 'Developers' }
      ]
    },
    { href: '#how-to-buy', label: 'Get Started', single: true },
    { 
      onClick: () => setCurrentPage('download'), 
      label: 'Download App', 
      single: true, 
      isButton: true 
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-zinc-800' 
        : 'bg-transparent'
    }`}>
      {/* Header Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-zinc-900/30 to-black/20"></div>
        
        {/* Animated Elements */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23404040' fill-opacity='0.1'%3E%3Cpath d='M40 40V0h-1v40h1zM39 1v38h-38v1h39V1z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-4 left-16 w-1 h-1 bg-blue-400/40 rounded-full animate-ping"></div>
        <div className="absolute top-6 right-32 w-1 h-1 bg-purple-400/30 rounded-full animate-ping delay-500"></div>
        <div className="absolute top-8 left-1/2 w-1 h-1 bg-cyan-400/35 rounded-full animate-ping delay-1000"></div>
        
        {/* Subtle SVG Graphics */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="headerGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.05" />
            </linearGradient>
          </defs>
          
          {/* Animated Lines */}
          <path
            d="M0 40 Q200 20 400 40 T800 40"
            stroke="url(#headerGradient1)"
            strokeWidth="1"
            fill="none"
            opacity="0.3"
            className="animate-pulse"
          />
          <path
            d="M0 60 Q150 40 300 60 T600 60"
            stroke="url(#headerGradient1)"
            strokeWidth="0.5"
            fill="none"
            opacity="0.2"
            className="animate-pulse delay-1000"
          />
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <img 
              src="/logo.jpg" 
              alt="Equitrust Logo" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-lg"
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-2xl font-bold text-white tracking-tight">Equitrust</span>
              <span className="text-blue-400 font-medium text-xs md:text-sm">$EQAI</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.single ? (
                  item.isButton ? (
                    <button
                      onClick={item.onClick}
                      className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-200"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="text-zinc-300 hover:text-white font-medium transition-colors duration-200"
                    >
                      {item.label}
                    </a>
                  )
                ) : (
                  <>
                    <button className="flex items-center space-x-1 text-zinc-300 hover:text-white font-medium transition-colors duration-200">
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-xl border border-zinc-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="p-2">
                        {item.items?.map((subItem) => (
                          <a
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-3 text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors duration-200"
                          >
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-200 text-sm md:text-base">
                Launch App
              </div>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-zinc-300 hover:text-white p-2"
            >
              {isMenuOpen ? <X className="h-5 w-5 md:h-6 md:w-6" /> : <Menu className="h-5 w-5 md:h-6 md:w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-black/95 backdrop-blur-xl border border-zinc-800 rounded-xl mt-4 mx-4">
              {navItems.map((item, index) => (
                <div key={index}>
                  {item.single ? (
                    item.isButton ? (
                      <button
                        onClick={() => {
                          item.onClick?.();
                          setIsMenuOpen(false);
                        }}
                        className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-200 text-base"
                      >
                        {item.label}
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="block py-3 text-zinc-300 hover:text-white font-medium transition-colors duration-200 text-base"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    )
                  ) : (
                    <div>
                      <div className="py-3 text-white font-medium border-b border-zinc-800 mb-2 text-base">
                        {item.label}
                      </div>
                      {item.items?.map((subItem) => (
                        <a
                          key={subItem.href}
                          href={subItem.href}
                          className="block py-2 pl-4 text-zinc-400 hover:text-white transition-colors duration-200 text-sm"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 rounded-xl font-medium mt-6 text-base">
                Launch App
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;