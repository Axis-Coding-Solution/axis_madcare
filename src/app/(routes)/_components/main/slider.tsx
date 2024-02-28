"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import Image from "next/image";
import { fjalla } from "@/utility/font";

const Slider = () => {
  return (
    <>
      <div className="bg-[url('/assests/images/people.png')] mt-6 sm:mt-28 bg-no-repeat  h-[20vh] 2xl:h-14 bg-top ">
        <div className=" text-center   not-italic pt-7 text-[#3f7884] tracking-tighter  sm:text-4xl leading-[24px] font-normal">
          <h1 className="font-bold">PEOPLE WHO LOVE US</h1>
        </div>
      </div>
      <div className="">
        <Swiper
          pagination={true}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="mySwiper mt-10 py-20 md:py-24  bg-[#95d3d4]"
        >
          <SwiperSlide>
            <div className="">
              <div className="grid grid-cols-12  w-full lg:mx-60  ">
                <div className="sm:col-span-4 lg:col-span-2   col-span-12  items-center sm:justify-center flex flex-col gap-2 lg:gap-2">
                  <div className=" ">
                    <Image
                      src="/assests/images/sw.png"
                      alt=""
                      height={50}
                      width={90}
                      className="rounded-full"
                    />
                  </div>
                  <h1
                    className={`${fjalla.className} text-[19px] leading-[23px] text-[#1b71a1]  not-italic font-medium `}
                  >
                    Edward Newgate
                  </h1>

                  <h1 className="font-normal not-italic text-[16px] leading-[24px] text-[#3f7884]">
                    Founder circle
                  </h1>
                </div>

                <div className="sm:col-span-8 col-span-12 px-5 lg:px-10 pt-10 sm:pt-0 text-start flex flex-col gap-3 justify-center">
                  <h1
                    className={`${fjalla.className} text-[28px] lg:text-[33px] text-center sm:text-start leading-[40px] text-[#3f7884]  not-italic font-bold `}
                  >
                    Fantastic Response!
                  </h1>
                  <div className="flex justify-center sm:justify-start  text-[#3f7884] gap-2  not-italic font-normal text-[18px] leading-[24px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <FaRegStar />
                  </div>

                  <p className="  not-italic font-normal text-[17px] md:text-[12px] xl:text-[16px] lg:text-[14px] 2xl:text-[16px] text-[#3f7884]    xl:leading-[24px] lg:pr-24">
                    This medical and health care facility distinguishes itself
                    from the competition by providing technologically advanced
                    medical and health care. A mobile app and a website are
                    available via which you can easily schedule appointments,
                    get online consultations, and see physicians, who will
                    assist you through the whole procedure. And all of the
                    prescriptions, medications, and other services they offer
                    are 100% genuine, medically verified, and proved. I believe
                    that the Livedoc staff is doing an outstanding job. Highly
                    recommended their health care services.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="grid grid-cols-12  w-full lg:mx-60  ">
                <div className="sm:col-span-4 lg:col-span-2   col-span-12  items-center sm:justify-center flex flex-col gap-2 lg:gap-2">
                  <div className=" ">
                    <Image
                      src="/assests/images/sw.png"
                      alt=""
                      height={50}
                      width={90}
                      className="rounded-full"
                    />
                  </div>
                  <h1
                    className={`${fjalla.className} text-[19px] leading-[23px] text-[#1b71a1]  not-italic font-medium `}
                  >
                    Edward Newgate
                  </h1>

                  <h1 className="font-normal not-italic text-[16px] leading-[24px] text-[#3f7884]">
                    Founder circle
                  </h1>
                </div>

                <div className="sm:col-span-8 col-span-12 px-5 lg:px-10 pt-10 sm:pt-0 text-start flex flex-col gap-3 justify-center">
                  <h1
                    className={`${fjalla.className} text-[28px] lg:text-[33px] text-center sm:text-start leading-[40px] text-[#3f7884]  not-italic font-bold `}
                  >
                    Fantastic Response!
                  </h1>
                  <div className="flex justify-center sm:justify-start  text-[#3f7884] gap-2  not-italic font-normal text-[18px] leading-[24px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <FaRegStar />
                  </div>

                  <p className="  not-italic font-normal text-[17px] md:text-[12px] xl:text-[16px] lg:text-[14px] 2xl:text-[16px] text-[#3f7884]    xl:leading-[24px] lg:pr-24">
                    This medical and health care facility distinguishes itself
                    from the competition by providing technologically advanced
                    medical and health care. A mobile app and a website are
                    available via which you can easily schedule appointments,
                    get online consultations, and see physicians, who will
                    assist you through the whole procedure. And all of the
                    prescriptions, medications, and other services they offer
                    are 100% genuine, medically verified, and proved. I believe
                    that the Livedoc staff is doing an outstanding job. Highly
                    recommended their health care services.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="grid grid-cols-12  w-full lg:mx-60  ">
                <div className="sm:col-span-4 lg:col-span-2   col-span-12  items-center sm:justify-center flex flex-col gap-2 lg:gap-2">
                  <div className=" ">
                    <Image
                      src="/assests/images/sw.png"
                      alt=""
                      height={50}
                      width={90}
                      className="rounded-full"
                    />
                  </div>
                  <h1
                    className={`${fjalla.className} text-[19px] leading-[23px] text-[#1b71a1]  not-italic font-medium `}
                  >
                    Edward Newgate
                  </h1>

                  <h1 className="font-normal not-italic text-[16px] leading-[24px] text-[#3f7884]">
                    Founder circle
                  </h1>
                </div>

                <div className="sm:col-span-8 col-span-12 px-5 lg:px-10 pt-10 sm:pt-0 text-start flex flex-col gap-3 justify-center">
                  <h1
                    className={`${fjalla.className} text-[28px] lg:text-[33px] text-center sm:text-start leading-[40px] text-[#3f7884]  not-italic font-bold `}
                  >
                    Fantastic Response!
                  </h1>
                  <div className="flex justify-center sm:justify-start  text-[#3f7884] gap-2  not-italic font-normal text-[18px] leading-[24px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfAlt />
                    <FaRegStar />
                  </div>

                  <p className="  not-italic font-normal text-[17px] md:text-[12px] xl:text-[16px] lg:text-[14px] 2xl:text-[16px] text-[#3f7884]    xl:leading-[24px] lg:pr-24">
                    This medical and health care facility distinguishes itself
                    from the competition by providing technologically advanced
                    medical and health care. A mobile app and a website are
                    available via which you can easily schedule appointments,
                    get online consultations, and see physicians, who will
                    assist you through the whole procedure. And all of the
                    prescriptions, medications, and other services they offer
                    are 100% genuine, medically verified, and proved. I believe
                    that the Livedoc staff is doing an outstanding job. Highly
                    recommended their health care services.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
