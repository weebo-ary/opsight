import { CheckCircleOutlined, WarningOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";

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
        " Unplanned equipment failures or system outages that disrupt production and lead to significant losses.",
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
        " Improved Overall Equipment Effectiveness (OEE), maximizing the use of machinery and resources to enhance productivity",
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
 

  // Handlers for mouse enter and leave
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="py-16 h-100 xs:py-5 bg-white dark:bg-gray-800 relative overflow-hidden mb-2">
      <div className="mx-auto px-4 relative z-10">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
          Work Smarter with a Smart Platform
        </h2>
        {/* Blob grid */}
        <div className="flex flex-row items-center justify-center gap-8">
          <div className=" flex flex-col items-center justify-center">
            <div
              className=" relative w-full md:w-160 h-auto p-6 bg-gradient-to-r bg-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-gray-800 dark:to-transparent rounded-sm text-center overflow-hidden cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`bg-red-100 px-4 py-2 rounded-lg ml-10 relative z-10 top-5 flex flex-row-reverse items-center justify-center gap-5  transition-all duration-500 ease-in-out transform ${
                  isTransitioning
                    ? "translate-x-full opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                <div className="flex flex-row-reverse items-center justify-end gap-5 mb-5">
                  <div className="text-5xl text-black">
                    {blobsData[currentIndex].icon}
                  </div>
                  <div>
                    <h3 className="mt-4 text-4xl text-end font-bold text-gray-800">
                      {blobsData[currentIndex].title}
                    </h3>
                    <p className="mt-2 text-xl text-end text-gray-600">
                      {blobsData[currentIndex].description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-b mt-14"></div>

              <div
                className={`bg-green-100 px-4 py-2 rounded-lg mr-10 relative z-10 top-5 flex flex-row items-center justify-center gap-5 transition-all duration-500 ease-in-out transform ${
                  isTransitioning
                    ? "translate-x-[-100%] opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                <div className="flex flex-row items-center justify-end gap-5 mb-5">
                  <div className="text-5xl text-black">
                    {blobsDataTwo[currentIndex].icon}
                  </div>
                  <div>
                    <h3 className="mt-4 text-3xl text-start font-bold text-gray-800">
                      {blobsDataTwo[currentIndex].title}
                    </h3>
                    <p className="mt-2 text-xl text-start text-gray-600">
                      {blobsDataTwo[currentIndex].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Animated Elements (behind the cards) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Small Dots Cluster */}
        <div className="absolute bottom-82 left-80 blur-sm">
          <svg width="150" height="100">
            {Array.from({ length: 8 }).map((_, rowIndex) =>
              Array.from({ length: 4 }).map((_, colIndex) => (
                <circle
                  key={`${rowIndex}-${colIndex}`}
                  cx={20 * colIndex + 10}
                  cy={20 * rowIndex + 10}
                  r="3"
                  fill="#9FD2C7"
                />
              ))
            )}
          </svg>
        </div>

        {/* More circles for background effect */}
        <div className="absolute bottom-32 left-10 animate-float blur-sm">
          <svg width="60" height="60">
            <circle cx="30" cy="30" r="20" fill="#FF9AA2" />
            <circle cx="50" cy="50" r="10" fill="#9FD2C7" />
          </svg>
        </div>

        <div className="absolute top-10 right-20 blur-sm">
          <svg width="50" height="50">
            <circle cx="25" cy="25" r="15" fill="#FFD700" />
            <circle cx="35" cy="15" r="7" fill="#A0CED9" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OfferingSection;
