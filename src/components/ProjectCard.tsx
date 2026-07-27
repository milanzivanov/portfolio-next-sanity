"use client";

import { Author } from "@/components/Author";
import { Categories } from "@/components/Categories";
import { PROJECTS_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/PublishedAt";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

import { motion } from "framer-motion";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  adjustFontFallback: false,
  preload: true
});

export function ProjectCard(
  props: PROJECTS_QUERYResult[0] & { priority?: boolean }
) {
  const {
    title,
    author,
    mainImage,
    publishedAt,
    categories,
    technologies,
    priority = false
  } = props;

  return (
    <Link
      className="group block rounded-2xl focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-black dark:focus-visible:outline-white"
      href={`/projects/${props.slug!.current}`}
    >
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-white/5 border border-black/8 dark:border-white/10 flex flex-col gap-0 rounded-2xl overflow-hidden"
      >
        {mainImage ? (
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src={urlFor(mainImage).width(800).height(450).url()}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              alt={mainImage.alt || title || ""}
              priority={priority}
              className="object-cover"
            />
          </div>
        ) : null}
        <div className="flex flex-col gap-3 p-6">
          <div className="flex flex-wrap gap-2">
            <Categories categories={categories} />
          </div>
          <h2
            className={`${poppins.className} text-2xl text-pretty font-semibold tracking-heading capitalize text-black dark:text-white transition-opacity duration-200 group-hover:opacity-70`}
          >
            {title}
          </h2>
          {technologies && technologies.length > 0 && (
            <p className="label-mono text-black/40 dark:text-white/40">
              {technologies
                .map((tech) => tech.name)
                .filter(Boolean)
                .join(" · ")}
            </p>
          )}
          <div className="flex items-center gap-x-6 pt-1">
            <Author author={author} />
            <PublishedAt publishedAt={publishedAt} />
          </div>
        </div>
      </motion.article>
    </Link>
  );
}
