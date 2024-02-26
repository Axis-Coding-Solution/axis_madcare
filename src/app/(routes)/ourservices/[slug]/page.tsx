"use client";
import React, { useEffect, useState } from "react";
import { useAppParams } from "@/utility/hooks";
import DynamicHeader from "@/app/(routes)/_components/dynamic-page/dynamic-header";
import R from "@/app/(routes)/_components/dynamic-page/dynamic-header";
import Header from "../../_components/dynamic-page/header";
import Info from "../../_components/dynamic-page/info";
import Inter from "../../_components/dynamic-page/inter";
import Contactus from "../../animation/Contactanimation.json";
import emr from "../../animation/emr.json";
import Billinganimation from "../../animation/Billinganimation.json";
import Codinganimation from "../../animation/Codinganimation.json";
import coding from "../../animation/Codinganimation.json";
import account from "../../animation/Accountanimation.json";
import rcm from "../../animation/rcm.json";
import verify from "../../animation/Verificationanimation.json";
import complete from "../../animation/Completeanimation.json";
import RcmService from "../../_components/services/rcm-service";




import { StaticImport } from "next/dist/shared/lib/get-img-props";

// import { useRouter } from 'next/navigation'

const Page = () => {
  const [service, setService] = useState<
    | {
        id: number;
        icon: any;
        title: string;
        description: string;
        image: any;
      }
    | null
    | undefined
  >(null);

  const services = [
    {
      id: 1,
      // icon: "/icons/billing.png",
      icon: "/icons/coding.png",
      title: "Medical Billing and Coding",
      slug: "medical-billing-and-coding",
      description:
      "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Out-Network Negotiation is the process of negotiating agreements and reimbursement rates between healthcare providers and insurance companies",
      image: coding,
    },
    {
      id: 2,
      icon: "/icons/AccountReceviable.png",
      title: "Account Receivable Management",
      slug: "account-receivable-management",
      description:
      "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Out-Network Negotiation is the process of negotiating agreements and reimbursement rates between healthcare providers and insurance companies",
      image: complete,
    },
    {
      id: 3,
      icon: "/icons/Contracting.png ",
      title: "Credentialing & Contracting",
      slug: "credentialing-contracting",
      description:
      "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Out-Network Negotiation is the process of negotiating agreements and reimbursement rates between healthcare providers and insurance companies",
        image: account,
      },
    {
      id: 4,
      icon: "/icons/negotiation.png",
      title: "Out Network Negotiation",
      slug: "out-network-negotiation",

      description:
      "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Out-Network Negotiation is the process of negotiating agreements and reimbursement rates between healthcare providers and insurance companies",
        image: emr,
      },
    {
      id: 5,
      icon: "/icons/verification.png",
      title: "Eligibility and Benefit Verification",
      slug: "eligibility-and-benefit-verification",

      description:
      "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Out-Network Negotiation is the process of negotiating agreements and reimbursement rates between healthcare providers and insurance companies",
      image: verify,
    },
    {
      id: 6,
      icon: "/icons/enrollment.png",
      title: "Enrollment services",
      slug: "enrollment-services",

      description:
      "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Out-Network Negotiation is the process of negotiating agreements and reimbursement rates between healthcare providers and insurance companies",
        image: account,
      },
    {
      id: 7,
      icon: "/icons/RCM.png",
      title: "Complete RCM Services",
      slug: "complete-rcm-services",

      description:
      "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Out-Network Negotiation is the process of negotiating agreements and reimbursement rates between healthcare providers and insurance companies",
      image: Codinganimation,
    },
    {
      id: 8,
      icon: "/icons/EMR.png",
      // icon: "/icons/billing.png",
      title: "EMR Applications and Support",
      slug: "emr-applications-and-support",

      description:
      "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Out-Network Negotiation is the process of negotiating agreements and reimbursement rates between healthcare providers and insurance companies",
        image: rcm,
      },
  ];

  const params = useAppParams();

  const { slug } = params;

  // const parsedID = Number(slug);

  useEffect(() => {
    // const data = services.find((service) =>
    //   service.id === parsedID;
    // );

    const data = services.find((s) => s.slug === slug);

    console.log("data", data);
    if (data)
      // push back
      setService(data);
  }, []);

  return (
    <div>
      {slug === "emr-applications-and-support" ? (
        <RcmService />
      ) : (
        <>
          <Header
            title={service?.title}
            description={service?.description}
            image={service?.image}
            icon={service?.icon}
          />
          <DynamicHeader
            title={service?.title}
            description={service?.description}
            icon={service?.icon}
          />
          <Info title={service?.title} description={service?.description} icon={undefined} />

          <Inter
            title={service?.title}
            description={service?.description}
            icon={service?.icon}
          />
        </>
      )}
    </div>
  );
};

export default Page;
