import React from 'react'
import image from "/Product/chocolate/image_1.jpg";
function Contact() {
  return (
   <div>
      <div
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          minHeight: "60vh",
        }}
      >
        <div className="p-1 min-h-[60vh] font-semibold text-2xl md:text-6xl flex justify-center items-center">
          Contact Us
        </div>
      </div>

</div>
  )
}

export default Contact