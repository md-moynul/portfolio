"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";



/* ── Hero ── */
const Hero = () => {

  const socials = [
    { icon: <FaLinkedin className="text-lg" />, href: "https://www.linkedin.com/in/md-moynul-islam47/", hov: "hover:text-[#0A66C2]" },
    { icon: <FaEnvelope className="text-lg" />, href: "mailto:mdoynulislam.dev@gmail.com", hov: "hover:text-[#EA4335]" },
    { icon: <FaGithub className="text-lg" />, href: "https://github.com/md-moynul", hov: "hover:text-gray-900 dark:hover:text-white" },
    { icon: <FaFacebook className="text-lg" />, href: "https://www.facebook.com/mdmoynulislam8", hov: "hover:text-[#1877F2]" },
  ];

  return (
    // ✅ No min-h-screen — let content define the height naturally
    // ✅ pb-0 — no bottom padding pushing next section down
    <section
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center px-5 md:px-6 overflow-hidden bg-transparent pt-28 md:pt-24 pb-16"
      id="home"
    >

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-12 relative z-20">

        {/* ── LEFT ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center md:items-start gap-5 w-full md:w-1/2 text-center md:text-left"
        >
          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#2D8CFF]/30 bg-[#2D8CFF]/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">
              Available for Work
            </span>
          </motion.div>

          {/* Name */}
          <div className="w-full">
            <p className="text-gray-500 dark:text-zinc-400 text-sm font-semibold mb-2 uppercase tracking-[0.2em]">
              Welcome to my portfolio
            </p>
            <h1 className="text-5xl md:text-8xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1] md:leading-[0.9]">
              <span className="text-gradient">Md. Moynul</span>
              <span className="inline-block ml-3 animate-wave text-3xl md:text-5xl">👋</span>
            </h1>
          </div>

          {/* Typewriter */}
          <div className="text-xl md:text-2xl text-gray-700 dark:text-zinc-300 font-semibold flex items-center justify-center md:justify-start gap-2 flex-wrap w-full">
            <span>I&apos;m a</span>
            <span className="text-[#2D8CFF]">
                  <Typewriter
                    options={{
                      strings: [
                        "MERN Stack Developer",
                        "React.js Specialist",
                        "Full-Stack Architect",
                        "UI/UX Enthusiast",
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 30,
                      delay: 50,
                      pauseFor: 2000,
                    }}
                  />
            </span>
          </div>

          {/* Short one-liner */}
          <p className="text-gray-500 dark:text-zinc-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0 text-center md:text-justify hyphens-auto">
            A results-driven <span className="text-gray-900 dark:text-white font-semibold">MERN Stack Developer</span> from Rangpur, Bangladesh.
            I architect high-performance web applications with a focus on clean code and intuitive design. 🚀
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-1">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-[#2D8CFF] rounded-full text-white font-bold text-sm flex items-center gap-2 hover:bg-[#1a6fd8] transition-all shadow-[0_10px_20px_rgba(45,140,255,0.25)] hover:shadow-[0_15px_30px_rgba(45,140,255,0.35)]"
            >
              Explore My Work
              <span className="material-symbols-outlined text-sm">arrow_downward</span>
            </motion.a>

            <motion.a
              href="mailto:mdoynulislam.dev@gmail.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-3 rounded-full text-gray-900 dark:text-white font-bold text-sm flex items-center gap-2 border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Hire Me
              <span className="material-symbols-outlined text-sm">send</span>
            </motion.a>

            <div className="flex items-center gap-2">
              {socials.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full flex justify-center items-center border border-gray-200 dark:border-white/10 bg-white/60 dark:bg-white/5 text-gray-500 dark:text-zinc-500 transition-all duration-300 backdrop-blur-sm ${s.hov}`}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Scroll down */}
          <div className="mt-8 flex items-center justify-center md:justify-start gap-3 text-gray-400 dark:text-zinc-600 w-full">
            <div className="w-5 h-9 border-2 border-gray-300 dark:border-zinc-700 rounded-full flex justify-center pt-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-1 bg-[#2D8CFF] rounded-full"
              />
            </div>
            <span className="text-xs font-medium tracking-wide">Scroll to explore</span>
          </div>
        </motion.div>

        {/* ── RIGHT ── */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-60 h-60 md:w-[380px] md:h-[380px]"
          >
            {/* Spinning rings */}
            <div
              className="absolute inset-0 rounded-full border border-[#2D8CFF]/20 scale-110 animate-spin"
              style={{ animationDuration: "22s" }}
            />
            <div
              className="absolute inset-0 rounded-full border border-[#2D8CFF]/10 scale-[1.28] animate-spin"
              style={{ animationDuration: "38s", animationDirection: "reverse" }}
            />

            {/* Profile blob */}
            <div className="absolute inset-0 border border-[#2D8CFF]/30 rounded-[30%_70%_70%_30%/_30%_30%_70%_70%] overflow-hidden animate-blob shadow-[0_0_60px_rgba(45,140,255,0.18)]">
              <Image src="/moynul.png" alt="Moynul" fill sizes="(max-width: 768px) 240px, 380px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 dark:from-[#08080C]/40 to-transparent" />
            </div>

            {/* Floating — MERN Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-6 -right-6 md:-top-3 md:-right-3 bg-white/90 dark:bg-[#0d0d14]/90 backdrop-blur-md border border-[#2D8CFF]/25 px-3 py-2 md:px-4 md:py-3 rounded-2xl flex items-center gap-2 shadow-lg z-20 scale-100 md:scale-100"
            >
              <span className="material-symbols-outlined text-[#2D8CFF] text-lg">code</span>
              <div>
                <p className="font-bold text-sm text-gray-900 dark:text-white leading-none">MERN Stack</p>
                <p className="text-[10px] text-gray-400 dark:text-zinc-500 uppercase font-semibold mt-0.5">Developer</p>
              </div>
            </motion.div>

            {/* Floating — Diploma */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute top-[15%] -left-12 md:top-1/3 md:-left-14 bg-white/90 dark:bg-[#0d0d14]/90 backdrop-blur-md border border-[#2D8CFF]/25 px-3 py-2 md:px-4 md:py-3 rounded-2xl flex items-center gap-2 shadow-lg z-20 scale-100 md:scale-100"
            >
              <span className="material-symbols-outlined text-[#2D8CFF] text-lg">school</span>
              <div>
                <p className="font-bold text-sm text-gray-900 dark:text-white leading-none">Diploma CST</p>
                <p className="text-[10px] text-gray-400 dark:text-zinc-500 uppercase font-semibold mt-0.5">2nd Year · RPI</p>
              </div>
            </motion.div>

            {/* Floating — Open to Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute -bottom-6 -left-6 md:-bottom-2 md:-left-4 bg-white/90 dark:bg-[#0d0d14]/90 backdrop-blur-md border border-emerald-400/25 px-3 py-2 md:px-4 md:py-3 rounded-2xl flex items-center gap-2 shadow-lg z-20 scale-100 md:scale-100"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <p className="font-bold text-sm text-gray-900 dark:text-white leading-none">Open to Work</p>
                <p className="text-[10px] text-gray-400 dark:text-zinc-500 uppercase font-semibold mt-0.5">Entry-Level MERN Developer</p>
              </div>
            </motion.div>

            {/* Bg glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#2D8CFF]/6 blur-[80px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;