import React, { useState, useEffect } from "react";
import {
  CheckCircleOutlined,
  ThunderboltOutlined,
  DatabaseOutlined,
  ToolOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

function ProcessSection() {
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
    <div className="mx-8 flex md:flex-row sm:flex-col xs:flex-col mt-20 sm:mt-10 xs:mt-10 mb-20 bg-gray-100 dark:bg-gray-900 p-5 rounded-lg">
        <div className="absolute bottom-30 left-30 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className=" flex flex-col items-start justify-center gap-10">
        <div className="">
          <h2 className="text-5xl md:text-5xl sm:text-3xl xs:text-3xl font-extrabold text-gray-900 dark:text-white">
            Digitize Your <span className="text-red-500">Processes</span> And
            Gain Analytics From Day One
          </h2>
        </div>
        <div className="">
          {" "}
          <p className="text-3xl md:text-3xl sm:text-xl xs:text-xl text-gray-600 dark:text-gray-400">
            Take a look at all the key <b>Processes</b> we cover. No Need To
            Design Or Develop Custom Software For Your Operations.
          </p>{" "}
        </div>
        <div className="">
          <div className="">
            <button className="px-6 py-3 bg-slate-600 dark:bg-white text-white dark:text-black font-medium rounded-lg shadow hover:bg-gray-700 transition">
              Learn more <ArrowRightOutlined className="ml-2" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col xs:max-w-full items-center justify-center">
        <div
          className="relative w-144 md:w-144 sm:max-w-full xs:max-w-full p-6 bg-gradient-to-r bg-gray-100 dark:bg-gray-900 rounded-sm text-center overflow-hidden cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className={`relative z-10 sm:max-w-full xs:max-w-full top-5 flex flex-row-reverse items-center justify-center gap-5  transition-all duration-500 ease-in-out transform ${
              isTransitioning
                ? "translate-x-full opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            <div>{carouselItems[currentIndex].icon}</div>
            <div>
              <h3 className="mt-4 text-2xl md:text-2xl sm:text-sm xs:text-sm text-end font-bold text-gray-800 dark:text-white">
                {carouselItems[currentIndex].title}
              </h3>
              <p className="mt-2 text-end md:text-lg sm:text-xs xs:text-xs text-gray-600 dark:text-gray-400">
                {carouselItems[currentIndex].description}
              </p>
            </div>
          </div>

          <br />

          <div
            className={`relative z-10 top-5 sm:max-w-full xs:max-w-full flex flex-row items-center justify-center gap-5 transition-all duration-500 ease-in-out transform ${
              isTransitioning
                ? "translate-x-[-100%] opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            <div>{carouselItemsTwo[currentIndex].icon}</div>
            <div>
              <h3 className="mt-4 text-2xl md:text-2xl sm:text-sm xs:text-sm text-start font-bold text-gray-800 dark:text-white">
                {carouselItemsTwo[currentIndex].title}
              </h3>
              <p className="mt-2 text-start md:text-lg sm:text-xs xs:text-xs text-gray-600 dark:text-gray-400">
                {carouselItemsTwo[currentIndex].description}
              </p>
            </div>
          </div>

          <br />

          <div
            className={`relative z-10 top-5 sm:max-w-full xs:max-w-full flex flex-row-reverse items-center justify-center gap-5  transition-all duration-500 ease-in-out transform ${
              isTransitioning
                ? "translate-x-full opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            <div>{carouselItems[currentIndex].icon}</div>
            <div>
              <h3 className="mt-4 text-2xl md:text-2xl sm:text-sm xs:text-sm text-end font-bold text-gray-800 dark:text-white">
                {carouselItems[currentIndex].title}
              </h3>
              <p className="mt-2 text-end md:text-lg sm:text-xs xs:text-xs   text-gray-600 dark:text-gray-400">
                {carouselItems[currentIndex].description}
              </p>
            </div>
          </div>
          <br />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent dark:bg-gray-700">
            <div
              className="h-1 bg-gray-800 dark:bg-white"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessSection;
