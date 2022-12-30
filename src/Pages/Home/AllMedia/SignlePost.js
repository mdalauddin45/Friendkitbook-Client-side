import React, { useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { addComment } from "../../../api/ImageUpload";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import SmallSpinner from "../../../components/Spinner/SmallSpinner";
import { AuthContext } from "../../../contexts/AuthProvider";
import { format } from "date-fns";
import { useEffect } from "react";
import Heart from "../../../assets/Post/like.png";
import NotLike from "../../../assets/Post/notlike.png";
import AllComment from "../Details/AllComment";

const SignlePost = ({ post }) => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [resendComment, setResendComment] = useState([]);
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [likeImage, setLikeImage] = useState(NotLike);

  // console.log(post);
  const { authorName, authorImage, date, time, _id, likes } = post;
  console.log(post);
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

  // console.log(likes + 1);
  const handleLike = (id) => {
    // console.log(id);
    const likeData = {
      likes: likeCount + likes,
    };
    if (like) {
      setLike(false);
      setLikeImage(NotLike);
      setLikeCount(likeCount - 1);
    } else {
      setLike(true);
      setLikeImage(Heart);
      setLikeCount(likeCount + 1);
    }

    fetch(`http://localhost:5000/post/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(likeData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("like Successfully");

        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      });
  };
  const totallike = likes + likeCount;

  console.log(totallike);
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
        <div>
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
        </div>
        <div className="">
          <div className="flex items-center justify-between border-y px-10 py-3 mb-2">
            <button
              onClick={() => {
                handleLike(_id);
              }}
              type="button"
            >
              <img src={likeImage} className="w-7 h-6 fill-current" alt="" />
            </button>
            <button
              type="button"
              title="Add a comment"
              className="flex items-center justify-center "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-7 h-6 fill-current"
              >
                <path d="M496,496H480a273.39,273.39,0,0,1-179.025-66.782l-16.827-14.584C274.814,415.542,265.376,416,256,416c-63.527,0-123.385-20.431-168.548-57.529C41.375,320.623,16,270.025,16,216S41.375,111.377,87.452,73.529C132.615,36.431,192.473,16,256,16S379.385,36.431,424.548,73.529C470.625,111.377,496,161.975,496,216a171.161,171.161,0,0,1-21.077,82.151,201.505,201.505,0,0,1-47.065,57.537,285.22,285.22,0,0,0,63.455,97L496,457.373ZM294.456,381.222l27.477,23.814a241.379,241.379,0,0,0,135,57.86,317.5,317.5,0,0,1-62.617-105.583v0l-4.395-12.463,9.209-7.068C440.963,305.678,464,262.429,464,216c0-92.636-93.309-168-208-168S48,123.364,48,216s93.309,168,208,168a259.114,259.114,0,0,0,31.4-1.913Z"></path>
              </svg>
            </button>
            <button
              type="button"
              title="Share post"
              className="flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-7 h-6 fill-current"
              >
                <path d="M474.444,19.857a20.336,20.336,0,0,0-21.592-2.781L33.737,213.8v38.066l176.037,70.414L322.69,496h38.074l120.3-455.4A20.342,20.342,0,0,0,474.444,19.857ZM337.257,459.693,240.2,310.37,389.553,146.788l-23.631-21.576L215.4,290.069,70.257,232.012,443.7,56.72Z"></path>
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap items-center pt-3 pb-1">
            <div className="flex items-center space-x-2">
              {totallike > 0 && (
                <h1 className="text-sm">
                  Liked by
                  <span className="font-semibold"> {totallike} others</span>
                </h1>
              )}
            </div>
          </div>
          <div className="space-y-3">
            <h1 className="text-sm ">
              {resendComment?.slice(0, 2).map((comment) => (
                <AllComment comment={comment} key={comment._id} />
              ))}
            </h1>
            {resendComment?.length > 2 && (
              <Link to={`/media/${_id}`}>
                <h1 className="text-sm text-gray-500">
                  View all {resendComment?.length} comments
                </h1>
              </Link>
            )}
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
