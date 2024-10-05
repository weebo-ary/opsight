import React from 'react'
import CncBanner from "./Banner/CncBanner"
import CncFeatures from "./Feature/CncFeature"
import CncAdv from "./Advantages/CncAdv"
import Connect from "../extra-pages/connect"

function CncMonitoring() {
  return (
    <div>
        <CncBanner />
        <CncAdv />

        <CncFeatures />
        <Connect />
    </div>
  )
}

export default CncMonitoring