import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import WhyJoinSection from './components/WhyJoinSection';
import DomainsSection from './components/DomainsSection';
import ProcessSection from './components/ProcessSection';
import WhatsAppSection from './components/WhatsAppSection';
import Footer from './components/Footer';
import RegistrationsClosed from './components/RegistrationsClosed';

import { Routes, Route } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />
      <main>
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

function App() {
  return <RegistrationsClosed />;
}

export default App;