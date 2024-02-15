import React from "react";
import Hero from "./_components/main/hero";
import OurServices from "./_components/main/our-services";
import EHR from "./_components/main/ehr";
import Demo from "./_components/main/demo";
import Blog from "./_components/main/blog";
import News from "./_components/main/news";


function MainPage() {
  return <div>
    <Hero/>
    <OurServices/>
    <EHR/>
    <Demo/>
    <Blog/>
    <News/>
  
  </div>;
}

export default MainPage;
