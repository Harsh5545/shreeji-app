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
        <div className="p-1 min-h-[60vh] font-semibold text-5xl md:text-6xl flex justify-center items-center">
          About Us
        </div>
      </div>

      <div className=" my-6 md:my-12 flex justify-center items-center flex-col gap-8 text-center ">
        <h2 className="font-semibold text-[#EF7F1B] md:text-4xl text-3xl md:w-[80%] w-[90%]">
          Our Company
        </h2>
<div className="grid md:grid-cols-2 grid-cols-1  items-center">
    <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
        <img width={600} src="/open_cardboard_box_with_arrows_import_delivery_shipping_icon_sign_or_symbol_3d_background_illustration-removebg-preview (1).png" alt="shreeji Graphics" />
    </div>
    <div className=" flex flex-col justify-center gap-4 md:gap-8 items-center w-[100%] md:px-8 px-4">
        <p className="font-medium text-xl text-medium">
            Shreeji export is part of shreeji graphics Which was established in 1982 as a manufacturer of exclusive packing boxes today we are pioneers in manufacturing boxes and best in designing. We have total process under one roof with all well trained staff for smooth process and satisfaction of our valuable customer. Where we can say to our customer “We Print Your IMAGINATION “.
        </p>
        <p className="p-1 font-medium text-xl text-medium">
            Shreeji Exports is export house of various product range like packaging product, stationery product, Food Product, Copper Product, Pillows and many more we value our customer and offer wide range of product with international standard quality and competitive pricing.
        </p>
    </div>
</div>
 
      </div>
<div className=" p-5">
    <div className="shadow-grey p-5 md:p-8 shadow-xl my-6 md:my-12 flex justify-center items-center flex-col gap-8 text-center ">
        <h2 className="font-semibold  md:text-4xl text-3xl md:w-[80%] w-[90%]">
          Corrugated Box with Company logo printed on it
        </h2>
<div className=" grid md:grid-cols-2 grid-cols-1">
    
    <div className=" flex flex-col items-center justify-center gap-4 md:gap-8 w-[100%] md:px-8 px-4">
        <p className="font-medium text-xl">
         We at Shreeji Graphics Packaging provide you with various printing option on Packaging Boxes
At Paper Cup, we specialize in custom print with company logos and messages on Corrugated Packaging Box.  Out Box are best in quality and strength. we have wide range boxes in Varity of size and shapes available for packaging boxes. </p>
        
<p className="p-1 font-medium text-xl text-medium">
We offered so much to so many with Custom Printed Disposable Paper Cup in so short time by advertising your product and services on Tea and Coffee Cup. Creativity and Innovation make your product and service Easy, Fast and Beautiful. It also helps to improve your Profitability.</p>
    </div>
  <div className="transition flex items-center justify-center ">
        <img width={300}  src="/Printed-Packaging-Boxes_.webp" alt="shreeji Graphics png" />
    </div>
</div></div>
 
      </div>
    

    </div>
  );
}

export default AboutUs;
