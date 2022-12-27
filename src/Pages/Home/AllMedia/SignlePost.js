import React, { useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { addComment } from "../../../api/ImageUpload";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import SmallSpinner from "../../../components/Spinner/SmallSpinner";
import { AuthContext } from "../../../contexts/AuthProvider";
import Reaction from "./Reaction/Reaction";
import { format } from "date-fns";
import { useEffect } from "react";
import { comment } from "postcss";

const SignlePost = ({ post }) => {
  const { loading, user } = useContext(AuthContext);
  const [resendComment, setResendComment] = useState([]);
  // console.log(post);
  const { authorName, authorImage, date, time, _id } = post;
  const handleSubmit = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    // console.log(comment);
    const commentData = {
      commentText: comment,
      userImage: user?.photoURL,
      userName: user?.displayName,
      _id,
      time: format(new Date(), "p"),
      date: format(new Date(), "PP"),
    };
    // console.log(commentData);
    addComment(commentData).then((data) => {
      console.log(data);
      toast.success("Comment Successfuly !");
      event.target.reset();
    });
  };
  useEffect(() => {
    fetch(`http://localhost:5000/comment/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        setResendComment(data);
      });
  }, []);
  console.log();
  const rescentComment = { ...resendComment?.slice(0) };
  console.log(rescentComment[0]?.comment?.commentText);

  return (
    <div className="py-5 mx-3">
      <div className="flex flex-col max-w-[810px] mx-auto p-6 space-y-6 overflow-hidden rounded-lg shadow-md ">
        <div className="flex items-center justify-between p-3">
          <div className="flex items-center space-x-2">
            <img
              src={authorImage}
              alt=""
              className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-700"
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
          <button title="Open options" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M256,144a64,64,0,1,0-64-64A64.072,64.072,0,0,0,256,144Zm0-96a32,32,0,1,1-32,32A32.036,32.036,0,0,1,256,48Z"></path>
              <path d="M256,368a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,368Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,464Z"></path>
              <path d="M256,192a64,64,0,1,0,64,64A64.072,64.072,0,0,0,256,192Zm0,96a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,288Z"></path>
            </svg>
          </button>
        </div>
        {post?.image && post?.posttext ? (
          <>
            <h1>
              {post?.posttext?.slice(0, 300) + "..."}
              <Link to={`/media/${_id}`}>see more</Link>
            </h1>
            <Link to={`/media/${_id}`}>
              <img
                src={post?.image}
                alt=""
                className="object-cover object-center w-full h-[500px]  bg-gray-500"
              />
            </Link>
          </>
        ) : (
          <>
            <h1>{post?.posttext}</h1>
          </>
        )}

        <div className="">
          <div className="flex border justify-evenly">
            <Reaction />
            <Link>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
            </Link>

            <button
              type="button"
              title="Bookmark post"
              className="flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-5 h-5 fill-current"
              >
                <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap items-center pt-3 pb-1">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-1">
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800"
                  src="https://source.unsplash.com/40x40/?portrait?1"
                />
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800"
                  src="https://source.unsplash.com/40x40/?portrait?2"
                />
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full dark:bg-gray-500 dark:border-gray-800"
                  src="https://source.unsplash.com/40x40/?portrait?3"
                />
              </div>
              <span className="text-sm">
                Liked by
                <span className="font-semibold">Mamba UI</span>and
                <span className="font-semibold">86 others</span>
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm ">
              <span>{rescentComment[0]?.comment?.userName}</span>
              <span>{rescentComment[0]?.comment?.commentText}</span>
            </p>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                required
                name="comment"
                placeholder="Add a comment..."
                className="w-full py-2 px-2 dark:bg-transparent border-none rounded text-sm  text-gray-900"
              />
              <PrimaryButton
                type="submit"
                classes="w-full mt-2 px-8 py-3 font-semibold rounded-md  "
              >
                {loading ? <SmallSpinner /> : "Post comment"}
              </PrimaryButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignlePost;
