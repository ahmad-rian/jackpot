import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import MainContent from './components/MainContent';

function App() {
  return (
    <Router>
      <div className="App min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans relative">
        <ParticleBackground />
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <Header />
          <main className="container mx-auto px-4 py-8">
            <MainContent />
          </main>
          <Footer />
        </motion.div>
        <ScrollToTop />
        <WhatsAppButton />
        <Analytics />
      </div>
    </Router>
  );
}

export default App;