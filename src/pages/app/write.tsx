import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useSession } from "next-auth/react";
import ThreeVerticalDots from "../../assets/threeDotsVertical.png";
import DropDownList from "@/components/blogWrite/dropDownList";
import WritingBox from "@/components/blogWrite/writingBox";
import { useCreatePost, useGetUserPosts } from "@/hooks/blogs";
import { CreatePostPayload } from "@/hooks/blogs/types";
import { validatePost } from "@/utils/helpers";
import { blogData } from "@/components/home/staticData/ourBlog";
import Button from "@/components/button";

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
    // category_id: parseInt(""),
    author: "",
    is_draft: false,
  });

  const onSubmit = (blogData: CreatePostPayload) => {
    const res = validatePost(blogData);

    console.log(blogData);

    // if (res === null) {
    //   mutation.mutate(blogData);
    // }

    return;
  };

  return (
    <section className="wrapper py-16 px-4 lg:px-8 bg-[#F0FFFF] pb-20">
      <div className="relative w-full flex justify-end py-6">
        <button className="bg-none border-none">
          <Image
            src={ThreeVerticalDots}
            width={20}
            height={10}
            alt="text DropDown"
            onClick={() => setShowDropDownList((prev) => !prev)}
            className="mr-5 cursor-pointer"
          />
        </button>

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

      <Button
        variant="primary"
        className="mt-8"
        onClick={() => {
          onSubmit({
            name: session?.user?.name ? session?.user?.name : "",
            phone: "",
            email: session?.user?.email ? session?.user?.email : "",
            tech_niche: "string",
            title: postObj.title,
            content: editor,
            // category_id: postObj.category_id!,
            author: session?.user?.name ? session?.user?.name : "",
            is_draft: false,
          });
        }}
      >
        Submit for review
      </Button>
    </section>
  );
};

export default Write;
