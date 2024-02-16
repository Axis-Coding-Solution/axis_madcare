"use client";
import React from "react";
import Lottie, { LottiePlayer } from "lottie-react";
import animationData from "../../animation/animationdata1.json";

const defaultOptions = {
      loop: true,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
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
          // left: 0,
          width: "100%",
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
        <div className="flex flex-col text-white justify-start items-start">
          <h1 className="text-[50px]  font-sans">
            Electronic Health Records <br/>(EHR)
          </h1>
          <p className=" text-2xl w-3/4 font-sans">
            Simplified Clinical Automation
          </p>
        </div>
      </div>
      {/* <div className="flex flex-col text-white justify-start items-start ml-40 pt-32  mt-12">
        <h1 className="text-[40px]  font-sans">
          Electronic Health Records (EHR)
        </h1>
        <p className=" text-2xl w-1/2 font-sans">Simplified Clinical Automation</p>
      </div> */}
    </div>
    // </div>
  );
};

export default Header;
