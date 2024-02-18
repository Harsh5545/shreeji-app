import React from "react";
import { useParams } from "react-router-dom";
import staticData from "../../../../Data";
import { Button } from "../../ui/button";
const Product = () => {
  const { categoryId, productId } = useParams();

  const foundCategory = staticData.find(
    (category) => category.subCategory === categoryId
  );

  const foundProduct = foundCategory?.product.find(
    (product) => product.Productid === parseInt(productId)
  );

  console.log(categoryId, productId);
  console.log(foundProduct);

  console.log(foundProduct);
  return (
    <div className="md:w-[75%] mx-auto  my-10">
      <h1 className="p-1 my-5 font-bold text-5xl">Heading</h1>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="">
          <img
            src="/Main-Images/baby_clothes_folding_box.webp"
            alt="shreeji Graphics Product"
            width={500}
          />
        </div>
        <div className="flex my-2 flex-col gap-5  w-[90%] mx-auto">
          <div className="flex justify-between items-center">
            <p className=" font-normal md:md:text-lg text-md text-md">
              Length (60-400mm)
            </p>
            <input
              className="p-1 border md:md:text-lg text-md text-md border-gray-300 rounded-sm hover:shadow-md border-spacing-1 outline-none"
              type="text"
              placeholder="Enter length"
            />
          </div>
          <div className="flex justify-between">
            <p className=" font-normal md:text-lg text-md">Width (15-200mm)</p>
            <input
              className="p-1 border md:text-lg text-md border-gray-300 rounded-sm hover:shadow-md border-spacing-1 outline-none"
              type="text"
              placeholder="Enter Width"
            />
          </div>
          <div className="flex justify-between">
            <p className=" font-normal md:text-lg text-md">Height (60-710mm)</p>
            <input
              className="p-1 border md:text-lg text-md border-gray-300 rounded-sm hover:shadow-md border-spacing-1 outline-none"
              type="text"
              placeholder="Enter Height"
            />
          </div>
          <div className="flex justify-between">
            <p className=" font-normal md:text-lg text-md">Box Types</p>
            <select className=" p-1  border md:text-lg text-md outline-none hover:border-orange-500 border-gray-300 rounded-sm hover:shadow-md border-spacing-1 ">
              <option>Standard Packaging</option>
              <option>Plain Box/Non Printed</option>
              <option>Food Safe Packaging</option>
              <option>Single Color Printing</option>
            </select>
          </div>
          <div className="flex justify-between">
            <p className=" font-normal md:text-lg text-md">Material</p>
            <select className=" p-1  border md:text-lg text-md outline-none hover:border-orange-500 border-gray-300 rounded-sm hover:shadow-md border-spacing-1 ">
              <option>SBM/FBB 300 GSM</option>
              <option>SBM/FBB 350 GSM</option>
            </select>
          </div>
          <div className="flex justify-between">
            <p className=" font-normal md:text-lg text-md">Refinement</p>
            <select className=" p-1  border md:text-lg text-md outline-none hover:border-orange-500 border-gray-300 rounded-sm hover:shadow-md border-spacing-1 ">
              <option>None</option>
              <option>Spot UV</option>
              <option>Foil Stamping</option>
            </select>
          </div>
          <div className="flex justify-between">
            <p className=" font-normal md:text-lg text-md">Finishes</p>
            <select className=" p-1  border md:text-lg text-md outline-none hover:border-orange-500 border-gray-300 rounded-sm hover:shadow-md border-spacing-1 ">
              <option>None</option>
              <option>Gloss Lamination</option>
              <option>Matt Lamination</option>
              <option>Gloss Varnish</option>
              <option>Matt Varnish</option>
            </select>
          </div>
          <div className="flex justify-between">
            <p className=" font-normal md:text-lg text-md">Production</p>
            <select className=" /p-1  border md:text-lg text-md outline-none hover:border-orange-500 border-gray-300 rounded-sm hover:shadow-md border-spacing-1 ">
              <option>Standard (8/10 Days)</option>
              <option>standard (3/4 Days)</option>
            </select>
          </div>
          <Button> Get Quote</Button>
        </div>
        </div>
      <div className="grid md:my-20 my-10 md:grid-cols-2 grid-cols-1">
        <div>
          <img src="" alt="shreeji Graphic images surat" />
        </div>
        <div className="p-5 bg-gray-200">
          <h1 className="md:text-3xl  text-md text-orange-400 mb-5 font-semibold">
            How to design a Packaging Box:
          </h1>
          <ol className="md:md:text-lg text-md text-md">
            <li className="mb-2">1. How to Order Plain Boxes.</li>
            <li className="mb-2">
              2. How to Design Your Personalized Packaging via Our Free Design
              Software.
            </li>
            <li className="mb-2">3. How to Download Packaging Box Keyline.</li>
            <li className="mb-2">
              4. How to Design Your Download Box Keyline Packaging via using
              Adobe Illustrator.
            </li>
            <li className="mb-2">
              5. How to Design Your Download Box Keyline Packaging via using
              CorelDraw.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Product;
