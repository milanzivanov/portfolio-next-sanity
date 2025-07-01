import { Author } from "@/components/Author";
import { Categories } from "@/components/Categories";
import { PROJECTS_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/PublishedAt";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard(props: PROJECTS_QUERYResult[0]) {
  const { title, author, mainImage, publishedAt, categories, technologies } =
    props;

  return (
    <Link className="group" href={`/projects/${props.slug!.current}`}>
      <article className="group bg-slate-50 shadow-md p-10 flex flex-col-reverse gap-6 md:grid md:grid-cols-12 md:gap-4 rounded-lg transition-colors hover:bg-white">
        <div className="md:col-span-8 flex flex-col gap-2">
          <div className="md:pt-1">
            <Categories categories={categories} />
          </div>
          <h2 className="text-2xl text-pretty font-semibold text-slate-800 group-hover:text-blue-600 transition-colors relative">
            <span className="relative z-[1]">{title}</span>
            <span className="z-0 absolute inset-0 rounded-lg opacity-0 transition-all group-hover:opacity-100 group-hover:scale-y-110 group-hover:scale-x-105 scale-75"></span>
          </h2>
          {technologies && technologies.length > 0 && (
            <div className="flex">
              <span className="text-sm text-slate-600">
                (
                {technologies
                  .map((tech) => tech.name)
                  .filter(Boolean)
                  .join(", ")}
                )
              </span>
            </div>
          )}
          <div className="flex items-center gap-x-6">
            <Author author={author} />
            <PublishedAt publishedAt={publishedAt} />
          </div>
        </div>
        <div className="relative md:col-span-4 rounded-lg shadow-md overflow-hidden">
          <div className="w-full h-full absolute top-0 bg-slate-100/30 group-hover:bg-transparent transition-colors"></div>

          {mainImage ? (
            <Image
              src={urlFor(mainImage).width(500).height(300).url()}
              width={500}
              height={300}
              alt={mainImage.alt || title || ""}
              className="w-full h-auto"
            />
          ) : null}
        </div>
      </article>
    </Link>
  );
}
