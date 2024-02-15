import React from "react";

function News() {
  return (
    <div className="bg-[url('/assests/images/peo.png')] bg-no-repeat bg-contain">
      <div className="  py-32 px-28 bg-[#3791A4] ">
        <div className="flex justify-between  ">
          <div>
            <h1 className="text-[#F0F4F9] text-3xl font-bold">
              Get an update every week
            </h1>
            <p className="text-[#B2DDED] mt-2 font-bold">
              Livedoc was created in order to improve the patient experience.{" "}
              <br />
              Providing world-class tests, and a wide range of other services.
            </p>
          </div>
          <div>
            <h1 className="text-[#AAD8E8] font-bold text-lg pl-5">
              SUBSCRIBE TO NEWSLETTER
            </h1>
            <div className="flex">
              <div className="w-full  md:w-96  px-3 mt-3">
                <input
                  className="shadow appearance-none  rounded-2xl w-full py-4 px-5  leading-tight focus:outline-none"
                  id="phone"
                  type="tel"
                  placeholder="Email"
                />
              </div>
              <button className=" font-bold text-sm border-2 rounded-2xl  h-[50px] px-10 mt-3 border-white  text-[#464558]  bg-[#F2F6FA] transition-all duration-300">
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
