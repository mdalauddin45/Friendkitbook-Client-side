import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar shadow-lg">
      <div className="navbar-start">
        <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
      </div>
      <div className="navbar-center hidden md:flex lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link>
              {" "}
              <FontAwesomeIcon icon={faHouse} /> Home
            </Link>
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
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link>Profile</Link>
            </li>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
