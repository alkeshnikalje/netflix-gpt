import React from "react";
import { Link, NavLink } from "react-router-dom";
import useOnAuthStateChanged from "../../Hooks/useOnAuthStateChanged.js";
import { useSelector } from "react-redux";
import UserProfile from "../user/UserProfile.jsx";
function Header() {
  const user = useSelector((store) => store.user);
  useOnAuthStateChanged();

  const userDoesNotExist = (
    <div className="h-14 w-40 ml-10 mr-6 bg-gradient-to-b from-black">
      <Link to="/">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </Link>
    </div>
  );

  if (!user) return userDoesNotExist;

  return (
    <div className="flex justify-between py-3 bg-stone-900 pr-4 bg-gradient-to-b from-black">
      <div className=" flex items-center">
        <div className="h-8 w-24 ml-10 mr-6">
          <Link to="/">
            <img
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="logo"
            />
          </Link>
        </div>
        <ul className="list-none flex gap-6 text-xs text-gray-300 font-semibold">
          <li>
            <NavLink
              to="/browse"
              end
              className={({ isActive }) =>
                isActive
                  ? "text-white cursor-default"
                  : "hover:opacity-80 transition-all duration-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/browse/tvshows"
              className={({ isActive }) =>
                isActive
                  ? "text-white cursor-default"
                  : "hover:opacity-80 transition-all duration-300"
              }
            >
              TV Shows
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/browse/movies"
              className={({ isActive }) =>
                isActive
                  ? "text-white cursor-default"
                  : "hover:opacity-80 transition-all duration-300"
              }
            >
              Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/browse/mylist"
              className={({ isActive }) =>
                isActive
                  ? "text-white cursor-default"
                  : "hover:opacity-80 transition-all duration-300"
              }
            >
              My List
            </NavLink>
          </li>
        </ul>
      </div>
      <UserProfile username={user?.displayName} imageUrl={user?.photoURL} />
    </div>
  );
}

export default Header;
