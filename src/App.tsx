import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './views/Home';
import Services from './views/Services';
import About from './views/About';
import Pricing from './views/Pricing';
import Contact from './views/Contact';
import Security from './views/Security';
import Privacy from './views/Privacy';
import ChatWidget from './components/ChatWidget';

function AppContent() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-brand-surface font-sans text-brand-accent selection:bg-brand-accent/20 transition-colors duration-500">
      <Header />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/security" element={<Security />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
