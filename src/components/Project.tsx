import { Author } from "@/components/Author";
import { Categories } from "@/components/Categories";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
import { PROJECT_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/PublishedAt";
import { Title } from "@/components/Title";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import BackToHome from "./BackToHome";

export function Project(props: NonNullable<PROJECT_QUERYResult>) {
  const { title, author, mainImage, body, publishedAt, categories, url } =
    props;

  return (
    <article className="bg-slate-200 dark:bg-white/5 border border-black/8 dark:border-white/10 rounded-3xl p-5 md:p-10">
      <header className="flex flex-col gap-4 items-start mb-8">
        <div className="flex flex-wrap gap-2">
          <Categories categories={categories} />
        </div>
        <Title size="md" text="capitalize" bold="bold">
          {title}
        </Title>
        <div className="flex items-center gap-x-6">
          <Author author={author} />
          <PublishedAt publishedAt={publishedAt} />
        </div>
        {url && (
          <Link
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 underline underline-offset-2 text-black dark:text-white hover:opacity-60 transition-opacity duration-200 focus-dashed rounded-sm"
          >
            View it live &rarr;
          </Link>
        )}
      </header>
      <div className="flex flex-col lg:flex-row gap-8">
        {mainImage && (
          <figure className="w-full lg:w-1/2 flex flex-col gap-2 items-start">
            <Image
              src={urlFor(mainImage).width(800).height(500).url()}
              width={800}
              height={500}
              alt={title || "no alt provided"}
              className="rounded-2xl w-full h-auto"
            />
          </figure>
        )}
        {body && (
          <div className="prose lg:prose-lg dark:prose-invert w-full lg:w-1/2 prose-a:text-black dark:prose-a:text-white">
            <PortableText value={body} components={components} />
          </div>
        )}
      </div>
      <div className="flex justify-end pt-8">
        <BackToHome />
      </div>
    </article>
  );
}
