import React from "react";
import founderImg from "../images/founder.jpeg";
import cofounderImg from "../images/cofounder.jpeg";
import { motion } from "framer-motion";

export default function About() {
  const founders = [
    {
      img: founderImg,
      name: "Mohit Jaryal",
      role: "Founder & CEO",
      age: 18,
      desc: "Visionary leader passionate about building communities and fostering innovation across the tech ecosystem.",
      linkedin: "https://www.linkedin.com/in/mohitjaryal",
    },
    {
      img: cofounderImg,
      name: "Shivam Yadav",
      role: "Co-Founder & COO",
      age: 20,
      desc: "Dedicated to empowering youth through technology and building a global network of changemakers.",
      linkedin: "https://www.linkedin.com/in/shivam-yadav2005/",
    },
  ];

  return (
    <section id="about" className="px-6 md:px-16 py-20 bg-gray-950 text-center text-white relative overflow-hidden">
      {/* Floating background circles for founders */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/5 w-40 h-40 bg-indigo-500/10 rounded-full animate-float-smooth"></div>
        <div className="absolute bottom-1/3 right-1/4 w-52 h-52 bg-purple-500/10 rounded-full animate-float-smooth delay-2000"></div>
      </div>

      {/* About Section */}
      <h3 className="text-4xl font-extrabold mb-6 text-indigo-400">About SphereX Community</h3>
      <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-lg mb-16">
        <span className="text-indigo-300 font-semibold">SphereX Community</span> is a tech-driven initiative connecting innovators, enthusiasts, and changemakers. Founded by two passionate co-founders, our mission is to foster collaboration, learning, and innovation across the tech ecosystem.
        <br />
        <br />
        Though currently an unregistered venture, we are driven by a shared vision to empower individuals, encourage knowledge sharing, and create opportunities for our members to grow and make an impact in the global tech community.
      </p>

      {/* Founders Section */}
      <div id="founders" className="mt-16">
        <h4 className="text-3xl font-bold mb-10 text-indigo-400">Meet the Founders</h4>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {founders.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-900 rounded-2xl shadow-xl p-6 w-72 transform transition-all duration-500 hover:scale-105 hover:shadow-indigo-600/50 relative overflow-hidden"
            >
              {/* Floating circle behind founder image */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-indigo-400/20 rounded-full animate-float-smooth delay-1500 -z-10"></div>

              <img
                src={f.img}
                alt={f.name}
                className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-indigo-500 shadow-lg"
              />
              <h5 className="text-xl font-semibold">
                {f.name} <span className="text-gray-400 text-sm">({f.age} yrs)</span>
              </h5>
              <p className="text-indigo-300 text-sm mb-3">{f.role}</p>
              <p className="text-gray-400 text-sm">{f.desc}</p>
              <a
                href={f.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-indigo-400 hover:text-indigo-300 text-sm font-medium"
              >
                View LinkedIn →
              </a>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tailwind Custom Animations */}
      <style>
        {`
          @keyframes float-smooth {
            0% { transform: translate(0,0) rotate(0deg) scale(1); opacity: 0.4; }
            25% { transform: translate(10px,-15px) rotate(15deg) scale(1.05); opacity: 0.6; }
            50% { transform: translate(0,-20px) rotate(0deg) scale(1); opacity: 0.5; }
            75% { transform: translate(-10px,-15px) rotate(-15deg) scale(0.95); opacity: 0.6; }
            100% { transform: translate(0,0) rotate(0deg) scale(1); opacity: 0.4; }
          }
          .animate-float-smooth {
            animation: float-smooth 20s ease-in-out infinite;
          }
          .delay-1000 { animation-delay: 1s; }
          .delay-1500 { animation-delay: 1.5s; }
          .delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </section>
  );
}
