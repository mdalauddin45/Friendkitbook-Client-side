import React from "react";
import { Link } from "react-router-dom";

const Online = ({ user }) => {
  //   console.log(user);
  return (
    <div>
      <div className="flex space-x-4 py-3 ">
        <img
          alt=""
          src={user?.image ? user?.image : "https://i.pravatar.cc/300"}
          className="object-cover w-14 h-14 rounded-full shadow dark:bg-gray-500"
        />
        <div className="flex flex-col space-y-1">
          <Link
            rel="noopener noreferrer"
            to="/"
            className="text-sm font-semibold"
          >
            {user?.name}
          </Link>
          <div className="flex justify-between">
            <span className="text-xs dark:text-gray-400">Remove</span>
            <span className="text-xs dark:text-gray-400">Follow</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Online;
