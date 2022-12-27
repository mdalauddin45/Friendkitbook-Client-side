import React, { useEffect, useState } from "react";
import SignlePost from "./SignlePost";

const Allpost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  console.log(posts);
  return (
    <div>
      <h1>this is allpost</h1>
      {posts.map((post) => (
        <SignlePost post={post} key={post?._id}></SignlePost>
      ))}
    </div>
  );
};

export default Allpost;
