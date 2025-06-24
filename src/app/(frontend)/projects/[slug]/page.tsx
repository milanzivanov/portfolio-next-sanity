import { sanityFetch } from "@/sanity/lib/live";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { data: project } = await sanityFetch({
    query: PROJECT_QUERY,
    params: await params
  });

  if (!project) {
    notFound();
  }

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      {project?.mainImage ? (
        <Image
          className="flex aspect-[800/400]"
          src={urlFor(project.mainImage)
            .width(800)
            .height(400)
            .quality(80)
            .auto("format")
            .url()}
          alt={project?.mainImage?.alt || ""}
          width="800"
          height="400"
        />
      ) : null}
      <h1 className="text-4xl font-bold text-balance">{project?.title}</h1>
      <hr />
      <Link href="/projects">&larr; Return to projects</Link>
    </main>
  );
}
