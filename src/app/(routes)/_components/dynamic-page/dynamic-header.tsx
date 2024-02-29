import { fjalla } from "@/utility/font";
import Image from "next/image";
import React from "react";

const DynamicHeader = ({
  title,
  description,
  icon,
}: {
  title: string | undefined;
  description: string | undefined;
  icon: string | undefined;
}) => {
  return (
    <div className="mb-10 pl-3">
      <div className="bg-[url('/assests/images/about-us.png')] mt-10 bg-no-repeat h-28 lg:h-[20vh] min-[1440px]:h-24 min-[1536px]:h-24 bg-top  ">
        <div className="xl:pl-[40%]  not-italic pt-7 text-[#3f7884] tracking-tighter  text-center  xl:text-left text-xl sm:text-4xl leading-[24px] font-normal ">
          <h1 className="">
            <span className="text-gray-400"> {title}</span>{" "}
          </h1>
        </div>
      </div>
      <div className="flex justify-center bg-[url('/assests/images/about-bg.png')]  bg-no-repeat bg-cover">
        <div className="flex xl:mx-28 ">
          <div className="flex flex-col ">
            <h1
              className={`${fjalla.className} font-bold not-italic text-[#3f7884] leading-[40px] text-center xl:text-left xl:pl-2 sm:text-[33px] mt-3 md:mt-6 `}
            >
              {title}
            </h1>
            <p className="not-italic text-[12px] sm:text-[17px] xl:w-3/4 text-[#6eadb9]  lg:leading-[28px] font-normal px-1 xl:pr-14 sm:mt-6">
              {description}
            </p>
          </div>
          {/* <div className=" ">
            <Image
              className="rounded-md"
              src={icon}
              width={300}
              height={50}
              alt="pic"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DynamicHeader;
