import { PROJECT_QUERYResult } from "@/sanity/types";
import dayjs from "dayjs";

type PublishedAtProps = {
  publishedAt: NonNullable<PROJECT_QUERYResult>["publishedAt"];
};

export function PublishedAt({ publishedAt }: PublishedAtProps) {
  return publishedAt ? (
    <p className="text-base text-slate-800 dark:text-slate-50">
      {dayjs(publishedAt).format("D MMMM YYYY")}
    </p>
  ) : null;
}
