import React from "react";
import { motion } from "framer-motion";

const MCPVisual = () => {
  return (
    <section className="relative bg-white py-24 overflow-hidden">

      {/* Vertical Lines */}
      <div className="absolute left-[280px] top-0 bottom-0 w-px bg-gray-200 hidden lg:block" />
      <div className="absolute right-[280px] top-0 bottom-0 w-px bg-gray-200 hidden lg:block" />

      {/* White Covers Outside */}
      <div className="absolute left-0 top-0 bottom-0 w-[280px] bg-white hidden lg:block z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-[280px] bg-white hidden lg:block z-10" />

      <div className="relative z-20">

        {/* Heading */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-900">
            Turn Your Platform Into an Action Layer
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Integrate once. Let users control your system through chat.
          </p>
        </div>

        {/* Centered Between Lines */}
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="relative flex justify-center px-6"
>
  <div className="w-full max-w-5xl">
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
      <img
        src="/chatbotchat.png"
        alt="Bharat MCP Architecture"
        className="w-full h-auto object-contain mx-auto"
      />
    </div>
  </div>
</motion.div>


      </div>

      {/* Bottom Divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />
    </section>
  );
};

export default MCPVisual;
