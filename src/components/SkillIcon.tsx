import {
  SiClerk,
  SiCss3,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiReact,
  SiSanity,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel
} from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import type { IconType } from "react-icons";

import { Skill } from "@/sanity/types";

const icons: Record<NonNullable<Skill["icon"]>, IconType> = {
  react: SiReact,
  nextdotjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwindcss: SiTailwindcss,
  html5: SiHtml5,
  css3: SiCss3,
  nodedotjs: SiNodedotjs,
  sanity: SiSanity,
  supabase: SiSupabase,
  prisma: SiPrisma,
  clerk: SiClerk,
  git: SiGit,
  github: SiGithub,
  figma: SiFigma,
  vercel: SiVercel,
  ai: LuBrainCircuit
};

export function SkillIcon({ icon }: { icon?: Skill["icon"] | null }) {
  if (!icon) return null;

  const Icon = icons[icon];
  return <Icon className="h-3.5 w-3.5" aria-hidden="true" />;
}
