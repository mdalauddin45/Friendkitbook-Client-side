import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { CameraIcon } from "@heroicons/react/24/solid";
import PrimaryButton from "../../../components/Button/PrimaryButton";

const PostWrite = () => {
  const { loading, user } = useContext(AuthContext);
  const [preview, setPreview] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    // Image Upload
    const image = event.target.image.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        const userData = {
          name,
          email,
          image: imageData.data.display_url,
        };
        // console.log(userData);
      })
      .catch((err) => console.log(err));
  };

  const handleImageChange = (image) => {
    // console.log(image);
    setPreview(window.URL.createObjectURL(image));
  };
  return (
    <div className="mx-5">
      <div>
        <form
          onSubmit={handleSubmit}
          className=" w-full  border rounded-md shadow-lg px-5  pt-10"
        >
          <div className="flex">
            <div className="">
              <h1> user pic</h1>
            </div>
            <div>
              <textarea
                name="posttext"
                className="textarea w-96"
                placeholder="Write something about you..."
              ></textarea>
            </div>
          </div>
          <div className="">
            <input
              type="file"
              onChange={(event) => handleImageChange(event.target.files[0])}
              name="image"
              id="image"
              accept="image/*"
              hidden
            />

            <label className="label">
              <label htmlFor="image" className="p-3 ">
                <CameraIcon className="h-6 w-6" />
              </label>
              <span className="label-text-alt">
                <PrimaryButton
                  type="submit"
                  classes="w-full px-5 py-3 font-semibold rounded-lg bg-[#3BB77E] text-white"
                >
                  {loading ? "loading" : "Post"}
                </PrimaryButton>
              </span>
            </label>
            {preview && (
              <img src={preview} className="w-16 h-16" alt="preview_img" />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostWrite;
