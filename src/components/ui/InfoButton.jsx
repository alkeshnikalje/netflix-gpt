import React from "react";
import { Link } from "react-router-dom";

function InfoButton({ movieId }) {
  return (
    <Link to={`/browse/${movieId}`}>
      <button className="text-white text-lg  bg-stone-500 py-1 px-10 rounded-sm bg-opacity-70 hover:bg-opacity-60 font-semibold transition-all duration-200">
        More Info
      </button>
    </Link>
  );
}

export default InfoButton;
