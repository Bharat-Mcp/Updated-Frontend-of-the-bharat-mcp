import React from 'react';
import { motion } from 'framer-motion';

const HeroImage = () => {
  return (
    <section className="relative">
      {/* White background sides */}
      <div className="absolute inset-0 bg-white" />

      {/* Left Vertical Line */}
      <div className="absolute left-[280px] top-0 bottom-0 w-px bg-gray-200 hidden lg:block z-10" />
      
      {/* Right Vertical Line */}
      <div className="absolute right-[280px] top-0 bottom-0 w-px bg-gray-200 hidden lg:block z-10" />

      {/* Orange Gradient - Only between the lines */}
      <div 
        className="absolute top-0 bottom-0 left-[280px] right-[280px] hidden lg:block"
        style={{
          background: 'linear-gradient(180deg, #FEE8D6 0%, #FDD5B0 20%, #FBC48A 40%, #F9B06A 60%, #F79D55 80%, #F58A45 100%)'
        }}
      >
        {/* Grid Lines Inside Orange */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="heroGrid" patternUnits="userSpaceOnUse" width="50" height="50">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#heroGrid)" />
        </svg>

        {/* Decorative Blurs */}
        <div className="absolute left-10 bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute right-10 top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
      </div>

      {/* Mobile Orange Background */}
      <div 
        className="absolute inset-0 lg:hidden"
        style={{
          background: 'linear-gradient(180deg, #FEE8D6 0%, #FDD5B0 20%, #FBC48A 40%, #F9B06A 60%, #F79D55 80%, #F58A45 100%)'
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative py-12 lg:py-20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Video Container - Bigger */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Browser Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#F5E5DA]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28CA41]" />
              </div>
            </div>

            {/* GIF Area - Bigger */}
            <div className="relative" style={{ aspectRatio: '16/9' }}>
              <img 
                src="/home.gif" 
                alt="bharatmcp Demo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroImage;