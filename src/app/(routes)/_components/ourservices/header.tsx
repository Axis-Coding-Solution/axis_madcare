"use client";
import React from "react";
import Lottie, { LottiePlayer } from "lottie-react";

import Billinganimation from "../../animation/Billinganimation.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Billinganimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Header = () => {
  return (
    <div className="flex flex-col xl:flex-row justify-center  xl:gap-[28rem] bg-gradient-to-r from-[#C0DFE3] to-[#A9D1D7] via-[#71AFBC]   xl:px-28">
      <div className="font-sans text-[#3F7884] text-4xl md:text-5xl lg:text-8xl md:pl-5 xl:pl-0 not-italic pt-40 md:pt-20 lg:mt-10 xl:pt-0 xl:mt-48 text-center  xl:text-left ">
        <h1 className=" ">Our</h1>
        <span className="">Services</span>
      </div>

      <div className="mt-10 md:mt-5 lg:mt-10  xl:mt-32  mb-10 mx-auto w-[60%] h-[30%] lg:w-[30%] lg:h-[30%]  ">
        <Lottie animationData={Billinganimation} loop={true} autoplay={true} />
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
        ></div>
      </div>
    </div>
  );
};

export default Header;
