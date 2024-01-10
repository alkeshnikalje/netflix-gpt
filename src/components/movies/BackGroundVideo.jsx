import React from "react";

import useGetTrailerKey from "../../Hooks/useGetTrailerKey";
import { useSelector } from "react-redux";
function BackGroundVideo() {
  const { movies, randomMovieid, trailerKey } = useSelector(
    (store) => store.movies
  );

  useGetTrailerKey(movies, randomMovieid);

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
