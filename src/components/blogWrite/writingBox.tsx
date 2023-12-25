import { CreatePostPayload } from "@/hooks/blogs/types";
import dynamic from "next/dynamic";
import React from "react";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(import("react-quill"), { ssr: false });

interface Props {
  titleValue: string;
  setTitleValue: React.Dispatch<(prev: CreatePostPayload) => CreatePostPayload>;
  editor: string;
  setEditor: React.Dispatch<string>;
}

const WritingBox = ({
  titleValue,
  setTitleValue,
  editor,
  setEditor,
}: Props) => {
  const modules = {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  return (
    <div className="flex flex-col py-[67px] rounded-[20px] border-neutral05 bg-writeBg border-2 border-solid h-[90vh] overflow-hidden box-border">
      <div className="!px-5">
        {/* saving draft indicator */}
        <p className="text-[16px] text-draftGray ">Draft saved</p>

        <input
          placeholder="Title"
          value={titleValue}
          onChange={(e) => {
            setTitleValue((prev: CreatePostPayload) => {
              return { ...prev, title: e.target.value };
            });
          }}
          className="text-[49px] font-bold outline-none mb-[26px] bg-transparent"
        />
      </div>

      <ReactQuill
        modules={modules}
        className="w-full"
        placeholder="Your content"
        value={editor}
        onChange={setEditor}
      />
    </div>
  );
};

export default WritingBox;
