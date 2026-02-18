import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DualPath = () => {
  return (
    <section className="relative bg-white py-28 overflow-hidden">

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
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            Two Ways to Join the MCP Layer
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Either power your own platform with Bharat MCP or get discovered inside the MCP registry.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Integration Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="border border-gray-200 rounded-2xl p-10 bg-white"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Integrate MCP Into Your Platform
            </h3>

            <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <li>• Turn your APIs into callable actions</li>
              <li>• Allow users to update data via chat</li>
              <li>• Execute workflows without opening dashboards</li>
              <li>• Full chatbot integration for your website</li>
            </ul>

            <div className="mt-8">
              <Link
                to="/talk-with-us"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition"
              >
                Integrate Now
              </Link>
            </div>
          </motion.div>

          {/* Registry Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="border border-gray-200 rounded-2xl p-10 bg-gray-50"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Register Your Platform in MCP
            </h3>

            <ul className="space-y-4 text-gray-600 text-sm leading-relaxed">
              <li>• Get listed inside the MCP registry</li>
              <li>• Allow external users to discover your tools</li>
              <li>• Enable cross-platform AI action execution</li>
              <li>• Become searchable in agent ecosystems</li>
            </ul>

            <div className="mt-8">
              <Link
                to="/early-access"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-100 transition"
              >
                Register Platform
              </Link>
            </div>
          </motion.div>

        </div>

      </div>

      {/* Bottom Horizontal Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gray-200" />

    </section>
  );
};

export default DualPath;
