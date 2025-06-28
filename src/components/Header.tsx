import Image from "next/image";
import Link from "next/link";

// import { settingsQuery } from "@/sanity/lib/queries";
// import { sanityFetch } from "@/sanity/lib/live";

export default function Header() {
  // const { data: settings } = await sanityFetch({
  //   query: settingsQuery
  // });

  return (
    <header className="fixed z-50 h-24 inset-0 bg-white/80 flex items-center backdrop-blur-lg">
      <div className="container py-6 px-2">
        <div className="flex items-center justify-between gap-5">
          <Link className="flex items-center gap-2" href="/">
            <span className="text-lg sm:text-2xl pl-2 font-semibold">
              <Image width={32} height={32} src="/logo.png" alt="logo" />
            </span>
          </Link>

          <nav>
            <ul
              role="list"
              className="flex items-center gap-4 md:gap-6 leading-5 text-xs sm:text-base tracking-tight font-mono"
            >
              <li>
                <Link href="/about" className="hover:underline">
                  About
                </Link>
              </li>

              <li className="sm:before:w-[1px] sm:before:bg-gray-200 before:block flex sm:gap-4 md:gap-6">
                <Link
                  className="rounded-full flex gap-4 items-center bg-black hover:bg-blue focus:bg-blue py-2 px-4 justify-center sm:py-3 sm:px-6 text-white transition-colors duration-200"
                  href="/projects"
                  rel="noopener noreferrer"
                >
                  <span className="whitespace-nowrap">View projects</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 ml-1 inline"
                    fill="currentColor"
                  >
                    <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V12L17.206 8.207L11.2071 14.2071L9.79289 12.7929L15.792 6.793L12 3H21Z"></path>
                  </svg>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

// export function Header() {
//   return (
//     <div className="from-pink-50 to-white bg-gradient-to-b p-6">
//       <header className="bg-white/80 shadow-md flex items-center justify-between p-6 rounded-lg container mx-auto shadow-pink-50">
//         <Link
//           className="text-pink-700 md:text-xl font-bold tracking-tight"
//           href="/"
//         >
//           <Image width={32} height={32} src="/logo.png" alt="logo" />
//         </Link>
//         <ul className="flex items-center gap-4 font-semibold text-slate-700">
//           <li>
//             <Link className="hover:text-pink-500 transition-colors" href="/">
//               home
//             </Link>
//           </li>
//           <li>
//             <Link
//               className="hover:text-pink-500 transition-colors"
//               href="/projects"
//             >
//               projects
//             </Link>
//           </li>
//           <li>
//             <Link
//               className="hover:text-pink-500 transition-colors"
//               href="/studio"
//             >
//               sanity studio
//             </Link>
//           </li>
//         </ul>
//       </header>
//     </div>
//   );
// }
