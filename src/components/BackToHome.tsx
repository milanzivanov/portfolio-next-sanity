import Link from "next/link";
import { FaArrowCircleLeft } from "react-icons/fa";

function BackToHome() {
  return (
    <>
      <Link
        href="/"
        className="flex items-center w-full md:w-auto justify-center rounded-md bg-blue-500 dark:bg-blue-700 hover:bg-blue-800 text-gray-100 px-6 py-3 text-sm md:text-md"
      >
        <FaArrowCircleLeft className="size-5 mr-2" />

        <span>Back home</span>
      </Link>
    </>
  );
}
export default BackToHome;
