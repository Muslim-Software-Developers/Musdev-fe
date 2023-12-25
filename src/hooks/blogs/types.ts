interface IResponse {}

interface BlogProps {
  title: string;
  slug: string;
  content: string;
  cover_image: string;
  category: string;
  author: string;
  tags: string[];
  comments: { id: number; post_id: string }[];
  likes: { id: number; post_id: string; user_id: string }[];
  created: string;
  published: string;
}

interface GetSingleBlogResponse {
  data: BlogProps;
}

interface GetAllBlogResponse {
  data: BlogProps[];
}

interface CreatePostResponse {
  data: string;
  metadata: any[];
}

interface CreatePostPayload {
  name: string;
  phone: string;
  email: string;
  tech_niche: string;
  title: string;
  content: string;
  // category_id: number;
  author: string;
  is_draft: boolean;
}

interface CommentPostPayload {
  content: string;
}

interface CommentPostResponse extends IResponse {
  data: string;
  metadata: any[];
}

interface LikePostPayload {}

interface LikePostResponse extends IResponse {
  data: string;
  metadata: any[];
}

interface GetPostCategoriesResponse extends IResponse {
  data: {
    "web-development": "Web Development";
    "ui-ux": "UI UX";
    "data-science": "Data Science";
    "frontend-development": "Frontend Development";
    "backend-development": "Backend Development";
    "computer-networking": "Computer Networking";
    others: "Others";
  };
}

export type {
  BlogProps,
  GetSingleBlogResponse,
  GetAllBlogResponse,
  CreatePostResponse,
  CreatePostPayload,
  GetPostCategoriesResponse,
  CommentPostPayload,
  CommentPostResponse,
  LikePostPayload,
  LikePostResponse,
};
