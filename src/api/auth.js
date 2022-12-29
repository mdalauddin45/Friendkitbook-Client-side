export const setAuthToken = (user) => {
  // console.log(user);
  const currentUser = {
    email: user.email,
  };

  //   Save user in db & get token
  fetch(`http://localhost:5000/user/${user?.email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      //Save token in LocalStorage
      localStorage.setItem("friendkitbook-token", data.token);
    });
};

// export const likePost = (id, userId) =>
//   API.put(`posts/${id}/like`, { userId: userId });

// export const likePost = async (id, userName) => {
//   const response = await fetch(`http://localhost:5000/like/${id}`, {
//     method: "PUT",
//     headers: {
//       "content-type": "application/json",
//       authorization: `Bearer ${localStorage.getItem("friendkitbook-token")}`,
//     },
//     body: JSON.stringify(id, userName),
//   });

//   const data = await response.json();
//   return data;
// };
