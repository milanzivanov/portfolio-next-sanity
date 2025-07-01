import { PROJECT_QUERYResult } from "@/sanity/types";

type CategoriesProps = {
  categories: NonNullable<PROJECT_QUERYResult>["categories"];
};

export function Categories({ categories }: CategoriesProps) {
  return categories.map((category) => (
    <span
      key={category._id}
      className="bg-blue-100 rounded-full px-3 py-1 leading-none whitespace-nowrap text-sm font-semibold text-slate-700"
    >
      {category.title}
    </span>
  ));
}
