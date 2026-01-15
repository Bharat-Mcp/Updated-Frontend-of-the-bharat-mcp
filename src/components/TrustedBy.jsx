import React from 'react';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  const companies = [
    'Palvo',
    'Startopia',
    'SixtyFour AI',
    'NeuralBox',
    'CloudMind',
    'DataStack',
  ];

  return (
    <section className="relative bg-white py-10 overflow-hidden">
      {/* Left Vertical Line */}
      <div className="absolute left-[280px] top-0 bottom-0 w-px bg-gray-200 hidden lg:block z-20" />
      
      {/* Right Vertical Line */}
      <div className="absolute right-[280px] top-0 bottom-0 w-px bg-gray-200 hidden lg:block z-20" />

      {/* White covers for outside lines */}
      <div className="absolute left-0 top-0 bottom-0 w-[280px] bg-white hidden lg:block z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-[280px] bg-white hidden lg:block z-10" />

      {/* Content */}
      <div className="relative">
        <p className="text-center text-xs text-gray-400 mb-6 relative z-30">
          Trusted by
        </p>

        {/* Scrolling Container - Centered between lines */}
        <div className="relative mx-auto lg:mx-[280px] overflow-hidden">
          {/* Left Fade */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          
          {/* Right Fade */}
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

          {/* Scrolling Track */}
          <motion.div
            className="flex items-center gap-12"
            animate={{
              x: [0, -600],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 15,
                ease: "linear",
              },
            }}
          >
            {[...companies, ...companies, ...companies].map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-gray-400 text-sm font-medium whitespace-nowrap"
              >
                {company}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />
    </section>
  );
};

export default TrustedBy;