import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mt-24 relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-100 via-transparent to-transparent dark:from-indigo-950/30 blur-3xl opacity-70" />

      {/* Title Section */}
      <div className="text-center mb-10">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold mb-4 
                     bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 
                     dark:from-indigo-400 dark:via-purple-400 dark:to-pink-300 
                     bg-clip-text text-transparent animate-gradient"
        >
          Get in Touch
        </motion.h3>

        <p className="text-gray-600 dark:text-gray-400 mt-3 max-w-xl mx-auto leading-relaxed">
          Have a question, a project, or just want to say hello?  
          I’d love to hear from you — let’s build something amazing together.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="mt-12 flex flex-col md:flex-row justify-center items-center gap-6">
        {/* Email */}
        <motion.a
          href="mailto:harishmahadevan417@gmail.com"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4, scale: 1.03 }}
          className="group w-full md:w-60 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 
                     bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl 
                     shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center"
        >
          <Mail
            className="text-indigo-600 dark:text-indigo-400 mb-3 group-hover:scale-110 transition-transform"
            size={28}
          />
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Email
          </h4>
          <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
            harishmahadevan417@gmail.com
          </p>
        </motion.a>

        {/* GitHub */}
        <motion.a
          href="https://github.com/Harishhari417"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4, scale: 1.03 }}
          className="group w-full md:w-60 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 
                     bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl 
                     shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center"
        >
          <Github
            className="text-indigo-600 dark:text-indigo-400 mb-3 group-hover:scale-110 transition-transform"
            size={28}
          />
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            GitHub
          </h4>
          <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
            github.com/harishmahadevan417
          </p>
        </motion.a>

        {/* LinkedIn */}
        <motion.a
          href="https://www.linkedin.com/in/harish-m-783628259/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BU%2BKhVwnDQiWJItqSxI2usQ%3D%3D"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -4, scale: 1.03 }}
          className="group w-full md:w-60 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 
                     bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl 
                     shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center"
        >
          <Linkedin
            className="text-indigo-600 dark:text-indigo-400 mb-3 group-hover:scale-110 transition-transform"
            size={28}
          />
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            LinkedIn
          </h4>
          <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">
            linkedin.com/in/harishmahadevan417
          </p>
        </motion.a>
      </div>

      {/* Footer */}
     {/* <div className="text-center mt-16">
        <p className="text-gray-500 dark:text-gray-500 text-sm">
          Designed & Built by{" "}
          <span className="text-indigo-600 dark:text-indigo-400 font-medium">
            Harish Mahadevan
          </span>{" "}
          © {new Date().getFullYear()}
        </p>
      </div> */}
    </motion.section>
  );
}
