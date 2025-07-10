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
    <>
      <article className="bg-slate-50 dark:bg-slate-800 shadow-md p-5 md:rounded-lg">
        <header className="flex flex-col gap-4 items-start mb-8">
          <div className="flex gap-4 items-center">
            <Categories categories={categories} />
            <PublishedAt publishedAt={publishedAt} />
          </div>
          <Title size="md" text="capitalize" bold="bold">
            {title}
          </Title>
          <Author author={author} />
          {url && (
            <Link
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-blue-600 dark:text-slate-50"
            >
              View it live &rarr;
            </Link>
          )}
        </header>
        <div className="flex flex-col lg:flex-row gap-8 bg-slate-100 dark:bg-slate-900 p-5 rounded-lg">
          {mainImage && (
            <figure className="w-full lg:w-1/2 flex flex-col gap-2 items-start">
              <Image
                src={urlFor(mainImage).width(800).height(500).url()}
                width={800}
                height={500}
                alt={title || "no alt provided"}
                className="rounded-lg w-full shadow-md h-auto"
              />
            </figure>
          )}
          {body && (
            <div className="prose lg:prose-lg w-full lg:w-1/2 text-slate-800 dark:text-slate-50 prose-a:text-blue-600 dark:prose-a:text-yellow-400">
              <PortableText value={body} components={components} />
            </div>
          )}
        </div>
        <div className="flex justify-end pt-5">
          <BackToHome />
        </div>
      </article>
    </>
  );
}
