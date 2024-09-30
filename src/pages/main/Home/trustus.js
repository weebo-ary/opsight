import React from "react";
import Aic from "../../../assets/Logo/aic.png"
import Mathwork from "../../../assets/Logo/mathworks.svg"
import MpStartup from "../../../assets/Logo/mp_startup.png"
import SeedFund from "../../../assets/Logo/seedfund.png"
import StartupIndia from "../../../assets/Logo/startup_india.png"

const TrustUs = () => {
  return (
    <div className="bg-white dark:bg-gray-800 py-10 flex flex-col items-center justify-center mt-20 mb-20 bg-red-300">
      <h2 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
      Trusted By Leading Companies
        </h2>
      <div className="flex md:flex-row xs:flex-col justify-center items-center space-x-8 h-48 md:h-48 xs:h-150 sm:h-100 w-full">
          <img
            src={Aic}
            alt="Aic"
            className="w-64 h-18 object-cover transition-opacity duration-1000"
          />
          <img
            src={Mathwork}
            alt="Mathwork"
            className="w-64 h-64 object-cover transition-opacity duration-1000"
          />
          <img
            src={MpStartup}
            alt="MpStartup"
            className="w-44 h-24 object-cover transition-opacity duration-1000"
          />
          <img
            src={SeedFund}
            alt="SeedFund"
            className="w-44 h-36 object-cover transition-opacity duration-1000"
          />
          <img
            src={StartupIndia}
            alt="StartupIndia"
            className="w-64 h-44 object-cover transition-opacity duration-1000"
          />
      </div>
    </div>
  );
};

export default TrustUs;
