import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const RightSideNav = () => {
  const { user } = useContext(AuthContext);
  const [dbUser, setDbUser] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/users`)
      .then((res) => res.json())
      .then((data) => {
        setDbUser(data);
      });
  }, []);
  console.log(dbUser);
  const userMatch = [...dbUser]?.find((x) => x.email === user?.email);
  console.log(userMatch);

  return (
    <div>
      <h1>People You may know</h1>
      <div>
        <div className="avatar online">
          <div className="w-24 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
