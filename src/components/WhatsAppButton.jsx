import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+918792006592?text=Hi%20Bharat%20MCP%2C%20I%20would%20like%20to%20know%20more%20about%20invoice%20automation', '_blank');
  };

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full shadow-2xl flex items-center justify-center group transition-all duration-300"
    >
      {/* Pulsing animation */}
      <span className="absolute w-full h-full bg-[#25D366] rounded-full animate-ping opacity-75"></span>
      
      <MessageCircle className="text-white relative z-10" size={28} />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us on WhatsApp
      </span>
    </motion.button>
  );
};