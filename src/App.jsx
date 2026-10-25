import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutVision from './components/AboutVision';
import Directors from './components/Directors';
import Capabilities from './components/Capabilities';
import OfficeLocation from './components/OfficeLocation';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Utility Top Bar */}
      <TopBar />

      {/* Main Sticky Header */}
      <Navbar />

      {/* Main Page Content */}
      <main>
        {/* Section 1: Hero & Overview */}
        <Hero />

        {/* Section 2: Vision & Institutional Values */}
        <AboutVision />

        {/* Section 3: Board of Directors (Leadership Focus) */}
        <Directors />

        {/* Section 4: Infrastructure Capabilities */}
        <Capabilities />

        {/* Section 5: Corporate Headquarters & Map */}
        <OfficeLocation />

        {/* Section 6: Direct Inquiries & Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
