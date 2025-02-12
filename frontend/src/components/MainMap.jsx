import React from "react";
import ReactDOM from "react-dom";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import "../styles/main.scss";

const MainMap = () => (
  <div>
    <ComposableMap>
      <Geographies geography="https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json">
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography 
              key={geo.rsmKey} 
              geography={geo}   
              style={{
                default: { fill: "#D6D6DA", stroke: "#000", outline: "none" },
                hover: { fill: "#F53", cursor: "pointer" },
                pressed: { fill: "#E42", outline: "none", stroke: "none"},
              }}
              onFocus={(e) => {
                e.preventDefault();
                e.target.style.outline = 'none';
                e.target.style.stroke = 'none';
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  </div>
);

export default MainMap;

