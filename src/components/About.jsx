import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <div className="grid md:grid-cols-3 gap-6 items-start">
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-2xl font-semibold">About Me</h3>
          <p className="text-gray-600 leading-relaxed">
            Aspiring Software Developer with a passion for creating innovative solutions using Python, DOTNET, SQL, HTML, CSS, JavaScript, and React.js.
          </p>
          <p className="text-gray-600">
            Skilled in C#, Python, React, ASP.NET, SQL Server, Oracle SQL, and version control tools like Git.
          </p>
        </div>

        <aside className="p-4 border rounded-lg hover:shadow-md transition">
          <h4 className="font-medium">Contact</h4>
          <p className="text-sm mt-2">📍 Onnalvadi, Hosur, Tamil Nadu</p>
          <p className="text-sm mt-1">📞 9080445815</p>
          <p className="text-sm mt-1">
            ✉️{" "}
            <a
              href="mailto:harishmahadevan417@gmail.com"
              className="underline"
            >
              harishmahadevan417@gmail.com
            </a>
          </p>
        </aside>
      </div>
    </motion.section>
  );
}
