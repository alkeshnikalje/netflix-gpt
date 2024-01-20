import { useSelector } from "react-redux";

import MovieList from "../movies/MovieList";

function MyList() {
  const myMovieList = useSelector((store) => store.myMovies.myMovieList);
  return (
    <div className="h-svh bg-stone-800">
      <MovieList moviesCategory="My List" movies={myMovieList} />
    </div>
  );
}

export default MyList;
