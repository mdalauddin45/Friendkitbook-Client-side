import React from "react";
import LeftSideNav from "../Shared/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav";
import PostWrite from "./Posts/PostWrite";

const Home = () => {
  return (
    <div>
      <div className="flex py-5">
        <div className="hidden lg:block w-[20%]">
          <LeftSideNav />
        </div>
        <div className="lg:w-[60%] w-full">
          <PostWrite />
        </div>
        <div className="hidden  lg:block w-[20%]">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
