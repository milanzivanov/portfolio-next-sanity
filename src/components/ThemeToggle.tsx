"use client";
import { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // On mount, check localStorage for theme, default to light
    const isDark = localStorage.theme === "dark";
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.theme = newDark ? "dark" : "light";
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center w-20 h-10 rounded-full cursor-pointer transition-colors duration-300 bg-slate-300 dark:bg-blue-600 focus:outline-none"
      aria-label="Toggle Dark Mode"
      type="button"
    >
      <span
        className={`absolute left-1 flex items-center justify-center w-8 h-8 rounded-full bg-white shadow transition-transform duration-300 ${
          dark ? "translate-x-10" : "translate-x-0"
        }`}
      >
        {dark ? (
          <LuMoon className="w-4 h-4 text-blue-600" />
        ) : (
          <LuSun className="w-4 h-4 text-slate-400" />
        )}
      </span>
    </button>
  );
}
