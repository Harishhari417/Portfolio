import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[70vh] overflow-hidden rounded-2xl">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-10 blur-3xl"></div>

      {/* Animated floating blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, -50, 50, 0], y: [0, 40, -40, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Hero content */}
      <motion.div
        className="relative z-10 text-center max-w-2xl mx-auto px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-indigo-600">Harish</span>
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          A passionate <strong>Software Developer</strong> crafting responsive
          and modern web applications using React, .NET, and Python.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
          >
            View My Work
          </a>
          <a
            href="/Harish_M_BE_CSE_2024.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-lg border font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons (Tailwind only) */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/Harishhari417"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition transform hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/harish-m-783628259/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BU%2BKhVwnDQiWJItqSxI2usQ%3D%3D"
            target="_blank"
            rel="noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition transform hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="harishmahadevan417@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition transform hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
