import React from "react";
import staticData from "../../../../Data";
import image from "/Main-Images/image_1.jpg";
function FoodPackaging() {
  const backgroundImageUrl = "url('/Main-Images/image_1.jpg')";
  return (
    <div>
      <div
        style={{
          background: backgroundImageUrl,
          backgroundSize: "contain",
          minHeight: "60vh",
        }}
      >
        <div className="flex justify-start items-center h-[60vh] w-[45%]">
          <h1 className="p-5 font-medium md:text-4xl text-2xl">
            Grow your cloud kitchen and restaurant food business with packaging
            and box solutions from Shreeji Graphics
          </h1>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-center items-center flex-col md:m-20 m-10">
          <h3 className="p-1 md:w-[75%] w-[90%] text-center font-medium md:text-4xl text-xl  md:mb-10 mb-5">
            Unwrap the Culinary Delight! Explore Foodie Theme Printed &
            Unprinted Boxes.
          </h3>
          <p className=" md:w-[60%] w-[80%] text-center p-1 font-normal  md:text-md text-sm">
            Indulge in the exquisite world of gastronomy with our premium rigid
            cardboard boxes crafted to preserve and showcase your delectable
            treats. Whether transporting savoury dishes or delightful desserts,
            these boxes are tailored to meet your culinary requirements. Their
            durability, convenient storage, and stackable design make them
            perfect for any dining occasion.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FoodPackaging;
