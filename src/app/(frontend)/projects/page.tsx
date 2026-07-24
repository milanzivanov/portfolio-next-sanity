import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";

import { ProjectCard } from "@/components/ProjectCard";
import RevealOnScroll from "@/components/RevealOnScroll";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  adjustFontFallback: false,
  preload: true
});

export default async function Page() {
  const { data: projects } = await sanityFetch({
    query: PROJECTS_QUERY
  });

  return (
    <main className="bg-white dark:bg-black min-h-dvh pt-28 md:pt-24 xl:pt-32">
      <div className="container mx-auto px-6 md:px-10 py-12">
        <div className="mb-12 text-center">
          <p className="label-mono text-black/40 dark:text-white/40 mb-4">
            Selected Work
          </p>
          <h1
            className={`${poppins.className} tracking-heading text-4xl sm:text-5xl font-bold text-black dark:text-white`}
          >
            Portfolio
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <RevealOnScroll key={project._id} delay={index * 80}>
              <ProjectCard {...project} priority={index === 0} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </main>
  );
}
