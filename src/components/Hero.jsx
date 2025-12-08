import React from "react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] px-6 py-20 bg-gradient-to-b from-black via-gray-900 to-indigo-950 overflow-hidden">
      {/* Subtle Animated Background Circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-60 h-60 bg-indigo-600/10 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 bg-purple-500/10 rounded-full animate-float-slow delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-pink-500/20 rounded-full animate-float-slow-reverse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-indigo-400/10 rounded-full animate-float-slow delay-1500"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-3xl">
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
          href="https://www.linkedin.com/company/spherexcommunity/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-indigo-500/40 transition-all duration-300"
        >
          Join the Community
        </a>
      </div>

      {/* Tailwind Custom Animations */}
      <style>
        {`
          @keyframes float-slow {
            0%, 100% { transform: translateY(0px); opacity: 0.4; }
            50% { transform: translateY(-20px); opacity: 0.6; }
          }
          @keyframes float-slow-reverse {
            0%, 100% { transform: translateY(0px); opacity: 0.4; }
            50% { transform: translateY(20px); opacity: 0.6; }
          }
          .animate-float-slow {
            animation: float-slow 12s ease-in-out infinite;
          }
          .animate-float-slow-reverse {
            animation: float-slow-reverse 14s ease-in-out infinite;
          }
          .delay-1000 { animation-delay: 1s; }
          .delay-1500 { animation-delay: 1.5s; }
          .delay-2000 { animation-delay: 2s; }
        `}
      </style>
    </section>
  );
}
