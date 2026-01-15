import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import HeroImage from '../components/HeroImage';
import TrustedBy from '../components/TrustedBy';
import Features from '../components/Features';
import AgentSection from '../components/AgentSection';
import OnDemand from '../components/OnDemand';
import HyperPersonalization from '../components/HyperPersonalization';
import Multilingual from '../components/Multilingual';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <HeroImage />
      <TrustedBy />
      <Features />
      <AgentSection />
      <OnDemand />
      <HyperPersonalization />
      <Multilingual />
      <CTA />
      <Footer />
    </>
  );
};

export default HomePage;