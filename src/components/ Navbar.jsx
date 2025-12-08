import React from "react";
import logo from "../images/sphereXcommunity.jpeg"; // 👈 import your logo image

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-md sticky top-0 z-50">
      {/* Left side - Logo + Name */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="SphereX Community Logo"
          className="w-10 h-10 object-cover rounded-full border-2 border-indigo-500 shadow-md"
        />
        <h1 className="text-2xl font-bold text-indigo-400">SphereX Community</h1>
      </div>

      {/* Right side - LinkedIn Button */}
      <a
        href="https://www.linkedin.com/company/spherexcommunity/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-xl transition-all duration-200"
      >
        Connect on LinkedIn
      </a>
    </nav>
  );
}
