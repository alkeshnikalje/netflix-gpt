import TitleAndDesc from "../movies/TitleAndDesc";
import BackGroundVideo from "../movies/BackGroundVideo";
import useFetchMovies from "../../Hooks/useFetchMovies";
function BrowseHome() {
  useFetchMovies();

  return (
    <>
      <div className="bg-gradient-to-r  from-black">
        <BackGroundVideo />

        <TitleAndDesc />
      </div>
    </>
  );
}

export default BrowseHome;
