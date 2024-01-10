import React, { useEffect } from "react";
import { API_OPTIONS } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setKey } from "./moviesSlice";

function BackGroundVideo() {
  const dispatch = useDispatch();
  const { movies, randomMovieid, trailerKey } = useSelector(
    (store) => store.movies
  );
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
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default BackGroundVideo;
