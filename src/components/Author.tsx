import { PROJECT_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

type AuthorProps = {
  author: NonNullable<PROJECT_QUERYResult>["author"];
};

export function Author({ author }: AuthorProps) {
  return author?.image || author?.name ? (
    <div className="flex items-center gap-2">
      {author?.image ? (
        <Image
          src={urlFor(author.image).width(80).height(80).url()}
          width={80}
          height={80}
          alt={author.name || ""}
          className="bg-black/5 dark:bg-white/8 size-10 rounded-full"
        />
      ) : null}
      {author?.name ? (
        <p className="text-base tracking-body text-black/70 dark:text-white/70">
          {author.name}
        </p>
      ) : null}
    </div>
  ) : null;
}
