import React from "react";
import Aic from "../../../assets/Logo/aic.png";
import Mathwork from "../../../assets/Logo/mathworks.svg";
import MpStartup from "../../../assets/Logo/mp_startup.png";
import SeedFund from "../../../assets/Logo/seedfund.png";
import StartupIndia from "../../../assets/Logo/startup_india.png";

const TrustUs = () => {
  return (
    <div className="bg-white dark:bg-gray-800 py-10 flex flex-col items-center justify-center mt-20 md:mb-20 overflow-hidden">
      <h2 className="text-center text-4xl md:text-5xl sm:text-3xl text-gray-900 dark:text-white mb-4 sm:mb-10 xs:mb-10">
        Recognized by
      </h2>
      <div className="md:bg-gray-100 xs:bg-transparent sm:bg-transparent w-full overflow-hidden flex md:flex-row sm:flex-col xs:flex-col items-center justify-center gap-16 h-48 md:h-auto sm:h-auto xs:h-auto">
        <div className=" md:px-10 overflow-hidden flex md:flex-row sm:flex-col xs:flex-col items-center justify-center md:gap-16 xs:gap-5 sm:gap-1 h-48 md:h-auto sm:h-auto xs:h-auto md:animate-marquee">
          <img
            src={Aic}
            alt="Aic"
            className="w-44 object-cover transition-opacity duration-1000"
          />
          <img
            src={Mathwork}
            alt="Mathwork"
            className="w-64 xs:w-44 sm:w-44 object-cover transition-opacity duration-1000"
          />
                   <img
            src={MpStartup}
            alt="MpStartup"
            className="md:w-36 xs:w-44 sm:w-44 object-cover transition-opacity duration-1000"
          />
          <img
            src={SeedFund}
            alt="SeedFund"
            className="md:w-36 xs:w-36 sm:w-36 object-cover transition-opacity duration-1000"
          />
          <img
            src={StartupIndia}
            alt="StartupIndia"
            className="md:w-44 xs:w-44 sm:w-44 object-cover transition-opacity duration-1000"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustUs;
