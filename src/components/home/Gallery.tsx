import { gallery } from "@/constants/gallery";
import Image from "next/image";
import React, { useState } from "react";

const GalleryImages = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 2;
  const totalPages = Math.ceil(gallery.length / imagesPerPage); // TOTAL NO. OF SLIDES OR PAGES

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const startIdx = currentPage * imagesPerPage;
  const endIdx = startIdx + imagesPerPage;
  const currentImages = gallery.slice(startIdx, endIdx);

  return (
    <div className="">
      <div className="grid md:hidden grid-cols-2 grid-rows-1 md:grid-cols-3 lg:grid-cols-4 mt-10 lg:mt-16 gap-x-8 gap-y-16">
        {currentImages.map((item) => (
          <div
            key={item.id}
            className="relative h-[132px] rounded-2xl md:h-[240px] lg:h-[280px] xl:h-[320px] 2xl:h-[303px]"
          >
            <Image
              src={"/images/galley01.png"}
              className="rounded-[10px]"
              fill
              alt="gallery image"
            />
          </div>
        ))}
      </div>

      <div className="flex md:hidden justify-center items-center gap-2 mt-6">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`mx-2 p-2 rounded-full ${
              currentPage === index
                ? "bg-primary text-white"
                : "bg-gray-300 text-gray-600"
            }`}
            onClick={() => setCurrentPage(index)}
          ></button>
        ))}
      </div>

      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 px-8 2xl:grid-cols-4 mt-10 lg:mt-16 gap-x-8 gap-y-16">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="relative h-[300px] md:h-[240px] lg:h-[280px] xl:h-[320px] 2xl:h-[303px]"
          >
            <Image src={"/images/galley01.png"} fill alt="gallery image" />
          </div>
        ))}
      </div>
    </div>
  );
};

const Gallery = () => {
  return (
    <div className="wrapper bg-[#F0FFFF] rounded-[20px] lg:bg-white pt-10 lg:pt-32 pb-20 xl:pt-44 xl:pb-32">
      <h2 className="hidden lg:block text-center font-bold text-4xl lg:text-5xl xl:text-6xl text-neutral01">
        Gallery
      </h2>
      <p className="text-neutral01 text-2xl font-bold leading-[141%] lg:font-normal lg:text-center lg:text-[20px] lg:leading-normal max-w-[1050px] mx-auto mt-2 lg:mt-4 xl:mt-5 lg:text-neutral02">
        Take a glimpse into our vibrant community through our gallery.{" "}
        <span className="hidden lg:inline">
          Explore photos and videos capturing the moments of collaboration,
          learning, and celebration that make MusTech Community special
        </span>
      </p>
      <GalleryImages />
    </div>
  );
};

export default Gallery;
