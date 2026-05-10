"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "./Animations";

const About = () => {
  return (
    <section
      className="py-[120px] px-8 bg-transparent transition-colors"
      id="about"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="font-label-caps text-primary mb-4 block uppercase tracking-[0.2em] text-xs">
            Behind the Code
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-6 mb-4">
            <h2 className="font-display text-h1 text-gray-900 dark:text-white leading-tight">
              Hi, I'm{" "}
              <span className="text-gradient">Md. Moynul Islam</span>
            </h2>
            <span className="text-3xl select-none">👋</span>
          </div>
          <p className="font-display text-2xl text-gray-500 dark:text-zinc-400 leading-tight max-w-3xl">
            Merging{" "}
            <span className="text-gradient">clean architecture</span> with{" "}
            <span className="text-gradient">intuitive design</span>.
          </p>
        </motion.div>

        {/* Main Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >

          {/* ── Bio Card ── */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-8 glass-card p-10 rounded-3xl flex flex-col justify-between gap-8"
          >
            <div className="flex flex-col gap-5">
              <p className="text-body-lg text-gray-700 dark:text-zinc-300 leading-relaxed">
                I am a{" "}
                <span className="font-bold text-gray-900 dark:text-white">
                  MERN Stack Developer
                </span>{" "}
                and Computer Science student at{" "}
                <span className="text-primary font-semibold">
                  Rangpur Polytechnic Institute
                </span>
                . My expertise lies in building scalable web architectures that
                prioritize performance and user experience above all else.
              </p>
              <p className="text-body-lg text-gray-700 dark:text-zinc-300 leading-relaxed">
                Based in{" "}
                <span className="font-bold text-gray-900 dark:text-white">
                  Rangpur, Bangladesh
                </span>
                , I leverage the power of the React ecosystem to transform
                complex requirements into elegant, high-performance digital
                solutions. I believe that professional software should be as
                beautiful as it is functional.
              </p>
            </div>

            {/* Inline Stats */}
            <div className="flex flex-wrap gap-4 pt-2 border-t border-gray-100 dark:border-zinc-800">
              {[
                { value: "2nd", label: "Year" },
                { value: "10+", label: "Projects" },
                { value: "MERN", label: "Stack" },
                { value: "BD", label: "Based" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="flex flex-col items-center px-5 py-3 bg-primary/5 rounded-2xl border border-primary/10 min-w-[64px]"
                >
                  <span className="text-xl font-black text-primary leading-none">
                    {value}
                  </span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-500 mt-1">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Location Card ── */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-4 glass-card p-8 rounded-3xl flex flex-col items-center justify-center text-center gap-4 group"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl">location_on</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-xl">
                Location
              </h3>
              <p className="text-gray-500 dark:text-zinc-500 text-sm mt-1">
                Rangpur, Bangladesh
              </p>
              <p className="text-[11px] font-mono text-gray-400 dark:text-zinc-600 mt-1 tracking-widest uppercase">
                UTC +6 · Remote Ready
              </p>
            </div>
            {/* Availability badge */}
            <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-full px-3 py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* ── Philosophy Card ── */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-4 glass-card p-8 rounded-3xl flex flex-col gap-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-2xl">terminal</span>
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-2">
                My Philosophy
              </h3>
              <p className="text-base text-gray-700 dark:text-zinc-300 leading-relaxed">
                I prioritize clean, maintainable code and performance-first
                development. Scalability and accessibility are never
                afterthoughts — they're baked into my workflow from day one.
              </p>
            </div>
          </motion.div>

          {/* ── Current Focus Card ── */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-8 glass-card p-8 rounded-3xl flex flex-col gap-5"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">rocket_launch</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-xl">
                Current Focus
              </h3>
            </div>

            <div className="flex flex-col gap-2">
              {[
                {
                  icon: "arrow_forward",
                  text: "Next.js App Router & Server Actions",
                },
                {
                  icon: "arrow_forward",
                  text: "Advanced Framer Motion techniques",
                },
                {
                  icon: "arrow_forward",
                  text: "Immersive & accessible web experiences",
                },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 border border-primary/10 text-base font-medium text-gray-800 dark:text-zinc-200"
                >
                  <span className="material-symbols-outlined text-primary text-xl">
                    {icon}
                  </span>
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Tech Stack Glimpse Card ── */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-12 glass-card p-8 rounded-3xl"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-label-caps mb-1">
                  Core Stack
                </p>
                <h3 className="font-bold text-gray-900 dark:text-white text-xl">
                  Tools I work with daily
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "MongoDB",
                "Express.js",
                "React",
                "Node.js",
                "Next.js",
                "Tailwind CSS",
                "Framer Motion",
                "REST APIs",
                "Git",
              ].map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-full border border-gray-200 dark:border-zinc-700 text-gray-600 dark:text-zinc-400 bg-gray-50 dark:bg-zinc-900 hover:border-primary/50 hover:text-primary transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;