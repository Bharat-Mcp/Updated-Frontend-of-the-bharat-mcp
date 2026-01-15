import React from 'react';
import { motion } from 'framer-motion';

const AgentSection = () => {
  return (
    <section className="relative bg-white pt-24 pb-16 overflow-hidden">
      {/* Left Vertical Line */}
      <div className="absolute left-[280px] top-0 bottom-0 w-px bg-gray-200 hidden lg:block z-10" />
      
      {/* Right Vertical Line */}
      <div className="absolute right-[280px] top-0 bottom-0 w-px bg-gray-200 hidden lg:block z-10" />

      {/* Content */}
      <div className="relative text-center">
        
        {/* Small Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] tracking-[0.25em] uppercase text-[#E86C6C] font-medium mb-5"
        >
          What a bharatmcp agent can do for you
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[42px] font-serif font-bold text-gray-900 leading-tight"
        >
          Don't demo like it is 1990
        </motion.h2>
      </div>

      {/* Bottom Horizontal Line */}
      <div className="absolute bottom-0 left-[280px] right-[280px] h-px bg-gray-200 hidden lg:block" />
    </section>
  );
};

export default AgentSection;