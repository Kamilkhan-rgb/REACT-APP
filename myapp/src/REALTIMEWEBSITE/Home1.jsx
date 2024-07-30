import React from 'react'
import About1 from './About1';
// import NAVBAR from './NAVBAR';
//  import About1 from './About1';
function Home1() {
  let array = ["", "", "", "","","",];
  return (
    <>
     
     
     <div className='w-[100%] h-[100vh] bg-blue-600  border-b-8 border-blue-900'>
      <h1 className='text-center  text-4xl font-black text-black relative top-8'>OUR SERVICES </h1>
      <ul className=' grid grid-cols-3  gap-x-2  px-4 absoluate top-[780px] [150px] w-[100%] h-[500px] text-center' >
        {array.map((v,i) => <li  className='bg-black text-5xl mt-10'key={i}>{v}</li>)}
        
      
      </ul>
      </div>
   <About1></About1>
    </>
  )
}

export default Home1;