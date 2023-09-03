"use-client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSession } from "next-auth/react";
import ThreeVerticalDots from "../../assets/threeDotsVertical.png";
import DropDownList from "@/components/blogWrite/dropDownList";
import WritingBox from "@/components/blogWrite/writingBox";
import { useCreatePost, useGetUserPosts } from "@/hooks/blogs";
import { createPostPayload } from "@/hooks/blogs/types";

export type postObjTypes = {
  name: string;
  phone: number | null;
  email: string;
  tech_niche: string;
  title: string;
  content: string;
  category_id: number | null;
  author: string;
  is_draft: boolean;
};

const Write = () => {
  const [titleValue, setTitleValue] = useState("");
  const [showDropDownList, setShowDropDownList] = useState(false);
  const [editor, setEditor] = useState<string>("");

  const [postObj, setPostObj] = useState<postObjTypes>({
    name: "",
    phone: null,
    email: "",
    tech_niche: "",
    title: "",
    content: "",
    category_id: null,
    author: "",
    is_draft: true,
  });

  console.log(postObj)

  const mutation = useCreatePost();

  const onSubmit = (blogData: createPostPayload) => {
    mutation.mutate(blogData);
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
          <DropDownList setShowDropDownList={setShowDropDownList} category={postObj.category_id} setPostObj={setPostObj} />
        )}
      </div>

      <WritingBox
        titleValue={titleValue}
        setTitleValue={setTitleValue}
        editor={editor}
        setEditor={setEditor}
      />

      <button
        onClick={() => {
          onSubmit({
            name: "Sample",
            phone: "string",
            email: "string",
            tech_niche: "string",
            title: titleValue,
            content: "string",
            category_id: 2,
            author: "string",
            is_draft: true,
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
