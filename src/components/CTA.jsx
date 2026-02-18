import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-white min-h-[500px] flex items-center justify-center">
      
      {/* Content */}
      <div className="relative text-center z-10 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-gray-900 leading-tight mb-8"
        >
          Turn your platform into
          <br />
          an AI Action Layer.
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
            Request Early Access
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>

      {/* Semi Circle Arc */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1500px] h-[450px] rounded-t-full"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, #C7CBD1 0%, #E2E5E9 30%, #F3F4F6 55%, transparent 80%)'
        }}
      />

    </section>
  );
};

export default CTA;
