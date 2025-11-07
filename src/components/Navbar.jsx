import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // for icons

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        dark
          ? "bg-gray-800 text-gray-100 shadow"
          : "bg-white text-gray-900 shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
            HM
          </div>
          <div>
            <h1 className="text-lg font-semibold">Harish M</h1>
            <p className="text-xs opacity-80">Aspiring Software Developer</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5">
          <a href="#home" className="text-sm hover:underline">
            Home
          </a>
          <a href="#about" className="text-sm hover:underline">
            About
          </a>
          <a href="#projects" className="text-sm hover:underline">
            Projects
          </a>
          <a href="#contact" className="text-sm hover:underline">
            Contact
          </a>
          <a
            href="/Harish_M_BE_CSE_2024.pdf"
            target="_blank"
            rel="noreferrer"
            className="text-sm px-3 py-2 border rounded"
          >
            Resume
          </a>
          <button
            onClick={() => setDark(!dark)}
            className="ml-2 px-3 py-2 border rounded text-sm"
          >
            {dark ? "Light" : "Dark"}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded border"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div
          className={`md:hidden flex flex-col items-center space-y-3 py-4 ${
            dark ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
          } border-t`}
        >
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
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
            className="text-sm px-3 py-2 border rounded"
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
