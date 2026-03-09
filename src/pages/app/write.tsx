"use-client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useSession } from "next-auth/react";
import ThreeVerticalDots from "../../assets/threeDotsVertical.png";

import { useCreatePost, useGetUserPosts } from "@/hooks/blogs";
import { CreatePostPayload } from "@/hooks/blogs/types";
import { validatePost } from "@/utils/helpers";
import { blogData } from "@/components/home/staticData/ourBlog";

// export type postObjTypes = {
//   name: string;
//   phone: number | null;
//   email: string;
//   tech_niche: string;
//   title: string;
//   content: string;
//   category_id: number | null;
//   author: string;
//   is_draft: boolean;
// };

const Write = () => {
  const { data: session, status } = useSession();
  const mutation = useCreatePost();

  const [showDropDownList, setShowDropDownList] = useState(false);
  const [editor, setEditor] = useState<string>("");
  const [isSavingDraft, setIsSavingDraft] = useState(false);

  const [postObj, setPostObj] = useState<CreatePostPayload>({
    name: "",
    phone: "",
    email: "",
    tech_niche: "",
    title: "",
    content: "",
    category_id: parseInt(""),
    author: "",
    is_draft: false,
  });

  const onSubmit = (blogData: CreatePostPayload) => {
    const res = validatePost(blogData);

    if (res === null) {
      mutation.mutate(blogData);
    }

    return;
  };

  return (
  <div>...</div>
  );
};

export default Write;
