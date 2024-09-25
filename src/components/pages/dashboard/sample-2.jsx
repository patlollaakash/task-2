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

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

const Dashboardpage = () => {
  const [tooltipContent, setTooltipContent] = useState("");

  return (
    <div>
      <div class="container-fluid">
        <div class="row dashboard-container">
          <div class="col-md-12 col-lg-8 col-12">
            <div class="data-box">
              <div class="header p-3">
                <h6 class="mb-0"></h6>
                <span class="small-text">0.437</span>
              </div>
              <div className="row">
                <div className="col-md-6 col-lg-6 col-12">
                  <Worldmap />
                </div>
                <div className=" col-md-2 col-lg-2 col-12">
                  <div class="bg-dark time-logo">
                    <img
                      src="https://www.shutterstock.com/image-vector/futuristic-scifi-glowing-hud-time-600nw-2178210153.jpg"
                      className="img-fluid  h-100"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-md-4 col-lg-4 col-12">
                  <div class="bg-dark">
                    <BarChart />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-4 col-12">
            <div class="data-box">
              <div class="header px-4 p-3">
                <h6 class="mb-0">M CCTTTT TCCCFFF 3000</h6>
                <span class="small-text">4.463</span>
              </div>
              <div class="chart-container">
                {/* <canvas id="mainChart"></canvas> */}
                <LineChart />
              </div>
              <div class="row mt-2">
                <div class="col-12">
                  <p class=" line-chart-text mb-0 text-center">
                    CCCCCCD DDDDDE EEEEE
                  </p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-12 col-12">
                <div class="data-box-1">
                  <div class="header px-4 p-3">
                    <h6 class="mb-0">M TCCCFFF </h6>
                    <span class="small-text   ">My information</span>
                    <span class="small-text badge rounded-pill bg-white text-dark  ">
                      4
                    </span>
                  </div>
                  <div class="row mt-2">
                    <div class="col-6 d-flex justify-content-end">
                      <img
                        src="https://t3.ftcdn.net/jpg/05/59/87/12/360_F_559871209_pbXlOVArUal3mk6Ce60JuP13kmuIRCth.jpg"
                        alt=""
                        className="img-fluid my-information-image"
                        width={75}
                      />
                    </div>
                    <div className="col-6 d-flex  flex-column gap-2 justify-content-between">
                      <span className="green-text">ABCDEFG</span>

                      <span className="green-text">ABCDEF</span>
                      <span className="green-text">ABCDRR</span>
                      {/* <br /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row dashboard-container">
          <div class="col-md-12 col-lg-6 col-12">
            <div class="data-box-2">
              <div class="header bg-dark  p-3">
                <h6 class="mb-0">PETE ATTTOTO GGR EMM</h6>
                <span class="small-text">0.437</span>
              </div>
              <div className="row px-3">
                <div className="col-md-6 col-lg-6 col-12">
                  <div class="">
                    <h6 className="text-start">ABCDEFG</h6>
                    <div className="mb-1">DSAEF</div>
                  </div>
                  <div className="data-box-3 rounded">
                    <div className="d-flex justify-content-between p-0">
                      <div className="px-1">
                        <span className="green-text">ABCD</span> EFCG
                      </div>
                      <div className="px-1">ASDFG</div>
                    </div>
                    <p className=" px-1 numeric-number mb-0">4567854dddd</p>
                    <p className=" px-1 numeric-number">4567854dddd</p>
                    <div className="gap-1 d-flex justify-content-around  aws-content">
                      <div className="px-1 col-3">
                        <i class="bi bi-trash"></i>
                      </div>
                      <div className="px-1 col-3">AWS</div>
                      <div className="px-1 col-3">170</div>
                      <div className="px-2 col-3">30</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-12">
                  <div class="">
                    <h6 className="text-start">ABCDEFG</h6>
                    <div className="d-flex justify-content-around">
                      <div></div>
                      <div>DCFR</div>
                      <div>DCFR</div>
                    </div>
                  </div>
                  <div className="data-box-3 rounded">
                    <div className="d-flex justify-content-between p-0 heading-for-main">
                      <div className="px-1">!!!!!!!!!!!!!!!!!</div>
                      <div className="px-1">ASDFG</div>
                    </div>
                    <div className="gap-1 d-flex justify-content-around">
                      <div className="px-1 col-4">
                        <div>
                          <p className=" numeric-value mb-0">AAAA</p>
                          <p className=" numeric-value mb-0">AAAA</p>
                          <p className=" numeric-value mb-0">AAAA</p>
                          <p className=" numeric-value mb-0">AAAA</p>
                          <div className="progress-bar1 mb-1"></div>
                          <p className=" numeric-value mb-1">AAA</p>
                        </div>
                      </div>
                      <div className="px-1 col-4">
                        <div>
                          <p className="numeric-value mb-0">BBBB</p>
                          <p className=" numeric-value mb-0">BBBB</p>
                          <p className="numeric-value mb-0">BBBB</p>
                          <p className="numeric-value mb-0">BBBB</p>
                          <div className="progress-bar2 mb-1"></div>
                          <p className="numeric-value mb-1">BBB</p>
                        </div>
                      </div>
                      <div className="px-1 col-4">
                        <div>
                          <p className=" numeric-value mb-0">CCCC</p>
                          <p className=" numeric-value mb-0">CCCC</p>
                          <p className=" numeric-value mb-0">CCCC</p>
                          <p className=" numeric-value mb-0">CCCC</p>
                          {/* <div
                            className="progress mx-2"
                            style={{ height: "10px" }}
                          >
                            <div
                              className="progress-bar "
                              style={{ width: "100%", background: "red" }}
                            ></div>
                          </div> */}
                          <div className="progress-bar3 mb-1"></div>
                          <p className=" numeric-value mb-1">CCC</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h6>Main</h6>

                <div className="col-md-6 col-lg-6 col-12">
                  <div class="">
                    {/* <h6 className="text-start">ABCDEFG</h6> */}
                    {/* <div className="mb-1">DSAEF</div> */}
                  </div>
                  <div className="data-box-3 rounded">
                    <div className="d-flex justify-content-between p-0 ">
                      <div className="px-1">
                        <span className="green-text">ABCD</span> EFCG
                      </div>
                      <div className="px-1">ASDFG</div>
                    </div>
                    <p className=" px-1 numeric-number mb-0">4567854dddd</p>
                    <p className=" px-1 numeric-number">4567854dddd</p>
                    <div className="gap-1 d-flex justify-content-around aws-content">
                      <div className="px-1 col-3">
                        <i class="bi bi-trash"></i>
                      </div>
                      <div className="px-1 col-3">AWS</div>
                      <div className="px-1 col-3">170</div>
                      <div className="px-2 col-3">30</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-12">
                  <div class="">
                    {/* <h6 className="text-start">ABCDEFG</h6> */}
                    {/* <div className="d-flex justify-content-around">
                      <div></div>
                      <div>DCFR</div>
                      <div>DCFR</div>
                    </div> */}
                  </div>
                  <div className="data-box-3 rounded">
                    <div className="d-flex justify-content-between p-0 heading-for-main">
                      <div className="px-1">!!!!!!!!!!!!!!!!!</div>
                      <div className="px-1">ASDFG</div>
                    </div>
                    <div className="gap-1 d-flex justify-content-around">
                      <div className="px-1 col-4">
                        <div>
                          <p className=" numeric-value mb-0">AAAA</p>
                          <p className=" numeric-value mb-0">AAAA</p>
                          <p className=" numeric-value mb-0">AAAA</p>
                          <p className=" numeric-value mb-0">AAAA</p>
                          <div className="progress-bar1 mb-1"></div>
                          <p className=" numeric-value mb-1">AAA</p>
                        </div>
                      </div>
                      <div className="px-1 col-4">
                        <div>
                          <p className="numeric-value mb-0">BBBB</p>
                          <p className=" numeric-value mb-0">BBBB</p>
                          <p className="numeric-value mb-0">BBBB</p>
                          <p className="numeric-value mb-0">BBBB</p>
                          <div className="progress-bar2 mb-1"></div>
                          <p className="numeric-value mb-1">BBB</p>
                        </div>
                      </div>
                      <div className="px-1 col-4">
                        <div>
                          <p className=" numeric-value mb-0">CCCC</p>
                          <p className=" numeric-value mb-0">CCCC</p>
                          <p className=" numeric-value mb-0">CCCC</p>
                          <p className=" numeric-value mb-0">CCCC</p>
                          <div className="progress-bar3 mb-1"></div>
                          <p className=" numeric-value mb-1">CCC</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-2 col-12">
            <div class="data-box ">
              <div class="header">
                <h6 class="mb-0">M 3000</h6>
                <span class="small-text"> To sample 4.463</span>

                <span class="small-text">4.463</span>
              </div>
              <div class="">{/* <TimeSeriesChart /> */}</div>
            </div>
          </div>
          <div class="col-md-12 col-lg-4 col-12">
            <div class="data-box-4">
              <div class="header bg-dark  p-3">
                <div className="centered-block w-100">
                  <button class="btn btn-custom mb-3  rounded-pill">
                    BUY TLT
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="data-box-5 ">
                <div className="table-responsive">
                  <table class="table table-hover bg-dark ">
                    <thead>
                      <tr></tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <p className="green-text">ABCDEF</p>
                          <p>lorem</p>
                        </td>
                        <td className="text-muted">table-hover</td>
                        <td className="text-white">john@example.com</td>
                      </tr>
                      <tr>
                        <td className="green-text">Mary</td>
                        <td className="text-muted">Moe</td>
                        <td className="text-white">mary@example.com</td>
                      </tr>
                      <tr>
                        <td className="green-text">July</td>
                        <td className="text-muted">Dooley</td>
                        <td className="text-white">july@example.com</td>
                      </tr>

                      <tr>
                        <td className="green-text">July</td>
                        <td className="text-muted">Dooley</td>
                        <td className="text-white">july@example.com</td>
                      </tr>
                      <tr>
                        <td className="green-text">July</td>
                        <td className="text-muted">Dooley</td>
                        <td className="text-white">july@example.com</td>
                      </tr>
                      <tr>
                        <td className="green-text">July</td>
                        <td className="text-muted">Dooley</td>
                        <td className="text-white">july@example.com</td>
                      </tr>
                      <tr>
                        <td className="green-text">July</td>
                        <td className="text-muted">Dooley</td>
                        <td className="text-white">july@example.com</td>
                      </tr>
                    </tbody>
                  </table>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardpage;
