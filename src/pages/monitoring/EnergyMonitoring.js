import React from 'react'
import EngBanner from "./Banner/EnergyBanner"
import EngFeatures from "./Feature/EnergyFeature"
import EngAdv from "./Advantages/EngAdv"
import Connect from "../extra-pages/connect"


function EnergyMonitoring() {
  return (
    <div>
        <EngBanner />
        <EngAdv />
        <EngFeatures />
        <Connect />
    </div>
  )
}

export default EnergyMonitoring