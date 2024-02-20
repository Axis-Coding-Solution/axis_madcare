"use client";
import React, { useEffect, useState } from "react";
import { useAppParams } from "@/utility/hooks";
import DynamicHeader from "@/app/(routes)/_components/dynamic-page/dynamic-header";
import Header from "../../_components/dynamic-page/header";
import Info from "../../_components/dynamic-page/info";
import Inter from "../../_components/dynamic-page/inter";
// import { useRouter } from 'next/navigation'

const Page = () => {
  const [service, setService] = useState<
    | {
        id: number;
        icon: string;
        title: string;
        description: string;
      }
    | null
    | undefined
  >(null);

  const services = [
    {
      id: 1,
      icon: "/icons/billing.png",
      title: "Medical Billing and Coding",
      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.Our solution is equipped with advanced AI technology and a deep understanding of the medical billing process, and we are committed to guiding practice staff and helping them get paid 4-10% more and 35% faster*. Whether you are a multi-specialty group or a solo practice, CureMD Medical Billing Service is here to help you take control of your billing operations and maximize your revenue.With 27 years of medical billing experience our team is equipped with advanced technology and operational excellence to take your billing operations forward, whether you are a multi-specialty group or a solo practice.",
    },
    {
      id: 2,
      icon: "/icons/account_receivable.png",
      title: "Account Receivable Management",
      description:
        "Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.Our solution is equipped with advanced AI technology and a deep understanding of the medical billing process, and we are committed to guiding practice staff and helping them get paid 4-10% more and 35% faster*. Whether you are a multi-specialty group or a solo practice, CureMD Medical Billing Service is here to help you take control of your billing operations and maximize your revenue.With 27 years of medical billing experience our team is equipped with advanced technology and operational excellence to take your billing operations forward, whether you are a multi-specialty group or a solo practice.",
    },
    {
      id: 3,
      icon: "/icons/credentialing.png",
      title: "Credentialing & Contracting",
      description:
        "Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.Our solution is equipped with advanced AI technology and a deep understanding of the medical billing process, and we are committed to guiding practice staff and helping them get paid 4-10% more and 35% faster*. Whether you are a multi-specialty group or a solo practice, CureMD Medical Billing Service is here to help you take control of your billing operations and maximize your revenue.With 27 years of medical billing experience our team is equipped with advanced technology and operational excellence to take your billing operations forward, whether you are a multi-specialty group or a solo practice.",
    },
    {
      id: 4,
      icon: "/icons/networking.png",
      title: "Out Network Negotiation",
      description:
        "Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.Our solution is equipped with advanced AI technology and a deep understanding of the medical billing process, and we are committed to guiding practice staff and helping them get paid 4-10% more and 35% faster*. Whether you are a multi-specialty group or a solo practice, CureMD Medical Billing Service is here to help you take control of your billing operations and maximize your revenue.With 27 years of medical billing experience our team is equipped with advanced technology and operational excellence to take your billing operations forward, whether you are a multi-specialty group or a solo practice.",
    },
    {
      id: 5,
      icon: "/icons/networking.png",
      title: "Eligibility and Benefit Verification",
      description:
        "Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.Our solution is equipped with advanced AI technology and a deep understanding of the medical billing process, and we are committed to guiding practice staff and helping them get paid 4-10% more and 35% faster*. Whether you are a multi-specialty group or a solo practice, CureMD Medical Billing Service is here to help you take control of your billing operations and maximize your revenue.With 27 years of medical billing experience our team is equipped with advanced technology and operational excellence to take your billing operations forward, whether you are a multi-specialty group or a solo practice.",
    },
    {
      id: 6,
      icon: "/icons/credentialing.png",
      title: "Enrollment services",
      description:
        "Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.Our solution is equipped with advanced AI technology and a deep understanding of the medical billing process, and we are committed to guiding practice staff and helping them get paid 4-10% more and 35% faster*. Whether you are a multi-specialty group or a solo practice, CureMD Medical Billing Service is here to help you take control of your billing operations and maximize your revenue.With 27 years of medical billing experience our team is equipped with advanced technology and operational excellence to take your billing operations forward, whether you are a multi-specialty group or a solo practice.",
    },
    {
      id: 7,
      icon: "/icons/account_receivable.png",
      title: "Complete RCM Services",
      description:
        "Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.Our solution is equipped with advanced AI technology and a deep understanding of the medical billing process, and we are committed to guiding practice staff and helping them get paid 4-10% more and 35% faster*. Whether you are a multi-specialty group or a solo practice, CureMD Medical Billing Service is here to help you take control of your billing operations and maximize your revenue.With 27 years of medical billing experience our team is equipped with advanced technology and operational excellence to take your billing operations forward, whether you are a multi-specialty group or a solo practice.",
    },
    {
      id: 8,
      icon: "/icons/billing.png",
      title: "EMR Applications and Support",
      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.Our solution is equipped with advanced AI technology and a deep understanding of the medical billing process, and we are committed to guiding practice staff and helping them get paid 4-10% more and 35% faster*. Whether you are a multi-specialty group or a solo practice, CureMD Medical Billing Service is here to help you take control of your billing operations and maximize your revenue.With 27 years of medical billing experience our team is equipped with advanced technology and operational excellence to take your billing operations forward, whether you are a multi-specialty group or a solo practice.",
    },
  ];

  const params = useAppParams();

  const { id } = params;

  console.log("paramsid", id);
  const parsedID = Number(id);

  useEffect(() => {
    // const data = services.find((service) =>
    //   service.id === parsedID;
    // );

    const data = services.find((s) => s.id === parsedID);

    console.log("data", data);
    if (data)
      // push back
      setService(data);
  }, []);

  console.log("services", service);

  return (
    <div>
      <Header title={service?.title} description={service?.description} />
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
