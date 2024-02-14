import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="bg-[url('/assests/images/hero.jpeg')]   bg-cover bg-center h-[700px]">
      <div className="flex justify-between gap-16 px-32">
        <div className="pt-40 text-[#4B818C] ">
          <h1 className="text-5xl font-light  leading-[60px]">
            EMR,Billing and <br /> Insurance
          </h1>
          <p className="text-[#497F8A] mt-10 text-lg font-normal ">
            Secure,Integrated and easy to use
          </p>
          <button className="text-white text-lg  rounded-full h-14 w-56 px-0 mt-12  font-bold    hover:bg-[#316069] bg-[#3791a4] ">
            Request Demo
          </button>
        </div>
        <div className="pt-28">
          <Image src="/assests/images/pic.png" alt="" height={80} width={510} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
