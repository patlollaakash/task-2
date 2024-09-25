import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Dashboardpage from "../pages/dashboard/Dashboardpage";
function MainLyout() {
  return (
    <div>
      <Header />
      <Dashboardpage />
      <Outlet />
    </div>
  );
}

export default MainLyout;
