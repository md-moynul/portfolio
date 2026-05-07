"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────
   Hook: reads dark class from <html>
   Works with next-themes, manual toggle, etc.
───────────────────────────────────────── */
const useIsDark = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initial check
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));

    check();

    // Watch for class changes on <html>
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return isDark;
};

/* ─────────────────────────────────────────
   Animated canvas background
───────────────────────────────────────── */
const HeroBackground = ({ isDark }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    let animId;
    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.4,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const FONT_SIZE = 13;
    const cols = Math.floor(W / FONT_SIZE);
    const drops = Array.from({ length: cols }, () => Math.random() * -100);
    const chars = "01アイウエカキMERNJSAPI</>{}[]";

    const draw = () => {
      const accent = "45,140,255";
      const bg = isDark ? "8,8,12" : "248,250,255";
      const bgAlpha = isDark ? 0.92 : 0.93;

      ctx.fillStyle = `rgba(${bg},${bgAlpha})`;
      ctx.fillRect(0, 0, W, H);

      // Grid
      ctx.strokeStyle = `rgba(${accent},${isDark ? 0.04 : 0.06})`;
      ctx.lineWidth = 1;
      const GRID = 60;
      for (let x = 0; x < W; x += GRID) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += GRID) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Code rain
      ctx.font = `${FONT_SIZE}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        const progress = drops[i] / (H / FONT_SIZE);
        const alpha = Math.max(0, (isDark ? 0.18 : 0.1) - progress * 0.15);
        ctx.fillStyle = `rgba(${accent},${alpha})`;
        ctx.fillText(ch, i * FONT_SIZE, drops[i] * FONT_SIZE);
        if (drops[i] * FONT_SIZE > H && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.4;
      }

      // Particles
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accent},${isDark ? p.alpha : p.alpha * 0.5})`;
        ctx.fill();
      });

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${accent},${(isDark ? 0.08 : 0.04) * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Radial glows
      const g1 = ctx.createRadialGradient(W * 0.15, H * 0.3, 0, W * 0.15, H * 0.3, 320);
      g1.addColorStop(0, `rgba(${accent},${isDark ? 0.07 : 0.04})`);
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1; ctx.fillRect(0, 0, W, H);

      const g2 = ctx.createRadialGradient(W * 0.85, H * 0.7, 0, W * 0.85, H * 0.7, 260);
      g2.addColorStop(0, `rgba(${accent},${isDark ? 0.05 : 0.03})`);
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2; ctx.fillRect(0, 0, W, H);

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
    };
  }, [isDark]); // re-renders when theme changes

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

