import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Background() {
  const initParticles = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="absolute inset-0 -z-10">
      {/* 🔹 Animated gradient layer */}
      <div className="animated-bg absolute inset-0 opacity-80"></div>

      {/* 🔹 Particles overlay */}
      <Particles
        id="tsparticles"
        init={initParticles}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { quantity: 3 },
            },
          },
          particles: {
            color: { value: "#38bdf8" },
            links: {
              color: "#38bdf8",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1.5,
              straight: false,
            },
            number: { value: 60, density: { enable: true, area: 800 } },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />
    </div>
  );
}
