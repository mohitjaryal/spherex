import React from "react";
import { Lightbulb, Users, Rocket, Code } from "lucide-react";

const features = [
  {
    icon: <Users size={36} className="text-indigo-400" />,
    title: "Collaborative Community",
    desc: "A vibrant network of tech enthusiasts, developers, and innovators.",
  },
  {
    icon: <Lightbulb size={36} className="text-indigo-400" />,
    title: "Learning & Growth",
    desc: "Workshops, hackathons, and mentorship for continuous skill development.",
  },
  {
    icon: <Code size={36} className="text-indigo-400" />,
    title: "Innovation",
    desc: "Encouraging creativity and real-world project collaboration.",
  },
  {
    icon: <Rocket size={36} className="text-indigo-400" />,
    title: "Future-Ready",
    desc: "Building the foundation for emerging tech ecosystems.",
  },
];

export default function Features() {
  return (
    <section className="px-8 py-20 bg-gray-900">
      <h3 className="text-3xl font-bold text-center mb-12 text-indigo-400">
        What We Do
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-xl transition-all"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="text-gray-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
