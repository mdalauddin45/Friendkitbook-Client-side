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
      <div className="flex py-5">
        <div className="hidden lg:block w-[20%]">
          <LeftSideNav />
        </div>
        <div className="lg:w-[60%] w-full">
          <Outlet />
        </div>
        <div className="hidden  lg:block w-[20%]">
          <RightSideNav />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Main;
