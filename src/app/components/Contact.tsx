"use client";

import Link from 'next/link';

const Contact = () => {
  return (
    <section className="  max-w-screen-xl mx-auto px-4 py-8">
      {/* Section Title */}
   

      {/* Contact Options */}
      <div className=" flex flex-col gap-8">
      
        {/* Row 1: One Item */}
        <div className="flex flex-col items-center -mt-[1080px] ml-[850px] text-center">
        <h2 className="text-[28px] font-medium  text-[#111]">CONTACT US</h2>
          <img
            src="help/image.png"
            alt="Phone Icon"
            className="w-16 mt-20 h-16 mb-4"
          />
          <p className="text-base font-medium text-[#111] mb-2">92 315 230 9503</p>
          <p className="text-sm text-[#757575]">Products &amp; Orders: 24 hours a day, 7 days a week</p>
          <p className="text-sm text-[#757575]">days a week</p>
          <p className="text-sm text-[#757575]">Company Info &amp; Enquiries: 07:30 - 16:30, Monday - Friday</p>
          <p className="text-sm text-[#757575]">- 16:30, Monday - Friday</p>
        </div>

        {/* Row 2: Two Items */}
        <div className="flex flex-col mt-24 items-center ml-[850px] text-center">
          <img
            src="help/image-2.png"
            alt="Chat Icon"
            className="w-16 h-16 mb-4"
          />
          <p className="text-base font-medium text-[#111]">24 hours a day</p>
          <p className="text-sm text-[#757575]">7 days a week</p>
        </div>

        {/* Row 3: Three Items */}
        <div className="flex flex-col  mt-24  items-center ml-[850px] text-center">
          <img
            src="help/image-3.png"
            alt="Email Icon"
            className="w-16 h-16 mb-4"
          />
          <p className="text-base font-medium text-[#111]">We&apos;ll reply within</p>
          <p className="text-sm text-[#757575]">five business days</p>
        </div>

        {/* Row 4: Four Items */}
        <div className="flex flex-col  mt-24  items-center ml-[850px] text-center">
          <img
            src="help/image-4.png"
            alt="Store Locator Icon"
            className="w-16 h-16 mb-4"
          />
          <p className="text-base font-medium text-[#111]">STORE LOCATOR</p>
          <p className="text-sm text-[#757575]">Find Nike retail stores near you</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
