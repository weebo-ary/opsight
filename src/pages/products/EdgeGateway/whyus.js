import React, { useEffect, useRef, useState } from "react";
import { CheckCircleFilled } from "@ant-design/icons";
import IiotAdv from "../../../assets/Illustration/iiot-adv.jpg"

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
      <div className="relative max-w-6xl px-4 md:px-0">
        <h1 className="text-5xl md:text-5xl sm:text-3xl xs:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Advantages of using <span className="text-orange-500">Edge Gateway</span>
        </h1>

        <div className="flex flex-col md:flex-col items-start justify-start gap-5 rounded-lg">
          <h2 className="text-lg flex items-center justify-center gap-3 mb-2">
            <span className="w-full">Enhanced Connectivity</span>{" "}
            <CheckCircleFilled style={{ color: "green" }} />
            <span className="text-gray-300 w-full">
              Integrate various industrial devices and sensors for seamless data
              flow.
            </span>
          </h2>
          <h2 className="text-lg flex items-center justify-center gap-3 mb-2 ">
            <span className="w-full">Immediate Insights</span>{" "}
            <CheckCircleFilled style={{ color: "green" }} />
            <span className="text-gray-300 w-full">
              Local processing allows for real-time analytics and faster
              decision-making.{" "}
            </span>
          </h2>
          <h2 className="text-lg flex items-center justify-center gap-3 mb-2">
            <span className="w-full">Flexible Deployment</span>{" "}
            <CheckCircleFilled style={{ color: "green" }} />
            <span className="text-gray-300 w-full">
              Easily deploy in various environments with multiple connectivity
              options.
            </span>
          </h2>
          <h2 className="text-lg flex items-center justify-center gap-3 mb-2">
            <span className="w-full">No Data Loss</span>{" "}
            <CheckCircleFilled style={{ color: "green" }} />
            <span className="text-gray-300 w-full">
              Ensure data integrity and consistency with reliable local
              processing and communication protocols.
            </span>
          </h2>
        </div>
      </div>
      <img
        src={IiotAdv}
        className="w-1/2 mt-10 md:mt-0 md:ml-5 rounded-lg"
        alt="banner-img"
      />
    </div>
  );
};

export default WhyUs;
