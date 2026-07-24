import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";

function BackToHome() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 w-full md:w-auto justify-center rounded-full bg-black dark:bg-white text-white dark:text-black hover:opacity-85 transition-opacity duration-200 px-6 py-3 text-sm font-medium focus-visible:outline-dashed focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-black dark:focus-visible:outline-white"
    >
      <FaArrowCircleLeft className="size-4" aria-hidden="true" />
      <span>Back home</span>
    </Link>
  );
}
export default BackToHome;
