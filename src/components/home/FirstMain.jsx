import React from "react";

function FirstMain() {
  return (
    <div className="bg-black pt-12 pb-14 border-b-[6px] border-gray-800">
      <div className="w-[60%] mx-auto">
        <div className="flex items-center gap-2">
          <div className="text-white">
            <h1 className="text-4xl font-bold mb-5">Enjoy on your TV</h1>
            <p className="text-lg">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div>
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstMain;
