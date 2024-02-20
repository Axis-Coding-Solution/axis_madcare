// import React from "react";

// const ehrinfo = () => {
//   return (
//     <div >
//           <h1 className="text-4xl flex justify-center pt-20">Electronic Health Record <span className="text-gray-400 pl-2"> Software</span></h1>

//       <div className="flex justify-around  rounded p-24">
//         <div className=" flex flex-col gap-3 w-1/2 ">
//           <p className="text-lg">
//             Transform your practice with CureMD's cloud-based Electronic Health
//             Record in a way you never imagined before. With a powerful knowledge
//             base, CureMD medical recording software is built for usability,
//             performance, and reliability. It delivers advanced features,
//             previously available in systems costing thousands of dollars, at a
//             fraction of the cost. Version 10g includes an iPad app which works
//             delightfully. It is intuitive, simple, and enjoyable. You have
//             complete access to your appointments, clinical reviews, patient
//             notes, medical histories, and document manager - all bundled in one
//             app. With CureMD software for medical records, you don't spend
//             thousands of dollars on set up, maintenance and licensing fees, and
//             you don't pay for workflow-driven customization or dedicated
//             support. Use CureMD EHR medical software to instantly connect with
//             patients, payers, labs, hospitals, and other stakeholders to deliver
//             better care. CureMD EHR software is ONC 2015 Edition certified and
//             MIPS, Meaningful Use Stage 2, and Meaningful Use Stage 3 ready. The
//             EHR also comes with an ICD-10 guarantee, enabling you to stay ahead
//             of the industry.
//           </p>
//         </div>
//         <div>
//           <img
//             src="/assests/images/ehr.jpg"
//             alt="image"
//             className=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ehrinfo;

import { fjalla } from "@/utility/font";
import Image from "next/image";
import React from "react";

const DynamicHeader = ({
  title,
  description,
  icon,
}: {
  title: string | undefined;
  description: string | undefined;
  icon: string | undefined;
}) => {
 
  return (
    <div className="mb-20">
      <div className="bg-[url('/assests/images/about-us.png')] mt-10 bg-no-repeat h-[20vh] bg-top ">
        <div className="pl-[40%]  not-italic pt-7 text-[#3f7884] tracking-tighter  text-4xl leading-[24px] font-normal">
          <h1 className="">
            <span className="text-gray-400"> {title}</span>{" "}
          </h1>
        </div>
      </div>
      <div className="flex justify-center bg-[url('/assests/images/about-bg.png')]  bg-no-repeat bg-cover">
        <div className="flex mx-28 ">
          <div className="flex flex-col ">
            <h1
              className={`${fjalla.className} font-bold not-italic text-[#3f7884] leading-[40px] text-[33px] mt-6 `}
            >
              {title}
            </h1>
            <p className="not-italic text-[17px] w-3/4 text-[#6eadb9]  leading-[28px] font-normal pr-14 mt-6">
             
              {description}

             
            </p>

           
          </div>
          <div className=" ">
            <Image
              className="rounded-md"
              src={icon}
              width={1000}
              height={50}
              alt="pic"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicHeader;
