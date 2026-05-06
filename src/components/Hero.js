"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

const Hero = () => (
  <section className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden bg-[#0A0A0B]" id="about">
    <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-20 py-20">

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-start gap-6 z-10 w-full md:w-1/2"
      >
        <span className="text-zinc-400 text-lg font-medium">Hey, I&apos;m</span>
        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
          Md. Moynul <span className="inline-block animate-wave text-4xl md:text-5xl">👋</span>
        </h1>
        <div className="text-2xl md:text-3xl text-zinc-300 font-semibold flex items-center gap-3">
          <span>I am a</span>
          <span className="text-[#2D8CFF]">
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'MERN Specialist', 'Software Engineer'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 75,
              }}
            />
          </span>
        </div>
        <p className="text-zinc-500 max-w-lg text-lg leading-relaxed">
          🚀 Turning ideas into Stunning Websites 💻 <br />
          | Available for projects and collaborations 🌟
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-10 py-5 bg-[#161618] border border-[#262626] rounded-full text-white font-bold flex items-center gap-3 hover:bg-[#262626] transition-all shadow-xl"
        >
          Say Hello <span className="material-symbols-outlined text-sm">send</span>
        </motion.button>

        {/* Scroll Down Indicator */}
        <div className="mt-20 flex items-center gap-3 text-zinc-500">
          <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1.5 h-1.5 bg-zinc-500 rounded-full"
            />
          </div>
          <span className="text-sm font-medium">Scroll Down ↓</span>
        </div>
      </motion.div>

      {/* Right Content - Blob Image and Floating Cards */}
      <div className="relative w-full md:w-1/2 flex justify-center items-center">
        {/* Blob Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-72 h-72 md:w-[450px] md:h-[450px]"
        >
          {/* Main Blob Shape */}
          <div className="absolute inset-0 bg-[#161618] border border-[#262626] rounded-[30%_70%_70%_30%/_30%_30%_70%_70%] overflow-hidden animate-blob">
            <Image
              src="/moynul.png"
              alt="Moynul Profile"
              fill
              className="object-cover  transition-all duration-700"
            />
          </div>

          {/* Floating Cards */}
          {/* 120 Problem Solving */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -top-4 -right-4 bg-[#161618]/80 backdrop-blur-md border border-[#262626] p-4 rounded-2xl flex items-center gap-3 shadow-2xl z-20"
          >
            <div className="text-[#2D8CFF]">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl">120+</span>
              <span className="text-zinc-500 text-[10px] uppercase font-bold leading-none">Problem Solving</span>
            </div>
          </motion.div>

          {/* 3 Year Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute top-1/3 -left-12 bg-[#161618]/80 backdrop-blur-md border border-[#262626] p-4 rounded-2xl flex items-center gap-3 shadow-2xl z-20"
          >
            <div className="text-[#2D8CFF]">
              <span className="material-symbols-outlined">work_history</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl">3+</span>
              <span className="text-zinc-500 text-[10px] uppercase font-bold leading-none">Year of Exp</span>
            </div>
          </motion.div>

          {/* 150 Finished Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="absolute bottom-4 -left-4 bg-[#161618]/80 backdrop-blur-md border border-[#262626] p-4 rounded-2xl flex items-center gap-3 shadow-2xl z-20"
          >
            <div className="text-[#2D8CFF]">
              <span className="material-symbols-outlined">rocket_launch</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl">150+</span>
              <span className="text-zinc-500 text-[10px] uppercase font-bold leading-none">Finished Projects</span>
            </div>
          </motion.div>

          {/* Background Glow */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#2D8CFF]/5 blur-[100px] rounded-full"></div>
        </motion.div>
      </div>
    </div>

    {/* Section Decoration */}
    <div className="absolute top-1/4 left-10 w-2 h-2 bg-[#2D8CFF] rounded-full blur-sm opacity-50 animate-pulse"></div>
    <div className="absolute bottom-1/4 right-10 w-3 h-3 bg-[#2D8CFF] rounded-full blur-md opacity-30 animate-pulse"></div>
  </section>
);

export default Hero;
