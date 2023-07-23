import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogProps {
  id?: string;
  name?: string;
  slug?: string;
}

const BlogItem = ({ slug }: BlogProps) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div>
        <div
          className="rounded-tl-lg rounded-tr-lg"
          style={{
            height: "140px",
            background: `url(/images/future-car.png)`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />

        <div className="p-4">
          <h5 className="mb-6 font-bold text-lg">
            Online Communities Product Managers Should Join
          </h5>

          <p className="text-[#696767] text-sm mb-10">
            As product managers, there are some things we just have to learn
            through experience. .
          </p>

          <div className="flex justify-between items-start mt-12">
            <div className="flex items-center gap-2">
              <Image
                src="/images/avatar-2.png"
                alt="Avatar"
                width={40}
                height={40}
              />

              <div>
                <p className="">Jafar Zed</p>
                <p className="text-sm text-[#696767]">Product Manager</p>
                <p className="text-xs">Jan 02, 2023</p>
              </div>
            </div>

            <p className="text-xs px-2 py-1 m-0 rounded-[18px] bg-[#BFE2E2] text-[#696767]">
              Product
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogItem;
