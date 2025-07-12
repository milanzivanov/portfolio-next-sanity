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
      className="p-3 rounded-full bg-slate-200 dark:bg-white cursor-pointer"
      aria-label="Toggle Dark Mode"
      type="button"
    >
      {dark ? <LuMoon /> : <LuSun />}
    </button>
  );
}
