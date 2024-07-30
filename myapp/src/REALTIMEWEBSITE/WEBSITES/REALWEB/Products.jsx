import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CARD from './REALTIMEWEBSITE/WEBSITES/CARD';

const Products = () => {
  const [api, setApi] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchProducts = async () => {
    let allProducts = [];
    const limit = 100;
    let skip = 0;

    while (skip < 1000) { // Assuming you want up to 1000 products
      const response = await axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`);
      allProducts = [...allProducts, ...response.data.products];
      skip += limit;
    }

    setApi(allProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = api.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product, index) => (
          <CARD key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
