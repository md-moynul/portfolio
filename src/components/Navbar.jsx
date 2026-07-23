"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  // Track scroll position & active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        { name: "Home", id: "hero" },
        { name: "About", id: "about" },
        { name: "Skills", id: "skills" },
        { name: "Projects", id: "projects" },
        { name: "Education", id: "education" },
        { name: "Contact", id: "contact" },
      ];

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-4 pointer-events-none">
        <motion.nav
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`pointer-events-auto flex items-center justify-between gap-4 md:gap-8 px-5 md:px-7 py-2.5 md:py-3 rounded-full transition-all duration-300 w-full max-w-4xl border ${
            scrolled
              ? "bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl border-gray-300 dark:border-white/20 shadow-xl shadow-black/5 dark:shadow-black/40"
              : "bg-white/40 dark:bg-zinc-950/40 backdrop-blur-lg border-gray-300/80 dark:border-white/15 shadow-md"
          }`}
        >
          <a href="#hero" className="flex items-center gap-2 group flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={140}
              height={32}
              className="h-7 md:h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-gray-100/50 dark:bg-white/5 p-1 rounded-full border border-gray-200 dark:border-white/10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-[#2D8CFF] dark:text-white"
                      : "text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-white dark:bg-white/10 rounded-full shadow-sm"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </div>

          {/* Actions (Theme Toggle & Mobile Menu) */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="p-0.5 rounded-full bg-gray-100/80 dark:bg-white/10 border border-gray-200/60 dark:border-white/10">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white border border-gray-200/60 dark:border-white/10"
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined text-xl">
                {isOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 dark:bg-black/70 backdrop-blur-md z-[105] md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-4 right-4 z-[110] bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl rounded-3xl p-6 border border-gray-200 dark:border-white/10 shadow-2xl md:hidden max-w-md mx-auto"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.name;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-[#2D8CFF]/10 text-[#2D8CFF] dark:bg-[#2D8CFF]/20"
                          : "text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-white/5"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#2D8CFF]" />
                      )}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
