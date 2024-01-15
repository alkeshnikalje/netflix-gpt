import React from "react";

function MovieItem({ backGroundImg, title }) {
  return (
    <div>
      <p className="hidden">{title}</p>
      <div className="w-56 rounded-[3px] overflow-hidden  hover:cursor-pointer ">
        <img src={backGroundImg} alt="backdrop-poster" />
      </div>
    </div>
  );
}

export default MovieItem;
