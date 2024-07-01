import React from "react";
import Link from 'next/link'
import { MdAlternateEmail } from "react-icons/md";

export default function HeroSection() {
  return (
    <div className=' min-h-[60vh] flex items-center justify-between'>
      <div className='space-y-10'>
        <h1 className='text-4xl lg:text-7xl font-bold'>
          This is my hero here section!
          <br />
          <span className=" underline underline-offset-10 decoration-yellow-400 text-3xl padding-top: 15px padding-bottom: 15px">
            {"This is where Snappy Jargon sits."}
          </span>
        </h1>
 
       <p className="; md:w-96 text-lg text-gray-300">
          {
            "Here you will find the elucid ramblings of Lorum and Epsum.  The two authors are better known for their prolific Dadaesque art installations on web apps the world over.  However, here you will find a more readable prose (sidebar- not much more meaningful though)."
          }
        </p>

        <Link href="mailto:fullstack@saibhreas.com" className='inline-block'>
          <div className=' text-1xl flex padding-top: 5px; text-cyan-400'>
            <h1 className='text-l font bold'>
              fullstack <MdAlternateEmail />saibhreas.com</h1>
          </div>
        </Link>
      </div>
      <div>

        <div className='w-72 h-72 spacey-3 -rotate-[36deg]'>
          <div className='flex gap-3 translate-x-8'>
            <div className=' w-32 h-32 rounded-full bg-yellow-400'></div>
            <div className=' w-32 h-32 rounded-2xl bg-cyan-500'></div>
          </div>

          <div className='flex gap-3 -translate-x-8'>
            <div className=' w-32 h-32 rounded-2xl bg-cyan-600'></div>
            <div className=' w-32 h-32 rounded-full bg-lime-400'></div>
          </div>

          


        </div>
      </div>
    </div>
  );
}
