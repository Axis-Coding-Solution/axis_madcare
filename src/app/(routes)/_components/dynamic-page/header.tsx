"use client";
import React from "react";
import Lottie, { LottiePlayer } from "lottie-react";
import animationData from "../../animation/animationdata1.json";
import Billinganimation from "../../animation/Billinganimation.json";
const obj = {
  bill: Billinganimation,
};

const Header = ({
  title,
  description,
  icon,
  image,
}: {
  title: string | undefined;
  description: string | undefined;
  icon: string | undefined;
  image: any | undefined;
}) => {
  console.log("EEEEEEEEEEEEEEEE", image);
  return (
    <div className="flex justify-around bg-gradient-to-l from-[#91BDBE]">
      <div className=" mt-52  font-sans text-[#3F7884]">
        <h1 className="text-[40px]">{title}</h1>
        <p className="text-[25px] flex">{title}</p>
      </div>
      <div style={{ width: "30%", height: "30%" }} className="my-20">
        {image && <Lottie animationData={image} loop={true} autoplay={true} />}
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
