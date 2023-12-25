import React from "react";
import Image from "next/image";
import BlogCover from "../../../public/images/rectangle-460.png";
import BlogItem from "../blogSection/blogItem";
import { BlogProps } from "@/hooks/blogs/types";
import { formatPostDate } from "@/utils/helpers";
import { useGetTrendingPosts } from "@/hooks/blogs";

const BlogDetailPage = ({ post }: { post: BlogProps }) => {
  const { data: trendingPosts } = useGetTrendingPosts();

  return (
    <section className="wrapper py-20">
      <div className="max-w-7xl mx-auto">
        <header className="text-[48px] font-semibold mb-[40px]">
          {post.title}
        </header>
        <div className="flex items-center justify-between mb-[53px]">
          <div className="flex items-center gap-2">
            <Image
              src="/images/avatar-2.png"
              alt="Avatar"
              width={40}
              height={40}
            />

            <div>
              <p className="">{post.author}</p>

              <div className="flex items-center text-[#696767] text-sm">
                {/* <p className="">Product Manager</p> */}
                <p className="">{formatPostDate(post.published)}</p>
                {/* <p className="">5 minutes read</p> */}
              </div>
            </div>
          </div>
          <p className="text-xs px-2 py-1 m-0 rounded-[18px] bg-[#BFE2E2] text-[#696767]">
            {post.category}
          </p>
        </div>

        <Image src={BlogCover} alt="Blog Cover" />

        <div className="mt-[40px]">{post.content}</div>

        <div className="mt-20">
          <h3 className="text-4xl font-bold mb-12">More Articles</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingPosts?.slice(0, 3).map((post) => (
              <BlogItem key={post.slug} blog={post} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailPage;
