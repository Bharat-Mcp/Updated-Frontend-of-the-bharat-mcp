import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Factory, ShoppingBag, Truck, Building2, Stethoscope, 
  GraduationCap, Utensils, Wrench, ArrowRight, ArrowLeft,
  Sparkles, CheckCircle2, FileText, Users, Clock, Shield
} from 'lucide-react';

const useCases = [
  {
    id: 1,
    icon: Factory,
    industry: 'Manufacturing',
    title: 'For Manufacturers',
    subtitle: 'Streamline vendor invoice processing',
    description: 'Handle thousands of vendor invoices from raw material suppliers. Auto-match with POs, validate GST, and sync to your ERP.',
    painPoints: ['High volume vendor invoices', 'Complex PO matching', 'ITC reconciliation delays'],
    solutions: ['Bulk invoice processing', 'Auto 3-way matching', 'Real-time GST 2B sync'],
    gradient: 'from-blue-500 to-cyan-500',
    bgGradient: 'from-blue-50 to-cyan-50',
    glowColor: 'rgba(59,130,246,0.3)',
  },
  {
    id: 2,
    icon: ShoppingBag,
    industry: 'Retail & E-commerce',
    title: 'For Retailers',
    subtitle: 'Manage multi-vendor billing',
    description: 'Process invoices from hundreds of suppliers across categories. Ensure GST compliance and prevent duplicate payments.',
    painPoints: ['Multiple vendor formats', 'Seasonal invoice spikes', 'Duplicate invoice risk'],
    solutions: ['Any format extraction', 'Scalable processing', 'Smart duplicate detection'],
    gradient: 'from-purple-500 to-pink-500',
    bgGradient: 'from-purple-50 to-pink-50',
    glowColor: 'rgba(168,85,247,0.3)',
  },
  {
    id: 3,
    icon: Truck,
    industry: 'Logistics & Transport',
    title: 'For Logistics Companies',
    subtitle: 'Track fleet & vendor expenses',
    description: 'Capture fuel bills, maintenance invoices, and vendor payments. Reconcile across multiple locations and vehicles.',
    painPoints: ['Scattered invoice sources', 'Multi-location tracking', 'Fuel & maintenance bills'],
    solutions: ['WhatsApp invoice capture', 'Location-wise reports', 'Expense categorization'],
    gradient: 'from-orange-500 to-amber-500',
    bgGradient: 'from-orange-50 to-amber-50',
    glowColor: 'rgba(249,115,22,0.3)',
  },
  {
    id: 4,
    icon: Building2,
    industry: 'Real Estate & Construction',
    title: 'For Builders & Contractors',
    subtitle: 'Handle project-wise invoices',
    description: 'Manage contractor invoices, material purchases, and project expenses. Track costs per project with GST compliance.',
    painPoints: ['Project-wise tracking', 'Contractor compliance', 'Material purchase chaos'],
    solutions: ['Project tagging', 'Vendor GST verification', 'Purchase order matching'],
    gradient: 'from-teal-500 to-green-500',
    bgGradient: 'from-teal-50 to-green-50',
    glowColor: 'rgba(20,184,166,0.3)',
  },
  {
    id: 5,
    icon: Stethoscope,
    industry: 'Healthcare',
    title: 'For Hospitals & Clinics',
    subtitle: 'Process medical supplier invoices',
    description: 'Handle invoices from pharmaceutical distributors, equipment vendors, and service providers with full compliance.',
    painPoints: ['Pharma distributor bills', 'Equipment maintenance', 'Compliance requirements'],
    solutions: ['Batch-wise tracking', 'Expiry date capture', 'Audit-ready reports'],
    gradient: 'from-red-500 to-rose-500',
    bgGradient: 'from-red-50 to-rose-50',
    glowColor: 'rgba(239,68,68,0.3)',
  },
  {
    id: 6,
    icon: Utensils,
    industry: 'Hospitality & F&B',
    title: 'For Hotels & Restaurants',
    subtitle: 'Manage daily vendor invoices',
    description: 'Process daily invoices from food suppliers, beverage distributors, and service vendors. Track costs and ensure margins.',
    painPoints: ['Daily invoice volume', 'Perishable tracking', 'Cost control'],
    solutions: ['Daily batch processing', 'Category-wise analysis', 'Margin reports'],
    gradient: 'from-amber-500 to-yellow-500',
    bgGradient: 'from-amber-50 to-yellow-50',
    glowColor: 'rgba(245,158,11,0.3)',
  },
  {
    id: 7,
    icon: Wrench,
    industry: 'Service Businesses',
    title: 'For Service Providers',
    subtitle: 'Track operational expenses',
    description: 'Manage vendor invoices for office supplies, utilities, professional services, and operational expenses.',
    painPoints: ['Scattered expenses', 'Recurring invoices', 'Budget tracking'],
    solutions: ['Expense categorization', 'Recurring detection', 'Budget alerts'],
    gradient: 'from-indigo-500 to-violet-500',
    bgGradient: 'from-indigo-50 to-violet-50',
    glowColor: 'rgba(99,102,241,0.3)',
  },
  {
    id: 8,
    icon: GraduationCap,
    industry: 'Education',
    title: 'For Educational Institutions',
    subtitle: 'Handle vendor & supplier bills',
    description: 'Process invoices from book suppliers, equipment vendors, maintenance contractors, and service providers.',
    painPoints: ['Multiple departments', 'Annual budget cycles', 'Vendor management'],
    solutions: ['Department-wise tracking', 'Budget utilization', 'Vendor scorecards'],
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
    glowColor: 'rgba(34,197,94,0.3)',
  },
];

