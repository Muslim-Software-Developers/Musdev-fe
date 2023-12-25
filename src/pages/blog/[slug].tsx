import React from "react";
import BlogDetailPage from "@/components/blogDetailPage";
import { GetServerSideProps } from "next";
import axios from "axios";
import BlogApi from "@/api/blog";
import { BASE_URL } from "@/utils/constants";
import { BlogProps, GetSingleBlogResponse } from "@/hooks/blogs/types";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };

  const axiosInstance = axios.create({
    baseURL: `${BASE_URL}/api/v1`,
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  });
  const blog = new BlogApi(axiosInstance);
  const { data } = await blog.getSinglePost<GetSingleBlogResponse>(slug);

  return {
    props: {
      post: data?.data,
    },
  };
};

const Blog = ({ post }: { post: BlogProps }) => {
  return <BlogDetailPage post={post} />;
};

export default Blog;
