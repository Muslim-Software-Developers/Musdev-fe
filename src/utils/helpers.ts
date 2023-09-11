import { createPostPayload } from "@/hooks/blogs/types";
import { postObjTypes } from "@/pages/blog/write";
import { AxiosError } from "axios";
import { error } from "console";

export const cn = (defaultClasses: string, newClassName?: string) => {
  return newClassName ? `${defaultClasses} ${newClassName}` : defaultClasses;
};

export function extractAxiosError(error: unknown): string {
  return (error as AxiosError<{ message: string }>).response?.data?.message!;
}

export function validatePost(postData: createPostPayload): string[] | null {
  let errors = [];

  if (!postData.name || !postData.email || !postData.author) {
    errors.push("You have to login before you can post");
  }

  if (!postData.tech_niche) {
  }

  if (!postData.title) {
    errors.push("Please give a suitable title for your post");
  }

  if (!postData.content || postData.content.length < 10) {
    errors.push("You still have not written any content");
  }

  if (postData.category_id === null) {
    errors.push("Kindly select a suitable post topic");
  }

  if (errors.length > 0) {
    return errors;
  }

  return null;
}
