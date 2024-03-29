import { BlogType } from "@/types/blog";
import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import Link from "next/link";

type Props = { content: BlogType & MicroCMSContentId & MicroCMSDate };

export const PostCard = ({ content }: Props) => {
  return (
    <article className="relative overflow-hidden mx-3 mb-3 h-52 transition-all duration-500 md:mb-6 md:h-64 lg:hover:scale-105 rounded-xl border">
      <Link
        key={content.id}
        href={`/blog/detail/${content.id}`}
        className="absolute inset-0"
      />
      <div className="flex h-3/5 w-full flex-col items-center justify-center bg-green-200 p-3">
        <h3 className="block p-2 text-3xl">{content.icon}</h3>
        <p className="block font-bold">{content.title}</p>
      </div>
      <div className="flex h-2/5 flex-col justify-around px-4 py-2">
        <p>{dayjs(content.publishedAt).format("YYYY.MM.DD")}</p>
        <div className="scrolling-touch flex overflow-x-auto whitespace-nowrap">
          {content.category.map((cate) => {
            return (
              <>
                <Link
                  key={cate.id}
                  href={`/blog/categories/${cate.id}`}
                  className="no-underline absolute"
                />
                <div
                  key={cate.id}
                  className="mr-1 flex items-center rounded-xl border bg-gray-200 px-2 py-1 transition-all duration-500 lg:hover:opacity-60"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-1 h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 6h.008v.008H6V6z"
                    />
                  </svg>

                  <p className="text-xs">{cate.name}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </article>
  );
};
