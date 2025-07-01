import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { Title } from "@/components/Title";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { PROJECTS_QUERYResult } from "@/sanity/types";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";

export default async function Page() {
  const { data: projects } = await sanityFetch({
    query: PROJECTS_QUERY
  });

  return (
    <>
      <div className="flex flex-col relative min-h-[calc(100vh-96px)]">
        {/* <div className="flex-1 flex justify-center items-center relative bg-[url(/tile-1-black.png)] bg-size-[5px]"> */}
        <div className="flex-1 flex justify-center items-center relative bg-[url(/bg.webp)] bg-cover">
          <div className=" bg-gradient-to-b from-white w-full h-full absolute top-0"></div>
          {/* top */}
          <div className="container">
            <div className="relative mx-auto max-w-2xl space-y-6 lg:max-w-4xl lg:px-12 flex flex-col items-center justify-center">
              <div className="flex flex-col pb-[96px] gap-4 items-center">
                <div className="text-md leading-6 uppercase py-1 px-3 bg-white font-mono italic">
                  Mister Zivanov
                </div>
                <Title size="lg" text="uppercase">
                  Frontend Developer
                </Title>
                <Link
                  className="rounded-full flex gap-4 items-center bg-black hover:bg-blue focus:bg-blue py-2 px-4 justify-center sm:py-3 sm:px-6 text-white transition-colors duration-200"
                  href="#portfolio"
                  rel="noopener noreferrer"
                >
                  <span className="whitespace-nowrap">View portfolio</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 ml-1 inline"
                    fill="currentColor"
                  >
                    <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="container flex flex-col relative mx-auto max-w-2xl pb-20 pt-10 space-y-6 lg:max-w-4xl lg:px-12">
            <div className="prose sm:prose-lg text-gray-700 prose-a:text-gray-700 font-light text-center">
              Hi, I&apos;m <strong>Milan</strong> Curiosity driven{" "}
              <strong>Frontend developer</strong> with 2+ years of experience at
              Vega IT Solution(two-week internship), OMA Adriatic, and HTEC, I
              specialize in crafting clean, user-friendly digital experiences.
              🚀
              {/* {settings?.description && (
                <PortableText value={settings.description} />
              )} */}
            </div>
          </div>
        </div>
      </div>

      {/* portfolio */}
      <section className="w-full bg-gray-50 scroll-mt-[92px]" id="portfolio">
        <div className="container flex items-center justify-center">
          <div className="container mx-auto grid grid-cols-1 gap-6 py-12 px-0">
            <div className="px-10 md:px-0">
              <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
                Portfolio
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-600">
                These projects are populated from my Sanity Studio.
              </p>
            </div>
            <div className="flex flex-col gap-12">
              {projects.map((project: PROJECTS_QUERYResult[0]) => (
                <ProjectCard key={project._id} {...project} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTopButton />
    </>
  );
}
