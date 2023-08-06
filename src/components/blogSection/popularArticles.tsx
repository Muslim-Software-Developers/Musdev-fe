import React from "react";
import Button from "../button";
import BlogItem from "./blogItem";

const PopularArticles = () => {
  return (
    <section className="wrapper my-[5rem]">
      <h2 className="text-4xl font-bold mb-10">Popular Articles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>

      <div className="mt-10 text-right">
        <Button variant="outline">View more</Button>
      </div>
    </section>
  );
};

export default PopularArticles;
