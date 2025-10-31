import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background from './components/Background'

export default function App() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark"
  })

  useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light")
  }, [dark])

  return (
    <div
      className={`min-h-screen transition ${
        dark
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100"
          : "bg-gradient-to-b from-white via-gray-50 to-white text-gray-900"
      }`}
    >
      <Background />
      <Navbar dark={dark} setDark={setDark} />
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-20">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
