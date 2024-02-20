"use client"

import React from "react";
import { RxPencil2 } from "react-icons/rx";
import { GiMagicPortal } from "react-icons/gi";
import { AiFillInsurance } from "react-icons/ai";
import { MdManageSearch } from "react-icons/md";
import { PiRecycleDuotone } from "react-icons/pi";
import Image from "next/image";
import Header from "../dynamic-page/header";

const Page = () => {
//   const obj = [
//     { icon: <RxPencil2 />, title: "Customizable Templates" },
//     { icon: <GiMagicPortal />, title: "Patient Portal" },
//     { icon: <AiFillInsurance />, title: "insurance verification" },
//     {
//       icon: <MdManageSearch />,
//       title: "E-prescribing and medication management",
//     },
//     {
//       icon: <PiRecycleDuotone />,
//       title: "Integrated Billing and Revenue Cycle Management",
//     },
//     ];

const obj = [
    {
      id: 1,
      icon: "/icons/billing.png",
      title: "Medical Billing and Coding",
      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.",
    },
    {
      id: 2,
      icon: "/icons/account_receivable.png",
      title: "Account Receivable Management",
      description:
        "Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.",
    },
    {
      id: 3,
      icon: "/icons/credentialing.png",
      title: "Credentialing & Contracting",
      description:
        "Refers to the process of verifying qualifications and negotiating agreements between healthcare providers and insurance companies or other payers to establish networks.",
    },
    {
      id: 4,
      icon: "/icons/networking.png",
      title: "Out Network Negotiation",
      description:
        "Out-Network Negotiation is the process of negotiating agreements and reimbursement rates between healthcare providers and insurance companies",
    },
    {
      id: 5,
      icon: "/icons/networking.png",
      title: "Eligibility and Benefit Verification",
      description:
        "Eligibility and Benefit Verification is the process of confirming a patient's insurance coverage and determining the extent of their benefits for specific healthcare services",
    },
    {
      id: 6,
      icon: "/icons/credentialing.png",
      title: "Enrollment services",
      description:
        "Enrollment services encompass the procedures and support provided to individuals or entities seeking to enroll in various programs, memberships, or services",
    },
    {
      id: 7,
      icon: "/icons/account_receivable.png",
      title: "Complete RCM Services",
      description:
        "Enrollment services encompass the procedures and support provided to individuals or entities seeking to enroll in various programs, memberships, or services",
    },
    {
      id: 8,
      icon: "/icons/billing.png",
      title: "EMR Applications and Support",
      description:
        "Enrollment services encompass the procedures and support provided to individuals or entities seeking to enroll in various programs, memberships, or services",
    },
  ];
  return (
  <div>
 <Header/>
    // <div className="grid grid-cols-4 bg-blue-600 gap-5">
    {/* //   {obj.map((item) => ( */}
    {/* //     <div className="">
    //     <div className="flex flex-col justify-center items-center">
    //       <div>{item.title}</div>
    //       <div className="">{item.icon}</div>
    //     </div>
    //     </div>
    //   ))}
       */}
    </div>
<div className="bg-[url('/assests/images/doctors-bg.png')] bg-no-repeat bg-contain bg-top">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-5 lg:mx-24 sm:pt-12  ">
            {obj.map((service,index) => (
              
              <div  key={service.id} className="cursor-pointer"
               onClick={() => (console.log(index + 1))} 
               >
                {/* {console.log("",index)} */}
                
                {/* <Link 
                href={`/dynamicpage/${service.id}`}
                // href="/dynamicpage/${service.id}"  

                > */}
                <div 
                className=" shadow-xl   bg-[#FFFFFF] rounded-lg     h-[220px]    pt-12 pb-4">
                  <div className="flex flex-col justify-between items-center">
                    <div className="flex flex-col gap-5 h-[200px] items-center text-center" >
                    <Image
                        src={service.icon}
                        alt="icon"
                        objectFit="cover"
                        width={100}
                        height={40}
                      />
                       <h5
                        // className={`${fjalla.className}  text-[#3f7884]   font-bold  text-[20px]`}
                      >
                        {service.title}
                      </h5>
                     
                     
                     
                    </div>
                    <div className="h-[100px]">
                    {/* <p className="pr-2 text-[#7b7a8b] text-center font-normal text-[12px]  px-2  ">
                        {service.description}
                      </p> */}
                      </div>
                    <div className="">
                        {/* <button className=" text-[16px]   rounded-full h-14 w-44 px-0 mt-10 border-[1px] border-[#3791a4]  font-bold  cursor-pointer   text-[#68959E] hover:text-[#fffefe] hover:bg-[#3F7884] transition-all duration-300 ">
                          View Detail
                        </button> */}
                      </div>
                  </div>
                  {/* <div className="">
                    <div className="flex flex-col items-center justify-between  ">
                      <Image
                        src={service.icon}
                        alt="icon"
                        objectFit="cover"
                        width={100}
                        height={40}
                      />
                    </div>
                    <div className=" text-center  ">
                      <h5
                        className={`${fjalla.className} mt-10 text-[#3f7884]   font-bold  text-[20px]`}
                      >
                        {service.title}
                      </h5>
                      <p className="pr-2 text-[#7b7a8b] font-normal text-[12px]  px-2     mt-5 ">
                        {service.description}
                      </p>
                      <div className="">
                        <button className=" text-[16px]   rounded-full h-14 w-44 px-0 mt-12 border-[1px] border-[#3791a4]  font-bold  cursor-pointer   text-[#68959E] hover:text-[#fffefe] hover:bg-[#3F7884] transition-all duration-300 ">
                          View Detail
                        </button>
                      </div>
                    </div>
                  </div> */}
                </div>

                {/* </Link> */}
              </div>
            ))}
          </div>
        // </div>
        
        </div>
  );
};
export default Page;
