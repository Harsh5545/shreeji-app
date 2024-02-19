import React from "react";

function HomeService() {
  return (
    <div className="bg-[#F2F0F1]">
      <div className="mx-auto max-w-screen-xl py-5 px-5 grid md:grid-cols-2">
        <div className="flex flex-col gap-8 py-12">
          <div>
            <h2 className="text-2xl md:text-3xl text-[#EF7F1B]">
              SHREEJI GRAPHICS SERVICES
            </h2>
            <p className="text-lg md:text-2xl">
              Start Your Packaging Journey with Shreeji Graphics
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-5 w-[90%] justify-between">
            <div className="flex gap-3">
              <img
                alt=""
                src="/Main-Images/chat.png"
                width="30"
                className="object-contain"
              />
              <p className="font-bold text-sm">Free Expert Consultation</p>
            </div>
            <div className="flex gap-3">
              <img
                alt=""
                src="/Main-Images/color-palette.png"
                width="30"
                className="object-contain rotate-180"
              />
              <p className="font-bold text-sm">Prototyping & Color Matching</p>
            </div>
            <div className="flex gap-3">
              <img
                alt=""
                src="/Main-Images/document.png"
                width="30"
                className="object-contain rotate-180"
              />
              <p className="font-bold text-sm">Custom Styles & Materials</p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-[#f0a868] to-[#cf7d35] text-white p-2 rounded-[50px] w-24">
            Get Now
          </button>
        </div>

        <div>
          Heello
        </div>
      </div>
    </div>
  );
}

export default HomeService;
