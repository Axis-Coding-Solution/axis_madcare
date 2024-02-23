import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
function Demo() {
  return (
    <>
      <div className="md:mt-20">

        <div className="bg-[url('/assests/images/people.png')] bg-no-repeat h-[20vh] bg-top sm:px-40">
          <div className="lg:pl-[40%] text-center lg:text-start not-italic font-normal text-4xl leading-[24px] tracking-tighter  pt-5 text-[#3f7884]">
            <h1 className="font-bold">Request Demo</h1>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2   items-center justify-center w-full px-3 sm:px-10 lg:px-28">
          <div className="">
            <Image
              className="lg:mt-20 "
              src="/assests/images/appointment.png"
              alt=""
              height={100}
              width={550}
            />
          </div> */}
           <div className="grid grid-cols-1 sm:grid-cols-2 w-full px-3 sm:px-10 lg:px-28">
          <div className="">
            <Image
              className="lg:mt-10 "
              src="/assests/images/appointment.png"
              alt=""
              height={100}
              width={550}
            />
          </div>

          <div>
            <div className="w-full relative   ">
              <div className="absolute bottom-0 right-0">
                <Image
                  className="mt-5"
                  src="/assests/images/dot-bg.png"
                  alt=""
                  height={50}
                  width={100}
                />
              </div>

              <form className="bg-white rounded px-8  pt-20 pb-8 mb-4">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                  <input
                      className="shadow appearance-none border border-[#CFEEF3]  py-4 rounded-2xl w-full  px-5  leading-tight focus:outline-none"
                      id="name"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                  <input
                      className="shadow appearance-none border border-[#CFEEF3] rounded-2xl w-full py-4 px-5  leading-tight focus:outline-none "
                      id="phone"
                      type="tel"
                      placeholder="phone"
                    />
                  </div>
                  <div>
                  <div className=" relative">
                      <select
                        className="shadow text-neutral-400 appearance-none border border-[#CFEEF3] rounded-2xl w-full py-4 pl-5  leading-tight focus:outline-none"
                        id="category"
                      >
                        <option>Category</option>
                        <option value="Category1">Category1</option>
                        <option value="Category2">Category2</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-10 flex items-center pointer-events-none">
                        <IoIosArrowDown className="text-neutral-400 text-sm" />
                      </div>
                  </div>
                  </div>
                  <div>
                  <input
                      className="shadow appearance-none border border-[#CFEEF3] rounded-2xl w-full py-4 px-5  leading-tight focus:outline-none"
                      id="Email"
                      type="Email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                {/* <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-[270px]   px-3  mb-6 md:mb-0">
                    <input
                      className="shadow appearance-none border border-[#CFEEF3]  py-4 rounded-2xl w-full  px-5  leading-tight focus:outline-none"
                      id="name"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="w-full  md:w-[270px]    px-3">
                    <input
                      className="shadow appearance-none border border-[#CFEEF3] rounded-2xl w-full py-4 px-5  leading-tight focus:outline-none "
                      id="phone"
                      type="tel"
                      placeholder="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 ">
                  <div className="w-full md:w-[270px]   px-3 mb-6 md:mb-0">
                    <div className="mb-4 relative">
                      <select
                        className="shadow text-neutral-400 appearance-none border border-[#CFEEF3] rounded-2xl w-full py-4 pl-5  leading-tight focus:outline-none"
                        id="category"
                      >
                        <option>Category</option>
                        <option value="Category1">Category1</option>
                        <option value="Category2">Category2</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-10 flex items-center pointer-events-none">
                        <IoIosArrowDown className="text-neutral-400 text-sm" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full  md:w-[270px]    px-3">
                    <input
                      className="shadow appearance-none border border-[#CFEEF3] rounded-2xl w-full py-4 px-5  leading-tight focus:outline-none"
                      id="Email"
                      type="Email"
                      placeholder="Email"
                    />
                  </div>
                </div> */}

                <div className="mb-4 mt-8 sm:mt-0">
                  <textarea
                    className="shadow appearance-none border  border-[#CFEEF3] rounded-3xl w-full py-4 px-5 text-[#D2D1D7] leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Message"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between  ">
                  <button className="text-white text-[16px] leading-[24px]  rounded-full z-20 h-14 w-full px-0 not-italic  font-bold    hover:bg-[#316069] bg-[#3791a4] transition-all duration-300  ">
                    Request Demo
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Demo;
