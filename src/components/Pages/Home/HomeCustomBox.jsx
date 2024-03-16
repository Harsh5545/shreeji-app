import React from "react";
import { useNavigate } from "react-router-dom";

function HomeCustomBox() {
    const navigate = useNavigate();
  return (
    <div className="bg-[#FF6C22]  relative md:my-[120px] mt-[180px] mb-[80px]">
     <div className="md:hidden  absolute top-[-160px] ">
        <img src="/Main-Images/paper-food-box.webp" width="350" />
      </div>
      <div className="mx-auto max-w-screen-lg md:py-10 pt-20 pb-5 px-5 grid md:grid-cols-2">
        <div className=" flex gap-5 flex-col items-center md:items-start">
 
          <h1 className="text-[#fff] md:text-start text-center text-lg md:text-2xl">
            Create professional, personalised packaging in minutes with Turtle
            Boxes Design & Print Software
          </h1>
          <button className="bg-white text-lg font-bold w-max px-5 py-2 rounded-[20px] text-[#EF7F1B]" onClick={() => navigate('/contact')}>
            DESIGN CUSTOM BOX
          </button>
        </div>
      </div>
      <div className="absolute hidden md:flex bottom-[-40px] left-[900px]">
        <img src="/Main-Images/paper-food-box.webp" width="500" />
      </div>
    </div>
  );
}

export default HomeCustomBox;
