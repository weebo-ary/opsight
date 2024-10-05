import React from "react";
import Aic from "../../../assets/Logo/aic.png"
import Mathwork from "../../../assets/Logo/mathworks.svg"
import MpStartup from "../../../assets/Logo/mp_startup.png"
import SeedFund from "../../../assets/Logo/seedfund.png"
import StartupIndia from "../../../assets/Logo/startup_india.png"

const TrustUs = () => {
  return (
    <div className="bg-white md:max-w-7xl dark:bg-gray-800 py-10 flex flex-col items-center justify-center mt-10 md:mb-0 overflow-hidden">
      <h2 className="text-center text-4xl md:text-5xl sm:text-3xl text-gray-900 dark:text-white mb-4 sm:mb-10 xs:mb-10">
      Trusted By Leading Companies
        </h2>
      <div className="flex md:animate-marquee md:flex-row sm:flex-col xs:flex-col items-center justify-center gap-16 h-48 md:h-auto sm:h-auto xs:h-auto">
          <img
            src={Aic}
            alt="Aic"
            className="w-44 object-cover transition-opacity duration-1000"
          />
          <img
            src={Mathwork}
            alt="Mathwork"
            className="w-44 object-cover transition-opacity duration-1000"
          />
          <img
            src={MpStartup}
            alt="MpStartup"
            className="w-44 object-cover transition-opacity duration-1000"
          />
          <img
            src={SeedFund}
            alt="SeedFund"
            className="w-44 object-cover transition-opacity duration-1000"
          />
          <img
            src={StartupIndia}
            alt="StartupIndia"
            className="w-44 object-cover transition-opacity duration-1000"
          />
      </div>
    </div>
  );
};

export default TrustUs;
