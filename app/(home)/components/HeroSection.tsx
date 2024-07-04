import React from "react";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

import Image from "next/image";
import blue7 from "../components/assets/Blue7side1.png";
import orange13 from "../components/assets/Ornge13side1.png";
import { MovingBorder, MovingBorderBtn } from "@/components/ui/moving-border";
import Title from "./Title";

export default function HeroSection() {
  return (
    <div className=" min-h-[40vh] flex flex-col-reverse gap-10  lg:gap-10 lg:flex-row items-center justify-between bg-#0a194d rounded-lg p-5">
      
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-2xl lg:text-7xl font-bold italic">Welcome</h1>
        <h2 className=" underline underline-offset-10 decoration-#ff9425 text-3xl padding-top: 10px padding-bottom: 5px">
          {"This is an incremental build of "}
        </h2>
        <h2 className=" underline underline-offset-10 decoration-#ff9425 text-3xl padding-top: 5px padding-bottom: 10px font-bold italic">
          {"a Next JS full-stack."}
        </h2>

        <p className="; md:w-96 text-lg  text-gray-300">
          {
            "This project is a sandbox to learn the Next JS framework combined with Vercel.  This is the beginning stages of development of this basic boilerplate into a blog site with an AI Chat bot integrated down the line."
          }
        </p>

        <Link href="mailto:fullstack@saibhreas.com" className='inline-block group'>
          <Title text ="Get In Touch" />
        </Link>
      </div>
      
      <div className="relative">
        <div className="w-72 h-72 spacey-3 -rotate-[35deg] relative p-1">
          <div className="flex gap-4 translate-x-7">
            <div className=" w-32 h-32 rounded-full -rotate-[38deg]">
              <Image src={orange13} alt="Blue7side1" width={150} height={2} />
            </div>
            <div className=" w-32 h-32 rounded-3xl rotate-[27deg] ">
              <Image src={blue7} alt="Blue7side1" width={150} height={2} />
            </div>
          </div>

          <div className="flex gap-1 -translate-x-7">
            <div className=" w-32h-32 rounded-3xl -rotate-[35deg]">
              <Image src={blue7} alt="Blue7side1" width={150} height={2} />
            </div>
            <div className=" w-32 h-32 rounded-full rotate-[15deg]">
              <Image src={orange13} alt="Blue7side1" width={150} height={2} />
            </div>
          </div>
          
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>

        </div>
        
        <div className="absolute bottom-0">
          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold italic">
            <p> Available for work</p>
          </MovingBorderBtn>
        </div>
      </div>
    </div>
  );
}
