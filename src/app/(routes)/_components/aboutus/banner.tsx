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
    <div className="flex justify-around  gap-[25rem]    bg-gradient-to-l from-[#91BDBE]">

      <div className="font-sans text-[#3F7884]">
        <h1 className=" text-4xl lg:text-8xl font-light my-40  lg:mt-56">About us</h1>
      </div>

      <div style={{ width: "30%", height: "35%" }} className="mt-11 hidden lg:flex">
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
