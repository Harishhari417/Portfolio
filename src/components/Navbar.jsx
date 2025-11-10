import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger icons

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        dark
          ? "bg-gray-900 text-white shadow-lg"
          : "bg-white text-gray-900 shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500 shadow-md hover:scale-105 transition-transform duration-300">
            <img
              src="/profile.jpg"
              alt="Harish Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold">Harish M</h1>
            <p className="text-xs opacity-80">Aspiring Software Developer</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-5">
          <a href="#about" className="text-sm hover:text-indigo-500 transition">
            About
          </a>
          <a href="#projects" className="text-sm hover:text-indigo-500 transition">
            Projects
          </a>
          <a href="#contact" className="text-sm hover:text-indigo-500 transition">
            Contact
          </a>
          <a
            href="/Harish_M_BE_CSE_2024.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-sm px-3 py-2 border rounded hover:bg-indigo-500 hover:text-white transition"
          >
            Resume
          </a>
          <button
            onClick={() => setDark(!dark)}
            className="px-3 py-2 border rounded text-sm hover:bg-indigo-500 hover:text-white transition"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className={`md:hidden flex flex-col items-center gap-3 py-4 transition-all duration-300 ${
            dark ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
          }`}
        >
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a
            href="/Harish_M_BE_CSE_2024.pdf"
            target="_blank"
            rel="noreferrer"
            onClick={() => setMenuOpen(false)}
            className="px-3 py-2 border rounded"
          >
            Resume
          </a>
          <button
            onClick={() => {
              setDark(!dark);
              setMenuOpen(false);
            }}
            className="px-3 py-2 border rounded text-sm"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>
      )}
    </header>
  );
}
