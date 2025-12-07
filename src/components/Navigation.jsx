import React, { useState, useEffect } from "react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          14% { transform: scale(1.12); }
          28% { transform: scale(1); }
          42% { transform: scale(1.08); }
          56% { transform: scale(1); }
        }
        .logo-beat {
          animation: heartbeat 2.5s ease-in-out infinite;
        }
        .logo-beat:hover {
          animation: none;
          transform: scale(1.1);
        }
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-3 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5" : "py-5 bg-transparent"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative">
                {/* Logo glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                {/* Logo container - smooth rounded shape */}
                <div className="logo-beat relative w-11 h-11 rounded-full bg-gradient-to-br from-orange-500 via-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/30 transition-transform duration-200">
                  <span className="text-white font-bold text-lg">भा</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none">
                  Bharat <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">MCP</span>
                </span>
                <span className="text-[10px] text-gray-500 leading-none mt-0.5">
                  AI Desktop Companion
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a href="#early-access" className="px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors">
                Sign In
              </a>
              
              <button className="relative group px-5 py-2.5 rounded-full overflow-hidden">
                {/* Button gradient border */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
                <div className="absolute inset-[1px] bg-[#0a0a0f] rounded-full group-hover:bg-transparent transition-colors duration-300" />
                <span className="relative text-sm font-medium text-white flex items-center gap-2">
                  <span>Get Early Access</span>
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="flex flex-col gap-1.5">
                <span className={`w-6 h-0.5 bg-white rounded-full origin-center transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`w-6 h-0.5 bg-white rounded-full origin-center transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          
          {/* Menu Content */}
          <div className="absolute right-0 top-0 bottom-0 w-[80%] max-w-sm bg-[#12121a] border-l border-white/5">
            <div className="flex flex-col h-full pt-24 pb-8 px-6">
              {/* Nav Links */}
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-4 py-3 text-lg text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-white/10" />

              {/* CTA */}
              <button className="w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl font-semibold text-white">
                Get Early Access
              </button>

              {/* Footer info */}
              <div className="mt-auto">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  100% Free During Beta
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};