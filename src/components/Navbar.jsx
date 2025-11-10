import React from "react";

export default function Navbar({ dark, setDark }) {
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 ${
        dark ? "bg-gray-800 text-gray-100 shadow" : "bg-white text-gray-900 shadow-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-indigo-500 shadow-md">
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

        <nav className="flex items-center gap-4">
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
            className="hidden sm:inline-block text-sm px-3 py-2 border rounded"
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
      </div>
    </header>
  );
}
