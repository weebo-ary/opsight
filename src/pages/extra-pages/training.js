import React from "react";
import Tr1 from "../../assets/Illustration/tr1.png";
import Tr2 from "../../assets/Illustration/tr2.png";
import Tr3 from "../../assets/Illustration/tr3.png";
import Tr4 from "../../assets/Illustration/tr4.png";
import Tr5 from "../../assets/Illustration/tr5.png";
import Tr6 from "../../assets/Illustration/tr6.png";
import Tr7 from "../../assets/Illustration/74.png";
import Tr8 from "../../assets/Illustration/tr8.png";
import Tr9 from "../../assets/Illustration/tr9.png";
import Tr10 from "../../assets/Illustration/tr10.png";
import Tr11 from "../../assets/Illustration/tr11.png";
import Tr12 from "../../assets/Illustration/tr12.png";
import Tr13 from "../../assets/Illustration/tr13.png";
import Tr14 from "../../assets/Illustration/tr14.png";
import Tr15 from "../../assets/Illustration/tr15.png";
import Tr16 from "../../assets/Illustration/tr16.png";
import Tr17 from "../../assets/Illustration/tr17.png";
import Tr18 from "../../assets/Illustration/tr18.png";
import Tr19 from "../../assets/Illustration/tr19.png";


function TrainingIndustry40() {
  const sections = [
    {
      title: "Introduction to Industry 4.0 Technologies",
      points: [
        {
          image: Tr1, // Replace with your actual image import or URL
          description: "Overview of Industry 4.0 technologies",
        },
        {
          image: Tr2, // Replace with your actual image import or URL
          description: "Role of different technologies in Industry 4.0",
        },
      ],
    },
    {
      title: "Industrial Automation",
      points: [
        {
          image: Tr3, // Replace with your actual image import or URL
          description: "Pneumatics, Electro-Pneumatics",
        },
        {
          image: Tr4, // Replace with your actual image import or URL
          description: "PLC Programming",
        },
        {
          image: Tr5, // Replace with your actual image import or URL
          description: "Smart Sensing",
        },
        {
          image: Tr6, // Replace with your actual image import or URL
          description: "Visualization – HMI",
        },
        {
          image: Tr7, // Replace with your actual image import or URL
          description: "Machine Programming on Simulated Platform",
        },
      ],
    },
    {
      title: "IIOT – Industrial Internet of Things",
      points: [
        {
          image: Tr8, // Replace with your actual image import or URL
          description: "Overview of IIOT",
        },
        {
          image: Tr9, // Replace with your actual image import or URL
          description: "Data Connectivity – Communication Protocols, Data types",
        },
        {
          image: Tr10, // Replace with your actual image import or URL
          description: "Remote Dashboard",
        },
        {
          image: Tr11, // Replace with your actual image import or URL
          description: "Database Connectivity",
        },
        {
          image: Tr12, // Replace with your actual image import or URL
          description: "IIOT Platforms – Hands On on Node Red",
        },
      ],
    },
    {
      title: "Machine Learning and Artificial Intelligence",
      points: [
        {
          image: Tr13, // Replace with your actual image import or URL
          description: "Introduction to ML and AI",
        },
        {
          image: Tr14, // Replace with your actual image import or URL
          description: "Applications and Impacts of ML/AI",
        },
        {
          image: Tr15, // Replace with your actual image import or URL
          description: "Types of Algorithms: linear regression, decision trees, k-nearest neighbours, etc.",
        },
        {
          image: Tr16, // Replace with your actual image import or URL
          description: "Evaluation Metrics",
        },
        {
          image: Tr17, // Replace with your actual image import or URL
          description: "Data Pre-processing – Collection and Cleaning, Handling values and outliers",
        },
        {
          image: Tr18, // Replace with your actual image import or URL
          description: "Model Development – Model Training and validation, overfitting vs under-fitting",
        },
        {
          image: Tr19, // Replace with your actual image import or URL
          description: "Deep Learning",
        },
      ],
    },
  ];
  

  return (
    <div className="h-auto bg-white dark:bg-gray-800 flex flex-col items-center justify-center p-4 transition">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-6xl transition">
        <h1 className="text-6xl md:text-5xl xs:text-3xl text-start font-bold mb-20 text-gray-800 dark:text-gray-100">
          Training - Industry 4.0 Technologies
        </h1>

        <div className="space-y-6">
          {/* Mapping through each section */}
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              {/* Section Title */}
              <h2 className="text-3xl xs:text-2xl text-start font-bold text-gray-700 dark:text-gray-100 mb-4">
                {section.title}
              </h2>

              {/* Cards for each point */}

              <div className="grid md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-4 border-t-2">
                {section.points.map((point, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white  flex flex-col items-center justify-center mt-10 hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer dark:bg-gray-700 rounded-lg text-center shadow-lg"
                  >
                    <img src={point.image} alt={point.title} className="w-64 border-b mb-10" />
                    <p className="text-gray-700 dark:text-gray-300">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrainingIndustry40;
