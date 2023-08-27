import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ArrowRight from "@/components/svgs/arrowRight";
import ArrowRightIcon from "@/components/svgs/arrowRightIcon";
import ArrowUpRight from "@/components/svgs/arrowUpRight";
import Modal from "@/components/modal";

const events = ["networking", "games", "quizzes", "funs"];

const Events = () => {
  const buttonRef = useRef<HTMLButtonElement>();

  useEffect(() => {
    const openmodal = document.querySelectorAll(".modal-open");

    for (var i = 0; i < openmodal.length; i++) {
      openmodal[i].addEventListener("click", function (event) {
        event.preventDefault();
        toggleModal();
      });
    }

    const overlay = document.querySelector(".modal-overlay");
    overlay?.addEventListener("click", toggleModal);

    var closemodal = document.querySelectorAll(".modal-close");

    for (var i = 0; i < closemodal.length; i++) {
      closemodal[i].addEventListener("click", toggleModal);
    }

    document.onkeydown = function (evt) {
      evt = evt || window.event;
      var isEscape = false;
      if ("key" in evt) {
        isEscape = evt.key === "Escape" || evt.key === "Esc";
      } else {
        isEscape = evt.keyCode === 27;
      }
      if (isEscape && document.body.classList.contains("modal-active")) {
        toggleModal();
      }
    };
  }, []);

  function toggleModal() {
    const body = document.querySelector("body");
    const modal = document.querySelector(".modal");
    modal?.classList.toggle("opacity-0");
    modal?.classList.toggle("pointer-events-none");
    body?.classList.toggle("modal-active");
  }

  return (
    <section className="pt-[55px] pl-[47px] bg-[#F0FFFF] pr-20 pb-20">
      <h1 className="text-neutral01 font-semibold text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl">
        Experience the Musdev effect{" "}
      </h1>
      <p className="text-base lg:text-lg 2xl:text-xl mt-4 max-w-[1100px]">
        Join our event to explore and enjoy the best way to network and meet new
        people that’ll accelerate your career growth
      </p>
      <div className="grid md:grid-cols-2 gap-x-[10px] xl:gap-x-[90px] 2xl:gap-x-[110px] gap-y-[40px] 2xl:gap-y-[50px] mt-[100px]">
        {events.map((item) => (
          <div
            key={item}
            className="flex flex-col-reverse md:flex-col gap-5 2xl:gap-7"
          >
            <div className="relative w-full h-[300px] lg:h-[400px] xl:h-[460px] rounded-[10px]">
              <Image src={`/images/events/${item}.png`} alt={`${item}`} fill />
            </div>
            <h4 className="capitalize font-semibold text-2xl 2xl:text-3xl">
              {item}
            </h4>
          </div>
        ))}
      </div>
      <div className="mt-[90px] 2xl:mt-[110px] mb-[390px] 2xl:mb-[450px]">
        <div className="flex gap-6 lg:gap-10 2xl:gap-12 items-center">
          <h3 className="text-lg md:text-3xl lg:text-4xl 2xl:text-5xl">
            Buy ticket for our upcoming event
          </h3>
          <div className="w-6 h-6 md:w-8 2xl:w-10 md:h-8 2xl:h-10 flex justify-center items-center rounded-full bg-primary">
            <ArrowUpRight />
          </div>
        </div>

        <div className="relative w-full rounded-lg overflow-hidden h-[250px] md:h-[400px] lg:w-[1000px] lg:h-[500px] xl:h-[560px] my-5 lg:my-10 2xl:my-[60px]">
          <Image
            src={"/images/events/upcoming-events.png"}
            alt="upcoming-events"
            fill
          />
        </div>

        <button className="modal-open bg-primary rounded-lg text-white py-2 flex gap-2 items-center justify-between px-4 leading-[19px] tracking-[0.4px]">
          <span className="font-light text-sm">Event details</span>
          <ArrowRightIcon stroke1="white" stroke2="white" />
        </button>
      </div>
    </section>
  );
};

export default Events;
