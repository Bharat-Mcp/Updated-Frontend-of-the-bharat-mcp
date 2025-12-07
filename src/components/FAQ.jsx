import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

export const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "Is my screen data private and secure?",
      answer: "Absolutely! Bharat MCP processes everything locally on your device. Your screen data never leaves your computer unless you explicitly choose to sync something. We use end-to-end encryption for any data you choose to backup. Your privacy is our top priority — that's why we're local-first.",
    },
    {
      question: "Does it work offline?",
      answer: "Yes! Core features like screen reading, code detection, and local search work completely offline. Only AI-powered features like natural language queries and smart suggestions need an internet connection. You can work on flights, in remote areas, or anywhere without connectivity.",
    },
    {
      question: "Which programming languages are supported?",
      answer: "Bharat MCP supports all major programming languages including JavaScript, TypeScript, Python, Java, C++, C#, Go, Rust, PHP, Ruby, Swift, Kotlin, and many more. It also understands frameworks like React, Vue, Angular, Django, Flask, Spring Boot, and .NET.",
    },
    {
      question: "How does the Tally/Zoho integration work?",
      answer: "When MCP detects an invoice or financial document on your screen, it automatically extracts key data (vendor, amount, GST, date). You can then push this data to Tally or Zoho Books with one click. It maps to the correct ledgers and handles GST calculations automatically.",
    },
    {
      question: "Is there a free plan?",
      answer: "Yes! Bharat MCP is completely free during the beta period. Once we launch officially, we'll have a generous free tier for individual users, students, and small teams. We believe everyone in India should have access to AI productivity tools.",
    },
    {
      question: "Will it slow down my computer?",
      answer: "No. MCP is highly optimized and uses minimal resources. It captures and processes screen data efficiently without impacting your system performance. It works great even on laptops with 8GB RAM. We've tested it extensively on various hardware configurations.",
    },
    {
      question: "Can I use it in Hindi and other Indian languages?",
      answer: "Yes! Bharat MCP supports Hindi, Tamil, Telugu, Kannada, Malayalam, Bengali, Marathi, Gujarati, and more Indian languages. It can read documents in these languages and you can interact with the AI in your preferred language.",
    },
    {
      question: "How is this different from GitHub Copilot or ChatGPT?",
      answer: "Unlike Copilot (code-only) or ChatGPT (chat-only), Bharat MCP sees your entire screen context. It understands what you're working on — whether it's code, a document, an invoice, or an email — and provides relevant help automatically. It's an always-on assistant, not just a chat interface.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-to-r from-orange-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
            <span className="text-amber-400 text-sm font-medium">❓ FAQ</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Frequently asked
            <br />
            <span className="text-gradient">questions</span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl bg-white/[0.02] border border-white/[0.05] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-lg font-medium text-white pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="p-8 rounded-2xl bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20">
            <h3 className="text-xl font-semibold text-white mb-2">Still have questions?</h3>
            <p className="text-gray-400 mb-6">Our team is here to help you get started.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl font-medium text-white hover:shadow-lg hover:shadow-orange-500/25 transition-shadow">
                Chat with Us
              </button>
              <button className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-medium text-white hover:bg-white/10 transition-all">
                Join Discord Community
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};