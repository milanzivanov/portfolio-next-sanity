import { cookies, draftMode } from "next/headers";
import { VisualEditing } from "next-sanity";
import { DisableDraftMode } from "@/components/DisableDraftMode";

import { SanityLive } from "@/sanity/lib/live";
import type { Metadata } from "next";

import { SpeedInsights } from "@vercel/speed-insights/next";

import Header from "@/components/Header";
import { Inter } from "next/font/google";

import "../globals.css";

export const metadata: Metadata = {
  title: "Portfolio of Milan Zivanov — Frontend Developer",
  description:
    "Portfolio of Milan Zivanov — Frontend Developer specializing in Next.js, React, and AI-assisted development."
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
  const isAdmin = (await cookies()).get("admin_session")?.value === "1";

  return (
    <section className={`${inter.variable} bg-white dark:bg-black pt-0`}>
      <main className="">
        <Header isAdmin={isAdmin} />
        {children}
        <SanityLive />
        {(await draftMode()).isEnabled && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
      </main>
      <SpeedInsights />
    </section>
  );
}
