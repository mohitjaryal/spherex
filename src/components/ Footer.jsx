import React from "react";
import { Linkedin, Mail, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center space-y-5">
        {/* Community Email */}
        <div className="flex items-center justify-center gap-3 bg-gray-800 rounded-full w-fit mx-auto px-4 py-2 shadow-md hover:shadow-lg transition-all">
          <Mail size={18} className="text-indigo-400" />
          <a
            href="mailto:spherexcommunity@gmail.com"
            className="hover:text-indigo-400 transition-colors text-sm"
          >
            spherexcommunity@gmail.com
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} SphereX Community — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
