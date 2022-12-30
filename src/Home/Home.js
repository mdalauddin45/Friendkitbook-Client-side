import React from "react";
import CreatePost from "../Pages/CreactePost/CreatePost";
import Allpost from "../Pages/Home/AllMedia/Allpost";
import TopPost from "../Pages/Home/TopPost/TopPost";
import LeftSideNav from "../Pages/Shared/LeftSideNav";
import RightSideNav from "../Pages/Shared/RightSideNav";

const Home = () => {
  return (
    <div>
      <div className="flex py-5">
        <div className="hidden lg:block w-[20%] ">
          <LeftSideNav />
        </div>
        <div className="lg:w-[60%] w-full">
          <CreatePost />
          <TopPost />
        </div>
        <div className="hidden  lg:block w-[20%]">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
