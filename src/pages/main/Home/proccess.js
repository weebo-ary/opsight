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
    <div className="py-16 xs:py-5 bg-white dark:bg-transparent mt-10 mb-10">
      <div className="mx-auto px-4 flex md:flex-row xs:flex-col gap-10 md:px-14">
        <div className="flex flex-col md:flex-col items-center justify-center">
          <div>
            <h2 className="text-start md:text-start xs:text-center text-4xl md:text-4xl xs:text-2xl font-extrabold text-gray-900 dark:text-white mb-4 capitalize">
              Digitize Your{" "}
              <span className="relative inline-block ml-2">
                Processes
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1418 125"
                  fill="#9FD2C7"
                >
                  <path d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"></path>
                </svg>
              </span>{" "}
              And Gain Analytics From Day One
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
