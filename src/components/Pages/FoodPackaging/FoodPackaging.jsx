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
          <h2 className="p-1 font-medium text-4xl">
            Grow your cloud kitchen and restaurant food business with packaging
            and box solutions from Turtle Boxes
          </h2>
        </div>
      </div>
      <div className="w-full">
        <div className="flex justify-center items-center flex-col m-20">
          <h3 className="p-1 w-[75%] text-center font-medium text-4xl  mb-10">
            Unwrap the Culinary Delight! Explore Foodie Theme Printed &
            Unprinted Boxes.
          </h3>
          <p className=" w-[60%] text-center p-1 font-normal  text-md">
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
