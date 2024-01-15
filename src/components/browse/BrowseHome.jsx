import TitleAndDesc from "../movies/TitleAndDesc";
import BackGroundVideo from "../movies/BackGroundVideo";
import useFetchMovies from "../../Hooks/useFetchMovies";
import {
  NOW_PLAYING,
  POPULAR,
  TOP_RATED,
  UPCOMING,
} from "../../utils/constants";
import MovieListContainer from "../movies/MovieListContainer";
function BrowseHome() {
  useFetchMovies(NOW_PLAYING);
  useFetchMovies(POPULAR);
  useFetchMovies(TOP_RATED);
  useFetchMovies(UPCOMING);

  return (
    <>
      <div className="bg-gradient-to-r  from-black">
        <BackGroundVideo />

        <TitleAndDesc />
      </div>
      <MovieListContainer />
    </>
  );
}

export default BrowseHome;
