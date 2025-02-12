import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const MainMap = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <div>
      <ComposableMap>
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => {
              const isSelected = selectedCountry === geo.id;
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => setSelectedCountry(geo.id)}
                  style={{
                    default: {
                      fill: isSelected ? "#FF5733" : "#D6D6DA",
                      stroke: "#000",
                      outline: "none",
                    },
                    hover: {
                      fill: "#A8A8A8",
                      stroke: "#000",
                      outline: "none",
                    },
                    pressed: {
                      fill: "#FF5733",
                      stroke: "#000",
                      outline: "none",
                    },
                  }}
                  onFocus={(e) => e.target.blur()} // Prevents focus outline
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MainMap;
