import Link from "next/link";
import { ProjectBanner } from "@/components/ProjectBanner";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  adjustFontFallback: false,
  preload: true
});

export default async function HomePage() {
  const { data: projects } = await sanityFetch({
    query: PROJECTS_QUERY
  });

  return (
    <>
      {/* ── HERO ── vibrant gradient, white text, DESIGN.md style */}
      <div
        id="hero"
        className="relative flex flex-col min-h-dvh scroll-mt-[92px] bg-[linear-gradient(135deg,#4f46e5_0%,#7c3aed_30%,#9333ea_60%,#4f46e5_100%)] dark:bg-[linear-gradient(135deg,#0f0a1e_0%,#1a0a2e_30%,#150520_60%,#0f0a1e_100%)]"
      >
        {/* radial lines overlay */}
        {/* <div className="absolute inset-0 bg-radial-lines opacity-100 pointer-events-none" /> */}

        {/* hero content */}
        <div
          className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 py-12 md:py-16
        "
        >
          {/* monospace label — DESIGN.md: figmaMono uppercase, positive tracking */}
          <p className="label-mono text-white/70 mb-6">
            Frontend Developer & AI Enthusiast
          </p>

          {/* display heading — fluid responsive sizing */}
          <h1 className="max-w-4xl mx-auto w-full">
            <span
              className={`${poppins.className} block font-bold text-white leading-[1.0] tracking-tight text-5xl md:text-6xl xl:text-9xl`}
            >
              Ideas into
              <br />
              interfaces.
            </span>
            <span
              className={`${poppins.className} block font-bold text-white leading-[1.1] mt-2 tracking-tight text-3xl  md:text-4xl xl:text-7xl`}
            >
              Code into experience.
            </span>
          </h1>

          {/* CTA — DESIGN.md: white pill on gradient, black text */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="#portfolio"
              className="rounded-full inline-flex items-center gap-2 bg-white text-black hover:opacity-90 transition-opacity duration-200 py-3 px-7 font-medium focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
            >
              View My Work
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
              </svg>
            </Link>

            <Link
              href="#contact"
              className="hidden rounded-full md:inline-flex items-center bg-white/16 backdrop-blur text-white hover:bg-white/25 transition-colors duration-200 py-3 px-7 font-medium focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* bio strip */}
      <div className="bg-white dark:bg-black border-t border-black/8 dark:border-white/8">
        <div className="max-w-5xl mx-auto py-8 px-6">
          <p className="label-mono text-black/40 dark:text-white/40 text-center mb-3">Short intro</p>
          <p className="max-w-3xl mx-auto text-center text-base tracking-body text-black/70 dark:text-white/70 leading-relaxed">
            Hi, I&apos;m{" "}
            <strong className="font-semibold text-black dark:text-white">
              Milan - a Graphic Engineer and UI Developer
            </strong>{" "}
            focused on building high-precision digital experiences. I specialize
            in bridging the gap between complex design systems and clean,
            efficient code, powered by an AI-assisted workflow. 🚀
          </p>
        </div>
      </div>

      {/* ── PORTFOLIO ── clean white/black, gallery-like */}
      <section
        id="portfolio"
        className="w-full bg-white dark:bg-black scroll-mt-[92px] border-t border-black/8 dark:border-white/8"
      >
        <div className="max-w-5xl md:max-w-3xl xl:max-w-5xl mx-auto px-6 md:px-10 py-20">
          {/* section label — DESIGN.md: monospace uppercase */}
          <div className="mb-12 text-center">
            <p className="label-mono text-black/40 dark:text-white/40 mb-4">
              Selected Work
            </p>
            <h2
              className={`${poppins.className} tracking-heading text-4xl sm:text-5xl font-bold text-black dark:text-white`}
            >
              Recent Projects
            </h2>
            <p className="mt-3 text-base tracking-body text-black/50 dark:text-white/50">
              Projects populated from my Sanity Studio.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            {projects.map((project, index) => (
              <RevealOnScroll key={project._id} delay={index * 80}>
                <ProjectBanner {...project} index={index} priority={index === 0} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="scroll-mt-[92px]">
        <Footer />
      </section>

      <BackToTopButton />
    </>
  );
}
