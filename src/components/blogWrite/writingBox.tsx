import React from "react";

interface Props {
  titleValue: string;
  setTitleValue: React.Dispatch<String>;
}

const WritingBox = ({ titleValue, setTitleValue }: Props) => {
  return (
    <div className="flex flex-col py-[67px] !px-[20px] md:!px-[119px] rounded-[20px] border-neutral05 bg-writeBg border-2 border-solid h-[90vh] box-border">
      <input
        placeholder="Title"
        value={titleValue}
        onChange={(e) => {
          setTitleValue(e.target.value);
        }}
        className="text-[49px] font-bold outline-none mb-[26px] bg-transparent"
      />
      <textarea
        placeholder="Tell your story"
        className="h-[100%] outline-none bg-transparent"
      ></textarea>
    </div>
  );
};

export default WritingBox;
