import React, { useEffect, useState } from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { Button } from "../../ui/button";
import "./Home.css"

export default function CarouselCrossfade() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
      const resetTimer = setTimeout(() => {
        setAnimate(false);
      }, 950); // Set animation to false after 1 second
      return () => clearTimeout(resetTimer);
    }, 1900); // Trigger animation every 2 seconds

    return () => clearTimeout(timer);
  }, [animate]); 
  return (
    <>
      <TECarousel interval={3200} crossfade ride="carousel">
        <div className="relative w-full md:h-[75vh]  overflow-hidden after:clear-both after:block after:content-['']">
        <TECarouselItem itemID={1}  className="relative bg-[#E58B93] float-left -mr-[100%] hidden h-[90%] w-full !transform-none transition-opacity duration-300 ease-in-out motion-reduce:transition-none">
            <div className="flex pb-5 md:flex-row flex-col-reverse">
              <div className={`flex flex-col flex-1 gap-5 items-center ${animate ?'animated-carousel-item' :''} justify-center`}>
                <h1 className="p-1 md:w-[90%] w-[80%] font-semibold text-xl md:text-5xl text-center">
                  Premier & Customised Packaging & Boxes for the New Age Startups.
                </h1>
                <Button className="w-[30%]"> Order Now!</Button>
              </div>
              <div className={`flex flex-col flex-1 gap-5 items-center ${animate ?'animated-carousel-item' :''} justify-center`}>
                <img
                  src="/Main-Images/image_9-removebg-preview.png"
                  alt="shreejiGraphics Main image"
                  className="md:p-10 p-2 md:h-[100%] h-[70%] "
                />
              </div>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={2}
            className="relative  bg-gradient-to-r h-[90%] from-gray-300 to-rose-200  float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
          >
            <div className={` flex pb-5 md:flex-row flex-col-reverse`}>
              <div className={`flex flex-col flex-1 gap-5 items-center ${animate ?'animated-carousel-item' :''} justify-center`}>
                {" "}
                <p className="p-1 md:w-[90%] w-[80%] font-semibold text-xl md:text-5xl text-center">
                  Switch Your Packaging From Okay to Awesome
                </p>
                <Button className="w-[30%]"> Order Now!</Button>
              </div>
              <div className={`flex flex-col flex-1 gap-5 items-center ${animate ?'animated-carousel-item' :''} justify-center`}>
                <img
                  src="/Main-Images/image_47-removebg-preview.png"
                  alt="shreejiGraphics Main image"
                  className="md:p-10 p-0 md:h-[80vh] h-[70%]"
                />
              </div>
            </div>
          </TECarouselItem>
          <TECarouselItem
            itemID={3}
            className="relative  bg-[#9ED9DC] h-[90%] float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
            // className=""
          >
            <div className={`flex pb-5 md:flex-row  flex-col-reverse`}>
              <div className={`flex flex-col flex-1 gap-5 items-center ${animate ?'animated-carousel-item' :''} justify-center`}>
                <p className="p-1 md:w-[80%] w-[80%] font-semibold text-xl md:text-5xl text-center">
                  Wrap Your Memories with Joy!
                </p>
                <Button className="w-[30%]"> Order Now!</Button>
              </div>
              <div className={`flex flex-col flex-1 gap-5 items-center ${animate ?'animated-carousel-item' :''} justify-center`}>
                <img
                  src="/Main-Images/image_2__1_-removebg-preview.png"
                  alt="shreejiGraphics.com Main image"
                  className="md:p-10 p-2 md:h-[100%] h-[70%]"
                />
              </div>
            </div>
          </TECarouselItem>
        </div>
      </TECarousel>
    </>
  );
}