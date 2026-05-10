"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.15, // Higher lerp = more immediate
      direction: "vertical",
      gestureDirection: "vertical",
      smoothHover: true,
      smoothWheel: true,
      wheelMultiplier: 1.5, 
      touchMultiplier: 2.5,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Integrate with Framer Motion or other libraries if needed
    lenis.on('scroll', () => {
      // Custom logic on scroll if needed
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;
