import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BlogProps } from "@/hooks/blogs/types";

interface BlogItemProps {
  blog?: BlogProps;
}

const BlogItem = ({ blog }: BlogItemProps) => {
  return (
    <Link href={`/blog/${blog?.slug}`}>
      <div className="border border-gray-300 rounded-lg">
        <div
          className="rounded-tl-lg rounded-tr-lg"
          style={{
            height: "140px",
            background: `url(/images/future-car.png)`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <div className="p-4">
          <h5 className="mb-6 font-bold text-lg">{blog?.title}</h5>

          <p className="text-[#696767] text-sm mb-10 overflow-hidden whitespace-nowrap text-ellipsis">
            {blog?.content}
          </p>

          <div className="flex justify-between items-center mt-12">
            <div className="flex items-center gap-2">
              <Image
                src="/images/avatar-2.png"
                alt="Avatar"
                width={40}
                height={40}
              />

              <div>
                <p className="">{blog?.author}</p>
                {/* <p className="text-sm text-[#696767]">Product Manag</p> */}
                <p className="text-xs">Jan 02, 2023</p>
              </div>
            </div>

            <p className="text-xs px-2 py-1 m-0 rounded-[18px] bg-[#BFE2E2] text-[#696767]">
              {blog?.category}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
