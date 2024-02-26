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
    <div className="mb-20 pl-3">
      <div className="bg-[url('/assests/images/about-us.png')] mt-10 bg-no-repeat h-[20vh] bg-top  ">
        <div className="pl-[40%]  not-italic pt-7 text-[#3f7884] tracking-tighter  text-4xl leading-[24px] font-normal ">
          <h1 className="">
            <span className="text-gray-400"> {title}</span>{" "}
          </h1>
        </div>
      </div>
      <div className="flex justify-center bg-[url('/assests/images/about-bg.png')]  bg-no-repeat bg-cover">
        <div className="flex mx-28 ">
          <div className="flex flex-col ">
            <h1
              className={`${fjalla.className} font-bold not-italic text-[#3f7884] leading-[40px] text-[33px] mt-6 `}
            >
              {title}
            </h1>
            <p className="not-italic text-[17px] w-3/4 text-[#6eadb9]  leading-[28px] font-normal pr-14 mt-6">
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
