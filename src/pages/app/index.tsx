import { CardOne, CardTwo, ICardTwo } from "@/components/card";
import NewJob from "@/components/newJob";
import React from "react";
import Button from "@/components/button";
import { trendingData } from "@/constants/trending";

const Home = () => {
  return (
    <section className="pt-[55px] px-4 lg:px-8 bg-[#F0FFFF] space-y-24 pb-20">
      <div className="rounded-[20px] bg-white border border-solid border-[#B6B6B6] p-8 flex flex-col md:flex-row gap-x-[43px]">
        <span className="w-[94px] h-[94px] rounded-full">
          <img
            src="/images/Avatar.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </span>
        <div className="flex flex-col gap-y-8">
          <div className="flex items-center justify-between w-full">
            <div>
              <h1 className="text-black text-xl md:text-3xl font-semibold capitalize">
                Ahmad Rufai Yusuf
              </h1>
              <h3 className="font-medium tracking-[1px] text-base md:text-xl uppercase text-[#141414)]">
                Product Designer
              </h3>
              <span className="text-[#808080] font-medium text-base">
                Product Designer
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <p className="capitalize tracking-[0.4px] font-medium text-base text-[#0D706E]">
                edit profile
              </p>
              <span>
                <img src="/icons/arrow-circle.svg" alt="" />
              </span>
            </div>
          </div>
          <p className="text-base md:text-xl text-[#808080]">
            I am an innovative, creative individual who is adept at coming up
            with real solutions that work for end users.
          </p>
        </div>
      </div>

      <div>
        <h3 className="capitalize text-[32px] font-semibold text-black pb-10">
          continue learning
        </h3>
        <div className="flex flex-col md:flex-row gap-6">
          <CardOne courseTitle="product design" className="bg-[#141414]" />
          <CardOne
            courseTitle="web develoment: HTML, CSS, JS"
            className="bg-[#E73152]"
          />
        </div>
      </div>

      <div>
        <NewJob />
      </div>

      <div className="h-[90px] bg-white flex items-center justify-center">
        <Button variant="primary">view more</Button>
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
        <span>
          <img src="/images/image6.svg" alt="" />
        </span>
        <div className="w-full md:w-3/5 space-y-4 text-[#141414]">
          <h3 className="leading-8 md:leading-16 text-2xl md:text-[56px] font-bold">
            Don’t miss the next Get together.{" "}
          </h3>
          <p className="md:leading-[30px] text-lg md:text-2xl">
            Families and friends gathered, joyous feasts shared, prayers
            offered, laughter echoed—Eid get-together, a celebration of love and
            togetherness
          </p>
          <div>
            <Button variant="primary">Get Ticket</Button>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-xl md:text-3xl mb-6">
          Trending In the Community
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-8">
          {Array(3)
            .fill(trendingData)
            .map((data: ICardTwo) => (
              <CardTwo
                key={data.title}
                logo="/images/logo2.svg"
                image="/images/image7.svg"
                description={data.description}
                name={data.name}
                title={data.title}
                product={data.product}
                date={data.date}
                jobTitle={data.jobTitle}
              />
            ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <img src="/images/image8.svg" alt="" />
        </div>
        <div className="md:w-3/5 space-y-4 text-[#141414]">
          <h3 className="md:leading-16 text-3xl md:text-[56px] font-bold">
            Trading in Islam, Haram or not?
          </h3>
          <p className="md:leading-[30px] text-lg text-2xl">
            However, it must be done in a way that is not considered gambling
            and there is no interest component to it. The items being traded
            must not be used for activities that are contrary to t
          </p>
          <div>
            <Button variant="primary">View Verdict</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// Home.title = "Home";
// Home.isAuthPage = true;

export default Home;
