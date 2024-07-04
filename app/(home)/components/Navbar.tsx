import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from '../components/assets/Mono2Sabdark.png'

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
      <div>
        <Image
          src={logo}
          alt="Sab Logo"
          width={100}
          height={80}
         />
      </div>

      <div className=' flex items-center gap-5'>
        {socials.map((social, index)=>{
          const Icon = social.Icon
          const Label = social.Label

          return (
            <Link href={social.Link} 
              key={index} 
              aria-label={social.Label}
              >
              <Icon className='w-5 h-5 hover:scale-125 transition-all'/>
            </Link>
          )
        })}
      </div>

    </nav>
  )
}
