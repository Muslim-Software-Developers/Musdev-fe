import React from "react";
import Image from "next/image";
import { BlogProps } from "@/hooks/blogs/types";
import { formatPostDate } from "@/utils/helpers";

interface BlogItemProps {
  post?: BlogProps;
}

const FeaturedBlogItem = ({ post }: BlogItemProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center  gap-6 md:gap-12 mb-10">
      <div className="">
        <Image
          src="/images/rectangle-456.png"
          alt="Banner 456"
          width={780}
          height={540}
        />
      </div>
      <div className="">
        <h2 className="text-2xl mdtext-4xl mb-8">{post?.title}</h2>

        <p className="text-lg md:text-xl text-[#696767]">
          {post?.content.slice(0, 100)}...
        </p>

        <div className="flex justify-between items-start mt-12">
          <div className="flex items-center gap-4">
            <Image
              src="/images/avatar-2.png"
              alt="Avatar"
              width={40}
              height={40}
            />

            <div>
              <p className="text-lg">{post?.author}</p>
              {/* <p className="text-[#696767]">Product Manager</p> */}
              <p className="text-sm">{formatPostDate(post?.published!)}</p>
            </div>
          </div>

          <p className="text-sm px-4 py-1 m-0 rounded-[18px] bg-[#BFE2E2] text-[#696767]">
            {post?.category}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogItem;
