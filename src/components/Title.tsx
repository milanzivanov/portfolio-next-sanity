import { PropsWithChildren } from "react";

export function Title(props: PropsWithChildren) {
  return (
    <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-widest text-slate-800">
      {props.children}
    </h1>
  );
}
