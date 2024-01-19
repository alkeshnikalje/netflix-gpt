import { useParams } from "react-router-dom";
import useFetchMovieDetails from "../../Hooks/useFetchMovieDetails";
import { useDispatch, useSelector } from "react-redux";
import { addMovieToMyList, removeFromMyList } from "../user/userMoviesSlice";
function MovieDetails({}) {
  const myMovies = useSelector((store) => store.myMovies.myMovieList);
  const dispatch = useDispatch();
  const params = useParams();
  const { movieId } = params;

  const movie = useFetchMovieDetails(movieId);
  if (!movie) return <div className="bg-stone-800 h-screen"></div>;
  const moveExists = myMovies.find((movie) => movie.id == movieId);

  return (
    <div className="bg-stone-800 pb-[70px]">
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
            {!moveExists ? (
              <button
                className="bg-white text-black px-6 rounded-sm font-semibold py-1"
                onClick={() => dispatch(addMovieToMyList({ movieId, movie }))}
              >
                Add to my list
              </button>
            ) : (
              <button
                className="bg-white text-black px-6 rounded-sm font-semibold py-1"
                onClick={() => dispatch(removeFromMyList(movieId))}
              >
                Remove from my list
              </button>
            )}
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
