import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, CheckCircle, MapPin } from 'lucide-react';

const KeyCapabilities = () => {
  const badges = [
    { icon: Shield, label: 'SOC 2 Compliant' },
    { icon: Lock, label: 'Enterprise Ready' },
    { icon: CheckCircle, label: 'ISO 27001' },
  ];

  const servers = [
    { type: 'PAYMENT', name: 'Razorpay MCP', status: 'Active', time: '2:34 PM' },
    { type: 'DATABASE', name: 'PostgreSQL MCP', status: 'Active', time: '2:21 PM' },
    { type: 'STORAGE', name: 'S3 Compatible', status: 'Active', time: '1:45 PM' },
    { type: 'AUTH', name: 'OAuth2 Server', status: 'Active', time: '1:30 PM' },
    { type: 'MESSAGING', name: 'WhatsApp MCP', status: 'Active', time: '12:15 PM' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {badges.map((badge, index) => (
            <div
              key={index}
              className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm"
            >
              <badge.icon className="w-4 h-4 mr-2 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">{badge.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Connect your AI agents instantly{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              with India's best tools.
            </span>
          </h2>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Map Visual */}
            <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 min-h-[400px]">
              {/* India Map Outline (simplified) */}
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <svg viewBox="0 0 100 100" className="w-full h-full max-w-xs">
                  <path
                    d="M50 10 L70 25 L75 45 L70 60 L60 75 L50 85 L40 75 L30 60 L25 45 L30 25 Z"
                    fill="currentColor"
                    className="text-orange-400"
                  />
                </svg>
              </div>
              
              {/* Server Pins */}
              {[
                { top: '20%', left: '30%', label: 'Mumbai' },
                { top: '25%', left: '60%', label: 'Delhi' },
                { top: '50%', left: '75%', label: 'Kolkata' },
                { top: '60%', left: '40%', label: 'Bangalore' },
                { top: '45%', left: '25%', label: 'Hyderabad' },
              ].map((pin, i) => (
                <motion.div
                  key={i}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="absolute"
                  style={{ top: pin.top, left: pin.left }}
                >
                  <div className="relative">
                    <MapPin className="w-6 h-6 text-orange-500 fill-orange-500" />
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs font-medium whitespace-nowrap">
                      {pin.label}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Center Logo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                  <span className="text-2xl font-bold text-orange-500">B</span>
                </div>
              </div>
            </div>

            {/* Server List */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="font-medium text-gray-900">Active MCP Servers</h3>
              </div>
              <div className="divide-y divide-gray-100">
                {servers.map((server, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                        <span className="text-xs font-bold text-orange-600">{server.type.slice(0, 2)}</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{server.name}</div>
                        <div className="text-sm text-gray-500">{server.type}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-green-600 font-medium">{server.status}</div>
                      <div className="text-xs text-gray-400">{server.time}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyCapabilities;