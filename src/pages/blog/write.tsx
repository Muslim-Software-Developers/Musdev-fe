import React from "react";

const Write = () => {
  return (
    <section className="wrapper my-20">
      <div className="flex flex-col mx-[119px] border-borderLine">
        <input placeholder="Title" />
        <textarea placeholder="Your content"></textarea>
      </div>
    </section>
  );
};

export default Write;
