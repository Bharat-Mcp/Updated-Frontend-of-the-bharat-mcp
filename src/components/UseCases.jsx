import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

export const UseCases = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeDemo, setActiveDemo] = useState(0);
  const [demoStep, setDemoStep] = useState(0);

  const demos = [
    {
      id: "coding",
      icon: <CodeIcon />,
      title: "Coding Help",
      subtitle: "Fix errors instantly",
      steps: [
        { content: "You're coding in VS Code..." },
        { content: "Error appears on line 23" },
        { content: "Bharat MCP detects the error" },
        { content: "Suggests fix with explanation" },
        { content: "One click to apply fix ✓" },
      ],
    },
    {
      id: "invoice",
      icon: <InvoiceIcon />,
      title: "Invoice Entry",
      subtitle: "Screen to Tally in seconds",
      steps: [
        { content: "Invoice PDF on screen..." },
        { content: "Bharat MCP detects invoice" },
        { content: "Extracts all data automatically" },
        { content: "Shows extracted data for review" },
        { content: "Pushed to Tally ✓" },
      ],
    },
    {
      id: "meeting",
      icon: <MeetingIcon />,
      title: "Meeting Notes",
      subtitle: "Auto notes & action items",
      steps: [
        { content: "You're in a Zoom call..." },
        { content: "Bharat MCP listens to conversation" },
        { content: "Real-time transcription running" },
        { content: "Extracts action items" },
        { content: "Notes saved to Notion ✓" },
      ],
    },
    {
      id: "form",
      icon: <FormIcon />,
      title: "Form Filling",
      subtitle: "Auto-fill any form",
      steps: [
        { content: "GST portal form on screen..." },
        { content: "Bharat MCP detects form fields" },
        { content: "Matches with your saved data" },
        { content: "Auto-fills all fields" },
        { content: "Form completed ✓" },
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDemoStep((prev) => (prev + 1) % 5);
    }, 2500);
    return () => clearInterval(interval);
  }, [activeDemo]);

  useEffect(() => {
    setDemoStep(0);
  }, [activeDemo]);

  return (
    <section id="use-cases" ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/[0.03] to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm text-blue-400 bg-blue-500/[0.08] rounded-full border border-blue-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Live Demos
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Watch <span className="text-gradient">Bharat MCP</span>
            <br className="hidden sm:block" /> in action
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Real scenarios. Real help. No commands needed.
          </p>
        </motion.div>

        {/* Demo Tabs - Scrollable on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex overflow-x-auto pb-2 mb-8 md:mb-12 gap-2 sm:gap-3 justify-start md:justify-center scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {demos.map((demo, i) => (
            <motion.button
              key={demo.id}
              onClick={() => setActiveDemo(i)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-medium transition-all whitespace-nowrap flex-shrink-0 ${
                activeDemo === i
                  ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20"
                  : "bg-white/[0.03] text-gray-400 hover:bg-white/[0.06] border border-white/[0.06]"
              }`}
            >
              <span className={`w-5 h-5 ${activeDemo === i ? "text-white" : "text-gray-500"}`}>
                {demo.icon}
              </span>
              <span className="text-sm sm:text-base">{demo.title}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Demo Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDemo}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative rounded-2xl border border-white/[0.08] bg-[#0c0c12] overflow-hidden shadow-2xl">
              {/* Window Bar */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-3 bg-[#111118] border-b border-white/[0.05]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/10" />
                </div>
                <span className="text-[10px] sm:text-xs text-gray-500">{demos[activeDemo].subtitle}</span>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-[10px] sm:text-xs text-green-400">Active</span>
                </div>
              </div>

              {/* Demo Content */}
              <div className="flex flex-col lg:flex-row min-h-[450px] sm:min-h-[400px]">
                {/* Left: Screen Simulation */}
                <div className="flex-1 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-white/[0.05]">
                  <DemoVisual demo={demos[activeDemo]} demoStep={demoStep} />
                </div>

                {/* Right: MCP Assistant */}
                <div className="flex-1 p-4 sm:p-6 bg-[#0a0a0f]">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20"
                    >
                      <span className="text-white font-bold text-base sm:text-lg">भा</span>
                    </motion.div>
                    <div>
                      <div className="text-white font-medium text-sm sm:text-base">Bharat MCP</div>
                      <div className="text-[10px] sm:text-xs text-green-400 flex items-center gap-1">
                        <motion.span 
                          className="w-1.5 h-1.5 bg-green-400 rounded-full"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        Watching your screen
                      </div>
                    </div>
                  </div>

                  {/* Steps Progress */}
                  <div className="space-y-3">
                    {demos[activeDemo].steps.map((step, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0.3, x: 10 }}
                        animate={{ 
                          opacity: i <= demoStep ? 1 : 0.3,
                          x: i <= demoStep ? 0 : 10
                        }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center text-[10px] sm:text-xs font-medium transition-all ${
                          i < demoStep 
                            ? "bg-green-500 text-white" 
                            : i === demoStep 
                              ? "bg-orange-500 text-white" 
                              : "bg-white/[0.05] text-gray-600 border border-white/[0.08]"
                        }`}>
                          {i < demoStep ? (
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : i + 1}
                        </div>
                        <span className={`text-xs sm:text-sm transition-colors ${i <= demoStep ? "text-white" : "text-gray-600"}`}>
                          {step.content}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="h-1 bg-white/[0.03]">
                <motion.div
                  animate={{ width: `${((demoStep + 1) / 5) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-gradient-to-r from-orange-500 to-amber-500"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-500 mb-4 text-sm sm:text-base">See it work on your screen</p>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl font-semibold text-white text-sm sm:text-base shadow-lg shadow-orange-500/20"
          >
            Try Bharat MCP Free
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Demo Visual Component
const DemoVisual = ({ demo, demoStep }) => {
  const visuals = {
    coding: <CodingVisual demoStep={demoStep} />,
    invoice: <InvoiceVisual demoStep={demoStep} />,
    meeting: <MeetingVisual demoStep={demoStep} />,
    form: <FormVisual demoStep={demoStep} />,
  };
  
  return visuals[demo.id] || null;
};

// Coding Visual
const CodingVisual = ({ demoStep }) => (
  <div className="h-full min-h-[200px] bg-[#1e1e1e] rounded-xl p-3 sm:p-4 font-mono text-[10px] sm:text-xs">
    <div className="flex items-center gap-2 mb-3 text-gray-500">
      <span>main.py</span>
    </div>
    <div className="space-y-1">
      <div className="text-gray-600">21 |</div>
      <div className="text-gray-500">22 |  <span className="text-purple-400">for</span> item <span className="text-purple-400">in</span> data:</div>
      <motion.div
        animate={{ backgroundColor: demoStep >= 1 ? "rgba(239,68,68,0.15)" : "transparent" }}
        className="rounded px-1 py-0.5"
      >
        <span className="text-gray-600">23 |</span>
        <span className="text-white">    total = item.price * qty</span>
        {demoStep >= 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 mt-1 pl-6"
          >
            ↑ NameError: 'qty' not defined
          </motion.div>
        )}
      </motion.div>
      <div className="text-gray-600">24 |</div>
    </div>
    
    {demoStep >= 3 && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg"
      >
        <div className="text-orange-400 text-[10px] sm:text-xs mb-2 flex items-center gap-2">
          <span className="font-bold">भा</span> Suggested Fix:
        </div>
        <div className="text-green-400 text-[10px] sm:text-xs">total = item.price * item.quantity</div>
        {demoStep >= 4 && (
          <div className="mt-2 text-green-400 text-[10px] sm:text-xs flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Fix applied!
          </div>
        )}
      </motion.div>
    )}
  </div>
);

// Invoice Visual
const InvoiceVisual = ({ demoStep }) => (
  <div className="h-full min-h-[200px] bg-[#1e1e1e] rounded-xl p-3 sm:p-4">
    <div className="relative bg-white/[0.08] rounded-lg p-3 sm:p-4 mb-4">
      <div className="text-center text-white font-bold text-sm sm:text-base mb-2">TAX INVOICE</div>
      <div className="text-[10px] sm:text-xs text-gray-400 space-y-1">
        <div>ABC Enterprises Pvt Ltd</div>
        <div>Invoice #: INV-2024-0342</div>
        <div>Amount: ₹45,000</div>
        <div>GST (18%): ₹8,100</div>
      </div>
      
      {demoStep >= 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 border-2 border-orange-500/50 rounded-lg"
        />
      )}
    </div>
    
    {demoStep >= 2 && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-[10px] sm:text-xs"
      >
        <div className="text-green-400 mb-2 flex items-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Data Extracted:
        </div>
        <div className="grid grid-cols-2 gap-1.5 sm:gap-2 text-gray-300">
          <div>Vendor: ABC Corp</div>
          <div>GSTIN: 27AABCU...</div>
          <div>Amount: ₹45,000</div>
          <div>GST: ₹8,100</div>
        </div>
        {demoStep >= 4 && (
          <div className="mt-3 py-2 bg-green-500 text-white text-center rounded font-medium">
            Added to Tally
          </div>
        )}
      </motion.div>
    )}
  </div>
);

// Meeting Visual
const MeetingVisual = ({ demoStep }) => (
  <div className="h-full min-h-[200px] bg-[#1e1e1e] rounded-xl p-3 sm:p-4">
    <div className="flex items-center gap-2 mb-4">
      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-500" />
      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500" />
      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-500" />
      <span className="text-[10px] sm:text-xs text-gray-500">Zoom Meeting</span>
      {demoStep >= 1 && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="ml-auto text-red-400 text-[10px] sm:text-xs flex items-center gap-1"
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse" />
          Recording
        </motion.span>
      )}
    </div>
    
    {demoStep >= 2 && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-2 text-[10px] sm:text-xs"
      >
        <div className="p-2 bg-white/[0.03] rounded border border-white/[0.05]">
          <span className="text-blue-400">Rahul:</span>
          <span className="text-gray-400"> Let's finalize budget by Friday</span>
        </div>
        <div className="p-2 bg-white/[0.03] rounded border border-white/[0.05]">
          <span className="text-green-400">You:</span>
          <span className="text-gray-400"> I'll send the projections tomorrow</span>
        </div>
      </motion.div>
    )}
    
    {demoStep >= 3 && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 p-3 bg-orange-500/10 border border-orange-500/30 rounded-lg text-[10px] sm:text-xs"
      >
        <div className="text-orange-400 mb-2 flex items-center gap-2">
          <span className="font-bold">भा</span> Action Items Detected:
        </div>
        <div className="space-y-1 text-gray-300">
          <div>• Send projections (Due: Tomorrow)</div>
          <div>• Finalize budget (Due: Friday)</div>
        </div>
        {demoStep >= 4 && (
          <div className="mt-2 text-green-400 flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Saved to Notion
          </div>
        )}
      </motion.div>
    )}
  </div>
);

