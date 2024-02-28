"use client";
import Image from "next/image";
import { fjalla } from "@/utility/font";
import Link from "next/link";
import { useEffect, useState } from "react";
// import Billinganimation from "../../animation/Billinganimation.json";
// import Lottie from "lottie-react";

function OurServices() {
  const [services, setServices] = useState([
    {
      id: 1,
      icon: "/icons/coding.png",
      title: "Medical Billing and Coding",
      slug: "medical-billing-and-coding",
      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing.",
    },
    {
      id: 2,
      icon: "/icons/AccountReceviable.png",
      title: "Account Receivable Management",
      slug: "account-receivable-management",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing.",
    },
    {
      id: 3,
      icon: "/icons/Contracting.png",
      title: "Credentialing & Contracting",
      slug: "credentialing-contracting",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing.",
    },
    {
      id: 4,
      icon: "/icons/negotiation.png",
      title: "Out Network Negotiation",
      slug: "out-network-negotiation",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing.",
    },
    {
      id: 5,
      icon: "/icons/verification.png",
      title: "Eligibility and Benefit Verification",
      slug: "eligibility-and-benefit-verification",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing.",
    },
    {
      id: 6,
      icon: "/icons/enrollment.png",
      title: "Enrollment services",
      slug: "enrollment-services",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing.",
    },
    {
      id: 7,
      icon: "/icons/RCM.png",
      title: "Complete RCM Services",
      slug: "complete-rcm-services",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing.",
    },
    {
      id: 8,
      icon: "/icons/EMR.png",
      title: "EMR Applications and Support",
      slug: "emr-applications-and-support",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing.",
    },
    {
      id: 9,
      icon: "/icons/negotiation.png",
      title: "Public Health",
      slug: "emr-applications-and-support",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing.",
    },
  ]);
  const [limitedServices, setLimitedServices] = useState([]);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1536) {
      setLimitedServices(services.slice(0, 9));
    } else {
      setLimitedServices(services);
    }

    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      if (newScreenWidth >= 1536) {
        setLimitedServices(services.slice(0, 8));
      } else {
        setLimitedServices(services);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [services]);

  return (
    <>
      <div className="pt-5 mt-10 sm:mt-10">
        <div className="bg-[url('/assests/images/bg-departments.png')] bg-no-repeat h-[20vh] 2xl:h-12  bg-top md:px-40">
          <div className="  pt-7">
            <h1 className="text-[#3f7884] text-center font-bold  tracking-tighter   text-[40px] leading-[24px] not-italic">
              OUR SERVICES
            </h1>
          </div>
        </div>
        <div className="bg-[url('/assests/images/doctors-bg.png')] bg-no-repeat bg-contain mt-5 sm:mt-10">
          <div className="grid grid-cols-1  md:grid-cols-3  lg:grid-cols-3 2xl:grid-cols-4 2xl:mt-0  gap-8 mx-7 cursor-pointer lg:mx-20   xl:pt-0  ">
            {limitedServices.map((service) => (
              <div key={service.id}>
                <div className="group shadow-2xl  md:w-[240px] lg:w-[280px]  xl:w-[370px]  bg-[#FFFFFF]  rounded-lg hover:bg-[#3f7884]  transition-all duration-1000 py-16    ">
                  <div className="flex flex-col justify-between items-center  ">
                    <div className="flex flex-col gap-5       items-center text-center  ">
                      <Image
                        src={service.icon}
                        alt="icon"
                        objectFit="cover"
                        width={100}
                        height={40}
                      />
                      <h5
                        className={`${fjalla.className}    text-[#3f7884] group-hover:text-white   font-bold  lg:text-[20px]`}
                      >
                        {service.title}
                      </h5>
                    </div>
                    <div className="h-[100px] mt-5 ">
                      <p className="pr-2  text-center font-normal group-hover:text-white text-xs md:text-xs lg:text-[12px] xl:text-[13px] 2xl:text-[13px]  px-5  ">
                        {service.description}
                      </p>
                    </div>
                    <div className="">
                      <button className=" text-[16px]   rounded-full h-14 w-44 px-0 mt-5 border-[1px] border-[#3791a4] group-hover:border-white group-hover:text-white  font-bold  cursor-pointer   text-[#68959E] hover:text-[#fffefe] hover:bg-[#3F7884] transition-all duration-1000 ">
                        View Detail
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OurServices;
