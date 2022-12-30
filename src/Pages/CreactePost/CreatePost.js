import { CameraIcon } from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addPost, imageUpload } from "../../api/ImageUpload";
import PrimaryButton from "../../components/Button/PrimaryButton";
import SmallSpinner from "../../components/Spinner/SmallSpinner";
import { AuthContext } from "../../contexts/AuthProvider";
import { format } from "date-fns";

const CreatePost = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const posttext = event.target.posttext.value;

    const date = format(new Date(), "PP");
    const time = format(new Date(), "p");
    // console.log(date, time);
    // Image Upload
    const image = event.target.image.files[0];
    // console.log(posttext, name, date, time);
    setLoading(true);
    // console.log(image);
    imageUpload(image)
      .then((res) => {
        const postData = {
          posttext,
          date,
          time,
          image: res?.data?.display_url,
          email: user?.email,
          authorImage: user?.photoURL,
          authorName: user?.displayName,
          likes: 0,
        };
        // console.log(postData);
        addPost(postData).then((data) => {
          // console.log(data);
          setLoading(false);
          toast.success("post Successfuly !");
          event.target.reset();
          navigate("/media");
        });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
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
          <div className="flex ">
            <div className="w-12 mr-5 btn-circle avatar">
              <img src={user?.photoURL} className="rounded-full" alt="" />
            </div>
            <div>
              <textarea
                required
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
                  classes="w-full px-5 py-3 font-semibold rounded-lg  text-white"
                >
                  {loading ? <SmallSpinner /> : "Post"}
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

export default CreatePost;
