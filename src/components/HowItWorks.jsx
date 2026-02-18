import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "1. Connect",
    description:
      "Integrate Bharat MCP SDK into your platform. One integration layer connects your APIs to the action engine.",
  },
  {
    title: "2. Define Actions",
    description:
      "Expose your backend APIs as callable tools. Define what users can modify, trigger, or update.",
  },
  {
    title: "3. Execute via Chat",
    description:
      "Users interact through chat. MCP translates natural language into structured API calls instantly.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative bg-white py-24 overflow-hidden">

      {/* Top Horizontal Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-200" />

      {/* Vertical Lines */}
      <div className="absolute left-[280px] top-0 bottom-0 w-px bg-gray-200 hidden lg:block" />
      <div className="absolute right-[280px] top-0 bottom-0 w-px bg-gray-200 hidden lg:block" />

      {/* White Covers Outside Lines */}
      <div className="absolute left-0 top-0 bottom-0 w-[280px] bg-white hidden lg:block z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-[280px] bg-white hidden lg:block z-10" />

      <div className="relative z-20 lg:mx-[280px] px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            How Bharat MCP Works
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Turn your platform into a programmable action layer in three simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-xl p-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Bottom Horizontal Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />

    </section>
  );
};

export default HowItWorks;
