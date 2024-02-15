import { fjalla } from "@/utility/font";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      {/* <div className="bg-[url('/assests/images/bg-about-pg.png')] bg-no-repeat h-[30vh]">
          <div className="pl-[38%]  pt-3 text-primary text-4xl font-bold ">
            <h1>About us</h1>
          </div>
          </div> */}
      {/* <div className=" ">
        <div className=" flex justify-center items-center text-bold text-4xl mt-6 bg-[url('/assests/images/about-us.png')]  h-[100px]   bg-no-repeat">
          <h1>ABOUT US</h1>
        </div>
      </div> */}
      <div className="bg-[url('/assests/images/about-us.png')] mt-28 bg-no-repeat h-[20vh] bg-top ">
        <div className="pl-[38%]  not-italic pt-7 text-[#3f7884]  text-4xl leading-[24px] font-normal">
          <h1 className="pl-20">ABOUT US</h1>
        </div>
      </div>
      <div className="flex justify-center bg-[url('/assests/images/about-bg.png')]  bg-no-repeat bg-cover">
        <div className="flex mx-28 ">
          <div className="flex flex-col  mt-20 ">
          <h1  className={`${fjalla.className} font-bold text-[#3f7884] leading-[24px] text-[33px] mt-6 text-start`}
                      >
               We are founded and based in US
              </h1>
            <p className="text-bold   text-[#30a4bb]  text-base pr-14 mt-6">
              Our company brings over 20 years of extensive experience in the
              healthcare industry, specializing in areas such as billing and
              coding, insurance, provider services, revenue management cycles,
              and patient relationships. We firmly believe that patient care is
              the most noble duty, and as such, we strive to support healthcare
              providers by alleviating the burdens associated with managing
              their practices. Our dedicated and knowledgeable team is available
              around the clock, seven days a week, ensuring continuous support
              and assistance to our clients.
            </p>
            <button className=" text-sm  rounded-full h-14 w-48 px-0 mt-12 border-[1px] border-[#0e2125]  font-bold    text-[#0d2429] hover:text-[white] hover:bg-[#1F3D43] transition-all duration-300 ">
              Learn more
            </button>
          </div>
          <div className=" ">
            <Image
              src="/assests/images/health-care.png"
              width={3500}
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
