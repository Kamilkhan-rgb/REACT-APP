// const CARD = ({ product }) => {
//     return (
//       <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
//         <img className="w-full h-48 object-cover" src={product.thumbnail} alt={product.title} />
//         <div className="px-6 py-4">
//           <div className="font-bold text-xl mb-2">{product.title}</div>
//           <p className="text-gray-700 text-base">{product.description}</p>
//           <p className="text-gray-900 text-xl font-bold mt-4">${product.price}</p>
//         </div>
//       </div>
//     );
//   };
  
//   export default CARD;
import React, { useState } from 'react'

function CARD({p,children}) {
 const [text,settext] = useState('')
  const  ONCHANGE =(event)=>{
        settext(event.target.value)
  }
const ONClick =()=>{
     let TOUP =text.toUpperCase();
     settext(TOUP)
}

  return (
    <>
    <h1>{p}</h1>
    <h1>{children}</h1>
    <div className='w-[100%] h-[100vh] bg-amber-700'>
       
            <div className='w-full h-[80vh] px-9 pt-5'>
              
       <textarea name="" id="" value={text} rows={18} onChange={ONCHANGE} className='w-full p-5'></textarea>
        </div>
        <button  className='w-full' onClick={ONClick}>CONVERT TO UPPERCASE</button>
    </div>
    </>
    
  )
}

export default CARD