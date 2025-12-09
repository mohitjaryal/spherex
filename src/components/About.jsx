import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-16 py-20 bg-gray-950 text-center text-white"
    >
      <h3 className="text-4xl font-extrabold mb-6 text-indigo-400">
        About SphereX Community
      </h3>

      <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-lg md:text-xl">
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
    </section>
  );
}
