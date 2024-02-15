import Image from "next/image";
import React from "react";

function EHR() {
  return (
    <>
      <div className="bg-[#3791A4] pt-28 mt-20 ">
        <div className="bg-[url('/assests/images/bg-eye-care.png')] bg-no-repeat bg-contain   bg-[#3791A4]   pb-20 ">
          <div className="flex gap-10 ">
            <div className="pl-28">
              <Image
                className=""
                src="/assests/images/eye-care.png"
                alt=""
                height={100}
                width={2500}
              />
            </div>
            <div className=" mt-0">
              <h1 className="text-[#F0F4F9] text-[25px]  font-extrabold">
                We specialize in Electronic Health Records (EHR)
              </h1>
              <p className="text-[#E7EFF4]  pr-36 mt-6">
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

              <button className=" text-sm  rounded-full h-14 w-48 px-0  border-[1px] bg-[#F2F6FA]  font-bold    text-[#535365] mt-5    transition-all duration-300 ">
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
