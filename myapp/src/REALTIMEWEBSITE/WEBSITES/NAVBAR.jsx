import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">MyShop</div>
        <div>
          <a href="#" className="text-white px-4">Home</a>
          <a href="#" className="text-white px-4">Products</a>
          <a href="#" className="text-white px-4">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

