"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

// Individual Bubble component to avoid Hook violations
const TrailBubble = ({ mouseX, mouseY, index, isVisible }) => {
  // Each bubble has a different lag for a smooth "snake" effect
  const springConfig = {
    damping: 20 + index * 2,
    stiffness: 200 - index * 12
  };

  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none bg-[#2D8CFF]"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        width: Math.max(4, 18 - index), // Bigger bubbles
        height: Math.max(4, 18 - index),
        opacity: (0.25 - index * 0.015) * (isVisible ? 1 : 0), // Adjust opacity falloff
        zIndex: 9998 - index,
      }}
    />
  );
};

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const NUM_BUBBLES = 12;

  useEffect(() => {
    setIsClient(true);
    const onMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isClient) return null;
  if (typeof window !== "undefined" && "ontouchstart" in window) return null;

  return (
    <>
      {/* ── 12 Trailing Bubbles (Requested) ── */}
      {Array.from({ length: NUM_BUBBLES }).map((_, i) => (
        <TrailBubble
          key={i}
          index={i}
          mouseX={mouseX}
          mouseY={mouseY}
          isVisible={isVisible}
        />
      ))}

      {/* ── Main Pointer (Large & Low Opacity) ── */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 bg-[#2D8CFF] rounded-full pointer-events-none z-[9999]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 0.35 : 0,
        }}
      />

      {/* ── Very Subtle Mouse Spotlight ── */}
      <motion.div
        className="fixed top-0 left-0 w-[250px] h-[250px] bg-[#2D8CFF]/5 rounded-full blur-[80px] pointer-events-none z-[0]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 0.8 : 0,
        }}
      />
    </>
  );
};

export default CustomCursor;
