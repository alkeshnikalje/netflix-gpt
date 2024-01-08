import React from "react";
import HomeHeader from "./HomeHeader";
import FirstMain from "./FirstMain";
import SecondMain from "./SecondMain";
import ThirdMain from "./ThirdMain";
import ForthMain from "./ForthMain";
import Accordian from "./Accordian";
import useOnAuthStateChanged from "../../Hooks/useOnAuthStateChanged.js";
function Home() {
  useOnAuthStateChanged();
  return (
    <div>
      <HomeHeader />
      <FirstMain />
      <SecondMain />
      <ThirdMain />
      <ForthMain />
      <Accordian />
    </div>
  );
}

export default Home;
