import React from "react";
import AboutIllustration from "../../assets/Illustration/ourVision.png";
import MissionIllustration from "../../assets/Illustration/MissionIllustration.png";
import PulakImage from "../../assets/Images/Pulak.png";
import ArunImage from "../../assets/Images/Arun.png";
import DevanshImage from "../../assets/Images/devansha.png";
import RamImage from "../../assets/Images/ram1.jpeg";
import PrakashImage from "../../assets/Images/prakash.jpg";
import { LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import Banner from "../../assets/Illustration/about-banner.jpg"

const AboutUs = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      {/* First Section: Introduction */}
      <section className="h-auto relative py-16 bg-gradient-to-r from-white via-gray-100 to-white dark:from-gray-800 dark:via-gray-800 dark:to-gray-800">
      <img
        src={Banner}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30 dark:opacity-20"
      />
        <div className="absolute inset-0 bg-opacity-30"></div>
        <div className="mx-auto px-6 lg:px-8 relative z-10">
          <h1 className="text-center text-6xl font-extrabold text-gray-900 dark:text-white mb-6">
            OPSIGHT AI
          </h1>
          <p className="text-3xl text-gray-700 dark:text-gray-300 mx-auto text-center">
          Opsight AI Pvt Ltd is an Industrial-AIoT, SaaS Startup revolutionizing the way manufacturing companies harness data. At OpsightAI, we enable manufacturers to make smarter decisions, optimize operations & unlock their full manufacturing potential through intelligent data analytics.
          </p>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-500">
        <div className="mx-auto ">
          <div className=" grid grid-cols-1 md:grid-cols-1 gap-12">
            {/* Vision */}
            <div className="text-start flex flex-row items-center gap-20 justify-center">
              <img src={AboutIllustration} width={1000} alt="about-us"/>
              <div className="w-full">
                <h2 className="text-6xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                  Our Vision
                </h2>
                <p className="text-3xl text-gray-700 dark:text-gray-300">
                Enabling Indian manufacturers to achieve operational excellence & shift towards data-driven operations.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="text-start flex flex-row-reverse items-center justify-center">
              <img src={MissionIllustration} width={500} alt="mission" />
              <div className="w-full ml-8">
                <h2 className="text-6xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                  Our Mission
                </h2>
                <p className="text-3xl text-gray-700 dark:text-gray-300">
                Empowering manufacturers to leverage IIoT & AI/ML to make informed decisions through predictive insights & address their biggest operational concerns: **Equipment Downtime & Rework Costs.**
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 bg-gradient-to-r from-white via-gray-100 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 transition-colors duration-500">
        <div className="absolute top-42 right-96 blur-sm">
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
        <div className="absolute top-42 left-96 blur-sm">
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
        <div className="w-full mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
            Meet Our Founders
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Pulak Rijhwani */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:bg-gradient-to-l hover:from-gray-100 hover:via-gray-200 hover:to-white cursor-pointer dark:hover:from-gray-700 dark:hover:via-gray-800 dark:hover:to-gray-800">
              <img
                src={PulakImage}
                alt="Pulak Rijhwani"
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />

              <h3 className="text-center text-xl font-bold text-gray-900 dark:text-white mt-6">
                Pulak Rijhwani
              </h3>
              <div className="mt-4 flex justify-center space-x-6">
              <LinkedinOutlined /> <MailOutlined />
              </div>
             
            </div>

            {/* Arun Kumar */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:bg-gradient-to-l hover:from-gray-100 hover:via-gray-200 hover:to-white cursor-pointer dark:hover:from-gray-700 dark:hover:via-gray-800 dark:hover:to-gray-800">
              <img
                src={ArunImage}
                alt="Arun Kumar"
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />
              <h3 className="text-center text-xl font-bold text-gray-900 dark:text-white mt-6">
                Arun Kumar
              </h3>
              <div className="mt-4 flex justify-center space-x-6">
              <LinkedinOutlined /> <MailOutlined />
              </div>
              
            </div>
          </div>
        </div>
      </section>
      <div className="absolute bottom-82 left-40 animate-float blur-sm">
          <svg width="80" height="80">
            <circle cx="40" cy="40" r="30" fill="#FF9AA2" />
            <circle cx="20" cy="20" r="10" fill="#9FD2C7" />
            <circle cx="60" cy="60" r="10" fill="#FFD700" />
          </svg>
        </div>

        <div className="absolute top-42 right-28 blur-sm">
          <svg width="70" height="70">
            <circle cx="35" cy="35" r="20" fill="#A0CED9" />
            <circle cx="50" cy="50" r="15" fill="#F5A623" />
          </svg>
        </div>

      {/* Employees Section */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-500">
        <div className="w-200 w-full mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Employee 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:bg-gradient-to-l hover:from-gray-100 hover:via-gray-200 hover:to-white cursor-pointer dark:hover:from-gray-700 dark:hover:via-gray-800 dark:hover:to-gray-800">
              <img
                src={DevanshImage}
                alt="Devansha Shrivastava"
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />
              <h3 className="text-center text-xl font-bold text-gray-900 dark:text-white mt-6">
                Devansha Shrivastava
              </h3>
              <h3 className="text-center text-lg font-bold text-gray-600 dark:text-gray-200 mt-6">
                Project Manager
              </h3>
            </div>

            {/* Employee 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:bg-gradient-to-l hover:from-gray-100 hover:via-gray-200 hover:to-white cursor-pointer dark:hover:from-gray-700 dark:hover:via-gray-800 dark:hover:to-gray-800">
              <img
                src={RamImage}
                alt="Ramkaran Sherawat"
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />
              <h3 className="text-center text-xl font-bold text-gray-900 dark:text-white mt-6">
                Ramkaran Sherawat
              </h3>
              <h3 className="text-center text-lg font-bold text-gray-600 dark:text-gray-200 mt-6">
                Embedded Systems Engineer
              </h3>
            </div>

            {/* Employee 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-transform transform hover:scale-105 hover:bg-gradient-to-l hover:from-gray-100 hover:via-gray-200 hover:to-white cursor-pointer dark:hover:from-gray-700 dark:hover:via-gray-800 dark:hover:to-gray-800">
              <img
                src={PrakashImage}
                alt="Prakash Jadhav"
                className="w-32 h-32 rounded-full mx-auto object-cover"
              />
              <h3 className="text-center text-xl font-bold text-gray-900 dark:text-white mt-6">
                Prakash Jadhav
              </h3>
              <h3 className="text-center text-lg font-bold text-gray-600 dark:text-gray-200 mt-6">
                ML Intern
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
