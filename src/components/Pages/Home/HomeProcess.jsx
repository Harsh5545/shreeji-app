import React from "react";

function HomeProcess() {
  return (
    <div className=" bg-[#F2F0F1]">
      <div className="mx-auto  max-w-screen-xl py-10 px-5 flex flex-col gap-10">
        <div className="text-center flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-[#FF6C22]">Our Process</h2>
            <p className="text-lg">5 Easy Steps to Design and Order Packaging Online</p>
        </div>
        <img src="/Main-Images/our-process-desktop.png" alt="" className="hidden md:flex"/>
        <img src="/Main-Images/our-process-mobile.png" alt="" className="md:hidden flex"/>
      </div>
    </div>
  );
}

export default HomeProcess;
