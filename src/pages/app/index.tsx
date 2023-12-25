import React from "react";
import Image from "next/image";
import { useGetProfile } from "@/hooks/auth";
import Link from "next/link";
import LatestJobs from "@/components/latestJobs";
import ArrowCircle from "~/public/icons/arrow-circle.svg";
import { LoadingSpinner } from "@/components/loadingSpinner";
import { useGetTrendingPosts } from "@/hooks/blogs";
import BlogItem from "@/components/blogSection/blogItem";

const Home = () => {
  const { isLoading, data } = useGetProfile();
  const { isLoading: isLoadingTrendingPosts, data: trendingPosts } =
    useGetTrendingPosts();

  if (isLoading || isLoadingTrendingPosts) {
    return <LoadingSpinner />;
  }

  return (
    <section className="pt-[55px] px-4 lg:px-8 bg-[#F0FFFF] space-y-24 pb-20">
      <div className="rounded-[20px] bg-white border border-solid border-[#B6B6B6] p-8 flex items-center flex-col md:flex-row gap-x-[43px]">
        <span className="w-[94px] h-[94px] rounded-full bg-gray-200"></span>

        <div className="flex flex-col gap-y-8 flex-1">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-black text-xl md:text-3xl font-semibold capitalize">
                {data?.user?.name}
              </h1>
              <h3 className="font-medium tracking-[1px] text-base md:text-xl uppercase text-[#141414)]">
                {data?.profile?.work}
              </h3>
              <span className="text-[#808080] font-medium text-base">
                {data?.profile?.work}
              </span>
            </div>
            <Link href="/app/profile" className="flex items-center gap-x-2">
              <span className="capitalize tracking-[0.4px] font-medium text-base text-[#0D706E]">
                edit profile
              </span>
              <span>
                <Image src={ArrowCircle} alt="ArrowCirlce" />
              </span>
            </Link>
          </div>
          <p className="text-base md:text-xl text-[#808080]">
            {data?.profile?.bio}
          </p>
        </div>
      </div>

      <LatestJobs />

      <div>
        <h3 className="font-semibold text-xl md:text-3xl leading-8 mb-8">
          Trending Articles In the Community
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-8">
          {trendingPosts?.slice(0, 3)?.map((data) => (
            <BlogItem key={data?.slug} blog={data} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Home.title = "Home";
// Home.isAuthPage = true;

export default Home;
