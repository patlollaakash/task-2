import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Fragment>
      <nav
        className="navbar navbar-expand-lg text-white navbar-custom navbar-dark"
        aria-label="Offcanvas navbar large"
      >
        <div className="container-fluid justify-content-between px-2 px-lg-3">
          <Link to="#" className="navbar-brand">
            SRAICET<span className="dot-icon">.</span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar2"
            aria-controls="offcanvasNavbar2"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end text-bg-white"
            id="offcanvasNavbar2"
            aria-labelledby="offcanvasNavbar2Label"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close btn-close-dark"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body dark flex-column flex-lg-row justify-content-lg-end">
              <div className="d-flex justify-content-around">
                <div className="items">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                    <li className="nav-item px-0"></li>
                    <li className="nav-item px-0">
                      <Link className="nav-link my-assets" to="#">
                        My Assets
                      </Link>
                    </li>
                    <li className="nav-item px-0">
                      <Link className="nav-link" to="#">
                        Trade
                      </Link>
                    </li>
                    <li className="nav-item px-0">
                      <Link className="nav-link" to="#">
                        Earn
                      </Link>
                    </li>
                    <li className="nav-item px-0">
                      <Link className="nav-link" to="#">
                        Rewards
                      </Link>
                    </li>
                    <li className="nav-item px-0">
                      <Link className="nav-link" to="#">
                        Web3
                      </Link>
                    </li>
                    <li className="nav-item px-0">
                      <Link className="nav-link" to="#">
                        News
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}
export default Header;
