import React from "react";
import FeatureList from "./extra-page/feature-list"

function Features() {
  return (
    <div className="relative h-auto flex flex-col items-center justify-center text-start p-8 border-b">
      <div className="text-center mb-10">
        <h2 className="text-5xl p-8">Edge GATEWAY : Key Features</h2>
      </div>
      <div>
        <FeatureList />
      </div>
    </div>
  );
}

export default Features;
