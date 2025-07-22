import React from 'react';
import { Zap, Mail, Globe, Github, Twitter, MessageCircle, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Protocol',
      links: [
        { label: 'Whitepaper', href: '#' },
        { label: 'Tokenomics', href: '#tokenomics' },
        { label: 'Governance', href: '#' },
        { label: 'Security', href: '#' }
      ]
    },
    {
      title: 'Products',
      links: [
        { label: 'Trading Bot', href: '#swap' },
        { label: 'Analytics', href: '#charts' },
        { label: 'Mining Pools', href: '#features' },
        { label: 'API Access', href: '#' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '#' },
        { label: 'Developer Tools', href: '#' },
        { label: 'Bug Bounty', href: '#' },
        { label: 'Brand Kit', href: '#' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/equitrustai', label: 'Twitter' },
    { icon: MessageCircle, href: 'https://t.me/+4m0z6t2nDsBmYTc0', label: 'Telegram' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Globe, href: '#', label: 'Website' }
  ];

  return (
    <footer className="relative bg-black border-t border-zinc-800">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 to-black pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo.jpg" 
                alt="Equitrust Logo" 
                className="w-14 h-14 object-contain rounded-lg"
              />
              <div>
                <span className="text-2xl font-bold text-white">Equitrust</span>
                <span className="text-blue-400 font-medium text-sm block">$EQAI</span>
              </div>
            </div>
            <p className="text-zinc-400 mb-8 max-w-sm leading-relaxed">
              The foundation layer for AI3.0 trading infrastructure. 
              Building the future of decentralized AI-powered finance.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="group bg-zinc-900/50 hover:bg-zinc-800/50 border border-zinc-800 hover:border-zinc-700 p-3 rounded-xl transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-zinc-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h3 className="text-white font-semibold mb-6 text-lg">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="group flex items-center text-zinc-400 hover:text-white transition-colors duration-200"
                        >
                          {link.label}
                          <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contract Address */}
        <div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 mb-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-zinc-400 text-sm mb-2">Contract Address (BSC)</p>
              <code className="text-blue-400 font-mono text-sm break-all">
                0x3303113001c51769f2753C2aFb7B5a6d0535660E
              </code>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-zinc-400">
              <span>© {currentYear} Equitrust Protocol</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Built on BSC</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;