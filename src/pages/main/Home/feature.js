import React, { useState, useRef, useEffect } from "react";
import {
  CheckCircleOutlined,
  ThunderboltOutlined,
  ToolOutlined,
  UpOutlined,
  DownOutlined,
  DatabaseOutlined,
  RightOutlined,
} from "@ant-design/icons";
import FeatureImage from "../../../assets/Illustration/solution-img.png";
import { Link } from "react-router-dom";

function SolutionSection() {
  const features = [
    {
      title: "Performance Monitoring",
      description:
        "Continuous Monitoring and Immediate Data Analysis for Real-time Insights.",
      icon: <CheckCircleOutlined />,
      viewMoreData: "/performance-monitoring",
    },
    {
      title: "Predictive Analytics",
      description:
        "Unlock the Future with Predictive Analytics: Where Data Meets Destiny.",
      icon: <ThunderboltOutlined />,
      viewMoreData: "/predictive-analytics",
    },
    {
      title: "Customised Solutions",
      description: "Your Vision, Our Precision: Custom Solutions Redefined!",
      icon: <DatabaseOutlined />,
      viewMoreData: "/customised-solutions",
    },
    {
      title: "Incident Assistant",
      description:
        "Empower your teams to efficiently resolve incidents by providing insights and solutions based on system data.",
      icon: <ToolOutlined />,
      viewMoreData: "/incident-assistant",
    },
  ];
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // Visibility state for on-scroll animation

  const sectionRef = useRef(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const handleViewMore = (event, viewMoreData) => {
    event.stopPropagation();
    console.log("Navigating to:", viewMoreData);
  };

  // IntersectionObserver for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.3, // Trigger when 30% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Fade in when the section is visible
        } else {
          setIsVisible(false); // Fade out when the section is not visible
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`mx-2 p-5 transition-opacity duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`} // Apply fade-in and fade-out animation based on visibility state
    >
      <div className="">
        <div className="">
          <h2 className="text-center md:text-center sm:text-start xs:text-start sm:mx-4 xs:mx-3 text-5xl md:text-5xl sm:text-3xl xs:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
            Our
            <span className="relative inline-block ml-2">
              Solutions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1576 141"
                fill="orange"
              >
                <path d="M153.58 20.56c54.61 7.77 11.57 2.06 114.89 15.59 13.33 1.74 90.26 10.48 91.36 10.58 134.57 12.96 190.69 18.5 388.54 25.15 129.22 1.29 93.08 1.1 154.55.57 81.39-.71 59.62-.04 125.55-4.57 63.95-4.4 45.79-3.03 63.95-4.82 122.74-12.1 74.45-6.7 196.81-22.16.11-.01 87.68-12.88 144.71-23.82l59.43-11.39c1.85-.35 3.34 1.62 4.26 2.89 5.62 7.81 7.57 23.36 5.18 27.51 24.07-1.73 36.84-3.04 53.78-2.26 2.94.14 5.88.72 8.79 1.14 7.63 2.7 13.25 29.31 8.37 33.57a11.5 11.5 0 0 1-6.34 3.04 61.01 61.01 0 0 1-21.5 10.23c-4.78 1.12-7.26 1.09-26.8 2.32-26.15 1.64-20.08 2.59-70.36 10.41-124.17 19.35-260.96 36.26-386.48 42.12-203.77 9.49-418.63-.99-621.76-19.77C188.84 102.05 36.15 75.18 30.07 74.7a10.51 10.51 0 0 1-4.75-1.64c-1.91-1.23-3.06-3.52-4.14-5.42-5.56-9.8-6.47-22.79-4.73-27.16-2.45-1.29-4.88-2.65-7.33-3.91C4.2 34.06-2.72 12.7 1.11 4.47c.85-1.32 1.61-2.4 2.71-3.52C4.57.19 5.83 0 6.95 0c7.42 0 128.62 17.94 146.63 20.56Z"></path>
              </svg>
            </span>
          </h2>
        </div>
        <div className="px-2">
          <p className="text-3xl md:text-3xl sm:text-xl xs:text-xl text-center md:text-center sm:text-start xs:text-start sm:mx-2 text-gray-600 dark:text-gray-400 mb-12">
            Coupled with our machine monitoring technology, our solutions pave
            the way for data-driven decision-making, predictive maintenance, and
            enhanced operational excellence.
          </p>
        </div>
      </div>
      <div className=" flex flex-row md:flex-row sm:flex-col xs:flex-col items-center justify-center gap-10 md:gap-10 sm:gap-10">
        <div className="">
          <img
            src={FeatureImage}
            alt="Placeholder"
            className="w-150 md:w-150 sm:w-96 xs:w-full rounded-3xl"
          />
        </div>
        <div className="w-1/2 md:w-1/2 sm:w-full xs:w-full flex flex-col gap-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-4 bg-white dark:bg-transparent flex flex-col rounded-lg cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl text-blue-400">{feature.icon}</div>
                  <h3 className="text-2xl lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-semibold text-black dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <div>
                  {expandedIndex === index ? (
                    <UpOutlined className="text-black dark:text-white" />
                  ) : (
                    <DownOutlined className="text-gray-400" />
                  )}
                </div>
              </div>
              {expandedIndex === index && (
                <div className="mt-4 text-gray-400">
                  <p>{feature.description}</p>
                  <div className="mt-4">
                    <Link
                      to={feature.viewMoreData}
                      onClick={(event) =>
                        handleViewMore(event, feature.viewMoreData)
                      }
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-500"
                    >
                      View More <RightOutlined className="ml-2" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SolutionSection;
