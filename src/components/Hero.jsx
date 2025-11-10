import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-[80vh] sm:min-h-[90vh] px-6 text-center overflow-hidden"
    >
      {/* ✅ SAME BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-10 blur-3xl"></div>

      <motion.div
        className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ x: [0, -50, 50, 0], y: [0, 40, -40, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 
          dark:text-white tracking-tight leading-tight transition-colors duration-300"
        >
          Hi, I’m{" "}
          <span
            className="text-indigo-600 dark:text-indigo-400 
            drop-shadow-[0_0_10px_rgba(99,102,241,0.5)] 
            dark:drop-shadow-[0_0_12px_rgba(129,140,248,0.8)] 
            transition-all duration-300"
          >
            Harish
          </span>
        </h1>

        {/* ✅ FIXED PARAGRAPH COLOR */}
        <p
          className="text-base sm:text-lg md:text-xl 
          text-gray-900 dark:text-white
          leading-relaxed mb-8 font-medium transition-colors duration-300"
        >
          A passionate{" "}
          <strong className="text-indigo-600 dark:text-indigo-400">
            Software Developer
          </strong>{" "}
          crafting responsive and modern web applications using{" "}
          <span className="font-semibold">React</span>,{" "}
          <span className="font-semibold">.NET</span>, and{" "}
          <span className="font-semibold">Python</span>.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <a
            href="#projects"
            className="px-6 py-3 w-full sm:w-auto text-center rounded-lg 
            bg-indigo-600 text-white font-semibold shadow-md 
            hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-600/30
            active:scale-95 transition-all duration-200"
          >
            View My Work
          </a>

          <a
            href="/Harish_M_BE_CSE_2024.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 w-full sm:w-auto text-center rounded-lg 
            border border-gray-400 dark:border-gray-600 
            text-gray-800 dark:text-gray-200 font-semibold
            hover:bg-gray-100 dark:hover:bg-gray-800
            active:scale-95 transition-all duration-200"
          >
            Download Resume
          </a>
        </div>

        {/* Icons */}
        <div className="flex justify-center gap-6 mt-2">
          <a
            href="https://github.com/Harishhari417"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 dark:text-gray-300 
            hover:text-indigo-500 dark:hover:text-indigo-400 
            transition-transform transform hover:scale-110"
          >
            <Github size={26} />
          </a>

          <a
            href="https://www.linkedin.com/in/harish-m-783628259/"
            target="_blank"
            rel="noreferrer"
            className="text-gray-700 dark:text-gray-300 
            hover:text-indigo-500 dark:hover:text-indigo-400 
            transition-transform transform hover:scale-110"
          >
            <Linkedin size={26} />
          </a>

          <a
            href="mailto:harishmahadevan417@gmail.com"
            className="text-gray-700 dark:text-gray-300 
            hover:text-indigo-500 dark:hover:text-indigo-400 
            transition-transform transform hover:scale-110"
          >
            <Mail size={26} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
