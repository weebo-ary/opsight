import { CheckCircleOutlined } from "@ant-design/icons";
import React from "react";

function WhyUsSection() {

    const blobsData = [
    {
      title: "Advanced AI",
      description: "Utilizing cutting-edge AI to provide actionable insights.",
      color: "#9FD2C7",
    },
    {
      title: "Manufacturing Focused",
      description:
        "Tailored solutions for manufacturing industries. Gives us Insights",
      color: "#FFD700",
    },
    {
      title: "Real-time Analytics",
      description: "Get insights in real-time for better decision making.",
      color: "#FF9AA2",
    },
    {
      title: "Data-driven",
      description: "Leverage manufacturing data for continuous improvement.",
      color: "#A0CED9",
    },
    {
      title: "Scalable Solutions",
      description: "Grow with flexible and scalable AI-driven platforms.",
      color: "#F5A623",
    },
    {
      title: "Experienced Team",
      description: "Led by a team with deep industry expertise.",
      color: "#FFC0CB",
    },
  ];

  return (
    <div className="mx-8 my-10 p-5">
      <div className="">
        <div className="">
          <h2 className="text-center md:text-center sm:text-start xs:text-start text-5xl md:text-5xl sm:text-3xl xs:text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
            Why
            <span className="relative inline-block ml-2">
              Us ?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1576 141"
                fill="#9FD2C7"
              >
                <path d="M153.58 20.56c54.61 7.77 11.57 2.06 114.89 15.59 13.33 1.74 90.26 10.48 91.36 10.58 134.57 12.96 190.69 18.5 388.54 25.15 129.22 1.29 93.08 1.1 154.55.57 81.39-.71 59.62-.04 125.55-4.57 63.95-4.4 45.79-3.03 63.95-4.82 122.74-12.1 74.45-6.7 196.81-22.16.11-.01 87.68-12.88 144.71-23.82l59.43-11.39c1.85-.35 3.34 1.62 4.26 2.89 5.62 7.81 7.57 23.36 5.18 27.51 24.07-1.73 36.84-3.04 53.78-2.26 2.94.14 5.88.72 8.79 1.14 7.63 2.7 13.25 29.31 8.37 33.57a11.5 11.5 0 0 1-6.34 3.04 61.01 61.01 0 0 1-21.5 10.23c-4.78 1.12-7.26 1.09-26.8 2.32-26.15 1.64-20.08 2.59-70.36 10.41-124.17 19.35-260.96 36.26-386.48 42.12-203.77 9.49-418.63-.99-621.76-19.77C188.84 102.05 36.15 75.18 30.07 74.7a10.51 10.51 0 0 1-4.75-1.64c-1.91-1.23-3.06-3.52-4.14-5.42-5.56-9.8-6.47-22.79-4.73-27.16-2.45-1.29-4.88-2.65-7.33-3.91C4.2 34.06-2.72 12.7 1.11 4.47c.85-1.32 1.61-2.4 2.71-3.52C4.57.19 5.83 0 6.95 0c7.42 0 128.62 17.94 146.63 20.56Z"></path>
              </svg>
            </span>
          </h2>
        </div>
        <div className="">
          <p className="text-3xl md:text-3xl sm:text-xl xs:text-xl text-center md:text-center sm:text-start xs:text-start text-gray-600 dark:text-gray-400">
            Coupled with our machine monitoring technology, our solutions pave
            the way for data-driven decision-making, predictive maintenance, and
            enhanced operational excellence.
          </p>
        </div>
      </div>
      <div className=""></div>
      <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-5 mt-10">
          {blobsData.map((blob, index) => (
            <div
              key={index}
              className="relative p-6 rounded-lg shadow-md overflow-hidden flex items-center justify-start bg-white dark:bg-gray-900"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                  <CheckCircleOutlined className="text-black dark:text-white text-2xl" />
                </div>
              </div>

              {/* Blob Content */}
              <div className="relative z-10 text-start ml-4">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {blob.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  {blob.description}
                </p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default WhyUsSection
