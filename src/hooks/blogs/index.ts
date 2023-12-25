import api from "@/api";
import useGenericMutation from "../useGenericMutation";
import {
  BlogProps,
  CommentPostPayload,
  CommentPostResponse,
  CreatePostPayload,
  CreatePostResponse,
  GetAllBlogResponse,
  GetPostCategoriesResponse,
  GetSingleBlogResponse,
  LikePostPayload,
  LikePostResponse,
} from "./types";
import { useQuery } from "react-query";

export const useGetAllPosts = () => {
  const { data, ...rest } = useQuery("posts", () =>
    api.blog.getAllPosts<GetAllBlogResponse>(),
  );
  return { ...rest, data: data?.data?.data };
};

export const useGetTrendingPosts = () => {
  const { data, ...rest } = useQuery("trending-posts", () =>
    api.blog.getTrendingPosts<GetAllBlogResponse>(),
  );
  return { ...rest, data: data?.data?.data };
};

export const useGetFeaturedPosts = () => {
  const { data, ...rest } = useQuery("featured-posts", () =>
    api.blog.getFeaturedPosts<GetAllBlogResponse>(),
  );
  return { ...rest, data: data?.data?.data };
};

export const useGetSinglePost = (slug: string) => {
  const { data, ...rest } = useQuery(
    ["posts", slug],
    () => api.blog.getSinglePost<GetSingleBlogResponse>(slug),
    {
      enabled: !!slug,
    },
  );
  return { ...rest, data: data?.data?.data };
};

export const useGetUserPosts = () => {
  const { data, ...rest } = useQuery("my-posts", () =>
    api.blog.getUserPosts<GetAllBlogResponse>(),
  );
  return { ...rest, data: data?.data?.data };
};

export const useGetPostCategories = () => {
  const { data, ...rest } = useQuery("tech-categories", () =>
    api.blog.getPostCategories<GetPostCategoriesResponse>(),
  );
  return { ...rest, data: data?.data.data };
};

export const useCreatePost = () => {
  const { data, ...rest } = useGenericMutation<
    CreatePostResponse,
    CreatePostPayload
  >("post", (data) => api.blog.createPost<CreatePostResponse>(data));
  return { ...rest, data: data?.data.data };
};

export const useUpdatePost = (slug: string) => {
  const { data, ...rest } = useGenericMutation<
    CreatePostResponse,
    CreatePostPayload
  >("post", (data) => api.blog.updatePost<CreatePostResponse>(slug, data));
  return { ...rest, data: data?.data.data };
};

export const useCommentPost = (slug: string) => {
  const { data, ...rest } = useGenericMutation<
    CommentPostResponse,
    CommentPostPayload
  >("commentPost", (data) =>
    api.blog.commentOnPost<CreatePostResponse, CommentPostPayload>(slug, data),
  );
  return { ...rest, data: data?.data.data };
};

export const useLikePost = (slug: string) => {
  const { data, ...rest } = useGenericMutation<
    LikePostResponse,
    LikePostPayload
  >("likePost", (data) => api.blog.likePost<LikePostResponse>(slug));
  return { ...rest, data: data?.data.data };
};

export const useUnLikePost = (slug: string) => {
  const { data, ...rest } = useGenericMutation<
    LikePostResponse,
    LikePostPayload
  >("unlikePost", (data) => api.blog.unLikePost<LikePostResponse>(slug));
  return { ...rest, data: data?.data.data };
};
