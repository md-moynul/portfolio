"use client";

import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#0A0A0B]/80 backdrop-blur-md border-b border-gray-200 dark:border-[#262626] transition-colors">
    <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-lg font-bold tracking-tighter text-gray-900 dark:text-white"
      >
        MERN.DEV
      </motion.span>
      <div className="hidden md:flex gap-8 items-center">
        {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item, i) => (
          <motion.a 
            key={item}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="font-manrope text-sm font-medium tracking-wide text-gray-500 dark:text-zinc-400 hover:text-[#2D8CFF] dark:hover:text-[#2D8CFF] transition-all duration-300" 
            href={`#${item.toLowerCase()}`}
          >
            {item}
          </motion.a>
        ))}
      </div>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <motion.button 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#2D8CFF] text-white px-6 py-2 rounded-full font-label-caps text-xs tracking-widest transition-all shadow-[0_0_15px_rgba(45,140,255,0.3)]"
        >
          Resume
        </motion.button>
      </div>
    </div>
  </nav>
);

export default Navbar;
