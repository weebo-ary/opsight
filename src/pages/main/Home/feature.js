import React, { useState } from "react";
import {
  CheckCircleOutlined,
  ThunderboltOutlined,
  ToolOutlined,
  UpOutlined,
  DownOutlined,
  DatabaseOutlined,
  RightOutlined,
} from "@ant-design/icons";
import FeatureImage from "../../../assets/Illustration/business-profit-1e734b0bc4702700164807fcef06532a.png"
import { Link } from "react-router-dom";

const FeatureSection = () => {
    const features = [
        {
          title: 'Performance Monitoring',
          description:
            'Continuous Monitoring and Immediate Data Analysis for Real-time Insights.',
          icon: <CheckCircleOutlined />,
          viewMoreData: '/performance-monitoring',
        },
        {
          title: 'Predictive Analytics',
          description:
            'Unlock the Future with Predictive Analytics: Where Data Meets Destiny.',
          icon: <ThunderboltOutlined />,
          viewMoreData: '/predictive-analytics',
        },
        {
          title: 'Customised Solutions',
          description: 'Your Vision, Our Precision: Custom Solutions Redefined!',
          icon: <DatabaseOutlined />,
          viewMoreData: '/customised-solutions',
        },
        {
          title: 'Incident Assistant',
          description:
            'Empower your teams to efficiently resolve incidents by providing insights and solutions based on system data.',
          icon: <ToolOutlined />,
          viewMoreData: '/incident-assistant',
        },
      ];
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  const handleViewMore = (event, viewMoreData) => {
    event.stopPropagation(); 
    console.log('Navigating to:', viewMoreData); 
  };

  return (
    <div className="py-16 xs:py-5 bg-white dark:bg-transparent">
      <div className="mx-auto px-4">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Our<span className="relative inline-block ml-2">Solutions
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1576 141" fill="#9FD2C7"><path d="M153.58 20.56c54.61 7.77 11.57 2.06 114.89 15.59 13.33 1.74 90.26 10.48 91.36 10.58 134.57 12.96 190.69 18.5 388.54 25.15 129.22 1.29 93.08 1.1 154.55.57 81.39-.71 59.62-.04 125.55-4.57 63.95-4.4 45.79-3.03 63.95-4.82 122.74-12.1 74.45-6.7 196.81-22.16.11-.01 87.68-12.88 144.71-23.82l59.43-11.39c1.85-.35 3.34 1.62 4.26 2.89 5.62 7.81 7.57 23.36 5.18 27.51 24.07-1.73 36.84-3.04 53.78-2.26 2.94.14 5.88.72 8.79 1.14 7.63 2.7 13.25 29.31 8.37 33.57a11.5 11.5 0 0 1-6.34 3.04 61.01 61.01 0 0 1-21.5 10.23c-4.78 1.12-7.26 1.09-26.8 2.32-26.15 1.64-20.08 2.59-70.36 10.41-124.17 19.35-260.96 36.26-386.48 42.12-203.77 9.49-418.63-.99-621.76-19.77C188.84 102.05 36.15 75.18 30.07 74.7a10.51 10.51 0 0 1-4.75-1.64c-1.91-1.23-3.06-3.52-4.14-5.42-5.56-9.8-6.47-22.79-4.73-27.16-2.45-1.29-4.88-2.65-7.33-3.91C4.2 34.06-2.72 12.7 1.11 4.47c.85-1.32 1.61-2.4 2.71-3.52C4.57.19 5.83 0 6.95 0c7.42 0 128.62 17.94 146.63 20.56Z"></path></svg>
          </span>
        </h2>
        <div className="xs:w-full flex items-center justify-center">
          <p className="md:w-1/2 xs:w-full text-center text-lg text-gray-600 dark:text-gray-400 mb-12">
            Coupled with our machine monitoring technology, our solutions pave
            the way for data-driven decision-making, predictive maintenance, and
            enhanced operational excellence.
          </p>
        </div>
        <div className="gap-5 flex flex-col xs:flex-col-reverse md:flex-row">
        <div className="md:w-1/2 xs:w-96 mt-8 md:mt-0 md:pl-12">
            <img
              src={FeatureImage}
              alt="Placeholder"
              className="w-128 md:w-128 xs:w-96 h-auto rounded-lg"
            />
          </div>
          <div className="md:w-1/2 space-y-4 mt-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-4 bg-white dark:bg-transparent rounded-lg cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl text-blue-400">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">
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
                        onClick={(event) => handleViewMore(event, feature.viewMoreData)} // Pass the specific link or data
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
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        </div> */}
      </div>
    </div>
  );
};

export default FeatureSection;
