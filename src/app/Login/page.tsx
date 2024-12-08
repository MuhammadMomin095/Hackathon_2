"use client"

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const Login = () => {
    return (


        <div>
         <Navbar />



         <div className="w-[380px] h-[489px] relative left-[530px] bg-white">
  <div className="w-[324px] h-32 absolute left-7 top-7">
    <img
      src="image.png"
      className="w-[324px] h-[17px] absolute left-[-1px] top-[-1px] object-none"
    />
    <p className="w-[186.5px] h-[57px] absolute left-[68.84px] top-[46px] text-lg font-bold text-center text-[#111]">
      YOUR ACCOUNT FOR EVERYTHING NIKE
    </p>
  </div>
  <div className="w-[324px] h-[305px] absolute left-7 top-[156px] overflow-hidden">
    <div className="w-[324px] h-10 absolute left-0 top-[5px] rounded-[3px] bg-white border border-neutral-200">
      <div className="w-[290px] h-4 absolute left-[17px] top-3 overflow-hidden">
        <input type='email' className="w-[88.9px] h-4 absolute left-0 top-0 text-sm text-left text-[#8d8d8d]" placeholder=' Email address'/>
         
       
      </div>
    </div>
    <div className="w-[324px] h-10 absolute left-0 top-[58px] rounded-[3px] bg-white border border-neutral-200">
      <div className="w-[290px] h-4 absolute left-[17px] top-3 overflow-hidden">
        <input type='password' className="w-[61.67px] h-4 absolute left-0 top-0 text-sm text-left text-[#8d8d8d]" placeholder='Password'/>
          
       
      </div>
    </div>
    <div className="w-[162px] h-5 absolute left-0 top-[121px]">
      <p className="w-[99.61px] h-3.5 absolute left-[34px] top-[4.3px] text-xs text-left hover:text-black cursor-pointer text-[#8d8d8d]">
        Keep me signed in
      </p>
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 absolute left-0 top-0"
        preserveAspectRatio="none"
      >
        <rect x="0.5" y="0.5" width={19} height={19} rx="2.5" stroke="#BCBCBC" />
        <g clipPath="url(#clip0_1_2023)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.63121 10.6863L6.67606 8.73415L5.11133 10.2959L8.63128 13.8104L14.8891 7.56229L13.3244 6L8.63121 10.6863Z"
            fill="#111111"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_2023">
            <rect width="9.77778" height={8} fill="white" transform="translate(5.11133 6)" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <p className="w-[139.61px] h-3.5 absolute left-[184.59px] top-[125px] hover:text-black cursor-pointer text-xs text-right text-[#bcbcbc]">
      Forgotten your password?
    </p>
    <div className="w-[324px] h-[59px] absolute left-0 top-[162px]">
      <p className="w-[279.31px] h-[30px] absolute left-[22.44px] top-1 text-xs text-center hover:text-black cursor-pointer text-[#8d8d8d]">
        By logging in, you agree to Nike's Privacy Policy and Terms of Use.
      </p>
    </div>
    <div className="w-[324px] h-10 absolute left-0 top-[226px] rounded-[3px]  group bg-white border hover:bg-black  hover:border-black border-neutral-200">
      <Link href="/">
      <p className="w-[41.04px] h-[18px] absolute left-[141.58px] top-[10.5px] cursor-pointer text-[11px] text-center  text-black group-hover:text-white ">
        SIGN IN
      </p>
      </Link>
    </div>
    <div className="w-[324px] h-6 absolute left-0 top-[276px]">
      <p className="w-[129.61px] h-3.5 absolute left-[97.3px] top-2.5 text-xs text-center">
        <span className="w-[129.61px] h-3.5 hover:text-black cursor-pointer text-xs text-center text-[#8d8d8d]">
          Not a Member?{" "}
        </span>
        <Link href="Join">
        <span className="w-[129.61px] h-3.5 text-xs text-center cursor-pointer hover:text-blue-500 text-[#111]">Join Us.</span>
        </Link>
      </p>
    </div>
  </div>
</div>















         <Footer />
        

        </div>




        );
};

export default Login;