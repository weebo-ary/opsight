import { CheckCircleOutlined } from "@ant-design/icons";
import React from "react";

const WhyUsSection = () => {
  // Define the data for the blobs
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
    <div className="py-16 h-100 md:h-100 xs:h-150 xs:py-5 bg-white dark:bg-gray-800 relative overflow-hidden">
      <div className="mx-auto px-4 relative z-10">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
          Why Us?
        </h2>
        <div className="xs:w-full flex items-center justify-center">
          <p className="md:w-1/2 xs:w-full text-center text-lg text-gray-600 dark:text-gray-400 mb-12">
            Opsight AI Pvt Ltd is a Manufacturing Analytics (Industrial-AI,
            SAAS) Startup. Manufacturing generates the largest volume of data
            amongst all sectors, which often remains siloed in shop floors &
            seldom used.
          </p>
        </div>

        {/* Blob grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
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

      {/* Decorative Animated Elements (behind the cards) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Cluster of circles */}
        <div className="absolute top-40 left-5 blur-sm">
          <svg width="50" height="50">
            <circle cx="10" cy="10" r="10" fill="#FFD700" />
            <circle cx="30" cy="30" r="8" fill="#9FD2C7" />
            <circle cx="40" cy="10" r="6" fill="#FF9AA2" />
          </svg>
        </div>

        {/* Additional circles for the background */}
        <div className="absolute bottom-82 left-40 animate-float blur-sm">
          <svg width="80" height="80">
            <circle cx="40" cy="40" r="30" fill="#FF9AA2" />
            <circle cx="20" cy="20" r="10" fill="#9FD2C7" />
            <circle cx="60" cy="60" r="10" fill="#FFD700" />
          </svg>
        </div>

        <div className="absolute top-32 right-28 blur-sm">
          <svg width="70" height="70">
            <circle cx="35" cy="35" r="20" fill="#A0CED9" />
            <circle cx="50" cy="50" r="15" fill="#F5A623" />
          </svg>
        </div>


        {/* Small Dots Cluster */}
        <div className="absolute top-1/4 left-44 blur-sm ">
          <svg width="150" height="100">
            {Array.from({ length: 4 }).map((_, rowIndex) =>
              Array.from({ length: 6 }).map((_, colIndex) => (
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
        <div className="absolute bottom-32 left-20 animate-float blur-sm">
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

export default WhyUsSection;
