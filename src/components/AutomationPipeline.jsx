import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Brain, FileSearch, CheckCircle2, FileText, 
  Shield, Bell, Building2, ArrowRight, Sparkles,
  Zap, Target, MessageCircle, Play, Pause
} from 'lucide-react';

const pipelineSteps = [
  { id: 1, icon: Mail, label: 'Capture', color: 'orange', desc: 'Gmail & WhatsApp' },
  { id: 2, icon: Brain, label: 'Extract', color: 'blue', desc: 'AI + OCR' },
  { id: 3, icon: FileSearch, label: 'PO Match', color: 'purple', desc: 'Auto reconcile' },
  { id: 4, icon: CheckCircle2, label: 'GST 2B', color: 'green', desc: 'ITC compliance' },
  { id: 5, icon: Target, label: '3-Way', color: 'indigo', desc: 'Full validation' },
  { id: 6, icon: Building2, label: 'Sync', color: 'teal', desc: 'Zoho • Tally' },
];

const colorMap = {
  orange: { bg: 'bg-orange-500', light: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', glow: 'shadow-orange-500/30' },
  blue: { bg: 'bg-blue-500', light: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', glow: 'shadow-blue-500/30' },
  purple: { bg: 'bg-purple-500', light: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', glow: 'shadow-purple-500/30' },
  green: { bg: 'bg-green-500', light: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', glow: 'shadow-green-500/30' },
  indigo: { bg: 'bg-indigo-500', light: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200', glow: 'shadow-indigo-500/30' },
  teal: { bg: 'bg-teal-500', light: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200', glow: 'shadow-teal-500/30' },
};

const detailedInfo = {
  1: { title: 'Invoice Capture', subtitle: 'Multi-Channel Ingestion', features: ['Gmail OAuth sync', 'WhatsApp Business API', 'Drag & drop upload', 'Auto-categorization'], stat: '10K+', statLabel: 'invoices/mo' },
  2: { title: 'AI + OCR Extraction', subtitle: 'Smart Data Parsing', features: ['99.2% accuracy', 'GSTIN validation', 'Line item extraction', 'Multi-language'], stat: '99.2%', statLabel: 'accuracy' },
  3: { title: 'PO Matching', subtitle: 'Automated Reconciliation', features: ['Fuzzy matching', 'Partial delivery', 'Variance detection', 'Tolerance rules'], stat: '85%', statLabel: 'auto-matched' },
  4: { title: 'GST 2B Reconciliation', subtitle: 'Real-time Compliance', features: ['Portal API sync', 'ITC eligibility', 'Mismatch alerts', 'Filing status'], stat: '100%', statLabel: 'ITC compliant' },
  5: { title: '3-Way Matching', subtitle: 'Invoice ↔ PO ↔ GST', features: ['Single view', 'Exception handling', 'Audit reports', 'Smart resolution'], stat: '360°', statLabel: 'visibility' },
  6: { title: 'Auto Bill Creation', subtitle: 'ERP Sync', features: ['One-click sync', 'IRN attachment', 'Custom mapping', 'Duplicate block'], stat: '5x', statLabel: 'faster' },
};

// Animated Progress Line between steps
const ProgressLine = ({ isCompleted, isActive, index }) => (
  <div className="hidden md:flex items-center w-8 lg:w-12 relative">
    {/* Background line */}
    <div className="absolute inset-0 flex items-center">
      <div className="h-0.5 w-full bg-gray-200 rounded-full" />
    </div>
    {/* Animated fill */}
    <motion.div
      initial={{ width: '0%' }}
      animate={{ width: isCompleted ? '100%' : isActive ? '50%' : '0%' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="absolute h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
    />
    {/* Pulse dot for active */}
    {isActive && (
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        className="absolute left-1/2 -translate-x-1/2 w-2 h-2 bg-green-500 rounded-full"
      />
    )}
  </div>
);

// Pipeline Step Button with enhanced animations
const StepButton = ({ step, isActive, isCompleted, onClick, index }) => {
  const Icon = step.icon;
  const colors = colorMap[step.color];
  
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, type: 'spring' }}
      onClick={onClick}
      className="relative flex flex-col items-center group"
    >
      {/* Glow effect for active */}
      {isActive && (
        <motion.div
          layoutId="activeGlow"
          className={`absolute -inset-2 ${colors.light} rounded-2xl blur-sm`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}
      
      {/* Step circle */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={isActive ? { scale: [1, 1.05, 1] } : {}}
        transition={isActive ? { duration: 2, repeat: Infinity } : {}}
        className={`relative z-10 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${
          isActive 
            ? `${colors.bg} shadow-xl ${colors.glow}` 
            : isCompleted 
              ? 'bg-green-500 shadow-green-500/20' 
              : 'bg-gray-100 group-hover:bg-gray-200'
        }`}
      >
        {isCompleted && !isActive ? (
          <CheckCircle2 className="w-6 h-6 text-white" />
        ) : (
          <Icon className={`w-6 h-6 ${isActive || isCompleted ? 'text-white' : 'text-gray-400 group-hover:text-gray-600'}`} />
        )}
        
        {/* Active ring animation */}
        {isActive && (
          <motion.div
            className={`absolute inset-0 rounded-xl border-2 ${colors.border}`}
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.div>
      
      {/* Label */}
      <span className={`mt-2 text-xs md:text-sm font-medium transition-colors ${
        isActive ? colors.text : isCompleted ? 'text-green-600' : 'text-gray-500'
      }`}>
        {step.label}
      </span>
      
      {/* Step number badge */}
      <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full text-[10px] font-bold flex items-center justify-center ${
        isActive ? `${colors.bg} text-white` : isCompleted ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
      }`}>
        {step.id}
      </div>
    </motion.button>
  );
};

// Detail Card with more animations
const DetailCard = ({ step, info, progress }) => {
  const colors = colorMap[step.color];
  const Icon = step.icon;
  
  return (
    <motion.div
      key={step.id}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -30, scale: 0.95 }}
      transition={{ duration: 0.4, type: 'spring' }}
      className="relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 ${colors.light} rounded-3xl opacity-50`} />
      <div className={`absolute top-0 right-0 w-64 h-64 ${colors.bg} opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2`} />
      
      <div className={`relative bg-white/80 backdrop-blur-sm rounded-3xl border ${colors.border} p-5 md:p-8 shadow-xl`}>
        {/* Progress bar at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100 rounded-t-3xl overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            className={`h-full ${colors.bg}`}
          />
        </div>
        
        <div className="flex flex-col md:flex-row md:items-start gap-5">
          {/* Left: Icon & Stats */}
          <div className="flex md:flex-col items-center gap-4">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${colors.bg} flex items-center justify-center shadow-lg ${colors.glow}`}
            >
              <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </motion.div>
            <div className="text-center md:text-left">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
                className={`text-3xl md:text-4xl font-bold ${colors.text}`}
              >
                {info.stat}
              </motion.div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">{info.statLabel}</div>
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`inline-block text-xs px-2 py-0.5 rounded-full ${colors.light} ${colors.text} font-medium mb-2`}
            >
              Step {step.id} of 6
            </motion.span>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl font-bold text-gray-900 mb-1"
            >
              {info.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className={`text-sm ${colors.text} font-medium mb-4`}
            >
              {info.subtitle}
            </motion.p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-2">
              {info.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm border border-gray-100"
                >
                  <CheckCircle2 className={`w-4 h-4 ${colors.text} flex-shrink-0`} />
                  <span className="text-xs md:text-sm text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Additional Features
const AdditionalFeatures = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8"
  >
    {[
      { icon: Shield, label: 'Duplicate Block', desc: 'Zero duplicates', color: 'text-red-500' },
      { icon: Bell, label: 'Smart Alerts', desc: 'Real-time notify', color: 'text-amber-500' },
      { icon: MessageCircle, label: 'Vendor Chase', desc: 'WhatsApp follow-up', color: 'text-green-500' },
      { icon: Zap, label: 'Fast Sync', desc: '< 5 min processing', color: 'text-blue-500' },
    ].map((item, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        whileHover={{ scale: 1.03, y: -3 }}
        className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-lg transition-all cursor-pointer group"
      >
        <item.icon className={`w-6 h-6 ${item.color} mb-2 group-hover:scale-110 transition-transform`} />
        <h4 className="text-sm font-semibold text-gray-900">{item.label}</h4>
        <p className="text-xs text-gray-500">{item.desc}</p>
      </motion.div>
    ))}
  </motion.div>
);

export const AutomationPipeline = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  
  const currentStep = pipelineSteps.find(s => s.id === activeStep);
  const currentInfo = detailedInfo[activeStep];
  
  // Auto-play logic
  useEffect(() => {
    if (!isAutoPlaying) {
      setProgress(0);
      return;
    }
    
    setProgress(0);
    const duration = 4000; // 4 seconds per step
    const interval = 50;
    const increment = (interval / duration) * 100;
    
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          return 0;
        }
        return prev + increment;
      });
    }, interval);
    
    const stepTimer = setInterval(() => {
      setActiveStep(prev => prev >= 6 ? 1 : prev + 1);
    }, duration);
    
    return () => {
      clearInterval(progressTimer);
      clearInterval(stepTimer);
    };
  }, [isAutoPlaying, activeStep]);
  
  const handleStepClick = (stepId) => {
    setIsAutoPlaying(false);
    setActiveStep(stepId);
    setProgress(0);
  };

  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1.5 rounded-full text-sm font-medium mb-4 border border-green-100">
            <Sparkles className="w-4 h-4" />
            6-Step Automation
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            From Invoice to{' '}
            <span className="bg-gradient-to-r from-[#138808] to-emerald-500 bg-clip-text text-transparent">
              Bill in Minutes
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Complete automation pipeline with validation at every step
          </p>
        </motion.div>

        {/* Auto-play control */}
        <div className="flex justify-center mb-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              isAutoPlaying 
                ? 'bg-green-100 text-green-700 border border-green-200' 
                : 'bg-gray-100 text-gray-600 border border-gray-200'
            }`}
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-4 h-4" />
                <span>Auto-playing</span>
                <span className="flex gap-0.5">
                  {[0, 1, 2].map(i => (
                    <motion.span
                      key={i}
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                      className="w-1 h-1 bg-green-500 rounded-full"
                    />
                  ))}
                </span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span>Click to auto-play</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Pipeline Flow */}
        <div className="flex items-center justify-center gap-2 md:gap-0 mb-8 md:mb-10 overflow-x-auto pb-4 px-4">
          {pipelineSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <StepButton
                step={step}
                isActive={activeStep === step.id}
                isCompleted={activeStep > step.id}
                onClick={() => handleStepClick(step.id)}
                index={index}
              />
              {index < pipelineSteps.length - 1 && (
                <ProgressLine 
                  isCompleted={activeStep > step.id} 
                  isActive={activeStep === step.id}
                  index={index} 
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Detail Card */}
        <AnimatePresence mode="wait">
          <DetailCard 
            step={currentStep} 
            info={currentInfo} 
            progress={isAutoPlaying ? progress : 100}
          />
        </AnimatePresence>

        {/* Additional Features */}
        <AdditionalFeatures />

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-3 justify-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#138808] hover:bg-[#0f6906] text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-green-600/20 flex items-center justify-center gap-2 transition-colors"
          >
            Start Free Pilot
            <ArrowRight className="w-4 h-4" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-xl border-2 border-gray-200 transition-colors"
          >
            Watch Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AutomationPipeline;