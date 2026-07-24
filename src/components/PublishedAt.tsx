import { PROJECT_QUERYResult } from "@/sanity/types";
import dayjs from "dayjs";

type PublishedAtProps = {
  publishedAt: NonNullable<PROJECT_QUERYResult>["publishedAt"];
};

export function PublishedAt({ publishedAt }: PublishedAtProps) {
  return publishedAt ? (
    <p className="label-mono text-black/40 dark:text-white/40">
      {dayjs(publishedAt).format("D MMMM YYYY")}
    </p>
  ) : null;
}
