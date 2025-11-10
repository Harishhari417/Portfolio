import React, { useState, useEffect } from "react";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
    setMounted(true);
  }, [dark]);

  if (!mounted) {
    // 🔹 Prevent blue background flash by showing blank screen until theme is ready
    return <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors"></div>;
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        dark
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100"
          : "bg-gradient-to-b from-white via-gray-50 to-white text-gray-900"
      }`}
    >
      <Background />
      <Navbar dark={dark} setDark={setDark} />
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        <section id="home" className="scroll-mt-24">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-24">
          <About dark={dark} />
        </section>
        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
