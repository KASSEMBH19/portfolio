/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import ParticlesBackground from "./ParticlesBg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="relative bg-transparent text-slate-900 scroll-smooth overflow-hidden">
      <ParticlesBackground />

      {/* floating gradient shapes */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none fixed inset-0 -z-10"
      >
        <motion.div
          className="absolute -top-40 -left-20 h-80 w-80 rounded-full bg-purple-600/30 blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-10 h-96 w-96 rounded-full bg-blue-500/25 blur-3xl"
          animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full backdrop-blur-md bg-white/70 border-b border-slate-200 z-50"
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#about" className="flex items-center gap-3 group">
            <div className="relative h-9 w-9 rounded-full border border-slate-200 overflow-hidden bg-white shadow-sm">
              {/* replace /me-logo.png with your own logo or avatar */}
              <Image
                src="/me-logo.png"
                alt="Kassem Ben Henda logo"
                fill
                sizes="36px"
                className="object-cover"
              />
            </div>
            <span className="font-semibold text-sm tracking-wide group-hover:text-purple-600 transition text-slate-800">
              Kassem Ben Henda
            </span>
          </a>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#projects" className="hover:text-slate-900 transition">
              Projects
            </a>
            <a href="#skills" className="hover:text-slate-900 transition">
              Skills
            </a>
            <a href="#contact" className="hover:text-slate-900 transition">
              Contact
            </a>
          </div>
        </div>
      </motion.nav>

      {/* ABOUT / HERO */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 relative"
      >
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center"
        >
          <div className="flex flex-col items-center gap-6 mb-6">
            <motion.div
              className="relative h-28 w-28 rounded-full border border-slate-200 overflow-hidden bg-white shadow-lg shadow-purple-300/40"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/me-logo.png"
                alt="Portrait of Kassem Ben Henda"
                fill
                sizes="112px"
                className="object-cover"
              />
            </motion.div>
            <motion.div
              className="inline-flex items-center gap-2 rounded-full border border-purple-100 bg-purple-50/80 px-4 py-1 text-xs text-slate-700"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full Stack Developer · Open to opportunities</span>
            </motion.div>
          </div>

          {/* NAME */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
            Hi, I'm Kassem Ben Henda
          </h1>

          {/* TYPE ANIMATION */}
          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "AI Enthusiast",
              2000,
              "Cloud & DevOps Explorer",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-slate-500 text-2xl"
          />

          {/* DESCRIPTION */}
          <p className="mt-10 text-slate-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Passionate developer specialized in building scalable web applications
            using Angular, Spring Boot and AI-driven architectures. I focus on
            cloud solutions, DevOps pipelines and intelligent systems integration.
          </p>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-wrap justify-center gap-4 md:gap-6">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/30"
            >
              View Projects
            </a>

            <a
              href="/kassemcv.pdf"
              download
              className="px-8 py-3 rounded-full border border-purple-300 bg-white hover:bg-purple-50 hover:border-purple-400 transition flex items-center gap-2 text-slate-700"
            >
              <span>Download CV</span>
            </a>

            <a
              href="https://github.com/KASSEMBH19"
              target="_blank"
              className="px-8 py-3 rounded-full border border-slate-200 hover:border-purple-400 transition text-slate-700"
            >
              GitHub
            </a>
          </div>

          {/* scroll indicator */}
          <motion.div
            aria-hidden
            className="mt-16 flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="flex flex-col items-center text-xs text-slate-500 hover:text-slate-900 transition"
            >
              <span>Scroll to explore</span>
              <motion.span
                className="mt-2 h-8 w-px bg-gradient-to-b from-transparent via-purple-400/70 to-transparent"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-32 px-6 max-w-6xl mx-auto">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-20 text-center"
        >
          Selected Projects
        </motion.h2>

        <div className="space-y-24">
          <Project
            title="SmartFit Platform"
            description="Full stack fitness application with Angular frontend, Spring Boot backend and AI integration."
            role={`1️⃣ Overview
Analytics module that turns tracking data (progress, attendance, goals, age, etc.) into aggregated statistics and automatically written insights using Azure OpenAI (billed via Azure credits).
It delivers: key KPIs (mean/variance, top and bottom performers), anomaly detection, trends, and actionable recommendations (engagement, health, profitability) that are directly surfaced back into the UI.`}
            links={[
              {
                name: "Frontend",
                url: "https://github.com/Maherselmi/SmartFit_Front.git",
              },
              {
                name: "Backend",
                url: "https://github.com/Maherselmi/SmartFit_Back.git",
              },
              { name: "AI Module", url: "https://github.com/Maherselmi/SmartFItIA.git" },
            ]}
          />

          <Project
            title="DevMobile"
            description="Academic mobile application using MVC architecture and structured data management."
            role={`The Equipment Management feature allows the administrator to track and manage all devices available in the organization.
It includes creating, updating, deleting and viewing equipment, as well as monitoring its status (operational, out of order, under maintenance).
This module aims to provide full traceability and better planning of maintenance operations.`}
            links={[
              {
                name: "GitHub",
                url: "https://github.com/mariemachouri2022/DevMobile.git",
              },
            ]}
          />

          <Project
            title="Cucina Web App"
            description="Restaurant management web application with ordering system and user management."
            links={[
              {
                name: "Web Version",
                url: "https://github.com/Mohamed-Zaiter/Cucina_PidevWeb.git",
              },
              {
                name: "Project Version",
                url: "https://github.com/Mohamed-Zaiter/La_Cucina_Projet_Pidev.git",
              },
            ]}
          />
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-32 bg-slate-50/80 px-6">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-4 text-center"
        >
          Skills
        </motion.h2>
        <p className="text-center text-sm text-slate-500 mb-14">
          A selection of technologies I work with across frontend, backend, DevOps and cloud.
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {["Angular", "Spring Boot", "React", "Next.js", "MySQL", "Docker", "Azure", "Git"].map(
            (skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="p-6 border border-slate-200 rounded-xl hover:border-purple-300 bg-white backdrop-blur-md transition relative overflow-hidden shadow-sm"
              >
                <span className="relative z-10">{skill}</span>
                <motion.div
                  className="absolute inset-x-6 bottom-3 h-px bg-gradient-to-r from-transparent via-purple-400/70 to-transparent"
                  initial={{ opacity: 0, scaleX: 0.4 }}
                  whileHover={{ opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 px-6 text-center">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-semibold mb-6">Let's Work Together</h2>
          <p className="text-slate-500 mb-8">
            Feel free to reach out for collaboration, freelance work or full-time opportunities.
          </p>
          <a
            href="mailto:ton@mail.com"
            className="px-8 py-3 border border-slate-200 rounded-full hover:border-purple-400 hover:text-purple-700 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-slate-500 border-t border-slate-200 text-xs bg-white/80 backdrop-blur">
        © {new Date().getFullYear()} Kassem Ben Henda · Built with Next.js & Framer Motion
      </footer>
    </main>
  );
}

type ProjectLink = {
  name: string;
  url: string;
};

type ProjectProps = {
  title: string;
  description: string;
  role?: string;
  links: ProjectLink[];
};

function Project({ title, description, role, links }: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03, translateY: -6 }}
      className="p-8 rounded-2xl bg-white backdrop-blur-xl border border-slate-200 hover:border-purple-500 transition duration-300 hover:shadow-xl hover:shadow-purple-500/20 relative overflow-hidden"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-10 right-0 h-28 w-28 rounded-full bg-purple-400/15 blur-2xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      />
      <h3 className="text-2xl font-semibold mb-3 relative z-10 text-slate-900">{title}</h3>
      <p className="text-slate-600 max-w-2xl mb-4 relative z-10">{description}</p>
      {role && (
        <div className="mb-6 relative z-10 text-sm text-slate-600">
          <p className="font-medium text-slate-800 mb-1">My role</p>
          <p className="whitespace-pre-line">{role}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-4 text-sm text-blue-400 relative z-10">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            className="hover:text-purple-400 transition underline underline-offset-4 decoration-purple-500/40"
          >
            {link.name}
          </a>
        ))}
      </div>
    </motion.div>
  );
}

