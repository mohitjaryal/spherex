import React from "react";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 text-center py-6">
      <p className="mb-2">
        © {new Date().getFullYear()} SphereX Community — All rights reserved.
      </p>
      <a
        href="https://www.linkedin.com/company/spherexcommunity/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-indigo-400 hover:text-indigo-500 inline-flex items-center justify-center gap-2"
      >
        <Linkedin size={20} />
      </a>
    </footer>
  );
}
