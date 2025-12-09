import React from "react";
import { Mail, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative px-6 md:px-16 py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden"
    >
      {/* Floating Background Circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-indigo-500/10 rounded-full animate-float-smooth"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-purple-500/10 rounded-full animate-float-smooth delay-2000"></div>
      </div>

      {/* Section Header */}
      <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-indigo-400">
        Get In Touch
      </h3>
      <p className="text-gray-300 text-center max-w-2xl mx-auto mb-14 leading-relaxed">
        Have questions, suggestions, or want to collaborate with us?  
        We’d love to hear from you. Connect through our community email or directly with our core team for partnerships. 🚀
      </p>

      {/* Contact Cards */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* General Contact */}
        <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-10 shadow-lg hover:shadow-indigo-500/10 transition-shadow duration-300 flex flex-col items-center text-center space-y-5 border border-gray-800">
          <h4 className="text-2xl font-semibold text-indigo-400">SphereX Community</h4>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
            For general inquiries, event details, or student collaborations,  
            feel free to reach out to our official email.
          </p>
          <a
            href="mailto:spherexcommunity@gmail.com"
            className="flex items-center gap-2 bg-indigo-500/10 px-5 py-2 rounded-full hover:bg-indigo-500/20 text-indigo-300 transition-colors duration-300"
          >
            <Mail size={22} />
            <span>spherexcommunity@gmail.com</span>

             {/* Social Links */}
                    <div className="flex items-center justify-center gap-8">
                      {/* LinkedIn */}
                      <a
                        href="https://www.linkedin.com/company/spherexcommunity/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-indigo-400 hover:text-indigo-500 transition-colors"
                      >
                        <Linkedin size={22} />
                        <span className="hidden sm:inline">LinkedIn</span>
                      </a>
            
                      {/* Instagram */}
                      <a
                        href="https://www.instagram.com/spherexcommunity"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 text-pink-400 hover:text-pink-500 transition-colors"
                      >
                        <Instagram size={22} />
                        <span className="hidden sm:inline">Instagram</span>
                      </a>
                    </div>
                    
          </a>
        </div>

        {/* Founder & Co-Founder */}
        <div className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-10 shadow-lg hover:shadow-indigo-500/10 transition-shadow duration-300 flex flex-col items-center text-center space-y-6 border border-gray-800">
          <h4 className="text-2xl font-semibold text-indigo-400">Partnerships & Collaborations</h4>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
            For brand partnerships, sponsorships, or major collaborations,  
            you can directly connect with our core team members below.
          </p>

          {/* Founder */}
          <div className="space-y-1">
            <p className="font-semibold text-gray-200">Mohit Jaryal</p>
            <p className="text-sm text-gray-400">Founder & CEO</p>
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

          {/* Divider */}
          <div className="h-[1px] w-20 bg-gray-700 mx-auto my-2"></div>

          {/* Co-Founder */}
          <div className="space-y-1">
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
