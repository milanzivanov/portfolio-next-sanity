import { Title } from "@/components/Title";
import Image from "next/image";
import Link from "next/link";

// import aboutImage from "../../../../public/coding-about.webp";
import personalPicture from "../../../../public/Milan_right.webp";
import BackToHome from "@/components/BackToHome";

export const metadata = {
  title: "About page"
};

function AboutPage() {
  return (
    <>
      <div className="w-full min-h-[calc(100dvh-96px)] flex flex-col items-center justify-center">
        <div className="max-w-5xl mx-auto">
          <div className="w-full flex flex-col-reverse md:gap-5 md:flex-row-reverse">
            <div className="relative bg-slate-100 flex flex-col justify-center md:rounded-md md:shadow-md space-y-1 md:space-y-3 p-5">
              <Title size="sm" text="capitalize">
                Bit about myself
              </Title>
              <p className="text-slate-800 text-base 2xl:text-lg">
                Hi, I&apos;m Milan an enthusiastic front-end developer with 2+
                years of experience at{" "}
                <Link
                  href="https://www.vegaitglobal.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-500 hover:text-blue-600 transition-colors duration-300 ease-in-out"
                >
                  Vega IT Solution
                </Link>
                (two-week internship),{" "}
                <Link
                  href="https://omadriatic.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-500 hover:text-blue-600 transition-colors duration-300 ease-in-out"
                >
                  OMA Adriatic
                </Link>
                , and{" "}
                <Link
                  href="https://htec.rs/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-500 hover:text-blue-600 transition-colors duration-300 ease-in-out"
                >
                  HTEC
                </Link>
                , I specialize in crafting clean, user-friendly digital
                experiences.
              </p>
              <p className="text-slate-800 text-base 2xl:text-lg">
                This is my little corner of the internet where I share my
                thoughts and ideas. Let&apos;s connect I&apos;m open to
                freelance opportunities and always eager to learn.
              </p>
              <p className="text-slate-800 text-base 2xl:text-lg">
                Focused on mastering{" "}
                <span className="font-semibold text-blue-500">Next.js</span> as
                my core frontend framework and building my next career chapter
                around it, while also leveraging{" "}
                <span className="font-semibold text-blue-500">Sanity</span> as a
                flexible and powerful headless CMS for content-driven
                applications. 🚀
              </p>
            </div>
            <div className="relative md:max-w-[450px] flex bg-slate-100 md:rounded-md md:shadow-md">
              <Image
                className="object-cover"
                src={personalPicture}
                alt="Family sitting around a fire pit in front of cabin"
                quality={80}
              />
            </div>
          </div>
          <div className="flex justify-end md:pt-5">
            <BackToHome />
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutPage;
