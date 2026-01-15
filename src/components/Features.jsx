import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Award } from 'lucide-react';

const Features = () => {
  const badges = [
    { icon: Shield, label: 'GDPR' },
    { icon: Lock, label: 'SOC 2 Compliant' },
    { icon: Award, label: 'ISO 27001' },
  ];

  return (
    <section className="relative bg-white py-16 overflow-hidden">
      {/* Left Vertical Line */}
      <div className="absolute left-[280px] top-0 bottom-0 w-px bg-gray-200 hidden lg:block z-10" />
      
      {/* Right Vertical Line */}
      <div className="absolute right-[280px] top-0 bottom-0 w-px bg-gray-200 hidden lg:block z-10" />

      {/* Content Container */}
      <div className="relative">
        
        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-8 px-4"
        >
          {badges.map((badge, index) => (
            <div
              key={index}
              className="inline-flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-full text-xs"
            >
              <badge.icon className="w-3 h-3 mr-1.5 text-gray-500" />
              <span className="font-medium text-gray-600">{badge.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-center leading-snug mb-12 text-gray-900 px-4"
        >
          Close your leads when the intent is at its highest
          <br className="hidden sm:block" />
          {' '}with 24/7{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300">
            hyper-personalized demos.
          </span>
        </motion.h2>

        {/* Image Container - Edge to Edge between lines */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative lg:mx-[280px] mx-4"
        >
          <img 
            src="/features.png" 
            alt="Features" 
            className="w-full h-auto object-contain" 
          />
        </motion.div>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />
    </section>
  );
};

export default Features;