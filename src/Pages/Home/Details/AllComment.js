import React from "react";
import { Link } from "react-router-dom";

function AllComment({ comment }) {
  const { userName, userImage, commentText, date, time } = comment.comment;
  return (
    <div>
      <div className="flex space-x-4 py-3">
        <img
          alt=""
          src={userImage}
          className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
        />
        <div className="flex flex-col space-y-1">
          <Link
            rel="noopener noreferrer"
            to="/"
            className="text-sm font-semibold"
          >
            {userName}
          </Link>
          <span className="text-xs dark:text-gray-400">{commentText}</span>
          <span className="text-xs dark:text-gray-400">
            {date} {time}
          </span>
        </div>
      </div>
    </div>
  );
}

export default AllComment;
