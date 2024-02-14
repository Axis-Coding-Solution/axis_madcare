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
                <div className="">
                  <div className="pl-28">
                    <Image
                      className=""
                      src="/icons/billing.png"
                      alt="icon"
                      width={100}
                      height={50}
                    />
                  </div>
                  <div className="pl-10">
                    <h5 className="mt-5 text-[#68959E] text-xl font-bold">Medical Billing and Coding</h5>
                    <p className="pr-2 text-gray-400 text-xs mt-5">
                      Medical billing and coding involves translating medical
                      procedures and diagnoses into standardized codes for
                      billing and insurance purposes.
                    </p>
                    <button className=" text-lg  rounded-full h-14 w-56 px-0 mt-12  font-bold    text-black  hover:bg-[#3791a4] ">
                    View Detail
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServices;
