import Image from "next/image";
import React from "react";
import { fjalla } from "@/utility/font";

function Info({
  title,
  description,
  icon,
}: {
  title: string | undefined;
  description: string | undefined;
  icon: string | undefined;
}) {
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
    <>
      <div className="bg-[#3791A4] pt-28 mt-20 pb-10 ">
        <div className="bg-[url('/assests/images/bg-eye-care.png')] bg-no-repeat bg-contain   bg-[#3791A4]   pb-20 ">
          <div className="flex gap-10 ">
            <div className="pl-[120px]  ">
              <Image
                className="h-[270px] w-[250px] rounded-xl"
                src="/assests/images/bg-eprescribing.jpg"
                alt=""
                height={100}
                width={200}
              />
            </div>
            <div className="w-[800px]">
              <h1
                className={`${fjalla.className} text-[#f0f4f9] text-[33px] leading-[40px]  font-bold not-italic`}
              >
                {title}
              </h1>
              <p className="text-[#f0f4f9] text-[15px] font-normal leading-[24px] pr-[157px]  mt-7">
                {description}
              </p>

              <button className=" text-[16px] leading-[24px] mt-7 rounded-full h-14 w-48 px-0  border-[1px] bg-[#F2F6FA]  font-bold    text-[#464558]     transition-all duration-1000 ">
                Learn More 
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
