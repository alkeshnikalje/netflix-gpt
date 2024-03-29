import React from "react";
import MovieItem from "./MovieItem";

import { movieImgUlr } from "../../utils/constants";
import { useSelector } from "react-redux";
function MovieList({ moviesCategory, movies }) {
  const user = useSelector((store) => store.user.displayName);
  if (moviesCategory === "My List") {
    return (
      <div className="w-3/4 mx-auto p-11">
        <p className="mb-4 text-white font-semibold text-xl">{`${user}'s Movies List`}</p>
        <div className="flex gap-3 flex-wrap">
          {movies.map((movie, index) => (
            <MovieItem
              movie={movie}
              key={movie.id}
              backGroundImg={movieImgUlr + movie.backdrop_path}
              title={movie.original_title}
              movieId={movie.id}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="-mt-28">
      <p className="mb-1 text-white font-semibold text-xl">{moviesCategory}</p>
      <div className="flex gap-2 overflow-x-scroll">
        {movies.map((movie, index) => (
          <MovieItem
            key={movie.id}
            backGroundImg={movieImgUlr + movie.backdrop_path}
            title={movie.original_title}
            movieId={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
