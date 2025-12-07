import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const steps = [
    {
      number: "01",
      title: "Install & Launch",
      description: "Download Bharat MCP and launch it. It sits quietly in your system tray, always ready to help.",
      icon: <DownloadIcon />,
    },
    {
      number: "02",
      title: "Work Normally",
      description: "Continue your work as usual. Code, emails, invoices — Bharat MCP observes and learns silently.",
      icon: <MonitorIcon />,
    },
    {
      number: "03",
      title: "Get Smart Help",
      description: "Bharat MCP detects context and offers help instantly. Fix errors, extract data, draft responses.",
      icon: <ZapIcon />,
    },
    {
      number: "04",
      title: "Save & Sync",
      description: "Your data flows to apps automatically. Tally, Zoho, Notion, Calendar — all seamlessly connected.",
      icon: <SyncIcon />,
    },
  ];

  return (
    <section id="how-it-works" className="relative py-20 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-orange-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-amber-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm text-green-400 bg-green-500/[0.08] rounded-full border border-green-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Simple Setup
          </span>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            How <span className="text-gradient">Bharat MCP</span>
            <br className="hidden sm:block" /> works
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Get started in under 2 minutes. No complex setup required.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line - Left on mobile, Center on desktop */}
          <div className="absolute left-6 sm:left-8 lg:left-1/2 top-0 bottom-0 w-px lg:-translate-x-px">
            {/* Background line */}
            <div className="absolute inset-0 bg-white/[0.06]" />
            {/* Animated gradient line */}
            <motion.div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-orange-500 via-amber-500 to-orange-500"
              initial={{ height: "0%" }}
              animate={isInView ? { height: "100%" } : {}}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} totalSteps={steps.length} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 md:mt-24 text-center"
        >
          <p className="text-gray-500 mb-6 text-lg">That's it. No step 5.</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl font-semibold text-white text-lg shadow-lg shadow-orange-500/20"
          >
            Download Bharat MCP Free
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Individual Step Card
const StepCard = ({ step, index, totalSteps }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-16 ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      }`}
    >
      {/* Timeline Node - Left on mobile, Center on desktop */}
      <div className="absolute left-6 sm:left-8 lg:left-1/2 -translate-x-1/2 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="relative"
        >
          {/* Outer glow */}
          <div className="absolute inset-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-orange-500/20 blur-lg" />
          
          {/* Node */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
            <span className="text-white font-bold text-sm sm:text-base">{step.number}</span>
          </div>
        </motion.div>
      </div>

      {/* Content Side */}
      <div className={`flex-1 pl-20 sm:pl-24 lg:pl-0 ${isEven ? "lg:pr-24 lg:text-right" : "lg:pl-24 lg:text-left"}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className={`inline-flex items-center gap-3 mb-4 ${isEven ? "lg:flex-row-reverse" : ""}`}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-orange-400">
              {step.icon}
            </div>
          </div>
          
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            {step.title}
          </h3>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-md inline-block">
            {step.description}
          </p>
        </motion.div>
      </div>

      {/* Visual Side */}
      <div className={`flex-1 pl-20 sm:pl-24 lg:pl-0 w-full ${isEven ? "lg:pl-24" : "lg:pr-24"}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? 20 : -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative group"
        >
          {/* Card glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Visual Card */}
          <div className="relative p-4 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-colors overflow-hidden">
            {index === 0 && <InstallVisual isInView={isInView} />}
            {index === 1 && <WorkVisual isInView={isInView} />}
            {index === 2 && <HelpVisual isInView={isInView} />}
            {index === 3 && <SyncVisual isInView={isInView} />}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Visual Components
const InstallVisual = ({ isInView }) => (
  <div className="h-36 sm:h-44 flex flex-col items-center justify-center">
    <motion.div
      animate={isInView ? { scale: [1, 1.05, 1] } : {}}
      transition={{ duration: 2, repeat: Infinity }}
      className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mb-5 shadow-lg shadow-orange-500/20"
    >
      <span className="text-2xl sm:text-3xl font-bold text-white">भा</span>
    </motion.div>
    <div className="w-full max-w-[220px] h-2.5 bg-white/[0.05] rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"
        animate={isInView ? { width: ["0%", "100%", "100%", "0%"] } : { width: "0%" }}
        transition={{ duration: 3, repeat: Infinity, times: [0, 0.4, 0.6, 1] }}
      />
    </div>
    <span className="text-sm text-gray-500 mt-3">Installing Bharat MCP...</span>
  </div>
);

const WorkVisual = ({ isInView }) => (
  <div className="h-36 sm:h-44 font-mono text-xs sm:text-sm p-2">
    <div className="flex gap-1.5 mb-4">
      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
    </div>
    <div className="space-y-2">
      <div className="text-gray-500"><span className="text-purple-400">const</span> <span className="text-white">invoice</span> = {"{"}</div>
      <div className="pl-4 text-gray-500"><span className="text-gray-400">amount:</span> <span className="text-amber-400">45000</span>,</div>
      <div className="pl-4 text-gray-500"><span className="text-gray-400">vendor:</span> <span className="text-green-400">"ABC Corp"</span></div>
      <div className="text-gray-500">{"}"};</div>
      <motion.div
        animate={isInView ? { opacity: [0.3, 1, 0.3] } : { opacity: 0.3 }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-orange-400/80 mt-3 flex items-center gap-2"
      >
        <motion.span 
          className="w-2 h-2 rounded-full bg-orange-400"
          animate={isInView ? { scale: [1, 1.3, 1] } : {}}
          transition={{ duration: 1, repeat: Infinity }}
        />
        Bharat MCP watching...
      </motion.div>
    </div>
  </div>
);

const HelpVisual = ({ isInView }) => (
  <div className="h-36 sm:h-44 flex items-center justify-center p-2">
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="p-4 sm:p-5 bg-gradient-to-br from-orange-500/10 to-amber-500/5 rounded-xl border border-orange-500/20 w-full"
    >
      <div className="flex items-start gap-4">
        <motion.div 
          className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-500/20"
          animate={isInView ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm font-bold text-white">भा</span>
        </motion.div>
        <div className="flex-1 min-w-0">
          <p className="text-sm sm:text-base text-white font-medium">Invoice detected</p>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">₹45,000 from ABC Corp</p>
          <div className="flex flex-wrap gap-2 mt-3">
            <motion.span 
              className="px-3 py-1.5 bg-orange-500/20 rounded-lg text-xs text-orange-400 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              Save to Tally
            </motion.span>
            <span className="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-gray-500">Dismiss</span>
          </div>
        </div>
      </div>
    </motion.div>
  </div>
);

const SyncVisual = ({ isInView }) => (
  <div className="h-36 sm:h-44 flex items-center justify-center">
    <div className="flex items-center gap-5 sm:gap-8">
      <motion.div 
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20"
        animate={isInView ? { scale: [1, 1.05, 1] } : {}}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xl sm:text-2xl font-bold text-white">भा</span>
      </motion.div>
      
      {/* Animated connection lines */}
      <div className="flex flex-col gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="flex gap-1">
            {[0, 1, 2, 3].map((j) => (
              <motion.div
                key={j}
                className="w-2 h-2 rounded-full bg-orange-500"
                animate={isInView ? { 
                  opacity: [0.2, 1, 0.2],
                  scale: [0.8, 1, 0.8]
                } : {}}
                transition={{ 
                  duration: 1.2, 
                  repeat: Infinity, 
                  delay: (i * 0.2) + (j * 0.1)
                }}
              />
            ))}
          </div>
        ))}
      </div>
      
      <div className="flex flex-col gap-2">
        {["Tally", "Zoho", "Notion"].map((app, i) => (
          <motion.div
            key={app}
            className="px-4 py-2 bg-white/[0.03] rounded-xl border border-white/[0.06] text-xs sm:text-sm text-gray-400 font-medium"
            initial={{ opacity: 0, x: 10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.5 + (i * 0.1) }}
          >
            {app}
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

// Icons
const DownloadIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const MonitorIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const ZapIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const SyncIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
  </svg>
);