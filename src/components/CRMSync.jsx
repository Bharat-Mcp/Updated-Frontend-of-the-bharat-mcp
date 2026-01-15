import React from 'react';
import { motion } from 'framer-motion';

const CRMSync = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Left Vertical Line */}
      <div className="absolute left-[280px] top-0 bottom-0 w-px bg-gray-200 hidden lg:block z-10" />
      
      {/* Right Vertical Line */}
      <div className="absolute right-[280px] top-0 bottom-0 w-px bg-gray-200 hidden lg:block z-10" />

      {/* Image - Between the lines */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="lg:mx-[280px]"
      >
        <img 
          src="/proudct_main.png" 
          alt="CRM Sync" 
          className="w-full h-auto"
          style={{
            imageRendering: 'crisp-edges',
            maxWidth: '100%',
          }}
        />
      </motion.div>

      {/* Bottom Horizontal Line */}
      <div className="absolute bottom-0 left-[280px] right-[280px] h-px bg-gray-200 hidden lg:block" />
    </section>
  );
};

export default CRMSync;