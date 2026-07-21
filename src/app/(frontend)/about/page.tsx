import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About / Milan Portfolio",
  description:
    "About Milan Zivanov - a frontend developer with experience at Vega IT Solution, OMA Adriatic, and HTEC, specializing in Next.js, TypeScript, and Sanity-powered web experiences."
};

function AboutPage() {
  return (
    <div className="bg-[linear-gradient(135deg,#4f46e5_0%,#7c3aed_30%,#9333ea_60%,#4f46e5_100%)] dark:bg-[linear-gradient(135deg,#0f0a1e_0%,#1a0a2e_30%,#150520_60%,#0f0a1e_100%)] min-h-[calc(100vh)] flex items-center justify-center">
        <div className="container px-6 py-20 max-w-5xl mx-auto">
          <div className="bg-slate-200 dark:bg-white/5 border border-black/8 dark:border-white/10 rounded-3xl px-8 py-10 md:px-12 md:py-14">
            {/* section label */}
            <p className="label-mono text-black/40 dark:text-white/40 mb-10">
              About Me
            </p>

            <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
              {/* photo */}
              <div className="relative shrink-0 w-48 h-56 md:w-60 md:h-72 rounded-2xl overflow-hidden bg-black/5 dark:bg-white/8">
                <Image
                  priority
                  fill
                  className="object-cover"
                  src="/Milan_right.webp"
                  alt="Milan Zivanov"
                  quality={85}
                />
              </div>

              {/* text */}
              <div className="space-y-5 text-base tracking-body leading-relaxed text-black/70 dark:text-white/70">
                <p>
                  Hi, I&apos;m{" "}
                  <strong className="font-semibold text-black dark:text-white">
                    Milan
                  </strong>{" "}
                  — an enthusiastic front-end developer with{" "}
                  <strong className="font-semibold text-black dark:text-white">
                    2+ years of experience
                  </strong>{" "}
                  at{" "}
                  <Link
                    href="https://www.vegaitglobal.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-black dark:text-white underline underline-offset-2 hover:opacity-60 transition-opacity duration-200 focus-dashed rounded-sm"
                  >
                    Vega IT Solution
                  </Link>{" "}
                  (two-week internship),{" "}
                  <Link
                    href="https://omadriatic.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-black dark:text-white underline underline-offset-2 hover:opacity-60 transition-opacity duration-200 focus-dashed rounded-sm"
                  >
                    OMA Adriatic
                  </Link>
                  , and{" "}
                  <Link
                    href="https://htec.rs/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-black dark:text-white underline underline-offset-2 hover:opacity-60 transition-opacity duration-200 focus-dashed rounded-sm"
                  >
                    HTEC
                  </Link>
                  . I specialize in crafting clean, user-friendly digital
                  experiences.
                </p>

                <p>
                  This is my little corner of the internet where I share my
                  thoughts and ideas. I&apos;m open to freelance opportunities
                  and always eager to learn.
                </p>

                <p>
                  Focused on mastering{" "}
                  <strong className="font-semibold text-black dark:text-white">
                    Next.js
                  </strong>{" "}
                  as my core frontend framework and building my next career
                  chapter around it, while also leveraging{" "}
                  <strong className="font-semibold text-black dark:text-white">
                    Sanity
                  </strong>{" "}
                  as a flexible and powerful headless CMS for content-driven
                  applications.
                </p>

                {/* tech stack */}
                <div className="pt-4">
                  <p className="label-mono text-black/40 dark:text-white/40 mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Next.js",
                      "React",
                      "TypeScript",
                      "Tailwind CSS",
                      "Sanity",
                      "Node.js",
                      "Figma",
                      "AI/ML",
                      "Git"
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="label-mono text-black/60 dark:text-white/60 py-1 px-3 rounded-full border border-black/15 dark:border-white/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
export default AboutPage;
