import { PROJECT_QUERYResult } from "@/sanity/types";

type CategoriesProps = {
  categories: NonNullable<PROJECT_QUERYResult>["categories"];
};

export function Categories({ categories }: CategoriesProps) {
  return categories.map((category) => (
    <span
      key={category._id}
      className="label-mono text-black/60 dark:text-white/60 py-1 px-3 rounded-full border border-black/15 dark:border-white/15"
    >
      {category.title}
    </span>
  ));
}
