import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-semibold">Contact</h3>
      <p className="mt-3 text-gray-600">
        Interested in hiring or collaboration? Reach out via email or phone.
      </p>

      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg hover:shadow-md transition">
          <h4 className="font-medium">Details</h4>
          <p className="text-sm mt-2">📞 9080445815</p>
          <p className="text-sm mt-1">
            ✉️{" "}
            <a
              href="mailto:harishmahadevan417@gmail.com"
              className="underline"
            >
              harishmahadevan417@gmail.com
            </a>
          </p>
        </div>

        <form
          className="p-4 border rounded-lg hover:shadow-md transition"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = "mailto:harishmahadevan417@gmail.com";
          }}
        >
          <input className="w-full p-3 border rounded" placeholder="Your name" required />
          <input className="w-full p-3 border rounded mt-3" placeholder="Your email" type="email" required />
          <textarea className="w-full p-3 border rounded mt-3" placeholder="Message" rows="4" required />
          <button className="mt-3 px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition">
            Send Email
          </button>
        </form>
      </div>
    </motion.section>
  );
}
