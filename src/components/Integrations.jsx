import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const Integrations = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const categories = [
    {
      title: "Accounting",
      color: "#f97316",
      apps: [
        { name: "Tally Prime", status: "live" },
        { name: "Zoho Books", status: "live" },
        { name: "QuickBooks", status: "live" },
        { name: "Vyapar", status: "soon" },
      ],
    },
    {
      title: "Productivity",
      color: "#3b82f6",
      apps: [
        { name: "Google Sheets", status: "live" },
        { name: "Notion", status: "live" },
        { name: "Excel", status: "live" },
        { name: "Airtable", status: "soon" },
      ],
    },
    {
      title: "Communication",
      color: "#10b981",
      apps: [
        { name: "Gmail", status: "live" },
        { name: "WhatsApp", status: "soon" },
        { name: "Outlook", status: "live" },
        { name: "Slack", status: "soon" },
      ],
    },
    {
      title: "Development",
      color: "#8b5cf6",
      apps: [
        { name: "VS Code", status: "live" },
        { name: "GitHub", status: "live" },
        { name: "GitLab", status: "live" },
        { name: "Jira", status: "soon" },
      ],
    },
    {
      title: "Meetings",
      color: "#ec4899",
      apps: [
        { name: "Zoom", status: "live" },
        { name: "Google Meet", status: "live" },
        { name: "Teams", status: "live" },
        { name: "Webex", status: "soon" },
      ],
    },
    {
      title: "India Specific",
      color: "#f59e0b",
      apps: [
        { name: "GST Portal", status: "soon" },
        { name: "Income Tax", status: "soon" },
        { name: "EPFO", status: "soon" },
        { name: "Digilocker", status: "soon" },
      ],
    },
  ];

  return (
    <section id="integrations" className="relative py-20 md:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-orange-500/10 to-transparent rounded-full blur-3xl" />
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
            Integrations
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Works with
            <span className="text-gradient"> your apps</span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-xl mx-auto">
            Bharat MCP connects to tools you already use. No complex setup.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-8 sm:gap-16 mb-12 md:mb-16"
        >
          {[
            { value: "20+", label: "Live Integrations" },
            { value: "15+", label: "Coming Soon" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">{stat.value}</div>
              <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16">
          {categories.map((category, categoryIndex) => (
            <CategoryCard 
              key={category.title} 
              category={category} 
              index={categoryIndex} 
            />
          ))}
        </div>

        {/* Flow Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative p-6 sm:p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Simple Flow</h3>
            <p className="text-sm sm:text-base text-gray-500">Screen → Bharat MCP → Your Apps</p>
          </div>

          {/* Flow Diagram */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 md:gap-12">
            {/* Screen */}
            <FlowStep 
              icon={<ScreenIcon />}
              label="Your Screen"
              delay={0}
            />

            {/* Arrow */}
            <FlowArrow />

            {/* MCP */}
            <motion.div
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <span className="text-2xl sm:text-3xl font-bold text-white">भा</span>
              </div>
              <span className="text-xs sm:text-sm text-white font-medium">Bharat MCP</span>
            </motion.div>

            {/* Arrow */}
            <FlowArrow />

            {/* Apps */}
            <FlowStep 
              icon={<AppsIcon />}
              label="Your Apps"
              delay={0.2}
            />
          </div>

          {/* Examples */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { from: "Invoice on screen", to: "Entry in Tally" },
              { from: "Email content", to: "Task in Notion" },
              { from: "Meeting notes", to: "Doc in Drive" },
            ].map((example, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]"
              >
                <span className="text-xs sm:text-sm text-gray-500">{example.from}</span>
                <ArrowRightIcon className="w-4 h-4 text-orange-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-white">{example.to}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-4 text-sm sm:text-base">Don't see your app?</p>
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-white/[0.03] border border-white/[0.08] rounded-xl font-medium text-white hover:bg-white/[0.06] transition-colors text-sm sm:text-base"
          >
            Request Integration
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Category Card Component
const CategoryCard = ({ category, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group"
    >
      <div className="h-full p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-base sm:text-lg font-semibold text-white">{category.title}</h3>
          <span 
            className="text-[10px] sm:text-xs px-2 py-1 rounded-full"
            style={{ 
              backgroundColor: `${category.color}15`,
              color: category.color 
            }}
          >
            {category.apps.filter(a => a.status === "live").length} live
          </span>
        </div>

        {/* Apps */}
        <div className="space-y-2">
          {category.apps.map((app, i) => (
            <motion.div
              key={app.name}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.05 + i * 0.03 }}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-medium"
                  style={{ 
                    backgroundColor: `${category.color}10`,
                    color: category.color 
                  }}
                >
                  {app.name.charAt(0)}
                </div>
                <span className="text-sm text-gray-300">{app.name}</span>
              </div>
              
              <span className={`text-[10px] sm:text-xs px-2 py-0.5 rounded-full ${
                app.status === "live" 
                  ? "bg-green-500/10 text-green-400" 
                  : "bg-white/[0.05] text-gray-500"
              }`}>
                {app.status === "live" ? "Live" : "Soon"}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Flow Step Component
const FlowStep = ({ icon, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    className="flex flex-col items-center gap-2"
  >
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-400">
      {icon}
    </div>
    <span className="text-xs sm:text-sm text-gray-500">{label}</span>
  </motion.div>
);

// Flow Arrow Component
const FlowArrow = () => (
  <div className="flex sm:flex-row flex-col items-center gap-1">
    {[0, 1, 2].map((i) => (
      <motion.div
        key={i}
        animate={{ 
          x: [0, 4, 0],
          opacity: [0.3, 1, 0.3] 
        }}
        transition={{ 
          duration: 1.2, 
          repeat: Infinity, 
          delay: i * 0.15 
        }}
        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-orange-500"
      />
    ))}
  </div>
);

// Icons
const ScreenIcon = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const AppsIcon = () => (
  <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
  </svg>
);

const ArrowRightIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);