import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
} from "react-simple-maps";
import { Tooltip } from "react-tooltip";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

function Worldmap() {
  const [tooltipContent, setTooltipContent] = useState("");
  return (
    <div className="">
      <div
        className=""
        style={{
          width: "100%",
          margin: "0 auto",
        }}
      >
        <ComposableMap className="chart-world-map">
          <Graticule stroke="#fff" />
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.id}
                  geography={geo}
                  onMouseEnter={() => {
                    const { NAME } = geo.properties; // Adjust according to the properties in your data
                    setTooltipContent(NAME);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  data-tip={tooltipContent} // Set tooltip content here
                  data-for="my-tooltip" // Associate with the tooltip
                  style={{
                    default: { fill: "#BBFE8F" }, // Green color for the map
                    hover: { fill: "white" }, // Darker green on hover
                    pressed: { fill: "#BBFE8F" }, // Even darker green on press
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
        <Tooltip
          id="my-tooltip" // Match this ID with data-for in Geography
          place="top"
          effect="solid"
          style={{
            backgroundColor: "red",
            color: "white",
            borderRadius: "5px",
            padding: "5px",
            zIndex: 10,
          }}
        />
      </div>
    </div>
  );
}

export default Worldmap;
