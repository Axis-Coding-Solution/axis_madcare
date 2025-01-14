import { fjalla } from "@/utility/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";

function Footer() {
  return (
    <>
      <div className="">
        <div className="grid grid-cols-12 bg-[#95D3D4] gap-3 py-5 sm:pt-20 sm:pb-10 pl-10 sm:pl-0">
          <div className="sm:col-span-1 col-span-12 sm:text-start"></div>
          <div className="sm:col-span-5 col-span-6 sm:text-start">
            <div>
              <Image
                src="/svgs/d55bb295d2a8b570c3560064ee726527-ai (5).svg"
                alt=""
                height={80}
                width={170}
              />
              <div className="mt-8 sm:mt-5 flex flex-col not-italic font-normal text-[12.9px]  sm:text-[16px] text-white">
                <h1>The world most trusted </h1>
                telehealth company.
              </div>
            </div>
          </div>
          <div className="sm:col-span-2 pt-10 sm:pt-4 col-span-6 text-start cursor-pointer">
            <h1 className="not-italic text-slate-600 font-bold md:text-[19px] leading-[38px] tracking-tighter">
              Departments
            </h1>
            <h2 className="mt-5 sm:mt-5 text-white hover:text-[#336666] not-italic font-normal text-[18px] leading-[32px]">
              Eye care
            </h2>
            <h2 className="text-white hover:text-[#336666] not-italic font-normal text-[18px] leading-[32px]">
              Cardiac care
            </h2>
            <h2 className="text-white hover:text-[#336666] not-italic font-normal text-[18px] leading-[32px]">
              Heart care
            </h2>
          </div>
          <div className="sm:col-span-2 md:pt-4 col-span-6 text-start cursor-pointer">
            <h1 className="not-italic text-slate-600 font-bold md:text-[19px] leading-[38px] tracking-tighter">
              Membership
            </h1>
            <h2 className="sm:mt-5 text-white hover:text-[#336666] not-italic font-normal text-[18px] leading-[32px]">
              Free trial
            </h2>
            <h2 className="text-white hover:text-[#336666] not-italic font-normal text-[18px] leading-[32px]">
              Silver
            </h2>
            <h2 className="text-white hover:text-[#336666] not-italic font-normal text-[18px] leading-[32px]">
              Premium
            </h2>
          </div>
          <div className="sm:col-span-2 md:pt-4 col-span-6 text-start cursor-pointer">
            <h1 className="not-italic text-slate-600 font-bold md:text-[19px] leading-[38px] tracking-tighter">
              Customer Care
            </h1>
            <Link href="/aboutus">
              <h2 className="sm:mt-5 text-white hover:text-[#336666] not-italic font-normal text-[18px] leading-[32px]">
                About Us
              </h2>
            </Link>
            <Link href="/contactus">
              <h2 className="text-white hover:text-[#336666] not-italic font-normal text-[18px] leading-[32px]">
                Contact us
              </h2>
            </Link>
            <h2 className="text-white hover:text-[#336666] not-italic font-normal text-[18px] leading-[32px]">
              Get Update
            </h2>
          </div>
          <div className="sm:col-span-1 col-span-12"></div>
          <div className="sm:col-span-5 col-span-12">
            <div className="sm:col-span-2 col-span-12 mt-5 mb-5">
              <div className="flex gap-3 cursor-pointer text-[#3791A4] items-center">
                <FaLinkedinIn className="sm:text-lg" />
                <FaTwitter className="md:text-lg" />
                <FaFacebookF className="md:text-lg" />
                <PiInstagramLogoFill />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#3791A4] h-12 text-start sm:text-start lg:text-start text-xl p-2 sm:pl-28 lg:pl-0 text-[#dbdbe9] not-italic text-[0.8rem] xl:text-[13px] leading-[20px]">
        <p className="ml-6 lg:ml-32 text-[12px] lg:text-[20px]">
          All rights Reserved &copy; Axis MedCare Solutions, 2024
        </p>
      </div>
    </>
  );
}

export default Footer;
