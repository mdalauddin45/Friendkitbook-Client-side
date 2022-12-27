import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import LeftSideNav from "../Pages/Shared/LeftSideNav";
import Navbar from "../Pages/Shared/Navbar";
import RightSideNav from "../Pages/Shared/RightSideNav";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
