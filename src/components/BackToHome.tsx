import Link from "next/link";

function BackToHome() {
  return (
    <div className="flex justify-end">
      <Link
        className="text-blue-500 dark:text-slate-50 pt-1 pr-5 md:pr-0"
        href="/"
      >
        &larr; Back home
      </Link>
    </div>
  );
}
export default BackToHome;
