import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
function Demo() {
  return (
    <>
      <div className="mt-40">
        <div className="bg-[url('/assests/images/people.png')] bg-no-repeat h-[30vh] bg-top px-40">
          <div className="pl-[38%]  pt-3 text-[#3F7884] text-4xl font-bold">
            <h1>Request Demo</h1>
          </div>
        </div>
        <div className="flex  pl-28 mt-20">
          <div>
            <Image
              className=""
              src="/assests/images/appointment.png"
              alt=""
              height={50}
              width={540}
            />
          </div>
          <div>
            <div className="w-full  mx-auto">
              <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2  px-3  mb-6 md:mb-0">
                    <input
                      className="shadow appearance-none border border-[#CFEEF3]  py-4 rounded-2xl w-full  px-5  leading-tight focus:outline-none"
                      id="name"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="w-full md:w-1/2  px-3">
                    <input
                      className="shadow appearance-none border border-[#CFEEF3] rounded-2xl w-full py-4 px-5  leading-tight focus:outline-none "
                      id="phone"
                      type="tel"
                      placeholder="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 ">
                  <div className="w-full md:w-1/2  px-3 mb-6 md:mb-0">
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
                  <div className="w-full  md:w-1/2  px-3">
                    <input
                      className="shadow appearance-none border border-[#CFEEF3] rounded-2xl w-full py-4 px-5  leading-tight focus:outline-none"
                      id="phone"
                      type="tel"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <textarea
                    className="shadow appearance-none border border-[#CFEEF3] rounded-3xl w-full py-4 px-5 text-[#D2D1D7] leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <button className="text-white text-lg  rounded-full h-14 w-full px-0   font-bold    hover:bg-[#316069] bg-[#3791a4] ">
                    Request Demo
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div>
            {/* <div className="w-full max-w-lg mx-auto">
    <form className="bg-white rounded px-8 pt-6 pb-8 mb-4">
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
          <input
            className="shadow appearance-none border border-[#CFEEF3] py-4 rounded-3xl w-full px-5 leading-tight focus:outline-none"
            id="name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="w-full md:w-2/3 px-3">
          <input
            className="shadow appearance-none border border-[#CFEEF3] rounded-3xl w-full py-4 px-5 leading-tight focus:outline-none"
            id="phone"
            type="tel"
            placeholder="Phone"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
          <div className="mb-4 relative">
            <select
              className="shadow text-neutral-400 appearance-none border border-[#CFEEF3] rounded-3xl w-full py-4 pl-5 leading-tight focus:outline-none"
              id="category"
            >
              <option>Category</option>
              <option value="Category1">Category1</option>
              <option value="Category2">Category2</option>
            </select>
            <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
              <FaCaretDown />
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3 px-3">
          <input
            className="shadow appearance-none border border-[#CFEEF3] rounded-3xl w-full py-4 px-5 leading-tight focus:outline-none"
            id="email"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="mb-4">
        <textarea
          className="shadow appearance-none border border-[#CFEEF3] rounded-3xl w-full py-4 px-5 text-[#D2D1D7] leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          placeholder="Message"
        ></textarea>
      </div>
      <div className="flex items-center justify-between">
        <button className="text-white text-lg rounded-full h-14 w-full px-0 font-bold hover:bg-[#316069] bg-[#3791a4]">
          Request Demo
        </button>
      </div>
    </form>
  </div> */}
            {/* <div className="w-full max-w-lg mx-auto">
  <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 grid grid-cols-2 gap-6">
    <div className="col-span-2 md:col-span-1">
      <input
        className="shadow appearance-none border border-[#CFEEF3] py-4 rounded-3xl w-full px-5 leading-tight focus:outline-none"
        id="name"
        type="text"
        placeholder="Name"
      />
    </div>
    <div className="col-span-2 md:col-span-1">
      <input
        className="shadow appearance-none border border-[#CFEEF3] rounded-3xl w-full py-4 px-5 leading-tight focus:outline-none"
        id="phone"
        type="tel"
        placeholder="Phone"
      />
    </div>
    <div className="col-span-2">
      <div className="mb-4 relative">
        <select
          className="shadow text-neutral-400 appearance-none border border-[#CFEEF3] rounded-3xl w-full py-4 pl-5 leading-tight focus:outline-none"
          id="category"
        >
          <option>Category</option>
          <option value="Category1">Category1</option>
          <option value="Category2">Category2</option>
        </select>
        <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
          <FaCaretDown />
        </div>
      </div>
    </div>
    <div className="col-span-2">
      <input
        className="shadow appearance-none border border-[#CFEEF3] rounded-3xl w-full py-4 px-5 leading-tight focus:outline-none"
        id="email"
        type="email"
        placeholder="Email"
      />
    </div>
    <div className="col-span-2">
      <textarea
        className="shadow appearance-none border border-[#CFEEF3] rounded-3xl w-full py-4 px-5 text-[#D2D1D7] leading-tight focus:outline-none focus:shadow-outline"
        id="message"
        placeholder="Message"
      ></textarea>
    </div>
    <div className="col-span-2">
      <button className="text-white text-lg rounded-full h-14 w-full px-0 font-bold hover:bg-[#316069] bg-[#3791a4]">
        Request Demo
      </button>
    </div>
  </form>
</div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Demo;
