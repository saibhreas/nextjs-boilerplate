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

    <div>
      <h1>
        Saibhreas
      </h1>
      <div>
        {socials.map((social, index)=>{
          const Icon = social.Icon

          return (
            <Link href={social.Link} 
              key={index} 
              aria-label={social.label}>
              <Icon  />
            </Link>
          )
        })}
      </div>

    </div>
  )
}
