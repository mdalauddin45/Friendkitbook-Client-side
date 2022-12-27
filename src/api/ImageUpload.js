export const imageUpload = async (image) => {
  // console.log(image);
  if (image) {
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;

    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data;
  }
};

export const addPost = async (postData) => {
  const response = await fetch(`http://localhost:5000/posts`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("friendkitbook-token")}`,
    },
    body: JSON.stringify(postData),
  });

  const data = await response.json();
  return data;
};
export const addComment = async (commentData) => {
  const response = await fetch(`http://localhost:5000/comments`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${localStorage.getItem("friendkitbook-token")}`,
    },
    body: JSON.stringify(commentData),
  });

  const data = await response.json();
  return data;
};
