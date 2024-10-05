import React from "react";
import Banner from "./Home/banner";
import Feature from "./Home/feature";
import Proccess from "./Home/proccess";
import WhyUs from "./Home/whyus";
import Video from "./Home/video";
import TrustUs from "./Home/trustus";
import Offering from "./Home/offering";
import Faq from "./Home/faq";
import "./Home/index.css"

function home() {
  return (
    <div>
      <Banner />
      <Proccess />
      <Feature />
       <WhyUs />
       <Video />
      <TrustUs />
      <Offering />
     <Faq />
    </div>
  );
}

export default home;
