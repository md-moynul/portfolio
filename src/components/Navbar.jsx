"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll for background opacity
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled
        ? "bg-white/90 dark:bg-[#0A0A0B]/90 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 py-3"
        : "bg-transparent py-5"
        }`}>
        <div className="flex justify-between items-center px-6 max-w-7xl mx-auto w-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <img
              src="/images/logo.png"
              alt="Logo"
              className="h-10 md:h-13 w-auto object-contain dark:brightness-110 transition-all"
            />
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="font-manrope text-sm font-semibold tracking-wide text-gray-600 dark:text-zinc-400 hover:text-[#2D8CFF] dark:hover:text-[#2D8CFF] transition-all duration-300 relative group"
                href={link.href}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2D8CFF] transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <ThemeToggle />

            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block bg-[#2D8CFF] text-white px-6 py-2.5 rounded-full font-bold text-xs tracking-widest transition-all shadow-[0_10px_20px_rgba(45,140,255,0.2)]"
            >
              RESUME
            </motion.button>

            {/* Mobile Menu Toggle (3 Dots) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-white/5 text-gray-900 dark:text-white"
            >
              <span className="material-symbols-outlined text-2xl">
                {isOpen ? "close" : "more_vert"}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-[105] md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-[300px] bg-white dark:bg-[#0A0A0B] shadow-2xl z-[110] p-8 flex flex-col gap-8 md:hidden border-l border-gray-200 dark:border-white/5"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-black text-xl tracking-tighter text-gray-900 dark:text-white">NAVIGATE</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-white/5 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group py-4 border-b border-gray-100 dark:border-white/5 last:border-0 flex items-center justify-between"
                  >
                    <span className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-[#2D8CFF] transition-colors uppercase tracking-tight">
                      {link.name}
                    </span>
                    <span className="material-symbols-outlined text-gray-300 dark:text-zinc-700 group-hover:text-[#2D8CFF] transition-all transform group-hover:translate-x-1">
                      arrow_forward_ios
                    </span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto pt-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#2D8CFF] text-white py-5 rounded-2xl font-bold tracking-widest text-sm shadow-[0_15px_30px_rgba(45,140,255,0.25)] flex items-center justify-center gap-2"
                >
                  RESUME
                  <span className="material-symbols-outlined text-sm">download</span>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
