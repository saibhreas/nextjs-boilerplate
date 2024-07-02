import React from "react";
import Link from 'next/link'
import { MdEmail } from "react-icons/md";

export default function HeroSection() {
  return (
    <div className=' min-h-[60vh] flex flex-col-reverse gap-12  lg:gap-10 lg:flex-row items-center justify-between'>
      <div className='space-y-10 text-center lg:text-left'>
        <h1 className='text-3xl lg:text-7xl font-bold italic'>
          Welcome 
          <br />
          <span className=" underline underline-offset-10 decoration-amber-400 text-3xl padding-top: 15px padding-bottom: 15px">
            {"This is an incremental build of a Next JS full-stack."}
          </span>
        </h1>
 
       <p className="; md:w-96 text-lg  text-gray-300">
          {
            "This project is a sandbox to learn the Next JS framework combined with Vercel.  This is the beginning stages of development of this basic boilerplate into a blog site with an AI Chat bot integrated down the line."
            
          }
        </p>

        <Link href="mailto:fullstack@saibhreas.com" className='inline-block group'>
          <div >
            <h1 className='text-2xl font bold group-hover:text-cyan-500 '> Contact </h1>
            <div className=' w-40 h-2 bg-amber-400 rounded-full'></div>
            <div className=' w-40l h-2 bg-cyan-400 rounded-full translate-x-3'></div>
          </div>
        </Link>
      </div>
      <div>

        <div className='w-72 h-72 spacey-3 -rotate-[25deg] relative p-2'>
          <div className='flex gap-5 translate-x-8'>
            <div className=' w-32 h-32 rounded-full bg-amber-300 '></div>
            <div className=' w-32 h-32 rounded-3xl bg-cyan-500 '></div>
          </div>

          <div className='flex gap-5 -translate-x-8'>
            <div className=' w-32 h-32 rounded-3xl bg-cyan-600'></div>
            <div className=' w-32 h-32 rounded-full bg-amber-300'></div>
          </div>
          <div className='glow absolute top-[40%] right-1/2 -z-10'>

          </div>
          


        </div>
      </div>
    </div>
  );
}
