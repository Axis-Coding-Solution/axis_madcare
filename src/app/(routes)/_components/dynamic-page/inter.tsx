import { fjalla } from "@/utility/font";
import Image from "next/image";
import React from "react";
const Inter = ({
  title,
  description,
  icon,
}: {
  title: string | undefined;
  description: string | undefined;
  icon: string | undefined;
}) => {
  return (
    <div className="mb-20">
      <div className="bg-[url('/assests/images/about-us.png')] mt-10 bg-no-repeat h-[20vh] bg-top ">
        <div className="pl-[39%]  not-italic pt-7 text-[#3f7884] tracking-tighter  text-4xl leading-[24px] font-normal">
          <h1 className="">{title}</h1>
        </div>
      </div>
      <div className="flex justify-center bg-[url('/assests/images/about-bg.png')]  bg-no-repeat bg-cover">
        <div className="flex mx-28 ">
          <div className="flex flex-col">
            <h1
              className={`${fjalla.className} font-bold not-italic text-[#3f7884] leading-[40px] text-[33px]`}
            >
              {title}
            </h1>
            <p className="not-italic text-[17px] w-3/4 text-[#6eadb9]  leading-[28px] font-normal pr-14 mt-6">
              {description}
            </p>

            <button className=" text-[16px] leading-[24px] not-italic  rounded-full h-14 w-48 px-0 mt-9 border-[1px] border-[#194e58]  font-bold    text-[#1e5c69] hover:text-[white] hover:bg-[#1F3D43] transition-all duration-300 ">
              Learn more
            </button>
          </div>
          <div className="">
            <Image
              className="rounded-md"
              src={icon}
              width={300}
              height={50}
              alt="pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inter;
