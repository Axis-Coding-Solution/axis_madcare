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
    <div className="flex justify-around   bg-gradient-to-l from-[#91BDBE]">
      <div className=" mt-60  font-sans text-[#3F7884]">
        <h1 className="text-8xl">Contact US</h1>
      </div>

      <div style={{ width: "30%", height: "30%" }} className="mt-11">
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
