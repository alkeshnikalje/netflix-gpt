import React from "react";
import { DEFAULT_IMG_URL } from "../../utils/constants";
import { IoLogOutOutline } from "react-icons/io5";
import { signOutUser } from "../../utils/authOperations";
import { useNavigate } from "react-router-dom";

function UserProfile({ username, imageUrl }) {
  const navigate = useNavigate();
  const handleClick = async () => {
    await signOutUser();
    navigate("/login");
  };
  return (
    <div className="flex items-center">
      <div className="rounded-md overflow-hidden">
        <img src={DEFAULT_IMG_URL} alt="profile photo" />
      </div>

      <p className="ml-3 mr-6 text-white text-sm font-semibold">{username}</p>

      <button className="text-white text-lg" onClick={handleClick}>
        <IoLogOutOutline />
      </button>
    </div>
  );
}

export default UserProfile;
