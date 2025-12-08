import React from "react";
import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-16 py-20 bg-gray-950 text-white overflow-hidden"
    >
      {/* Floating Background Circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-indigo-500/10 rounded-full animate-float-smooth"></div>
        <div className="absolute bottom-1/4 right-1/4 w-52 h-52 bg-purple-500/10 rounded-full animate-float-smooth delay-2000"></div>
      </div>

      {/* Section Header */}
      <h3 className="text-4xl font-extrabold text-center mb-4 text-indigo-400">
        Get In Touch
      </h3>
      <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
        Have questions, suggestions, or want to collaborate? Connect with our team:
      </p>

      {/* Contact Cards */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Founder */}
        <div className="bg-gray-900 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center space-y-4">
          <h4 className="text-xl font-semibold">Mohit Jaryal</h4>
          <p className="text-gray-400 text-sm">Founder & CEO, SphereX Community</p>
          <div className="flex space-x-6 mt-2">
            <a
              href="mailto:reach.mohitjaryal@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
            >
              <Mail size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/mohitjaryal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>

        {/* Co-Founder */}
        <div className="bg-gray-900 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center space-y-4">
          <h4 className="text-xl font-semibold">Shivam Yadav</h4>
          <p className="text-gray-400 text-sm">Co-Founder & COO , SphereX Community</p>
          <div className="flex space-x-6 mt-2">
            <a
              href="mailto:connect.to.shivamyadav@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
            >
              <Mail size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/shivam-yadav2005"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Smooth Floating Animations */}
      <style>
        {`
          @keyframes float-smooth {
            0%, 100% { transform: translateY(0px); opacity: 0.5; }
            50% { transform: translateY(-15px); opacity: 0.7; }
          }
          .animate-float-smooth {
            animation: float-smooth 18s ease-in-out infinite;
          }
          .delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </section>
  );
}
