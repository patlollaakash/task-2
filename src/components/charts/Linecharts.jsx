import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  // Define the chart data
  const data = {
    labels: ["January", "February", "march", "april", "may", "june", "july"],
    datasets: [
      {
        data: [3, 5, 4, 9, 8, 12, 16, 12, 10], // No label
        fill: false,
        backgroundColor: "white", // Red background color for points
        borderColor: "#4caf50", // Red color for the line
        tension: 0.2, // Optional: Smooth out the line
      },
    ],
  };

  // Define the chart options
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false, // Disable the legend to hide the label
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
