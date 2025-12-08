import React from "react";
import Navbar from "./components/ Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/ Footer";

export default function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Footer />
    </div>
  );
}
