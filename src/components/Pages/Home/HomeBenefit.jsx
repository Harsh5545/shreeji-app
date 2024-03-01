import React from "react";
import { TbDiscountCheckFilled } from "react-icons/tb";
import { SiStarship } from "react-icons/si";
import { RiTodoFill } from "react-icons/ri";
import { IoIosColorFilter } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa";
import { PiContactlessPaymentBold } from "react-icons/pi"

function HomeBenefit() {
  return (
    <div className="mx-auto max-w-screen-xl py-8 md:py-12 px-5">
      <div className="text-center flex gap-5 flex-col">
        <h1 className="font-[400] font-bold text-[#FF6C22] text-3xl">Your Benefits with Turtle Boxes</h1>
        <p className="text-lg">
          Take your brand to next level with the world’s finest custom packaging
          solutions
        </p>
      </div>
      <div className="grid  md:grid-cols-3">
        <div className="mt-10 space-y-10">
          <div className="flex items-start gap-1">
            <div className="mr-[1px] left-10">
              <TbDiscountCheckFilled className="text-6xl"/>
            </div>
            <div>
              <h1 className="text-lg font-bold">
                100% Satisfaction and Quality
              </h1>
              <p className="text-sm">
                We strive to deliver sheer quality with our services and
                products for the best customer experience.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3  justify-between">
            <div>

          <SiStarship className="text-5xl"/>
            </div>
            <div>
              <h1 className="text-lg font-bold ">Printing Brilliance</h1>
              <p className="text-sm">
                DIY packaging solutions with endless keyline variations so you
                get the packaging you desire.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 justify-between">
          <div className="bg-black rounded-full">
            <FaRegEyeSlash className=" rounded-full text-white text-5xl p-2"/>
            </div>
            <div>
              {" "}
              <h1 className="text-lg font-bold ">No Hidden Costs</h1>
              <p className="text-sm">
                An all-inclusive price quotation for the product cost, GST &
                shipping for crystal clear transactions.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img alt="Benefits" src="/Main-Images/benefit.webp" />
        </div>

        <div className="mt-10 space-y-10" >
          <div className="flex items-start justify-between">
            <div><h1 className="text-lg font-bold">
              Standard Artwork Check Included
            </h1>
            <p className="text-sm">
              Standard artwork check for incorrect data, color format & more to
              deliver error-free printing.
            </p></div>
            <div className="bg-black rounded-full">
            <RiTodoFill className=" rounded-full text-white text-5xl p-2"/>
            </div>
          </div>

          <div className="flex items-start justify-between">
            <div>
                <h1 className="text-lg font-bold">Payment on Account</h1>
            <p className="text-sm">
              Get access to hassle-free payment methods via Debit / Credit Card
              and Internet Banking.
            </p></div>
            <div className="bg-black rounded-full">
            <PiContactlessPaymentBold className=" rounded-full text-white text-5xl p-2"/>
            </div>
          </div>

          <div className="flex items-start justify-between">
            <div><h1 className="text-lg font-bold">Color Management</h1>
            <p className="text-sm">
              Ensuring strict color consistency across all packaging materials
              and logo designs for smooth offset printing.
            </p></div>
            <div className="bg-black rounded-full">
            <IoIosColorFilter className=" rounded-full text-white text-5xl p-2"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBenefit;
