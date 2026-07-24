"use client";

import { PropsWithChildren } from "react";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  adjustFontFallback: false,
  preload: true
});

type TitleProps = PropsWithChildren<{
  size?: "sm" | "md" | "lg" | "xl";
  text?: "uppercase" | "lowercase" | "capitalize";
  bold?: "normal" | "bold" | "semibold" | "extrabold";
}>;

const sizeClasses = {
  sm: "text-xl md:text-2xl lg:text-3xl",
  md: "text-2xl md:text-3xl lg:text-4xl",
  lg: "text-2xl md:text-4xl lg:text-5xl",
  xl: "text-3xl md:text-5xl lg:text-6xl"
};

const boldClasses = {
  normal: "font-normal",
  bold: "font-bold",
  semibold: "font-semibold",
  extrabold: "font-extrabold"
};

export function Title({
  children,
  size = "md",
  text = "capitalize",
  bold = "bold"
}: TitleProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className={`${poppins.className} ${sizeClasses[size]} ${text} ${boldClasses[bold]} tracking-heading text-black dark:text-white`}
    >
      {children}
    </motion.h1>
  );
}
