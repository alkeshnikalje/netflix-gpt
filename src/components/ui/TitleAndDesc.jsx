import React from "react";

import PlayButton from "./PlayButton";
import InfoButton from "./InfoButton";

function TitleAndDesc() {
  return (
    <div>
      <h1>movie title here</h1>
      <p className="w-1/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis sint
        fugiat architecto quo voluptates deleniti ducimus doloremque. Nobis amet
        aperiam, praesentium exercitationem corporis vitae possimus rerum
        placeat odio delectus tenetur.
      </p>
      <div className="flex gap-2">
        <PlayButton />
        <InfoButton />
      </div>
    </div>
  );
}

export default TitleAndDesc;
