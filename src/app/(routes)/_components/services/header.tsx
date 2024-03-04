"use client";
import React from "react";
import Lottie, { LottiePlayer } from "lottie-react";
import animationData from "../../animation/animationdata1.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Header = () => {
  return (
    <div className="relative sm:h-auto h-[250px] bg-[#3F7884] items-center flex  ">
      <div className="md:w-[100%] md:h-[120%]">
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="md:h-[130%]"
        />
      </div>
      <div className=" absolute top-28 left-2 md:top-40  flex  md:ml-5 lg:ml-[110px] xl:ml-24 2xl:mt-40 items-center justify-start text-[24px] text-white font-bold">
        <div className="flex flex-col    text-white justify-start items-start ">
          <h1 className="text-[12px] md:text-[20px] lg:text-[30px] xl:text-[50px]  font-sans lg:mt-10 xl:mt-12">
            Electronic Health Records <br />
            (EHR)
          </h1>
          <p className="text-[10px]  md:text-[14px] lg:text-[15px] xl:text-2xl lg:w-3/4 font-sans">
            Simplified Clinical Automation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
