import React from "react";
import { useGetFeaturedPosts } from "@/hooks/blogs";
import FeaturedBlogItem from "./featuredBlogItem";
import Link from "next/link";

const Banner = () => {
  const { isLoading, data } = useGetFeaturedPosts();

  if (isLoading) {
    return (
      <div className="h-40 text-center">
        <p className="text-bold text-2xl">Loading...</p>
      </div>
    );
  }

  return (
    <section className="wrapper my-[5rem]">
      <div className="max-w-7xl mx-auto">
        {data?.map((blog) => (
          <Link key={blog.slug} href={`/blog/${blog.slug}`}>
            <FeaturedBlogItem post={blog} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Banner;
