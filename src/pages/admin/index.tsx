import React from "react";

const Home = () => {
  return (
    <section className="pt-[55px] px-4 lg:px-8 bg-[#F0FFFF] pb-20">
      <p className="mb-6 text-2xl font-bold">Latest Metrics</p>
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="bg-white border border-[rgba(0,_0,_0,_0.10)] rounded-2xl p-6 flex flex-col justify-between gap-12 flex-1">
          <p className="text-2xl">10</p>
          <p className="text-xl font-bold">Members</p>
        </div>

        <div className="bg-white border border-[rgba(0,_0,_0,_0.10)] rounded-2xl p-6 flex flex-col justify-between gap-12 flex-1">
          <p className="text-2xl">10</p>
          <p className="text-xl font-bold">Events</p>
        </div>

        <div className="bg-white border border-[rgba(0,_0,_0,_0.10)] rounded-2xl p-6 flex flex-col justify-between gap-12 flex-1">
          <p className="text-2xl">10</p>
          <p className="text-xl font-bold">Jobs</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
