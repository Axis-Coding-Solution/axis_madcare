"use client";
import React from "react";
import Lottie, { LottiePlayer } from "lottie-react";
import animation from "../../animation/Animation.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row   lg:justify-between  lg:px-[110px]     bg-gradient-to-r from-[#C0DFE3] to-[#A9D1D7] via-[#71AFBC]">
      <div className="font-sans text-[#3F7884] mx-auto lg:mx-0 ">
        <h1 className=" text-4xl md:text-5xl lg:text-8xl mt-40   lg:my-40  not-italic  xl:mt-56 2xl:mt-72">
          About Us{" "}
        </h1>
      </div>

      <div
      
        className=" lg:mt-20 w-[90%] h-[10%] lg:w-[35%] lg:h-[35%] mx-auto lg:mx-0 "
      >
        <Lottie
          animationData={animation}
          loop={true}
          autoplay={true}
          size={200}
        />
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

export default Banner;
