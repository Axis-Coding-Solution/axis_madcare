import { fjalla } from "@/utility/font";
import React from "react";

function News() {
  return (
    <div className="bg-[url('/assests/images/peo.png')] bg-no-repeat bg-contain mt-10 ">
      <div className=" py-10 lg:py-32 px-4 md:px-10 xl:px-28 bg-[#3791A4] ">
        <div className="flex flex-col lg:flex-row lg:justify-between  ">
          <div>
            <h1
              className={`${fjalla.className} text-[#f0f4f9] not-italic text-[20px]  sm:text-[33px] leading-[40px] font-bold`}
            >
              Get an update every week
            </h1>
            <div className="text-[#b2dded] not-italic mt-2 text-[13px] md:text-[16px] md:leading-[24px] font-normal ">
              <h1>
                Livedoc was created in order to improve the patient experience.
              </h1>{" "}
              <h3>
                Providing world-class tests, and a wide range of other services.
              </h3>
            </div>
          </div>
          <div className="">
            <h1
              className={`${fjalla.className} text-[#b2dded] not-italic mt-5 md:mt-5 lg:mt-0 text-[19px] leading-[23px] font-bold  lg:pl-5`}
            >
              SUBSCRIBE TO NEWSLETTER
            </h1>
            <div className="flex flex-col sm:flex-row sm:gap-3 lg:gap-0">
              <div className="w-full md:w-96 lg:px-3 mt-3">
                <input
                  className="shadow  appearance-none rounded-2xl border-[1px]  w-full py-4 px-5 leading-tight focus:outline-none bg-[#3791A4] placeholder-white"
                  id="Email"
                  type="Email"
                  placeholder="Email"
                />
              </div>
              <div className="">
              <button className=" font-bold not-italic text-[16px]  leading-[24px] w-full   border-2 rounded-2xl  h-[57px] px-12  mt-2 border-white  text-[#464558]  bg-[#F2F6FA] transition-all duration-300">
                Subscribe
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
