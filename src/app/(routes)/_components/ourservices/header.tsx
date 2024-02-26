"use client";
import React from "react";
import Lottie, { LottiePlayer } from "lottie-react";
// import animationData from "../../animation/animationdata1.json";
import Billinganimation from "../../animation/Billinganimation.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: Billinganimation,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center  lg:gap-[28rem] bg-gradient-to-r from-[#C0DFE3] to-[#A9D1D7] via-[#71AFBC]">
      {/* <div className="mt-24 xl:mt-40">
        <h1 className="lg:text-[80px] text-[#3F7884]">Our</h1>
        <span className="lg:text-[70px] text-[#3F7884] -ml-2">Services</span>
      </div> */}
      <div className="font-sans text-[#3F7884] text-8xl  not-italic mt-24 xl:mt-48  pl-14 ">
        
        <h1 className=" ">Our</h1>
        <span className="">Services</span>
      </div>

      <div style={{ width: "30%", height: "30%" }} className=" mt-32 mb-10 ">
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
