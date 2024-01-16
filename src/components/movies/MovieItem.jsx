import React from "react";
import { Link } from "react-router-dom";

function MovieItem({ backGroundImg, title, movieId }) {
  return (
    <Link to={`/browse/${movieId}`}>
      <div className="hover:cursor-pointer relative">
        <div className="w-56 rounded-[3px] overflow-hidden">
          <img src={backGroundImg} alt="backdrop-poster" />
        </div>
        <p className="text-[10px] font-semibold  text-white absolute bg-black bg-opacity-50 top-0 left-0 px-2 py-1">
          {title}
        </p>
      </div>
    </Link>
  );
}

export default MovieItem;
