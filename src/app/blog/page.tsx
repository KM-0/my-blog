import { PostCard } from "@/components/parts/PostCard";
import { client } from "@/lib/client";
import { BlogType } from "@/types/blog";

export default async function Home() {
  const data = await client.getList<BlogType>({
    endpoint: "blogs",
  });

  return (
    <div className="mt-14 w-full md:mt-20 xl:w-10/12">
      <div>
        <h1 className="animate-track-in-animation text-3xl font-bold md:text-4xl">
          Blog
        </h1>
      </div>
      {data.contents.length === 0 ? (
        <p className="font-bold text-gray-200">データがありません</p>
      ) : (
        <div className="my-4 grid animate-track-in-animation-item grid-cols-1 gap-1 md:my-8 md:grid-cols-2 xl:grid-cols-3 ">
          {data.contents.map((content) => {
            return <PostCard key={content.id} content={content} />;
          })}
        </div>
      )}
    </div>
  );
}
