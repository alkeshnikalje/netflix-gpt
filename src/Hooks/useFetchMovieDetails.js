import { API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";
const useFetchMovieDetails = (movieId) => {
  const [movie, setMovie] = useState(null);
  const getMovieDetails = async () => {
    try {
      if (!movieId) return;
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        API_OPTIONS
      );
      const data = await res.json();
      setMovie(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return movie;
};

export default useFetchMovieDetails;
