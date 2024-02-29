"use client";
import React from "react";
import Lottie, { LottiePlayer } from "lottie-react";
// import animationData from "../../animation/animationdata1.json";
import Contactusanimations from "../../animation/Contactusanimations.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Contactusanimations,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row  lg:justify-between lg:px-[110px] items-center pt-40   lg:py-20 xl:py-10 xl:pt-20   bg-gradient-to-r from-[#C0DFE3] to-[#A9D1D7] via-[#71AFBC]">
      <div className="font-sans flex mx-auto lg:mx-0  xl:flex-col text-[#3F7884] text-4xl md:text-5xl lg:text-8xl   sm:pl-0   not-italic ">
        <h1 className=" ">Contact</h1>
        <span className="">Us</span>
      </div>
      <div className=" w-[90%]  lg:w-[35%] lg:h-[35%]">
        <Lottie
          animationData={Contactusanimations}
          loop={true}
          autoplay={true}
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

export default Contact;
