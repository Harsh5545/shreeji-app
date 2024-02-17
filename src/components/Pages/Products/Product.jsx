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
    <div className="w-[90%] mx-auto text-center my-10">
      <h2 className="text-2xl underline text-green-600 roboto-black">Product Page</h2>
      <p className="text-base roboto-black my-3">Category : {categoryId}</p>
      <p className="text-base roboto-black my-3">{productId}</p>
      <p className="text-base roboto-black my-3">{foundProduct.heading}</p>
    </div>
  );
};

export default Product;
