import { fjalla } from "@/utility/font";
import React from "react";

function News() {
  return (
    <div className="bg-[url('/assests/images/peo.png')] bg-no-repeat bg-contain ">
      <div className="  py-32 px-28 bg-[#3791A4] ">
        <div className="flex justify-between  ">
          <div>
            <h1
              className={`${fjalla.className} text-[#f0f4f9] not-italic  text-[33px] leading-[40px] font-bold`}
            >
              Get an update every week
            </h1>
            <p className="text-[#b2dded] not-italic mt-2 text-[16px] leading-[24px] font-normal ">
              Livedoc was created in order to improve the patient experience.{" "}
              <br />
              Providing world-class tests, and a wide range of other services.
            </p>
          </div>
          <div className="">
            <h1
              className={`${fjalla.className} text-[#b2dded] not-italic text-[19px] leading-[23px] font-bold  pl-5`}
            >
              SUBSCRIBE TO NEWSLETTER
            </h1>
            <div className="flex">
              <div className="w-full md:w-96 px-3 mt-3">
                <input
                  className="shadow appearance-none rounded-2xl border-[1px]  w-full py-4 px-5 leading-tight focus:outline-none bg-[#3791A4] placeholder-gray-500"
                  id="Email"
                  type="Email"
                  placeholder="Email"
                />
              </div>
              <button className=" font-bold not-italic text-[16px]  leading-[24px]  border-2 rounded-2xl  h-[60px] px-12  mt-2 border-white  text-[#464558]  bg-[#F2F6FA] transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
