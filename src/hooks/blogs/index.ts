import api from "@/api";
import useGenericMutation from "../useGenericMutation";
import {
  BlogProps,
  CreatePostPayload,
  CreatePostResponse,
  GetAllBlogResponse,
} from "./types";
import useGenericQuery from "../useGenericQuery";
import { useQuery } from "react-query";

export const useGetAllPosts = () => {
  const { data, ...rest } = useQuery("getAllPosts", () =>
    api.blog.getAllPosts<GetAllBlogResponse>(),
  );
  return { ...rest, data: data?.data?.data };
};

export const useCreatePost = () => {
  const { data, ...rest } = useGenericMutation<
    CreatePostResponse,
    CreatePostPayload
  >("createPost", (data) => api.blog.createPost<CreatePostResponse>(data));
  return { ...rest, data: data?.data.data };
};

export const useGetUserPosts = () => {
  return useGenericQuery("getUserPosts", () => api.blog.getUserPosts());
};
