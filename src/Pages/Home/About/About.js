import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import { AuthContext } from "../../../contexts/AuthProvider";
import AboutModal from "./AboutModal";

const About = () => {
  const { user } = useContext(AuthContext);
  const [dbUser, setDbUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => {
        setDbUser(data);
        setLoading(false);
      });
  }, [loading]);
  // console.log(...dbUser);
  const userMatch = [...dbUser]?.find((x) => x.email === user?.email);
  console.log(userMatch);

  const handleModalSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const university = event.target.university.value;
    const address = event.target.address.value;
    const image = event.target.image.files[0];
    // console.log(name, email, password, image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMGBB_KEY}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData);
        const Update = {
          name,
          email,
          university,
          address,
          image: imageData?.data?.display_url,
        };
        console.log(Update);
        fetch(`http://localhost:5000/user/${userMatch._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Update),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success("Update Successfully");
            setLoading(true);
          });
      });
  };
  return (
    <div>
      <div className="flex justify-end">
        <PrimaryButton classes="px-2 py-2 font-bold ">
          <label htmlFor="booking-modal">Update </label>
        </PrimaryButton>
      </div>

      <div className="flex flex-col justify-center  p-6 shadow-md rounded-xl sm:px-12 ">
        <img
          src={userMatch?.image ? userMatch?.image : user?.photoURL}
          alt=""
          className="w-32 h-32 mb-2 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <hr className="pt-2" />
        <div className="space-y-4 text-center divide-y ">
          <div className="my-2 space-y-1">
            <h2 className="text-2xl font-semibold sm:text-2xl">
              {userMatch?.name}
            </h2>
            <h1 className="px-5 ">
              Email :
              <span className="pl-1">
                {userMatch?.email ? userMatch?.email : "N/A"}
              </span>
            </h1>
            <h1 className="px-5 ">
              University Name:
              <span className="pl-1">
                {userMatch?.university ? userMatch?.university : "N/A"}
              </span>
            </h1>
            <h1 className="px-5 ">
              Address:
              <span className="pl-1">
                {userMatch?.address ? userMatch?.address : "N/A"}
              </span>
            </h1>
          </div>
        </div>
      </div>
      <AboutModal
        user={user}
        handleModalSubmit={handleModalSubmit}
        userMatch={userMatch}
        loading={loading}
      />
    </div>
  );
};

export default About;
