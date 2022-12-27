import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Detail = () => {
  const postData = useLoaderData();
  console.log(postData);
  const { authorName, authorImage, date, time, _id } = postData;
  return (
    <div>
      <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row md:flex-row">
        {postData?.image && (
          <img
            src={postData?.image}
            alt=""
            className="lg:w-[70%] md:w-[70%] "
          />
        )}
        <div className="flex flex-col  flex-1 p-6 ">
          <div className="flex items-center space-x-2">
            <img
              src={authorImage}
              alt=""
              className="object-cover object-center w-10 h-10 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
            />
            <div className="-space-y-1">
              <h2 className="text-sm font-semibold leading-none">
                {authorName}
              </h2>
              <span className="inline-block text-xs leading-none dark:text-gray-400">
                {date} {time}
              </span>
            </div>
          </div>
          <div className="py-3">
            {postData.posttext && <h1>{postData?.posttext}</h1>}
          </div>
          <h3 className="text-3xl font-bold">
            We're not reinventing the wheel
          </h3>
          <p className="my-6 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            aliquam possimus quas, error esse quos.
          </p>
          <button type="button" className="self-start">
            Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
