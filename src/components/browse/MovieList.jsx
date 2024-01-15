import React from "react";
import MovieItem from "./MovieItem";
import { useSelector } from "react-redux";
import { movieImgUlr } from "../../utils/constants";
function MovieList({ moviesCategory, gradient }) {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);
  return (
    <div className="z-40 -mt-28">
      <p className="mb-5 text-white font-semibold text-xl">{moviesCategory}</p>
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
