import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 text-center py-6">
      <p>
        © {new Date().getFullYear()} SphereX Community — All rights reserved.
      </p>
      <a
        href="https://www.linkedin.com/company/spherexcommunity/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-400 hover:text-indigo-500 mt-2 inline-block"
      >
        Visit our LinkedIn
      </a>
    </footer>
  );
}
