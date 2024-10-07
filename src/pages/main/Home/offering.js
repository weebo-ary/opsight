import { CheckCircleOutlined, WarningOutlined } from "@ant-design/icons";
import React, { useEffect, useState, useRef } from "react";
import Logo from "../../../assets/Logo/DarkLogo.png";
import OfferingBg from "../../../assets/Images/offering.png"; // Import the background image

const OfferingSection = () => {
  const blobsData = [
    {
      title: "Lack of Operational Insights",
      description:
        "Inability to access real-time data and metrics, leading to poor decision-making and inefficient processes.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "Low OEE",
      description:
        "Overall Equipment Effectiveness (OEE) is suboptimal, indicating that equipment isn't being utilized to its full potential.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "Higher Rejections",
      description:
        "High rate of defective products or parts being rejected, which increases costs and reduces profitability.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "Unprecedented Downtime",
      description:
        "Unplanned equipment failures or system outages that disrupt production and lead to significant losses.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
    {
      title: "Delayed Decision Making",
      description:
        "The time taken to gather, analyze, and act on data is too long, resulting in slower responses to critical operational needs.",
      color: "#9FD2C7",
      icon: <WarningOutlined />,
    },
  ];

  const blobsDataTwo = [
    {
      title: "Real-Time Production Insights",
      description:
        "Access to live data and metrics that enable immediate, informed decision-making to optimize production processes",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Higher OEE:",
      description:
        "Improved Overall Equipment Effectiveness (OEE), maximizing the use of machinery and resources to enhance productivity",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Lower Rejections",
      description:
        "Reduced rates of defective or rejected products through better quality control and process optimization.",
      color: "#9FD2C7",

      icon: <CheckCircleOutlined />,
    },
    {
      title: "Preventive Maintenance",
      description:
        "Proactive maintenance strategies that minimize unplanned downtime by addressing issues before they lead to equipment failure",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
    {
      title: "Data-Driven Operations",
      description:
        "Leveraging data analytics to guide decisions and strategies, resulting in more efficient and optimized operations",
      color: "#9FD2C7",
      icon: <CheckCircleOutlined />,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // For scroll animation

  const sectionRef = useRef(null);

  useEffect(() => {
    const handleNext = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % blobsData.length); // Loop through the items
        setIsTransitioning(false);
      }, 500);
    };

    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 2000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [currentIndex, isPaused, blobsData.length]);

  // Scroll-based animation using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  // Handlers for mouse enter and leave
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      ref={sectionRef}
      className="relative overflow-hidden mb-20 md:mb-20 md:mt-20"
    >
      {/* Background Image */}
      <img
        src={OfferingBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 dark:opacity-20"
      />

      <div className="mx-auto relative z-10 flex flex-col md:flex-col sm:flex-col xs:flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-center gap-8">
          <div
            className={`flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-20"
            }`}
          >
            <div
              className="flex flex-row-reverse items-center justify-between relative p-6 rounded-sm text-center overflow-hidden cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`w-full h-80 rounded-lg ml-10 md:ml-10 xs:ml-0 relative z-10 top-5 flex flex-col items-center justify-center gap-5 `}
              >
                <h1 className="sticky top-0 z-50 text-5xl text-center w-full mb-10 text-green-400">
                  {" "}
                  Our Offerings{" "}
                </h1>
                <div
                  className={`flex flex-col items-center justify-center gap-5 mb-5 transition-all duration-500 ease-in-out transform ${
                    isTransitioning
                      ? "translate-x-100% opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                >
                  <div className="text-5xl text-black dark:text-white">
                    {blobsDataTwo[currentIndex].icon}
                  </div>
                  <div>
                    <h3 className="mt-4 text-3xl md:text-3xl xs:text-2xl text-center font-bold text-black dark:text-white">
                      {blobsDataTwo[currentIndex].title}
                    </h3>
                    <p className="mt-2 text-xl md:text-md xs:text-lg text-center text-gray-900 dark:text-gray-100">
                      {blobsDataTwo[currentIndex].description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-auto h-auto py-5 overflow-hidden flex flex-col items-center justify-center">
                <div className="border-t-2 w-full rotate-90 mt-20"></div>
                <div className="bg-black z-50 py-5 rounded-lg">
                  <img
                    src={Logo}
                    alt="logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="border-t-2 w-full rotate-90 mb-20"></div>
              </div>

              <div
                className={`w-full h-80 rounded-lg mr-10 md:mr-10 xs:mr-0 relative z-10 top-5 flex flex-col items-center justify-center gap-5 `}
              >
                <h1 className="text-5xl text-center w-full text-red-400 mb-10">
                  {" "}
                  Industry Challenges{" "}
                </h1>
                <div
                  className={`flex flex-col items-center justify-center gap-5 mb-5 transition-all duration-500 ease-in-out transform ${
                    isTransitioning
                      ? "translate-x-100% opacity-0"
                      : "translate-x-0 opacity-100"
                  }`}
                >
                  <div className="text-5xl text-black dark:text-white">
                    {blobsData[currentIndex].icon}
                  </div>
                  <div>
                    <h3 className="mt-4 text-4xl md:text-4xl xs:text-2xl text-center font-bold text-black dark:text-white">
                      {blobsData[currentIndex].title}
                    </h3>
                    <p className="mt-2 text-xl md:text-md xs:text-lg text-center text-gray-500 dark:text-gray-100">
                      {blobsData[currentIndex].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferingSection;
