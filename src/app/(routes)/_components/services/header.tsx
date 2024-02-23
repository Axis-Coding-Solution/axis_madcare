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
    // <div
    // // className="from-[#3791A4] bg-gradient-to-r h-[30rem] mb-10 flex justify-around "
    // >

    <div style={{ width: "100%", height: "50%" }} className="mt-28">
      <Lottie
        animationData={animationData}
        loop={true} // Set to true if you want the animation to loop
        autoplay={true} // Set to true if you want the animation to play automatically
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
      >
        <div className="flex flex-col text-white justify-start items-start ">
          <h1 className="text-[50px]  font-sans">
            Electronic Health Records <br />
            {/* {titl */}
            (EHR)
          </h1>
          <p className=" text-2xl w-3/4 font-sans">
            Simplified Clinical Automation
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
