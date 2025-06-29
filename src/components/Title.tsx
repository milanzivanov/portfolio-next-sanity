import { PropsWithChildren } from "react";

type TitleProps = PropsWithChildren<{
  size?: "sm" | "md" | "lg";
}>;

const sizeClasses = {
  sm: "text-xl md:text-2xl lg:text-3xl",
  md: "text-2xl md:text-3xl lg:text-4xl",
  lg: "text-3xl md:text-4xl lg:text-5xl"
};

export function Title({ children, size = "md" }: TitleProps) {
  return (
    <h1
      className={`${sizeClasses[size]} font-bold tracking-widest text-slate-800`}
    >
      {children}
    </h1>
  );
}
