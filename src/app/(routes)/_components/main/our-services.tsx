import Image from "next/image";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

function OurServices() {
  return (
    <>
      <div className="pt-10 ">
        <div className="bg-[url('/assests/images/bg-departments.png')] bg-no-repeat h-[30vh] bg-top px-40">
          <div className="pl-[38%]  pt-3 text-[#3F7884] text-4xl font-bold">
            <h1>OUR SERVICES</h1>
          </div>
        </div>
        <div className="bg-[url('/assests/images/doctors-bg.png')] bg-no-repeat bg-cover bg-top">
          <div className="grid grid-cols-4 gap-5 pl-24 pt-20">
            <div className="grid grid-cols-1  gap-5  cursor-pointer ">
              <div className=" shadow-xl rounded-md  bg-[#FFFFFF]  w-full   xl:h-[450px] xl:w-[330px] max-[320px]:pl-3 max-[375px]:pl-4 max-[425px]:pl-5 max-[280px]:pl-2 max-[768px]:pl-8 max-[1024px]:pl-9 lg:pl-3 xl:pl-0 pt-16 ">
                <div className="px-10">
                  <Image
                    className="  "
                    src="/icons/billing.png"
                    alt="icon"
                    width={100}
                    height={50}
                  />
                  <h1 className="text-[#264d55]">Medical Billing and Coding</h1>
                  <p>
                    Medical billing and coding involves translating medical
                    procedures and diagnoses into standardized codes for billing
                    and insurance purposes.
                  </p>
                  <button className="text-white text-sm border-2 rounded-full h-[50px] px-6 mt-3 border-white hover:text-[#316069] hover:border-[#315a61] hover:bg-transparent bg-[#1a363b] transition-all duration-300">
                    Request Demo
                  </button>
                </div>

                {/* <div>
                  <div className="flex gap-1 mb-3 items-center">
                    <IoMdArrowDropright className="text-[#949494]" />
                    <p className="text-[#949494] group-hover:text-white">
                      Vestibulum ut mauris ut massa
                    </p>
                  </div>
                  <div className="flex gap-1 mb-3 items-center">
                    <IoMdArrowDropright className="text-[#949494]" />
                    <p className="text-[#949494] group-hover:text-white">
                      Vestibulum ut mauris ut massa
                    </p>
                  </div>

                  <div className="flex gap-1 mb-3 items-center">
                    <IoMdArrowDropright className="text-[#949494]" />
                    <p className="text-[#949494] group-hover:text-white">
                      Vestibulum ut mauris ut massa
                    </p>
                  </div>

                  <div className="flex gap-1 mb-3 items-center">
                    <IoMdArrowDropright className="text-[#949494]" />
                    <p className="text-[#949494] group-hover:text-white">
                      Vestibulum ut mauris ut massa
                    </p>
                  </div>

                  <div className="flex gap-1 mb-3 items-center">
                    <IoMdArrowDropright className="text-[#949494]" />
                    <p className="text-[#949494] group-hover:text-white">
                      Vestibulum ut mauris ut massa
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServices;
