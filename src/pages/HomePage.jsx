import React from 'react';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import MCPVisual from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import DualPath from '../components/DualPath';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <MCPVisual />
      <HowItWorks />
      <DualPath />
      <CTA />
      <Footer />
    </>
  );
};

export default HomePage;