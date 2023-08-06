import React from "react";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="wrapper my-[5rem]">
      <div className="flex gap-12">
        <div className="w-1/2">
          <Image
            src="/images/rectangle-456.png"
            alt="Banner 456"
            width={780}
            height={540}
          />
        </div>

        <div className="w-1/2">
          <h2 className="text-4xl mb-8">
            Online communities product managers should join
          </h2>

          <p className="text-xl text-[#696767]">
            As product managers, there are some things we just have to learn
            through experience. You’ll never know what it really feels like to
            present your product roadmap to your executive staff, for example,
            until you call that meeting and do it. You’ll never know what it
            really feels like to present your product roadmap to your executive
            staff, for example, until you call that meeting and do it.
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
                <p className="text-lg">Jafar Zed</p>
                <p className="text-[#696767]">Product Manager</p>
                <p className="text-sm">Jan 02, 2023</p>
              </div>
            </div>

            <p className="text-sm px-4 py-1 m-0 rounded-[18px] bg-[#BFE2E2] text-[#696767]">
              Product
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
