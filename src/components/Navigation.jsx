import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="bharatmcp" className="h-7 w-auto" />
            <span className="font-semibold text-lg text-gray-900">
              Bharat MCP
            </span>
          </Link>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link
              to="/talk-with-us"
              className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-black/90 transition"
            >
              Early Access
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4">
            <Link
              to="/talk-with-us"
              onClick={() => setOpen(false)}
              className="block w-full rounded-lg bg-black px-4 py-3 text-center text-sm font-medium text-white"
            >
              Early Access
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
