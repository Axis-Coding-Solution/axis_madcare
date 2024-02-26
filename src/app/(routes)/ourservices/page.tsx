"use client";

import React from "react";
import { RxPencil2 } from "react-icons/rx";
import { GiMagicPortal } from "react-icons/gi";
import { AiFillInsurance } from "react-icons/ai";
import { MdManageSearch } from "react-icons/md";
import { PiRecycleDuotone } from "react-icons/pi";
import Header from "../_components/ourservices/header";
import Link from "next/link";
import Contracting from "../animation/Contracting.json";
import Codinganimation from "../animation/Codinganimation.json";
import Accountanimation from "../animation/Accountanimation.json";
import Verificationanimation from "../animation/Verificationanimation.json";
import Enrollment from "../animation/Enrollment.json";
import emr from "../animation/emr.json";
import rcm from "../animation/rcm.json";
import outnetwork from "../animation/outnetwork.json";
import Lottie from "lottie-react";
import Image from "next/image";

const Page = () => {
  function generateSlug(text: string) {
    return text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }

  const obj = [
    {
      id: 1,
      icon: "/icons/billing.png",
      title: "Medical Billing and Coding",
      slug: "medical-billing-and-coding",
      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.",
    },
    {
      id: 2,
      icon: "/icons/AccountReceviable.png",
      title: "Account Receivable Management",
      slug: "account-receivable-management",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.",
    },
    {
      id: 3,
      icon: "/icons/Contracting.png",
      title: "Credentialing & Contracting",
      slug: "credentialing-contracting",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.",
    },
    {
      id: 4,
      icon: "/icons/negotiation.png",
      title: "Out Network Negotiation",
      slug: "out-network-negotiation",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.",
    },
    {
      id: 5,
      icon: "/icons/networking.png",
      title: "Eligibility and Benefit Verification",
      slug: "eligibility-and-benefit-verification",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.",
    },
    {
      id: 6,
      icon: "/icons/enrollment.png",
      title: "Enrollment services",
      slug: "enrollment-services",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.",
    },
    {
      id: 7,
      icon: "/icons/RCM.png",
      title: "Complete RCM Services",
      slug: "complete-rcm-services",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.",
    },
    {
      id: 8,
      icon: "/icons/EMR.png",
      title: "EMR Applications and Support",
      slug: "emr-applications-and-support",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.",
    },
  ];
  return (
    <div>
      <Header />

      <div className="bg-[url('/assests/images/doctors-bg.png')] bg-no-repeat bg-contain bg-top">
        <div className="bg-[url('/assests/images/bg-departments.png')] bg-no-repeat h-[15vh]  bg-top md:px-40 mt-10">
          <div className="  pt-7 ">
            <h1 className="text-[#3f7884] text-center font-bold  tracking-tighter   text-[40px] leading-[24px] not-italic">
              OUR SERVICES
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 mb-10 sm:grid-cols-2 px-7 lg:grid-cols-4 gap-8  lg:mx-24 sm:pt-12   ">
          {obj.map((service, index) => {
            const slugName = generateSlug(service.title);
            return (
              <div key={service.id} className="cursor-pointer ">
                <Link
                  // href={`/${slugName}/${service.id}`}
                  href={`/ourservices/${service.slug}`}
                >
                  <div className=" group shadow-xl border   bg-[#FFFFFF]  hover:bg-[#3f7884] transition-all duration-1000 rounded-lg  h-[220px] pb-4">
                    <div className="flex flex-col justify-between items-center">
                      <div className="group flex flex-col gap-5 h-[200px] items-center text-center mt-10">
                        <Image
                          src={service.icon}
                          alt="icon"
                          objectFit="cover"
                          width={100}
                          height={40}
                          className="text-black"
                        />

                        {/* <div
                        style={{ width: "40%", height: "10%" }}
                        className=" top-0"
                      >
                        <Lottie
                          animationData={service.image}
                          loop={true} // Set to true if you want the animation to loop
                          autoplay={true} // Set to true if you want the animation to play automatically
                        />
                      </div> */}

                        <div className="  mb-10 group-hover:text-white">
                          <h5 className="">{service.title}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Page;
