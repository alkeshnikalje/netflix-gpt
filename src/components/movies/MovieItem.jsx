import React from "react";
import { Link } from "react-router-dom";
import AddRemoveWithPopver from "../ui/AddRemoveWithPopover";

function MovieItem({ backGroundImg, title, movieId, movie }) {
  return (
    <div className="hover:cursor-pointer relative">
      <Link to={`/browse/${movieId}`}>
        <div className="w-56 rounded-[3px] overflow-hidden">
          <img src={backGroundImg} alt="backdrop-poster" />
        </div>
      </Link>
      <p className="text-[10px] font-semibold  text-white absolute bg-black bg-opacity-50 top-0 left-0 px-2 py-1">
        {title}
      </p>
      <AddRemoveWithPopver movieId={movieId} movie={movie} />
    </div>
  );
}

export default MovieItem;
