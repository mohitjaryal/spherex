import React, { useEffect, useState } from "react";
import { Linkedin, Globe } from "lucide-react";
import founderImg from "../images/founder.jpeg"; 
import cofounderImg from "../images/cofounder.jpeg"; 

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    const section = document.getElementById("about");
    if (section) observer.observe(section);
    return () => section && observer.unobserve(section);
  }, []);

  return (
    <section
      id="about"
      className="px-6 md:px-16 py-20 bg-gray-950 text-center text-white"
    >
      {/* --- About Section --- */}
      <h3 className="text-4xl font-extrabold mb-6 text-indigo-400">
        About SphereX Community
      </h3>

      <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-lg md:text-xl mb-16">
        <span className="text-indigo-300 font-semibold">SphereX Community</span>{" "}
        is a tech-driven initiative connecting innovators, enthusiasts, and
        changemakers. Founded by two passionate co-founders, our mission is to
        foster collaboration, learning, and innovation across the tech
        ecosystem.
        <br />
        <br />
        Though currently an unregistered venture, we are driven by a shared
        vision to empower individuals, encourage knowledge sharing, and create
        opportunities for our members to grow and make an impact in the global
        tech community.
      </p>

      {/* --- Founders Section --- */}
      <div id="founders" className="mt-16">
        <h4 className="text-3xl font-bold mb-10 text-indigo-400">
          Meet the Founders
        </h4>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Founder */}
          <div
            className={`bg-gray-900 rounded-2xl shadow-xl p-6 w-72 transform transition-all duration-500 hover:scale-105 hover:shadow-indigo-600/50 ${
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
            <p className="text-indigo-300 text-sm mb-3">Founder & CEO (Community Initiative)</p>
            <p className="text-gray-400 text-sm mb-4">
              Visionary leader passionate about building communities and
              fostering innovation across the tech ecosystem.
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
            className={`bg-gray-900 rounded-2xl shadow-xl p-6 w-72 transform transition-all duration-500 hover:scale-105 hover:shadow-indigo-600/50 ${
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
            <p className="text-indigo-300 text-sm mb-3">Co-Founder & COO (Community Initiative)</p>
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
      </div>
    </section>
  );
}
