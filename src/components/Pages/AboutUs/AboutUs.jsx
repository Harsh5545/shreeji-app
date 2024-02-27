import React from "react";
import image from "/Product/chocolate/image_1.jpg";

function AboutUs() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          minHeight: "60vh",
        }}
      >
        <div className="p-1 min-h-[60vh] font-semibold text-2xl md:text-6xl flex justify-center items-center">
          About Us
        </div>
      </div>

      <div className=" my-6 md:my-12 flex justify-center items-center flex-col gap-8 text-center ">
        <h2 className="font-semibold md:text-4xl text-xl md:w-[80%] w-[90%]">
          Our Company
        </h2>
        <p className="p-1 font-medium md:text-xl text-medium md:w-[80%] w-[90%]">
          Shreeji export is part of shreeji graphics Which was established in
          1982 as a manufacturer of exclusive packing boxes today we are
          pioneers in manufacturing boxes and best in designing. We have total
          process under one roof with all well trained staff for smooth process
          and satisfaction of our valuable customer. Where we can say to our
          customer “We Print Your IMAGINATION “.
        </p>
        <p className="p-1 font-medium md:text-xl text-medium md:w-[80%] w-[90%]">
          Shreeji Exports is export house of various product range like
          packaging product, stationery product, Food Product, Copper Product,
          Pillows and many more we value our customer and offer wide range of
          product with international standard quality and competitive pricing.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
