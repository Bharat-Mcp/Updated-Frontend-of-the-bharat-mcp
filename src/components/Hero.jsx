import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { 
  Play, ArrowRight, MessageCircle, 
  CheckCircle2, Sparkles, Bot,
  Send, Check, FileText, 
  Receipt, GitCompare, Building2,
  Mail, Bell, X, CheckCheck, 
  ChevronUp, ChevronDown, Mouse
} from 'lucide-react';

// Scroll Down Indicator (at bottom of hero)
const ScrollDownIndicator = ({ show }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' })}
        >
          <span className="text-xs font-medium text-gray-500 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-gray-100">
            Scroll to explore
          </span>
          <div className="w-8 h-12 rounded-full border-2 border-gray-300 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-3 bg-gray-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// Scroll to Top Button
const ScrollToTopButton = ({ show, onClick }) => (
  <AnimatePresence>
    {show && (
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, type: "spring" }}
        onClick={onClick}
        className="fixed bottom-8 right-4 md:right-8 z-50 w-11 h-11 md:w-12 md:h-12 bg-[#138808] hover:bg-[#0f6906] text-white rounded-full shadow-lg shadow-green-600/30 flex items-center justify-center transition-colors"
      >
        <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
      </motion.button>
    )}
  </AnimatePresence>
);

// New Message Indicator in Chat
const NewMessageIndicator = ({ count, onClick }) => (
  <motion.button
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    onClick={onClick}
    className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-[#138808] text-white px-3 py-1.5 rounded-full shadow-lg text-xs font-medium hover:bg-[#0f6906] transition-colors"
  >
    <ChevronDown className="w-3.5 h-3.5" />
    {count} new
  </motion.button>
);

// Floating Notification Component
const FloatingNotification = ({ icon: Icon, iconBg, title, message, time, onClose, index, isMobile }) => (
  <motion.div
    initial={{ opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? -50 : 0, scale: 0.9 }}
    animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
    exit={{ opacity: 0, x: isMobile ? 0 : 100, y: isMobile ? -50 : 0, scale: 0.9 }}
    transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
    className={`fixed bg-white rounded-xl shadow-2xl border border-gray-100 p-3 z-50 ${
      isMobile 
        ? 'left-4 right-4 top-20' 
        : 'right-4 w-72'
    }`}
    style={!isMobile ? { top: `${100 + index * 90}px` } : {}}
  >
    <div className="flex items-start gap-3">
      <div className={`w-9 h-9 rounded-lg ${iconBg} flex items-center justify-center flex-shrink-0`}>
        <Icon className="w-4 h-4 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-semibold text-gray-900 truncate">{title}</p>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">{message}</p>
        <p className="text-[10px] text-gray-400 mt-1">{time}</p>
      </div>
    </div>
    <motion.div
      initial={{ width: "100%" }}
      animate={{ width: "0%" }}
      transition={{ duration: 4, ease: "linear" }}
      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-b-xl"
    />
  </motion.div>
);

// Typing animation component
const TypingDots = () => (
  <div className="flex items-center gap-1 px-3 py-2">
    {[0, 0.2, 0.4].map((delay, i) => (
      <motion.span
        key={i}
        className="w-1.5 h-1.5 bg-gray-400 rounded-full"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1, repeat: Infinity, delay }}
      />
    ))}
  </div>
);

