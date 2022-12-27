import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.jpg";
import PrimaryButton from "../../components/Button/PrimaryButton";
import { AuthContext } from "../../contexts/AuthProvider";
const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="navbar shadow-lg">
      <div className="navbar-start">
        <Link className="flex rounded-lg py-2 font-semibold text-[#5596e6] text-2xl">
          <img src={logo} className="w-8 rounded-full " alt="" />
          <span className="px-1"> FriendKitBook</span>
        </Link>
      </div>
      <div className="navbar-center hidden md:flex lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/media">Media</Link>
          </li>

          <li>
            <Link>Meassage</Link>
          </li>

          <li>
            <Link>About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Profile</Link>
            </li>
            <div className="lg:hidden md:hidden">
              <li>
                <Link>Home</Link>
              </li>

              <li>
                <Link>Media</Link>
              </li>

              <li>
                <Link>Meassage</Link>
              </li>

              <li>
                <Link>About</Link>
              </li>
            </div>
            {user?.email ? (
              <>
                <li>
                  <PrimaryButton handler={logout}>logout</PrimaryButton>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
