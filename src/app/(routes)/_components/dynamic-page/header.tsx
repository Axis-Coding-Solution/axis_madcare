"use client";
import React from "react";
import Lottie, { LottiePlayer } from "lottie-react";
import animationData from "../../animation/animationdata1.json";
import Billinganimation from "../../animation/Billinganimation.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Billinganimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Header = ({
  title,
  description,
  icon,
}: {
  title: string | undefined;
  description: string | undefined;
  icon: string | undefined;
}) => {
  return (
    // <div
    // // className="from-[#3791A4] bg-gradient-to-r h-[30rem] mb-10 flex justify-around "
    // >
    <div className="flex justify-around bg-gradient-to-l from-[#91BDBE]">
      <div className=" mt-52  font-sans text-[#3F7884]">
        <h1 className="text-[60px]">{title}</h1>
        <p className="text-4xl flex justify-center t">{title}</p>
      </div>
      <div style={{ width: "30%", height: "30%" }} className="my-20">
        <Lottie
          animationData={Billinganimation}
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
            fontSize: "24px", // Adjust font size as needed
            color: "white", // Adjust text color as needed
            fontWeight: "bold", // Adjust font weight as needed
          }}
        >
          {/* <div className="flex flex-col text-black justify-start items-start"> */}
          {/* <h1 className="text-[50px]  font-sans"> */}
          {/* Electronic Health Records <br />
            {/* {titl */}
          {/* (EHR)  */}
          {/* {title} */}
          {/* </h1> */}
          {/* <p className=" text-2xl w-3/4 font-sans"> */}
          {/* Simplified Clinical Automation */}
          {/* {title} */}
          {/* </p> */}
          {/* </div> */}
        </div>
        {/* <div className="flex flex-col text-white justify-start items-start ml-40 pt-32  mt-12">
        <h1 className="text-[40px]  font-sans">
          Electronic Health Records (EHR)
        </h1>
        <p className=" text-2xl w-1/2 font-sans">Simplified Clinical Automation</p>
      </div> */}
      </div>
    </div>
  );
};

export default Header;
