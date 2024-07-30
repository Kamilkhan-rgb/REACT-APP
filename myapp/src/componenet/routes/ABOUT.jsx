import React, { useState } from 'react'

function ABOUT() {
  const [count,setcount] = useState(false)
  return (
    <>
    <button className=' icon 'onClick={()=> setcount(!count) } >
      {count ? "LIGHT MODE" :'DARK MODE' }
 </button>
 <div className= {` ${count ?   "white" : 'red'}`}>
     
       </div>
    </>
  )
}

export default ABOUT