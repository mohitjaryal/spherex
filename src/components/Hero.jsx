import React from "react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-b from-indigo-700 to-gray-900">
      <h2 className="text-5xl font-extrabold mb-6">
        Empowering <span className="text-indigo-300">Tech Innovators</span>
      </h2>
      <p className="max-w-2xl text-gray-300 text-lg mb-8">
        SphereX Community connects innovators, enthusiasts, and changemakers
        through collaboration, learning, and growth. Join us in shaping the
        future of technology.
      </p>
      <a
        href="https://www.linkedin.com/company/spherexcommunity/"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-2xl text-lg font-semibold transition-all"
      >
        Join the Community
      </a>
    </section>
  );
}
