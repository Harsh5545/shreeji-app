import React from "react";

function HomeCustomBox() {
  return (
    <div className="bg-[#EF7F1B] relative my-[100px]">
      <div className="mx-auto max-w-screen-lg py-10 px-5 grid md:grid-cols-2">
        <div></div>
        <div className="flex gap-2 flex-col  items-start">
          <p className="text-[#fff] text-lg">
            Create professional, personalised packaging in minutes with Turtle
            Boxes Design & Print Software
          </p>
          <button className="bg-white h-8 w-48 rounded-[30px] text-[#EF7F1B]">
            DESIGN CUSTOM BOX
          </button>
        </div>
      </div>
      <div className="absolute hidden md:flex bottom-[-70px] left-[170px]">
            <img src="/Main-Images/paper-food-box.webp" width="500"/>
        </div>
    </div>
  );
}

export default HomeCustomBox;
