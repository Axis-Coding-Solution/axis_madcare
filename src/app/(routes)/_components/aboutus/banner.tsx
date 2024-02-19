'use client'
import Image from 'next/image';
import React from 'react'
import animation from "../../animation/animation.json";
import Lottie from "lottie-react";
import { fjalla } from '@/utility/font';

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

function Banner() {
  return (
    <>
    <div className="bg-[url('/assests/images/hero.jpeg')]   bg-cover bg-center h-[750px]">
    <div className="flex justify-between gap-16 pl-28">
      <div className="mt-60 text-[#3f7884] ">
        <h1 className="text-8xl font-light not-italic leading-[57px]">
          About US
        </h1>
        {/* <p className="text-[#3f7884] mt-10 text-[19px] not-italic font-normal  ">
          Secure,Integrated and easy to use
        </p>
        <button className="text-[#fffefe] text-[16px] leading-[24px] not-italic  font-bold  rounded-full h-14 w-56 px-0 mt-12 transition-all duration-300      hover:bg-[#1C505B] bg-[#3791a4] ">
          Request Demo
        </button> */}
      </div>
      <div className="w-[50%]">
      <Lottie
      animationData={animation}
      loop={true} // Set to true if you want the animation to loop
      autoplay={true} // Set to true if you want the animation to play automatically
      
    />
      </div>
    </div>
  </div>
{/* _________________________________________________________________________ */}
  <div>
  <div className="bg-[url('/assests/images/about-us.png')] mt-28 bg-no-repeat h-[20vh] bg-top ">
    <div className="pl-[39%]  not-italic pt-7 text-[#3f7884] tracking-tighter  text-4xl leading-[24px] font-normal">
      <h1 className="pl-20">ABOUT US</h1>
    </div>
  </div>
  <div className="flex justify-center bg-[url('/assests/images/about-bg.png')]  bg-no-repeat bg-cover mb-40">
    <div className="flex mx-28 ">
      <div className="flex flex-col  mt-20 ">
        <h1
          className={`${fjalla.className} font-bold not-italic text-[#3f7884] leading-[40px] text-[33px] mt-6 `}
        >
          We are founded and based in US
        </h1>
        <p className="not-italic text-[17px] text-[#6eadb9]  leading-[28px] font-normal pr-14 mt-6">
          Our company brings over 20 years of extensive experience
          <br /> in the healthcare industry, specializing in areas such as
          billing and coding, insurance, provider services, revenue
          management cycles, and patient relationships.
          <br /> We firmly believe that patient care is the most noble duty,
          and as such, we strive to support healthcare providers by
          alleviating the burdens associated with managing their practices.
          <br /> Our dedicated and knowledgeable team is available around
          the clock, seven days a week, ensuring continuous support and
          assistance to our clients.
        </p>

        <button className=" text-[16px] leading-[24px] not-italic  rounded-full h-14 w-48 px-0 mt-12 border-[1px] border-[#194e58]  font-bold    text-[#1e5c69] hover:text-[white] hover:bg-[#1F3D43] transition-all duration-300 ">
          Learn more
        </button>
      </div>
      <div className="mt-14">
        <Image
          src="/assests/images/health-care.png"
          width={1200}
          height={50}
          alt="pic"
        />
      </div>
    </div>
  </div>
</div>
</>

  )
}

export default Banner;