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
      <div className="flex justify-between">
        <div className="hidden md:block lg:block w-[342px]">
          <LeftSideNav />
        </div>
        <div>
          <Outlet />
        </div>
        <div className="hidden md:block lg:block w-[342px]">
          <RightSideNav />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
