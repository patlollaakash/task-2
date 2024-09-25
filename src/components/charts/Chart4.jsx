import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const ChartsComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Generate day-wise time series data on component mount
    const series = generateDayWiseTimeSeries(
      new Date("22 Apr 2017").getTime(),
      115,
      { min: 30, max: 90 }
    );
    setData(series);
  }, []);

  const generateDayWiseTimeSeries = (baseval, count, yrange) => {
    const series = [];
    let i = 0;
    while (i < count) {
      const x = baseval;
      const y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      series.push([x, y]);
      baseval += 86400000; // Increment by 1 day (in milliseconds)
      i++;
    }
    return series;
  };

  // Area chart options
  const options1 = {
    chart: {
      id: "chart2",
      type: "area",
      height: 230,
      foreColor: "#ccc",
      toolbar: {
        autoSelected: "pan",
        show: false,
      },
    },
    colors: ["#00BAEC"],
    stroke: {
      width: 3,
    },
    grid: {
      borderColor: "#555",
      clipMarkers: false,
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      gradient: {
        enabled: true,
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    markers: {
      size: 5,
      colors: ["#000524"],
      strokeColor: "#00BAEC",
      strokeWidth: 3,
    },
    series: [{ data }],
    tooltip: {
      theme: "dark",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      min: 0,
      tickAmount: 4,
    },
  };

  // Bar chart options
  const options2 = {
    chart: {
      id: "chart1",
      height: 130,
      type: "bar",
      foreColor: "#ccc",
      brush: {
        target: "chart2",
        enabled: true,
      },
      selection: {
        enabled: true,
        fill: {
          color: "#fff",
          opacity: 0.4,
        },
        xaxis: {
          min: new Date("27 Jul 2017 10:00:00").getTime(),
          max: new Date("14 Aug 2017 10:00:00").getTime(),
        },
      },
    },
    colors: ["#FF0080"],
    series: [{ data }],
    stroke: {
      width: 2,
    },
    grid: {
      borderColor: "#444",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      tickAmount: 2,
    },
  };

  return (
    <div>
      <div id="chart-area">
        <Chart
          options={options1}
          series={options1.series}
          type="area"
          height={230}
        />
      </div>
      <div id="chart-bar">
        <Chart
          options={options2}
          series={options2.series}
          type="bar"
          height={130}
        />
      </div>
    </div>
  );
};

export default ChartsComponent;
