"use client"

import { useState } from 'react';
import Link from "next/link"
import { Button } from "./ui/button"


const Header = () => {
    return(
        <section className="flex justify-center flex-col items-center bg-[#fafafa] m-4 ">
        <div className="flex justify-center flex-col items-center pb-4">
        <h3 className="text-xl text-black font-bold">Hello Nike App</h3>
     <p className="text-sm text-gray-600" >
     <span>Download the app to access everything Nike.</span>{" "}
       <Link href={"/"}> Get Your Great</Link>
    </p>
        </div>
        <img src="1.png" alt={"shoes"} width={1344} height={700}/>
        <div className="flex justify-center items-center flex-col p-10 text-center
        ">
            <p className="text-sm">First Look</p>
            <h2 className=" text-4xl font-bold uppercase">Nike Air Max Pulse</h2>
            <p  className="text-sm leading-5 w-full pt-3 pb-2 text-center
            lg:w-[60%]">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
            —designed to push you past your limits and help you go to the max.
       
            </p>
            <div className='flex justify-center items-center gap-3'>
            <div className="group hover:border-black  ">
            <Button className='border-neutral-200 hover:bg-black bg-white text-black group-hover:text-white'>Notify Me</Button>
            </div>
            <div className="group    hover:border-black ">
            <Button className='border-neutral-200 hover:bg-black bg-white text-black group-hover:text-white'>Shop Air Max</Button></div>
            </div>
        </div>
    </section>










               
      
);
};

export default Header;