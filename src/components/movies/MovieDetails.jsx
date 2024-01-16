import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_OPTIONS } from "../../utils/constants";

function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const { movieId } = params;
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

  if (!movie) return;

  return (
    <div className="bg-stone-800 h-screen">
      <div className="w-[500px] mx-auto pt-8">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          alt="backdrop-img"
        />
        <div className="text-white flex gap-5 ml-4 -mt-10 z-30">
          <div className="w-[170px] rounded-md overflow-hidden">
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt="poster-img"
            />
          </div>
          <div className="self-center">
            {" "}
            <p className="text-2xl font-semibold mb-1">
              {movie.original_title}
            </p>
            <p className="mb-6">Rating-{` ${movie.vote_average}`}⭐</p>
            <button className="bg-white text-black px-6 rounded-sm font-semibold py-1">
              Add to my list
            </button>
          </div>
        </div>
        <div className="text-white ml-4 mt-5">
          <h1 className="text-md ">Overview -</h1>
          <p className="mt-2 text-lg">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
