import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Download from './components/Download';
import ParticleSystem from './components/ParticleSystem';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

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
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'home' && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === 'download' && <Download />}
      <Footer />
    </div>
  );
}

export default App;