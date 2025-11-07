import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Bus Automated Ticketing and Monitoring System",
    desc: "Major project implementing automatic bus ticketing using RFID and Controller Area Network (CAN) Bus Technology. Designed to automate fare collection and monitor vehicle data for efficient fleet management.",
    tech: ["RFID", "CAN Bus", "Embedded"],
  },
  {
    title: "PG Listing",
    desc: "A responsive PG listing application built with React, featuring property cards, search, and filtering (prototype level).",
    tech: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "CareerPrep Platform",
    desc: "An interactive coding and interview preparation platform inspired by HackerRank, built with React, Node.js, and MongoDB.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/harishmahadevan417/careerprep",
  },
  {
    title: "Chemical Today — B2B Chemical Industry Platform",
    desc: "A full-featured website developed for the chemical industry, providing company profiles, market insights, and chemical product listings. Built to help manufacturers and suppliers showcase their products and connect with clients.",
    tech: ["React", "TailwindCSS", "Node.js", "MongoDB", "REST API"],
    live: "https://chemicaltoday.in",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built using React, TailwindCSS, and Framer Motion for smooth animations and responsive UI.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mt-24 relative overflow-hidden px-4 sm:px-6 md:px-10"
    >
      {/* Soft gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50 via-transparent to-transparent dark:from-indigo-950/30 blur-3xl opacity-70" />

      {/* Title */}
      <h3
        className="text-3xl sm:text-4xl font-extrabold mb-12 text-center 
                   bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 
                   dark:from-indigo-400 dark:via-purple-400 dark:to-pink-300 
                   bg-clip-text text-transparent animate-gradient"
      >
        Projects
      </h3>

      {/* Project Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.article
            key={i}
            className="p-6 rounded-2xl border border-gray-200 dark:border-gray-700 
                       bg-white/70 dark:bg-gray-900/70 backdrop-blur-md 
                       shadow-md hover:shadow-2xl hover:-translate-y-2 
                       transition-all duration-300 hover:border-indigo-500/60
                       flex flex-col justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Project Image (optional) */}
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
            )}

            {/* Title + Description */}
            <div>
              <h4 className="font-semibold text-lg sm:text-xl text-gray-900 dark:text-gray-100">
                {p.title}
              </h4>

              <p className="text-sm sm:text-base mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                {p.desc}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 text-xs sm:text-sm font-medium rounded-full
                               bg-indigo-100 text-indigo-700 
                               dark:bg-indigo-800/50 dark:text-indigo-200
                               border border-indigo-200 dark:border-indigo-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mt-5">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm sm:text-base font-medium text-indigo-600 dark:text-indigo-400 hover:underline hover:text-indigo-700 dark:hover:text-indigo-300"
                >
                  🔗 Live Demo
                </a>
              )}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm sm:text-base font-medium text-gray-800 dark:text-gray-300 hover:underline hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  💻 GitHub
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
