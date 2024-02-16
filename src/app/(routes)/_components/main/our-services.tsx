import Image from "next/image";
import { fjalla } from "@/utility/font";

function OurServices() {
  const services = [
    {
      id: 1,
      icon: "/icons/billing.png",
      title: "Medical Billing and Coding",
      description:
        "Medical billing and coding involves translating medical procedures and diagnoses into standardized codes for billing and insurance purposes.",
    },
    {
      id: 1,
      icon: "/icons/account_receivable.png",
      title: "Account Receivable Management",
      description:
        "Account Receivable Management involves overseeing and optimizing the process of tracking and collecting payments owed to a business for goods or services provided.",
    },
    {
      id: 1,
      icon: "/icons/credentialing.png",
      title: "Credentialing & Contracting",
      description:
        "Refers to the process of verifying qualifications and negotiating agreements between healthcare providers and insurance companies or other payers to establish networks.",
    },
    {
      id: 1,
      icon: "/icons/networking.png",
      title: "Out Network Negotiation",
      description:
        "Out-Network Negotiation is the process of negotiating agreements and reimbursement rates between healthcare providers and insurance companies",
    },
    {
      id: 1,
      icon: "/icons/networking.png",
      title: "Eligibility and Benefit Verification",
      description:
        "Eligibility and Benefit Verification is the process of confirming a patient's insurance coverage and determining the extent of their benefits for specific healthcare services",
    },
    {
      id: 1,
      icon: "/icons/credentialing.png",
      title: "Enrollment services",
      description:
        "Enrollment services encompass the procedures and support provided to individuals or entities seeking to enroll in various programs, memberships, or services",
    },
    {
      id: 1,
      icon: "/icons/account_receivable.png",
      title: "Complete RCM Services",
      description:
        "Enrollment services encompass the procedures and support provided to individuals or entities seeking to enroll in various programs, memberships, or services",
    },
    {
      id: 1,
      icon: "/icons/billing.png",
      title: "EMR Applications and Support",
      description:
        "Enrollment services encompass the procedures and support provided to individuals or entities seeking to enroll in various programs, memberships, or services",
    },
  ];
  return (
    <>
      <div className=" pt-5 mt-10 ">
        <div className="bg-[url('/assests/images/bg-departments.png')] bg-no-repeat h-[30vh]  bg-top px-40">
          <div className="pl-[38%]  pt-7 ">
            <h1 className="text-[#3f7884] tracking-tighter  font-normal text-[40px] leading-[24px] not-italic">
              OUR SERVICES
            </h1>
          </div>
        </div>
        <div className="bg-[url('/assests/images/doctors-bg.png')] bg-no-repeat bg-contain bg-top">
          <div className="grid grid-cols-4 gap-5  mx-20 pt-12  ">
            {services.map((service) => (
              <div key={service.id}>
                <div className=" shadow-xl   bg-[#FFFFFF] rounded-lg     xl:h-[490px] xl:w-[270px]   pt-16">
                  <div className="">
                    <div className="flex justify-center  ">
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
