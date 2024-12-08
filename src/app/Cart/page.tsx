"use client"

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const Cart = () => {
    return (


        <div>
         <Navbar />

         <div className="w-[1411px] h-[1298.67px] relative">
  <div className="w-[1100px] h-[632.89px] absolute left-[155.5px] top-10">
    <div className="w-[1100px] h-[547.89px] absolute left-0 top-0">
      <div className="w-[733.33px] h-[547.89px] absolute left-0 top-0">
        <div className="flex justify-start items-center absolute left-2 top-0 gap-[5.875px] pr-3.5 bg-[#f7f7f7]">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden pr-[34.078125px] bg-[#f7f7f7]">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden pl-1 bg-neutral-100">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden px-2">
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-1 pl-2 pr-[314.015625px] pt-3.5 pb-1.5">
                    <p className="flex-grow-0 flex-shrink-0 text-[13px] font-medium text-left text-[#111]">
                      Free Delivery
                    </p>
                    <div className="flex-grow-0 flex-shrink-0 w-[305.36px] h-[24.89px] relative">
                      <p className="absolute left-0 top-0 text-[11px] text-left text-[#111]">
                        Applies to orders of ₹ 14 000.00 or more.
                      </p>
                      <p className="absolute left-[230.98px] top-[0.89px] text-[11px] font-medium text-left text-[#111]">
                        View details
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-base text-center text-[#6d6d6d]"></p>
        </div>
        <p className="absolute left-2 top-[77.89px] text-[22px] font-medium text-left text-[#111]">
          Bag
        </p>
        <div className="flex flex-col justify-start items-start absolute left-2 top-[111.89px]">
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 py-6 bg-white/0">
            <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[30px]">
              <img
              src="12.png"
               className="flex-grow-0 flex-shrink-0 w-[150px] h-[150px] relative overflow-hidden bg-neutral-100" />
              <div className="flex flex-col justify-start items-start flex-grow gap-6">
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[178.796875px]">
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
                    <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-left text-[#111]">
                      Nike Dri-FIT ADV TechKnit Ultra
                    </p>
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden pr-[3.3125px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#757575]">
                        Men's Short-Sleeve Running Top
                      </p>
                    </div>
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden pr-[62.3125px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#757575]">
                        Ashen Slate/Cobalt Bliss
                      </p>
                    </div>
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 pr-[19.921875px]">
                      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[0.203125px]">
                        <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#757575]">
                          Size
                        </p>
                        <div className="flex-grow-0 flex-shrink-0 w-[67px] h-7 relative overflow-hidden bg-white">
                          <p className="absolute left-[39px] top-0 text-base text-right text-[#757575]">
                            
                          </p>
                          <p className="absolute left-2.5 top-1.5 text-sm text-left text-[#757575]">
                            L
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative space-x-[-0.8125px]">
                        <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#757575]">
                          Quantity
                        </p>
                        <div className="flex-grow-0 flex-shrink-0 w-[58px] h-7 relative overflow-hidden bg-white">
                          <p className="absolute left-[30px] top-0 text-base text-right text-[#757575]">
                            
                          </p>
                          <p className="absolute left-2.5 top-1.5 text-sm text-left text-[#757575]">
                            1
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pl-0.5 pr-[4.21875px]">
                    <p className="flex-grow-0 flex-shrink-0 text-[15px] text-right text-[#111]">
                      MRP: ₹ 3 895.00
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4 pr-[473.328125px] pt-1 pb-1.5">
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                    preserveAspectRatio="none"
                  >
                    <g clipPath="url(#clip0_1_5371)">
                      <path
                        d="M17.294 4.64064C18.618 4.64064 19.862 5.15664 20.798 6.09164C21.7262 7.02156 22.2475 8.28176 22.2475 9.59564C22.2475 10.9095 21.7262 12.1697 20.798 13.0996L12.5 21.3986L4.20096 13.0996C3.27307 12.1698 2.75195 10.9098 2.75195 9.59614C2.75195 8.2825 3.27307 7.02252 4.20096 6.09264C4.65999 5.63094 5.20604 5.26488 5.80751 5.01564C6.40897 4.7664 7.0539 4.63894 7.70496 4.64064C9.02896 4.64064 10.273 5.15664 11.209 6.09164L11.969 6.85164L12.5 7.38264L13.03 6.85164L13.79 6.09164C14.2492 5.63026 14.7953 5.26446 15.3967 5.01541C15.9982 4.76636 16.643 4.63898 17.294 4.64064Z"
                        stroke="#111111"
                        strokeWidth="1.5"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_5371">
                        <rect
                          width={24}
                          height={24}
                          fill="white"
                          transform="translate(0.5 0.890625)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  <svg
                    width={25}
                    height={25}
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                    preserveAspectRatio="none"
                  >
                    <g clipPath="url(#clip0_1_5374)">
                      <path
                        d="M14.75 8.39062V20.3906M10.25 8.39062V20.3906M5.75 6.89062V20.3906C5.75 21.6306 6.76 22.6406 8 22.6406H17C18.24 22.6406 19.25 21.6306 19.25 20.3906V6.14062M19.25 6.14062H22M19.25 6.14062H21.5M9.5 3.14062H14.75C15.58 3.14062 16.25 3.81063 16.25 4.64062C16.25 5.47062 15.58 6.14062 14.75 6.14062H3.5"
                        stroke="#111111"
                        strokeWidth="1.5"
                        strokeMiterlimit={10}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_5374">
                        <rect
                          width={24}
                          height={24}
                          fill="white"
                          transform="translate(0.5 0.890625)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 pl-[180px] py-6 bg-white/0">
            <div className="flex flex-col justify-start items-start flex-grow gap-6">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 gap-[149.8125px]">
                <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative">
                  <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-left text-[#111]">
                    Nike Air Max 97 SE
                  </p>
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden pr-[164.40625px]">
                    <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#757575]">
                      Men's Shoes
                    </p>
                  </div>
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative overflow-hidden pr-[4.40625px]">
                    <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#757575]">
                      Flat Pewter/Light Bone/Black/White
                    </p>
                  </div>
                  <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 pr-[7.015625px]">
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-[0.203125px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#757575]">
                        Size
                      </p>
                      <div className="flex-grow-0 flex-shrink-0 w-[100px] h-7 relative overflow-hidden bg-white">
                        <p className="absolute left-[72px] top-0 text-base text-right text-[#757575]">
                          
                        </p>
                        <p className="absolute left-2.5 top-1.5 text-sm text-left text-[#757575]">
                          8
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative space-x-[-0.8125px]">
                      <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#757575]">
                        Quantity
                      </p>
                      <div className="flex-grow-0 flex-shrink-0 w-[58px] h-7 relative overflow-hidden bg-white">
                        <p className="absolute left-[30px] top-0 text-base text-right text-[#757575]">
                          
                        </p>
                        <p className="absolute left-2.5 top-1.5 text-sm text-left text-[#757575]">
                          1
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pl-1 pr-[4.109375px]">
                  <p className="flex-grow-0 flex-shrink-0 text-[15px] text-right text-[#111]">
                    MRP: ₹ 16 995.00
                  </p>
                </div>
              </div>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-4 pr-[473.328125px] pt-1 pb-1.5">
                <svg
                  width={25}
                  height={25}
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                  preserveAspectRatio="none"
                >
                  <g clipPath="url(#clip0_1_5400)">
                    <path
                      d="M17.294 4.64064C18.618 4.64064 19.862 5.15664 20.798 6.09164C21.7262 7.02156 22.2475 8.28176 22.2475 9.59564C22.2475 10.9095 21.7262 12.1697 20.798 13.0996L12.5 21.3986L4.20096 13.0996C3.27307 12.1698 2.75195 10.9098 2.75195 9.59614C2.75195 8.2825 3.27307 7.02252 4.20096 6.09264C4.65999 5.63094 5.20604 5.26488 5.80751 5.01564C6.40897 4.7664 7.0539 4.63894 7.70496 4.64064C9.02896 4.64064 10.273 5.15664 11.209 6.09164L11.969 6.85164L12.5 7.38264L13.03 6.85164L13.79 6.09164C14.2492 5.63026 14.7953 5.26446 15.3967 5.01541C15.9982 4.76636 16.643 4.63898 17.294 4.64064Z"
                      stroke="#111111"
                      strokeWidth="1.5"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_5400">
                      <rect
                        width={24}
                        height={24}
                        fill="white"
                        transform="translate(0.5 0.890625)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width={25}
                  height={25}
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0 w-6 h-6 relative"
                  preserveAspectRatio="none"
                >
                  <g clipPath="url(#clip0_1_5403)">
                    <path
                      d="M14.75 8.39062V20.3906M10.25 8.39062V20.3906M5.75 6.89062V20.3906C5.75 21.6306 6.76 22.6406 8 22.6406H17C18.24 22.6406 19.25 21.6306 19.25 20.3906V6.14062M19.25 6.14062H22M19.25 6.14062H21.5M9.5 3.14062H14.75C15.58 3.14062 16.25 3.81063 16.25 4.64062C16.25 5.47062 15.58 6.14062 14.75 6.14062H3.5"
                      stroke="#111111"
                      strokeWidth="1.5"
                      strokeMiterlimit={10}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_5403">
                      <rect
                        width={24}
                        height={24}
                        fill="white"
                        transform="translate(0.5 0.890625)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[350.67px] h-[295px] absolute left-[741.33px] top-0">
        <p className="absolute left-2 top-[-1px] text-[21px] font-medium text-left text-[#111]">
          Summary
        </p>
        <div className="w-[334.67px] h-7 absolute left-2 top-[57px]">
          <p className="absolute left-0 top-0 text-[15px] text-left text-[#111]">Subtotal</p>
          <div className="w-3 h-7 absolute left-[68.17px] top-0 bg-white">
            <p className="w-[12.2px] h-4 absolute left-0 top-1.5 text-base text-center text-black">
              
            </p>
          </div>
          <p className="absolute left-[250.73px] top-0 text-sm text-right text-[#111]">
            ₹ 20 890.00
          </p>
        </div>
        <div className="flex justify-start items-start absolute left-2 top-[93px] gap-[88.25px] pr-[0.421875px]">
          <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#111]">
            Estimated Delivery &amp; Handling
          </p>
          <p className="flex-grow-0 flex-shrink-0 text-[15px] text-right text-[#111]">Free</p>
        </div>
        <div className="flex justify-start items-center absolute left-2 top-[141px] gap-[216.296875px] pr-[4.375px] py-[17px] border border-neutral-200">
          <p className="flex-grow-0 flex-shrink-0 text-sm text-right text-[#111]">Total</p>
          <p className="flex-grow-0 flex-shrink-0 text-sm font-medium text-right text-[#111]">
            ₹ 20 890.00
          </p>
        </div>
        <div className="group flex justify-start items-start absolute left-2 top-[235px] pl-[100.875px] pr-[100.796875px] py-[18px] rounded-[30px] bg-white border hover:bg-black  hover:border-black border-neutral-200">
          <Link href="Checkout">
          <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-center text-black group-hover:text-white">
            Member Checkout
          </p>
          </Link>
        </div>
      </div>
    </div>
    <div className="w-[1100px] h-[85px] absolute left-0 top-[547.89px]">
      <p className="w-[106.61px] h-[26px] absolute left-2 top-[27px] text-[21px] font-medium text-left text-[#111]">
        Favourites
      </p>
      <p className="w-[313.45px] h-[18px] absolute left-2 top-[62px] text-[15px] text-left text-[#111]">
        There are no items saved to your favourites.
      </p>
    </div>
  </div>
  <div className="flex flex-col justify-start items-start absolute left-0 top-[712.89px] gap-3">
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[1029px] px-12 pt-0.5">
      <p className="flex-grow-0 flex-shrink-0 text-[19px] font-medium text-left text-[#111]">
        You Might Also Like
      </p>
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative gap-3">
        <svg
          width={48}
          height={49}
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-12 h-12 relative"
          preserveAspectRatio="none"
        >
          <rect y="0.890625" width={48} height={48} rx={24} fill="#F5F5F5" />
          <g clipPath="url(#clip0_1_5428)">
            <path
              d="M27.5251 31.8568L20.5581 24.8908L27.5251 17.9238"
              stroke="#CCCCCC"
              strokeWidth="1.5"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_5428">
              <rect width={24} height={24} fill="white" transform="translate(12 12.8906)" />
            </clipPath>
          </defs>
        </svg>
        <svg
          width={48}
          height={49}
          viewBox="0 0 48 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-grow-0 flex-shrink-0 w-12 h-12 relative"
          preserveAspectRatio="none"
        >
          <rect y="0.890625" width={48} height={48} rx={24} fill="#F5F5F5" />
          <g clipPath="url(#clip0_1_5432)">
            <path
              d="M20.4741 31.8568L27.4401 24.8908L20.4741 17.9238"
              stroke="#CCCCCC"
              strokeWidth="1.5"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_5432">
              <rect width={24} height={24} fill="white" transform="translate(12 12.8906)" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden pl-12 pr-[931.21875px]">
      <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative pt-[443.78125px]">
        <img
        src='frame.png'
         className="flex-grow-0 flex-shrink-0 w-[431.78px] h-[431.78px] absolute left-0 top-0 overflow-hidden rounded" />
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative gap-2">
          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pr-[252.78125px]">
            <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-left text-[#111]">
              Air Jordan 1 Mid SE Craft
            </p>
            <p className="flex-grow-0 flex-shrink-0 text-[15px] text-left text-[#757575]">
              Men's Shoes
            </p>
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-left text-[#111]">
            MRP : ₹ 12 295.00
          </p>
        </div>
      </div>
    </div>
  </div>
</div>;














         <Footer />
        

        </div>




        );
};

export default Cart;