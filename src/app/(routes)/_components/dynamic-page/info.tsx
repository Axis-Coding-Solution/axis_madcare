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
      <div className="bg-[#3791A4] py-10 lg:pt-28 lg:mt-20 lg:pb-10 ">
        <div className="bg-[url('/assests/images/bg-eye-care.png')] bg-no-repeat bg-contain   bg-[#3791A4]   lg:pb-20 ">
          <div className="flex flex-col lg:flex-row gap-5  sm:gap-10 ">
            <div className="lg:pl-[120px]  ">
              <Image
                className=" h-48 md:h-96    lg:h-[270px] w-full px-3 md:px-5  lg:px-0 lg:w-[250px] rounded-2xl "
                src="/assests/images/bg-eprescribing.jpg"
                alt=""
                height={100}
                width={200}
              />
            </div>
            <div className="lg:w-[800px] px-4 ">
              <h1
                className={`${fjalla.className} text-[#f0f4f9]  lg:text-[33px] leading-[40px]  font-bold not-italic`}
              >
                {title}
              </h1>
              <p className="text-[#f0f4f9]  text-[11px] lg:text-[15px] font-normal sm:leading-[24px] xl:pr-[157px] lg:mt-3 xl:mt-4">
                {description}
              </p>
                   
              <button className="  text-[16px] leading-[24px] mt-7 rounded-full h-14 w-36 sm:w-48 px-0  border-[1px] bg-[#F2F6FA]  font-bold    text-[#464558]     transition-all duration-1000 ">
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
