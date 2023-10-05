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

  getUserPosts<T>() {
    return this.client.get<T>("/blog/user/my_articles");
  }

  createPost<T>(body: CreatePostPayload) {
    return this.client.post<T>("/blog/create", body);
  }
}

export default Blog;
