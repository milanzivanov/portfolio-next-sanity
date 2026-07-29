"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import { PROJECTS_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import { SkillIcon } from "@/components/SkillIcon";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  adjustFontFallback: false,
  preload: true
});

type Project = PROJECTS_QUERYResult[number];

const SLIDE_WIDTH =
  "w-[84%] sm:w-[70%] md:w-[58%] lg:w-[46%]";

function wrappedOffset(index: number, active: number, count: number) {
  let offset = index - active;
  if (offset > count / 2) offset -= count;
  if (offset < -count / 2) offset += count;
  return offset;
}

function slideClasses(offset: number) {
  const base = `absolute inset-0 m-auto h-full ${SLIDE_WIDTH} transition-all duration-500 ease-out`;

  if (offset === 0) {
    return `${base} z-20 scale-100 opacity-100`;
  }
  if (offset === -1) {
    return `${base} z-10 -translate-x-[80%] sm:-translate-x-[76%] md:-translate-x-[72%] scale-90 opacity-45 hover:opacity-70 cursor-pointer`;
  }
  if (offset === 1) {
    return `${base} z-10 translate-x-[80%] sm:translate-x-[76%] md:translate-x-[72%] scale-90 opacity-45 hover:opacity-70 cursor-pointer`;
  }
  return `${base} z-0 opacity-0 pointer-events-none ${offset < 0 ? "-translate-x-[160%]" : "translate-x-[160%]"}`;
}

function SlideContent({ project }: { project: Project }) {
  const { title, mainImage, categories, technologies } = project;

  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl bg-black">
      {mainImage ? (
        <Image
          src={urlFor(mainImage).width(1200).height(800).url()}
          fill
          sizes="(min-width: 768px) 58vw, 84vw"
          alt={mainImage.alt || title || ""}
          className="object-cover"
        />
      ) : null}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 text-white">
        {categories && categories.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2">
            {categories.map((category) => (
              <span
                key={category._id}
                className="label-mono rounded-full border border-white/25 bg-white/10 px-3 py-1 backdrop-blur"
              >
                {category.title}
              </span>
            ))}
          </div>
        )}

        <h3
          className={`${poppins.className} text-xl capitalize tracking-heading sm:text-2xl md:text-3xl font-bold`}
        >
          {title}
        </h3>

        {technologies && technologies.length > 0 && (
          <div className="label-mono mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-white/70">
            {technologies.map((tech) => (
              <span key={tech._id} className="inline-flex items-center gap-1.5">
                <SkillIcon icon={tech.icon} />
                {tech.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function ProjectsSlider({ projects }: { projects: PROJECTS_QUERYResult }) {
  const [active, setActive] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const count = projects.length;

  const goTo = (index: number) => setActive(((index % count) + count) % count);
  const prev = () => goTo(active - 1);
  const next = () => goTo(active + 1);

  if (count === 0) return null;

  return (
    <div
      className="relative w-full outline-none"
      tabIndex={0}
      role="region"
      aria-label="Projects slider"
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
      }}
      onTouchStart={(e) => {
        touchStartX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const delta = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(delta) > 50) {
          if (delta > 0) prev();
          else next();
        }
        touchStartX.current = null;
      }}
    >
      <div className="relative h-[380px] sm:h-[420px] md:h-[480px] xl:h-[520px]">
        {projects.map((project, index) => {
          const offset = wrappedOffset(index, active, count);
          const isCenter = offset === 0;

          return isCenter ? (
            <Link
              key={project._id}
              href={`/projects/${project.slug!.current}`}
              className={slideClasses(offset)}
              aria-label={`Open project ${project.title}`}
            >
              <SlideContent project={project} />
            </Link>
          ) : (
            <button
              key={project._id}
              type="button"
              onClick={() => goTo(index)}
              className={slideClasses(offset)}
              aria-label={`Show project ${project.title}`}
              tabIndex={Math.abs(offset) <= 1 ? 0 : -1}
            >
              <SlideContent project={project} />
            </button>
          );
        })}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Previous project"
            className="absolute left-2 top-1/2 z-30 -translate-y-1/2 rounded-full border border-black/10 bg-white/90 p-2 text-black shadow-sm transition-opacity hover:opacity-80 dark:border-white/15 dark:bg-black/60 dark:text-white md:left-6"
          >
            <LuChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next project"
            className="absolute right-2 top-1/2 z-30 -translate-y-1/2 rounded-full border border-black/10 bg-white/90 p-2 text-black shadow-sm transition-opacity hover:opacity-80 dark:border-white/15 dark:bg-black/60 dark:text-white md:right-6"
          >
            <LuChevronRight className="h-5 w-5" />
          </button>

          <div className="mt-6 flex justify-center gap-2">
            {projects.map((project, index) => (
              <button
                key={project._id}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to ${project.title}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === active
                    ? "w-6 bg-black dark:bg-white"
                    : "w-2 bg-black/20 dark:bg-white/20"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
