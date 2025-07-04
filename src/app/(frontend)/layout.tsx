import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/DisableDraftMode";

import { SanityLive } from "@/sanity/lib/live";
import type { Metadata } from "next";

import Header from "@/components/Header";

import "./../globals.css";

import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Milan Portfolio",
  description:
    "Milan Zivanov - Frontend Developer - Welcome to my personal website and portfolio showcasing my past work. Explore and witness my frontend skills! Feel free to reach out for any inquiries or opportunities to collaborate. This is the portfolio made in next.js and it is my first next.js project but not last"
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

export default async function FrontendLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={`${inter.variable} bg-white text-black pt-24`}>
      <Header />
      <main className="">
        {children}
        <SanityLive />
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
      </main>
    </section>
  );
}
