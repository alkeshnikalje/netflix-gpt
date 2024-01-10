import { useDispatch } from "react-redux";
import { API_OPTIONS, getRandomIndex } from "../utils/constants";
import { addMovies, setMovieId } from "../components/movies/moviesSlice";
import { useEffect } from "react";

const useFetchMovies = async () => {
  const dispatch = useDispatch();
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
};

export default useFetchMovies;
