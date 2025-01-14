import Image from "next/image";
import React from "react";
import { fjalla } from "@/utility/font";

function EHR() {
  return (
    <>
      <div className="bg-[#3791A4] pt-10 mt-5 lg:pt-28 sm:mt-20 lg:pb-10 lg:px-5  ">
        <div className="bg-[url('/assests/images/bg-eye-care.png')] bg-no-repeat bg-contain   bg-[#3791A4] pb-10   sm:pb-20 ">
          <div className="flex flex-col lg:flex-row  gap-5 md:gap-10 ">
            <div className="xl:pl-[110px]  ">
              <Image
                className=" md:h-[500px] lg:h-[329px] sm:object-contain px-4 sm:px-0  "
                src="/assests/images/eye-care.png"
                alt=""
                height={100}
                width={2300}
              />
            </div>
            <div className="">
              <h1
                className={`${fjalla.className} text-[#f0f4f9] px-4  md:px-8 lg:px-0 text-sm md:text-[33px] lg:text-[20px] xl:text-[33px] leading-[40px] text-center sm:text-start  font-bold not-italic`}
              >
                We specialize in Electronic Health Records (EHR)
              </h1>
              <p className="text-[#f0f4f9] text-[12px] px-4  md:px-8 lg:px-0 md:text-[15px] lg:text-[13px] xl:text-[15px]  sm:text-start  font-normal  sm:leading-[24px] xl:pr-[105px]  md:mt-7">
                We specialize in Electronic Health Records (EHR), offering
                comprehensive solutions tailored to the unique needs of
                healthcare providers. With a deep understanding of the
                complexities of modern healthcare systems, we focus on
                delivering efficient and user-friendly EHR platforms that
                streamline workflows, improve patient care, and enhance overall
                practice efficiency. By leveraging our specialized knowledge and
                commitment to innovation, we help healthcare organizations
                optimize their operations and deliver exceptional care to their
                patients.
              </p>

              <div className="flex justify-center md:px-8 lg:px-0 sm:justify-start">
                <button className=" text-[16px] leading-[24px] mt-7 rounded-full h-14 w-40 sm:w-48 px-0  border-[1px] bg-[#F2F6FA]  font-bold    text-[#464558]     transition-all duration-300 ">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EHR;
