import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();

  // Fetch product details by ID here (omitted for brevity)
  // Example: const product = api.find(product => product.id === parseInt(id));

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Product Details (ID: {id})</h1>
      {/* Render product details here */}
    </div>
  );
};

export default ProductDetails;
