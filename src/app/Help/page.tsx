"use client"

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const Help = () => {
    return (


        <div>
         <Navbar />

         <div className="w-full h-[1230px]  relative py-10">
  <div className="w-full max-w-screen-xl h-auto mx-auto">
    <p className="text-center text-[32px] font-medium text-[#111]">
      GET HELP
    </p>
    <div className=" relative flex items-center border rounded justify-center w-full rounded-1px max-w-[457px] h-auto mx-auto mt-4">
  <input
    className="w-full h-[56px] text-[15px] text-center text-[#757575] rounded-1px px-4"
    placeholder="What can we help you with?"
  />
  <svg
    width={25}
    height={18}
    viewBox="0 0 25 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute left-4 top-[50%] transform -translate-y-[50%] w-6 h-[18px]"
    preserveAspectRatio="none"
  >
    <g clipPath="url(#clip0_1_3798)">
      <path
        d="M19.9388 15.2176L17.1563 12.4576C18.2364 11.1109 18.7594 9.40152 18.6179 7.68103C18.4764 5.96053 17.6811 4.35964 16.3954 3.20753C15.1098 2.05543 13.4317 1.43968 11.706 1.4869C9.98033 1.53412 8.33834 2.24072 7.11766 3.46141C5.89697 4.68209 5.19037 6.32408 5.14315 8.04974C5.09593 9.77541 5.71168 11.4536 6.86378 12.7392C8.01589 14.0248 9.61678 14.8201 11.3373 14.9617C13.0578 15.1032 14.7671 14.5801 16.1138 13.5001L18.8738 16.2601C18.9435 16.3303 19.0265 16.3861 19.1179 16.4242C19.2093 16.4623 19.3073 16.4819 19.4063 16.4819C19.5053 16.4819 19.6033 16.4623 19.6947 16.4242C19.7861 16.3861 19.8691 16.3303 19.9388 16.2601C20.074 16.1202 20.1495 15.9333 20.1495 15.7388C20.1495 15.5443 20.074 15.3574 19.9388 15.2176ZM11.9063 13.5001C10.8679 13.5001 9.85291 13.1921 8.98956 12.6153C8.1262 12.0384 7.45329 11.2185 7.05593 10.2591C6.65857 9.29983 6.55461 8.24423 6.75718 7.22583C6.95975 6.20743 7.45976 5.27197 8.19399 4.53774C8.92822 3.80351 9.86368 3.3035 10.8821 3.10093C11.9005 2.89836 12.9561 3.00232 13.9154 3.39968C14.8747 3.79704 15.6946 4.46995 16.2715 5.33331C16.8484 6.19666 17.1563 7.2117 17.1563 8.25005C17.1563 9.64244 16.6032 10.9778 15.6186 11.9624C14.634 12.9469 13.2987 13.5001 11.9063 13.5001Z"
        fill="#757575"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_3798">
        <rect width={24} height={18} fill="white" transform="translate(0.65625)" />
      </clipPath>
    </defs>
  </svg>
</div>

 

  {/* Content Section */}
  <div className="w-full bg-white mt-8 p-4 rounded-lg px-4 sm:px-8 lg:px-12 ">
    <div className="max-w-screen-xl mx-auto">
      <p className="text-[28px] font-medium text-[#111]">
        WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
      </p>
      <p className="text-[15px] text-[#111] mt-2">
        We want to make buying your favorite Nike shoes and gear online fast and easy, and we accept the following payment options:
      </p>
      <div className="mt-4 ">
        <p className="text-base left-10 text-[#111]">Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
        <p className="text-[15px] left-10 text-[#111] mt-2">
          If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.
        </p>
        <p className="text-base text-[#111] mt-4">Apple Pay</p>
      </div>
    </div>
 
    </div>





          <div className="w-full max-w-[923.75px] absolute left-0 ">
  <div className="w-full h-auto absolute left-0 top-0 px-4 sm:px-8 lg:px-12">
  
    <p className="w-full h-auto text-base text-left text-[#111]">
      <Link href="Featured">
      <span className="text-base font-medium text-left text-[#111]">
        Nike Members
      </span>
      </Link>
      <span className="text-base text-left text-[#111]">
        can store multiple debit or credit cards in their profile for faster checkout. If
        you're not already a Member,{" "}
      </span>
      <Link href="Join">
      <span className="text-base font-medium text-left text-[#111]">
        join us
      </span>
      </Link>
      <span className="text-base text-left text-[#111]">
        today.
      </span>
    </p>
  </div>







  <div className="px-4  flex justify-start items-center absolute left-12 top-[72px] py-2 rounded-[30px] bg-white border hover:bg-black hover:border-black border-neutral-200 group">
  <Link href="Join">
    <p className="text-base font-medium text-center text-black group-hover:text-white">
      JOIN US
    </p>
  </Link>
</div>

<div className="px-4  flex  justify-start items-center absolute left-[150px] top-[72px]  py-2 rounded-[30px] bg-white border hover:bg-black hover:border-black border-neutral-200 group">
  <Link href="Cart">
    <p className="text-base font-medium text-center text-black group-hover:text-white">
      SHOP NIKE
    </p>
  </Link>
</div>

<div className= "px-4 sm:px-8 lg:px-12 w-full max-w-[923.75px] h-auto absolute left-0 top-[140px] ">
  <p className="text-xl font-medium text-left text-[#111]">
    FAQs
  </p>
  <div className="w-full max-w-[923.75px] h-auto mt-4">
    <div className="w-full max-w-[923.75px] h-auto">
      <div className="flex justify-start items-start pr-1">
        <p className="text-base font-bold text-left text-[#111]">
          Does my card need international purchases enabled?
        </p>
      </div>
      <p className="text-base text-left text-[#111] mt-2">
        Yes, we recommend asking your bank to enable international purchases on your card.
        You will be notified at checkout if international purchases need to be enabled.
      </p>
    </div>
    <div className="w-full max-w-[923.75px] h-7 mt-4">
      <p className="text-sm text-left text-[#111]">
        <span className="text-sm text-left text-[#111]">
          Please note, some banks may charge
        </span>
        <span className="text-sm font-medium text-left text-[#111]">
          a small transaction fee
        </span>
        <span className="text-sm text-left text-[#111]">
          for international orders.
        </span>
      </p>
    </div>
  </div>
</div>









<div className="px-4 sm:px-8 lg:px-12 w-full h-auto absolute left-0 top-[330px] ">
  <p className="w-full h-auto text-[15px] text-left text-[#111]">
    <span className="w-full h-auto text-[15px] font-bold text-left text-[#111]">
      Can I pay for my order with multiple methods?
    </span>
    <br />
    <span className="w-full h-auto text-[15px] text-left text-[#111]">
      No, payment for Nike orders can't be split between multiple payment methods.
    </span>
  </p>
</div>



<div className=" sm:px-8 lg:px-12 w-full h-auto absolute left-0 top-[400px] px-4">
  <div className="flex flex-col justify-start items-start">
    <span className="text-[15px] font-bold text-left text-[#111]">
      What payment method is accepted for SNKRS orders?
    </span>
    <span className="w-full h-auto text-[15px] text-left text-[#111] mt-2">
      You can use any accepted credit card to pay for your SNKRS order.
    </span>
  </div>
</div>

<div className="px-4 sm:px-8 lg:px-12 w-full h-auto absolute left-0 top-[470px]">
  <div className="flex flex-col justify-start items-start">
    <span className="text-base font-bold text-left text-[#111]">
      Why don't I see Apple Pay as an option?
    </span>
    <span className="w-full h-auto text-base text-left text-[#111] mt-2">
      To see Apple Pay as an option in the Nike App or on Nike.com, you'll need to use a compatible Apple device running the latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you'll need to use Safari to use Apple Pay on Nike.com.
    </span>
  </div>
</div>



<div className="px-4 sm:px-8 lg:px-12 w-full h-auto absolute left-12 top-[610px]">
  <div className="w-full h-auto absolute left-0 top-0">
    <p className="w-full h-auto text-[15px] text-left text-[#111]">
      Was this answer helpful?
    </p>
    <svg
      width={31}
      height={30}
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[30px] h-[30px] absolute left-0 top-7"
      preserveAspectRatio="none"
    >
      <g clipPath="url(#clip0_1_3842)">
        <path
          d="M10.025 15.375C10.525 14.575 11.025 13.75 11.525 12.9L11.975 12.3C12.925 10.95 13.5125 10.125 13.7375 9.825C13.9625 9.525 14.325 8.875 14.825 7.875L15.125 7.275C15.175 7.225 15.225 7.025 15.275 6.675C15.375 5.825 15.525 5.2 15.725 4.8C15.975 4.1 16.375 3.75 16.925 3.75C17.675 3.75 18.225 4.025 18.575 4.575C18.875 5.075 19.025 5.65 19.025 6.3C19.025 6.85 18.75 7.85 18.2 9.3L17.9 10.125C17.8 10.475 17.725 10.95 17.675 11.55L17.525 12.3H20.15L20.975 12.375C21.575 12.425 22.1 12.525 22.55 12.675C23.2 12.825 23.65 13.05 23.9 13.35C24.2 13.75 24.375 14.175 24.425 14.625C24.475 14.925 24.475 15.325 24.425 15.825L23.525 23.325C23.375 24.575 22.775 25.425 21.725 25.875C21.125 26.125 20.35 26.25 19.4 26.25H6.125V15.375H10.025Z"
          fill="#111111"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_3842">
          <rect width={30} height={30} fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
    <svg
      width={31}
      height={30}
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[30px] h-[30px] absolute left-[30px] top-7"
      preserveAspectRatio="none"
    >
      <g clipPath="url(#clip0_1_3845)">
        <path
          d="M11.525 17.025L10.025 14.625H6.125V3.75H19.4L20 3.825C20.45 3.875 20.9 3.975 21.35 4.125C21.9 4.325 22.35 4.6 22.7 4.95C23.15 5.45 23.425 6.025 23.525 6.675L24.425 14.1C24.475 14.6 24.475 15 24.425 15.3C24.375 15.8 24.1875 16.2625 23.8625 16.6875C23.5375 17.1125 22.975 17.375 22.175 17.475C21.775 17.575 21.1 17.625 20.15 17.625H17.525L17.675 18.45C17.725 19.05 17.8 19.5 17.9 19.8L18.2 20.7C18.75 22.15 19.025 23.15 19.025 23.7C19.025 24.35 18.875 24.925 18.575 25.425C18.225 25.975 17.675 26.25 16.925 26.25C16.375 26.25 15.975 25.9 15.725 25.2C15.525 24.8 15.375 24.175 15.275 23.325C15.225 22.925 15.175 22.7 15.125 22.65L14.825 21.975C14.325 21.025 13.95 20.3875 13.7 20.0625C13.45 19.7375 12.825 18.875 11.825 17.475L11.525 17.025Z"
          fill="#111111"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_3845">
          <rect width={30} height={30} fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  </div>
  <div className="w-full h-auto absolute left-0 top-[67px] px-4">
    <p className="w-full h-auto text-base font-medium  text-[#757575]">
      RELATED
    </p>
    <div className="w-full h-auto absolute left-10 top-10">
      <p className="w-full h-auto text-base text-left text-[#111]">
        WHAT ARE NIKE'S DELIVERY OPTIONS?
      </p>
      <br />
      <p className="w-full h-auto text-base text-left text-[#111]">
        HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
      </p>
    </div>
  </div>
  </div>

  
 













<div className='w-full max-w-screen-xl h-auto mx-auto absolute'>
      <div className=" absolute left-[939.75px] -top-[200px]  max-w-screen-xl h-auto mx-auto">
        <p className="w-[179.62px] h-[31px] absolute left-[90.91px] top-0 text-[28px] font-medium text-center text-[#111]">
          CONTACT US
        </p>
        <div className="w-[265.25px] h-auto absolute left-12 top-[52px]">
          <div className="w-[265.25px] h-auto absolute left-0 top-0">
            <img src="help/image.png" className="w-16 h-16 absolute left-[99.63px] top-3 object-none" />
            <div className="flex flex-col justify-start items-center absolute left-0 top-[106px] pl-[1.140625px] pr-[0.95623779296875px]">
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-center text-[#111]">
                92 315 230 9503
              </p>
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative">
                <p className="flex-grow-0 flex-shrink-0 w-[263.15px] text-base text-center text-[#111]">
                  <span className="flex-grow-0 flex-shrink-0 w-[263.15px] text-base text-center text-[#111]">
                    Products &amp; Orders: 24 hours a day, 7 days a week
                  </span>
                  <br />
                  <span className="flex-grow-0 flex-shrink-0 w-[263.15px] text-base text-center text-[#111]">
                    Company Info &amp; Enquiries: 07:30 - 16:30, Monday - Friday
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="w-[265.25px] h-auto absolute left-0 top-[282px]">
            <img
              src="help/image-2.png"
              className="w-16 h-16 absolute left-[99.63px] top-3 object-none"
            />
            <div className="flex flex-col justify-start items-center absolute left-[79.69px] top-[106px] pl-0.5 pr-[1.859375px]">
              <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-center text-[#111]">
                24 hours a day
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-[15px] text-center text-[#111]">
                7 days a week
              </p>
            </div>
          </div>
          <div className="w-[265.25px] h-[158px] absolute left-0 top-[480px]">
            <img
              src="help/image-3.png"
              className="w-16 h-16 absolute left-[99.63px] top-3 object-none"
            />
            <div className="flex flex-col justify-start items-center absolute left-[67.25px] top-[106px] pl-[3px] pr-[3.734375px]">
              <p className="flex-grow-0 flex-shrink-0 text-[15px] font-medium text-center text-[#111]">
                We'll reply within
              </p>
              <p className="flex-grow-0 flex-shrink-0 text-[15px] text-center text-[#111]">
                five business days
              </p>
            </div>
          </div>
          <div className="w-[265.25px] h-[158px] absolute left-0 top-[678px]">
            <img
              src="help/image-4.png"
              className="w-16 h-16 absolute left-[99.63px] top-3 object-none"
            />
            <div className="w-[221.44px] h-[52px] absolute left-[21.91px] top-[106px]">
              <p className="absolute left-[44.14px] top-0 text-base font-medium text-center text-[#111]">
                STORE LOCATOR
              </p>
              <p className="absolute left-[-1px] top-6 text-base text-center text-[#111]">
                Find Nike retail stores near you
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
 


         <Footer />
        

        </div>




        );
};

export default Help;