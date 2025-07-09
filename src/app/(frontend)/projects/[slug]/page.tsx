import { sanityFetch } from "@/sanity/lib/live";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import { Project } from "@/components/Project";

import type { Metadata } from "next";

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { data: project } = await sanityFetch({
    query: PROJECT_QUERY,
    params
  });

  return {
    title: project?.title
      ? `Milan Portfolio - ${project.title}`
      : "Milan Portfolio"
  };
}

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
    <main className="container mx-auto grid grid-cols-1 py-4 px-0">
      <Project {...project} />
    </main>
  );
}
