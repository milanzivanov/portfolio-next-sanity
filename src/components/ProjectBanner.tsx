"use client";

import { PROJECTS_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  adjustFontFallback: false,
  preload: true
});

export function ProjectBanner(
  props: PROJECTS_QUERYResult[0] & { index: number; priority?: boolean }
) {
  const { title, mainImage, categories, index, priority = false } = props;
  const isOdd = index % 2 === 1;

  return (
    <Link
      href={`/projects/${props.slug!.current}`}
      className={`group focus-dashed relative block h-[300px] w-full overflow-hidden rounded-2xl bg-black sm:h-[360px] md:h-[420px] md:w-[92%] md:rounded-3xl ${
        isOdd ? "md:ml-0 md:mr-auto" : "md:mr-0 md:ml-auto"
      }`}
    >
      {mainImage ? (
        <Image
          src={urlFor(mainImage).width(1600).height(900).url()}
          fill
          sizes="100vw"
          alt={mainImage.alt || title || ""}
          priority={priority}
          className="object-contain object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-black/80" />
      )}

      {/* base overlay — keeps text legible at rest */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

      {/* hover overlay — solid brand indigo tint */}
      <div className="absolute inset-0 bg-[#4f46e5] opacity-0 transition-opacity duration-500 group-hover:opacity-80" />

      {/* large index number — only on hover */}
      <span
        className={`${poppins.className} pointer-events-none absolute top-2 select-none text-8xl font-extrabold leading-none text-white opacity-0 transition-opacity duration-500 group-hover:opacity-20 sm:text-9xl ${
          isOdd ? "left-4 md:left-8" : "right-4 md:right-8"
        }`}
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-6 text-white md:p-10">
        <h3
          className={`${poppins.className} text-2xl capitalize tracking-heading sm:text-3xl md:text-4xl font-bold`}
        >
          {title}
        </h3>
        {categories && categories.length > 0 && (
          <p className="mt-1.5 italic tracking-body text-white/70">
            {categories.map((category) => category.title).join(" · ")}
          </p>
        )}

        <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition-colors duration-300 group-hover:bg-black group-hover:text-white">
          View Project
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden="true"
          >
            <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
