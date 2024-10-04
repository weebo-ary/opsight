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
    description: "Broadcom BCM2712 2.4GHz quad-core 64-bit Arm Cortex-A76 CPU",
  },
  {
    icon: <BorderOuterOutlined style={{ fontSize: "3rem" }} />,
    title: "Ethernet Port",
    description: "Gigabit Ethernet, with PoE+ support (requires separate PoE+ HAT)",
  },
  {
    icon: <UsbOutlined style={{ fontSize: "3rem" }} />,
    title: "USB Port",
    description: "2 × USB 3.0 ports, supporting simultaneous 5Gbps operation, 2 × USB 2.0 ports",
  },
  {
    icon: <ClockCircleOutlined style={{ fontSize: "3rem" }} />,
    title: "Clock",
    description: "Built-in real-time clock with battery backup",
  },
  {
    icon: <SisternodeOutlined style={{ fontSize: "3rem" }} />,
    title: "Bluetooth",
    description: "Bluetooth 5.0, BLE",
  },
  {
    icon: <BulbOutlined style={{ fontSize: "3rem" }} />,
    title: "Indication",
    description: "LED for Power Supply",
  },
  {
    icon: <InsertRowAboveOutlined style={{ fontSize: "3rem" }} />,
    title: "Mounting",
    description: "Wall Mounting",
  },
  {
    icon: <BranchesOutlined style={{ fontSize: "3rem" }} />,
    title: "Memory",
    description: "32GB (SD Card) / 64GB (SD Card)",
  },
  {
    icon: <PoweroffOutlined style={{ fontSize: "3rem" }} />,
    title: "Power Supply",
    description: "5V/5A DC power",
  },
  {
    icon: <PicCenterOutlined style={{ fontSize: "3rem" }} />,
    title: "RAM",
    description: "4GB / 8GB",
  },
  {
    icon: <LinuxOutlined style={{ fontSize: "3rem" }} />,
    title: "OS",
    description: "Linux",
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
    description: "Yes",
  },
  {
    icon: <ExportOutlined style={{ fontSize: "3rem" }} />,
    title: "Digital Output",
    description: "Yes",
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
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 p-8 max-w-7xl mx-auto">
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