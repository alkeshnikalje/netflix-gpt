import TitleAndDesc from "../movies/TitleAndDesc";
import BackGroundVideo from "../movies/BackGroundVideo";
import useFetchMovies from "../../Hooks/useFetchMovies";
import MovieListContainer from "./MovieListContainer";
function BrowseHome() {
  useFetchMovies();

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
