import React from "react";
import { useParams } from "react-router-dom";
import staticData from "../../../../Data";
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
    <div className="w-[75%] mx-auto  my-10">
      <h1 className="p-1 my-5 font-bold text-5xl">Heading</h1>
      <div className="grid grid-cols-2">
        <div className="">
          <img
            src="/baby_clothes_folding_box.webp"
            alt="shreeji Graphics Product"
            height={800}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Product;
