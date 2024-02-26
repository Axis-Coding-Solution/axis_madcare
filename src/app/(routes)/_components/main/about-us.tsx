import { fjalla } from "@/utility/font";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="bg-[url('/assests/images/about-us.png')] mt-28 bg-no-repeat h-[15vh] bg-top ">
        <div className=" text-center   not-italic pt-7 text-[#3f7884] tracking-tighter  text-4xl leading-[24px] font-normal">
          <h1 className="font-bold">ABOUT US</h1>
        </div>
      </div>
      <div className="flex justify-center  bg-[url('/assests/images/about-bg.png')]  bg-no-repeat bg-cover p-5">
        <div className="flex flex-col sm:flex-row sm:items-center  lg:px-[105px] ">
          <div className="flex flex-col  mt-20 ">
            <h1
              className={`${fjalla.className} text-center sm:text-start font-bold not-italic text-[#3f7884] leading-[40px] text-2xl lg:text-[33px] mt-6 `}
            >
              We are founded and based in US
            </h1>
            <p className="not-italic text-[12px] lg:text-[17px] text-[#6eadb9] text-justify  leading-[28px] font-normal sm:pr-14 mt-6">
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
            <div className="flex justify-center sm:justify-start">
            <button className=" text-[16px]  leading-[24px] not-italic  rounded-full h-14 w-48 px-0 mt-12 border-[1px] border-[#194e58]  font-bold    text-[#1e5c69] hover:text-[white] hover:bg-[#1F3D43] transition-all duration-1000 ">
              Learn more
            </button>
            </div>
          </div>
          <div className=" mt-5 order-first sm:order-last">
            <Image
              src="/assests/images/health-care.png"
              width={1400}
              height={50}
              alt="pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
