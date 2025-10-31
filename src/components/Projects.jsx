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
   // live: "https://careerprep-demo.netlify.app", // change if you host it
    github: "https://github.com/harishmahadevan417/careerprep",
  },
  {
    title: "Chemical Today — B2B Chemical Industry Platform",
    desc: "A full-featured website developed for the chemical industry, providing company profiles, market insights, and chemical product listings. Built to help manufacturers and suppliers showcase their products and connect with clients.",
    tech: "React, TailwindCSS, Node.js, MongoDB, REST API",
    live: "https://chemicaltoday.in",
    //github: "https://github.com/harishmahadevan417/chemicaltoday", // change to your repo
    //image: "logo4.2dfecae919ca1ba0214c92c032106f60.svg", // optional image stored in public/
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built using React, TailwindCSS, and Framer Motion for smooth animations and responsive UI.",
    tech: "React, TailwindCSS, Framer Motion",
    //github: "https://github.com/harishmahadevan417/portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-16">
      <h3 className="text-2xl font-semibold">Projects</h3>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={i}
            className="p-4 border rounded-lg hover:shadow-lg transition bg-white/50 dark:bg-gray-800/50 backdrop-blur"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                className="rounded-lg mb-3 w-full h-40 object-cover"
              />
            )}
            <h4 className="font-medium text-lg">{p.title}</h4>
            <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
              {p.desc}
            </p>
            <div className="mt-3 text-xs opacity-80">Tech: {p.tech}</div>

            <div className="flex flex-wrap gap-3 mt-4">
              {p.live && (
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-indigo-600 hover:underline"
                >
                  🔗 Live Demo
                </a>
              )}
              {p.github && (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-700 dark:text-gray-300 hover:underline"
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
