import React from "react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-[90vh] px-6 py-20 bg-gradient-to-b from-black via-gray-900 to-indigo-950 overflow-hidden">
      {/* Background Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-1/4 w-72 h-72 bg-indigo-600/20 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/20 blur-3xl rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
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
    </section>
  );
}
