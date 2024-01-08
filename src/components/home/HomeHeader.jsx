import React from "react";
import { Link } from "react-router-dom";

const bgImage = {
  backgroundImage:
    "linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url(https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg)",
};

function HomeHeader() {
  return (
    <div
      className="bg-cover pb-24 border-b-[6px] border-gray-800"
      style={bgImage}
    >
      <div className="bg-gradient-to-b from-black">
        <div className="w-[60%] mx-auto flex justify-between items-center pt-2">
          <div className="h-10 w-36">
            <img
              src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="logo"
              className=""
            />
          </div>

          <Link
            className="bg-[#E50914] px-3 py-1 text-white rounded-[4px] text-sm font-semibold hover:bg-red-700 transition-all duration-300"
            to="/login"
          >
            Sign in
          </Link>
        </div>
      </div>

      <div className="w-[60%] mx-auto text-center mt-36 text-white">
        <h1 className="text-4xl mb-4 font-bold">
          Unlimited movies, TV shows and more
        </h1>
        <p className="text-xl">Watch anywhere. Cancel anytime.</p>
      </div>
    </div>
  );
}

export default HomeHeader;
