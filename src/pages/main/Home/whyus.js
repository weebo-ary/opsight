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
    <div className="py-16 lg:h-100 xs:h-160 xs:py-5 md:px-12 xl:mb-0 md:mb-0 bg-white dark:bg-gray-800 relative overflow-hidden">
      <div className="mx-auto px-4 relative z-10">
        <h2 className="text-center text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
        <span className="relative inline-block">
              Why Us?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1418 125"
                fill="#9FD2C7"
              >
                <path d="M1412.29 72.17c-11.04-5.78-20.07-14.33-85.46-25.24-22.37-3.63-44.69-7.56-67.07-11.04-167.11-22.06-181.65-21.24-304.94-30.56C888.78 1.39 822.57 1.1 756.44 0c-46.63-.11-93.27 1.56-139.89 2.5C365.5 13.55 452.86 7.68 277.94 23.15 202.57 33.32 127.38 45.01 52.07 55.69c-11.23 2.41-22.63 4.17-33.71 7.22C6.1 66.33 5.64 66.19 3.89 67.79c-7.99 5.78-2.98 20.14 8.72 17.5 33.99-9.47 32.28-8.57 178.06-29.66 4.26 4.48 7.29 3.38 18.42 3.11 13.19-.32 26.38-.53 39.56-1.12 53.51-3.81 106.88-9.62 160.36-13.95 18.41-1.3 36.8-3.12 55.21-4.7 23.21-1.16 46.43-2.29 69.65-3.4 120.28-2.16 85.46-3.13 234.65-1.52 23.42.99 1.57-.18 125.72 6.9 96.61 8.88 200.92 27.94 295.42 46.12 40.87 7.91 116.67 23.2 156.31 36.78 3.81 1.05 8.28-.27 10.51-3.58 3.17-3.72 2.66-9.7-.78-13.13-3.25-3.12-8.14-3.44-12.18-5.08-17.89-5.85-44.19-12.09-63.67-16.56l26.16 3.28c23.02 3.13 46.28 3.92 69.34 6.75 10.8.96 25.43 1.81 34.34-4.39 2.26-1.54 4.86-2.75 6.21-5.27 2.76-4.59 1.13-11.06-3.59-13.68ZM925.4 23.77c37.64 1.4 153.99 10.85 196.64 14.94 45.95 5.51 91.89 11.03 137.76 17.19 24.25 4.77 74.13 11.21 101.72 18.14-11.87-1.15-23.77-1.97-35.65-3.06-133.46-15.9-266.8-33.02-400.47-47.21Z"></path>
              </svg>
            </span>
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
