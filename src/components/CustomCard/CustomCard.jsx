import React from "react";
import { Card, CardContent, CardDescription, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
const CustomCard = (props) => {
  const { name, title, mainImage, category, subCategory, productId } =
    props.item;
  return (
    <div className="flex flex-col justify-between">
      <CardContent className="flex flex-col justify-start">
        <img
          className="p-1 rounded-md hover:zoom-in-50"
          src={mainImage}
          alt="img"
        />
        <p className="text-center md:text-nowrap text-[#EF7F1B]">{subCategory}</p>
      </CardContent>
      <CardFooter>
        <Link
          to={`/category/${subCategory}`}
          className="mx-auto w-28 h-8 flex justify-center items-center roboto-medium transition-all ease-in-out text-[#fff] bg-[#333] py-[10px] px-[17px] rounded-[50px] text-sm  hover:bg-gradient-to-r from-[#f0a868] to-[#cf7d35]"
        >
          Order Now
        </Link>
      </CardFooter>
    </div>
  );
};

export default CustomCard;
