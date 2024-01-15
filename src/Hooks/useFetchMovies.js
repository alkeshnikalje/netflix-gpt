import { useDispatch } from "react-redux";
import { API_OPTIONS, getRandomIndex } from "../utils/constants";
import { addMovies, setMovieId } from "../components/movies/moviesSlice";
import { useEffect } from "react";

const useFetchMovies = async (category) => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${category}`,
        API_OPTIONS
      );
      const data = await res.json();
      const movies = data.results;

      dispatch(addMovies({ category, movies }));
      if (category !== "now_playing") return;
      const randomeId = getRandomIndex(movies);
      dispatch(setMovieId(randomeId));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
};

export default useFetchMovies;
