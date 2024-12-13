import React from "react";
import Link from "next/link";

const PaymentOptions = () => {
  return (
    <div className="w-full bg-white mt-8 p-4 rounded-lg px-4 sm:px-8 lg:px-12">
      <p className="text-[28px] font-medium text-[#111]">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</p>
      <p className="text-[15px] text-[#111] mt-2">
        We want to make buying your favorite Nike shoes and gear online fast and easy, and we accept the following payment options:
      </p>
      <ul className="list-disc list-inside mt-4">
        <li className="text-base text-[#111]">Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
        <li className="text-base text-[#111] mt-2">
          If you enter your PAN information at checkout, you'll be able to pay for your order with PayTM or a local credit or debit card.
        </li>
        <li className="text-base text-[#111] mt-4">Apple Pay</li>
      </ul>
      <p className="text-[#111] mt-4">Nike Memberscan store multiple debit or credit cards in their profile for faster checkout. If you're not already</p>
      <p className="text-[#111] mt-4">a Member, join ustoday.</p>
      <div className="flex gap-4">
      <Link href="Join"><button className="rounded-full border w-32 h-10 mt-6 bg-white hover:bg-black text-black hover:text-white">
        JOIN US
      </button></Link>
      <Link href="Store">
      <button className="rounded-full border w-32 h-10 mt-6 bg-white hover:bg-black text-black hover:text-white">
        SHOP NIKE
      </button>
      </Link>
      </div>
    </div>
  );
};

export default PaymentOptions;
