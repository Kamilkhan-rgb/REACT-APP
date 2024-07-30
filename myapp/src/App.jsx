// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// // import {CARD} from './REALTIMEWEBSITE/WEBSITES/CARD';
// import NAVBAR from './REALTIMEWEBSITE/NAVBAR';
// // import Navbar from './REALTIMEWEBSITE/WEBSITES/Navbar';
// // import Footer from './REALTIMEWEBSITE/Footer';

// function App() {
//   const [api, setApi] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   const fetchProducts = () => {
//     axios.get('https://dummyjson.com/products?limit=10000')
//       .then((res) => res.data)
//       .then((final) => {
//         setApi(final.products);
//       });
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   const filteredProducts = api.filter((product) =>
//     product.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   let productItems = filteredProducts.map((product, index) => {
//     return (
//       <CARD key={index} product={product} />
//     );
//   });

//   return (
//     <div className="flex flex-col min-h-screen">
//       <NAVBAR></NAVBAR>
//       <div className="flex-grow p-4">
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={searchQuery}
//           onChange={handleSearchChange}
//           className="w-full p-2 mb-4 border border-gray-300 rounded"
//         />
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {productItems}
//         </div>
//       </div>
   
//     </div>
//   );
// };

// export default App;


import React from 'react'
import CARD from './REALTIMEWEBSITE/WEBSITES/CARD'
   let p="ddddddddddddd"
function App() {
  return (
    <>
  
   <CARD  pro={p}>
   <h1 className='text-gray-900 font-black font-serif pl-5'>TEXT CHANGER</h1>
   </CARD>
   
    </>
  )
}

export default App