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
    <div className="flex  sm:justify-between  sm:px-[110px]     bg-gradient-to-r from-[#C0DFE3] to-[#A9D1D7] via-[#71AFBC]">
      <div className="font-sans text-[#3F7884] mx-auto xl:mx-0 ">
        <h1 className=" text-5xl lg:text-8xl   my-40  not-italic  xl:mt-56">
          About us{" "}
        </h1>
      </div>

      <div
        style={{ width: "35%", height: "35%" }}
        className="mt-20 hidden xl:flex"
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
