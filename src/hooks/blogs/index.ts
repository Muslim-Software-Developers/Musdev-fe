import api from "@/api";
import useGenericMutation from "../useGenericMutation";
import {
  createPostPayload,
  createPostResponse,
  GetAllBlogResponse,
} from "./types";
import useGenericQuery from "../useGenericQuery";

export const useGetAllPosts = () => {
  return useGenericQuery("getAllPosts", () => api.blog.getAllPosts());
};

export const useCreatePost = () => {
  return useGenericMutation<createPostResponse, createPostPayload>(
    "createPost",
    (data) => api.blog.createPost<createPostResponse>(data),
  );
};

export const useGetUserPosts = () => {
  return useGenericQuery("getUserPosts", () => api.blog.getUserPosts());
};
