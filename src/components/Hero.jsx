import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Left Vertical Line */}
      <div className="absolute left-[280px] top-0 bottom-0 w-px bg-gray-200 hidden lg:block" />
      
      {/* Right Vertical Line */}
      <div className="absolute right-[280px] top-0 bottom-0 w-px bg-gray-200 hidden lg:block" />

      {/* Content */}
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm">
              <img src="/logo.png" alt="bharatmcp" className="h-5 w-auto mr-2" />
              <span className="text-sm font-medium text-gray-700">India's First MCP Registry</span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-gray-900 leading-[1.1] mb-6"
          >
            Don’t make your prospects
            <br />
            wait–ever again
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-xl mx-auto mb-8"
          >
            The first agentic product demo platform where
            <br />
            prospects receive personalized demos, in a video    
            <br />
            call, instantly      
            </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
      </div>

      {/* Horizontal Line at Bottom */}
      <div className="w-full h-px bg-gray-200" />
    </section>
  );
};

export default Hero;