import React from 'react'

export default function Title({
  text, 
  className,
  }: {
    text:string,
    className?:string,
  }) {
  
  return (

    <div  className = {className}>
      <h1 className='text-2xl font bold group-hover:text-cyan-500 transition-all'>
         
         {text}
      </h1>
      <div className=' w-35 h-2 bg-amber-600 rounded-full'></div>
      <div className=' w-35 h-2 bg-blue-500 rounded-full translate-x-1.5'></div>
    </div>

  )
}

