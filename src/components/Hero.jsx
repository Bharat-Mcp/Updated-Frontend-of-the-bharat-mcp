import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-20 text-center">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-5xl md:text-6xl font-semibold text-gray-900 leading-tight"
        >
          Make Your Website
          <br className="hidden sm:block" />
          Work Through Chat.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Bharat MCP lets you integrate a powerful action-based chatbot —
          or register your platform in our MCP registry so anyone can
          discover and interact with it.
        </motion.p>

        {/* Two Paths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-12 grid gap-6 sm:grid-cols-2"
        >
          {/* Option 1 */}
          <div className="border border-gray-200 rounded-xl p-6 text-left hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900">
              Integrate Our Chatbot
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Add Bharat MCP to your website. Let users update data,
              trigger workflows, and perform real actions using prompts.
            </p>

            <Link
              to="/talk-with-us"
              className="inline-block mt-5 text-sm font-medium text-black underline"
            >
              Integrate Now →
            </Link>
          </div>

          {/* Option 2 */}
          <div className="border border-gray-200 rounded-xl p-6 text-left hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-gray-900">
              Register Your Website
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Join the Bharat MCP registry. Make your platform discoverable
              so users can search, access, and use your tools directly
              through our AI system.
            </p>

            <Link
              to="/talk-with-us"
              className="inline-block mt-5 text-sm font-medium text-black underline"
            >
              Register in Registry →
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
