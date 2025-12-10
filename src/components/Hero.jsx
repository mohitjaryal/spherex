import React from "react";
import hiring1 from "../images/hiring1.jpeg"; // ✅ your local image

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

      {/* Hiring Section */}
      <div className="relative z-10 mt-16 lg:mt-0 lg:ml-12 flex-1 max-w-md bg-gray-900/40 backdrop-blur-xl border border-indigo-500/30 rounded-3xl overflow-hidden shadow-2xl hover:shadow-indigo-500/30 transition-all duration-500 transform hover:scale-[1.02]">
        {/* ✅ Full visible image (no cropping) */}
        <div className="w-full">
          <img
            src={hiring1}
            alt="We are Hiring"
            className="w-full h-auto rounded-t-3xl object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-3">
            🚀 We’re Hiring!
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            SphereX Community is looking for a{" "}
            <span className="text-indigo-400 font-semibold">
              Research & Content Head
            </span>{" "}
            to lead creative storytelling, manage research initiatives, and
            shape our tech narratives.
          </p>
          <a
            href="https://forms.gle/NRUriGnAvZK3eXVVA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-purple-500/40 transition-all duration-300"
          >
            Apply Now
          </a>
        </div>
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

        .animate-float-smooth {
          animation: float-smooth 20s ease-in-out infinite;
        }
        .animate-float-smooth-reverse {
          animation: float-smooth-reverse 25s ease-in-out infinite;
        }
        .delay-1000 { animation-delay: 1s; }
        .delay-1500 { animation-delay: 1.5s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
}
