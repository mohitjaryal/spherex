import React from "react";
import founderImg from "../images/founder.jpeg"; 
// import cofounderImg from "../images/cofounder.jpeg"; // 👈 (optional) if co-founder image also in src/images

export default function About() {
  return (
    <section className="px-6 md:px-16 py-20 bg-gray-950 text-center text-white">
      {/* --- About Section --- */}
      <h3 className="text-4xl font-extrabold mb-6 text-indigo-400">
        About SphereX Community
      </h3>

      <p className="max-w-3xl mx-auto text-gray-300 leading-relaxed text-lg">
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
      <div className="mt-16">
        <h4 className="text-3xl font-bold mb-10 text-indigo-400">
          Meet the Founders
        </h4>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Founder 1 */}
          <div className="bg-gray-900 rounded-2xl shadow-xl hover:shadow-indigo-600/30 transition-all duration-300 p-6 w-72">
            <img
              src={founderImg} // 👈 imported local image
              alt="Founder - Mohit Jaryal"
              className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-indigo-500 shadow-lg"
            />
            <h5 className="text-xl font-semibold">Mohit Jaryal</h5>
            <p className="text-indigo-300 text-sm mb-3">Founder</p>
            <p className="text-gray-400 text-sm">
              Visionary leader passionate about building communities and
              fostering innovation across the tech ecosystem.
            </p>
            <a
              href="https://www.linkedin.com/in/mohitjaryal"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-indigo-400 hover:text-indigo-300 text-sm font-medium"
            >
              View LinkedIn →
            </a>
          </div>

          {/* Co-Founder */}
          <div className="bg-gray-900 rounded-2xl shadow-xl hover:shadow-indigo-600/30 transition-all duration-300 p-6 w-72">
            {/* <img
              src={cofounderImg}
              alt="Co-Founder - Shivam Yadav"
              className="w-28 h-28 object-cover rounded-full mx-auto mb-4 border-4 border-indigo-500 shadow-lg"
            /> */}
            <h5 className="text-xl font-semibold">Shivam Yadav</h5>
            <p className="text-indigo-300 text-sm mb-3">Co-Founder</p>
            <p className="text-gray-400 text-sm">
              Dedicated to empowering youth through technology and building a
              global network of changemakers.
            </p>
            <a
              href="https://www.linkedin.com/in/COFOUNDER_LINK/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-indigo-400 hover:text-indigo-300 text-sm font-medium"
            >
              View LinkedIn →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
