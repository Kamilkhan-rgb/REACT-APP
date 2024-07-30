import React from 'react'
import But_1 from './But_1'
import { useContext } from 'react'
import { counterContext } from './CONTEXT_Api'

function BUT() {
  const count =  useContext(counterContext);
  return (
    <>
    <But_1></But_1>
    <button className='w-10 h-10  '>{count}</button>
    </>
  )
}

export default BUT