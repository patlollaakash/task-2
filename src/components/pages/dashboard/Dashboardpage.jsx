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
import LineChart from "../../charts/Linecharts";
import Worldmap from "../../charts/Worldmap";
import TimeSeriesChart from "../../charts/Chart4";
import ChartsComponent from "../../charts/Chart4";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const Dashboardpage = () => {
  const [tooltipContent, setTooltipContent] = useState("");

  return (
    <div>
      <div className="container-fluid">
        <div className="row dashboard-container">
          <div className="col-md-12 col-lg-8 col-12">
            <div className="data-box">
              <p className="small-text text-end green-text">0.437</p>

              <div className="row">
                <div className="col-md-12 col-lg-7 col-12">
                  <Worldmap />
                </div>
                <div className=" col-md-12 col-lg-1 col-12">
                  <div className="bg-dark time-logo">
                    <img
                      src="https://www.shutterstock.com/image-vector/futuristic-scifi-glowing-hud-time-600nw-2178210153.jpg"
                      className="img-fluid  h-100"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-12 col-lg-4 col-12">
                  <BarChart />
                </div>
              </div>
              {/* <div className="row">
                <div className="col-md-6 col-lg-6 col-12">
                  <Worldmap />
                </div>
                <div className=" col-md-2 col-lg-2 col-12">
                  <div className="bg-dark time-logo">
                    <img
                      src="https://www.shutterstock.com/image-vector/futuristic-scifi-glowing-hud-time-600nw-2178210153.jpg"
                      className="img-fluid  h-100"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-12">
                  <div className="bg-dark">
                    <BarChart />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-md-12 col-lg-4 col-12">
            <div className="data-box">
              <div className="header d-flex justify-content-between">
                <h6 className="mb-0 text-white">M CCTTTT TCCCFFF 3000</h6>
                <span className="small-text text-white">4.463</span>
              </div>
              <div className="chart-container p-1">
                <LineChart />
              </div>
              <div className="row mt-2">
                <div className="col-12">
                  <p className=" line-chart-text mb-0 text-center">
                    SIMPLE BASIC CHARTS
                  </p>
                </div>
              </div>
            </div>
            <div className="card-box-2 bg-dark">
              <div className="mixed-card">
                <div className="row">
                  <div className="col-md-12 col-12">
                    <div className="data-box-1">
                      <div className=" px-4 mt-3 d-flex justify-content-between">
                        <h6 className="mb-0 text-white">M TCCCFFF </h6>
                        <span className="small-text text-white">
                          MY INFORMATION{" "}
                        </span>
                        <span className="small-text text-white">4</span>
                      </div>
                      <div className="row">
                        <div className="row mb-2">
                          <div className="col-6 text-end robot-image">
                            <i class="bi bi-robot text-success "></i>
                          </div>
                          <div className="col-6 tex-start">
                            <p className="green-text">ASDFCGRRR</p>
                            <p className="green-text">ASDDFF</p>
                          </div>
                        </div>
                        <span className="green-text text-center mb-2">
                          ABCDRRRR
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-3">
        <div class="row dashboard-container">
          <div class="col-md-12 col-lg-6 col-12">
            <div class="data-box-2">
              <div class="header-1 d-flex justify-content-between text-white bg-dark  p-3">
                <h6 class="mb-0">PETE ATTTOTO GGR EMM</h6>
                <span class="small-text">0.437</span>
              </div>
              <div className="row px-3 mt-2">
                <div className="col-md-6 col-lg-6 col-12">
                  <div class="">
                    <h6 className="text-start text-muted">NEWPAGE</h6>
                    <div className="mb-1 text-muted">PREVIOUSDATA</div>
                  </div>
                  <div className="data-box-3 rounded new-page">
                    <div className="d-flex justify-content-between p-0">
                      <div className="px-1">
                        <span className="green-text">PROFIT</span> &nbsp;
                        <span className="text-white">DATA</span>
                      </div>
                      <div className="px-1 text-white">ASDFG</div>
                    </div>
                    <p className=" px-1 numeric-number mb-0 text-white">
                      45678534354
                    </p>
                    <p className=" px-1 numeric-number text-white">
                      45678543545
                    </p>
                    <div className="gap-1 d-flex justify-content-around  aws-content text-white">
                      <div className="px-1 col-3">
                        <i class="bi bi-trash"></i>
                      </div>
                      <div className="px-1 col-3">AWS</div>
                      <div className="px-1 col-3">170</div>
                      <div className="px-2 col-3">30</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-12 ">
                  <div class="">
                    <h6 className="text-start text-muted">MAINPAGEDETAILS</h6>
                    <div className="d-flex justify-content-around">
                      <div></div>
                      <div className="text-muted">NEW</div>
                      <div className="text-muted ps-5">INFORMATION</div>
                    </div>
                  </div>
                  <div className="data-box-3 rounded new-page">
                    <div className="d-flex justify-content-between p-0 heading-for-main">
                      <div className="px-1 text-muted">!!!!!!!!!!!!!!!!!</div>
                      <div className="px-1 text-white">RECENT</div>
                    </div>
                    <div className="gap-1 d-flex justify-content-around">
                      <div className="px-1 col-4">
                        <div>
                          <p className=" numeric-value mb-0 text-white">AAAA</p>
                          <p className=" numeric-value mb-0 text-white">AAAA</p>
                          <p className=" numeric-value mb-0 text-white">AAAA</p>
                          <p className=" numeric-value mb-0 text-white">AAAA</p>
                          <div className="progress-bar1 mb-1"></div>
                          <p className=" numeric-value mb-1 text-white">AAAA</p>
                        </div>
                      </div>
                      <div className="px-1 col-4">
                        <div>
                          <p className="numeric-value mb-0 text-white">BBBB</p>
                          <p className=" numeric-value mb-0 text-white">BBBB</p>
                          <p className="numeric-value mb-0 text-white">BBBB</p>
                          <p className="numeric-value mb-0 text-white">BBBB</p>
                          <div className="progress-bar2 mb-1 "></div>
                          <p className="numeric-value mb-1 text-white">BBBB</p>
                        </div>
                      </div>
                      <div className="px-1 col-4">
                        <div>
                          <p className=" numeric-value mb-0 text-white ps-3">
                            CCCC
                          </p>
                          <p className=" numeric-value mb-0 text-white ps-3">
                            CCCC
                          </p>
                          <p className=" numeric-value mb-0 text-white ps-3">
                            CCCC
                          </p>
                          <p className=" numeric-value mb-0 text-white ps-3">
                            CCCC
                          </p>
                          <div className="progress-bar3 mb-1"></div>
                          <p className=" numeric-value mb-1 text-white ps-3">
                            CCCC
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h6 className="text-muted mt-2"> Main</h6>
                <div className="col-md-6 col-lg-6 col-12">
                  <div className="data-box-3 rounded new-page">
                    <div className="d-flex justify-content-between p-0">
                      <div className="px-1">
                        <span className="green-text">PROFIT</span> &nbsp;
                        <span className="text-white">DATA</span>
                      </div>
                      <div className="px-1 text-white">ASDFG</div>
                    </div>
                    <p className=" px-1 numeric-number mb-0 text-white">
                      45678534354
                    </p>
                    <p className=" px-1 numeric-number text-white">
                      45678543545
                    </p>
                    <div className="gap-1 d-flex justify-content-around  aws-content text-white">
                      <div className="px-1 col-3">
                        <i class="bi bi-trash"></i>
                      </div>
                      <div className="px-1 col-3">AWS</div>
                      <div className="px-1 col-3">170</div>
                      <div className="px-2 col-3">30</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-12 ">
                  <div class="mainpagedetail">
                    <h6 className="text-start text-muted">MAINPAGEDETAILS</h6>
                    <div className="d-flex justify-content-around">
                      <div></div>
                      <div className="text-muted">NEW</div>
                      <div className="text-muted ps-5">INFORMATION</div>
                    </div>
                  </div>
                  <div className="data-box-3 rounded new-page">
                    <div className="d-flex justify-content-between p-0 heading-for-main">
                      <div className="px-1 text-muted">!!!!!!!!!!!!!!!!!</div>
                      <div className="px-1 text-white">RECENT</div>
                    </div>
                    <div className="gap-1 d-flex justify-content-around">
                      <div className="px-1 col-4">
                        <div>
                          <p className=" numeric-value mb-0 text-white">AAAA</p>
                          <p className=" numeric-value mb-0 text-white">AAAA</p>
                          <p className=" numeric-value mb-0 text-white">AAAA</p>
                          <p className=" numeric-value mb-0 text-white">AAAA</p>
                          <div className="progress-bar1 mb-1"></div>
                          <p className=" numeric-value mb-1 text-white">AAAA</p>
                        </div>
                      </div>
                      <div className="px-1 col-4">
                        <div>
                          <p className="numeric-value mb-0 text-white">BBBB</p>
                          <p className=" numeric-value mb-0 text-white">BBBB</p>
                          <p className="numeric-value mb-0 text-white">BBBB</p>
                          <p className="numeric-value mb-0 text-white">BBBB</p>
                          <div className="progress-bar2 mb-1 "></div>
                          <p className="numeric-value mb-1 text-white">BBBB</p>
                        </div>
                      </div>
                      <div className="px-1 col-4">
                        <div>
                          <p className=" numeric-value mb-0 text-white ps-3">
                            CCCC
                          </p>
                          <p className=" numeric-value mb-0 text-white ps-3">
                            CCCC
                          </p>
                          <p className=" numeric-value mb-0 text-white ps-3">
                            CCCC
                          </p>
                          <p className=" numeric-value mb-0 text-white ps-3">
                            CCCC
                          </p>
                          <div className="progress-bar3 mb-1"></div>
                          <p className=" numeric-value mb-1 text-white ps-3">
                            CCCc
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-12 col-lg-3 col-12">
            <div class="data-box-2">
              <div class="header-1 d-flex justify-content-between text-white bg-dark  p-3">
                <h6 class="mb-0"> EMM</h6>
                <span class="small-text">PETE</span>
                <span class="small-text">0.437</span>
              </div>
              <div className="bg">
                <ChartsComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardpage;
