import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-white min-h-[500px] flex items-center justify-center">
      {/* Content */}
      <div className="relative text-center z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-gray-900 leading-tight mb-8"
        >
          Accelerate your growth with
          <br />
          AI-led demos.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <Link 
            to="/talk-with-us"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all"
          >
            Talk With Us
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      {/* Bottom Arc Gradient - Light & Thin */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2000px] h-[450px] rounded-t-full opacity-50"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, #F7C96A 0%, #F9BF75 20%, #FBAF85 40%, #F5C0A0 60%, transparent 75%)'
        }}
      />
    </section>
  );
};

export default CTA;