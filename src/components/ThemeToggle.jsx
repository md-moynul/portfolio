"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-16 h-8" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle Theme"
      className={`relative w-16 h-8 rounded-full transition-all duration-500 ease-in-out focus:outline-none shadow-inner overflow-hidden
        ${isDark
          ? "bg-gradient-to-r from-indigo-950 via-[#1a1a2e] to-[#0A0A0B] border border-indigo-800/50"
          : "bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-200 border border-amber-300"
        }`}
    >
      {/* Stars (dark mode) */}
      {isDark && (
        <>
          <span className="absolute top-1.5 left-2 w-0.5 h-0.5 bg-white rounded-full opacity-70" />
          <span className="absolute top-3.5 left-3.5 w-1 h-1 bg-white rounded-full opacity-50" />
          <span className="absolute bottom-1.5 left-2 w-0.5 h-0.5 bg-white rounded-full opacity-60" />
        </>
      )}

      {/* Sliding knob */}
      <span
        className={`absolute top-1 w-6 h-6 rounded-full shadow-lg transition-all duration-500 ease-in-out flex items-center justify-center
          ${isDark
            ? "translate-x-8 bg-gradient-to-br from-slate-200 to-slate-400 shadow-indigo-900"
            : "translate-x-1 bg-gradient-to-br from-yellow-300 to-orange-400 shadow-amber-400"
          }`}
      >
        {isDark
          ? <FaMoon className="text-[10px] text-indigo-300" />
          : <FaSun className="text-[10px] text-white drop-shadow" />
        }
      </span>
    </button>
  );
}
