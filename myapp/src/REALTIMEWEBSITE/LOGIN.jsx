import React, { useState} from 'react'

function LOGIN() {
    const [count,setcount] =useState(false)
  return (
    <>
    
    
<button className='icon ' onClick={()=> setcount(!count)} >LOGIN</button>
    <div className= {`menu ${count ? 'active' : ""}`}>
    <div className=" text-center ">
          <h1 className="text-[40px] font-black pt-9 ">LOG IN </h1>
           <div className="grid grid-cols-1 m-10  ">
          <input type="email" className="h-10 rounded-[10px] p-3"/>
              <label htmlFor="" className="md: translate-y-[-31.5px] mr-[270px]">EMAIL</label>
          <input type="password" className="h-10 rounded-[10px] p-2"/>
  <label htmlFor="" className="translate-y-[-32px] mr-[240px]">PASSWORD</label>
  
 
           </div>
    </div>
    </div>
    
    </>
  ); 
}

export default LOGIN;
/*     
import React, {useState} from "react";
export default function LOGIN() {
    const [count,setcount] =useState(false)
    console.log(count)
  return (
    
    <div className="h-[100vh]">
<button className='icon ' onClick={()=> setcount(!count)} >===</button>
    <div className= {`menu ${count ? 'active' : ""}`}>
    <div className=" text-center ">
          <h1 className="text-[40px] font-black pt-9 ">LOG IN </h1>
           <div className="grid grid-cols-1 m-10  ">
          <input type="email" className="h-10 rounded-[10px]"/>
              <label htmlFor="" className="md: translate-y-[-31.5px] mr-[270px]">EMAIL</label>
          <input type="password" className="h-10 rounded-[10px] "/>
  <label htmlFor="" className="translate-y-[-32px] mr-[240px]">PASSWORD</label>
   <h1 className="">{}</h1>
 
           </div>
    </div>
    </div>
    </div>
  );
}*/