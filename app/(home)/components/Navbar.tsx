import Link from 'next/link'
import React from 'react'


import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Navbar() {
  const socials = [
    {
      Link: 'https://github.com/saibhreas',
      Label: 'Github',
      Icon: SiGithub,
    },
    {
      Link: 'https://www.linkedin.com/in/siobhanknuttel',
      Label: 'Linkedin',
      Icon: SiLinkedin ,
    },
  ];
  return (

    <nav className='py-10 flex justify-between item-center'>
      <h1 className="text-2xl font-bold underline underline-offset-5 decoration-yellow-400 -rotate-2">
        Saibhreas
      </h1>
      <div className=' flex items-center gap-5'>
        {socials.map((social, index)=>{
          const Icon = social.Icon

          return (
            <Link href={social.Link} 
              key={index} 
              aria-label={social.label}
              >
              <Icon className='w-5 h-5 hover:scale-125 transition-all'/>
            </Link>
          )
        })}
      </div>

    </nav>
  )
}
