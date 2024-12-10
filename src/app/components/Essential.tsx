"use client"

import Link from 'next/link';
import { useState } from 'react';
import Footer from '../components/Footer';




const Essential = () => {
    return (

<div>
      <div className='w-[1344px] h-[592px] left-12 top-[4574.36px]'>
  <div className="absolute left-12 top-[4574.36px]">
  <p className="w-[170.61px] h-[27px] absolute left-0 top-0 text-[23px] font-semibold text-left text-[#111]">
    The Essentials
  </p>
  <div>
  <div className='w-[1356px] h-[540px] left-[-6px] top-[52px]'>
  <div className="absolute left-[-6px] top-[52px]">
    <div className="w-[440px] h-[540px] absolute left-1.5 top-0">
      <img
        src="4.png"
        className="w-[440px] h-[540px] absolute left-[-1px] top-[-1px] object-none"
      />
        <Link href="Featured">

      <div className="group flex justify-start items-start absolute left-12 top-[452.98px] overflow-hidden pl-[21.5px] pr-[20.6875px] py-[7.5px] rounded-[30px] bg-white border hover:bg-black  hover:border-black border-neutral-200 ">
        
        <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-left text-black group-hover:text-white">
          Men's
        </p>
        
      </div>
      </Link>

    </div>
    <div className="w-[440px] h-[540px] absolute left-[458px] top-0">
      <img
        src="9.png"
        className="w-[440px] h-[540px] absolute left-[-1px] top-[-1px] object-none"
      />
      
      <Link href="Featured">
      <div className="group flex justify-start items-start absolute left-12 top-[452.98px] overflow-hidden pl-[21.5px] pr-[22.390625px] py-[7.5px] rounded-[30px] bg-white border hover:bg-black  hover:border-black border-neutral-200">
     <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-left  text-black group-hover:text-white">
          Women's
        </p>
      </div>
      </Link>
    </div>
    <div className="w-[440px] h-[540px] absolute left-[910px] top-0">
      <img
        src="7.png"
        className="w-[440px] h-[540px] absolute left-[-1px] top-[-1px] object-none"
      />
        <Link href="Featured">

      <div className="group flex justify-start items-start absolute left-12 top-[452.98px] overflow-hidden pl-[21.5px] pr-[22.6875px] py-[7.5px] rounded-[30px] bg-white border hover:bg-black  hover:border-black border-neutral-200">
       <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-left text-black group-hover:text-white">
          Kids'
        </p>
      </div>
      </Link>
      </div>
    </div>
    </div>

  </div>
  </div>









  </div>

</div>





  
    



      
    
    
);
};

export default Essential;