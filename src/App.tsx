import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import VisualFeatures from './components/VisualFeatures';
import ParticleSystem from './components/ParticleSystem';
import PancakeSwapWidget from './components/PancakeSwapWidget';
import PriceDisplay from './components/PriceDisplay';
import HowToBuy from './components/HowToBuy';
import NewFeatures from './components/NewFeatures';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Community from './components/Community';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <ParticleSystem />
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: '#18181b',
            color: '#f4f4f5',
            border: '1px solid #3f3f46'
          }
        }}
      />
      <Header />
      <main>
        <Hero />
        <PancakeSwapWidget />
        <Features />
        <PriceDisplay />
        <HowToBuy />
        <VisualFeatures />
        <NewFeatures />
        <Tokenomics />
        <Roadmap />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;