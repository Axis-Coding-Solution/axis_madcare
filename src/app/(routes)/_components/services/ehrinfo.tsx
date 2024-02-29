import { fjalla } from "@/utility/font";
import Image from "next/image";
import React from "react";

const Ehrinfo = () => {
  const list = [
    { data: "Health information exchanges" },
    { data: "Pharmacies" },
    { data: "Payers" },
    { data: "Radiology / imaging services" },
    { data: "Hospital networks" },
    { data: "Referring providers" },
    { data: "Cancer registries" },
    { data: "Patients" },
  ];
  return (
    <div className= "mb-10 md:mb-20">
      <div className="bg-[url('/assests/images/about-us.png')] mt-8 sm:mt-10 bg-no-repeat h-28 lg:h-[20vh] min-[1440px]:h-24 min-[1536px]:h-24 bg-top ">
        <div className="xl:pl-[44%] text-center xl:text-left not-italic pt-7 text-[#3f7884] tracking-tighter  text-4xl leading-[24px] font-normal">
          <h1 className="">
            About <span className="text-gray-400"> Software</span>{" "}
          </h1>
        </div>
      </div>
      <div className="flex justify-center bg-[url('/assests/images/about-bg.png')]  bg-no-repeat bg-cover">
        <div className="flex flex-col-reverse lg:flex-row lg:mx-28 ">
          <div className="flex flex-col pl-5 lg:pl-0 ">
            <h1
              className={`${fjalla.className} font-bold not-italic text-[#3f7884]  leading-[40px] sm:text-[33px] mt-6 `}
            >
              Electronic Health Record Software
            </h1>
            <p className="not-italic text-[17px] text-[#6eadb9]  leading-[28px] font-normal sm:pr-14 sm:mt-6">
              Transform your practice with CureMD cloud-based Electronic Health
              Record in a way you never imagined before. With a powerful
              knowledge base,
            </p>
            {list.map((item) => (
              <li className="list-disc text-[#6eadb9]" key={item.data}>
                {item.data}
              </li>
            ))}

            <button className=" text-[16px] leading-[24px] not-italic  rounded-full h-14 w-40 md:w-48 px-0 mt-12 border-[1px] border-[#194e58]  font-bold    text-[#1e5c69] hover:text-[white] hover:bg-[#1F3D43] transition-all duration-1000 ">
              Learn more
            </button>
          </div>
          <div className=" ">
            <Image
              className="rounded-md"
              src="/assests/images/ehr.jpg"
              width={1200}
              height={50}
              alt="pic"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ehrinfo;
