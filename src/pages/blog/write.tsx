"use-client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useSession } from "next-auth/react";
import ThreeVerticalDots from "../../assets/threeDotsVertical.png";
import DropDownList from "@/components/blogWrite/dropDownList";
import WritingBox from "@/components/blogWrite/writingBox";
import { useCreatePost, useGetUserPosts } from "@/hooks/blogs";
import { createPostPayload } from "@/hooks/blogs/types";
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

  const [postObj, setPostObj] = useState<createPostPayload>({
    name: "",
    phone: null,
    email: "",
    tech_niche: "",
    title: "",
    content: "",
    category_id: null,
    author: "",
    is_draft: false,
  });

  const onSubmit = (blogData: createPostPayload) => {
    const res = validatePost(blogData);

    if (res === null) {
      mutation.mutate(blogData);
    }

    return;

  };

  return (
    <section className="wrapper my-20">
      <div className="relative w-full flex justify-end py-[71px]">
        <Image
          src={ThreeVerticalDots}
          width={20}
          height={10}
          alt="text DropDown"
          onClick={() => setShowDropDownList((prev) => !prev)}
          className="mr-5 cursor-pointer"
        />

        {showDropDownList && (
          <DropDownList
            setShowDropDownList={setShowDropDownList}
            category={postObj.category_id!}
            setPostObj={setPostObj}
          />
        )}
      </div>

      <WritingBox
        titleValue={postObj.title}
        setTitleValue={setPostObj}
        editor={editor}
        setEditor={setEditor}
      />

      <button
        onClick={() => {
          onSubmit({
            name: session?.user?.name ? session?.user?.name : "",
            phone: "",
            email: session?.user?.email ? session?.user?.email : "",
            tech_niche: "string",
            title: postObj.title,
            content: editor,
            category_id: postObj.category_id!,
            author: session?.user?.name ? session?.user?.name : "",
            is_draft: false,
          });
        }}
        className="py-[8px] px-[16px] my-[64px] bg-secondary01 rounded-lg text-white"
      >
        Submit for review
      </button>
    </section>
  );
};

export default Write;
