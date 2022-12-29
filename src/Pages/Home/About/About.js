import React, { useContext, useState } from "react";
import { useEffect } from "react";
import PrimaryButton from "../../../components/Button/PrimaryButton";
import { AuthContext } from "../../../contexts/AuthProvider";
import AboutModal from "./AboutModal";

const About = () => {
  const { user } = useContext(AuthContext);
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/about/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAbouts(data);
      });
  }, []);
  console.log(abouts);

  const handleModalSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const university = event.target.university.value;
    const address = event.target.address.value;
    const Update = {
      name,
      email,
      university,
      address,
    };
    console.log(Update);
    // fetch(` https://assignment-11-server-kappa.vercel.app/review/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(Update),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // console.log(data);
    //     if (data.success) {
    //       toast.success(data.message);
    //       navigate("/review");
    //     } else {
    //       toast.error(data.error);
    //     }
    //   })
    //   .catch((err) => toast.error(err));
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
          src={user.photoURL}
          alt=""
          className="w-32 h-32 mb-2 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <hr className="pt-2" />
        <div className="space-y-4 text-center divide-y ">
          <div className="my-2 space-y-1">
            <h2 className="text-2xl font-semibold sm:text-2xl">
              {user?.displayName}
            </h2>
            <h1 className="px-5 ">
              Email :
              <span className="pl-1">{user?.email ? user?.email : "N/A"}</span>
            </h1>
            <h1 className="px-5 ">
              University Name:
              <span className="pl-1">
                {user?.universityName ? user?.universityName : "N/A"}
              </span>
            </h1>
            <h1 className="px-5 ">
              Address:
              <span className="pl-1">
                {user?.address ? user?.address : "N/A"}
              </span>
            </h1>
          </div>
        </div>
      </div>
      <AboutModal user={user} handleModalSubmit={handleModalSubmit} />
    </div>
  );
};

export default About;
