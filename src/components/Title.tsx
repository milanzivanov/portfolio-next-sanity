"use client";

import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type TitleProps = PropsWithChildren<{
  size?: "sm" | "md" | "lg";
  text?: "uppercase" | "lowercase" | "capitalize";
}>;

const sizeClasses = {
  sm: "text-xl md:text-2xl lg:text-3xl",
  md: "text-2xl md:text-3xl lg:text-4xl",
  lg: "text-2xl md:text-4xl lg:text-5xl"
};

export function Title({
  children,
  size = "md",
  text = "capitalize"
}: TitleProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className={`${sizeClasses[size]} ${text} font-extrabold tracking-widest text-slate-900`}
    >
      {children}
    </motion.h1>
  );
}
