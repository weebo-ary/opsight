import React, { useEffect, useRef, useState } from "react";
import { CheckCircleFilled } from "@ant-design/icons";

const WhyUs = () => {
  const sectionRef = useRef(null);
  const [isZoomedIn, setIsZoomedIn] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsZoomedIn(true); // Zoom in when the section is visible
          } else {
            setIsZoomedIn(false); // Zoom out when the section leaves the view
          }
        });
      },
      { threshold: 0.2 } // Trigger when 30% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`relative h-auto md:mt-10 md:mb-10 max-w-7xl flex md:flex flex-row-reverse md:flex-row-reverse sm:flex-col xs:flex-col justify-center items-center text-start p-8 gap-20 transition-transform duration-700 ease-in-out transform ${
        isZoomedIn ? "scale-100 opacity-100" : "scale-90 opacity-50"
      }`}
    >
      {/* Banner Content */}
      <div className="relative max-w-3xl px-4 md:px-0">
        <h1 className="text-5xl md:text-5xl sm:text-3xl xs:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Why OpsightAI?
        </h1>
        <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 mb-10">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>

        <div className="flex flex-col md:flex-col items-start justify-start rounded-lg">
          <p className="text-base md:text-2xl font-bold text-black dark:text-white mb-5">
            Communication Protocols:
          </p>
          <h2 className="text-lg flex gap-3 mb-2">
            <CheckCircleFilled style={{ color: "green" }} />
            Modbus TCP/IP
          </h2>
          <h2 className="text-lg flex gap-3 mb-2">
            <CheckCircleFilled style={{ color: "green" }} />
            Modbus RTU (RS 232 and RS 485)
          </h2>
          <h2 className="text-lg flex gap-3 mb-2">
            <CheckCircleFilled style={{ color: "green" }} />
            OPC UA
          </h2>
          <h2 className="text-lg flex gap-3">
            <CheckCircleFilled style={{ color: "green" }} />
            Ethernet/IP
          </h2>
        </div>
      </div>
      <img
        src="http://placehold.it/700x400"
        className="mt-10 md:mt-0 md:ml-5"
        alt="banner-img"
      />
    </div>
  );
};

export default WhyUs;
