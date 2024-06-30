import React from "react";
import Link from 'next/link'
import { MdAlternateEmail } from "react-icons/md";

export default function HeroSection() {
  return (
    <div>
      <div>
        <h1>
          This is my hero here section!
          <br />
          <span className=" underline underline-offset-5 decoration-yellow-400 ">
            {"This is where Snappy Jargon sits."}
          </span>
        </h1>
        <p>
          {
            "Here you will find the elucid ramblings of Lorum an Epsum.  The two authors are better known for their prolific Dadaesque art installations on web apps the world over.  However, here you will find a more readable prose (sidebar- not much more meaningful)."
          }
        </p>
        <Link href="mailto:fullstack@saibhreas.com">
          <div className=' text-2xl flex padding-top: 5px; text-cyan-400'>
          fullstack<MdAlternateEmail />saibhreas.com
          </div>
        </Link>
      </div>
    </div>
  );
}
