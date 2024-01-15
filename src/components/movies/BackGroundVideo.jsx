import React from "react";

import useGetTrailerKey from "../../Hooks/useGetTrailerKey";
import { useSelector } from "react-redux";
function BackGroundVideo() {
  const isSoundOn = useSelector((store) => store.movies.trailerSoundOn);
  const { nowPlayingMovies, randomMovieid, trailerKey } = useSelector(
    (store) => store.movies
  );

  useGetTrailerKey(nowPlayingMovies, randomMovieid);

  return (
    <div className="overflow-x-hidden">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1${
          !isSoundOn ? "&mute=1" : ""
        }`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default BackGroundVideo;
