import React from "react";
import { TiLocationOutline } from "react-icons/ti";
import { TfiEmail } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";

function Corporation() {
  return (
    <>
      <div>
        <div className="bg-[url('/assests/images/about-us.png')] mt-28 bg-no-repeat h-[20vh] bg-top ">
          <div className=" text-center   not-italic pt-7 text-[#3f7884] tracking-tighter  text-xl leading-[24px] font-normal">
            <h1 className="font-bold">Axis MedCare Corporation</h1>
          </div>
        </div>
        <div>
          <div className="flex justify-evenly items-center mt-10 divide-x-2  divide-[#3F7884] mx-20 cursor-pointer">
            <div className="">
              <TiLocationOutline className="ml-20 text-3xl text-[#3F7884]" />
              <p className="text-lg mt-5 text-[#3F7884]">
                80 Pine Street, 21st Floor <br /> New York, NY 10005
              </p>
            </div>
            
            
            <div className="pl-20">
              <TfiEmail className="ml-20 text-3xl text-[#3F7884]" />
              <p className="hover:underline mt-5 text-xl text-[#3F7884]">
                sales@axismedcare.com
              </p>
            </div>
            <div className="pl-16">
              <IoCallOutline className="ml-14 text-3xl text-[#3F7884]" />
              <p className="text-xl mt-5 text-[#3F7884]">+1 866 643 8367</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Corporation;
