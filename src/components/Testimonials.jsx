import React, { useRef } from "react";

export const Testimonials = () => {
  const testimonials = [
    {
      content: "Setting up WhatsApp Business API was such a pain. Bharat MCP guided me through the whole thing step-by-step. Super smooth experience.",
      author: "Ankit Singh",
      role: "Developer",
      avatar: "AS",
    },
    {
      content: "No more switching between 10 browser tabs. MCP sees what I'm working on and helps right there. Game changer for my workflow.",
      author: "Dipam Chandra Jha",
      role: "Full-Stack Developer",
      avatar: "DC",
    },
    {
      content: "The n8n integration is exactly what I needed. Finally automating stuff without watching endless tutorials.",
      author: "Priyash Gupta",
      role: "Tech Enthusiast",
      avatar: "PG",
    },
    {
      content: "As someone who's not super technical, this made AWS setup actually doable. Really impressed with how simple it is.",
      author: "Rahul Verma",
      role: "Founder",
      avatar: "RV",
    },
  ];

  return (
    <section id="testimonials" className="relative py-16 md:py-24 overflow-hidden">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 mb-4 text-sm text-orange-400 bg-orange-500/10 rounded-full border border-orange-500/20">
            Early Feedback
          </span>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            What our early users say
          </h2>
          
          <p className="text-sm sm:text-base text-gray-400 max-w-md mx-auto">
            We're just getting started, but the feedback has been amazing.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] transition-all"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-semibold text-xs">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="text-white font-medium text-sm">{testimonial.author}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Stats */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">12+</div>
            <div className="text-xs text-gray-500">Beta Users</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">4.8</div>
            <div className="text-xs text-gray-500">Avg Rating</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">5hrs</div>
            <div className="text-xs text-gray-500">Saved/Week</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 mb-3 text-sm">Be one of our early adopters</p>
          <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl font-semibold text-white text-sm shadow-lg shadow-orange-500/20 hover:scale-105 transition-transform">
            Join the Beta
          </button>
        </div>
      </div>
    </section>
  );
};