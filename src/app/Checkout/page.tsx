"use client"

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const Checkout = () => {
    return (


        <div>
         <Navbar />

         <div className="w-[880px] h-[2376px]">
         <div className="w-[880px] h-[2376px] absolute left-[308.5px] top-[72.8px]">
  <div className="w-80 h-[721px] absolute left-[560px] top-[70px] bg-white">
    <div className="w-80 h-[721px] absolute left-0 top-0">
      <p className="w-[160.37px] h-[26px] absolute left-0 top-[19px] text-[21px] font-medium text-left text-[#111]">
        Order Summary
      </p>
      <div className="w-80 h-[677px] absolute left-0 top-11 bg-white">
        <div className="w-80 h-[135px] absolute left-0 top-3 border-t-0 border-r-0 border-b border-l-0 border-neutral-200">
          <div className="flex justify-start items-start absolute left-0 top-0 gap-[180.0625px] py-[9px]">
            <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left cursor-pointer hover:text-[#111] text-[#757575]">
              Subtotal
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-sm text-right cursor-pointer hover:text-[#111] text-[#757575]">
              ₹ 20 890.00
            </p>
          </div>
          <div className="flex justify-start items-start absolute left-0 top-[34px] gap-[163.578125px] pr-[0.421875px] py-[9px]">
            <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left cursor-pointer  hover:text-[#111] text-[#757575]">
              Delivery/Shipping
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-[15px] text-right cursor-pointer text-[#8d8d8d]">Free</p>
          </div>
          <div className="w-80 h-[54px] absolute left-0 top-20 border-t border-r-0 border-b-0 border-l-0 border-neutral-200">
            <p className="absolute left-0 top-[19.5px] text-[15px] font-medium text-left cursor-pointer hover:text-[#111] text-[#757575]">
              Total
            </p>
            <p className="w-[84.57px] h-[19px] absolute left-[235.63px] top-[17px] text-sm font-medium text-right cursor-pointer hover:text-[#111] text-[#757575]">
              ₹ 20 890.00
            </p>
          </div>
        </div>
        <p className="w-[316px] h-3 absolute left-0 top-[165px] text-[9px] text-left text-[#111]">
          (The total reflects the price of your order, including all duties and taxes)
        </p>
        <div className="w-80 h-[474px] absolute left-0 top-[203px]">
          <p className="absolute left-0 top-0 text-[15px] font-bold text-left text-[#111]">
            Arrives Mon, 27 Mar - Wed, 12 Apr
          </p>
          <div className="flex justify-start items-start absolute left-0 top-8 gap-3">
            <img
            src='12.png'
             className="flex-grow-0 flex-shrink-0 w-52 h-52 relative overflow-hidden" />
            <div className="flex-grow-0 flex-shrink-0 w-[100px] h-[178.78px] relative">
              <p className="w-[85.53px] absolute left-0 top-0 text-[13px] text-left text-[#111]">
                Nike Dri-FIT ADV TechKnit Ultra Men's Short-Sleeve Running Top
              </p>
              <p className="absolute left-0 top-[119px] text-[13px] text-left text-[#8d8d8d]">
                Qty 1
              </p>
              <p className="absolute left-0 top-[138.59px] text-[13px] text-left text-[#8d8d8d]">
                Size L
              </p>
              <p className="absolute left-0 top-[158.19px] text-[13px] text-left text-[#8d8d8d]">
                ₹ 3 895.00
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start absolute left-0 top-[253px] gap-3">
            <img
            src='checkout/frame-2.png' 
            className="flex-grow-0 flex-shrink-0 w-52 h-52 relative overflow-hidden" />
            <div className="flex-grow-0 flex-shrink-0 w-[100px] h-[130.78px] relative">
              <p className="w-[99.26px] absolute left-0 top-0 text-sm text-left text-[#111]">
                Nike Air Max 97 SE Men's Shoes
              </p>
              <p className="absolute left-0 top-[71px] text-[13px] text-left text-[#8d8d8d]">
                Qty 1
              </p>
              <p className="absolute left-0 top-[90.59px] text-[13px] text-left text-[#8d8d8d]">
                Size UK 8
              </p>
              <p className="absolute left-0 top-[110.19px] text-[13px] text-left text-[#8d8d8d]">
                ₹ 16 995.00
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col justify-start items-start absolute left-0 top-[70px]">
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1 pt-5">
      <p className="flex-grow-0 flex-shrink-0 text-[21px] font-medium text-left text-[#111]">
        How would you like to get your order?
      </p>
      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-6 pb-6">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pr-[2.39373779296875px] pt-[7px] pb-[9px]">
          <p className="flex-grow-0 flex-shrink-0 w-[437.61px] text-[15px] text-left text-[#757575]">
            Customs regulation for India require a copy of the recipient's KYC. The address on the
            KYC needs to match the shipping address. Our courier will contact you via SMS/email to
            obtain a copy of your KYC. The KYC will be stored securely and used solely for the
            purpose of clearing customs (including sharing it with customs officials) for all orders
            and returns. If your KYC does not match your shipping address, please click the link for
            more information. Learn More
          </p>
        </div>
        <div className="flex justify-start group items-start flex-grow-0 flex-shrink-0 relative gap-6 pl-[21px] pr-[307px] py-[29px] rounded-xl border-2 bg-white hover:bg-black  hover:border-black border-neutral-200">
          <svg
            width={25}
            height={25}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 opacity-0 group-hover:opacity-100 flex-shrink-0 w-6 h-6 relative"
            preserveAspectRatio="none"
          >
            <g clipPath="url(#clip0_1_5558)">
              <path
                d="M23.4538 10.9198L20.8077 3.41211H4.19228L1.60767 10.7352V22.4275H23.4538V10.9198ZM4.8692 4.33519H20.1307L22.2846 10.4275H2.71536L4.8692 4.33519ZM22.4692 21.566H2.53074V11.3506H22.5307L22.4692 21.566Z"
                fill="#111111"
                stroke="white"
                strokeWidth="0.692308"
                strokeLinejoin="round"
              />
              <path
                d="M16.19 14.0578L16.0974 13.9587C15.8363 13.6794 15.3982 13.6647 15.1189 13.9259C15.1156 13.929 15.1124 13.9321 15.1092 13.9352L11.1499 17.7845L9.89067 16.5602C9.61652 16.2937 9.17822 16.2998 8.9117 16.574C8.90856 16.5772 8.90547 16.5804 8.9024 16.5837L8.8098 16.6828C8.55224 16.9582 8.56251 17.3891 8.83289 17.652L10.6673 19.4355C10.936 19.6967 11.3638 19.6967 11.6325 19.4355L16.1669 15.027C16.4373 14.7641 16.4476 14.3332 16.19 14.0578Z"
                fill="#111111"
              />
              <path
                d="M12.9615 4.48926H12.0385V10.0277H12.9615V4.48926Z"
                fill="#D8D8D8"
                stroke="white"
                strokeWidth="0.923077"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_5558">
                <rect width={24} height={24} fill="white" transform="translate(0.5 0.796875)" />
              </clipPath>
            </defs>
          </svg>
          <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-center text-black group-hover:text-white">
            Deliver It
          </p>
        </div>
      </div>
    </div>
    <div className="flex-grow-0 flex-shrink-0 w-[440px] h-[1504px] relative">
      <div className="flex flex-col justify-start items-start absolute left-0 top-0 gap-7 pt-5 pb-2">
        <p className="flex-grow-0 flex-shrink-0 text-[21px] font-medium text-left text-[#111]">
          Enter your name and address:
        </p>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
          <div className="flex-grow-0 flex-shrink-0 w-[440px] h-[616px] relative">
            <div
              className="flex justify-start items-start absolute left-0 top-0 overflow-hidden pl-4 pr-[250px] py-4 rounded bg-white"
              style={{ boxShadow: "0px 0px 0px 1px #ccc" }}
            >
              
              <input type='text' className="flex-grow-0 flex-shrink-0 text-base text-left text-black" placeholder='First Name'/>
           
            </div>
            <div
              className="flex justify-start items-start absolute left-0 top-[88px] overflow-hidden pl-4 pr-[250px] py-4 rounded bg-white"
              style={{ boxShadow: "0px 0px 0px 1px #ccc" }}
            >
              <input type='text'
               className="flex-grow-0 flex-shrink-0 text-base text-left text-black" placeholder='Last Name'/>
            </div>
            <div className="w-[420px] h-20 absolute left-0 top-44">
              <div
                className="flex justify-start items-start absolute left-0 top-0 overflow-hidden pl-4 pr-[250px] py-4 rounded bg-white"
                style={{ boxShadow: "0px 0px 0px 1px #ccc" }}
              >
                <input type='text' className="flex-grow-0 flex-shrink-0 text-base text-left text-black" placeholder='Address Line 1'/>
                  
               
              </div>
              <p className="absolute left-4 top-14 text-[11px] text-left text-[#757575]">
                We do not ship to P.O. boxes
              </p>
            </div>
            <div
              className="flex justify-start items-start absolute left-0 top-[264px] overflow-hidden pl-4 pr-[250px] py-4 rounded bg-white"
              style={{ boxShadow: "0px 0px 0px 1px #ccc" }}
            >
              <input type='text' className="flex-grow-0 flex-shrink-0 text-base text-left text-black" placeholder='Address Line 2' />
                
              
            </div>
            <div
              className="flex justify-start items-start absolute left-0 top-[352px] overflow-hidden pl-4 pr-[250px] py-4 rounded bg-white"
              style={{ boxShadow: "0px 0px 0px 1px #ccc" }}
            >
              <input type='text' className="flex-grow-0 flex-shrink-0 text-base text-left text-black" placeholder='Address Line 3'/>
                
            
            </div>
            <div
              className="flex justify-start items-start absolute left-0 top-[440px] overflow-hidden pl-4 pr-[103.1875px] py-4 rounded bg-white"
              style={{ boxShadow: "0px 0px 0px 1px #ccc" }}
            >
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">
                Postal Code
              </p>
            </div>
            <div
              className="flex justify-start items-start absolute left-[228.81px] top-[440px] overflow-hidden pl-4 pr-[136.1875px] py-4 rounded bg-white"
              style={{ boxShadow: "0px 0px 0px 1px #ccc" }}
            >
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">Locality</p>
            </div>
            <div
              className="flex flex-row-reverse justify-start items-center absolute left-0 top-[528px] overflow-hidden gap-[54.1875px] p-4 rounded bg-white"
              style={{ boxShadow: "0px 0px 0px 1px #ccc" }}
            >
              <svg
                width={15}
                height={9}
                viewBox="0 0 15 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 w-3.5 h-2 relative"
                preserveAspectRatio="none"
              >
                <g clipPath="url(#clip0_1_5591)">
                  <path
                    d="M1.6875 1.79688L7.6875 7.79687L13.6875 1.79687"
                    stroke="#111111"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_5591">
                    <rect
                      width={14}
                      height={8}
                      fill="white"
                      transform="translate(0.6875 0.796875)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="flex-grow-0 flex-shrink-0 text-base text-left text-[#8d8d8d]">
                State/Territory
              </p>
            </div>
            <div className="w-[211.19px] h-14 absolute left-[228.81px] top-[528px]">
              <div
                className="flex justify-start items-start absolute left-0 top-0 overflow-hidden pl-4 pr-[158.1875px] py-4 rounded bg-white"
                style={{ boxShadow: "0px 0px 0px 1px #ccc" }}
              >
                <p className="flex-grow-0 flex-shrink-0 text-base text-left text-black">India</p>
              </div>
              <div className="w-2 h-2 absolute left-[186.19px] top-[25px] rounded bg-[#19ab20]" />
            </div>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[440px] h-[104px] relative">
            <div className="flex justify-start items-start absolute left-px top-[3px] pl-8 pr-[189px]">
              <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#111]">
                Save this address to my profile
              </p>
              <svg
                width={19}
                height={19}
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0 group border w-[18px] h-[18px] absolute left-0 top-0"
                preserveAspectRatio="none"
              >
                <g clipPath="url(#clip0_1_5602)">
                  <path
                    d="M14 1.29688H5C2.79086 1.29688 1 3.08774 1 5.29688V14.2969C1 16.506 2.79086 18.2969 5 18.2969H14C16.2091 18.2969 18 16.506 18 14.2969V5.29688C18 3.08774 16.2091 1.29688 14 1.29688Z"
                    fill="white"
                    stroke="#CCCCCC"
                  />
                </g>
              <rect className='opacity-0 group-hover:opacity-100' width="24" height="24" rx="4" fill="#6699FF"></rect>
                
                <defs>
                  <clipPath id="clip0_1_5602">
                    <rect width={18} height={18} fill="white" transform="translate(0.5 0.796875)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex justify-start items-start absolute left-0 top-[59px] pl-8 pr-[183px]">
              <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#111]">
                Make this my preferred address
              </p>
              <div className="flex-grow-0 flex-shrink-0 w-[18px] h-[18px] rounded bg-[#ccc] border border-[#ccc]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start absolute left-0 top-[800px] gap-7 pt-5 pb-2">
        <p className="flex-grow-0 flex-shrink-0 text-[21px] font-medium text-left text-[#111]">
          What's your contact information?
        </p>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2 pb-2">
          <div className="flex-grow-0 flex-shrink-0 w-[440px] h-20 relative">
            <div
              className="flex justify-start items-start absolute left-0 top-0 overflow-hidden pl-4 pr-[250px] py-4 rounded bg-white"
              style={{ boxShadow: "0px 0px 0px 1px #ccc" }}
            >
              <input type='email' className="flex-grow-0 flex-shrink-0 text-base text-left text-black"   placeholder='Email'/>
            </div>
            <p className="absolute left-4 top-14 text-[11px] text-left text-[#757575]">
              A confirmation email will be sent after checkout.
            </p>
          </div>
          <div className="flex-grow-0 flex-shrink-0 w-[440px] h-20 relative">
            <div
              className="flex justify-start items-start absolute left-0 top-0 overflow-hidden pl-4 pr-[250px] py-4 rounded bg-white"
              style={{ boxShadow: "0px 0px 0px 1px #ccc" }}
            >
              <input type='number' className="flex-grow-0 flex-shrink-0 text-base text-left text-black" placeholder='Phone Number'/>
                
             
            </div>
            <p className="absolute left-4 top-14 text-[11px] text-left text-[#757575]">
              A carrier might contact you to confirm delivery.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-start items-start absolute left-0 top-[1056px] gap-7 pt-5 pb-2">
        <p className="flex-grow-0 flex-shrink-0 text-[21px] font-medium text-left text-[#111]">
          What's your PIN?
        </p>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
          <div className="flex-grow-0 flex-shrink-0 w-[440px] h-[104px] relative">
            <div
              className="flex justify-start items-start absolute left-0 top-0 overflow-hidden pl-4 pr-[250px] py-4 rounded bg-white"
              style={{ boxShadow: "0px 0px 0px 1px #ccc" }}
            >
              <input className="flex-grow-0 flex-shrink-0 text-base text-left text-black" placeholder='PIN' />
            </div>
            <p className="w-[376.03px] absolute left-4 top-14 text-xs text-left text-[#757575]">
              Enter your PAN to enable payment with UPI, Net Banking or local card methods
            </p>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pl-[34px] pr-[242px] pb-8">
            <svg
              width={19}
              height={19}
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="flex-grow-0 group border flex-shrink-0 w-[18px] h-[18px] absolute left-px top-[3px]"
              preserveAspectRatio="none"
            >
              <g clipPath="url(#clip0_1_5629)">
                <path
                  d="M14 1.29688H5C2.79086 1.29688 1 3.08774 1 5.29688V14.2969C1 16.506 2.79086 18.2969 5 18.2969H14C16.2091 18.2969 18 16.506 18 14.2969V5.29688C18 3.08774 16.2091 1.29688 14 1.29688Z"
                  fill="white"
                  stroke="#CCCCCC"
                />
              </g>
              <rect className='opacity-0 group-hover:opacity-100' width="24" height="24" rx="4" fill="#6699FF"></rect>
              <defs>
                <clipPath id="clip0_1_5629">
                  <rect width={18} height={18} fill="white" transform="translate(0.5 0.796875)" />
                </clipPath>
              </defs>
            </svg>
            <p className="flex-grow-0 flex-shrink-0 text-[11px] text-left text-[#757575]">
              Save PAN details to Nike Profile
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-start items-start absolute left-px top-[1331px] pl-8">
        <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pr-[3.50311279296875px]">
          <p className="flex-grow-0 flex-shrink-0 w-[404.5px] text-xs text-left text-[#8d8d8d]">
            I have read and consent to eShopWorld processing my information in accordance with the
            Privacy Statement and Cookie Policy. eShopWorld is a trusted Nike partner.
          </p>
        </div>
        <svg
          width={19}
          height={19}
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-[18px] border group h-[18px] absolute left-0 top-0"
          preserveAspectRatio="none"
        >
          <g clipPath="url(#clip0_1_5638)">
            <path
              d="M14 1.29688H5C2.79086 1.29688 1 3.08774 1 5.29688V14.2969C1 16.506 2.79086 18.2969 5 18.2969H14C16.2091 18.2969 18 16.506 18 14.2969V5.29688C18 3.08774 16.2091 1.29688 14 1.29688Z"
              fill="white"
              stroke="#CCCCCC"
            />
          </g>
          <rect className='opacity-0 group-hover:opacity-100' width="24" height="24" rx="4" fill="#6699FF"></rect>
          <defs>
            <clipPath id="clip0_1_5638">
              <rect width={18} height={18} fill="white" transform="translate(0.5 0.796875)" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="group flex justify-start items-start absolute left-0 top-[1444px] pl-[185.671875px] pr-[185.328125px] py-4 rounded-[30px] bg-white border hover:bg-black  hover:border-black border-neutral-200">
        <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-center text-black group-hover:text-white">
          Continue
        </p>
      </div>
    </div>
    <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 gap-7 pt-7">
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pr-[361px] pt-[21px] pb-3 border-t border-r-0 border-b-0 border-l-0 border-neutral-200">
        <p className="flex-grow-0 flex-shrink-0 text-xl font-medium text-left cursor-pointer hover:text-[#111] text-[#757575]">
          Delivery
        </p>
      </div>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pr-[351px] pt-[21px] pb-1 border-t border-r-0 border-b-0 border-l-0 border-neutral-200">
        <p className="flex-grow-0 flex-shrink-0 text-[21px] font-medium text-left cursor-pointer hover:text-[#111] text-[#757575]">
          Shipping
        </p>
      </div>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pr-[379px] pt-[21px] pb-1 border-t border-r-0 border-b-0 border-l-0 border-neutral-200">
        <p className="flex-grow-0 flex-shrink-0 text-[21px] font-medium text-left cursor-pointer hover:text-[#111] text-[#757575]">
          Billing
        </p>
      </div>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pr-[351px] pt-[21px] pb-1 border-t border-r-0 border-b-0 border-l-0 border-neutral-200">
        <p className="flex-grow-0 flex-shrink-0 text-[21px] font-medium text-left cursor-pointer hover:text-[#111] text-[#757575]">
          Payment
        </p>
      </div>
    </div>
  </div>
  </div>
</div>;




















<div className="w-[1411px] h-[51px] relative bg-[#111]">
  <div className="flex justify-start items-start absolute left-5 top-3 gap-[25px] pr-[16.25px] pb-[3px]">
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative pr-[0.671875px]">
      <svg
        width={15}
        height={13}
        viewBox="0 0 15 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-grow-0 flex-shrink-0 w-[14.38px] h-3 relative"
        preserveAspectRatio="none"
      >
        <g clipPath="url(#clip0_1_5657)">
          <g clipPath="url(#clip1_1_5657)">
            <path
              d="M3.18455 2.29688C1.41455 2.29688 -0.00744629 3.73988 -0.00744629 5.51288C-0.00744629 6.15488 0.211554 6.75188 0.517554 7.25288L3.18755 11.2969L5.85755 7.25288C6.16655 6.75188 6.38255 6.15188 6.38255 5.50988C6.38255 3.73988 4.95455 2.29688 3.18455 2.29688Z"
              fill="white"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_5657">
            <rect width="14.375" height={12} fill="white" transform="translate(0 0.796875)" />
          </clipPath>
          <clipPath id="clip1_1_5657">
            <rect
              width="6.39"
              height={12}
              fill="white"
              transform="translate(-0.00744629 0.796875)"
            />
          </clipPath>
        </defs>
      </svg>
      <p className="flex-grow-0 flex-shrink-0 text-[9px] text-left text-white">India</p>
    </div>
    <p className="flex-grow-0 flex-shrink-0 text-[9px] text-right text-[#8d8d8d]">
      © 2023 NIKE, Inc. All Rights Reserved
    </p>
  </div>
  <div className="flex justify-start items-start absolute left-[258.3px] top-3 gap-[18.71875px] pr-[16.59375px] pt-[1.421875px] pb-[1.578125px]">
    <p className="flex-grow-0 flex-shrink-0 text-[9px] text-left text-[#8d8d8d]">Terms of Use</p>
    <p className="flex-grow-0 flex-shrink-0 text-[9px] text-center text-[#8d8d8d]">Terms of Sale</p>
    <p className="flex-grow-0 flex-shrink-0 text-[9px] text-right text-[#8d8d8d]">Privacy Policy</p>
  </div>
  <div className="w-[601px] h-[27px] absolute left-[790px] top-3">
    <img
      src="checkout/image-7.png"
      className="w-[45px] h-[27px] absolute left-[7px] top-[-1px] object-none"
    />
    <img
      src="checkout/image.png"
      className="w-[45px] h-[27px] absolute left-[60px] top-[-1px] object-none"
    />
    <img
      src="checkout/image-2.png"
      className="w-[45px] h-[27px] absolute left-[113px] top-[-1px] object-none"
    />
    <img
      src="checkout/image-3.png"
      className="w-[45px] h-[27px] absolute left-[166px] top-[-1px] object-none"
    />
    <img
      src="checkout/image-4.png"
      className="w-[45px] h-[27px] absolute left-[219px] top-[-1px] object-none"
    />
    <img
      src="checkout/image-5.png"
      className="w-[45px] h-[27px] absolute left-[272px] top-[-1px] object-none"
    />
    <img
      src="checkout/image-6.png"
      className="w-[45px] h-[27px] absolute left-[325px] top-[-1px] object-none"
    />
    <img
      src="checkout/image-8.png"
      className="w-[45px] h-[27px] absolute left-[378px] top-[-1px] object-none"
    />
    <img
      src="checkout/image-10.png"
      className="w-[54px] h-[18px] absolute left-[431px] top-[-1px] object-none"
    />
    <img src="checkout/image-9.png" className="w-[54px] h-[15px] absolute left-[493px] top-1 object-none" />
    <img
      src="checkout/image-11.png"
      className="w-[45px] h-[27px] absolute left-[555px] top-[-1px] object-none"
    />
  </div>
</div>
        

        </div>
       




        );
};

export default Checkout;