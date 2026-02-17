"use client";

import Particles from "react-tsparticles";

export default function ParticlesBackground() {
    return (
        <Particles
            options={{
                background: { color: "transparent" },
                fpsLimit: 60,
                particles: {
                    color: { value: ["#2563eb", "#7c3aed", "#0f172a"] },
                    number: { value: 80 },
                    size: { value: { min: 1, max: 3 } },
                    move: { enable: true, speed: 0.8 },
                    opacity: { value: 0.25 },
                    links: {
                        enable: true,
                        color: "#7c3aed",
                        distance: 140,
                        opacity: 0.16,
                    },
                },
                detectRetina: true,
            }}
            className="absolute inset-0 -z-10"
        />
    );
}
