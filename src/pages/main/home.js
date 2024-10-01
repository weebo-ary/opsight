import React from "react";
import Banner from "./Home/banner";
import Feature from "./Home/feature";
import Proccess from "./Home/proccess";
import WhyUs from "./Home/whyus";
import TrustUs from "./Home/trustus";
import Offering from "./Home/offering";
import Faq from "./Home/faq";
import "./Home/index.css"

function home() {
  return (
    <div>
      <Banner />
      <Feature />
      <Proccess />
       <WhyUs />
       <TrustUs />
      <Offering />
     <Faq />
    </div>
  );
}

export default home;
