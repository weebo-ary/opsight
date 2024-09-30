import React, { useState, useEffect } from "react";
import {
  CheckCircleOutlined,
  ThunderboltOutlined,
  DatabaseOutlined,
  ToolOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

const ProcessSection = () => {
  // Define the array of carousel items
  const carouselItems = [
    {
      icon: <CheckCircleOutlined className="text-4xl text-blue-500" />,
      title: "Performance Monitoring",
      description:
        "Real-time insights with continuous monitoring and immediate data analysis.",
    },
    {
      icon: <ThunderboltOutlined className="text-4xl text-blue-500" />,
      title: "Predictive Analytics",
      description:
        "Unlock the future with predictive analytics and data-driven insights.",
    },
    {
      icon: <DatabaseOutlined className="text-4xl text-blue-500" />,
      title: "Customised Solutions",
      description:
        "Tailored solutions to match your business needs and operational vision.",
    },
    {
      icon: <ToolOutlined className="text-4xl text-blue-500" />,
      title: "Incident Assistant",
      description:
        "Efficient incident resolution with data-backed insights and solutions.",
    },
  ];

  const carouselItemsTwo = [
    {
      icon: <ToolOutlined className="text-4xl text-blue-500" />,
      title: "Incident Assistant",
      description:
        "Efficient incident resolution with data-backed insights and solutions.",
    },
    {
      icon: <CheckCircleOutlined className="text-4xl text-blue-500" />,
      title: "Performance Monitoring",
      description:
        "Real-time insights with continuous monitoring and immediate data analysis.",
    },
    {
      icon: <ThunderboltOutlined className="text-4xl text-blue-500" />,
      title: "Predictive Analytics",
      description:
        "Unlock the future with predictive analytics and data-driven insights.",
    },
    {
      icon: <DatabaseOutlined className="text-4xl text-blue-500" />,
      title: "Customised Solutions",
      description:
        "Tailored solutions to match your business needs and operational vision.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleNext = () => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length); // Loop through the items
        setIsTransitioning(false);
        setProgress(0);
      }, 500);
    };

    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 2000);

      const progressInterval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 1 : 0));
      }, 25);

      return () => {
        clearInterval(interval);
        clearInterval(progressInterval);
      };
    }
  }, [currentIndex, isPaused, carouselItems.length]);

  // Handlers for mouse enter and leave
  const handleMouseEnter = () => {
    setIsPaused(true);
    setProgress(0);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
    setProgress(0);
  };
  return (
    <div className="py-16 xs:py-5 md:px-24 bg-white dark:bg-transparent mt-10 mb-20">
      <div className="mx-auto px-4 flex md:flex-row xs:flex-col gap-10 md:px-14">
        <div className="flex flex-col md:flex-col items-center justify-center">
          <div>
            <h2 className="text-start md:text-start xs:text-center text-4xl md:text-4xl xs:text-2xl font-extrabold text-gray-900 dark:text-white mb-4 capitalize">
              Digitize Your <span className="text-red-500">Processes</span> And Gain Analytics From Day One
            </h2>
          </div>
          <br />
          <div className="xs:w-full flex flex-col items-start justify-start">
            <p className="md:w-full xs:w-full text-start md:text-start xs:text-center text-xl text-gray-600 dark:text-gray-400 mb-12">
              Take a look at all the key <b>Processes</b> we cover. No Need To
              Design Or Develop Custom Software For Your Operations.
            </p>
            <div className="flex items-start md:items-start xs:items-center justify-start md:justify-start xs:justify-center w-full">
              <button className="px-6 py-3 bg-slate-600 dark:bg-slate-300 text-white dark:text-black font-medium rounded-md shadow hover:bg-gray-700 transition">
                Learn more <ArrowRightOutlined className="ml-2" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="flex flex-col items-center justify-center">
          <div
            className="relative w-full md:w-128 h-auto p-6 bg-gradient-to-r from-white via-gray-50 to-white dark:bg-gradient-to-r dark:from-transparent dark:via-gray-800 dark:to-transparent rounded-sm text-center overflow-hidden cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="absolute inset-0 z-0">
              <svg
                className="absolute top-12 right-44 w-12 h-12 opacity-20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 200 200"
              >
                <circle cx="100" cy="100" r="100" fill="#FFD700" />
              </svg>
              <svg
                className="absolute top-44 left-44 w-12 h-12 opacity-20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 200 200"
              >
                <circle cx="100" cy="100" r="100" fill="#9FD2C7" />
              </svg>
              <svg
                className="absolute bottom-20 right-44 w-12 h-12 opacity-20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 200 200"
              >
                <circle cx="100" cy="100" r="100" fill="#FFD700" />
              </svg>
            </div>

            <div
              className={`relative z-10 top-5 flex flex-row-reverse items-center justify-center gap-5  transition-all duration-500 ease-in-out transform ${
                isTransitioning
                  ? "translate-x-full opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              <div>{carouselItems[currentIndex].icon}</div>
              <div>
                <h3 className="mt-4 text-2xl text-end font-bold text-gray-800 dark:text-white">
                  {carouselItems[currentIndex].title}
                </h3>
                <p className="mt-2 text-end text-gray-600 dark:text-gray-400">
                  {carouselItems[currentIndex].description}
                </p>
              </div>
            </div>

            <br />

            <div
              className={`relative z-10 top-5 flex flex-row items-center justify-center gap-5 transition-all duration-500 ease-in-out transform ${
                isTransitioning
                  ? "translate-x-[-100%] opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              <div>{carouselItemsTwo[currentIndex].icon}</div>
              <div>
                <h3 className="mt-4 text-2xl text-start font-bold text-gray-800 dark:text-white">
                  {carouselItemsTwo[currentIndex].title}
                </h3>
                <p className="mt-2 text-start text-gray-600 dark:text-gray-400">
                  {carouselItemsTwo[currentIndex].description}
                </p>
              </div>
            </div>

            <br />

            <div
              className={`relative z-10 top-5 flex flex-row-reverse items-center justify-center gap-5  transition-all duration-500 ease-in-out transform ${
                isTransitioning
                  ? "translate-x-full opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              <div>{carouselItems[currentIndex].icon}</div>
              <div>
                <h3 className="mt-4 text-2xl text-end font-bold text-gray-800 dark:text-white">
                  {carouselItems[currentIndex].title}
                </h3>
                <p className="mt-2 text-end text-gray-600 dark:text-gray-400">
                  {carouselItems[currentIndex].description}
                </p>
              </div>
            </div>
            <br />
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300 dark:bg-gray-700">
              <div
                className="h-1 bg-gray-800 dark:bg-white"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessSection;
