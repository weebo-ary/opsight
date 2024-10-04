import {SettingOutlined } from "@ant-design/icons";
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
            Why Us ?
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
                  <SettingOutlined className="text-black dark:text-white text-2xl animate-spin" />
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
