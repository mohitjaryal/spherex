import React from "react";
import { Lightbulb, Users, Rocket, Code, BookOpen, MessageCircle, Speaker, Calendar } from "lucide-react";

const features = [
  {
    icon: <Lightbulb size={36} className="text-indigo-400" />,
    title: "Workshops",
    desc: "Hands-on sessions to learn new technologies and frameworks.",
  },
  {
    icon: <Speaker size={36} className="text-indigo-400" />,
    title: "Webinars & Seminars",
    desc: "Expert talks and sessions on trending topics in tech.",
  },
  {
    icon: <MessageCircle size={36} className="text-indigo-400" />,
    title: "Doubt Sessions",
    desc: "Q&A sessions to solve member queries and challenges.",
  },
  {
    icon: <Users size={36} className="text-indigo-400" />,
    title: "Mentorship",
    desc: "Guidance from experienced developers and industry experts.",
  },
  {
    icon: <Rocket size={36} className="text-indigo-400" />,
    title: "Innovation Projects",
    desc: "Collaborate on real-world projects and build your portfolio.",
  },
  {
    icon: <Code size={36} className="text-indigo-400" />,
    title: "Hackathons",
    desc: "Participate in competitions to test and improve your skills.",
  },
  {
    icon: <BookOpen size={36} className="text-indigo-400" />,
    title: "Learning Resources",
    desc: "Access curated tutorials, guides, and articles for growth.",
  },
  {
    icon: <Calendar size={36} className="text-indigo-400" />,
    title: "Community Events",
    desc: "Networking meetups, tech challenges, and collaborative events.",
  },
];

export default function Features() {
  return (
    <section className="px-8 py-20 bg-gray-900">
      <h3 className="text-3xl font-bold text-center mb-12 text-indigo-400">
        What We Offer
      </h3>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-2xl p-6 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