// Chat message component
const ChatMessage = ({ isBot, message, children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className={`flex ${isBot ? 'justify-start' : 'justify-end'}`}
  >
    <div className="max-w-[88%] md:max-w-[85%]">
      <div className={`px-3 py-2 md:px-4 md:py-2.5 rounded-2xl ${
        isBot 
          ? 'bg-white border border-gray-100 text-gray-800 rounded-tl-md shadow-sm' 
          : 'bg-[#138808] text-white rounded-tr-md'
      }`}>
        <p className="text-xs md:text-sm leading-relaxed">{message}</p>
        {children}
      </div>
    </div>
  </motion.div>
);

// 3-Way Match Result Card
const ThreeWayMatchCard = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="mt-2 bg-gradient-to-br from-gray-50 to-green-50/50 rounded-lg p-2.5 border border-gray-100"
  >
    <div className="text-[10px] md:text-xs font-medium text-gray-500 mb-2">3-Way Match</div>
    <div className="space-y-1.5">
      {[
        { icon: FileText, label: 'Invoice', color: 'bg-blue-100', iconColor: 'text-blue-600' },
        { icon: Receipt, label: 'PO #4521', color: 'bg-purple-100', iconColor: 'text-purple-600' },
        { icon: GitCompare, label: 'GST 2B', color: 'bg-orange-100', iconColor: 'text-orange-600' },
      ].map(({ icon: Icon, label, color, iconColor }) => (
        <div key={label} className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className={`w-5 h-5 md:w-6 md:h-6 rounded-md ${color} flex items-center justify-center`}>
              <Icon className={`w-3 h-3 md:w-3.5 md:h-3.5 ${iconColor}`} />
            </div>
            <span className="text-[10px] md:text-xs text-gray-700">{label}</span>
          </div>
          <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-green-600" />
        </div>
      ))}
    </div>
    <div className="mt-2 pt-2 border-t border-gray-100 flex items-center justify-between">
      <span className="text-[10px] md:text-xs text-gray-500">Status</span>
      <span className="text-[10px] md:text-xs font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full">
        ✓ Matched
      </span>
    </div>
  </motion.div>
);

// WhatsApp Reconciliation Card
const WhatsAppReconCard = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="mt-2 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-2.5 border border-green-100"
  >
    <div className="flex items-center gap-1.5 mb-2">
      <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center">
        <MessageCircle className="w-3 h-3 text-white" />
      </div>
      <span className="text-[10px] md:text-xs font-semibold text-green-800">WhatsApp Recon</span>
    </div>
    <div className="h-1 bg-green-200 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-full bg-green-500 rounded-full"
      />
    </div>
    <p className="text-[10px] text-gray-600 mt-1.5">Verifying with vendor...</p>
  </motion.div>
);

// WhatsApp Sent Card
const WhatsAppCard = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="mt-2 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-2.5 border border-green-100"
  >
    <div className="flex items-center justify-between mb-1.5">
      <div className="flex items-center gap-1.5">
        <MessageCircle className="w-3.5 h-3.5 text-green-600" />
        <span className="text-[10px] md:text-xs font-medium text-green-800">WhatsApp Sent</span>
      </div>
      <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
    </div>
    <div className="bg-white rounded-md p-2 border border-green-100">
      <div className="flex items-center gap-1.5 mb-1">
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-[8px] font-bold text-white">
          RS
        </div>
        <span className="text-[10px] md:text-xs font-medium text-gray-900">Raj Suppliers</span>
      </div>
      <p className="text-[9px] md:text-[10px] text-gray-600 italic leading-relaxed">
        "Invoice INV-892 not in GST 2B. Please file GSTR-1."
      </p>
    </div>
  </motion.div>
);

// Bill Created Card
const BillCreatedCard = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="mt-2 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-2.5 border border-blue-100"
  >
    <div className="flex items-center gap-1.5 mb-1.5">
      <Building2 className="w-3.5 h-3.5 text-blue-600" />
      <span className="text-[10px] md:text-xs font-medium text-blue-800">Zoho Books</span>
    </div>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs md:text-sm font-semibold text-gray-900">Bill Created</p>
        <p className="text-[10px] text-gray-500">BILL-2024-0156</p>
      </div>
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
        className="w-7 h-7 rounded-full bg-green-100 flex items-center justify-center"
      >
        <Check className="w-4 h-4 text-green-600" />
      </motion.div>
    </div>
  </motion.div>
);

