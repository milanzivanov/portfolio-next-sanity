"use client";
import { useEffect, useState } from "react";
import { LuSun, LuMoon } from "react-icons/lu";

function playToggleSound(toDark: boolean) {
  try {
    const ctx = new AudioContext();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    // toDark = lower pitch "thud", toLight = higher pitch "click"
    const freq1 = toDark ? 300 : 600;
    const freq2 = toDark ? 150 : 900;

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq1, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(freq2, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.15);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.15);

    osc.onended = () => ctx.close();
  } catch {
    // Web Audio API nije dostupan
  }
}

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = localStorage.theme === "dark";
    // localStorage isn't available during SSR, so the initial theme can only
    // be read here, on mount.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const newDark = !dark;
    setDark(newDark);
    document.documentElement.classList.toggle("dark", newDark);
    localStorage.theme = newDark ? "dark" : "light";
    playToggleSound(newDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center w-16 h-11 rounded-full cursor-pointer transition-colors duration-300 bg-blue-600 dark:bg-slate-300 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-black dark:focus-visible:outline-white"
      aria-label="Toggle Dark Mode"
      type="button"
    >
      <span
        className={`absolute left-1 flex items-center justify-center w-9 h-9 rounded-full bg-white shadow transition-transform duration-300 ${
          dark ? "translate-x-5" : "translate-x-0"
        }`}
      >
        {dark ? (
          <LuMoon className="w-5 h-5 text-blue-600" />
        ) : (
          <LuSun className="w-5 h-5 text-slate-400" />
        )}
      </span>
    </button>
  );
}
