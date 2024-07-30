import React from 'react'
import { useContext } from 'react'
import { counterContext } from './CONTEXT_Api'
import BUT2 from './BUT2'

function But_1() {
    const counter =useContext(counterContext)
  return (
    <>
    <BUT2></BUT2>
    <button className='w-10 h-10 bg-slate-500'>{counter}</button>
    </>
  )
}

export default But_1