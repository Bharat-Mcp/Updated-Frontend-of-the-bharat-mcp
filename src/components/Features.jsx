import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const features = [
    {
      title: "Sees Everything on Your Screen",
      description: "Live screenshot analysis every second. Bharat MCP understands what you're looking at — code, documents, websites, anything.",
      visual: <ScreenScanVisual />,
    },
    {
      title: "Understands Context Instantly",
      description: "Not just OCR. Bharat MCP understands the meaning — is it an error? An invoice? A meeting request? It knows.",
      visual: <ContextVisual />,
    },
    {
      title: "Helps Before You Ask",
      description: "See an error? Bharat MCP suggests the fix. See an invoice? It offers to add it to Tally. Proactive help.",
      visual: <ChatVisual />,
    },
    {
      title: "Works With Everything",
      description: "VS Code, Chrome, Excel, Tally, WhatsApp — Bharat MCP works with any app. If it's on your screen, it can help.",
      visual: <AppsVisual />,
    },
  ];

  return (
    <section id="features" ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm text-orange-400 bg-orange-500/[0.08] rounded-full border border-orange-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
            Core Features
          </span>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Your screen is the
            <br className="hidden sm:block" />
            <span className="text-gradient"> interface</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            No commands. No typing. Just work normally — Bharat MCP watches and helps.
          </p>
        </motion.div>

        {/* Features */}
        <div className="space-y-20 md:space-y-32">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Individual Feature Card with scroll trigger
const FeatureCard = ({ feature, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 md:gap-12 lg:gap-16`}
    >
      {/* Text */}
      <motion.div 
        className="flex-1 text-center lg:text-left"
        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 mb-6">
          <span className="text-xl sm:text-2xl font-bold text-gradient">{index + 1}</span>
        </div>
        
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          {feature.title}
        </h3>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
          {feature.description}
        </p>
      </motion.div>

      {/* Visual */}
      <motion.div 
        className="flex-1 w-full"
        initial={{ opacity: 0, x: isEven ? 30 : -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="relative group">
          {/* Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Container */}
          <div className="relative rounded-2xl border border-white/[0.08] overflow-hidden hover:border-white/[0.12] transition-colors">
            {React.cloneElement(feature.visual, { isInView })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Visual Components
const ScreenScanVisual = ({ isInView }) => (
  <div className="relative w-full h-full min-h-[280px] sm:min-h-[320px] bg-[#0c0c12] rounded-xl overflow-hidden">
    {/* Simulated screen */}
    <div className="absolute inset-3 sm:inset-4 bg-[#1a1a24] rounded-lg p-3 sm:p-4">
      <div className="flex gap-1.5 mb-3">
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/10" />
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/10" />
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white/10" />
      </div>
      <div className="space-y-2 opacity-60">
        <div className="h-2.5 sm:h-3 bg-white/10 rounded w-3/4" />
        <div className="h-2.5 sm:h-3 bg-white/10 rounded w-1/2" />
        <div className="h-2.5 sm:h-3 bg-white/10 rounded w-5/6" />
        <div className="h-2.5 sm:h-3 bg-white/10 rounded w-2/3" />
        <div className="h-2.5 sm:h-3 bg-white/10 rounded w-4/5" />
      </div>
    </div>
    
    {/* Scanning line */}
    <motion.div
      animate={isInView ? { top: ["0%", "100%", "0%"] } : { top: "0%" }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
      style={{ boxShadow: "0 0 20px 5px rgba(249,115,22,0.3)" }}
    />
    
    {/* Detection box */}
    <motion.div
      animate={isInView ? { opacity: [0, 1, 1, 0] } : { opacity: 0 }}
      transition={{ duration: 3, repeat: Infinity }}
      className="absolute top-14 sm:top-16 left-6 sm:left-8 right-6 sm:right-8 h-20 sm:h-24 border-2 border-orange-500/50 rounded-lg"
    >
      <div className="absolute -top-2.5 left-2 px-2 bg-[#0c0c12] text-orange-400 text-[10px] sm:text-xs">
        Code Block Detected
      </div>
    </motion.div>

    {/* Bharat MCP badge */}
    <div className="absolute bottom-3 right-3 flex items-center gap-2 px-2 py-1 bg-orange-500/20 rounded-lg border border-orange-500/30">
      <span className="text-orange-400 text-[10px] sm:text-xs font-medium">भा Scanning</span>
    </div>
  </div>
);

const ContextVisual = ({ isInView }) => (
  <div className="relative w-full h-full min-h-[280px] sm:min-h-[320px] bg-[#0c0c12] rounded-xl overflow-hidden p-4 sm:p-6">
    <div className="space-y-4">
      {/* Input */}
      <div className="p-3 bg-white/5 rounded-lg border border-white/[0.05]">
        <div className="text-[10px] sm:text-xs text-gray-500 mb-2">Screen Capture</div>
        <div className="text-xs sm:text-sm text-gray-400 font-mono break-all">
          TypeError: Cannot read property 'gst' of undefined
        </div>
      </div>
      
      {/* Processing */}
      <motion.div
        animate={isInView ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.5 }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="flex items-center gap-2 text-orange-400"
      >
        <motion.div
          animate={isInView ? { rotate: 360 } : {}}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-4 h-4 border-2 border-orange-400 border-t-transparent rounded-full"
        />
        <span className="text-xs">Bharat MCP analyzing...</span>
      </motion.div>
      
      {/* Output */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="p-3 sm:p-4 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 rounded-lg"
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
            <span className="text-[10px] font-bold text-white">भा</span>
          </div>
          <span className="text-orange-400 text-xs sm:text-sm font-medium">Context Understood</span>
        </div>
        <div className="text-xs sm:text-sm text-gray-300 space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
            <span>Type: JavaScript Runtime Error</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
            <span>Cause: Undefined object access</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
            <span>Fix: Add null check before accessing</span>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);

const ChatVisual = ({ isInView }) => (
  <div className="relative w-full h-full min-h-[280px] sm:min-h-[320px] bg-[#0c0c12] rounded-xl overflow-hidden p-4 sm:p-6">
    <div className="space-y-4">
      {/* Message 1 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="flex items-start gap-2 sm:gap-3"
      >
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">भा</span>
        </div>
        <div className="p-3 bg-white/5 rounded-2xl rounded-tl-none max-w-[85%] border border-white/[0.05]">
          <p className="text-xs sm:text-sm text-gray-300">
            I noticed you're looking at an invoice from ABC Corp. Want me to extract the data?
          </p>
        </div>
      </motion.div>
      
      {/* Message 2 */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.8 }}
        className="flex items-start gap-3 justify-end"
      >
        <div className="p-3 bg-blue-500/20 rounded-2xl rounded-tr-none max-w-[70%] border border-blue-500/20">
          <p className="text-xs sm:text-sm text-gray-300">Yes please!</p>
        </div>
      </motion.div>
      
      {/* Message 3 */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 1.4 }}
        className="flex items-start gap-2 sm:gap-3"
      >
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xs font-bold">भा</span>
        </div>
        <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-2xl rounded-tl-none max-w-[85%]">
          <p className="text-xs sm:text-sm text-green-400 mb-2 flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Done! Extracted:
          </p>
          <div className="text-[11px] sm:text-xs text-gray-400 space-y-1">
            <div>Vendor: ABC Corp</div>
            <div>Amount: ₹45,000</div>
            <div>GST: ₹8,100</div>
          </div>
          <button className="mt-3 px-3 py-1.5 bg-green-500 hover:bg-green-600 text-white text-[10px] sm:text-xs rounded-lg transition-colors">
            Push to Tally →
          </button>
        </div>
      </motion.div>
    </div>
  </div>
);

const AppsVisual = ({ isInView }) => (
  <div className="relative w-full h-full min-h-[280px] sm:min-h-[320px] bg-[#0c0c12] rounded-xl overflow-hidden p-4 sm:p-6">
    <div className="grid grid-cols-3 gap-2 sm:gap-3">
      {[
        { icon: <VSCodeIcon />, name: "VS Code", color: "blue" },
        { icon: <ChromeIcon />, name: "Chrome", color: "green" },
        { icon: <ExcelIcon />, name: "Excel", color: "emerald" },
        { icon: <TallyIcon />, name: "Tally", color: "orange" },
        { icon: <WhatsAppIcon />, name: "WhatsApp", color: "green" },
        { icon: <GmailIcon />, name: "Gmail", color: "red" },
        { icon: <NotionIcon />, name: "Notion", color: "gray" },
        { icon: <FigmaIcon />, name: "Figma", color: "purple" },
        { icon: <PlusIcon />, name: "Any App", color: "orange" },
      ].map((app, i) => (
        <motion.div
          key={app.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: i * 0.05 }}
          whileHover={{ scale: 1.05, y: -3 }}
          className="flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4 bg-white/[0.03] rounded-xl cursor-pointer hover:bg-white/[0.06] border border-white/[0.04] hover:border-white/[0.08] transition-all"
        >
          <div className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400">
            {app.icon}
          </div>
          <span className="text-[10px] sm:text-xs text-gray-500">{app.name}</span>
        </motion.div>
      ))}
    </div>
    
    <motion.div
      animate={isInView ? { scale: [1, 1.03, 1] } : {}}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full"
    >
      <span className="text-[10px] sm:text-xs text-orange-400 font-medium flex items-center gap-2">
        <span className="font-bold">भा</span> Bharat MCP connects them all
      </span>
    </motion.div>
  </div>
);

// App Icons (SVG)
const VSCodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.583 2.248a1.5 1.5 0 0 1 1.917.912l2.4 6.6a1.5 1.5 0 0 1-.536 1.69l-7.5 5.25a1.5 1.5 0 0 1-1.728 0l-7.5-5.25a1.5 1.5 0 0 1-.536-1.69l2.4-6.6a1.5 1.5 0 0 1 1.917-.912L12 4.5l5.583-2.252z"/>
  </svg>
);

const ChromeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="10" strokeWidth="2" stroke="currentColor" fill="none"/>
    <circle cx="12" cy="12" r="4"/>
  </svg>
);

const ExcelIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="2" stroke="currentColor" fill="none"/>
    <path d="M8 8l8 8M16 8l-8 8" strokeWidth="2" stroke="currentColor"/>
  </svg>
);

const TallyIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" stroke="currentColor" fill="none"/>
    <path d="M8 12h8M12 8v8" strokeWidth="2" stroke="currentColor"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.82.49 3.53 1.34 5L2 22l5.12-1.33C8.5 21.52 10.2 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" strokeWidth="2" stroke="currentColor" fill="none"/>
  </svg>
);

const GmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="2" stroke="currentColor" fill="none"/>
    <path d="M3 7l9 6 9-6" strokeWidth="2" stroke="currentColor" fill="none"/>
  </svg>
);

const NotionIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth="2" stroke="currentColor" fill="none"/>
    <path d="M8 8h8M8 12h5" strokeWidth="2" stroke="currentColor"/>
  </svg>
);

const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="3" strokeWidth="2" stroke="currentColor" fill="none"/>
    <rect x="6" y="4" width="6" height="8" rx="3" strokeWidth="2" stroke="currentColor" fill="none"/>
    <rect x="12" y="4" width="6" height="8" rx="3" strokeWidth="2" stroke="currentColor" fill="none"/>
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 8v8M8 12h8"/>
  </svg>
);