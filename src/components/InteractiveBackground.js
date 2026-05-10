"use client";

import { useEffect, useRef, useState } from "react";

/* ── Auto-detect dark mode ── */
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

const InteractiveBackground = () => {
  const isDark = useIsDark();
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

    // Optimized particle count for large area
    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.5 + 0.4,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      alpha: Math.random() * 0.5 + 0.1,
    }));

    const FONT_SIZE = 14;
    const cols = Math.floor(W / FONT_SIZE);
    const drops = Array.from({ length: cols }, () => Math.random() * -100);
    const chars = "01MERNJSAPIアイウ</>{}[]";

    const draw = () => {
      const accent = "45,140,255";
      const bg = isDark ? "10,10,12" : "255,255,255";
      
      // Clear with slight trail
      ctx.fillStyle = `rgba(${bg}, 0.15)`;
      ctx.fillRect(0, 0, W, H);

      // Grid (subtle)
      ctx.strokeStyle = `rgba(${accent}, ${isDark ? 0.03 : 0.02})`;
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 100) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,H); ctx.stroke(); }
      for (let y = 0; y < H; y += 100) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(W,y); ctx.stroke(); }

      // Code rain
      ctx.font = `${FONT_SIZE}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        const alpha = Math.max(0, (isDark ? 0.12 : 0.06) - (drops[i] / (H / FONT_SIZE)) * 0.1);
        ctx.fillStyle = `rgba(${accent},${alpha})`;
        ctx.fillText(ch, i * FONT_SIZE, drops[i] * FONT_SIZE);
        if (drops[i] * FONT_SIZE > H && Math.random() > 0.985) drops[i] = 0;
        drops[i] += 0.3;
      }

      // Particles
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accent},${isDark ? p.alpha : p.alpha * 0.3})`;
        ctx.fill();
      });

      // Connections
      for (let i = 0; i < particles.length; i++)
        for (let j = i + 1; j < particles.length; j++) {
          const d = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
          if (d < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${accent},${(isDark ? 0.05 : 0.02) * (1 - d / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }

      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", onResize); };
  }, [isDark]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none transition-opacity duration-1000"
      style={{ zIndex: -1 }}
    />
  );
};

export default InteractiveBackground;
