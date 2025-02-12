import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const MainMap = () => (
  <div>
    <ComposableMap>
      <Geographies geography="/features.json">
        {({ geographies }) => {

          return geographies.map((geo) => (
            <Geography 
              key={geo.rsmKey} 
              geography={geo}   
              style={{
                default: { fill: "#D6D6DA", stroke: "none", outline: "none" },
              }}
              onFocus={(e) => e.target.blur()} // Prevents focus outline
            />
          ));
        }}
      </Geographies>
    </ComposableMap>
  </div>
);

export default MainMap;
