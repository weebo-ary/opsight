import React, { useEffect, useRef, useState } from "react";
import {
    AlertOutlined,
    ApartmentOutlined,
    AreaChartOutlined,
  FieldTimeOutlined,
  RetweetOutlined,
  SlidersOutlined,
} from "@ant-design/icons";

const features = [
  {
    icon: <FieldTimeOutlined style={{ fontSize: "3rem" }} />,
    title: "Real Time Monitoring",
    description: "Operation Parameters, Cycle Time, Part Count etc.",
  },
  {
    icon: <AreaChartOutlined style={{ fontSize: "3rem" }} />,
    title: "Production Analytics",
    description: "Yield, Utilization, OEE",
  },
  {
    icon: <RetweetOutlined style={{ fontSize: "3rem" }} />,
    title: "Automated Reporting",
    description: "Shift Reports, Program History",
  },
  {
    icon: <ApartmentOutlined style={{ fontSize: "3rem" }} />,
    title: "Flexible Deployment",
    description: "On-Prem, Cloud",
  },
  {
    icon: <SlidersOutlined style={{ fontSize: "3rem" }} />,
    title: "Predictive Analytics",
    description: "Downtime Tracking, Tool Life Prediction",
  },
  {
    icon: <AlertOutlined style={{ fontSize: "3rem" }} />,
    title: "Alert Notifications",
    description: "Machine Alarms, Anomaly Detection",
  },
];

// Reusable Feature Item component
const FeatureItem = ({ icon, title, description, isVisible }) => (
  <div
    className={`text-center transition-transform duration-700 ease-in-out transform ${
      isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
    }`}
  >
    <h2>{icon}</h2>
    <h2 className="md:text-xl sm:text-sm xs:text-sm font-semibold border-b md:mb-2 sm:mb-3 xs:mb-3">{title}</h2>
    <p className="md:text-sm xs:text-xs sm:text-xs text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

function FeatureList() {
  const featureRefs = useRef([]);
  const [visibleFeatures, setVisibleFeatures] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.getAttribute("data-index");
          setVisibleFeatures((prevVisible) => {
            const updatedVisible = [...prevVisible];
            updatedVisible[index] = entry.isIntersecting;
            return updatedVisible;
          });
        });
      },
      { threshold: 0.3 } // Trigger when 30% of the item is visible
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-20 p-8 lg:w-220">
      {features.map((feature, index) => (
        <div
          key={index}
          ref={(el) => (featureRefs.current[index] = el)}
          data-index={index}
        >
          <FeatureItem
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            isVisible={visibleFeatures[index]}
          />
        </div>
      ))}
    </div>
  );
}

export default FeatureList;
