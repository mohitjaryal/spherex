import React, { useEffect, useState } from "react";
import { Linkedin, Globe } from "lucide-react";
import founderImg from "../images/founder.jpeg"; 
import cofounderImg from "../images/cofounder.jpeg"; 

export default function Founders() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const section = document.getElementById("founders");
    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  return (
    <section
      id="founders"
      className="px-6 md:px-16 py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-center text-white relative overflow-hidden"
    >
      {/* Floating Background Circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-indigo-500/10 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-purple-500/10 rounded-full animate-float-slow delay-2000"></div>
      </div>

      <h3 className="text-4xl font-extrabold mb-10 text-indigo-400">
        Meet the Founders
      </h3>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        {/* Founder */}
        <div
          className={`bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl p-6 w-72 transform transition-all duration-500 hover:scale-105 hover:shadow-indigo-600/50 border border-gray-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src={founderImg}
            alt="Founder & CEO - Mohit Jaryal"
            className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-indigo-500 shadow-lg"
          />
          <h5 className="text-xl font-semibold">
            Mohit Jaryal <span className="text-gray-400 text-sm">(18 yrs)</span>
          </h5>
          <p className="text-indigo-300 text-sm mb-3">Founder & CEO</p>
          <p className="text-gray-400 text-sm mb-4">
            Innovating and inspiring through technology to empower the next generation of changemakers.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="https://www.linkedin.com/in/mohitjaryal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://mohitjaryal.online"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
            >
              <Globe size={24} />
            </a>
          </div>
        </div>

        {/* Co-Founder */}
        <div
          className={`bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl p-6 w-72 transform transition-all duration-500 hover:scale-105 hover:shadow-indigo-600/50 border border-gray-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <img
            src={cofounderImg}
            alt="Co-Founder - Shivam Yadav"
            className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-indigo-500 shadow-lg"
          />
          <h5 className="text-xl font-semibold">
            Shivam Yadav <span className="text-gray-400 text-sm">(20 yrs)</span>
          </h5>
          <p className="text-indigo-300 text-sm mb-3">Co-Founder & COO</p>
          <p className="text-gray-400 text-sm mb-4">
            Dedicated to empowering youth through technology and building a
            global network of changemakers.
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="https://www.linkedin.com/in/shivam-yadav2005/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Smooth Floating Animations */}
      <style>
        {`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px); opacity: 0.4; }
            50% { transform: translateY(-15px); opacity: 0.7; }
          }
          .animate-float-slow {
            animation: float-slow 20s ease-in-out infinite;
          }
          .delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </section>
  );
}
