"use client"

import Link from 'next/link';
import { useState } from 'react';


const Hero = () => {
    return (


       
      <div className="hero w-[1440px] h-[5442.36px] relative">
      <div className="w-[1440px] h-[58px] absolute left-0 top-0 overflow-hidden bg-neutral-100">
        <div className="w-[1440px] h-11 absolute left-0 top-2.5">
          <p className="w-[105.15px] h-[17px] absolute left-[667.52px] top-[-1px] text-[15px] font-medium text-center text-[#111]">
            Hello Nike App
          </p>
          <div className="flex justify-start items-start absolute left-[558.23px] top-[19px] pl-[11px] pr-[11.53125px]">
            <p className="flex-grow-0 flex-shrink-0 text-[11px] text-center text-[#111]">
              <span className="flex-grow-0 flex-shrink-0 text-[11px] text-center text-[#111]">
                Download the app to access everything Nike.{" "}
              </span>
              <span className="flex-grow-0 flex-shrink-0 text-[11px] font-medium text-center text-[#111]">
                Get Your Great
              </span>
            </p>
          </div>
        </div>
      </div>
    
    
    
    
    
    
    
      <div className="w-px h-px absolute left-0 top-[-96px]">
        <p className="absolute left-0 top-[-29px] text-7xl font-medium text-left uppercase text-[#111]" />
        <p className="absolute left-0 top-[-11px] text-base text-left text-[#111]" />
      </div>
      <div className="hero1 w-[1344px] h-[977px] group-hover:m-4 absolute left-12 top-[58px]">
        <img
          src="1.png"
          className="w-[1344px] h-[700px] absolute left-[-1px] top-[-1px] object-none"
        />
        <div className="hero2 w-[1008px] h-[229px] absolute left-[168px] top-[748px]">
          <p className="absolute left-[468.88px] top-0 text-[15px] font-medium text-center text-[#111]">
            First Look
          </p>
          <p className="absolute left-[216.38px] top-7 text-[56px] font-medium text-center uppercase text-[#111]">
            Nike Air Max Pulse
          </p>
          <div className="flex justify-start items-start absolute left-0 top-28 pl-[248.546875px] pr-[248.453125px]">
            <p className="flex-grow-0 flex-shrink-0 text-[15px] text-center text-[#111]">
              <span className="flex-grow-0 flex-shrink-0 text-[15px] text-center text-[#111]">
                Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
              </span>
              <br />
              <span className="flex-grow-0 flex-shrink-0 text-[15px] text-center text-[#111]">
                —designed to push you past your limits and help you go to the max.
              </span>
            </p>
          </div>
          <div className="flex justify-start items-start absolute left-0 top-[184px] gap-1.5 pl-[373.625px] pr-[379.640625px] pt-1.5">
            <div className="group flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden pl-[21.5px] pr-[22.078125px] py-[7.5px] rounded-[30px] bg-white border hover:bg-black  hover:border-black border-neutral-200">
           < Link href="Product">
              <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-center text-black group-hover:text-white">
                Notify Me
              </p>
              </Link>

            </div>
            <div className="group flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden pl-[21.5px] pr-[22.65625px] py-[7.5px] rounded-[30px] bg-white border hover:bg-black  hover:border-black border-neutral-200">
              <Link href="Product">
              <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-center text-black group-hover:text-white ">
                Shop Air Max
              </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>

    
    
);
};

export default Hero;