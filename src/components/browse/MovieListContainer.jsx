import React from "react";
import MovieList from "./MovieList";

function MovieListContainer() {
  return (
    <div className="pl-3 pb-16 bg-stone-800 flex flex-col gap-40">
      <MovieList moviesCategory="Now Playing" />
    </div>
  );
}

export default MovieListContainer;
