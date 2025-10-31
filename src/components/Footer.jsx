import React from "react";

export default function Footer() {
  return (
    <footer className="border-t mt-12 py-6">
      <div className="max-w-6xl mx-auto px-6 text-center text-sm opacity-80">
        © {new Date().getFullYear()} Harish M — Built with React + Vite + Tailwind
      </div>
    </footer>
  );
}
