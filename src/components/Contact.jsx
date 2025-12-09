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
        Have questions, suggestions, or want to collaborate?  
        We’d love to connect with you! Reach out to us or our team members below. 🚀
      </p>

      {/* Contact Cards */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* General Contact */}
        <div className="bg-gray-900 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center space-y-4">
          <h4 className="text-xl font-semibold text-indigo-400">SphereX Community</h4>
          <p className="text-gray-400 text-sm">
            For general inquiries, collaborations, or partnership opportunities — feel free to reach out via email.
          </p>
          <div className="flex items-center justify-center mt-2 gap-2">
            <Mail size={26} className="text-indigo-400" />
            <a
              href="mailto:spherexcommunity@gmail.com"
              className="text-gray-300 hover:text-indigo-400 transition-colors duration-300"
            >
              spherexcommunity@gmail.com
            </a>
          </div>
        </div>

        {/* Founder Details */}
        <div className="bg-gray-900 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center space-y-4">
          <h4 className="text-xl font-semibold text-indigo-400">Our Core Team</h4>
          <div className="space-y-3">
            {/* Founder */}
            <div>
              <p className="font-semibold text-gray-200">Mohit Jaryal</p>
              <p className="text-sm text-gray-400">Founder & CEO (Community Initiative)</p>
              <div className="flex items-center justify-center gap-4 mt-1">
                <a
                  href="mailto:reach.mohitjaryal@gmail.com"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <Mail size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohitjaryal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>

            {/* Co-Founder */}
            <div>
              <p className="font-semibold text-gray-200">Shivam Yadav</p>
              <p className="text-sm text-gray-400">Co-Founder & COO</p>
              <div className="flex items-center justify-center gap-4 mt-1">
                <a
                  href="mailto:connect.to.shivamyadav@gmail.com"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <Mail size={22} />
                </a>
                <a
                  href="https://www.linkedin.com/in/shivam-yadav2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <Linkedin size={22} />
                </a>
              </div>
            </div>
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
