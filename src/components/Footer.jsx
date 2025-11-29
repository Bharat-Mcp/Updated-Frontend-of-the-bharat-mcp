import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  const footerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  const logoScale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const logoOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 1]);

  const footerLinks = {
    Product: ['Features', 'Pricing', 'Integrations'],
    Company: ['About Us', 'Careers', 'Blog'],
    Support: ['Help Center', 'Docs', 'Contact'],
    Legal: ['Privacy', 'Terms']
  };

  return (
    <footer ref={footerRef} className="bg-gray-900 relative overflow-hidden">
      
      {/* Top Section - Links & Contact */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-8">
        
        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4 text-sm">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-6 border-t border-gray-800">
          <div className="flex flex-wrap gap-6 text-sm text-gray-400">
            <a href="mailto:team@bharatmcp.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} className="text-[#138808]" />
              team@bharatmcp.com
            </a>
            <a href="tel:+98792006592" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} className="text-[#138808]" />
            +91 87920 06592
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={14} className="text-[#138808]" />
              Bengaluru, India
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-[#138808] flex items-center justify-center transition-colors text-gray-400 hover:text-white">
              <Twitter size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-[#138808] flex items-center justify-center transition-colors text-gray-400 hover:text-white">
              <Linkedin size={14} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 pt-4">
          © 2025 Bharat MCP. Built with ❤️ in Bengaluru
        </div>
      </div>

      {/* Giant Logo - Edge to Edge at Bottom */}
      <motion.div 
        style={{ scale: logoScale, opacity: logoOpacity }}
        className="relative w-full overflow-hidden select-none pointer-events-none"
      >
        <h2 
          className="text-[12vw] md:text-[16vw] font-black text-white/80 whitespace-nowrap leading-none tracking-tighter pb-4"
          style={{ 
            marginLeft: '-2vw',
            marginRight: '-2vw'
          }}
        >
          BHARAT MCP
        </h2>
      </motion.div>
    </footer>
  );
};

export default Footer;