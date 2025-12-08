import React from "react";
import logo from "../images/sphereXcommunity.jpeg"; // ✅ correct relative path

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-gray-900/90 backdrop-blur-md sticky top-0 z-50 shadow-lg border-b border-gray-800">
      {/* Left - Full Logo */}
      <img
        src={logo}
        alt="SphereX Community Logo"
        className="w-36 h-auto object-contain hover:scale-105 transition-transform duration-300"
      />

      {/* Right - LinkedIn Button */}
      <a
        href="https://www.linkedin.com/company/spherexcommunity/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm md:text-base bg-indigo-500 hover:bg-indigo-600 hover:shadow-indigo-500/30 text-white px-5 py-2 rounded-xl font-medium transition-all duration-300"
      >
        Connect on LinkedIn
      </a>
    </nav>
  );
}
