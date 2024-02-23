import { fjalla } from "@/utility/font";
import Image from "next/image";
import React from "react";

function About() {
  return (
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
  );
}

export default About;
