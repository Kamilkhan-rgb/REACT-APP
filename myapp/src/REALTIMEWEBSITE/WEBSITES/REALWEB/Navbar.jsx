import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">MyShop</div>
        <div>
          <Link to="/" className="text-white px-4">Home</Link>
          <Link to="/products" className="text-white px-4">Products</Link>
          <Link to="/about" className="text-white px-4">About</Link>
          <Link to="/contact" className="text-white px-4">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
