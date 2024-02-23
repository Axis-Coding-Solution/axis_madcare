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
      <div className="bg-[url('/assests/images/about-us.png')] mt-10 bg-no-repeat h-[20vh] bg-top ">
        <div className="pl-[44%]  not-italic pt-7 text-[#3f7884] tracking-tighter  text-4xl leading-[24px] font-normal">
          <h1 className="">Interoperability</h1>
        </div>
      </div>
      <div className="flex justify-center bg-[url('/assests/images/about-bg.png')]  bg-no-repeat bg-cover">
        <div className="flex mx-28 ">
          <div className="flex flex-col">
            <h1
              className={`${fjalla.className} font-bold not-italic text-[#3f7884] leading-[40px] text-[33px]`}
            >
              Interoperability
            </h1>
            <p className="not-italic text-[17px] text-[#6eadb9]  leading-[28px] font-normal pr-14 mt-6">
              Transform your practice with CureMD cloud-based Electronic Health
              Record in a way you never imagined before. With a powerful
              knowledge base,
            </p>
            <ul className="grid grid-cols-2 text-[#6eadb9] grid-rows-5 ml-8">
              {list.map((item, index) => {
                return (
                  <li key={index} className="list-disc">
                    {item.data}
                  </li>
                );
              })}
            </ul>
            <p className="text-[#6eadb9]">
              {" "}
              We firmly believe that patient care is the most noble duty, and as
              such, we strive to support healthcare providers by alleviating the
              burdens associated with managing their practices.
              <br /> Our dedicated and knowledgeable team is available around
              the clock, seven days a week, ensuring continuous support and
              assistance to our clients.
            </p>

            <button className=" text-[16px] leading-[24px] not-italic  rounded-full h-14 w-48 px-0 mt-9 border-[1px] border-[#194e58]  font-bold    text-[#1e5c69] hover:text-[white] hover:bg-[#1F3D43] transition-all duration-300 ">
              Learn more
            </button>
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
