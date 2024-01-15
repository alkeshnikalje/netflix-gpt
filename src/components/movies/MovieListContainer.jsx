import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
function MovieListContainer() {
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } =
    useSelector((store) => store.movies);

  return (
    <div className="pl-3 pb-16 bg-stone-800 flex flex-col gap-40">
      <MovieList moviesCategory="Now Playing" movies={nowPlayingMovies} />
      <MovieList moviesCategory="Popular" movies={popularMovies} />
      <MovieList moviesCategory="Top Rated" movies={topRatedMovies} />
      <MovieList moviesCategory="Upcoming" movies={upcomingMovies} />
    </div>
  );
}

export default MovieListContainer;