// Enhanced 3D Case Card
const CaseCard = ({ useCase, isActive, mousePos, isHovered }) => {
  const Icon = useCase.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      exit={{ opacity: 0, y: -20, rotateX: 10 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        transform: isHovered ? `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)` : 'perspective(1000px)',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.2s ease-out'
      }}
      className={`relative bg-gradient-to-br ${useCase.bgGradient} rounded-3xl p-6 md:p-8 border border-white/60 shadow-2xl overflow-hidden`}
    >
      {/* Animated glow effect */}
      <motion.div 
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br ${useCase.gradient} rounded-full blur-3xl`}
        style={{ opacity: 0.15 }}
      />
      
      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-2 h-2 rounded-full bg-gradient-to-br ${useCase.gradient}`}
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            opacity: 0.2,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
      
      {/* Header with 3D icon */}
      <div className="relative flex items-start justify-between mb-6">
        <div style={{ transform: 'translateZ(30px)' }}>
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${useCase.gradient} flex items-center justify-center shadow-xl mb-4`}
            style={{ 
              boxShadow: `0 20px 40px -15px ${useCase.glowColor}`,
              transform: 'translateZ(40px)'
            }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className={`text-xs font-bold uppercase tracking-wider bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent`}
          >
            {useCase.industry}
          </motion.span>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mt-1"
          >
            {useCase.title}
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 mt-1"
          >
            {useCase.subtitle}
          </motion.p>
        </div>
      </div>

      {/* Description */}
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-gray-600 mb-6 leading-relaxed relative"
        style={{ transform: 'translateZ(20px)' }}
      >
        {useCase.description}
      </motion.p>

      {/* Two columns with glass effect */}
      <div className="grid md:grid-cols-2 gap-4 relative" style={{ transform: 'translateZ(15px)' }}>
        {/* Pain Points */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-white shadow-lg"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-red-500 text-sm font-bold">!</span>
            </div>
            <span className="text-sm font-semibold text-gray-700">Challenges</span>
          </div>
          <ul className="space-y-2.5">
            {useCase.painPoints.map((point, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="flex items-start gap-2 text-sm text-gray-600"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-1.5 flex-shrink-0" />
                {point}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Solutions */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white/70 backdrop-blur-md rounded-2xl p-4 border border-white shadow-lg"
        >
          <div className="flex items-center gap-2 mb-3">
            <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${useCase.gradient} flex items-center justify-center shadow-md`}>
              <CheckCircle2 className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-700">Solutions</span>
          </div>
          <ul className="space-y-2.5">
            {useCase.solutions.map((solution, i) => (
              <motion.li 
                key={i}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="flex items-start gap-2 text-sm text-gray-700 font-medium"
              >
                <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 text-transparent bg-gradient-to-br ${useCase.gradient} rounded-full`} style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
                <span>{solution}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Read Case Study Link */}
      <motion.a
        href={`/case-studies/${useCase.industry.toLowerCase().replace(/\s+/g, '-')}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        whileHover={{ x: 5 }}
        className={`inline-flex items-center gap-2 mt-6 text-sm font-semibold bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent group`}
        style={{ transform: 'translateZ(25px)' }}
      >
        Read Full Case Study
        <ArrowRight className={`w-4 h-4 text-current transition-transform group-hover:translate-x-1`} style={{ color: useCase.glowColor.replace('0.3', '1') }} />
      </motion.a>
    </motion.div>
  );
};

// Industry pill with hover effects
const IndustryPill = ({ useCase, isActive, onClick }) => {
  const Icon = useCase.icon;
  
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all whitespace-nowrap border ${
        isActive 
          ? `bg-gradient-to-r ${useCase.gradient} text-white border-transparent shadow-lg` 
          : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:shadow-md'
      }`}
      style={isActive ? { boxShadow: `0 10px 30px -10px ${useCase.glowColor}` } : {}}
    >
      <Icon className="w-4 h-4" />
      <span className="hidden sm:inline">{useCase.industry}</span>
    </motion.button>
  );
};

export const WhyChooseUs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [touchStart, setTouchStart] = useState(0);
  const cardRef = useRef(null);

  // Auto-play with smooth cycling
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;
    
    const timer = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % useCases.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered]);

  // 3D mouse tracking
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 10;
    setMousePos({ x, y });
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const diff = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      setIsAutoPlaying(false);
      if (diff > 0) {
        setActiveIndex(prev => (prev + 1) % useCases.length);
      } else {
        setActiveIndex(prev => (prev - 1 + useCases.length) % useCases.length);
      }
    }
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex(prev => (prev === 0 ? useCases.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex(prev => (prev === useCases.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-14"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-green-100"
          >
            <Sparkles className="w-4 h-4" />
            Built for Every Industry
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Who We{' '}
            <span className="bg-gradient-to-r from-[#138808] to-emerald-500 bg-clip-text text-transparent">
              Help
            </span>
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto">
            From SMBs to enterprises, our AP automation platform adapts to your industry needs
          </p>
        </motion.div>

        {/* Industry Pills */}
        <div className="relative mb-8">
          <div 
            className="flex gap-2 overflow-x-auto pb-4 justify-start md:justify-center px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {useCases.map((useCase, index) => (
              <IndustryPill
                key={useCase.id}
                useCase={useCase}
                isActive={activeIndex === index}
                onClick={() => { setActiveIndex(index); setIsAutoPlaying(false); }}
              />
            ))}
          </div>
        </div>

        {/* Main Card with 3D effect */}
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToPrev}
            className="hidden md:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 items-center justify-center hover:shadow-2xl transition-shadow"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToNext}
            className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-xl border border-gray-100 items-center justify-center hover:shadow-2xl transition-shadow"
          >
            <ArrowRight className="w-5 h-5 text-gray-600" />
          </motion.button>

          {/* 3D Card Container */}
          <div
            ref={cardRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => { setIsHovered(false); setMousePos({ x: 0, y: 0 }); }}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={{ perspective: '1000px' }}
          >
            <AnimatePresence mode="wait">
              <CaseCard 
                key={useCases[activeIndex].id}
                useCase={useCases[activeIndex]} 
                isActive={true}
                mousePos={mousePos}
                isHovered={isHovered}
              />
            </AnimatePresence>
          </div>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-6">
            {useCases.map((uc, index) => (
              <button
                key={index}
                onClick={() => { setActiveIndex(index); setIsAutoPlaying(false); }}
                className="relative h-2 rounded-full overflow-hidden transition-all duration-300"
                style={{ 
                  width: index === activeIndex ? 32 : 8,
                  background: index === activeIndex ? 'transparent' : '#d1d5db'
                }}
              >
                {index === activeIndex && (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-r ${uc.gradient}`} />
                    <motion.div 
                      className="absolute inset-0 bg-white/40 origin-left"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 5, ease: "linear" }}
                      key={activeIndex}
                    />
                  </>
                )}
              </button>
            ))}
          </div>

          {/* Auto-play toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`text-xs px-3 py-1.5 rounded-full transition-all ${
                isAutoPlaying 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-gray-100 text-gray-500'
              }`}
            >
              {isAutoPlaying ? '● Auto-playing' : '○ Paused'}
            </button>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: Users, label: 'Industries Served', value: '8+' },
            { icon: FileText, label: 'Invoice Formats', value: 'Any' },
            { icon: Clock, label: 'Setup Time', value: '< 1 Day' },
            { icon: Shield, label: 'Data Security', value: '100%' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm text-center transition-all"
            >
              <stat.icon className="w-6 h-6 text-[#138808] mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Don't see your industry? We adapt to your needs.</p>
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 20px 40px -15px rgba(19,136,8,0.4)' }}
            whileTap={{ scale: 0.98 }}
            className="bg-[#138808] hover:bg-[#0f6906] text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-green-600/25 inline-flex items-center gap-2 transition-all"
          >
            Talk to Us
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;