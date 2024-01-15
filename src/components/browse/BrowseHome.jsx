import TitleAndDesc from "../movies/TitleAndDesc";
import BackGroundVideo from "../movies/BackGroundVideo";
import useFetchMovies from "../../Hooks/useFetchMovies";
import MovieListContainer from "./MovieListContainer";
import { NOW_PLAYING } from "../../utils/constants";
function BrowseHome() {
  useFetchMovies(NOW_PLAYING);

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
