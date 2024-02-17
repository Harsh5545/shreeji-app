
import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();

  return (
    <div>
      <h2>Product Page</h2>
      <p>Product ID: {productId}</p>
      {/* Add additional product details based on the productId */}
    </div>
  );
};

export default Product;
