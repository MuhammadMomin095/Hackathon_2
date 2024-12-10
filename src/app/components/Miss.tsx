"use client"

import Link from 'next/link';
import { useState } from 'react';


const Miss = () => {
    return (

      <div>
     <div className='w-[1344px] h-[977px] left-12 top-[3513.36px]'>
  <div className="absolute left-12 top-[3513.36px]">
  <p className="w-[111.48px] h-[27px] absolute left-0 top-0 text-[22px] font-semibold text-left text-[#111]">
    Don't Miss
  </p>
  <div className="w-[1344px] h-[925px] absolute left-0 top-[52px]">
    <img
      src="5.png"
      className="w-[1344px] h-[700px] absolute left-[-1px] top-[-1px] object-none"
    />
    <div className="w-[1008px] h-[177px] absolute left-[168px] top-[748px]">
      <p className="absolute left-[247.97px] top-0 text-[52px] font-medium text-center uppercase text-[#111]">
        FLIGHT ESSENTIALS
      </p>
      <p className="absolute left-[239.05px] top-[84px] text-[15px] text-center text-[#111]">
        Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
      </p>
      <Link href="Featured">
      <div className="flex justify-start items-start absolute left-[460.81px] top-[138px] overflow-hidden pl-[21.5px] pr-[21.875px] py-[7.5px] rounded-[30px]  bg-white border hover:bg-black  hover:border-black border-neutral-200 group"> 
        <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-center text-black hover:text-white">
          Shop
        </p>
      </div>
      </Link>
    </div>
  </div>
</div>
</div> 
</div> 

);
};

export default Miss;