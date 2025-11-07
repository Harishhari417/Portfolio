import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Bus Automated Ticketing and Monitoring System",
    desc: "Major project implementing automatic bus ticketing using RFID and Controller Area Network (CAN) Bus Technology. Designed to automate fare collection and monitor vehicle data for efficient fleet management.",
    tech: "RFID, CAN Bus, Embedded",
  },
  {
    title: "PG Listing",
    desc: "A responsive PG listing application built with React, featuring property cards, search, and filtering (prototype level).",
    tech: "React, HTML, CSS, JavaScript",
  },
  {
    title: "CareerPrep Platform",
    desc: "An interactive coding and interview preparation platform inspired by HackerRank, built with React, Node.js, and MongoDB.",
    tech: "React, Node.js, Express, MongoDB",
    github: "https://github.com/harishmahadevan417/careerprep",
  },
  {
    title: "Chemical Today — B2B Chemical Industry Platform",
    desc: "A full-featured website developed for the chemical industry, providing company profiles, market insights, and chemical product listings. Built to help manufacturers and suppliers showcase their products and connect with clients.",
    tech: "React, TailwindCSS, Node.js, MongoDB, REST API",
    live: "https://chemicaltoday.in",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built using React, TailwindCSS, and Framer Motion for smooth animations and responsive UI.",
    tech: "React, TailwindCSS, Framer Motion",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-16">
      <h3 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-8 text-center">
        Projects
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={i}
            className="p-5 border border-gray-200 dark:border-gray-700 rounded-2xl
                       bg-white/60 dark:bg-gray-900/70
                       hover:shadow-xl hover:-translate-y-1 transition-all
                       backdrop-blur-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
            )}

            <h4 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
              {p.title}
            </h4>

            <p className="text-sm mt-2 text-gray-700 dark:text-gray-300 leading-relaxed">
              {p.desc}
            </p>

            <div className="mt-3 text-xs text-gray-600 dark:text-gray-400">
              <span className="font-medium">Tech:</span> {p.tech}
            </div>

            <div className="flex flex-wrap gap-4 mt-5">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  🔗 Live Demo
                </a>
              )}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-gray-800 dark:text-gray-300 hover:underline"
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
