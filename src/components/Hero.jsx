import React from "react";
import hiring1 from "../images/hiring1.jpeg"; 
import SphereXcommunity from "../images/SphereXcommunity.jpeg"; // ✅ Correct logo import

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col lg:flex-row items-center justify-between text-center lg:text-left min-h-[90vh] px-6 py-20 bg-gradient-to-b from-black via-gray-900 to-indigo-950 overflow-hidden"
    >
      {/* Smooth Animated Background Circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-60 h-60 bg-indigo-600/10 rounded-full animate-float-smooth"></div>
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-purple-500/10 rounded-full animate-float-smooth delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-pink-500/20 rounded-full animate-float-smooth-reverse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-indigo-400/10 rounded-full animate-float-smooth delay-1500"></div>
      </div>

      {/* 🔹 Big Background Logo */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 scale-125">
        <img
          src={SphereXcommunity}
          alt="Spherex Logo Background"
          className="w-[500px] md:w-[650px] lg:w-[800px] object-contain animate-pulse-slow"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl flex-1">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
          Empowering{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            Tech Innovators
          </span>
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
          SphereX Community connects innovators, enthusiasts, and changemakers
          through collaboration, learning, and growth.
          <br className="hidden md:block" />
          Join us in shaping the future of technology.
        </p>
        <a
          href="https://forms.gle/CLuAFwMQ56pZwaGJ6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-indigo-500/40 transition-all duration-300"
        >
          Join the Community
        </a>
      </div>

      {/* Logo Card (small right side) */}
   <div className="relative z-10 mt-16 lg:mt-0 lg:ml-12 flex items-center justify-center flex-1 max-w-md h-64 bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-indigo-950/30 backdrop-blur-xl border border-indigo-500/40 rounded-3xl shadow-2xl hover:shadow-indigo-500/40 transition-all duration-700 transform hover:scale-[1.05] hover:rotate-1">
  <img
    src={SphereXcommunity}
    alt="Spherex Logo"
    className="w-32 h-32 object-contain rounded-2xl transition-transform duration-700 hover:scale-110 drop-shadow-[0_0_15px_rgba(99,102,241,0.6)]"
  />

  {/* Glow aura behind logo */}
  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-transparent blur-3xl opacity-70"></div>
</div>


      {/* Tailwind Custom Animations */}
      <style>{`
        @keyframes float-smooth {
          0% { transform: translate(0,0) rotate(0deg) scale(1); opacity: 0.4; }
          25% { transform: translate(10px,-15px) rotate(15deg) scale(1.05); opacity: 0.6; }
          50% { transform: translate(0,-20px) rotate(0deg) scale(1); opacity: 0.5; }
          75% { transform: translate(-10px,-15px) rotate(-15deg) scale(0.95); opacity: 0.6; }
          100% { transform: translate(0,0) rotate(0deg) scale(1); opacity: 0.4; }
        }

        @keyframes float-smooth-reverse {
          0% { transform: translate(0,0) rotate(0deg) scale(1); opacity: 0.4; }
          25% { transform: translate(-10px,15px) rotate(-15deg) scale(1.05); opacity: 0.6; }
          50% { transform: translate(0,20px) rotate(0deg) scale(1); opacity: 0.5; }
          75% { transform: translate(10px,15px) rotate(15deg) scale(0.95); opacity: 0.6; }
          100% { transform: translate(0,0) rotate(0deg) scale(1); opacity: 0.4; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.03); }
        }

        .animate-float-smooth { animation: float-smooth 20s ease-in-out infinite; }
        .animate-float-smooth-reverse { animation: float-smooth-reverse 25s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 10s ease-in-out infinite; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1500 { animation-delay: 1.5s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
}
