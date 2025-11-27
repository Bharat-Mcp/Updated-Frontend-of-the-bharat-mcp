import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles, FileText, Bot, Puzzle, ArrowRight, Zap, Shield } from 'lucide-react';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const productItems = [
    { name: 'Invoice Automation', icon: FileText, desc: 'Automate your billing workflow' },
    { name: 'AI Assistant', icon: Bot, desc: 'Smart conversational support' },
    { name: 'Integrations', icon: Puzzle, desc: 'Connect with 100+ apps' },
    { name: 'Smart Analytics', icon: Zap, desc: 'Real-time business insights' },
    { name: 'Security', icon: Shield, desc: 'Enterprise-grade protection' },
  ];

  const mainMenuItems = [
    { name: 'Solutions', hasDropdown: true },
    { name: 'Pricing', hasDropdown: false },
    { name: 'Docs', hasDropdown: false },
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled ? 'py-3 px-4' : 'py-4 px-0'
      }`}>
        <nav className={`transition-all duration-500 ease-out ${
          isScrolled 
            ? 'max-w-3xl mx-auto bg-white/95 backdrop-blur-lg rounded-full shadow-lg shadow-gray-200/60 border border-gray-200/50 px-4 py-2' 
            : 'max-w-7xl mx-auto bg-white px-6 py-2'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center cursor-pointer group">
              <span className={`font-bold text-gray-900 tracking-tight transition-all duration-300 ${
                isScrolled ? 'text-lg' : 'text-2xl'
              }`}>
                Bharat{' '}
                <span className="relative inline-block">
                  MCP
                  <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808]"></span>
                </span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {mainMenuItems.map((item) => (
                <div key={item.name} className="relative">
                  <button
                    className={`flex items-center space-x-1 px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                      isDropdownOpen && item.hasDropdown
                        ? 'text-[#138808] bg-green-50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                    onClick={() => {
                      if (item.hasDropdown) {
                        setIsDropdownOpen(!isDropdownOpen);
                      }
                    }}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown 
                        size={14} 
                        className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                      />
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Right Side Buttons */}
            <div className="hidden lg:flex items-center space-x-2">
              <button className={`text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-200 ${
                isScrolled ? 'px-3 py-1.5' : 'px-4 py-2'
              }`}>
                Contact
              </button>
              <button className={`text-sm font-semibold text-white rounded-full bg-[#138808] hover:bg-[#0f6906] transition-all duration-300 flex items-center space-x-1.5 shadow-sm hover:shadow-md ${
                isScrolled ? 'px-4 py-1.5' : 'px-5 py-2'
              }`}>
                <Sparkles size={isScrolled ? 12 : 14} />
                <span>Book Demo</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>

        {/* Desktop Dropdown */}
        <div className={`hidden lg:block transition-all duration-300 ease-out overflow-hidden ${
          isDropdownOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
        }`}>
          <div className={`mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-4 transition-all duration-500 ${
            isScrolled ? 'max-w-3xl' : 'max-w-4xl'
          }`}>
            <div className="grid grid-cols-3 gap-2">
              {productItems.map((product, index) => {
                const IconComponent = product.icon;
                return (
                  <a
                    key={product.name}
                    href={`#${product.name.toLowerCase().replace(' ', '-')}`}
                    className="flex items-start space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200 group"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <div className="p-2 rounded-lg bg-green-50 text-[#138808] group-hover:bg-green-100 group-hover:scale-110 transition-all duration-200">
                      <IconComponent size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{product.desc}</div>
                    </div>
                  </a>
                );
              })}
              <a
                href="#all-solutions"
                className="flex items-center justify-center space-x-2 p-3 rounded-xl border-2 border-dashed border-gray-200 hover:border-[#138808] hover:bg-green-50 transition-all duration-200 text-sm font-medium text-gray-500 hover:text-[#138808]"
                onClick={() => setIsDropdownOpen(false)}
              >
                <span>View All</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for closing dropdown */}
      {isDropdownOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsDropdownOpen(false)}
        />
      )}

      {/* Mobile Menu - Full Screen Overlay */}
      <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen ? 'visible' : 'invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Panel */}
        <div className={`absolute top-4 left-4 right-4 bg-white rounded-2xl shadow-2xl transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          {/* Mobile Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <span className="text-xl font-bold text-gray-900">
              Bharat <span className="relative">MCP
                <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808]"></span>
              </span>
            </span>
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X size={22} />
            </button>
          </div>

          {/* Mobile Content */}
          <div className="p-4 max-h-[70vh] overflow-y-auto">
            {/* Products Section */}
            <div className="mb-4">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Products</div>
              <div className="space-y-1">
                {productItems.map((product) => {
                  const IconComponent = product.icon;
                  return (
                    <a
                      key={product.name}
                      href={`#${product.name.toLowerCase().replace(' ', '-')}`}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="p-2 rounded-lg bg-green-50 text-[#138808]">
                        <IconComponent size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        <div className="text-xs text-gray-500">{product.desc}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Other Links */}
            <div className="border-t border-gray-100 pt-4 mb-4">
              {['Pricing', 'Docs', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block px-3 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <button className="w-full py-3.5 text-sm font-semibold text-white rounded-xl bg-[#138808] hover:bg-[#0f6906] transition-all flex items-center justify-center space-x-2 shadow-lg">
              <Sparkles size={16} />
              <span>Book a Demo</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};