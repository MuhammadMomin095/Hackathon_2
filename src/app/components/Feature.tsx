"use client"

import Link from 'next/link';
import { useState } from 'react';


const Feature = () => {
    return (


<div>
<div className=' w-[1344px]  top-[1807.36px] left-12 h-[977px]'>
        <div className=" absolute left-12 top-[1807.36px]">
        <h1 className="w-[96.26px] font-semibold h-[27px] text-2xl left-0 top-0 text-[23px] text-left text-[#111]">
          Featured
        </h1>
        <div className="w-[1344px] h-[925px] absolute left-0 top-[52px]">
          <img
            src="3.png"
            className="w-[1344px] h-[700px] absolute left-[-1px] top-[-1px] object-none"
          />
          
          <div className="w-[1008px] h-[177px] absolute left-[168px] top-[748px]">
            <p className="absolute left-[100.25px] top-0 text-[54px] font-medium text-center uppercase text-[#111]">
              STEP INTO WHAT FEELS GOOD
            </p>
            <p className="absolute left-[268.06px] top-[84px] text-[15px] text-center text-[#111]">
              Cause everyone should know the feeling of running in that perfect pair.
            </p>
            <div className="flex justify-start items-start absolute left-[424.78px] top-[138px] overflow-hidden pl-[22.5px] pr-[23.921875px] py-[7.5px] rounded-[30px] bg-white border hover:bg-black  hover:border-black border-neutral-200 group">
              <Link href="Featured">
              <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-center text-black group-hover:text-white ">
                Find Your Shoe
              </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
 

);
};

export default Feature;