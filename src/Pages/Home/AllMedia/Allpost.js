import React, { useEffect, useState } from "react";
import SignlePost from "./SignlePost";

const Allpost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://server-side-ten.vercel.app/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(true);
      });
  }, [loading]);
  // console.log(posts);
  return (
    <div>
      {posts.map((post) => (
        <SignlePost post={post} key={post?._id}></SignlePost>
      ))}
    </div>
  );
};

export default Allpost;
