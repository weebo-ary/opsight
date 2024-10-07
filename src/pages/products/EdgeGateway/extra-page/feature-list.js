import React, { useEffect, useRef, useState } from "react";
import {
  BorderOuterOutlined,
  BranchesOutlined,
  BulbOutlined,
  ClockCircleOutlined,
  ExportOutlined,
  ImportOutlined,
  InsertRowAboveOutlined,
  LinuxOutlined,
  PicCenterOutlined,
  PicLeftOutlined,
  PicRightOutlined,
  PoweroffOutlined,
  RadarChartOutlined,
  SisternodeOutlined,
  UsbOutlined,
} from "@ant-design/icons";

const features = [
  {
    icon: <RadarChartOutlined style={{ fontSize: "3rem" }} />,
    title: "Processor",
    description: "Quad-core ARM CPU ( 2.4GHz)",
  },
  {
    icon: <BorderOuterOutlined style={{ fontSize: "3rem" }} />,
    title: "Ethernet Port",
    description: "Gigabit Ethernet with PoE support",
  },
  {
    icon: <UsbOutlined style={{ fontSize: "3rem" }} />,
    title: "USB Port",
    description: "Multiple USB 3.0 and 2.0",
  },
  {
    icon: <PoweroffOutlined style={{ fontSize: "3rem" }} />,
    title: "Power Supply",
    description: "5V DC power",
  },
  {
    icon: <PicCenterOutlined style={{ fontSize: "3rem" }} />,
    title: "RAM",
    description: "4GB / 8GB",
  },
  {
    icon: <PicLeftOutlined style={{ fontSize: "3rem" }} />,
    title: "RS232 Port",
    description: "Yes",
  },
  {
    icon: <PicRightOutlined style={{ fontSize: "3rem" }} />,
    title: "RS485 Port",
    description: "Yes",
  },
  {
    icon: <ImportOutlined style={{ fontSize: "3rem" }} />,
    title: "Digital Input",
    description: "Configurable digital inputs",
  },
  {
    icon: <ExportOutlined style={{ fontSize: "3rem" }} />,
    title: "Digital Output",
    description: "Configurable digital outputs",
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
    <h2 className="text-xl font-semibold border-b mb-2">{title}</h2>
    <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
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