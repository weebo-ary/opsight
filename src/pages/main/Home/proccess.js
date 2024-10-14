import React, { useState, useEffect, useRef } from "react";
import {
  CheckCircleOutlined,
  ThunderboltOutlined,
  DatabaseOutlined,
  ToolOutlined,
  CloudDownloadOutlined,
  MonitorOutlined,
  RadarChartOutlined,
  BarChartOutlined,
  NumberOutlined,
} from "@ant-design/icons";

function ProcessSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isZoomedIn, setIsZoomedIn] = useState(false); // State to control zoom animation

  const sectionRef = useRef(null);

  // Define the array of carousel items
  const carouselItems = [
    {
      icon: <ThunderboltOutlined className="text-4xl text-blue-500" />,
      title: "Line Monitoring",
      description:
        "Real-time tracking ensures efficiency, quality, workflow-optimization and quick issue identification for productivity.",
    },
    {
      icon: <RadarChartOutlined className="text-4xl text-blue-500" />,
      title: "Machine Performance Monitoring",
      description:
        "Track operational metrics such as speed, efficiency, and downtime to optimize productivity.",
    },
    {
      icon: <BarChartOutlined className="text-4xl text-blue-500" />,
      title: "Predictive Maintenance ",
      description:
        "Forecast equipment failures before they occur, minimizing unexpected downtime and enhancing reliability and reduces overall maintenance costs.",
    },
  ];

  const carouselItemsTwo = [
    {
      icon: <DatabaseOutlined className="text-4xl text-blue-500" />,
      title: " Incident Resolution",
      description:
        "Offers troubleshooting guidance/assistance for operational issues, minimizing downtime and enhancing overall machine performance.",
    },
   
    {
      icon: <CloudDownloadOutlined className="text-4xl text-blue-500" />,
      title: "Data Analytics",
      description:
        "Transforms raw performance metrics into actionable insights, enabling informed decision-making for optimization.",
    },
    {
      icon: <NumberOutlined className="text-4xl text-blue-500" />,
      title: "Customised Industry 4.0 solutions",
      description:
        "Tailor advanced technologies like IoT, AI, and automation to meet specific industry needs, enhancing operational efficiency.",
    },
  ];

  const carouselItemsThree = [
    {
      icon: <CheckCircleOutlined className="text-4xl text-blue-500" />,
      title: "Production Monitoring",
      description:
        "Ensure real-time tracking of output, product count to enable quick identification of bottlenecks.",
    },
    {
      icon: <ToolOutlined className="text-4xl text-blue-500" />,
      title: "Energy Monitoring",
      description:
        "Tracks power consumption in real time, providing insights into efficiency and operational costs",
    },
   
    {
      icon: <MonitorOutlined className="text-4xl text-blue-500" />,
      title: "CNC Monitoring",
      description:
        "Real-time tracking of CNC machines enhances precision, productivity, and reduces errors through metric analysis.",
    },
  ];

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

  // IntersectionObserver for zoom effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsZoomedIn(true); // Zoom in when section is in view
          } else {
            setIsZoomedIn(false); // Zoom out when section leaves view
          }
        });
      },
      { threshold: 0.2 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`mx-8 xs:mx-4 flex md:flex-row sm:flex-col lg:mt-10 lg:mb-10 xs:flex-col sm:mt-10 xs:mt-0 bg-gray-100 dark:bg-gray-900 p-10 rounded-lg transform transition-transform duration-700 ${
        isZoomedIn ? "scale-100" : "scale-90 opacity-50"
      }`} // Apply zoom in/out and opacity based on scroll
    >
      <div className="absolute bottom-30 left-30 w-64 min-h-screen bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      <div className="flex flex-col items-start justify-center gap-10">
        <div className="">
          <h2 className="text-5xl md:text-5xl sm:text-3xl xs:text-3xl text-gray-900 dark:text-white">
            Digitize Your <span className="text-orange-500">Processes</span> And
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
        {/* <div className="">
          <div className="">
            <Link to="/cnc-monitoring">
              <button className="px-6 py-3 bg-slate-600 dark:bg-white text-white dark:text-black font-medium rounded-lg shadow hover:bg-gray-700 transition">
                Learn more <ArrowRightOutlined className="ml-2" />
              </button>
            </Link>
          </div>
        </div> */}
      </div>
      <div className="flex flex-col xs:max-w-full items-center justify-center">
        <div
          className="relative w-144 md:w-144 sm:max-w-full xs:max-w-full p-6 bg-gradient-to-r bg-gray-100 dark:bg-gray-900 rounded-sm text-center overflow-hidden cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex flex-col xs:max-w-full items-center justify-center">
            <div
              className="relative w-144 md:w-144 sm:max-w-full xs:max-w-full p-6 bg-gradient-to-r bg-gray-100 dark:bg-gray-900 rounded-sm text-center overflow-hidden cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`z-10 sm:max-w-full xs:max-w-full top-5 flex flex-row-reverse items-center justify-center gap-5  transition-all duration-500 ease-in-out transform ${
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
                <div>{carouselItemsThree[currentIndex].icon}</div>
                <div>
                  <h3 className="mt-4 text-2xl md:text-2xl sm:text-sm xs:text-sm text-end font-bold text-gray-800 dark:text-white">
                    {carouselItemsThree[currentIndex].title}
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
          <br />
        </div>
      </div>
    </div>
  );
}

export default ProcessSection;
