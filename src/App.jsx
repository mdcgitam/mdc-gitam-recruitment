import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhyJoinSection from './components/WhyJoinSection';
import DomainsSection from './components/DomainsSection';
import ProcessSection from './components/ProcessSection';
import WhatsAppSection from './components/WhatsAppSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="space-y-20">
        <HeroSection />
        <AboutSection />
        <WhyJoinSection />
        <DomainsSection />
        <ProcessSection />
        <WhatsAppSection />
      </main>
      <Footer />
    </>
  );
}
export default App;