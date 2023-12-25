import { CreatePostPayload } from "@/hooks/blogs/types";
import { AxiosInstance } from "axios";

class Blog {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  getAllPosts<T>() {
    return this.client.get<T>("/blog");
  }

  getSinglePost<T>(slug: string) {
    return this.client.get<T>(`/blog/${slug}`);
  }

  getFeaturedPosts<T>() {
    return this.client.get<T>("/blog/section/featured");
  }

  getTrendingPosts<T>() {
    return this.client.get<T>("/blog/section/trending");
  }

  getUserPosts<T>() {
    return this.client.get<T>("/blog/user/my-articles");
  }

  commentOnPost<T, P>(slug: string, body: P) {
    return this.client.post<T>(`/blog/${slug}/comment`, body);
  }

  likePost<T>(slug: string) {
    return this.client.post<T>(`/blog/${slug}/like`);
  }

  unLikePost<T>(slug: string) {
    return this.client.post<T>(`/blog/${slug}/like`);
  }

  createPost<T>(body: CreatePostPayload) {
    return this.client.post<T>("/blog/create", body);
  }

  updatePost<T>(slug: string, body: CreatePostPayload) {
    return this.client.post<T>(`/blog/${slug}`, body);
  }

  getPostCategories<T>() {
    return this.client.get<T>("/data/post-categories");
  }
}

export default Blog;
