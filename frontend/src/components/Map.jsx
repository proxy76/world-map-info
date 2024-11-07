import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React from "react";
import Popup from './Popup';
function WorldMap() {
  return (
    <div className='map'>
      <VectorMap
        map={worldMill}
        containerStyle={{
          width: "700px",
          height: "600px",
        }}
        backgroundColor="#282c34"
        onRegionTipShow={function (event, label, code) {
            const regionName = label.html(); // Get the region's name (e.g., "United States")
            const regionCode = code; // Get the region's code (e.g., "US")
            
            console.log(regionName, regionCode);
            // You can display a tooltip with the name and code
            <Popup country={regionName} />

          }}
      />

    
    </div>
  );
}

export default WorldMap;