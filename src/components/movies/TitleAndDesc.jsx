import React from "react";

import PlayButton from "../ui/PlayButton";
import InfoButton from "../ui/InfoButton";
import { useSelector } from "react-redux";

function TitleAndDesc() {
  const { movies, randomMovieid } = useSelector((store) => store.movies);

  return (
    <>
      <div className="px-10 text-white absolute top-[57px] z-1 bg-gradient-to-b from-black w-full pt-80">
        <h1 className="text-5xl font-semibold mb-4">
          {movies[randomMovieid]?.original_title}
        </h1>
        <p className="w-[40%] mb-4 text-lg">
          {movies[randomMovieid]?.overview}
        </p>
        <div className="flex gap-2">
          <PlayButton />
          <InfoButton />
        </div>
      </div>
    </>
  );
}

export default TitleAndDesc;
