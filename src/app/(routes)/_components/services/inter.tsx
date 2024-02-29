import { fjalla } from "@/utility/font";
import Image from "next/image";
import React from "react";

const Inter = () => {
  const list = [
    { data: "Health information exchanges" },
    { data: "Pharmacies" },
    { data: "Payers" },
    { data: "Radiology / imaging services" },
    { data: "Hospital networks" },
    { data: "Referring providers" },
    { data: "Cancer registries" },
    { data: "Patients" },
    { data: "Syndromic surveillance agencies" },
    { data: "Immunization registries" },
    { data: "Specialty registries" },
    { data: "Electronic devices" },
    { data: "DICOM compliant imaging equipment" },
    { data: "Medical Billing Software" },
  ];
  return (
    <div className="mb-20">
      <div className="bg-[url('/assests/images/about-us.png')] mt-10 bg-no-repeat h-28 lg:h-[20vh] min-[1440px]:h-24 min-[1536px]:h-24 bg-top ">
        <div className="lg:pl-[44%] text-center lg:text-left  not-italic pt-7  text-[#3f7884] tracking-tighter  text-4xl leading-[24px] font-normal">
          <h1 className="">Interoperability</h1>
        </div>
      </div>
      <div className="flex justify-center bg-[url('/assests/images/about-bg.png')]  bg-no-repeat bg-cover">
        <div className="flex flex-col-reverse  lg:flex-row lg:mx-28  ">
          <div className="flex flex-col ">
            <h1
              className={`${fjalla.className} font-bold not-italic text-center lg:mt-14 xl:mt-0 lg:text-left text-[#3f7884] lg:leading-[40px] text-[33px] `}
            >
              Interoperability
            </h1>
            <p className="not-italic text-[13px] px-3 lg:px-0  sm:text-[17px] text-[#6eadb9]  lg:leading-[28px] lg:text-sm font-normal lg:pr-14 mt-6 xl:text-lg">
              Transform your practice with CureMD cloud-based Electronic Health
              Record in a way you never imagined before. With a powerful
              knowledge base,
            </p>
            <ul className="grid sm:grid-cols-2 px-3 lg:px-0  text-[13px] xl:text-lg text-[#6eadb9] sm:grid-rows-5 ml-8">
              {list.map((item, index) => {
                return (
                  <li key={index} className="list-disc">
                    {item.data}
                  </li>
                );
              })}
            </ul>
            <p className="text-[#6eadb9] text-[13px] px-3 lg:px-0  xl:text-lg ">
              {" "}
              We firmly believe that patient care is the most noble duty, and as
              such, we strive to support healthcare providers by alleviating the
              burdens associated with managing their practices.
              <br /> Our dedicated and knowledgeable team is available around
              the clock, seven days a week, ensuring continuous support and
              assistance to our clients.
            </p>
            <div className="pl-5 lg:pl-0 ">

            <button className=" text-[16px]   leading-[24px] not-italic  rounded-full h-14 w-40 md:w-48  mt-9 border-[1px] border-[#194e58]  font-bold    text-[#1e5c69] hover:text-[white] hover:bg-[#1F3D43] transition-all duration-1000 ">
              Learn more
            </button>
            </div>
          </div>
          <div className="">
            <Image
              className="rounded-md"
              src="/assests/images/interoperability1.jpg"
              width={1000}
              height={50}
              alt="pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inter;
