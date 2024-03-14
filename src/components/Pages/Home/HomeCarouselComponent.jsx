import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { Button } from "../../ui/button";
import "./Home.css";

export default function CarouselCrossfade() {
    return (
        <>
            <TECarousel
                showControls
                showIndicators
                crossfade
                ride="carousel"
                theme={{
                    indicator:
                        "mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-black bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",
                }}
            >
                <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                    <TECarouselItem
                        itemID={1}
                        className="relative bg-[#E58B93] float-left -mr-[100%] hidden w-full !transform-none transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <div className="flex pb-5 md:flex-row flex-col-reverse">
                            <div
                                className={`flex flex-col justify-center flex-1 gap-5 items-center `}
                            >
                                <h1 className="p-1 md:w-[90%] w-[80%] md:font-semibold font-medium text-xl md:text-5xl text-center">
                                    Premier & Customised Packaging & Boxes for
                                    the New Age Startups.
                                </h1>
                                <Button className="w-[30%]"> Order Now!</Button>
                            </div>
                            <div
                                className={`flex flex-col flex-1 gap-5 items-center `}
                            >
                                <img
                                    src="/Main-Images/image_9-removebg-preview.png"
                                    alt="shreejiGraphics Main image"
                                    className="md:p-10 p-2 "
                                    width={600}
                                />
                            </div>
                        </div>
                    </TECarouselItem>
                    <TECarouselItem
                        itemID={2}
                        className="relative bg-lime-300  float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <div
                            className={` flex pb-5 md:flex-row flex-col-reverse`}
                        >
                            <div
                                className={`flex flex-col justify-center flex-1 gap-5 items-center `}
                            >
                                {" "}
                                <p className="p-1 md:w-[90%] w-[80%] font-semibold text-xl md:text-5xl text-center">
                                    Switch Your Packaging From Okay to Awesome
                                </p>
                                <Button className="w-[30%]"> Order Now!</Button>
                            </div>
                            <div
                                className={`flex flex-col justify-center flex-1 gap-5 items-center `}
                            >
                                <img
                                    src="/Main-Images/image_47-removebg-preview.png"
                                    alt="shreejiGraphics Main image"
                                    className="md:p-10 p-0"
                                    width={600}
                                />
                            </div>
                        </div>
                    </TECarouselItem>
                    <TECarouselItem
                        itemID={3}
                        className="relative bg-[#9ED9DC]  float-left -mr-[100%] hidden w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none"
                    >
                        <div
                            className={`flex pb-5 md:flex-row  flex-col-reverse`}
                        >
                            <div
                                className={`flex flex-col justify-center flex-1 gap-5 items-center `}
                            >
                                <p className="p-1 md:w-[80%] w-[80%] font-semibold text-xl md:text-5xl text-center">
                                    Wrap Your Memories with Joy!
                                </p>
                                <Button className="w-[30%]"> Order Now!</Button>
                            </div>
                            <div
                                className={`flex flex-col   justify-center flex-1 gap-5 items-center `}
                            >
                                <img
                                    src="/Main-Images/image_2__1_-removebg-preview.png"
                                    alt="shreejiGraphics.com Main image"
                                    className="md:p-10 p-2"
                                    width={600}
                                />
                            </div>
                        </div>
                    </TECarouselItem>
                </div>
            </TECarousel>
        </>
    );
}
