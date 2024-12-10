"use client";

import { Button } from "./ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <section className="flex flex-col items-center bg-[#fafafa] m-4">
      {/* Header Section */}
      <div className="flex flex-col items-center pb-4 text-center">
        <h3 className="text-lg sm:text-xl lg:text-2xl text-black font-bold">
          Hello Nike App
        </h3>
        <p className="text-sm sm:text-base text-gray-600">
          <span>Download the app to access everything Nike.</span>{" "}
          <Link href={"/"} className="text-blue-500 hover:underline">
            Get Your Great
          </Link>
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full max-w-[1344px]">
        <img
          src="1.png"
          alt="shoes"
          className="w-full h-auto object-cover object-center"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center p-4 lg:p-8 xl:p-12 text-center">
        <p className="text-sm sm:text-base">First Look</p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold uppercase">
          Nike Air Max Pulse
        </h2>
        <p className="text-sm sm:text-base leading-6 w-full pt-3 pb-4 lg:pb-2 lg:w-[70%] xl:w-[60%]">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse — designed to push you past your limits and help you go to the max.
        </p>

        {/* Buttons Section */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <div className="group hover:border-black">
            <Button className="border border-neutral-200 hover:bg-black bg-white text-black group-hover:text-white px-6 py-3">
              Notify Me
            </Button>
          </div>
          <div className="group hover:border-black">
            <Button className="border border-neutral-200 hover:bg-black bg-white text-black group-hover:text-white px-6 py-3">
              Shop Air Max
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
