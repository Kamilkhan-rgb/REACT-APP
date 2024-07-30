import React from 'react'
// import { useState } from 'react'
function FOOTER() {
  
  return (
    <>
      <div className='max-w-[35%] h-[500px] bg-emerald-950 m-auto mt-10 rounded-md' >
        <h1 className='font-bold text-5xl pt-10 text-white text-center'>LOG IN</h1>
       
       
        <div className='font-bold  '>
          <input type='text' className='mt-[70px] ml-[40px] pb-5 w-[80%]'/>
          <br />
          <input type="password"  className='mt-[30px] ml-[40px] pb-5 w-[80%]'/>

        </div>

        <div className='flex justify-center text-white  mt-[10px]'>
          <a href="" className='underline' >FORGETTE PASSWORD </a>
          <p className='px-4 text-center'>DON'T FORGETTE ME</p>
        </div>
        <button className='p-2 w-[80%] bg-slate-200 font-black  mt-[20px] ml-12 rounded-lg '>LOG IN</button>
      </div>
     
    </>
  )
}

export default FOOTER;