"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";

/* ── Auto-detect dark mode from <html class="dark"> ── */
const useIsDark = () => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  return isDark;
};

/* ── Canvas background ── */
const HeroBackground = ({ isDark }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    // Size canvas to its parent container, not window
    const parent = canvas.parentElement;
    let W = (canvas.width = parent.offsetWidth);
    let H = (canvas.height = parent.offsetHeight);

    const onResize = () => {
      W = canvas.width = parent.offsetWidth;
      H = canvas.height = parent.offsetHeight;
    };
    window.addEventListener("resize", onResize);

    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.5 + 0.4,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const FONT_SIZE = 13;
    const cols = Math.floor(W / FONT_SIZE);
    const drops = Array.from({ length: cols }, () => Math.random() * -100);
    const chars = "01MERNJSAPIアイウ</>{}[]";

    const draw = () => {
      const accent = "45,140,255";
      const bg = isDark ? "8,8,12" : "248,250,255";
      ctx.fillStyle = `rgba(${bg},${isDark ? 0.92 : 0.93})`;
      ctx.fillRect(0, 0, W, H);

      // Grid
      ctx.strokeStyle = `rgba(${accent},${isDark ? 0.04 : 0.05})`;
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 60) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
      for (let y = 0; y < H; y += 60) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }

      // Code rain
      ctx.font = `${FONT_SIZE}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        const alpha = Math.max(0, (isDark ? 0.16 : 0.09) - (drops[i] / (H / FONT_SIZE)) * 0.15);
        ctx.fillStyle = `rgba(${accent},${alpha})`;
        ctx.fillText(ch, i * FONT_SIZE, drops[i] * FONT_SIZE);
        if (drops[i] * FONT_SIZE > H && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.4;
      }

      // Particles + connections
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accent},${isDark ? p.alpha : p.alpha * 0.4})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++)
        for (let j = i + 1; j < particles.length; j++) {
          const d = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (d < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${accent},${(isDark ? 0.07 : 0.03) * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

      // Glows
      [[W*0.1, H*0.25, 300], [W*0.9, H*0.75, 240]].forEach(([cx, cy, r]) => {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0, `rgba(${accent},${isDark ? 0.07 : 0.04})`);
        g.addColorStop(1, "transparent");
        ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      });

      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

/* ── Hero ── */
const Hero = () => {
  const isDark = useIsDark();

  const socials = [
    { icon: <FaLinkedin className="text-lg" />, href: "https://linkedin.com",        hov: "hover:text-[#0A66C2]" },
    { icon: <FaEnvelope className="text-lg" />, href: "mailto:your-email@gmail.com", hov: "hover:text-[#EA4335]" },
    { icon: <FaGithub   className="text-lg" />, href: "https://github.com",          hov: "hover:text-gray-900 dark:hover:text-white" },
    { icon: <FaFacebook className="text-lg" />, href: "https://facebook.com",        hov: "hover:text-[#1877F2]" },
  ];

  return (
    // ✅ No min-h-screen — let content define the height naturally
    // ✅ pb-0 — no bottom padding pushing next section down
    <section
      className="relative flex items-center justify-center px-6 overflow-hidden bg-white dark:bg-[#08080C] transition-colors duration-500 pt-24 pb-16"
      id="about"
    >
      <HeroBackground isDark={isDark} />

      {/* Top fade only — no bottom fade to avoid gap illusion */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white dark:from-[#08080C] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-20">

        {/* ── LEFT ── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start gap-5 w-full md:w-1/2"
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
          <div>
            <p className="text-gray-500 dark:text-zinc-400 text-base font-medium mb-1">
              Hey, I&apos;m
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tight leading-none">
              Md. Moynul
              <span className="inline-block ml-3 animate-wave text-3xl md:text-4xl">👋</span>
            </h1>
          </div>

          {/* Typewriter */}
          <div className="text-xl md:text-2xl text-gray-700 dark:text-zinc-300 font-semibold flex items-center gap-2 flex-wrap">
            <span>I&apos;m a</span>
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

          {/* Short one-liner */}
          <p className="text-gray-500 dark:text-zinc-500 text-base leading-relaxed max-w-md">
            Fresher MERN developer from Rangpur, Bangladesh —
            turning ideas into fast, responsive web apps. 🚀
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mt-1">
            <motion.a
              href="#education"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="px-6 py-3 bg-[#2D8CFF] rounded-full text-white font-bold text-sm flex items-center gap-2 hover:bg-[#1a6fd8] transition-all shadow-[0_0_28px_rgba(45,140,255,0.35)]"
            >
              About Me
              <span className="material-symbols-outlined text-sm">arrow_downward</span>
            </motion.a>

            <motion.a
              href="mailto:your-email@gmail.com"
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
          <div className="mt-8 flex items-center gap-3 text-gray-400 dark:text-zinc-600">
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
              <Image src="/moynul.png" alt="Moynul" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 dark:from-[#08080C]/40 to-transparent" />
            </div>

            {/* Floating — MERN Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute -top-3 -right-3 bg-white/90 dark:bg-[#0d0d14]/90 backdrop-blur-md border border-[#2D8CFF]/25 px-4 py-3 rounded-2xl flex items-center gap-2 shadow-lg z-20"
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
              className="absolute top-1/3 -left-14 bg-white/90 dark:bg-[#0d0d14]/90 backdrop-blur-md border border-[#2D8CFF]/25 px-4 py-3 rounded-2xl flex items-center gap-2 shadow-lg z-20"
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
              className="absolute -bottom-2 -left-4 bg-white/90 dark:bg-[#0d0d14]/90 backdrop-blur-md border border-emerald-400/25 px-4 py-3 rounded-2xl flex items-center gap-2 shadow-lg z-20"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <p className="font-bold text-sm text-gray-900 dark:text-white leading-none">Open to Work</p>
                <p className="text-[10px] text-gray-400 dark:text-zinc-500 uppercase font-semibold mt-0.5">Fresher · MERN</p>
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