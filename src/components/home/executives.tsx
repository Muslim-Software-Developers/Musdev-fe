import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../icons";
import ArrowLeft from "../icons/arrowLeft";
import ArrowRight from "../icons/arrowRight";

const Executives = () => {
  const sliderRef = React.useRef(null);

  const testimonialSettings = {
    // dots: true,
    // infinite: true,
    speeed: 700,
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: false,
  };

  return (
    <div id="executives" className="">
      <div className="container mx-auto pt-4">
        <h2 className="text-6xl font-bold my-16 text-center">Our Executives</h2>

        <Slider ref={sliderRef} {...testimonialSettings}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((executive) => (
            <div key={executive} className="!w-[93%]">
              <div>
                <div className="relative h-[300px] md:h-[240px] lg:h-[280px] xl:h-[318px] 2xl:h-[303px] mb-4">
                  <Image
                    src={"/images/galley01.png"}
                    fill
                    alt="gallery image"
                  />
                </div>

                <p className="text-lg">Nerdy Muslim</p>
                <p className="mb-4 text-[#6B7280]">Ameer (President)</p>
                <div className="flex items-center gap-4">
                  <FacebookIcon width={18} height={18} />
                  <TwitterIcon width={18} height={18} />
                  <LinkedInIcon width={18} height={18} />
                  <InstagramIcon width={18} height={18} />
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div id="nav-controls" className="mt-12 flex items-center gap-4">
          <button
            className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#BFE2E2] border border-[#E5E7EB]"
            onClick={() => sliderRef?.current?.slickPrev()}
          >
            <ArrowLeft />
          </button>
          <button
            className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-[#BFE2E2] border border-[#E5E7EB]"
            onClick={() => sliderRef?.current?.slickNext()}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Executives;
