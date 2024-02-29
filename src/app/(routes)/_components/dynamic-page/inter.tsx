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
    // <div className="mb-20 pl-3">
    //   <div className="bg-[url('/assests/images/about-us.png')] mt-10 bg-no-repeat h-[20vh] bg-top ">
    //     <div className="pl-[39%]  not-italic pt-7 text-[#3f7884] tracking-tighter  text-4xl leading-[24px] font-normal">
    //       <h1 className="">{title}</h1>
    //     </div>
    //   </div>
    //   <div className="flex justify-center bg-[url('/assests/images/about-bg.png')]  bg-no-repeat bg-cover">
    //     <div className="flex mx-28 ">
    //       <div className="flex flex-col">
    //         <h1
    //           className={`${fjalla.className} font-bold not-italic text-[#3f7884] leading-[40px] text-[33px]`}
    //         >
    //           {title}
    //         </h1>
    //         <p className="not-italic text-[17px] w-3/4 text-[#6eadb9]  leading-[28px] font-normal pr-14 mt-6">
    //           {description}
    //         </p>

    //         <button className=" text-[16px] leading-[24px] not-italic  rounded-full h-14 w-48 px-0 mt-9 border-[1px] border-[#194e58]  font-bold    text-[#1e5c69] hover:text-[white] hover:bg-[#1F3D43] transition-all duration-1000 ">
    //           Learn more
    //         </button>
    //       </div>
    //       {/* <div className="">
    //         <Image
    //           className="rounded-md"
    //           src={icon}
    //           width={300}
    //           height={50}
    //           alt="pic"
    //         />
    //       </div> */}
    //     </div>
    //   </div>
    // </div>
    <div className="mb-10 pl-3">
      <div className="bg-[url('/assests/images/about-us.png')] mt-10 bg-no-repeat h-28 lg:h-[20vh] min-[1440px]:h-24 min-[1536px]:h-24 bg-top  ">
        <div className="xl:pl-[40%]  not-italic pt-7 text-[#3f7884] tracking-tighter  text-center  xl:text-left text-xl sm:text-4xl leading-[24px] font-normal ">
          <h1 className="">
            <span className="text-gray-400"> {title} </span>{" "}
          </h1>
        </div>
      </div>
      <div className="flex justify-center bg-[url('/assests/images/about-bg.png')]  bg-no-repeat bg-cover">
        <div className="flex xl:mx-28 ">
          <div className="flex flex-col ">
            <h1
              className={`${fjalla.className} font-bold not-italic text-[#3f7884] leading-[40px] text-center xl:text-left xl:pl-2 sm:text-[33px] mt-4 md:mt-6 `}
            >
              {title}
            </h1>
            <p className="not-italic text-[12px] sm:text-[17px] xl:w-3/4 text-[#6eadb9]  lg:leading-[28px] font-normal px-1 xl:pr-14 sm:mt-6">
              {description}
            </p>
          </div>
         
     
        </div>
      </div>
      <div className=" flex justify-center xl:justify-start xl:pl-28">
      <button className=" text-[16px] leading-[24px] not-italic  rounded-full h-14 w-36 md:w-48 px-0 mt-9 border-[1px] border-[#194e58]  font-bold    text-[#1e5c69] hover:text-[white] hover:bg-[#1F3D43] transition-all duration-1000 ">
               Learn more
            </button>
            </div>
    </div>
  );
};

export default Inter;
