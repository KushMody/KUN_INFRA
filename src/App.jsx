import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import Directors from './components/Directors';
import ExperienceSection from './components/ExperienceSection';
import QualitySafety from './components/QualitySafety';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 1. Official Top Information Bar */}
      <TopBar />

      {/* 2. Main Sticky Header & Navigation */}
      <Navbar />

      {/* 3. Main Document-Driven Content Flow */}
      <main>
        {/* Section: Hero & Intro ("A Construction Partner with a Long-Term Vision") */}
        <Hero />

        {/* Section: About KUN INFRA PVT LTD (Company Description, KUN Story, Vision, Mission, Values, Coverage) */}
        <AboutSection />

        {/* Section: Our Services (9 Official Construction Disciplines) */}
        <ServicesSection />

        {/* Section: Leadership & Experience (Moiz Z. Godhrawala, Shailesh V. Paladia, Project-Led Team) */}
        <Directors />

        {/* Section: Experience & Current Focus (Surat / South Gujarat & Mumbai Footprint) */}
        <ExperienceSection />

        {/* Section: Quality, Safety & Project Approach (8 Commitments & 5-Step Process) */}
        <QualitySafety />

        {/* Section: Contact Us, Corporate Office, Google Map & Official Enquiry Form */}
        <ContactSection />
      </main>

      {/* 4. Footer with Closing CTA & Final Brand Message */}
      <Footer />
    </div>
  );
}
