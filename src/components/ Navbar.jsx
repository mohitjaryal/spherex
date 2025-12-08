import React from "react";
import logo from "../images/sphereXcommunity.jpeg";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-black sticky top-0 z-50 shadow-lg border-b border-gray-800">
      {/* Left - Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="SphereX Community Logo"
          className="w-36 h-auto object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Right - Navigation Links */}
      <div className="hidden md:flex items-center space-x-8 text-white font-medium">
        <a href="#hero" className="hover:text-indigo-400 transition-colors duration-300">
          About
        </a>
        <a href="#founders" className="hover:text-indigo-400 transition-colors duration-300">
          Founders
        </a>
        <a href="#features" className="hover:text-indigo-400 transition-colors duration-300">
          Features
        </a>
      </div>
    </nav>
  );
}
