import api from "@/api";
import useGenericMutation from "../useGenericMutation";
import { GetAllBlogResponse } from "./types";
import useGenericQuery from "../useGenericQuery";

export const useGetAllBlogs = () => {
    console.log('getting all blogs')
    return useGenericQuery('getAllBlogs', () => api.blog.getAllPosts())
}



