"use client";
import React from "react";
import Lottie, { LottiePlayer } from "lottie-react";
import animationData from "../../animation/animationdata1.json";
import animation from "../../animation/animation.json";

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
    <div className="flex justify-between px-[110px]     bg-gradient-to-r from-[#C0DFE3] to-[#A9D1D7] via-[#71AFBC]">

      <div className="font-sans text-[#3F7884]">
        <h1 className=" text-4xl lg:text-8xl  my-40 not-italic  lg:mt-56 ">About us</h1>
      </div>

      <div style={{ width: "35%", height: "35%" }} className="mt-20 hidden lg:flex">
        <Lottie animationData={animation} loop={true} autoplay={true} size={200}/>
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
