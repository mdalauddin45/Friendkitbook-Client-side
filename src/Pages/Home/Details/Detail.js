import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { addComment } from "../../../api/ImageUpload";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import SmallSpinner from "../../../components/Spinner/SmallSpinner";
import { AuthContext } from "../../../contexts/AuthProvider";
import AllComment from "./AllComment";

const Detail = () => {
  const postData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  // console.log(postData);
  const { authorName, authorImage, date, time, _id } = postData;
  useEffect(() => {
    fetch(`http://localhost:5000/comment/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setComments(data);
      });
  }, [loading]);
  // console.log(comments);
  const handleSubmit = (event) => {
    event.preventDefault();
    const comment = event.target.comment.value;
    // console.log(comment);
    const commentData = {
      commentText: comment,
      userImage: user?.photoURL,
      userName: user?.displayName,
      _id,
      time,
      date,
    };
    console.log(commentData);
    addComment(commentData).then((data) => {
      console.log(data);
      toast.success("Comment Successfuly !");
      event.target.reset();
      setLoading(true);
    });
  };
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
          <div className="space-y-3">
            <p className="text-sm">
              <span className="text-base font-semibold">leroy_jenkins72</span>
              Nemo ea quasi debitis impedit!
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
                Post comment
              </PrimaryButton>
            </form>
          </div>
          {comments.map((comment) => (
            <AllComment key={comment?._id} comment={comment}></AllComment>
          ))}
          <button type="button" className="self-start">
            Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
