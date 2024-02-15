import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="">
      <div className="grid grid-cols-12 bg-[#95D3D4] py-36 pb-40">
        <div className="sm:col-span-1 col-span-12 text-center sm:text-start"></div>
        <div className="sm:col-span-4 col-span-12 text-center sm:text-start">
          <div>
            <Image
              src="/svgs/d55bb295d2a8b570c3560064ee726527-ai (5).svg"
              alt=""
              height={80}
              width={140}
            />
            <p className="text-[#D9ECF0] mt-5 font-bold  text-base">
              The world most trusted <br />
              telehealth company.
            </p>
          </div>
        </div>
        <div className="sm:col-span-2 col-span-12 text-center sm:text-start cursor-pointer">
          <h1 className="text-[#D9ECF0] font-bold text-xl tracking-tighter">Departments</h1>
          <h2 className="mt-9 text-[#284242] hover:text-white mb-2">Eye care</h2>
          <h2 className="text-[#284242] hover:text-white mb-2" >Cardiac are</h2>
          <h2 className="text-[#284242] hover:text-white">Heart care</h2>
        </div>
        <div className="sm:col-span-2 col-span-12 text-center sm:text-start cursor-pointer">
          <h1 className="text-[#D9ECF0] font-bold text-xl tracking-tighter">Membership</h1>
          <h2 className="mt-9 text-[#284242] hover:text-white mb-2">Free trial</h2>
          <h2 className="text-[#284242] hover:text-white mb-2">Silver</h2>
          <h2 className="text-[#284242] hover:text-white">Premium</h2>
        </div>
        <div className="sm:col-span-2 col-span-12 text-center sm:text-start cursor-pointer">
          <h1 className="text-[#D9ECF0] font-bold text-xl tracking-tighter">Customer Care</h1>
          <h2 className="mt-9 text-[#284242] hover:text-white mb-2">About Us</h2>
          <h2 className="text-[#284242] hover:text-white mb-2">Contact US</h2>
          <h2 className="text-[#284242] hover:text-white">Get Update</h2>
        </div>
        <div className="sm:col-span-1 col-span-12"></div>
      </div>
      <div className="bg-[#3791A4] py-10 pl-28 text-[#DBCDCE] font-bold text-sm">
        <p>All rights Reserved &copy; Axis MedCare Solutions, 2024</p>
      </div>
    </div>
  );
}

export default Footer;
