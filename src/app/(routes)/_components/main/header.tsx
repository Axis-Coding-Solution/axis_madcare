"use client";

import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="fixed top-0 w-full px-32 mt-5">
      <div className=" flex justify-between ">
        <div>
          <Image
            src="/svgs/d55bb295d2a8b570c3560064ee726527-ai (5).svg"
            alt=""
            height={80}
            width={118}
          />
        </div>
        <div className="flex  not-italic  font-bold text-[16px] leading-[24px] text-[#316069]    gap-10">
          <button className=" ">Solutions</button>
          <button className="">Pricing</button>
          <button className="">Company</button>
          <button className="">Resources</button>
          <button className="text-white  border-2 rounded-full text-[14px] leading-[21px] h-[50px] px-6 mt-3 border-white hover:text-[#316069] hover:border-[#315a61] hover:bg-transparent bg-[#1a363b] transition-all duration-300">
            Request Demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
