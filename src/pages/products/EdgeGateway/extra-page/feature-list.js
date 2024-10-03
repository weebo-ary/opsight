import React from 'react'
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

function FeatureList() {
  return (
    <div className="grid grid-cols-5 md:grid-cols-5 sm:grid-cols-2 xs:grid-cols-2 gap-20 p-4 max-w-5xl">
        <div className="text-center">
          <h2 className="text-xl ">
            <RadarChartOutlined style={{ fontSize: "3rem" }} />
          </h2>
          <h2 className="text-xl font-semibold border-b">Processor</h2>
          <h2 className="text-sm ">
            Broadcom BCM2712 2.4GHz quad-core 64-bit Arm Cortex-A76 CPU
          </h2>
        </div>
        <div className="text-center">
          <h2 className="text-md">
            <BorderOuterOutlined style={{ fontSize: "3rem" }} />
          </h2>
          <h2 className="text-xl font-semibold border-b">Ethernet Port</h2>
          <h2 className="text-sm">
            Gigabit Ethernet, with PoE+ support (requires separate PoE+ HAT)
          </h2>
        </div>
        <div className="text-center">
          <h2 className="text-xl">
            <UsbOutlined style={{ fontSize: "3rem" }} />
          </h2>
          <h2 className="text-xl font-semibold border-b">USB Port</h2>
          <h2 className="text-sm">
            2 × USB 3.0 ports, supporting simultaneous 5Gbps operation, 2 × USB
            2.0 ports
          </h2>
        </div>
        <div className="text-center">
          <h2 className="text-xl">
            <ClockCircleOutlined style={{ fontSize: "3rem" }} />
          </h2>
          <h2 className="text-xl font-semibold border-b">Clock</h2>
          <h2 className="text-sm">
            Built-in real-time clock with battery backup
          </h2>
        </div>
        <div className="text-center">
          <h2 className="text-xl">
            <SisternodeOutlined style={{ fontSize: "3rem" }} />
          </h2>
          <h2 className="text-xl font-semibold border-b">Bluetooth</h2>
          <h2 className="text-sm">
            Built-in real-time clock with battery backup
          </h2>
        </div>
        <div className="text-center">
          <h2 className="text-xl">
            <BulbOutlined style={{ fontSize: "3rem" }} />
          </h2>
          <h2 className="text-xl font-semibold border-b">Indication</h2>
          <h2 className="text-sm">LED for Power Supply</h2>
        </div>
        <div className="text-center">
          <h2 className="text-xl">
            <InsertRowAboveOutlined style={{ fontSize: "3rem" }} />
          </h2>
          <h2 className="text-xl font-semibold border-b">Mounting</h2>
          <h2 className="text-sm">Wall Mounting</h2>
        </div>
        <div className="text-center">
          <h2 className="text-xl">
            <BranchesOutlined style={{ fontSize: "3rem" }} />
          </h2>
          <h2 className="text-xl font-semibold border-b">Memory</h2>
          <h2 className="text-sm">32GB (SD Card)/64GB (SD Card)</h2>
        </div>
        <div className="text-center">
          <h2 className="text-xl">
            <PoweroffOutlined style={{ fontSize: "3rem" }} />
          </h2>
          <h2 className="text-xl font-semibold border-b">Power Supply</h2>
          <h2 className="text-sm">5V/5A DC power  </h2>
        </div>
        <div className="text-center">
          <h2 className="text-xl">
            <PicCenterOutlined style={{ fontSize: "3rem" }} />
          </h2>
          <h2 className="text-xl font-semibold border-b">RAM</h2>
          <h2 className="text-sm">
            4GB / 8GB
          </h2>
        </div>
        <div className="text-center">
          <h2 className="text-xl">
            <LinuxOutlined style={{ fontSize: "3rem" }} />
          </h2>
          <h2 className="text-xl font-semibold border-b">OS</h2>
          <h2 className="text-sm">
            Linux
          </h2>
        </div>
        <div className="text-center">
          <h2 className="text-xl">
            <PicLeftOutlined style={{ fontSize: "3rem" }} />
          </h2>
          <h2 className="text-xl font-semibold border-b">RS232 Port</h2>
          <h2 className="text-sm">
            Yes
          </h2>
        </div>
        <div className="text-center">
          <h2 className="text-xl">
            <PicRightOutlined style={{ fontSize: "3rem" }} />
          </h2>
          <h2 className="text-xl font-semibold border-b">RS485 Port</h2>
          <h2 className="text-sm">
            Yes
          </h2>
        </div>
        <div className="text-center">
          <h2 className="text-xl">
            <ImportOutlined style={{ fontSize: "3rem" }} />
          </h2>
          <h2 className="text-xl font-semibold border-b">Digital Input</h2>
          <h2 className="text-sm">
            Yes
          </h2>
        </div>
        <div className="text-center">
          <h2 className="text-xl">
            <ExportOutlined style={{ fontSize: "3rem" }} />
          </h2>
          <h2 className="text-xl font-semibold border-b">Digital Output</h2>
          <h2 className="text-sm">
            Yes
          </h2>
        </div>
    </div>
  )
}

export default FeatureList