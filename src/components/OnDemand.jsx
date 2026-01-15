import React from 'react';
import { motion } from 'framer-motion';

const OnDemand = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Left Vertical Line */}
      <div className="absolute left-[280px] top-0 bottom-0 w-px bg-gray-200 hidden lg:block z-10" />
      
      {/* Right Vertical Line */}
      <div className="absolute right-[280px] top-0 bottom-0 w-px bg-gray-200 hidden lg:block z-10" />

      {/* Content - Between the lines */}
      <div className="lg:mx-[280px]">
        <div className="flex flex-col lg:flex-row items-center">
          
          {/* Left Side - Text */}
          <div className="lg:w-1/2 px-8 lg:px-12 py-16 lg:py-24">
            {/* Small Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[11px] tracking-[0.2em] uppercase text-[#E86C6C] font-medium mb-6"
            >
              On-demand, 24 hours, 7 days a week
            </motion.p>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[28px] lg:text-[32px] font-serif font-bold text-gray-900 leading-[1.3]"
            >
              Let users experience your product
              on-demand, through your landing
              page, in-app, or outbound emails.
            </motion.h2>
          </div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2 p-8 lg:p-0"
          >
            <img 
              src="/demo.png" 
              alt="Demo" 
              className="w-full h-auto object-contain" 
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Horizontal Line */}
      <div className="absolute bottom-0 left-[280px] right-[280px] h-px bg-gray-200 hidden lg:block" />
    </section>
  );
};

export default OnDemand;