/* ─────────────────────────────────────────
   Hero Section
───────────────────────────────────────── */
const Hero = () => {
  const isDark = useIsDark(); // auto-detects from <html class="dark">

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center relative px-6 overflow-hidden transition-colors duration-500 bg-white dark:bg-[#08080C]"
      id="about"
    >
      {/* Animated canvas bg */}
      <HeroBackground isDark={isDark} />

      {/* Top & bottom fades */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white dark:from-[#08080C] to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-[#08080C] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-20 py-20 relative z-20">

        {/* ── Left ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-6 z-10 w-full md:w-1/2"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#2D8CFF]/30 bg-[#2D8CFF]/10 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase">
              Available for Work
            </span>
          </motion.div>

          <span className="text-gray-500 dark:text-zinc-400 text-lg font-medium">
            Hey, I&apos;m
          </span>

          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white tracking-tight leading-none">
            Md. Moynul{" "}
            <span className="inline-block animate-wave text-4xl md:text-5xl">👋</span>
          </h1>

          <div className="text-2xl md:text-3xl text-gray-700 dark:text-zinc-300 font-semibold flex items-center gap-3 flex-wrap">
            <span>I am a</span>
            <span className="text-[#2D8CFF]">
              <Typewriter
                options={{
                  strings: [
                    "MERN Stack Developer",
                    "React Developer",
                    "Node.js Learner",
                    "Frontend Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 75,
                }}
              />
            </span>
          </div>

          <p className="text-gray-600 dark:text-zinc-500 max-w-lg text-lg leading-relaxed">
            🌱 Fresher MERN Stack Developer — passionate about building modern,
            responsive web applications with MongoDB, Express, React &amp; Node.js.
            <br />
            Open to opportunities &amp; collaborations 🚀
          </p>

          {/* Tech pills */}
          <div className="flex flex-wrap gap-2">
            {["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs rounded-full border font-mono bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-gray-500 dark:text-zinc-400"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <motion.a
              href="mailto:your-email@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#2D8CFF] rounded-full text-white font-bold flex items-center gap-3 hover:bg-[#1a6fd8] transition-all shadow-[0_0_30px_rgba(45,140,255,0.3)]"
            >
              Say Hello{" "}
              <span className="material-symbols-outlined text-sm">send</span>
            </motion.a>

            <div className="flex items-center gap-3">
              {[
                { icon: <FaLinkedin className="text-xl" />, href: "https://linkedin.com",        hov: "hover:text-[#0A66C2]" },
                { icon: <FaEnvelope className="text-xl" />, href: "mailto:your-email@gmail.com", hov: "hover:text-[#EA4335]" },
                { icon: <FaGithub   className="text-xl" />, href: "https://github.com",          hov: "hover:text-gray-900 dark:hover:text-white" },
                { icon: <FaFacebook className="text-xl" />, href: "https://facebook.com",        hov: "hover:text-[#1877F2]" },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 rounded-full flex justify-center items-center border transition-all duration-300 backdrop-blur-sm bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-gray-500 dark:text-zinc-500 ${s.hov}`}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex items-center gap-3 text-gray-400 dark:text-zinc-600">
            <div className="w-6 h-10 border-2 border-gray-300 dark:border-zinc-700 rounded-full flex justify-center p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 bg-[#2D8CFF] rounded-full"
              />
            </div>
            <span className="text-sm font-medium">Scroll Down ↓</span>
          </div>
        </motion.div>

        {/* ── Right ── */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-72 h-72 md:w-[420px] md:h-[420px]"
          >
            {/* Spinning rings */}
            <div
              className="absolute inset-0 rounded-full border border-[#2D8CFF]/20 scale-110 animate-spin"
              style={{ animationDuration: "20s" }}
            />
            <div
              className="absolute inset-0 rounded-full border border-[#2D8CFF]/10 scale-125 animate-spin"
              style={{ animationDuration: "35s", animationDirection: "reverse" }}
            />

            {/* Blob image */}
            <div className="absolute inset-0 border border-[#2D8CFF]/30 rounded-[30%_70%_70%_30%/_30%_30%_70%_70%] overflow-hidden animate-blob shadow-[0_0_60px_rgba(45,140,255,0.2)]">
              <Image
                src="/moynul.png"
                alt="Moynul Profile"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 dark:from-[#08080C]/40 to-transparent" />
            </div>

            {/* Card — MERN */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-4 -right-4 bg-white/90 dark:bg-[#0d0d14]/90 backdrop-blur-md border border-[#2D8CFF]/30 p-4 rounded-2xl flex items-center gap-3 shadow-[0_0_20px_rgba(45,140,255,0.15)] z-20"
            >
              <div className="text-[#2D8CFF]">
                <span className="material-symbols-outlined">code</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900 dark:text-white">MERN</span>
                <span className="text-[10px] uppercase font-bold leading-none text-gray-400 dark:text-zinc-500">Stack Dev</span>
              </div>
            </motion.div>

            {/* Card — 2nd Year */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute top-1/3 -left-14 bg-white/90 dark:bg-[#0d0d14]/90 backdrop-blur-md border border-[#2D8CFF]/30 p-4 rounded-2xl flex items-center gap-3 shadow-[0_0_20px_rgba(45,140,255,0.15)] z-20"
            >
              <div className="text-[#2D8CFF]">
                <span className="material-symbols-outlined">menu_book</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-gray-900 dark:text-white">2nd</span>
                <span className="text-[10px] uppercase font-bold leading-none text-gray-400 dark:text-zinc-500">Year Student</span>
              </div>
            </motion.div>

            {/* Card — Open to Work */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute bottom-2 -left-6 bg-white/90 dark:bg-[#0d0d14]/90 backdrop-blur-md border border-emerald-500/30 p-4 rounded-2xl flex items-center gap-3 shadow-[0_0_20px_rgba(52,211,153,0.1)] z-20"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div className="flex flex-col">
                <span className="font-bold text-base text-gray-900 dark:text-white">Open to Work</span>
                <span className="text-[10px] uppercase font-bold leading-none text-gray-400 dark:text-zinc-500">Fresher · MERN</span>
              </div>
            </motion.div>

            {/* Glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#2D8CFF]/8 blur-[80px] rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;