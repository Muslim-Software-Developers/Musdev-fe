import dynamic from "next/dynamic";
import React from "react";
// import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(import("react-quill"), { ssr: false });

interface Props {
  titleValue: string;
  setTitleValue: React.Dispatch<string>;
  editor: string;
  setEditor: React.Dispatch<string>;
}

// !px-[20px] md:!px-[119px]

const WritingBox = ({
  titleValue,
  setTitleValue,
  editor,
  setEditor,
}: Props) => {
  console.log(editor);
  console.log('editor');

  return (
    <div className="flex flex-col py-[67px] rounded-[20px] border-neutral05 bg-writeBg border-2 border-solid h-[90vh] box-border">
      <input
        placeholder="Title"
        value={titleValue}
        onChange={(e) => {
          setTitleValue(e.target.value);
        }}
        className="text-[49px] font-bold outline-none mb-[26px] bg-transparent"
      />

      <ReactQuill
        theme="snow"
        placeholder="Your content"
        value={editor}
        onChange={setEditor}
      />
    </div>
  );
};

export default WritingBox;
