"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  // not in use for now
  // const { data: settings } = await sanityFetch({
  //   query: settingsQuery
  // });

  const pathname = usePathname();

  return (
    <header className="fixed z-50 h-16 max-w-5xl mx-auto inset-0 px-5 rounded-bl-2xl rounded-br-2xl bg-white/90 dark:bg-white/50 backdrop-blur-xl border-b border-black/8 dark:border-white/20 flex items-center">
      <div className="container py-3 px-6 md:px-10 2xl:px-0">
        <div className="flex items-center justify-between gap-5">
          <Link
            className="flex items-center gap-2 focus-dashed rounded-sm"
            href="/"
          >
            <Image
              src="/logo-light-mode-2026.svg"
              alt="Milan Zivanov main logo - light mode"
              width={42}
              height={42}
              className="mx-auto dark:hidden"
            />
            <Image
              src="/logo-dark-mode-2026.svg"
              alt="Milan Zivanov main logo - dark mode"
              width={42}
              height={42}
              className="mx-auto hidden dark:block"
            />
          </Link>

          <div className="flex items-center gap-5">
            <nav>
              <ul
                role="list"
                className="flex items-center gap-4 md:gap-6 leading-5 text-sm md:text-base tracking-body font-mono text-black dark:text-white"
              >
                <li>
                  <Link
                    href="/about"
                    className={`focus-dashed rounded-sm hover:opacity-60 transition-opacity duration-200 ${pathname === "/about" ? "underline underline-offset-4" : ""}`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://drive.google.com/file/d/13aQ5ZbRKbCe4txSbA0dzT6iAPbgSArWP/view?usp=drive_link"
                    className={`focus-dashed rounded-sm hover:opacity-60 transition-opacity duration-200 `}
                  >
                    Cv
                  </Link>
                </li>

                <li className="hidden md:flex">
                  <Link
                    className="rounded-full flex gap-3 items-center bg-black dark:bg-white hover:opacity-80 h-10 px-5 justify-center text-white dark:text-black transition-opacity duration-200 focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-3"
                    href="https://github.com/milanzivanov"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="whitespace-nowrap label-mono text-xs">
                      GitHub
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
