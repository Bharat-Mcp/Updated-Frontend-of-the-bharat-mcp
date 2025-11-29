import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Brain, FileSearch, CheckCircle2, Target,
  Shield, Bell, MessageCircle, Plug, ArrowRight, Sparkles,
  Bot, Building2, Zap, FileText, Receipt, TrendingUp
} from 'lucide-react';

// Central 3D Animated Orb with orbiting icons
const CentralOrb = ({ activeFeature }) => {
  const orbitingIcons = [
    { icon: Mail, color: 'bg-orange-500', delay: 0 },
    { icon: Brain, color: 'bg-blue-500', delay: 0.5 },
    { icon: CheckCircle2, color: 'bg-green-500', delay: 1 },
    { icon: Target, color: 'bg-purple-500', delay: 1.5 },
    { icon: Building2, color: 'bg-teal-500', delay: 2 },
    { icon: MessageCircle, color: 'bg-emerald-500', delay: 2.5 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Outer glow rings */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute w-72 h-72 rounded-full bg-green-500/20 blur-3xl"
      />
      
      {/* Rotating orbit paths */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-64 h-64"
      >
        <div className="absolute inset-0 rounded-full border border-dashed border-green-500/20" />
      </motion.div>
      
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute w-52 h-52"
      >
        <div className="absolute inset-0 rounded-full border border-green-500/30" />
      </motion.div>
      
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-40 h-40"
      >
        <div className="absolute inset-0 rounded-full border border-emerald-400/40" />
      </motion.div>

      {/* Orbiting icons */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-56 h-56"
      >
        {orbitingIcons.map((item, i) => {
          const Icon = item.icon;
          const angle = (i * 60) * (Math.PI / 180);
          const x = Math.cos(angle) * 110;
          const y = Math.sin(angle) * 110;
          
          return (
            <motion.div
              key={i}
              className={`absolute w-10 h-10 ${item.color} rounded-xl flex items-center justify-center shadow-lg`}
              style={{
                left: `calc(50% + ${x}px - 20px)`,
                top: `calc(50% + ${y}px - 20px)`,
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              whileHover={{ scale: 1.2 }}
            >
              <Icon className="w-5 h-5 text-white" />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Central core */}
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full blur-xl opacity-50 scale-110" />
        
        {/* Main orb */}
        <motion.div 
          className="relative w-28 h-28 rounded-full bg-gradient-to-br from-green-400 via-emerald-500 to-green-600 flex items-center justify-center shadow-2xl"
          style={{
            boxShadow: '0 0 60px rgba(16, 185, 129, 0.5), inset 0 0 30px rgba(255,255,255,0.2)'
          }}
        >
          {/* Shine effect */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/40 via-transparent to-transparent" />
          
          {/* Icon */}
          <motion.div
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Bot className="w-12 h-12 text-white drop-shadow-lg" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i * 30) * 15, 0],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
          className="absolute w-2 h-2 rounded-full bg-green-400"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
        />
      ))}
    </div>
  );
};

// Feature point component
const FeaturePoint = ({ icon: Icon, title, description, color, delay, position }) => {
  const colorStyles = {
    green: 'bg-green-500 shadow-green-500/30',
    blue: 'bg-blue-500 shadow-blue-500/30',
    purple: 'bg-purple-500 shadow-purple-500/30',
    orange: 'bg-orange-500 shadow-orange-500/30',
    teal: 'bg-teal-500 shadow-teal-500/30',
    indigo: 'bg-indigo-500 shadow-indigo-500/30',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className={`flex items-start gap-3 p-4 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-lg transition-all cursor-pointer group ${position}`}
    >
      <motion.div 
        whileHover={{ rotate: 10, scale: 1.1 }}
        className={`w-10 h-10 rounded-xl ${colorStyles[color]} flex items-center justify-center shadow-lg flex-shrink-0`}
      >
        <Icon className="w-5 h-5 text-white" />
      </motion.div>
      <div>
        <h4 className="font-semibold text-gray-900 text-sm group-hover:text-green-700 transition-colors">{title}</h4>
        <p className="text-xs text-gray-500 mt-0.5">{description}</p>
      </div>
    </motion.div>
  );
};

// Stat counter animation
const AnimatedStat = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, type: 'spring' }}
    className="text-center"
  >
    <motion.p 
      className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {value}
    </motion.p>
    <p className="text-xs text-gray-500 mt-1">{label}</p>
  </motion.div>
);

// Floating badge component
const FloatingBadge = ({ children, className, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className={className}
  >
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {children}
    </motion.div>
  </motion.div>
);

export const SolutionCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const features = [
    { icon: Mail, title: 'Invoice Capture', description: 'Gmail & WhatsApp auto-sync', color: 'orange' },
    { icon: Brain, title: 'AI Extraction', description: '99.2% accuracy OCR engine', color: 'blue' },
    { icon: FileSearch, title: 'PO Matching', description: 'Automated reconciliation', color: 'purple' },
    { icon: CheckCircle2, title: 'GST 2A/2B Match', description: '100% ITC compliance', color: 'green' },
    { icon: Target, title: '3-Way Matching', description: 'Invoice + PO + GST validation', color: 'indigo' },
    { icon: Building2, title: 'Auto Bill Creation', description: 'Zoho • Tally • SAP sync', color: 'teal' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-green-100/20 to-transparent rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-green-100"
          >
            <Sparkles className="w-4 h-4" />
            Complete AP Automation Platform
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need,{' '}
            <span className="bg-gradient-to-r from-[#138808] to-emerald-500 bg-clip-text text-transparent">
              One Platform
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            AI-powered invoice automation with GST compliance built specifically for Indian businesses
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-3 gap-6 md:gap-8 items-center">
          {/* Left features */}
          <div className="space-y-4 order-2 lg:order-1">
            {features.slice(0, 3).map((feature, i) => (
              <FeaturePoint
                key={i}
                {...feature}
                delay={0.1 + i * 0.1}
                position=""
              />
            ))}
          </div>

          {/* Center orb */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-80 md:h-96 order-1 lg:order-2"
          >
            <CentralOrb activeFeature={activeIndex} />
            
            {/* Floating badges */}
            <FloatingBadge 
              delay={0.5}
              className="absolute top-4 right-4 md:top-0 md:-right-4"
            >
              <div className="bg-white px-3 py-2 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Processing</p>
                    <p className="text-sm font-bold text-gray-900">5x Faster</p>
                  </div>
                </div>
              </div>
            </FloatingBadge>

            <FloatingBadge 
              delay={0.8}
              className="absolute bottom-4 left-4 md:bottom-0 md:-left-4"
            >
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-2 rounded-xl shadow-lg">
                <div className="flex items-center gap-2 text-white">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-semibold">99.8% Accuracy</span>
                </div>
              </div>
            </FloatingBadge>
          </motion.div>

          {/* Right features */}
          <div className="space-y-4 order-3">
            {features.slice(3, 6).map((feature, i) => (
              <FeaturePoint
                key={i}
                {...feature}
                delay={0.3 + i * 0.1}
                position=""
              />
            ))}
          </div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-lg"
        >
          <AnimatedStat value="10K+" label="Invoices Processed" delay={0.1} />
          <AnimatedStat value="100%" label="GST Compliant" delay={0.2} />
          <AnimatedStat value="₹2L+" label="ITC Recovered" delay={0.3} />
          <AnimatedStat value="5+" label="Happy Businesses" delay={0.4} />
        </motion.div>

        {/* Bottom features strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {[
            { icon: Shield, label: 'Duplicate Prevention' },
            { icon: Bell, label: 'Smart Alerts' },
            { icon: MessageCircle, label: 'WhatsApp Recon' },
            { icon: Plug, label: '6+ Integrations' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <item.icon className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#138808] hover:bg-[#0f6906] text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-green-600/25 flex items-center justify-center gap-2 transition-all"
          >
            Start Free Pilot
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 transition-all"
          >
            Schedule Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionCard;