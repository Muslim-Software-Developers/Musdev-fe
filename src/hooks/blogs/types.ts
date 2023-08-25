interface GetAllBlogResponse {
    data: Array<{
        title: string;
        slug: string;
        content: string;
        cover_image: string;
        category: string;
        author: string;
        tags: string[],
        comments: { id: number, post_id: string }[],
        likes: { id: number, post_id: string, user_id: string }[],
        created: Date
    }>
}



export type {
    GetAllBlogResponse
}