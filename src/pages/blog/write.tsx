import React, { useState } from "react";

const Write = () => {
  const [titleValue, setTitleValue] = useState("");

  return (
    <section className="wrapper my-20">
      <div className="flex flex-col py-[67px] !px-[20px] md:!px-[119px] rounded-[20px] border-neutral05 bg-writeBg border-2 border-solid h-[90vh] box-border">
      <input
        placeholder="Title"
        value={titleValue}
        onChange={(e) => {
          setTitleValue(e.target.value);
        }}
        className="text-[49px] font-bold outline-none mb-[26px] bg-transparent"
      />
      <textarea placeholder="Tell your story" className="h-[100%] outline-none bg-transparent"></textarea>
      </div>

      <button className="py-[8px] px-[16px] my-[64px] bg-secondary01 rounded-lg text-white">
        Submit for review
      </button>

    </section>
  );
};

export default Write;
