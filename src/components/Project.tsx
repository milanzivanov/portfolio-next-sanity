import { Author } from "@/components/Author";
import { Categories } from "@/components/Categories";
import { components } from "@/sanity/portableTextComponents";
import { PortableText } from "next-sanity";
import { PROJECT_QUERYResult } from "@/sanity/types";
import { PublishedAt } from "@/components/PublishedAt";
import { Title } from "@/components/Title";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export function Project(props: NonNullable<PROJECT_QUERYResult>) {
  const { title, author, mainImage, body, publishedAt, categories } = props;

  return (
    <article className="bg-slate-50 p-2 rounded-lg">
      <header className="flex flex-col gap-4 items-start mb-8">
        <div className="flex gap-4 items-center">
          <Categories categories={categories} />
          <PublishedAt publishedAt={publishedAt} />
        </div>
        <Title>{title}</Title>
        <Author author={author} />
      </header>
      <div className="flex flex-col lg:flex-row gap-8">
        {mainImage && (
          <figure className="w-full lg:w-1/2 flex flex-col gap-2 items-start">
            <Image
              src={urlFor(mainImage).width(800).height(500).url()}
              width={800}
              height={500}
              alt={title || "no alt provided"}
              className="rounded-lg w-full h-auto"
            />
          </figure>
        )}
        {body && (
          <div className="prose lg:prose-lg w-full lg:w-1/2">
            <PortableText value={body} components={components} />
          </div>
        )}
      </div>
    </article>
  );
}
