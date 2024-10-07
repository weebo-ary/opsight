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
import FeatureImage from "../../../assets/Illustration/solutions-final.jpg";
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
          <h2 className="text-center md:text-center sm:text-start xs:text-start sm:mx-4 xs:mx-3 text-5xl md:text-5xl sm:text-3xl xs:text-3xl text-gray-900 dark:text-white mb-4">
            Our
            <span className="relative inline-block ml-2 ">
              Solutions
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
