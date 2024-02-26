"use client";
import React from "react";
import Lottie, { LottiePlayer } from "lottie-react";
import animationData from "../../animation/animationdata1.json";
import Billinganimation from "../../animation/Billinganimation.json";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
const obj = {
  bill: Billinganimation,
};

const Header = ({
  title,
  description,
  icon,
  image,
}: {
  title: string | undefined;
  description: string | undefined;
  icon: string | StaticImport;
  image: any | undefined;
}) => {
  return (
    <div className="flex justify-around  bg-gradient-to-r from-[#C0DFE3] to-[#A9D1D7] via-[#71AFBC]  ">
      <div className=" mt-52   font-sans text-[#3F7884]">
        <h1 className="text-[50px]">{title}</h1>
        <p className="text-[25px] flex">{title}</p>
      </div>
   
      <div style={{ width: "30%", height: "40%" }} className=" pt-36 pb-20">
      <Image
        src={icon}
        alt="icon"
        objectFit="cover"
        width={250}
        height={40}
        className="text-black"
      />

        {/* {icon && <Lottie animationData={icon} loop={true} autoplay={true} />}
        <div
          style={{
            position: "absolute",
            top: 0,

            height: "100%",
            display: "flex",
            marginLeft: "100px",
            alignItems: "center",
            justifyContent: "start",
            fontSize: "24px",
            color: "white",
            fontWeight: "bold",
          }}
        ></div> */}
      </div>
    </div>
  );
};

export default Header;
