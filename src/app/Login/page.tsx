"use client"

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"



const Login = () => {
    return (


      <main className='bg-white'>
         <Navbar />

         <section className="my-20">
                <div className="flex flex-col justify-center items-center max-w-lg mx-auto">
                <img
                    src={"image(1).png"}
                    alt="Nike Logo"
                    width={100} height={35}
                    />
                    <div className=" items-center justify-center flex flex-col">
                        <h1 className="font-bold text-xl ">YOUR ACCOUNT</h1>
                        <h1 className="font-bold text-xl ">FOR EVERYTHING </h1>
                        <h1 className="font-bold text-xl ">NIKE</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4 mt-3">
                        <Input type="Email" placeholder="Email" className="w-80" />
                        <Input type="password" placeholder="password" className="w-80" />
                    </div>
                        
                    <div className="flex justify-between max-w-lg mx-auto mt-6 gap-x-10 md:gap-x-16">
                        <h1 className="text-[#BCBCBC] text-[12px] flex gap-1 cursor-pointer hover:text-black items-center"><input type="checkbox" />Keep me signed In</h1>
                        <p className="text-[#BCBCBC] cursor-pointer hover:text-black text-[12px]"   >Forgotten your password?</p>
                    </div>
                    <div className="flex flex-col justify-center items-center mt-4">
                        <p className="text-[#BCBCBC] cursor-pointer hover:text-black  text-[12px]">By logging in, you agree to Nike&apos;s <u>Privacy Policy</u></p>
                        <p className="text-[#BCBCBC] cursor-pointer hover:text-black text-[12px]">and <u>Terms of Use</u></p>
                    </div>


                    <div className="group w-[324px] h-10 relative rounded-[3px] mt-4 bg-white border hover:bg-black  hover:border-black border-neutral-200">
                   <Link href="/">
                     <button className="w-[41.04px] h-[18px] absolute left-[141.58px] top-[10.5px] text-[11px] text-center  text-black group-hover:text-white">
                    Login
                     </button>
                  </Link>
                    </div>
                
                   
                    <p className="mt-2 text-[#BCBCBC] cursor-pointer hover:text-black text-[12px]">Not a Member <u className="hover:text-blue-800 text-black"><Link href={"Join"}>Join us?</Link></u></p>

                   
                </div>
                
            </section>



         <Footer />
        

         </main>



        );
};

export default Login;