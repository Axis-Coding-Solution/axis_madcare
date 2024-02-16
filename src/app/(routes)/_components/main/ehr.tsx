import Image from "next/image";
import React from "react";
import { fjalla } from "@/utility/font";

function EHR() {
  return (
    <>
      <div className="bg-[#3791A4] pt-28 mt-20 pb-10 ">
        <div className="bg-[url('/assests/images/bg-eye-care.png')] bg-no-repeat bg-contain   bg-[#3791A4]   pb-20 ">
          <div className="flex gap-10 ">
            <div className="pl-28 ">
              <Image
                className=""
                src="/assests/images/eye-care.png"
                alt=""
                height={100}
                width={2530}
              />
            </div>
            <div className="">
              <h1
                className={`${fjalla.className} text-[#f0f4f9] text-[33px] leading-[40px]  font-bold not-italic`}
              >
                We specialize in Electronic Health Records (EHR)
              </h1>
              <p className="text-[#f0f4f9] text-[18px] font-normal leading-[24px] pr-[196px]  mt-7">
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
             

              <button className=" text-[16px] leading-[24px] mt-7 rounded-full h-14 w-52 px-0  border-[1px] bg-[#F2F6FA]  font-bold    text-[#464558]     transition-all duration-300 ">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EHR;
