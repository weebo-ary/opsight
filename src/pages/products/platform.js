import React from 'react'
import Banner from "./Products/banner"
import Features from "./Products/features" 
import Solution from './Products/solution'
import TrustUs from './EdgeGateway/trustus'
import Connect from './EdgeGateway/connect'

function EdgeGateway() {
  return (
    <div>
      <Banner />
      <Features />
      <Solution />
      <TrustUs />
      <Connect />
    </div>
  )
}

export default EdgeGateway