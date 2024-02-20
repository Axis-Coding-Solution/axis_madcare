"use client";

import React from "react";
import { RxPencil2 } from "react-icons/rx";
import { GiMagicPortal } from "react-icons/gi";
import { AiFillInsurance } from "react-icons/ai";
import { MdManageSearch } from "react-icons/md";
import { PiRecycleDuotone } from "react-icons/pi";
import Image from "next/image";
import Header from "../ourservices/header";
import Link from "next/link";

const Page = () => {
  function generateSlug(text) {
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
      slug:"medical-billing-and-coding",
      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.",
    },
    {
      id: 2,
      icon: "/icons/account_receivable.png",
      title: "Account Receivable Management",
      slug:"account-receivable-management",

      description:
      "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.",
    },
    {
      id: 3,
      icon: "/icons/credentialing.png",
      title: "Credentialing & Contracting",
      slug:"credentialing-&-contracting",

      description:
      "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Refers to the process of verifying qualifications and negotiating agreements between healthcare providers and insurance companies or other payers to establish networks.",
    },
    {
      id: 4,
      icon: "/icons/networking.png",
      title: "Out Network Negotiation",
      slug:"out-network-negotiation",

      description:
      "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Out-Network Negotiation is the process of negotiating agreements and reimbursement rates between healthcare providers and insurance companies",
    },
    {
      id: 5,
      icon: "/icons/networking.png",
      title: "Eligibility and Benefit Verification",
      slug:"eligibility-and-benefit-verification",

      description:
      "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Eligibility and Benefit Verification is the process of confirming a patient's insurance coverage and determining the extent of their benefits for specific healthcare services",
    },
    {
      id: 6,
      icon: "/icons/credentialing.png",
      title: "Enrollment services",
      slug:"enrollment-services",

      description:
      "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Enrollment services encompass the procedures and support provided to individuals or entities seeking to enroll in various programs, memberships, or services",
    },
    {
      id: 7,
      icon: "/icons/account_receivable.png",
      title: "Complete RCM Services",
      slug:"complete-rcm-services",

      description:
      "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Enrollment services encompass the procedures and support provided to individuals or entities seeking to enroll in various programs, memberships, or services",
    },
    {
      id: 8,
      icon: "/icons/billing.png",
      title: "EMR Applications and Support",
      slug:"emr-applications-and-support",

      description:
      "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Enrollment services encompass the procedures and support provided to individuals or entities seeking to enroll in various programs, memberships, or services",
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

        <div className="grid grid-cols-1 mb-10 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-5 lg:mx-24 sm:pt-12  ">
          {obj.map((service, index) => {
            const slugName = generateSlug(service.title);
            return (
              <div key={service.id} className="cursor-pointer ">
                <Link 
                // href={`/${slugName}/${service.id}`}
                href={`/servicess/${service.slug}`}

                >
                  <div className=" group shadow-xl border   bg-[#FFFFFF]  hover:bg-gray-200 rounded-lg transition-all duration-300 h-[220px]    pt-12 pb-4">
                    <div className="flex flex-col justify-between items-center">
                      <div className="flex flex-col gap-5 h-[200px] items-center text-center">
                        <Image
                          src={service.icon}
                          alt="icon"
                          objectFit="cover"
                          width={100}
                          height={40}
                          className="text-black"
                        />
                        <h5 className="">{service.title}</h5>
                      </div>
                      <div className="h-[100px]"></div>
                      <div className=""></div>
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
