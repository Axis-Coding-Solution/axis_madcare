import React from "react";
import { TiLocationOutline } from "react-icons/ti";
import { TfiEmail } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";

function Corporation() {
  return (
    <>
      <div>
        <div className="bg-[url('/assests/images/about-us.png')] mt-8 lg:mt-28 bg-no-repeat h-28 lg:h-[20vh] min-[1440px]:h-24 min-[1536px]:h-24 bg-top ">
          <div className=" text-center   not-italic pt-7  text-[#3f7884] tracking-tighter  text-xl leading-[24px] font-normal ">
            <h1 className="font-bold sm:text-3xl">AXIS MedCARE CORPORATION</h1>
          </div>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row justify-evenly items-center lg:mt-10 lg:divide-x-2  divide-[#3F7884] mx-20 cursor-pointer">
            <div className=" ">
              <TiLocationOutline className=" mx-auto sm:mx-0 md:ml-[70px] lg:ml-24 mt-5 lg:mt-0  text-3xl text-[#3F7884]" />
              <h1 className=" text-[12px] sm:text-base mt-5 lg:ml-5 lg:mt-6 text-[#3F7884]">
                80 Pine Street, 21st Floor
              </h1>
              <h4 className=" text-[12px] sm:text-lg lg:ml-5  text-[#3F7884]">
                {" "}
                New York, NY 10005
              </h4>
            </div>

            <div className="lg:pl-20 mt-5 lg:mt-0 lg:h-28">
              <TfiEmail className=" ml-[55px] md:ml-24  text-3xl text-[#3F7884]" />
              <p className="hover:underline mt-5 text-[13px] md:text-xl text-[#3F7884]">
                sales@axismedcare.com
              </p>
            </div>

            <div className="lg:pl-16 mt-5 lg:mt-0 lg:h-28">
              <IoCallOutline className=" mx-auto sm:mx-0 sm:ml-14 text-3xl text-[#3F7884]" />
              <p className=" text-[12px] sm:text-xl mt-5 text-[#3F7884]">+1 866 643 8367</p>
            </div>
          </div>
       
        </div>
      </div>
    </>
  );
}

export default Corporation;
