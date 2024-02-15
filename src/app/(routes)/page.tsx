import React from "react";
import Hero from "./_components/main/hero";
import OurServices from "./_components/main/our-services";
import EHR from "./_components/main/ehr";
import Aboutus from "./_components/main/about-us"

function MainPage() {
  return <div>
    <Hero/>
    <OurServices/>
    <EHR/>
    <Aboutus/>
  </div>;
}

export default MainPage;
