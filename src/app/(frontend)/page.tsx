import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { Title } from "@/components/Title";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { PROJECTS_QUERYResult } from "@/sanity/types";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import RevealOnScroll from "@/components/RevealOnScroll";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800"],
  display: "swap"
});

export const metadata = {
  title: "Welcome / Milan Portfolio",
  description:
    "Milan Zivanov - Frontend Developer - Welcome to my personal website and portfolio showcasing my past work. Explore and witness my frontend skills! Feel free to reach out for any inquiries or opportunities to collaborate. This is the portfolio made in next.js and it is my first next.js project but not last"
};

export default async function Page() {
  const { data: projects } = await sanityFetch({
    query: PROJECTS_QUERY
  });

  return (
    <>
      <div
        id="hero"
        className="flex flex-col relative min-h-[calc(100vh-96px)] scroll-mt-[92px]"
      >
        <div className="flex-1 flex justify-center items-center relative bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 dark:from-slate-900 dark:via-indigo-950 dark:to-purple-950">
          {/* top */}
          <div className="container px-4">
            <div className="relative min-h-[48vh] mx-auto max-w-3xl lg:max-w-5xl lg:px-12 flex flex-col items-center justify-center text-center">
              <div className="flex flex-col pb-[64px] gap-5 items-center">
                <div className="inline-flex items-center gap-2 text-sm py-1.5 px-4 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-mono border border-emerald-500/20 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>Available for work</span>
                </div>

                <Title size="xl" text="uppercase">
                  <span
                    className={`${poppins.className} block font-extrabold tracking-wide text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-[#0071bc] dark:from-[#ffffff] to-[#6366f1] dark:to-[#f3f3f3] bg-clip-text text-transparent`}
                  >
                    Frontend Developer
                  </span>
                  <span
                    className={`${poppins.className} block font-extrabold tracking-wide text-xl sm:text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-[#6366f1] to-[#8453D2] bg-clip-text text-transparent mt-1`}
                  >
                    & AI Enthusiast
                  </span>
                </Title>

                <Link
                  className="rounded-full inline-flex gap-3 items-center bg-[#8453D2] hover:bg-[#6d3db8] focus-visible:bg-[#6d3db8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8453D2] dark:focus-visible:ring-offset-slate-900 py-2.5 px-5 sm:py-3 sm:px-7 text-white transition-colors duration-200 shadow-md"
                  href="#portfolio"
                  aria-label="Skroluj do portfolio sekcije"
                >
                  <span className="whitespace-nowrap font-medium">
                    Pogledaj portfolio
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 inline"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="container flex flex-col relative items-center mx-auto max-w-3xl space-y-6 lg:max-w-5xl lg:px-12 px-4">
            <div className="prose sm:prose-lg md:prose-xl text-slate-900 dark:text-slate-50 prose-strong:text-slate-900 dark:prose-strong:text-slate-50 font-light text-center">
              Hi, I&apos;m <strong>Milan</strong> — curiosity-driven{" "}
              <strong>Frontend developer & AI Enthusiast</strong> with{" "}
              <strong>2+ years</strong> of experience at{" "}
              <strong>Vega IT Solution</strong>, <strong>OMA Adriatic</strong>{" "}
              and <strong>HTEC</strong>. I specialize in crafting clean,
              user-friendly digital experiences. 🚀
            </div>
          </div>
        </div>
      </div>

      {/* portfolio */}
      <section
        className="w-full bg-slate-50 dark:bg-slate-800 scroll-mt-[92px]"
        id="portfolio"
      >
        <div className="container mx-auto grid grid-cols-1 gap-6 py-12 md:px-5 px-0">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-wider text-slate-800 dark:text-slate-100 sm:text-4xl">
              Recent projects
            </h2>
            <p className="mt-2 text-lg leading-8 text-slate-800 dark:text-slate-100">
              These projects are populated from my Sanity Studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
            {projects.map((project: PROJECTS_QUERYResult[0], index: number) => (
              <RevealOnScroll key={project._id} delay={index * 80}>
                <ProjectCard {...project} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-[92px]">
        <Footer />
      </section>

      <BackToTopButton />
    </>
  );
}
