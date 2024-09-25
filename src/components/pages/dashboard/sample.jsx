import React, { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
} from "react-simple-maps";
import { Tooltip } from "react-tooltip";
import EChartsComponent from "../../charts/Barcharts";
import BarChart from "../../charts/Barcharts";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const Dashboardpage = () => {
  const [tooltipContent, setTooltipContent] = useState("");

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-lg-6">
              <div
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "400px",
                  margin: "0 auto",
                }}
              >
                <ComposableMap>
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
                            default: { fill: "#7dda4b" }, // Green color for the map
                            hover: { fill: "white" }, // Darker green on hover
                            pressed: { fill: "#003300" }, // Even darker green on press
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
            {/* <div className="col-lg-3">kaash</div> */}
            <div className="col-lg-6">
              <div className="card rounded-3 ">
                <div class="card-body">
                  {/* <EChartsComponent /> */}

                  <BarChart />
                  <p>Tool Will Song</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
    </div>
  );
};

export default Dashboardpage;
