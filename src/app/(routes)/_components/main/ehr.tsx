import Image from "next/image";
import React from "react";

function EHR() {
  return (
    <>
      <div className="">
        <div className="bg-[url('/assests/images/bg-eye-care.png')]  bg-no-repeat bg-contain   bg-[#3791A4]   mt-10 ">
          <div className="flex gap-10">
            <div className="pl-16">
              <Image
                className="mt-10"
                src="/assests/images/eye-care.png"
                alt=""
                height={100}
                width={2500}
              />
            </div>
            <div className="mt-10">
              <h1 className="text-[#F0F4F9] text-[25px] text-light font-bold">We specialize in Electronic Health Records (EHR)</h1>
              <p className="text-[#E7EFF4] pr-40 mt-6">
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

              {/* <button className=" text-sm  rounded-full h-14 w-48 px-0 mt-12 border-[1px] border-[#3791a4]  font-bold    text-[#68959E] hover:text-[white] hover:bg-[#3791a4] transition-all duration-300 ">
                View Detail
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EHR;
