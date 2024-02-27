import React from "react";
import Hero from "./_components/main/hero";
import OurServices from "./_components/main/our-services";
import EHR from "./_components/main/ehr";
import Demo from "./_components/main/demo";
import Blog from "./_components/main/blog";
import News from "./_components/main/news";
import AboutUs from "./_components/main/about-us";
import SliderMed from "./_components/main/slider";
import Header from "./_components/main/header";

function MainPage() {
  return (
    <div>
      <Hero />
       <OurServices />
       <EHR />
      <AboutUs />
       <SliderMed />
      <Demo />
      <Blog />
      <News /> 
      
    </div>
  );
}

export default MainPage;
