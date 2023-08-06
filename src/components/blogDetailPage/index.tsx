import React from "react";
import Image from "next/image";
import BlogCover from "../../../public/images/rectangle-460.png";
import BlogItem from "../blogSection/blogItem";
import Button from "../button";

const BlogDetailPage = () => {
  return (
    <section className="wrapper my-20">
      <header className="text-[48px] font-semibold mb-[40px]">
        ChatGPT Changed How I Write Software
      </header>
      <div className="flex items-center justify-between mb-[53px]">
        <div className="flex items-center gap-2">
          <Image
            src="/images/avatar-2.png"
            alt="Avatar"
            width={40}
            height={40}
          />

          <div>
            <p className="">Jafar Zed</p>

            <div className="flex items-center text-[#696767] text-sm">
              <p className="">Product Manager</p>
              <p className="">Jan 02, 2023</p>
              <p className="">5 minutes read</p>
            </div>
          </div>
        </div>
        <p className="text-xs px-2 py-1 m-0 rounded-[18px] bg-[#BFE2E2] text-[#696767]">
          Product
        </p>
      </div>

      <Image src={BlogCover} alt="Blog Cover" />

      <div className="mt-[40px]">
        <h4 className="text-xl font-bold mb-8">Introduction</h4>

        <p className="mb-6">
          AI is buzzing right now. All my social media feeds are about some new
          thing you can do with ChatGPT plugins or showing off a new photo
          created by generative AI. I’ll be honest, it’s pretty cool to see and
          I’m not mad about it.
        </p>

        <p className="mb-6">
          The tech community seems to have gone on all-in on this AI gold rush.
          With new software, features, and enhancements popping up every day we
          have quickly found ourselves in a “sink or swim” moment. Do we embrace
          all the new advancements and see how development changes? Do we ignore
          it and hope it goes away? What about something in the middle?
        </p>

        <h4 className="text-xl font-bold mb-6">Why Design</h4>

        <p className="mb-6">
          If we look at the adoption bell curve for AI above, I’d estimate we’re
          still somewhat at the beginning of the early adopter phase. Lots of
          people are making noise about it online, but not many of us are
          actually using it in production.
          <br />
          That said, AI’s time will come when it’s commonplace to see it in
          everything. It’s not something we’ll specifically notice, it will be
          assumed to be there and make software more delightful.
        </p>

        <div>
          <h4 className="text-xl font-bold mb-6">5 Reasons to get ready</h4>

          <ul>
            <li>
              Not for me, though. I’ve gone full swing into it and it’s taken
              over how I plan, design, and implement software.
            </li>

            <li>
              Granted, I’m not an enterprise architect anymore, but I do run my
              website
            </li>

            <li>
              Ready, Set, Cloud by myself, and it has a ton of software and
              services behind it that automate everything.
            </li>

            <li>
              I wanted to share how I approach application design now that I
              have incredibly powerful AI at my fingertips.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-4xl font-bold mb-12">More on software</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </div>

        <div className="mt-10 text-right">
          <Button variant="outline">View more</Button>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailPage;