// Form Visual
const FormVisual = ({ demoStep }) => (
  <div className="h-full min-h-[200px] bg-[#1e1e1e] rounded-xl p-3 sm:p-4">
    <div className="text-[10px] sm:text-xs text-gray-500 mb-3">GST Portal - GSTR-3B</div>
    <div className="space-y-2 sm:space-y-3">
      {[
        { label: "GSTIN", value: demoStep >= 3 ? "27AABCU9603R1ZM" : "" },
        { label: "Legal Name", value: demoStep >= 3 ? "Your Company Pvt Ltd" : "" },
        { label: "Tax Period", value: demoStep >= 3 ? "March 2024" : "" },
        { label: "Taxable Value", value: demoStep >= 3 ? "₹4,50,000" : "" },
      ].map((field, i) => (
        <motion.div
          key={field.label}
          animate={{
            borderColor: demoStep === 1 ? "rgba(249,115,22,0.5)" : "rgba(255,255,255,0.06)",
          }}
          className="flex items-center gap-2 p-2 bg-white/[0.03] rounded border border-white/[0.06]"
        >
          <span className="text-gray-500 text-[10px] sm:text-xs w-20 sm:w-24 flex-shrink-0">{field.label}</span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: field.value ? 1 : 0.3 }}
            className="text-white text-[10px] sm:text-xs flex-1 truncate"
          >
            {field.value || "___________"}
          </motion.span>
          {demoStep >= 3 && field.value && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-green-400 flex-shrink-0"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </motion.span>
          )}
        </motion.div>
      ))}
    </div>
    
    {demoStep >= 4 && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 py-2 bg-green-500 text-white text-[10px] sm:text-xs text-center rounded font-medium"
      >
        Form Auto-Filled Successfully
      </motion.div>
    )}
  </div>
);

// Icons
const CodeIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const InvoiceIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const MeetingIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
  </svg>
);

const FormIcon = () => (
  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
);