import React from "react";
import Button from "../button";
import BlogItem from "./blogItem";
import { useGetAllPosts } from "@/hooks/blogs";

const PopularArticles = () => {
  const { isLoading, data } = useGetAllPosts();

  if (isLoading) {
    return (
      <div className="h-40 text-center">
        <p className="text-bold text-2xl">Loading...</p>
      </div>
    );
  }

  return (
    <section className="wrapper my-[5rem]">
      <h2 className="text-4xl font-bold mb-10">Popular Articles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map((blog) => (
          <BlogItem key={blog.slug} blog={blog} />
        ))}
      </div>

      <div className="mt-10 text-right">
        <Button variant="outline">View more</Button>
      </div>
    </section>
  );
};

export default PopularArticles;
