import React from "react";
import Navbar from "./components/ Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/ Footer";
import Contact from "./components/Contact";
import Founders from "./components/Founders";

export default function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Founders />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}
