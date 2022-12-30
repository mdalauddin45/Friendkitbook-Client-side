import React, { useEffect, useState } from "react";
import SignlePost from "../AllMedia/SignlePost";

const TopPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(true);
      });
  }, [loading]);
  const topPost = posts?.sort((a, b) => b.likes - a.likes);
  console.log(topPost.slice(0, 3));
  return (
    <div>
      {topPost.slice(0, 3).map((post) => (
        <SignlePost post={post} key={post?._id}></SignlePost>
      ))}
    </div>
  );
};

export default TopPost;
