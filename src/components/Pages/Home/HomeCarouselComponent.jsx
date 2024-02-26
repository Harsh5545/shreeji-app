import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { Button } from "../../ui/button";

export default function CarouselCrossfade() {
  return (
    <>
      <TECarousel interval={2000} showIndicators crossfade ride="carousel">
        <div className="relative w-full md:h-[75vh] overflow-hidden after:clear-both after:block after:content-['']">
          <TECarouselItem
            itemID={2}
            className="relative bg-[#E58B93] float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="grid md:mt-1 mt-10 md:grid-cols-2 grid-cols-1 ">
              <div className="flex flex-col gap-5 items-center justify-center">
                {" "}
                <h1 className="p-1 md:w-[90%] w-[80%] font-semibold text-xl md:text-4xl text-center">
                  Premier & Customised Packaging & Boxes for the New Age
                  Startups.
                </h1>
                <Button className="w-[30%]"> Order Now!</Button>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="/Main-Images/image_9-removebg-preview.png "
                  alt="shreejiGraphics Main image"
                  className="md:p-10 p-2 md:h-[100%] h-[80%] "
                />
              </div>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={1}
            className="relative  bg-gradient-to-r from-gray-300 to-rose-200  float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="grid md:mt-1 mt-10 md:grid-cols-2 grid-cols-1 ">
              <div className="flex flex-col gap-5 items-center justify-center">
                {" "}
                <h1 className="p-1 md:w-[90%] w-[80%] font-semibold text-xl md:text-5xl text-center">
                  Switch Your Packaging From Okay to Awesome
                </h1>
                <Button className="w-[30%]"> Order Now!</Button>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="/Main-Images/image_47-removebg-preview.png"
                  alt="shreejiGraphics Main image"
                  className="md:p-10 p-0 md:h-[80vh] h-[80%]"
                />
              </div>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative  bg-[#9ED9DC]  float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className="grid md:mt-0 mt-10 md:grid-cols-2 grid-cols-1 ">
              <div className="flex flex-col gap-5 items-center justify-center">
                <h1 className="p-1 md:w-[80%] w-[80%] font-semibold text-xl md:text-5xl text-center">
                  Wrap Your Memories with Joy!
                </h1>
                <Button className="w-[30%]"> Order Now!</Button>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src="/Main-Images/image_2__1_-removebg-preview.png"
                  alt="shreejiGraphics.com Main image"
                  className="md:p-10 p-2 md:h-[100%] h-[80%]"
                />
              </div>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}
