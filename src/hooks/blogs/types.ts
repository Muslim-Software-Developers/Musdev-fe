interface GetAllBlogResponse {
  data: {
    title: string;
    slug: string;
    content: string;
    cover_image: string;
    category: string;
    author: string;
    tags: string[];
    comments: { id: number; post_id: string }[];
    likes: { id: number; post_id: string; user_id: string }[];
    created: Date;
  }[];
}

interface createPostResponse {
  data: string;
  metadata: any[];
}

interface createPostPayload {
  name: string;
  phone: string;
  email: string;
  tech_niche: string;
  title: string;
  content: string;
  category_id: number;
  author: string;
  is_draft: boolean;
}

export type { GetAllBlogResponse, createPostResponse, createPostPayload };
