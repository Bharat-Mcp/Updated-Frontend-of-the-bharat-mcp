import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          
          {/* Left - Logo & Tagline */}
          <div className="max-w-xs">
            <a href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-7 h-7 bg-gray-900 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <span className="font-serif font-bold text-lg text-gray-900">bharatmcp</span>
            </a>
            <p className="text-sm text-gray-600 leading-relaxed">
              Don't make your AI agents wait–ever again. Scale your integrations and increase your productivity.
            </p>
          </div>

          {/* Right - Links */}
          <div className="flex gap-16">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Talk With Us</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900">Documentation</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-10" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2025 bharatmcp. All rights reserved.</p>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-900">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Big Logo Reveal on Scroll */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 text-center overflow-hidden"
      >
        <h2 className="text-[80px] sm:text-[120px] lg:text-[180px] font-serif font-bold text-gray-100 select-none">
          bharatmcp
        </h2>
      </motion.div>
    </footer>
  );
};

export default Footer;