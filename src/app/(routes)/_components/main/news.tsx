import React from "react";

function News() {
  return (
    <div className="mt-20">
    <div className="bg-[url('/assests/images/cta-bg.png')] bg-no-repeat bg-cover bg-top">
      <div className="flex justify-between px-28 bg-[#3791A4] py-28">
        <div>
          <h1 className="text-[#F0F4F9] text-3xl font-extrabold">Get an update every week</h1>
          <p className="text-[#B2DDED] mt-5">
            Livedoc was created in order to improve the patient experience.{" "}
            <br />
            Providing world-class tests, and a wide range of other services.
          </p>
        </div>
        <div>
          <h1 className="text-[#AAD8E8] font-semibold text-lg pl-5">SUBSCRIBE TO NEWSLETTER</h1>
          <div className="flex">
            <div className="w-full  md:w-96  px-3 mt-5">
              <input
                className="shadow appearance-none border border-[#CFEEF3] rounded-3xl w-full py-4 px-5  leading-tight focus:outline-none"
                id="phone"
                type="tel"
                placeholder="Email"
              />
            </div>
            <button className=" font-bold text-sm border-2 rounded-2xl h-[50px] px-10 mt-5 border-white  text-[#464558]  bg-[#F2F6FA] transition-all duration-300">
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
