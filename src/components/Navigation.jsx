import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <React.Fragment>
      {/* Top colored bar */}
      <div className="h-1 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400" />
      
      <nav className="sticky top-0 z-50 transition-all duration-300 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img src="/logo.png" alt="bharatmcp" className="h-7 w-auto" />
              <span className="font-serif font-bold text-lg text-gray-900">bharatmcp</span>
            </Link>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link 
                to="/talk-with-us"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                Talk With Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-20 md:hidden"
          >
            <div className="px-4 py-6 space-y-4">
              <div className="pt-4">
                <Link 
                  to="/talk-with-us"
                  className="w-full px-5 py-3 bg-gray-900 text-white font-medium rounded-lg block text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Talk With Us
                  <ChevronRight className="inline ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </React.Fragment>
  );
};

export default Navigation;