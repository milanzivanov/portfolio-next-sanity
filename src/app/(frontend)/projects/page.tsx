import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { PROJECTS_QUERYResult } from "@/sanity/types";

import { ProjectCard } from "@/components/ProjectCard";
import { Title } from "@/components/Title";

export default async function Page() {
  const { data: projects } = await sanityFetch({
    query: PROJECTS_QUERY
  });

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <Title>Projects portfolio</Title>
      <div className="flex flex-col gap-12">
        {projects.map((project: PROJECTS_QUERYResult[0]) => (
          <ProjectCard key={project._id} {...project} />
        ))}
      </div>
    </main>
  );
}
