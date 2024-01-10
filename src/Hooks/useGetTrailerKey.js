import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { setKey } from "../components/movies/moviesSlice";

const useGetTrailerKey = async (movies, randomMovieid) => {
  const dispatch = useDispatch();

  const movieId = movies[randomMovieid]?.id;
  const getVideosRelatedToMovies = async () => {
    try {
      if (!movieId) return;
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const data = await res.json();
      const trailers = data.results.filter((movie) => movie.type === "Trailer");
      const trailerKey = trailers ? trailers[0].key : data.results[0].key;
      dispatch(setKey(trailerKey));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getVideosRelatedToMovies();
  }, [movieId]);
};

export default useGetTrailerKey;
