import React from "react";
import Chart from "react-apexcharts";

const BarChart = () => {
  const options = {
    series: [
      {
        name: "Series 1",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Series 2",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Series 3",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    chart: {
      type: "bar",
      height: 1,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "100%",
        endingShape: "rounded",
      },
    },
    // colors: ["white", "white", "white"],
    colors: ["#BBFE8F", "#BBFE8F", "#BBFE8F"], // Set stroke color for the lines

    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      // colors: ["red", "red", "red"], // Set stroke color for the lines
      colors: ["#BBFE8F", "#BBFE8F", "#BBFE8F"], // Set stroke color for the lines
    },
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
      ],
      labels: {
        style: {
          colors: "white",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "white",
        },
      },
      title: {
        text: "Thousands ($)",
        rotate: -90,
        offsetX: 10,
        style: {
          color: "white",
          fontSize: "12px",
          fontWeight: "bold",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
      marker: {
        show: false,
      },
    },
    responsive: [
      {
        breakpoint: 320,
        options: {
          chart: {
            height: 300,
            width: 210,
          },
          xaxis: {
            labels: {
              style: {
                fontSize: "10px",
              },
            },
          },
          yaxis: {
            title: {
              style: {
                fontSize: "14px",
              },
            },
            labels: {
              style: {
                fontSize: "14px",
              },
            },
          },
        },
      },
      {
        breakpoint: 375,
        options: {
          chart: {
            height: 300,
            width: 230,
          },
          xaxis: {
            labels: {
              style: {
                fontSize: "10px",
              },
            },
          },
          yaxis: {
            title: {
              style: {
                fontSize: "14px",
              },
            },
            labels: {
              style: {
                fontSize: "14px",
              },
            },
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          chart: {
            height: 200,
            width: 300,
          },
          xaxis: {
            labels: {
              style: {
                fontSize: "10px",
              },
            },
          },
          yaxis: {
            title: {
              style: {
                fontSize: "10px",
              },
            },
            labels: {
              style: {
                fontSize: "10px",
              },
            },
          },
        },
      },
      {
        breakpoint: 767.9,
        options: {
          chart: {
            height: 250,
            width: 600,
          },
          xaxis: {
            labels: {
              style: {
                fontSize: "12px",
              },
            },
          },
          yaxis: {
            title: {
              style: {
                fontSize: "12px",
              },
            },
            labels: {
              style: {
                fontSize: "12px",
              },
            },
          },
        },
      },
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
            width: 170,
          },
          xaxis: {
            labels: {
              style: {
                fontSize: "10px",
              },
            },
          },
          yaxis: {
            title: {
              style: {
                fontSize: "14px",
              },
            },
            labels: {
              style: {
                fontSize: "14px",
              },
            },
          },
        },
      },
    ],
  };

  return (
    <div className="data-box bg-dark p-0 mb-0">
      <div className="row">
        <div className="col-12">
          <div>
            <Chart
              options={options}
              series={options.series}
              type="bar"
              height={220}
              width={270}
            />
          </div>
          <div className="your-songs d-flex justify-content-between px-3">
            <div>
              <p className="new-songs green-text">
                Your we Songs
                <br />
                Newee Songs
              </p>
            </div>
            <div className="next-button-symbol mt-2 text-white">
              <i className="bi bi-chevron-left"></i>
            </div>
          </div>
          <hr className="mx-3 text-white" />
          <div className="play-list d-flex justify-content-around pb-5">
            <div
              className="next-button"
              style={{
                width: "50px",
                height: "50px",
                lineHeight: "50px",
                borderRadius: "50%",
                textAlign: "center",
                border: "1px solid #BBFE8F",
                background: "#BBFE8F",
              }}
            >
              <i className="bi bi-skip-forward-fill text-dark"></i>
            </div>
            <div
              className="play-button"
              style={{
                width: "50px",
                height: "50px",
                lineHeight: "50px",
                borderRadius: "50%",
                textAlign: "center",
                border: "1px solid #BBFE8F",
                background: "#BBFE8F",
              }}
            >
              <i className="bi bi-play-fill text-dark"></i>
            </div>
            <div
              className="favorite-button"
              style={{
                width: "50px",
                height: "50px",
                lineHeight: "50px",
                borderRadius: "50%",
                textAlign: "center",
                border: "1px solid #ff5722",
                background: "#ff5722",
              }}
            >
              <i className="bi bi-heart-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