export const Hero = () => {
  const [chatStep, setChatStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [showScrollDown, setShowScrollDown] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [isAtBottom, setIsAtBottom] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const chatContainerRef = useRef(null);

  const notificationData = [
    { icon: Mail, iconBg: "bg-red-500", title: "New Invoice", message: "From Sharma Electronics - ₹45,200", time: "Just now", triggerStep: 0 },
    { icon: GitCompare, iconBg: "bg-orange-500", title: "GST 2B Synced", message: "152 records from GSTN", time: "2s ago", triggerStep: 2 },
    { icon: MessageCircle, iconBg: "bg-green-500", title: "WhatsApp Sent", message: "Raj Suppliers notified", time: "Just now", triggerStep: 6 },
    { icon: CheckCircle2, iconBg: "bg-blue-500", title: "Bill Created", message: "BILL-2024-0156 in Zoho", time: "Just now", triggerStep: 7 },
  ];

  const chatFlow = [
    { isBot: true, message: "Hi! Found 3 invoices in Gmail. Process them?" },
    { isBot: false, message: "Yes, match with PO & GST 2B" },
    { isBot: true, message: "Processing Raj Suppliers...", showMatch: true },
    { isBot: true, message: "Running WhatsApp recon...", showWhatsAppRecon: true },
    { isBot: true, message: "1 GST 2B mismatch found. Notify?" },
    { isBot: false, message: "Yes, send WhatsApp" },
    { isBot: true, message: "Vendor notified!", showWhatsApp: true },
    { isBot: true, message: "Done! Bill created in Zoho.", showBill: true },
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle page scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollDown(scrollY < 100);
      setShowScrollTop(scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Handle chat scroll
  const handleChatScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
      const isBottom = scrollHeight - scrollTop - clientHeight < 50;
      setIsAtBottom(isBottom);
      if (isBottom) setUnreadMessages(0);
    }
  };

  const scrollChatToBottom = () => {
    chatContainerRef.current?.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: 'smooth' });
    setUnreadMessages(0);
  };

  // Auto-scroll chat
  useEffect(() => {
    if (chatContainerRef.current) {
      if (isAtBottom) {
        chatContainerRef.current.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: 'smooth' });
      } else {
        setUnreadMessages(prev => prev + 1);
      }
    }
  }, [chatStep, isAtBottom]);

  // Handle notifications
  useEffect(() => {
    const matching = notificationData.filter(n => n.triggerStep === chatStep);
    matching.forEach((notif, idx) => {
      setTimeout(() => setNotifications(prev => [...prev, { ...notif, id: Date.now() + idx }]), idx * 300);
    });
  }, [chatStep]);

  // Auto-remove notifications
  useEffect(() => {
    if (notifications.length > 0) {
      const timer = setTimeout(() => setNotifications(prev => prev.slice(1)), 4000);
      return () => clearTimeout(timer);
    }
  }, [notifications]);

  // Chat flow
  useEffect(() => {
    if (chatStep < chatFlow.length - 1) {
      const delay = chatFlow[chatStep].isBot ? 2200 : 1500;
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
        setChatStep(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setChatStep(0);
        setNotifications([]);
        setUnreadMessages(0);
        if (chatContainerRef.current) chatContainerRef.current.scrollTop = 0;
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [chatStep]);

  const removeNotification = (id) => setNotifications(prev => prev.filter(n => n.id !== id));

  return (
    <section className="relative min-h-screen flex items-center pt-20 md:pt-24 pb-24 md:pb-16 px-4 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 md:left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-green-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 md:right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-orange-100/20 rounded-full blur-3xl" />
      </div>

      {/* Notifications */}
      <AnimatePresence>
        {(isMobile ? notifications.slice(0, 1) : notifications).map((notif, index) => (
          <FloatingNotification
            key={notif.id}
            {...notif}
            index={index}
            isMobile={isMobile}
            onClose={() => removeNotification(notif.id)}
          />
        ))}
      </AnimatePresence>

      {/* Scroll Indicators */}
      <ScrollDownIndicator show={showScrollDown} />
      <ScrollToTopButton show={showScrollTop} onClick={scrollToTop} />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-1.5 bg-green-50 text-green-700 px-2.5 py-1 md:px-3 md:py-1.5 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6 border border-green-100"
            >
              <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" />
              AP Copilot for India
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 leading-tight mb-4 md:mb-6"
            >
              Invoice to Bill,
              <br />
              <span className="bg-gradient-to-r from-[#138808] to-emerald-500 bg-clip-text text-transparent">
                Fully Automated
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-md mx-auto lg:mx-0 leading-relaxed"
            >
              AI Agent that captures invoices, matches with PO & GST 2B, 
              reconciles via WhatsApp, and syncs to Zoho Books.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 md:mb-10"
            >
              <Button className="bg-[#138808] hover:bg-[#0f6906] text-white px-5 py-4 md:px-6 md:py-5 text-sm md:text-base rounded-xl shadow-lg shadow-green-600/20">
                Start Free Pilot
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className="px-5 py-4 md:px-6 md:py-5 text-sm md:text-base rounded-xl border-2 border-gray-200">
                <Play className="mr-2 w-4 h-4" />
                Watch Demo
              </Button>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 gap-2 md:gap-3 max-w-md mx-auto lg:mx-0"
            >
              {['Gmail Capture', 'PO Matching', 'GST 2A/2B', 'WhatsApp Recon', 'Zoho Sync', '3-Way Match'].map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-1.5 text-xs md:text-sm text-gray-600"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#138808] flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right - Chat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative order-1 lg:order-2"
          >
            {/* Bell */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="absolute -top-2 -right-2 md:-top-3 md:-right-3 z-10"
            >
              <div className="relative">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center">
                  <Bell className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
                </div>
                <AnimatePresence>
                  {notifications.length > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-red-500 rounded-full text-white text-[9px] md:text-[10px] font-bold flex items-center justify-center"
                    >
                      {notifications.length}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-[#138808] to-emerald-600 px-4 py-2.5 md:px-5 md:py-3">
                <div className="flex items-center gap-2.5 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-xs md:text-sm">Bharat AI Agent</h3>
                    <span className="text-green-100 text-[10px] md:text-xs flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                      Processing...
                    </span>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div 
                ref={chatContainerRef}
                onScroll={handleChatScroll}
                className="relative p-3 md:p-4 space-y-2.5 md:space-y-3 bg-gray-50/50 h-[300px] md:h-[380px] overflow-y-auto scroll-smooth"
              >
                <AnimatePresence mode="popLayout">
                  {chatFlow.slice(0, chatStep + 1).map((msg, index) => (
                    <ChatMessage key={index} isBot={msg.isBot} message={msg.message}>
                      {msg.showMatch && <ThreeWayMatchCard />}
                      {msg.showWhatsAppRecon && <WhatsAppReconCard />}
                      {msg.showWhatsApp && <WhatsAppCard />}
                      {msg.showBill && <BillCreatedCard />}
                    </ChatMessage>
                  ))}
                </AnimatePresence>
                
                {isTyping && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                    <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-md shadow-sm">
                      <TypingDots />
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Unread indicator */}
              <AnimatePresence>
                {unreadMessages > 0 && !isAtBottom && (
                  <NewMessageIndicator count={unreadMessages} onClick={scrollChatToBottom} />
                )}
              </AnimatePresence>

              {/* Input */}
              <div className="p-2.5 md:p-3 border-t border-gray-100 bg-white">
                <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-2 md:px-4 md:py-2.5">
                  <input 
                    type="text" 
                    placeholder="Ask about invoices, GST..."
                    className="flex-1 bg-transparent text-xs md:text-sm outline-none text-gray-700 placeholder-gray-400"
                    disabled
                  />
                  <button className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-[#138808] flex items-center justify-center">
                    <Send className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;