import React from "react";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
const CustomCard = (props) => {
  const { name, title, mainImage, category, subCategory, productId } =
    props.item;
  return (
    <div className="">
      <CardContent className="">
        <img
          className="p-1 rounded-md hover:zoom-in-50"
          src={mainImage}
          alt="img"
        />
      </CardContent>
      <CardFooter className="flex flex-col gap-3 items-center">
        <p className="text-center text-nowrap text-green-400">{subCategory}</p>
        <Link
          to={`/category/${subCategory}`}
          className="mx-auto w-28 h-8 flex justify-center items-center roboto-medium transition-all ease-in-out text-[#fff] bg-[#333] py-[10px] px-[17px] rounded-[50px] text-sm  hover:bg-gradient-to-r from-[#74B846] to-[#3F6338]"
        >
          Order Now
        </Link>
      </CardFooter>
    </div>
  );
};

export default CustomCard;
