import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-gray-900 shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-indigo-400">SphereX Community</h1>
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
