import { AxiosInstance } from "axios";

class Blog {
  client: AxiosInstance;

  constructor(client: AxiosInstance) {
    this.client = client;
  }

  getAllPosts<T>(){
    return this.client.get<T>("/blog")
  }


}
