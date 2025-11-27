import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card } from './ui/card';
import { 
  Mail, Brain, Target, CheckCircle2, Sparkles, ArrowRight
} from 'lucide-react';

const keyCapabilities = [
  {
    icon: Mail,
    title: 'Invoice Capture',
    description: 'Automatically capture invoices from Gmail, WhatsApp, and manual uploads',
    features: [
      'Gmail OAuth integration',
      'WhatsApp Business API',
      'Bulk drag-and-drop upload',
      'Auto-categorization'
    ],
    gradient: 'from-orange-500 to-amber-500',
    bgGradient: 'from-orange-50 to-amber-50'
  },
  {
    icon: Brain,
    title: 'AI Extraction',
    description: 'Extract vendor details, GSTIN, line items, taxes, and totals with AI',
    features: [
      'Multi-format OCR processing',
      'Smart field detection',
      '99%+ extraction accuracy',
      'Regional language support'
    ],
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50'
  },
  {
    icon: Target,
    title: '3-Way Match',
    description: 'Automated matching between Invoice, Purchase Order & GST 2B',
    features: [
      'PO matching with tolerance',
      'GST 2B validation',
      'Discrepancy alerts',
      'Exception workflows'
    ],
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50'
  }
];

// Capability Card Component
const CapabilityCard = ({ capability, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const Icon = capability.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Card 
        className={`h-full p-6 md:p-8 bg-gradient-to-br ${capability.bgGradient} border-0 overflow-hidden relative transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}
      >
        {/* Background glow */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${capability.gradient} rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition-opacity duration-500`} />
        
        {/* Step number */}
        <div className="absolute top-6 right-6">
          <span className={`text-6xl font-black bg-gradient-to-r ${capability.gradient} bg-clip-text text-transparent opacity-20`}>
            0{index + 1}
          </span>
        </div>

        {/* Icon */}
        <div className="relative mb-6">
          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${capability.gradient} flex items-center justify-center shadow-lg`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {capability.title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            {capability.description}
          </p>
          
          {/* Features */}
          <ul className="space-y-3">
            {capability.features.map((feature, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${capability.gradient} flex items-center justify-center flex-shrink-0`}>
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-gray-700 font-medium">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Hover arrow */}
        <motion.div 
          className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${capability.gradient} flex items-center justify-center shadow-lg`}>
            <ArrowRight className="w-5 h-5 text-white" />
          </div>
        </motion.div>
      </Card>
    </motion.div>
  );
};

// Main Component
export const KeyCapabilities = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Core Features
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Key{' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Capabilities
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Enterprise-grade invoice automation built for Indian businesses
          </p>
          
          {/* Tri-color bar */}
          <div className="h-1 w-48 bg-gradient-to-r from-[#FF9933] via-white to-[#138808] rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Capability Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {keyCapabilities.map((capability, index) => (
            <CapabilityCard 
              key={index} 
              capability={capability} 
              index={index} 
            />
          ))}
        </div>

        {/* Flow indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 flex justify-center"
        >
          <div className="flex items-center gap-4 bg-gray-50 px-6 py-3 rounded-full">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">1</span>
              </div>
              <span className="text-sm text-gray-600 font-medium">Capture</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">2</span>
              </div>
              <span className="text-sm text-gray-600 font-medium">Extract</span>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">3</span>
              </div>
              <span className="text-sm text-gray-600 font-medium">Match</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyCapabilities;