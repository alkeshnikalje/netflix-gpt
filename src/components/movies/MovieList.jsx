import React from "react";
import MovieItem from "./MovieItem";

import { movieImgUlr } from "../../utils/constants";
function MovieList({ moviesCategory, movies }) {
  return (
    <div className="-mt-28">
      <p className="mb-1 text-white font-semibold text-xl">{moviesCategory}</p>
      <div className="flex gap-2 overflow-x-scroll">
        {movies.map((movie, index) => (
          <MovieItem
            key={movie.id}
            backGroundImg={movieImgUlr + movie.backdrop_path}
            title={movie.original_title}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
