"use client";
import React, { useEffect, useState } from "react";
import { useAppParams } from "@/utility/hooks";
import DynamicHeader from "@/app/(routes)/_components/dynamic-page/dynamic-header";
import Header from "../../_components/dynamic-page/header";
import Info from "../../_components/dynamic-page/info";
import Inter from "../../_components/dynamic-page/inter";
import Contactus from "../../animation/Contactanimation.json"
import coding from "../../animation/Codinganimation.json";
import account from "../../animation/Accountanimation.json";
import verify from "../../animation/Verificationanimation.json";
import complete from "../../animation/Completeanimation.json";


// import { useRouter } from 'next/navigation'

const Page = () => {
  const [service, setService] = useState<
    | {
        id: number;
        icon: string;
        title: string;
        description: string;
        image: string;
      }
    | null
    | undefined
  >(null);

  const services = [
    {
      id: 1,
      icon: "/icons/billing.png",
      title: "Medical Billing and Coding",
      slug: "medical-billing-and-coding",
      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.",
      image: coding,
    },
    {
      id: 2,
      icon: "/icons/account_receivable.png",
      title: "Account Receivable Management",
      slug: "account-receivable-management",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.",
        image:account
    },
    {
      id: 3,
      icon: "/icons/credentialing.png",
      title: "Credentialing & Contracting",
      slug: "credentialing-&-contracting",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Refers to the process of verifying qualifications and negotiating agreements between healthcare providers and insurance companies or other payers to establish networks.",
        
    },
    {
      id: 4,
      icon: "/icons/networking.png",
      title: "Out Network Negotiation",
      slug: "out-network-negotiation",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Out-Network Negotiation is the process of negotiating agreements and reimbursement rates between healthcare providers and insurance companies",
        
    },
    {
      id: 5,
      icon: "/icons/networking.png",
      title: "Eligibility and Benefit Verification",
      slug: "eligibility-and-benefit-verification",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Eligibility and Benefit Verification is the process of confirming a patient's insurance coverage and determining the extent of their benefits for specific healthcare services",
        image:verify
    },
    {
      id: 6,
      icon: "/icons/credentialing.png",
      title: "Enrollment services",
      slug: "enrollment-services",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Enrollment services encompass the procedures and support provided to individuals or entities seeking to enroll in various programs, memberships, or services",
    },
    {
      id: 7,
      icon: "/icons/account_receivable.png",
      title: "Complete RCM Services",
      slug: "complete-rcm-services",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Enrollment services encompass the procedures and support provided to individuals or entities seeking to enroll in various programs, memberships, or services",
        image:complete
    },
    {
      id: 8,
      icon: "/icons/billing.png",
      title: "EMR Applications and Support",
      slug: "emr-applications-and-support",

      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.,Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Enrollment services encompass the procedures and support provided to individuals or entities seeking to enroll in various programs, memberships, or services",
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
      <Header
        title={service?.title}
        description={service?.description}
        image={service?.image}
      />
      <DynamicHeader
        title={service?.title}
        description={service?.description}
        icon={service?.icon}
      />
      <Info title={service?.title} description={service?.description} />

      <Inter
        title={service?.title}
        description={service?.description}
        icon={service?.icon}
      />
    </div>
  );
};

export default Page;
