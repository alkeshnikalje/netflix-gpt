import React, { useEffect } from "react";
import TitleAndDesc from "../movies/TitleAndDesc";
import BackGroundVideo from "../movies/BackGroundVideo";
import { API_OPTIONS, getRandomIndex } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovies, setMovieId } from "../movies/moviesSlice";

function BrowseHome() {
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies.movies);
  const getNowPlayingMovies = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing",
        API_OPTIONS
      );
      const data = await res.json();
      const nowPlayingMovies = data.results;

      dispatch(addMovies(nowPlayingMovies));
      const randomeId = getRandomIndex(nowPlayingMovies);
      dispatch(setMovieId(randomeId));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  return (
    <>
      <div className="bg-gradient-to-r  from-black">
        <BackGroundVideo />

        <TitleAndDesc />
      </div>
    </>
  );
}

export default BrowseHome;
