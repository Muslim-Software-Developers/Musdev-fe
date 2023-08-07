import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ThreeVerticalDots from "../../assets/threeDotsVertical.png";
import DropDownList from "@/components/blogWrite/dropDownList";
import WritingBox from "@/components/blogWrite/writingBox";

const Write = () => {
  const [titleValue, setTitleValue] = useState("");
  const [showDropDownList, setShowDropDownList] = useState(false);

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
          <DropDownList setShowDropDownList={setShowDropDownList} />
        )}
      </div>

      <WritingBox titleValue={titleValue} setTitleValue={setTitleValue} />

      <button className="py-[8px] px-[16px] my-[64px] bg-secondary01 rounded-lg text-white">
        Submit for review
      </button>
    </section>
  );
};

export default Write;
