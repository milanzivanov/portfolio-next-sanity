import { PROJECT_QUERYResult } from "@/sanity/types";

type CategoriesProps = {
  categories: NonNullable<PROJECT_QUERYResult>["categories"];
};

export function Categories({ categories }: CategoriesProps) {
  return categories.map((category) => (
    <span
      key={category._id}
      className="bg-cyan-50 rounded-full px-2 py-2 leading-none whitespace-nowrap text-sm font-semibold text-cyan-700"
    >
      {category.title}
    </span>
  ));
}
