import React from 'react'
import RobotBanner from "./Banner/RobotBanner"
import RobotFeatures from "./Feature/RobotFeature"
import RobAdv from "./Advantages/RobAdv"
import Connect from "../extra-pages/connect"

function EnergyMonitoring() {
  return (
    <div>
        <RobotBanner />
        <RobotFeatures />
        <RobAdv />
        <Connect />
    </div>
  )
}

export default EnergyMonitoring