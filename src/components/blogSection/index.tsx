import React from "react";
import BlogHero from "./hero";
import Banner from "./banner";
import PopularArticles from "./popularArticles";

const BlogSection = () => {
  return (
    <>
      <BlogHero />
      <Banner />
      <PopularArticles />
      <PopularArticles />
    </>
  );
};

export default BlogSection;
