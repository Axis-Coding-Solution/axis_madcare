"use client";
import React from "react";
import Lottie, { LottiePlayer } from "lottie-react";
import animationData from "../../animation/animationdata1.json";
import Contactusanimations from "../../animation/Contactusanimations.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Contactusanimations,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Header = () => {
  return (
    <div className="flex justify-between px-[110px] items-center pt-20  bg-gradient-to-r from-[#C0DFE3] to-[#A9D1D7] via-[#71AFBC]">
      <div className="font-sans text-[#3F7884] text-8xl  not-italic ">
        <h1 className=" ">Contact</h1>
        <span className="">Us</span>
      </div>
      <div style={{ width: "35%", height: "35%" }} className="">
        <Lottie
          animationData={Contactusanimations}
          loop={true} // Set to true if you want the animation to loop
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

export default Header;
